import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from '@neomatrix/ui'

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
    args: {
        tabs: [
            { id: 'tab1', label: 'General', content: 'This is the general settings content.' },
            { id: 'tab2', label: 'Account', content: 'This is the account information content.' },
            { id: 'tab3', label: 'Privacy', content: 'This is the privacy settings content.' },
        ],
    },
}

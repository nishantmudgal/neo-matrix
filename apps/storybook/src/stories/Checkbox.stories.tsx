import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '@neomatrix/ui'

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    args: {
        label: 'Accept terms and conditions',
    },
}

export const Checked: Story = {
    args: {
        label: 'I am checked',
        defaultChecked: true,
    },
}

export const Disabled: Story = {
    args: {
        label: 'I am disabled',
        disabled: true,
    },
}

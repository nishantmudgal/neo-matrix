import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link } from '@neomatrix/ui'

const meta: Meta<typeof Link> = {
    title: 'Components/Link',
    component: Link,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
    args: {
        children: 'Visit Website',
        href: 'https://example.com',
        target: '_blank',
    },
}

export const Ghost: Story = {
    args: {
        children: 'Read More',
        variant: 'ghost',
        href: '#',
    },
}

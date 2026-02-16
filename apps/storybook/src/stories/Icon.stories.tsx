import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from '@neomatrix/ui'

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

const SampleSvg = (
    <svg viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
)

export const Default: Story = {
    args: {
        children: SampleSvg,
        size: 'md',
    },
}

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Icon size="sm">{SampleSvg}</Icon>
            <Icon size="md">{SampleSvg}</Icon>
            <Icon size="lg">{SampleSvg}</Icon>
            <Icon size="xl">{SampleSvg}</Icon>
        </div>
    ),
}

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Icon color="#ef4444">{SampleSvg}</Icon>
            <Icon color="#10b981">{SampleSvg}</Icon>
            <Icon color="#3b82f6">{SampleSvg}</Icon>
            <Icon color="var(--nm-color-primary)">{SampleSvg}</Icon>
        </div>
    ),
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '@neomatrix/ui'

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
    args: {
        children: 'The quick brown fox jumps over the lazy dog',
    },
}

export const Headlines: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Text as="h1" size="xl" weight="bold">Heading 1</Text>
            <Text as="h2" size="lg" weight="bold">Heading 2</Text>
            <Text as="h3" size="md" weight="bold">Heading 3</Text>
        </div>
    ),
}

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Text size="xs">Extra Small Text</Text>
            <Text size="sm">Small Text</Text>
            <Text size="md">Medium Text (Default)</Text>
            <Text size="lg">Large Text</Text>
            <Text size="xl">Extra Large Text</Text>
        </div>
    ),
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, Text, Button } from '@neomatrix/ui'

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
    args: {
        children: (
            <>
                <Text weight="bold" size="lg">Card Title</Text>
                <Text color="gray">This is a simple card component with some content inside it.</Text>
            </>
        ),
    },
}

export const WithAction: Story = {
    args: {
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Text weight="bold" size="lg">Card with Action</Text>
                <Text>Click the button below to perform an action.</Text>
                <Button>Click Me</Button>
            </div>
        ),
    },
}

export const CustomPadding: Story = {
    args: {
        padding: 'lg',
        children: <Text>Card with large padding</Text>,
    },
}

import Button from './index'

import type { Story, Meta } from '@storybook/react'

type ButtonProps = React.ComponentProps<typeof Button>

const ButtonStory: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: {
    theme: 'primary',
    size: 'default',
    children: 'A button',
    onClick: () => { alert('onClick!') }
  }
}

export default ButtonStory

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})

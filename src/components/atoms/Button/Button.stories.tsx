import { Button, ButtonProps } from './index'

import type { Story, Meta } from '@storybook/react'

const ButtonStory: Meta<ButtonProps> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'A button',
      control: 'text'
    },
    theme: { defaultValue: 'primary' },
    size: { defaultValue: 'default' }
  }
}

export default ButtonStory

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})

export const Primary = Template.bind({})

Primary.args = {
  theme: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary'
}

export const Big = Template.bind({})
Big.args = {
  size: 'big'
}

export const Jumbo = Template.bind({})
Jumbo.args = {
  size: 'jumbo'
}

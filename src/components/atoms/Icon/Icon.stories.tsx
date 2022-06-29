import * as icons from '@/components/icons'

import Icon from './index'

import type { Story, Meta } from '@storybook/react'

type IconProps = React.ComponentProps<typeof Icon>

const IconStory: Meta<IconProps> = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    name: 'ArrowRight',
    className: ''
  },
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: { type: 'select' }
    }
  }
}

export default IconStory

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Default = Template.bind({})

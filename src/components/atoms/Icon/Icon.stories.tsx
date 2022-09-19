import Icon from './index'

import type { Story, Meta } from '@storybook/react'

type IconProps = React.ComponentProps<typeof Icon>

const IconStory: Meta<IconProps> = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    name: 'arrow-right',
    className: ''
  }
}

export default IconStory

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Default = Template.bind({})

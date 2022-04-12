import { ButtonLink } from './index'

import type { Story, Meta } from '@storybook/react'

type ButtonLinkProps = React.ComponentProps<typeof ButtonLink>

const ButtonLinkStory: Meta<ButtonLinkProps> = {
  title: 'Components/ButtonLink (Next)',
  component: ButtonLink,
  args: {
    theme: 'primary',
    size: 'default',
    children: 'A button Link',
    href: 'https://www.google.com'
  }
}

export default ButtonLinkStory

const Template: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />

export const Default = Template.bind({})

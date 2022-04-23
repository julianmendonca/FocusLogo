import { ComponentStory, ComponentMeta } from '@storybook/react'

import NavBar from '@/components/NavBar/NavBar'

export default {
    title: 'NavBar/NavBar',
    component: NavBar,
    argTypes: {},
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = () => <NavBar />

export const Primary = Template.bind({})
Primary.args = {}

import SearchBar from '@/components/Input/SearchBar/SearchBar'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    title: 'Input/SearchBar',
    component: SearchBar,
    argTypes: {},
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Buscar productos o categorías',
}

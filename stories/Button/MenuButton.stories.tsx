import MenuButton from '@/components/Button/MenuButton/MenuButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import EditIcon from '@mui/icons-material/Edit'

export default {
    title: 'Button/MenuButton',
    component: MenuButton,
    argTypes: {},
} as ComponentMeta<typeof MenuButton>

const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Opciones',
    options: [
        {
            label: 'Editar',
            icon: <EditIcon />,
            onClick: () => alert('click'),
        },
    ],
}

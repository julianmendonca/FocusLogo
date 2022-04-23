export interface Categoria {
    id: string
    /** Nombre de la categoria */
    description: string
    highlighted: boolean
    icon_url: string
    icon_active_url: string
    marketing_video: string | null
    marketing_imagen: string | null
    marketing_text: string | null
    url: string
    /** Descipcion mas detallada*/
    meta: string
    /** Descripcion breve */
    title: string
    /** Si es true se debe mostrar la categoria, sino no*/
    show: boolean
    /** Si tiene descuento */
    discount: boolean
    attributes: CategoriaAtributo[]
}

export interface CategoriaAtributo {
    id: number
    name: string
    subattributes: CategoriaSubAtributo[]
}

export interface CategoriaSubAtributo {
    id: number
    name: string
}

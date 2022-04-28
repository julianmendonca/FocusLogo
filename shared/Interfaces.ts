// Categorias
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

// Productos

export interface Product {
    id: string
    external_id: string
    name: string
    description: string
    minimum_order_quantity: number
    express_delivery_count: number
    price: string | number
    discount_price: number
    discount_id?: number
    currency: string
    unit_weight?: number
    published: boolean
    published_at?: string
    height: number
    length: number
    units_per_box?: number
    metric_system: boolean
    families: Categoria[]
    images: Imagen[]
    featured: boolean
    tag?: string
    tax: number
    subattributes: CategoriaSubAtributo[]
    products: ProducChildren[]
}

export interface ProducChildren {
    id: number
    general_description?: string
    element_description_1?: string
    element_description_2?: string
    element_description_3?: string
    achromatic: boolean
    stock: number
}
export interface Imagen {
    id: string
    image_url?: string
    small_image_url?: string
    medium_image_url?: string
    main: boolean
    created_at?: string
}

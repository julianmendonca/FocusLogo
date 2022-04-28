import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type BaseSliderProps = {
    elements: React.ReactNode[]
}

export const BaseSlider = ({ elements }: BaseSliderProps) => {
    return (
        <Slider dots slidesPerRow={4} swipeToSlide>
            {elements?.map((element, index) => (
                <div key={index}>{element}</div>
            ))}
        </Slider>
    )
}

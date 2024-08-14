import photo1 from './img/IMG_0400.jpg'
import photo2 from './img/IMG_0569.JPG'
import photo3 from './img/IMG_2387.jpg'
import photo4 from './img/IMG_8692.jpg'
import photo5 from './img/863FC167-1D92-4E6E-BD96-C8A66B0D41AC.JPEG'

export default function PhotoTab() {
    return (
        <div className='grid grid-cols-2 gap-10 mx-32 px-52 pt-20'>
            <img src={photo1} alt=""/>
            <img src={photo2} alt=""/>
            <img src={photo5} alt=""/>
            <img src={photo3} alt=""/>
            <img src={photo4} alt=""/>

        </div>
    )
}
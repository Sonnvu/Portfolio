import pose1 from './img/dynamicpose.jpg'
import pose2 from './img/pose2.jpg'
import pman from './img/portraitman.JPG'
import pwoman from './img/portraitwoman.jpg'
import geto from './img/geto.jpg'
import still from './img/still.jpg'
import hallway from './img/hallway.jpg'
import bottles from './img/bottles.jpg'
import twopoint from './img/twoPoint.jpg'
import twoapples from './img/twoApples.jpg'  
import grisaille from './img/oil_painting.jpg'
import orage_alla_prima from './img/alla_prima_1.jpg'
import statue_woman from './img/pencil_woman_statue.jpg'

export default function ArtTab() {
    return (
        <div className='grid grid-cols-2 gap-10 px-52 pt-20'>
            <img src={orage_alla_prima} alt=""/>
            <img src={grisaille} alt=""/>
            <img src={statue_woman} alt=""/>
            <img src={twoapples} alt=""/>
            <img src={twopoint} alt=""/>
            <img src={hallway} alt=""/>
            <img src={still} alt=""/>
            <img src={bottles} alt=""/>
            <img src={geto} alt=""/>
            <img src={pwoman} alt=""/>
            <img src={pman} alt=""/>
            <img src={pose1} alt=""/>
            <img src={pose2} alt=""/>
        </div>
    )
}
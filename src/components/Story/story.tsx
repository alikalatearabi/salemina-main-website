import { storyText } from "./storyText";
import arrowLeft from '../../assets/icons/arrow-left.svg'
import './style.scss'


export default function story() {
  return (
    <div className='story'>
            <h2>{storyText.title}</h2>
            <p>{storyText.description}</p>
            <div className='storyLink'>
                <span>مشاهده بیشتر</span>
                <img src={arrowLeft} alt='arrowLeftIcon'/>
            </div>
        </div>
  )
}

import { DependencyText } from './dependencyText';
import arrowLeft from '../../assets/icons/arrow-left.svg'
import './style.scss'

const Dependency = () => {
    return (
        <div className='dependency'>
            <h2>{DependencyText.title}</h2>
            <p>{DependencyText.description}</p>
            <div className='dependencyLink'>
                <span>مشاهده بیشتر</span>
                <img src={arrowLeft} alt='arrowLeftIcon'/>
            </div>
        </div>
    );
}

export default Dependency;

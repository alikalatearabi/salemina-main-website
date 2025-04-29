import { DependencyText } from './dependencyText';
import arrowLeft from '../../assets/icons/arrow-left.svg'
import './style.scss'
import { Link } from 'react-router-dom';

const Dependency = () => {
    return (
        <div className='dependency' id="dependency">
            <h2>{DependencyText.title}</h2>
            <p>{DependencyText.description}</p>
            <Link to='/dependency' className='dependencyLink'>
                <span>مشاهده بیشتر</span>
                <img src={arrowLeft} alt='arrowLeftIcon'/>
            </Link>
        </div>
    );
}

export default Dependency;

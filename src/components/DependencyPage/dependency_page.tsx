import dependencyImage from '../../assets/images/dependencyImage.jfif';
import nutritionImage from '../../assets/images/nutritions.png';
import stopSignsImage from '../../assets/images/stopSigns.png';
import healthStickImage from '../../assets/images/healthStick.jpg';
import heartAssociationImage from '../../assets/images/heartAssociation.png';



import { dependencyDescription, howSaleminaWorksText } from './dependecy_page_text';
import Blog from '../Blog/blog';

const DependencyPage = () => {
    return (
        <div>
            <div style={{ fontFamily: 'yekan', direction: 'rtl', background: '#eeeeee' }}>
                <img
                    src={dependencyImage}
                    alt="Dependency"
                    style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        objectPosition: '50% 90%'
                    }} />
                <div
                    style={{
                        background: '#eeeeee',
                        width: '100%',
                        height: '100px',
                        clipPath: 'ellipse(60% 100% at 50% 100%)',
                        transform: 'translateY(-50px)'
                    }}></div>
                <div style={{
                    padding: '0px 80px 0px 80px',
                    background: '#eeeeee',
                }}>
                    <h2 style={{ fontWeight: 'bold', color: '#013C04', fontSize: '35px', marginBottom: '0px' }}>بیانیه استقلال سالمینا</h2>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {dependencyDescription}
                    </p>
                </div>
                <div style={{ padding: '0px 80px' }}>
                    <h2 style={{ fontWeight: 'bold', color: '#013C04', fontSize: '35px', marginBottom: '0px' }}>نحوه کارکرد سالمینا </h2>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {howSaleminaWorksText.nutritionPart}
                    </p>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {howSaleminaWorksText.nutritionPart2}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={nutritionImage} alt="nutritions" style={{ width: '15%', borderRadius: '50px'}} />
                    </div>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {howSaleminaWorksText.stopText}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={stopSignsImage} alt="nutritions" style={{ width: '30%' }} />
                    </div>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {howSaleminaWorksText.foodValuesText}
                    </p>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {howSaleminaWorksText.healthStickText}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={healthStickImage} alt="nutritions" style={{ width: '40%' }} />
                    </div>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {howSaleminaWorksText.overallText}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={heartAssociationImage} alt="nutritions" style={{ width: '40%' }} />
                    </div>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {howSaleminaWorksText.heartAssociationText}
                    </p>
                    <div style={{ marginBottom: '100px' }}></div>
                </div>
                <div >
                    <Blog />
                </div>
            </div>
        </div>
    );
}

export default DependencyPage;

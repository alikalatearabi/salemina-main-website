import dependencyImage from '../../assets/images/dependencyImage.jfif';
import nutritionImage from '../../assets/images/nutritions.png';
import stopSignsImage from '../../assets/images/stopSigns.png';
import healthStickImage from '../../assets/images/healthStick.jpg';
import heartAssociationImage from '../../assets/images/heartAssociation.png';

import './style.scss'



import { dependencyDescription, howSaleminaWorksText } from './dependecy_page_text';
// import Blog from '../Blog/blog';

const DependencyPage = () => {
    return (
      <div className="dependency-page">
        <img src={dependencyImage} alt="Dependency" className="dependency-image" />
        <div className="image-clip"></div>
        <div className="content-section">
          <h2 className="section-title">بیانیه استقلال سالمینا</h2>
          <p className="text-content">{dependencyDescription}</p>
        </div>
        <div className="content-section">
          <h2 className="section-title">نحوه کارکرد سالمینا</h2>
          <p className="text-content">{howSaleminaWorksText.nutritionPart}</p>
          <p className="text-content">{howSaleminaWorksText.nutritionPart2}</p>
          <div className="centered-image">
            <img src={nutritionImage} alt="Nutritions" className="nutrition-image" />
          </div>
          <p className="text-content">{howSaleminaWorksText.stopText}</p>
          <div className="centered-image">
            <img src={stopSignsImage} alt="Stop Signs" className="stop-signs-image" />
          </div>
          <p className="text-content">{howSaleminaWorksText.foodValuesText}</p>
          <p className="text-content">{howSaleminaWorksText.healthStickText}</p>
          <div className="centered-image">
            <img src={healthStickImage} alt="Health Stick" className="health-stick-image" />
          </div>
          <p className="text-content">{howSaleminaWorksText.overallText}</p>
          <div className="centered-image">
            <img src={heartAssociationImage} alt="Heart Association" className="heart-association-image" />
          </div>
          <p className="text-content">{howSaleminaWorksText.heartAssociationText}</p>
          <div className="bottom-space"></div>
        </div>
        {/* <div>
          <Blog />
        </div> */}
      </div>
    );
  };

export default DependencyPage;

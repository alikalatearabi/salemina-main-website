import { storyText } from "./storyText";
import arrowLeft from '../../assets/icons/arrow-left.svg';
import './style.scss';
import { Link } from "react-router-dom";

export default function Story() {
  return (
    <div className="story" id="aboutSection"> {/* Add id */}
      <h2>{storyText.title}</h2>
      <p>{storyText.description}</p>
      <Link to={'/story'} className="storyLink">
        <span>مشاهده بیشتر</span>
        <img src={arrowLeft} alt="arrowLeftIcon" />
      </Link>
    </div>
  );
}

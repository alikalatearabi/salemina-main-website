import './style.scss';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  id: string; // Add an ID or unique identifier for the blog
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, id }) => {
  return (
    <Link to={`/blog/${id}`} className="blogCardLink"> 
      <div className="blogCard">
        <img src={image} alt="blogCardImage" className="blogCardImage" />
        <div className="blogCardText">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="blogShowMoreWrapper">
          <span>مشاهده بیشتر</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

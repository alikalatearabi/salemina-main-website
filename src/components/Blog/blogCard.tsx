import './style.scss'

interface BlogCardProps {
    image: string,
    title: string,
    description: string
}

const BlogCard: React.FC<BlogCardProps> = ({image, title, description}) => {
  return (
    <div className="blogCard">
        <img src={image} alt='blogCardImage' className='blogCardImage' />
        <div className='blogCardText'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='blogShowMoreWrapper'>
                <span>مشاهده بیشتر</span>
            </div>
        </div>
    </div>
  )
}

export default BlogCard;

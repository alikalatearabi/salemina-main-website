import { Button } from 'antd'
import BlogCard from './blogCard'
import blogCardImage from '../../assets/images/blog.jpg'

import './style.scss'
import { BlogCardText } from './blogCardText'
import { Link } from 'react-router-dom'


export default function blog() {
    return (
        <div className="blog">
            <div className='blogWrapper'>
                <div className="blogHeader">
                    <div className='blogTitleWrapper'>
                        <h2>بلاگ</h2>
                        <p>جدیدترین مطالب وبلاگ سالمینا را از اینجا دنبال کنید.</p>
                    </div>
                    <Link to={'/blog'} className='blogButtonWrapper'>
                        <Button type='primary' className='blogTitleButton'>مشاهده همه</Button>
                    </Link>
                </div>
                <div className='blogCardsWrapper'>
                    <BlogCard image={blogCardImage} title={BlogCardText.title} description={BlogCardText.description}/>
                    <BlogCard image={blogCardImage} title={BlogCardText.title} description={BlogCardText.description}/>
                    <BlogCard image={blogCardImage} title={BlogCardText.title} description={BlogCardText.description}/>
                </div>
            </div>
        </div>
    )
}

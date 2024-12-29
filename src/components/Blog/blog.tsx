import { Button } from 'antd';
import BlogCard from './blogCard';
import blogCardImage from '../../assets/images/blog.jpg';

import './style.scss';
import { BlogCardText } from './blogCardText';
import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <div className="blog" id="blogSection">
            <div className="blogWrapper">
                <div className="blogHeader">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div className="blogTitleWrapper">
                            <h2>بلاگ</h2>
                        </div>
                        <Link to={'/blog'} className="blogButtonWrapper">
                            <Button type="primary" className="blogTitleButton">مشاهده همه</Button>
                        </Link>
                    </div>
                    <p style={{marginTop: '20px', fontSize: '16px', color: '#464E59'}}>جدیدترین مطالب وبلاگ سالمینا را از اینجا دنبال کنید.</p>
                </div>
                <div className="blogCardsWrapper">
                    <BlogCard id="1" image={blogCardImage} title={BlogCardText.title} description={BlogCardText.description} />
                    <BlogCard id="2" image={blogCardImage} title={BlogCardText.title} description={BlogCardText.description} />
                    <BlogCard id="3" image={blogCardImage} title={BlogCardText.title} description={BlogCardText.description} />
                </div>
            </div>
        </div>
    );
}

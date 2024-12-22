import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.scss';
import BlogImage from '../../assets/images/blogpic1.jfif'


interface BlogPost {
    id: string;
    title: string;
    content: string;
    image: string;
}

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const blogPosts: BlogPost[] = [
        {
            id: '1',
            title: 'عنوان مطلب اول',
            content: 'این متن کامل مطلب اول است...',
            image: BlogImage,
        },
        {
            id: '2',
            title: 'عنوان مطلب دوم',
            content: 'این متن کامل مطلب دوم است...',
            image: BlogImage,
        },
        {
            id: '3',
            title: 'عنوان مطلب سوم',
            content: 'این متن کامل مطلب سوم است...',
            image: BlogImage,
        },
    ];

    const blogPost = blogPosts.find((post) => post.id === id);

    if (!blogPost) {
        return <div>مطلب مورد نظر یافت نشد.</div>;
    }

    return (
        <div className="blogDetails">
            <img src={blogPost.image} alt={blogPost.title} className="blogDetailsImage" />
            <h1 className="blogDetailsTitle">{blogPost.title}</h1>
            <p className="blogDetailsContent">{blogPost.content}</p>
            <Link to="/blog" className="backToBlog">
                بازگشت به بلاگ
            </Link>
        </div>
    );
};

export default BlogDetails;

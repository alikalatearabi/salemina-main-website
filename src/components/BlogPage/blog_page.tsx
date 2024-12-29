import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './style.scss';
import BlogCard from './blog_card';
import { Link } from 'react-router-dom';
import BlogImage from '../../assets/images/blogpic1.jfif'

const BlogPage: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleTagClick = (tag: string) => {
        setSelectedTag(selectedTag === tag ? null : tag);
    };

    const blogPosts = [
        {
            image: BlogImage,
            title: 'عنوان مطلب اول',
            description: 'این یک توضیح طولانی برای مطلب اول است که ممکن است نیاز به برش داشته باشد...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب دوم',
            description: 'توضیحات مربوط به مطلب دوم...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب سوم',
            description: 'توضیحات مربوط به مطلب سوم...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب اول',
            description: 'این یک توضیح طولانی برای مطلب اول است که ممکن است نیاز به برش داشته باشد...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب دوم',
            description: 'توضیحات مربوط به مطلب دوم...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب سوم',
            description: 'توضیحات مربوط به مطلب سوم...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب اول',
            description: 'این یک توضیح طولانی برای مطلب اول است که ممکن است نیاز به برش داشته باشد...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب دوم',
            description: 'توضیحات مربوط به مطلب دوم...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب سوم',
            description: 'توضیحات مربوط به مطلب سوم...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب اول',
            description: 'این یک توضیح طولانی برای مطلب اول است که ممکن است نیاز به برش داشته باشد...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب دوم',
            description: 'توضیحات مربوط به مطلب دوم...',
            linkText: 'ادامه مطلب',
        },
        {
            image: BlogImage,
            title: 'عنوان مطلب سوم',
            description: 'توضیحات مربوط به مطلب سوم...',
            linkText: 'ادامه مطلب',
        },
    ];

    return (
        <div className="blogPage">
            <h1 className="blogTitle">وبلاگ</h1>
            <div className="searchContainer">
                <Input
                    className="searchInput"
                    placeholder="جستجو مطلب"
                    prefix={<SearchOutlined />}
                />
            </div>
            <div className="tagContainer">
                <div
                    className={`tag ${selectedTag === 'جدیدترین' ? 'selected' : ''}`}
                    onClick={() => handleTagClick('جدیدترین')}
                >
                    جدیدترین
                </div>
                <div
                    className={`tag ${selectedTag === 'پر بازدید ترین' ? 'selected' : ''}`}
                    onClick={() => handleTagClick('پر بازدید ترین')}
                >
                    پر بازدید ترین
                </div>
            </div>
            <div className='blogCardsContainer'>
                {blogPosts.map((post, index) => (
                    <Link to={`/blog/${index + 1}`} key={index} className="blogCardLink">
                        <BlogCard
                            image={post.image}
                            title={post.title}
                            description={post.description}
                            linkText={post.linkText}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;

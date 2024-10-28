import React from 'react';
import './BlogCard.scss';
import { LeftOutlined } from '@ant-design/icons';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, linkText }) => {
  return (
    <div className='blogCard'>
      <img src={image} alt={title} className='cardImage' />
      <div className='textPart'>
        <h3 className='cardTitle'>{title}</h3>
        <p className='cardDescription'>{description}</p>
        <div className='linkContainer'>
          <LeftOutlined style={{ color: '#018A08', fontSize: '18px', marginLeft: '10px' }} />
          <span className='linkText' style={{ color: '#018A08' }}>{linkText}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

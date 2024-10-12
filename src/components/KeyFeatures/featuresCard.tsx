import React from 'react';
import './style.scss'

interface FeaturesCardProps {
    width: string;
    icon: string;
    title: string
    description: string
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ width, icon, title, description }) => {
    return (
        <div className='featureCard' style={{ width: `${width}` }}>
            <img src={icon} alt='performanceIcon' className='featureCardIcon' />
            <h2>{title}</h2>
            <span>{description}</span>
        </div>
    );
}

export default FeaturesCard;

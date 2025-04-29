import './style.scss';

interface InfoCardProps {
    title: string;
    description: string;
    direction: 'rtl' | 'ltr';
    justify: 'justify' | 'end';
    image: string;
    id?: string; 
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, direction, justify, image, id }) => {
    return (
        <div id={id} className="infoCard" style={{ direction: direction, textAlign: justify }}>
            <div className="infoCardText">
                <h2>{title}</h2>
                <p style={{ textAlign: justify }}>{description}</p>
            </div>
            <div>
                <img src={image} alt="infoImage" style={{width: '200px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}} />
            </div>
        </div>
    );
};

export default InfoCard;

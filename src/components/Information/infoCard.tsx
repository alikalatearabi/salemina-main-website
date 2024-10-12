import './style.scss'

interface InfoCardProps {
    title: string,
    description: string,
    direction: 'rtl' | 'ltr',
    justify: 'justify' | 'end',
    image: string,
}

const InfoCard: React.FC<InfoCardProps> = ({title, description, direction, justify, image}) => {
    return (
        <div className='infoCard' style={{direction: direction, textAlign: justify}}>
            <div className='infoCardText'>
                <h2>{title}</h2>
                <p style={{textAlign: justify}}>{description}</p>
            </div>
            <div>
                <img src={image} alt='infoImage' />
            </div>
        </div>
    );
}

export default InfoCard;

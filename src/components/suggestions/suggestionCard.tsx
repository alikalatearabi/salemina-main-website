import './style.scss'

interface SuggestionCardProps {
    name: string,
    title: string,
    comment: string,
    avatar?: string
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ name, title, comment }) => {
    return (
        <div className='suggestionCard'>
            <div>
                <p>{name}</p>
            </div>
            <div className='suggestionsCardText'>
                <h4>{title}</h4>
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default SuggestionCard;

import './style.scss'
import SuggestionCard from './/suggestionCard';
import { SuggesionsText } from './/suggestionsText';

const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className='suggestionsWrapper'>
                <h1>توصیه شده توسط متخصصان سلامت و تغذیه</h1>
                <p>نظر برخی از متخصصان سلامت و تغذیه درباره سالمینا</p>
                <div className='suggestionsCardsWrapper'>
                    {SuggesionsText.map((suggestion) => <SuggestionCard
                        key={suggestion.id}
                        name={suggestion.name}
                        title={suggestion.title}
                        comment={suggestion.commecnt}
                    />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Suggestions;

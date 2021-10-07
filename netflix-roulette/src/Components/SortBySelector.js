import '../css/SortBySelector.css'
import {sortBySelector} from './constants.json'

const SortBySelector = () => {
    return <section className={sortBySelector.className}>
        <div className={sortBySelector.label.className}>
            {sortBySelector.label.text}
        </div>
        <div className={sortBySelector.selector.container.className}>
            <select className={sortBySelector.selector.className}>
                {Object.keys(sortBySelector.selector.options)
                    .map(option => (<option className={
                        sortBySelector.selector.optionItem.className
                    }>{option}</option>))}
            </select>
        </div>
        
    </section>;
};

export default SortBySelector;
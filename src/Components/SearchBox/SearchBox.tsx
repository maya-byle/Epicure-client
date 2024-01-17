import React from 'react';
// import styles from './HeroTitle.module.scss';
import './SearchBox.scss';
import magnifying_glass from '../../Assets/svg/magnifying_glass.svg'


const SearchBox = () => {
    return(
        // <div className={styles['hero']}>
        <div className='search_box_container'>

            <div className='content_container'>
                <a className='big_font'>Epicure works with the top chef restaurants in Tel Aviv</a>
                <div className='search_input'>
                    <img className='icon' src={magnifying_glass} alt='search'/>
                    <a className='medium_font'>Search for restaurant cuisine, chef</a>
                </div>
            </div>
            
        </div>
    )
}

export default SearchBox;

import React from 'react';
import './SearchBox.scss';
import magnifying_glass from '../../Assets/svg/magnifying_glass.svg'


const SearchBox = () => {
    return(
        <div className='search_box_container'>

            <div className='content_container'>
                <a className='big_font'>Epicure works with the top chef restaurants in Tel Aviv</a>
                <div className='search_input'>
                    <img className='icon' src={magnifying_glass} alt='search'/>
                    <h2 className='sml_font'>Search for restaurant cuisine, chef</h2>
                </div>
            </div>
            
        </div>
    )
}

export default SearchBox;

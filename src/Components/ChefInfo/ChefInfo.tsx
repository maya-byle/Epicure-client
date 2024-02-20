import * as React from 'react';
import './chefInfo.scss';
import { IChefOfTheWeek } from '../../Types/chefTypes';

const ChefInfo = ({ name, description, image } : IChefOfTheWeek) => {
    return ( 
        <div className='chefInfo_container'>
            <h2 className='medium_font'>Chef of the week:</h2>
            <div className='desktop_chef_content'>
                <div className='img_container'>
                    <img className='chef_img' src={image} alt={name}/>
                    <h3 className='chef_name'>{name}</h3>
                </div>
                <h4 className='sml_font'>{description}</h4>
            </div>
        </div>
     );
}

export default ChefInfo;
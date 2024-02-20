import * as React from 'react';
import './chefInfo.scss';
<<<<<<< HEAD
import { IChefOfTheWeek } from '../../Types/chefTypes';

const ChefInfo = ({ name, description, image } : IChefOfTheWeek) => {
=======
import yossi from '../../Assets/png/yossishitrit.png'

function ChefInfo() {
    const chefDescription: string = 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrits creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.'
    const chefName: string = 'yossi shitrit'
    
>>>>>>> origin/backend
    return ( 
        <div className='chefInfo_container'>
            <h2 className='medium_font'>Chef of the week:</h2>
            <div className='desktop_chef_content'>
                <div className='img_container'>
<<<<<<< HEAD
                    <img className='chef_img' src={image} alt={name}/>
                    <h3 className='chef_name'>{name}</h3>
                </div>
                <h4 className='sml_font'>{description}</h4>
=======
                    <img className='chef_img' src={yossi} alt={chefName}/>
                    <h3 className='chef_name'>{chefName}</h3>
                </div>
                <h4 className='sml_font'>{chefDescription}</h4>
>>>>>>> origin/backend
            </div>
        </div>
     );
}

export default ChefInfo;
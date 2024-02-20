import * as React from 'react';
import './icons.scss';
  
interface IconsProps {
    icons: { name: string; img: string }[];
}

function Icons({ icons }: IconsProps) {
    return ( 
        <div className='icons_container'>
            <h3 className='medium_bold_font'>THE MEANING OF OUR ICONS:</h3>
            <div className='icons_info'>
                {icons.map((icon) => (
                    <div className='icon' key={icon.name}>
                        <img className='icon_img' src={icon.img}/>
                        <h3 className='medium_font'>{icon.name}</h3>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Icons;

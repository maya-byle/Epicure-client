import * as React from 'react';
import './footer.scss';

function Footer() {
    const links: {text: string}[] = [
        {text: 'Contact Us'},
        {text: 'Term of Use'},
        {text: 'Privacy Policy'}
    ]

    return ( 
        <div className='footer'>
            <div className='links'>
                {links.map((link) => (
                    <div className='link' key={link.text}>
                        {link.text}
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Footer;
import './AboutUs.scss';

import logo from '../../Assets/svg/epicure-logo.svg';
import apple from '../../Assets/svg/apple.svg';
import play from '../../Assets/svg/play.svg';

function AboutUs() {
    const aboutText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
    eu ipsum. Cras porta malesuada eros, eget blandit
     turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
    dignissim a vestibulum.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
    eu ipsum. Cras porta malesuada eros.`;

    const btns: {img:string, text1:string, text2:string}[] = [
        {img:play, text1:'Get it on', text2: 'Google Play'},
        {img:apple, text1:'Download on the', text2: 'App Store'},
    ]

    return ( 
        <div className="aboutUs_container">
            <img className='logo' src={logo} alt='logo'/>
            <div className='desktop_container'>
                <div className='btns'>
                    {btns.map((btn) => (
                        <button className='btn'>
                            <img className='btn_img' src={btn.img} alt={btn.text2}/>
                            <div className='btn_text'>
                                <h5 className='xsml_font'>{btn.text1}</h5>
                                <h4 className='sml_font'>{btn.text2}</h4>
                            </div>
                        </button>
                    ))}
                </div>
                <div className='about_content'>
                    <header>ABOUT US:</header>
                    <p className='sml_font'>{aboutText}</p>
                </div>
            </div>
        </div>
     );
}

export default AboutUs;
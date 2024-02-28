import React, {useEffect, useState} from 'react';
import './scrollBack.scss';

function ScrollBack() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > window.innerHeight;
            setIsVisible(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 


    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return ( 
        <button 
            onClick={handleScrollToTop} 
            className={`scroll-btn ${isVisible ? '' : 'hidden'}`}
            title="Go to top"
        >
            Top
        </button>
    );
}

export default ScrollBack;
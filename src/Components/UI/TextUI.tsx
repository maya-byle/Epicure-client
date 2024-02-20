import * as React from 'react';
import './TextUI.scss';

interface FontStyle {
    className?: string;
    isBold?: string;
    isUpper?: string;
}

function TextUI({ props, children }: { props: FontStyle, children: React.ReactNode }) {
    return (
        <div className={`fontStyle 
            ${props.className} 
            ${props.isBold} 
            ${props.isUpper}`}
        >
            {children}dsgsd
        </div>
    );
}

export default TextUI;

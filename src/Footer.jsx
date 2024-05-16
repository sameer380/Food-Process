import React from 'react';
import {NavLink} from 'react-router-dom';


const Footer = () => {

  const currentYear = new Date().getFullYear();
    return(
        <>
            <p className="footer text-center py-3 "
                style={{
                
                 fontSize:"1rem"
            }}
            >
                © CopyRight {currentYear} Recipe Search App | Powered By: <a
                    style={{
                
                        fontSize: "1.2rem",
                        color: "purple",
                        fontWeight:"bold"
            }}
                    href="https://www.linkedin.com/in/mohammad-naziya-niqhat-904264250" target="_blank">
                    
                    Mohammad Naziya Niqhat ❤️
                
                </a>
        </p>
        </>
    );
}

export default Footer;
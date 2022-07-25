import React from 'react';

const Footer = () => {
   
    const root = {
        marginTop: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(71, 128, 250)'
    }

    return (
        <footer style={root}>
            &copy; Web2 {new Date().getFullYear()}
        </footer>
    );

}

export default Footer;
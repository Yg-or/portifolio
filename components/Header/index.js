import React from 'react';

const styles = {
    
    header:{
        height: 140,
        backgroundColor: '#dadada',
        width: '100%',
        margin: -10,
        display: 'flex',
        flexDirection: 'row'
    },
    logo:{
        height: '100%',
        width: '20%'
    },
    imgLogo:{
        height: 100
    }
    
  };

function Header(){
    return(
        
            <div style={styles.header}>
                <div style={styles.logo}>
                    <img
                    src="https://github.com/Yg-or/portifolio/blob/main/components/img/logo.png?raw=true"
                    style={styles.imgLogo}
                    alt="Logo"
                    />
                </div>
                <div style={styles.menu}>
                    direita
                </div>
                



            </div>


            

        
        
    );
}

export default Header;
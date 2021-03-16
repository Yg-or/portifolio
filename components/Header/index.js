import React from 'react';

const styles = {
    
    header:{
        height: 140,
        backgroundColor: '#dadada',
        width: '100%',
        margin: -10,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid'
    },
    logo:{
        height: '100%',
        width: '20%'
    },
    imgLogo:{
        height: '90%',        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    novo:{
        backgroundColor: "#FFF",
        color: "white",
        fontSize: 20,
        width: 320,
        height: 40,
        borderRadius: 20,
        margin: "10px 0px",
        cursor: "pointer",
        
    },
    
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
                    <button style={styles.novo}>Instagram</button>
                </div>
                



            </div>


            

        
        
    );
}

export default Header;
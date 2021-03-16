import React from 'react';
import Header from '../components/Header';

const styles = {
    tudo:{
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        height: '100%'
    },
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
    body:{
        height: 1200
    }
    
  };

function Teste(){
    return(
        <div style={styles.tudo}>
            <Header/>
            <div style={styles.body}>
                a
            </div>


            

        </div>
        
    );
}

export default Teste;
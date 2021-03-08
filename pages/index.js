import React from 'react';

const mystyle = {
    all:{
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    height: 250,
    width: 250,
    backgroundImage: "https://yt3.ggpht.com/ytc/AAUvwnh3qcXoKDGfaEE_tqvBu-VCHcUg0lEPXjBNFT4rgA=s88-c-k-c0x00ffffff-no-rj"

    },
    teste:{
    color: "white",
    backgroundColor: "#f00",
    padding: "10px",
    fontFamily: "Arial",
    width: 300,
    borderRadius: 30,
    marginTop: 20

    },
    tudo:{
        height: '100%',
        backgroundColor: '#dadada',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0
    },
    btn:{
        border: 1,
        outline: 1,
        color: "white",
        backgroundColor: "#f00",
        padding: "10px",
        fontFamily: "Arial",
        width: 300,
        borderRadius: 30,
        marginTop: 20,
        height: 100
    },
    but:{
        width:'40%',
        margin:0.7,
        height: 40,
        lineHeight:2.8,
        borderRadius:7,
        backgroundColor:'#0070f3',
        boxShadow:'0 4 14 0',
        color:"white",
    },
    img:{
        width: 250
    }
    
  };

function Home(){
    return(
        <div style={mystyle.tudo}>
            <div style={mystyle.all}>
                
            </div>
            <div style={mystyle.teste}>Home 2</div>
            <button style={mystyle.btn}  href="https://www.google.com" block> teste </button>
            <button href="#" style={mystyle.but}>Link</button>

        </div>
        
    );
}

export default Home;
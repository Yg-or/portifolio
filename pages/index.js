import React from 'react';

const mystyle = {
    all:{
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    height: 150,
    width: 150,
    marginTop: 30

    },
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
    novo:{
        backgroundColor: "#4286f4",
        color: "white",
        fontSize: 20,
        width: 320,
        height: 40,
        borderRadius: 20,
        margin: "10px 0px",
        cursor: "pointer",
        
    },
    img:{
        height: '100%',
        width: '100%',
        borderRadius: 200,
        borderStyle: 'solid',
        borderColor: '#000'
    },
    nome:{
        fontSize: 25,
        fontFamily: 'sans-serif'
    },
    volta:{
        width: 400,
        backgroundColor: '#dadada',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }
    
  };
  





function Home(){
    return(
        <div style={mystyle.tudo}>
            <title>Ygor</title>
            <div style={mystyle.all}>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQF5GgUfdmTtkw/profile-displayphoto-shrink_400_400/0/1601997833426?e=1620864000&v=beta&t=frT0oQvT2uvGptF39yM4wGyJdWi1FaAE98-3Uucq0HY" alt="Minha Figura" style={mystyle.img}/>
                
            </div>
            <h1 style={mystyle.nome}>Ygor Lage</h1>
            <a href="https://www.instagram.com/inygu/" target="_blank"><button style={mystyle.novo}>Instagram.</button></a>
            <a href="https://github.com/Yg-or" target="_blank"><button style={mystyle.novo}>GitHub</button></a>
            <a href="https://www.linkedin.com/in/ygorlage/" target="_blank"><button style={mystyle.novo}>Linkedin</button></a>
            <a href="https://api.whatsapp.com/send?phone=5522988011635" target="_blank"><button style={mystyle.novo}>Whatsapp</button></a>






            

        </div>
        
    );
}

export default Home;

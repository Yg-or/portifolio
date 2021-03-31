import React, { Component } from 'react';




const styles = {
    tudo:{
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        height: '100%'
    },
    esquerda:{
        backgroundColor: '#f00',
        

    },
    direita:{
        backgroundColor: '#00f'

    },
    esquerdaSuperior:{
        borderRadius: 20,
        backgroundColor: '#dadada',
        justifyContent: 'center',
        alignItems: 'center'
    },
    esquerdaInferior:{
        width: 260,
        borderRadius: 20,
        backgroundColor: '#dadada',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'

    },
    img:{
        height: '100%',
        width: '100%',
        borderRadius: 200,
        borderStyle: 'solid',
        borderColor: '#000'
    },
    all:{
        color: "white",
        height: 150,
        width: 150,
        marginTop: 30
    
        },
    botao:{
        
        backgroundColor: "#4286f4",
        color: "white",
        fontSize: 20,
        width: '80%',
        height: 40,
        borderRadius: 20,
        margin: "10px 0px",
        cursor: "pointer",
    }
    
  };
  





class Home extends Component{
    constructor(props){
        super(props);
        
    }
    state={
        altura: 0,
        largura: 0,
        alturaSuperior: 0,
        alturaInferior: 0,
        larguraDireita: 0
    }

    

    componentDidMount() {
        const alt = window.innerHeight;
        const larg = window.innerWidth;
        const sup = alt * 0.35;
        const inf = alt * 0.6;
        const larguraDireita = larg - sup;

        this.setState({
            altura: alt,
            largura: larg,
            alturaSuperior: sup,
            alturaInferior: inf,
            larguraDireita: larguraDireita


        })
        

        
    }



    render(){
        
        

        return(
            <div style={styles.tudo}>
                <title>Ygor</title>
                <div style={styles.esquerda, {height: this.state.height, marginRight: 20}}>
                <div style={styles.esquerdaSuperior, {height: this.state.alturaSuperior, backgroundColor: '#dadada', borderRadius: 20, justifyContent: 'center', alignItems: 'center', display: 'flex', width: this.state.alturaSuperior, flexDirection: 'column'}}>
                <div style={styles.all}>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQF5GgUfdmTtkw/profile-displayphoto-shrink_400_400/0/1601997833426?e=1620864000&v=beta&t=frT0oQvT2uvGptF39yM4wGyJdWi1FaAE98-3Uucq0HY" alt="Minha Figura" style={styles.img}/>               
                
            </div>
            <h1>Ygor Lage</h1>
                </div>
                <div style={styles.esquerdaInferior, {height: this.state.alturaInferior, backgroundColor: '#dadada', borderRadius: 20, justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 20, width: this.state.alturaSuperior, flexDirection: 'column'}}>
                    
                    <button style={styles.botao} onClick={()=>window.open("https://www.instagram.com/inygu/", "_blank")} target="_blank">
                        Instagram
                    </button>
                    <button style={styles.botao} onClick={()=>window.open("https://github.com/Yg-or", "_blank")} target="_blank">
                        GitHub
                    </button>
                    <button style={styles.botao} onClick={()=>window.open("https://www.linkedin.com/in/ygor-lage-da-costa-silva-a5183b1ab/", "_blank")} target="_blank">
                        Linkedin
                    </button>
                    <button style={styles.botao} onClick={()=>window.open("https://api.whatsapp.com/send?phone=5522988011635", "_blank")} target="_blank">
                        Whatsapp
                    </button>
                    
                </div>
    
                </div>
                <div style={styles.direita, {width: this.state.larguraDireita, background: '#00f', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>Direita</h1>
    
                </div>
                
            </div>
            
        );
    }

    }

    

export default Home;
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
        console.log(window.innerHeight);
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
                <div style={styles.esquerda, {height: this.state.height, marginRight: 20}}>
                <div style={styles.esquerdaSuperior, {height: this.state.alturaSuperior, backgroundColor: '#dadada', borderRadius: 20, justifyContent: 'center', alignItems: 'center', display: 'flex', width: this.state.alturaSuperior}}>
                    {console.log("altura superior: ",this.state.alturaSuperior)}
                    <h1>Esquerda Superior</h1>
                </div>
                <div style={styles.esquerdaInferior, {height: this.state.alturaInferior, backgroundColor: '#f00', borderRadius: 20, justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 20, width: this.state.alturaSuperior}}>
                    <h1>Esquerda Inferior</h1>
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
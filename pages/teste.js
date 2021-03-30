import React, { Component} from 'react';
import {Button} from 'react';

const styles = {
    total:{

    },
    card:{
        height: 300,
        width: 250,
        backgroundColor: '#f00',
        margin: 20,
        borderRadius: 10,
        padding: 10

    },
    titulo:{
        backgroundColor: '#0f0'
    },
    areaBandeira:{
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bandeira:{
        height: 100,
        width: 100,
        borderRadius: 50
    }
    

}





class App extends Component{
    state = {
        filmes:[],
        pais: ''
    }

    async componentDidMount(){
        const covid = await fetch(`https://api.covid19api.com/countries`);
        const dados = await covid.json();
        this.setState({ filmes: dados });
        console.log(dados)
        
    }

    redirecionar(dado){
        const link = `/api/country/${dado}`;
        window.location.href = link;
    }


    

   




    
    render(){
        const {filmes} = this.state;


        return(
            <div style={styles.total}>
                
                <h1>Teste</h1>
                {filmes.map(filme=>( 
                    <div style={styles.card}>
                        <div style={styles.areaBandeira}>
                            <img src={`https://www.countryflags.io/${filmes.ISO2}/flat/64.png`} style={styles.bandeira} />
                        </div>
                        <div style={styles.titulo}>País: {filme.Country}</div>
                        <div style={styles.slug}>País: {filme.Slug}</div>
                        
                        
                        <button onClick={()=>{this.redirecionar(filme.Slug)}}>
                            {filme.Country}
                        </button>
                        
                        
                    

                    
                    </div>
                ))}
                
                
                
            </div>
        );
    }

    
}

export default App;
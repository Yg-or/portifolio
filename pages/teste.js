import React, { Component} from 'react';
import {Button} from 'react';

const styles = {
    total:{

    },
    card:{
        height: 100,
        width: 250,
        backgroundColor: '#f00',
        margin: 20,
        borderRadius: 10,
        padding: 10

    },
    titulo:{
        backgroundColor: '#0f0'
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
        
    }


    

   




    
    render(){
        const {filmes} = this.state;


        return(
            <div style={styles.total}>
                
                <h1>Teste</h1>
                {filmes.map(filme=>(   
                      
                                   
                    <div style={styles.card}>
                        <div style={styles.titulo}>País: {filme.Country}</div>
                        <div style={styles.slug}>País: {filme.Slug}</div>
                        
                        
                        <a href={`https://api.covid19api.com/country/brazil/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`}><button>{filme.Country}</button></a>
                        
                        
                    

                    
                    </div>
                ))}
                
                
                
            </div>
        );
    }

    
}

export default App;
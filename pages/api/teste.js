import React, { Component, useState} from 'react';

const styles = {
    total:{
        
    },
    card:{
        height: 300,
        width: 350,
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
    },
    lista:{
        display: 'flex',
        flexDirection: 'row'
    }
    

}





class App extends Component{
    

    

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
        


        return(
            <div style={styles.total}>
                
                <h1>Teste</h1>
                <div style={styles.lista}>
                {filmes.map(filme=>( 
                    <div style={styles.card}>
                        <div style={styles.areaBandeira}>
                            <img src={``} style={styles.bandeira} />
                        </div>
                        <div style={styles.titulo}>País: {filme.Country}</div>
                        <div style={styles.slug}>País: {filme.Slug}</div>
                        
                        
                        <button onClick={()=>{this.redirecionar(filme.Slug)}}>
                            {filme.Country}
                        </button>
                        
                        
                    

                    
                    </div>
                ))}
                </div>


                
                
                
            </div>
        );
    }

    
}

export default App;
async function pais(request, response){
   

    const pais = "brazil"
    const covid = await fetch(`https://api.covid19api.com/country/${pais}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`);
    const dados = await covid.json();


    response.setHeader('Cach-Control', 's-maxage=10, stale-while-revalidate');





    response.json({
        country: dados
    });



   
    

}

export default pais;
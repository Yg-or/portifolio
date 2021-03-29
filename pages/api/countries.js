async function countries(request, response){
   
    const covid = await fetch(`https://api.covid19api.com/countries`);
    const dados = await covid.json();


    response.setHeader('Cach-Control', 's-maxage=10, stale-while-revalidate');





    response.json({
        countries: dados
    });



   
    

}

export default countries;
async function Produtos(request, response){
    const nome = request.query.id;
    const covid = await fetch(`https://api.covid19api.com/country/${nome}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`);
    const dados = await covid.json();


    response.json({
        dados: dados

    });


}

export default Produtos;
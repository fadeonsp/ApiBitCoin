var apikey = {
    key: 'eb4b1690-1fbc-4fae-baff-b08b8b9cf4ef'
}

fetch('https://pro.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((resp) => {
        if(!resp.ok) throw new Error('Erro na requisição, status' + resp.status);
        return resp.json();
    })
    .then((api) => {

        var texto = "";
        for(let i = 0; i < 10; i++) {
            texto = texto + `
            
            <div class="media">
                <img src="coin.jpeg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                </div>
            </div>
            `;

            document.getElementById("coins").innerHTML = texto;
        }
       
    }).catch((error) => {
        console.error(error.message);

    });
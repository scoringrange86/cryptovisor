import fetch from 'node-fetch'

function prepareCryptoData(data) {
    let coinIDs = [1, 1027, 1839, 5426, 52, 3408, 512]
    let panelData = []
    coinIDs.forEach((coinId) => {
        var coinInfo = data.filter(coin => coin.id == coinId)
        var symbol = coinInfo[0].symbol
        symbol = symbol.concat('/USD')
        var change = coinInfo[0].quote.USD.percent_change_1h
        var float = Number.parseFloat(change).toFixed(2)
        var percentChange = '%'
        percentChange = percentChange.concat(float)
        var price_float = coinInfo[0].quote.USD.price
        var price_truncated= price_float.toFixed(2);
        var price = Number(price_truncated).toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
        var id = coinId
        var positiveChange = true
        if (float < 0)
        {
            positiveChange = false
        }
        var coinData = {id, symbol, percentChange, price, positiveChange};
        panelData.push(coinData)
         }
    )
         return panelData
}

const getCryptoData = async (request, response) => {

    try{
        const data = await  fetch(
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' +
            '5222f7ba-5441-4b3c-846a-784eace1891b'
            , {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
        
        const jsonData = await data.json()
        const dataToBePrepared = jsonData.data
        const preparedData = prepareCryptoData(dataToBePrepared)
        response.send(preparedData)

    }catch(error){
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
}


export default getCryptoData
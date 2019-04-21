const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
        start: 1,
        limit: 5000,
        convert: 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': '1488fa30-32af-4d55-8cf9-c088d4ca30c2'
    },
    json: true,
    gzip: true
};

rp(requestOptions).then(response => {
    console.log('API call response:', response);
}).catch((err) => {
    console.log('API call error:', err.message);
});
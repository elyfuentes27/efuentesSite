import React, { Component } from 'react'
import axios from 'axios'

import Cryptocurrency from './cyptocurrency';

import './Tracker'

class cryptoTracker extends Component {
    fetchCryptoData() {
        axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest" , {
            headers: {
                'X-CMC_PRO_API_KEY': '1488fa30-32af-4d55-8cf9-c088d4ca30c2'
            }
        })
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "litecoin"];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({data: result});
            })
            .catch( err => console.log(err));
    }

    componentDidMount() {
        this.fetchCryptoData();
        this.interval = setInter(() => this.fetchCryptoData(), 1 * 1000);
    }

    state = {

    }
}
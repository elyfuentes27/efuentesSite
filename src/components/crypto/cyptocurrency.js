import React, { Component } from 'react';

class Cryptocurrency extends Component {
    render () {
        var {
            id,
            name,
            symbol,
            price_id,
            precent_change_1h,
            precent_change_24,
            precent_change_7d,
        } = this.props.data;
        return (
            <li className={"cryptocurrency" + id}>
                <p className="cryptocurrency-name">{name} {{symbol}}</p>
                <h1>${(+price_usd).toFixed(2)}</h1>
                <p>{precent_change_1h}% 1hr</p>
                <p>{precent_change_24}% 24hr</p>
                <p>{precent_change_7d}% 7days</p>
            </li>
        )
    }
}

export default Cryptocurrency;
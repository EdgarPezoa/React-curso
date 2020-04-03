import React, { Component } from 'react';

class FetchApi extends Component{
    state = { bpi:{} };
    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then( res => res.json())
            .then( data => {
                const {bpi} = data;
                this.setState({ bpi });
            })
    }

    _rencerCurrency(){
        const { bpi } = this.state;
        return Object.keys(bpi).map((currency)=>{
            return(
                
                <div key={currency}>
                    
                    1 BTC is {bpi[currency].rate}
                    <span>{currency}</span>
                </div>
            )
        });
    }

    render(){
        return(
            <div>
                <h2>Fetch API</h2>
                {this._rencerCurrency()}
            </div>
        )
    }
}

export default FetchApi;
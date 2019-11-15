import React from 'react';
import axios from 'axios';

import Produks from '../components/Produk';


class ProdukList extends React.Component {

    state = {
        produks: [],
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/produk/')
            .then(res => {
                this.setState({produks: res.data});   
                console.log(res.data);
            })
    }

    render() {
        return(
            <Produks>
                {this.state.produks}
            </Produks>
        )
    }
}

export default ProdukList;
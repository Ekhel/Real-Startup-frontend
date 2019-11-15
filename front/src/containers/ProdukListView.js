import React from 'react';
import axios from 'axios';
import { Card, Icon, Avatar } from 'antd';

import CreateProduk from '../components/c-produk';

const { Meta } = Card;

//import Produks from '../components/Produk';


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
            <div>
                <Card
                    style={{ width: 300 }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <Icon type="shopping-cart" />,
                    <Icon type="edit" key="edit" />,
                    <Icon type="plus-square" theme="filled" />,
                    ]}
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={this.state.produks.nama_produk}
                    description={this.state.produks.deskripsi}
                    />
                </Card>
                <br/>

                <h2> Create Produk</h2>
                <CreateProduk 
                    requestType="post"
                    id_produk={null}
                    btnText="Create"
                />
            </div>
            
        )
    }
}

export default ProdukList;
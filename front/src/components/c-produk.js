import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.item;

class CreateProduk extends React.Component {
    
    handleFormSubmit = (event, requestType, id_produk) => {
        event.preventDefault();

        const nama_produk = event.target.elements.nama_produk.value;
        const deskripsi = event.target.elements.deskripsi.value;
        const stock = event.target.elements.stock.value;
        const ukuran = event.target.elements.ukuran.value;
        const kondisi = event.target.elements.kondisi.value;
        const min_order = event.target.elements.min_order.value;
        const harga = event.target.elements.harga.value;

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/produk/', {
                    nama_produk: nama_produk,
                    deskripsi: deskripsi,
                    stock: stock,
                    ukuran: ukuran,
                    kondisi: kondisi,
                    min_order: min_order,
                    harga: harga
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/produk/${id_produk}/`,{
                    nama_produk: nama_produk,
                    deskripsi: deskripsi,
                    stock: stock,
                    ukuran: ukuran,
                    kondisi: kondisi,
                    min_order: min_order,
                    harga: harga
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
            return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(
                    event, 
                    this.props.requestType,
                    this.props.id_produk )}> 
                <Form.Item label="Nama">
                    <Input name="nama_produk" placeholder="Nama Produk" />
                </Form.Item>
                <Form.Item label="Deskripsi">
                    <Input name="deskripsi" placeholder="Deskripsi Produk" />
                </Form.Item>
                <Form.Item label="Stock">
                    <Input name="stock" placeholder="Stock Produk" />
                </Form.Item> 
                <Form.Item label="Ukuran">
                    <Input name="ukuran" placeholder="Ukuran" />
                </Form.Item>
                <Form.Item label="kondisi">
                    <Input name="kondisi" placeholder="Kondisi" />
                </Form.Item>
                <Form.Item label="Min Order">
                    <Input name="min_order" placeholder="Minimal Order" />
                </Form.Item>
                <Form.Item label="Harga">
                    <Input name ="harga" placeholder="Harga Produk" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                </Form.Item>
                </Form>
            </div>
            );
        }
}

export default CreateProduk;
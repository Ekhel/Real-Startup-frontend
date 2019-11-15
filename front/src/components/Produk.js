import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const Produks = (props) => {
    return(
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
            title={Card.nama_produk}
            description="This is the description"
            />
        </Card>
    )
}

export default Produks;


import React, { Component } from 'react';

import { Carousel } from 'antd';

const Slides = (props) => {
    return(
        <Carousel autoplay>
            <div>
            <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
        </Carousel>
    )
}

export default Slides;
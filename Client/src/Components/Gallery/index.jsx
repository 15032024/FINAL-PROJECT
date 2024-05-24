import { Card, Col, Row } from 'antd'
import React from 'react'

const Gallery = () => {
    return (
        <div className='container'>

            <div style={{ textAlign: "center", margin: "20px 0"}} className="gallery-content">
                <h1>Gallery</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>


            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" />}
                    >
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" />}
                    >
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" />}
                    >
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" />}
                    >
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" />}
                    >
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" />}
                    >
                    </Card>
                </Col>

            </Row>



        </div>
    )
}

export default Gallery
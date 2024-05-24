import { Button, Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const NewsCard = () => {
    return (
        <div style={{margin:"50px 0"}} className="news-sec">
            <div className='container'>
            <div style={{textAlign:"center", margin:"30px 0", fontSize:"20px"}} className="news-content">
            <h2>News</h2>
            <p>Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <Row style={{textAlign:"center"}} gutter={[16, 20]}>
               
                <Col xs={24} md={12} lg={8} className="gutter-row"  span={6}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg" />}
                    >
                        <Meta title="We Have Dilecious Food" description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts" />
                        <Button style={{ color: "white", backgroundColor: "orange" }}>Buy Now</Button>
                    </Card>
                </Col>
                <Col xs={24} md={12} lg={8} className="gutter-row"  span={6}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" />}
                    >
                        <Meta title="We Have Dilecious Food" description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts" />
                        <Button style={{ color: "white", backgroundColor: "orange" }}>Buy Now</Button>
                    </Card>
                </Col>
                <Col xs={24} md={12} lg={8} className="gutter-row"  span={6}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg" />}
                    >
                        <Meta title="We Have Dilecious Food" description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts" />
                        <Button style={{ color: "white", backgroundColor: "orange" }}>Buy Now</Button>
                    </Card>
                </Col>


            </Row>


        </div>
        </div>
    )
}

export default NewsCard
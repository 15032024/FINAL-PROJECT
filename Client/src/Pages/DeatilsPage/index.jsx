import React from 'react'
import { Helmet } from "react-helmet";

const DetailsPage = () => {
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>DetailsPage</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div>

                <Row>
                    <Col>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={p.image} />}
                        >
                            <Meta title={p.title} description={p.price} />
                            <Button style={{ color: "white", backgroundColor: "orange" }}>Order Now</Button>

                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default DetailsPage
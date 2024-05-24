import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'antd';
import { getAllData } from '../../Services';
import Meta from 'antd/es/card/Meta';
import "./index.scss"
import { Helmet } from "react-helmet";

import NewsCard from '../../Components/NewsCard';
import Gallery from '../../Components/Gallery';
import { CiHeart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
// import {EatWell} from "./addpage.js"
const HomePage = () => {

    const [products, setProducts] = useState()
    useEffect(() => {

        getAllData().then(res => {
            setProducts(res.data.data)
            console.log(res.data.data);
        })

    }, [])

    // const handlefavorite = () => {
    //     const [favs, setFavs] = useContext([])
    //     const found = favs.find((p) => p._id === products._id)
    //     if (found) {
    //         setFavs((q)=>{})
    //     }
    // }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>HomePage</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <section id='eatwell'>
                <div className="eatwell-content">
                    <h1>Welcome To EatWell</h1>
                    <p>Come and eat well with our delicious & healthy foods.</p>
                    <Button >Reservation</Button>
                </div>
            </section>





            <section id='wellcome'>
                <div className="container">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12} span={12}>
                            <div className="welcome">
                                <p>Our Story</p>
                                <h1>Welcome</h1>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. A small river named Duden flows by their
                                    place and supplies it with the necessary regelialia. It is a paradisematic country,
                                    in which roasted parts of sentences fly into your mouth.
                                </p>
                                <Button >Learn More About Us</Button>
                            </div>
                        </Col>
                        <Col xs={24} md={12} span={12}>
                            <img width={500}
                                src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
                        </Col>


                    </Row>
                </div>
            </section>


            <section id='dinamik'>

                <div className="container">
                    <div className="section-content">
                        <h4>OUR OFFERS</h4>
                        <br />
                        <h1>Our Offer This Summer</h1>
                        <br />

                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <Row gutter={[16, 16]}>
                        {
                            products && products.map((p) => {
                                return (
                                    <Col xs={24} md={12} lg={8} className="gutter-row" key={p._id} span={6}>
                                        <Card
                                            hoverable
                                            style={{
                                                width: 240,
                                            }}
                                            cover={<img alt="example" src={p.image} />}
                                        >
                                            <Meta title={<NavLink to={p._id}>{p.title}</NavLink>} description={p.price} />
                                            <Button style={{ color: "white", backgroundColor: "orange" }}>Order Now</Button>
                                            <CiHeart
                                                onClick={() => handlefavorite(id)}
                                                style={{ margin: '0 20px', fontSize: "1.4rem", textAlign: "center" }}
                                            />

                                        </Card>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </div>

            </section>

            <section>
                <NewsCard />
            </section>

            <section>
                <Gallery />
            </section>
        </>
    )
}

export default HomePage
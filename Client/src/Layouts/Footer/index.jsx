import React from 'react'
import "./index.scss"
import { Col, Row } from 'antd'
const Footer = () => {
  return (
    <footer>

<div className="container">
<div className="footer-nav">
<Row style={{textAlign:"center"}} gutter={[16,16]}>
<Col xs={24} md={12} lg={6} span={6}>
<div className="nav-1">
    <h3>About Us</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt officia mollitia non necessitatibus maxime dolore quo voluptate eius inventore.</p>
</div>
</Col>

<Col xs={24} md={12} lg={6} span={6}>
<div className="nav-2">
    <h3>The Restaurant</h3>
    <ul>
        <li>
            <a href="">About Us</a>
        </li>
        <li>
            <a href="">Chefs</a>
        </li>
        <li>
            <a href="">Events</a>
        </li>
        <li>
            <a href="">Contact</a>
        </li>
    </ul>
</div>
</Col>

<Col xs={24} md={12} lg={6} span={6}>
<div className="nav-3">
    <h3>USEFUL LINKS</h3>
    <ul>
        <li>
            <a href=""> Foods</a>
        </li>
        <li>
            <a href="">Drinks</a>
        </li>
        <li>
            <a href="">BreakFast</a>
        </li>
        <li>
            <a href="">Brunch</a>
        </li>
        <li>
            <a href="">Dinner</a>
        </li>
    </ul>
</div>
</Col>

<Col xs={24} md={12} lg={6} span={6}>
<div className="nav-3">
    <h3>USEFUL LINKS</h3>
    <ul>
        <li>
            <a href=""> Foods</a>
        </li>
        <li>
            <a href="">Drinks</a>
        </li>
        <li>
            <a href="">BreakFast</a>
        </li>
        <li>
            <a href="">Brunch</a>
        </li>
        <li>
            <a href="">Dinner</a>
        </li>
    </ul>
</div>
</Col>


</Row>
</div>
</div>

    </footer>
  )
}

export default Footer
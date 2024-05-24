import React from 'react';
import { useFormik } from 'formik';
import { addNewData } from '../../Services';
import axios from 'axios';
import EatWell from '../../Validations/addpage';
import { BASE_URL } from '../../Services/constant';
import {Helmet} from "react-helmet";

const AddPage = () => {



    const formik = useFormik({
        initialValues: {
            title: '',
            image: '',
            price: 0,
        },

        onSubmit: values => {
            axios.post("http://localhost:3000/api/products", {...values}).then(res => {
                console.log(res)
            })
        },


    });
    return (
        <>
        <Helmet>
    <meta charSet="utf-8" />
    <title>AddPage</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
        <form style={{
            display: "flex",
            margin: "2rem",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center"


        }}
            validationSchema={EatWell}
            onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="firstName"> Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.errors.name && formik.touched.name && <div id="feedback">{errors.name}</div>}
            </div>

            <div>
                <label htmlFor="lastName">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />
                {formik.errors.name && formik.touched.name && <div id="feedback">{errors.name}</div>}
            </div>

            <div>

                <label htmlFor="email">Price</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
                {formik.errors.name && formik.touched.name && <div id="feedback">{errors.name}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default AddPage
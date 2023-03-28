import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import '../css/Home.css';
import blogFetch from "../axios/config";
import { useCart } from "../component/CartContext";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Lasanha from "../images/lasanha.jpg"
import Frango from "../images/frango.jpg"
import Bolo from "../images/bolo.jpg"

function Home(props) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const cart = useCart()
    const add = (product) => {
        cart.addToCart(product)
    }
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            const response = await blogFetch.get("/book");
            const data = response.data;

            setBooks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        getBooks()
    }, [])

    const toCorrect = (price) => {
        return price.replace(".", ",")
    }

    const showParc = (price) => {

        if (typeof price == 'number') {
            const bookPrice = price / 10
            const bookParc = bookPrice.toFixed(2)

            return bookParc.replace(".", ",")
        }
        else {
            const num = Number(price)
            const bookParc = (num / 10).toFixed(2)
            return bookParc.replace(".", ",")
        }
    }



    return (

        
        

        <div className="home-main">
            

            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item className='carrousel'>
                    <img
                        className=" img-carrousel"
                        src={Lasanha}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-carrousel'>
                        <h1>Lasanha à Bolonhesa</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carrousel'>
                    <img
                        className=" img-carrousel "
                        src={Frango}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-carrousel'>
                        <h1>Frango Empanado </h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carrousel'>
                    <img
                        className=" img-carrousel "
                        src={Bolo}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-carrousel'>
                        <h1>Bolo de Chocolate</h1>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
        

       
            
    )

    
}

export default Home;
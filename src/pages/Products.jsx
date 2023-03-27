import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import '../css/Products.css'
import blogFetch from "../axios/config";
import { useCart } from "../component/CartContext";


function Products () {

  const cart = useCart()
  const add = (product) =>{
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

  return (<main className="mainproducts">

    <h1 className="title">Receitas</h1>

    <div className="products">
      {books.length === 0 ? (<div className="loader"></div>) : (
        books.map((book) => (
          <div className="product" key={book.id}>
            <img className="product-image" src={book.image} />
            <h4 className="product-name">{book.name}</h4>
            <div className="buttons">
              <Link to={`/products/${book.id}`} className="btn">Ver Receita</Link>
             

            </div>
          </div>
        ))
      )}
    </div>
  </main>
  )
}

export default Products;
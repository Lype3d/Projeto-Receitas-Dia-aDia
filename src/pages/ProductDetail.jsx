import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../css/ProductDetail.css'
import { useCart } from "../component/CartContext";



function Book () {
  const [book, setBook] = useState([]);
  const cart = useCart()
  const add = (product, quantity) =>{
 
    cart.addWithQuantity(product, quantity)
  }
  const { id } = useParams();
  const getBook = async () => {
    try {
      const response = await blogFetch.get(`/book/${id}`);

      const data = response.data;
      setBook(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
    
  },[]);

  return (
    <div className="book-detail">
      {!book.name ? (
        <div className="loader-product"></div>
      ) : (
        <div className="book-info-detail">
          <div >
            <img className="book-image-detail" src={book.image} />
          </div>
          <div className="book-data-detail">
            <h1>{book.name}</h1>
            <p>
              Ingredientes: <br /> {book.author}</p>
            <p>Modo de Preparo: <br /> {book.publishing}</p>

            <p className="description-detail">Tempo de preparo: <br /> {book.description}</p>

            
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;

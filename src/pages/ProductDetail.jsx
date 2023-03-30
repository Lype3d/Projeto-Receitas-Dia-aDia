import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../css/ProductDetail.css'
import { useCart } from "../component/CartContext";
import Ingredientes from '../images/ingredientes.svg';
import Panela from '../images/panela.png';
import Relogio from '../images/relogio.svg';

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
            <h1 className="nomeDasReceitas">{book.name}</h1>
            <p><h3><img src={Panela} className="img1" />Ingredientes:</h3> <h7>{book.publishing}</h7></p>
            <p>
              <h3><img src={Ingredientes} className="img1" />Modo de preparo:</h3>  {book.author}</p>
            

            <p className="description-detail"><h3><img src={Relogio} className="img1" />Tempo de preparo:</h3>{book.description}</p>

            
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;

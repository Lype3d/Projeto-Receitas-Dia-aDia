import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/NewBook.css";
import imageNew from "../images/insira.png"
import Loading from "../images/loading.gif"

function NewBook() {
    const navigate = useNavigate();

    const [name, setTitle] = useState('');
    const [publishing, setPublishing] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const createBook = async (e) => {
        e.preventDefault();
        // const btnblock = document.getElementById('createnewbook');
        // btnblock.setAttribute("disabled", "");
        // btnblock.innerHTML = `<img src=${Loading} width="25px" height="25px"/>`

        const book = {
            name: name,
            publishing: publishing,
            author: author,
            description: description,
            image: image
        }
        console.log(book)
        await blogFetch.post('/book', book).then((response) => {
            console.log(response.data)
        }).catch((erro) => {
            console.log(erro)
        })

        // navigate("/admin");
    };

    return (<main className="main-newbook">
        <img src={imageNew} className="image-new-newbook" />
        <div className="new-book-newbook">
            <form onSubmit={(e) => createBook(e)} className="form-newbook">
                <div className="form-control form-newbook">
                    <label >Receita:</label>
                    <input type="text" name="title" id="title" placeholder="Digite a Receita"
                        onChange={(e) => setTitle(e.target.value)} className="input-newbook"
                        required />
                    <label >Ingredientes:</label>
                    <input type="text" name="publishing" id="publishing" placeholder="Digite os ingredientes"
                        onChange={(e) => setPublishing(e.target.value)} className="input-newbook"
                        required />
                    <label >Modo de Preparo:</label>
                    <input type="text" name="author" id="author" placeholder="Digite o Modo de Preparo"
                        onChange={(e) => setAuthor(e.target.value)} className="input-newbook"
                        required />
                    {/* <label >Preço:(ex.: 45.99)</label>
                    <input type="number" name="price" id="price" min="0" max="100000" step=".01" placeholder="Digite o valor"
                        onChange={(e) => setPrice(e.target.value)} className="input-newbook"
                        required /> */}
                    <label >Endereço da imagem:</label>
                    <input type="text" name="image" id="image" placeholder="Digite o endereço da imagem"
                        onChange={(e) => setImage(e.target.value)} className="input-newbook"
                        required />
                </div>
                <div className="form-control form-newbook">
                    <label htmlFor="description">Tempo de preparo:</label>
                    <textarea name="description" className="textarea-newbook" id="description" placeholder="Digite o tempo de preparo..."
                        onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <button type="submit" value="Cadastrar Livro" className="btn-newbook mb-2" id="createnewbook">Cadastrar Livro </button>
                <Link to="/admin"><button className="btn-newbook backmenu back-to-adminpage" >Voltar</button></Link>
            </form>
        </div>
    </main>
    );
};

export default NewBook;
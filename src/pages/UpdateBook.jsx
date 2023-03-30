import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import '../css/UpdateBook.css'
import Loading from "../images/loading.gif"

function UpdateBook() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [publishing, setPublishing] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const { id } = useParams();

  const getBook = async () => {
    try {
      const response = await blogFetch.get(`/book/${id}`);

      const data = response.data;

      
    } catch (error) {
      console.log(error);
    }
  };

  const UpBook = async (e) => {
    e.preventDefault();

    const btnblock = document.getElementById('updatebook');
    btnblock.setAttribute("disabled", "");
    btnblock.innerHTML = `<img src=${Loading} width="25px" height="25px"/>`

    const book = {
      name: title,
      publishing: publishing,
      author: author,
      description: description,
      image: image
    }
    await blogFetch.put(`/book/${id}`, book).then((response) => {
      console.log(response)
    }).catch((erro) => {
      console.log(erro)
    })

    navigate("/admin");
  };

  useEffect(() => {
    getBook();
  }, []);

  return (<main className="book-update">
    <h2>Editando: {title}</h2>

    <div className="info-edit-book-update">
      <img src={image} className="book-image-update" />
      <div className="edit-book-update">
        <form className="form-update" onSubmit={(e) => UpBook(e)}>
          <div className="form-control form-update">
            <label >Receita:</label>
            <input classname="update" type="text" name="title" id="title" placeholder="Digite a receita..." onChange={(e) => setTitle(e.target.value)} value={title || ""} required />
            <label >Ingredientes:</label>
            <input type="text" name="publishing" id="publishing" placeholder="Digite os ingredientes..." onChange={(e) => setPublishing(e.target.value)} value={publishing || ""}
              required />
            <label >Modo de Preparo:</label>
            <input type="text" name="author" id="author" placeholder="Digite o modo de preparo..."
              onChange={(e) => setAuthor(e.target.value)} value={author || ""} required />

            <label >Endereço da imagem:</label>
            <input type="text" name="image" id="image" placeholder="Digite o endereço da imagem..." onChange={(e) => setImage(e.target.value)} value={image || ""}
              required />
          </div>

          <div className="form-control form-update">
            <label >Tempo de preparo:</label>
            <textarea name="description" id="description" placeholder="Digite o tempo de preparo..." onChange={(e) => setDescription(e.target.value)} value={description || ""}></textarea>
          </div>
          <button type="submit" className="btn-update mb-2" id="updatebook">Editar Receita</button>
          <Link to="/admin"><input type="button" value="Voltar" className="btn-back" /></Link>
        </form>
      </div>
    </div>
  </main>
  );
};

export default UpdateBook;

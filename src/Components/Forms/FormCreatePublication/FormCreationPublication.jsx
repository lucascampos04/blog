import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { AppConfigFirebase } from "../../../Services/firebase";

export const FormCreatedPublication = ({ show, handleClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const [projectLink, setProjectLink] = useState("")
  const [isMaxLengthReached, setIsMaxLengthReached] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleProjectLink = (event) => { 
    setProjectLink(event.target.value)
  }  

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= 200) {
      setContent(newText);
      setIsMaxLengthReached(newText.length >= 200);
    }
  };

  const handleShow = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedLanguages([...selectedLanguages, selectedLanguage]);
    } else {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== selectedLanguage)
      );
    }
  };

  const handleImagemChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBase64(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    event.preventDefault();

    setLoading(true);

    try {
      const db = getFirestore(AppConfigFirebase);
      const currentData = new Date();
      const docRef = await addDoc(collection(db, "projects"), {
        title: title,
        comentario: content,
        data: currentData,
        Language: selectedLanguages,
        image: imageBase64,
        projectLink: projectLink
      });

      console.log("Documento adicionado com sucesso!!! ID : " + docRef.id);
      handleClose();
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (show) {
      setTitle("");
      setContent("");
      setIsMaxLengthReached(false);
      setSelectedLanguages([]);
    }
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      onShow={handleShow}
      centered
      className="fade"
    >
      <Modal.Header closeButton>
        <Modal.Title>Criar Publicação</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} style={loading ? { opacity: 0.5 } : {}}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Título:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Conteúdo:
            </label>
            <textarea
              className={`form-control ${
                isMaxLengthReached ? "text-danger" : ""
              }`}
              id="content"
              name="content"
              placeholder=""
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <div
              className={`form-text ${isMaxLengthReached ? "text-danger" : ""}`}
            >
              {content.length}/200 Caracteres
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Link do projeto:
            </label>
            <div className="input-group">
              <span className="input-group-text">
                https://github.com/lucascampos04/
              </span>
              <input
                type="text"
                className="form-control"
                id="projectLink"
                name="projectLink"
                value={projectLink}
                onChange={handleProjectLink}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Selecionar Imagem
            </label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImagemChange}
              />
              <label className="custom-file-label" htmlFor="image">
                Escolher arquivo...
              </label>
            </div>
          </div>

          <div className="mb-3">
            <p>Selecionar as linguagens</p>
            <div
              className="container-checkbox"
              style={{ display: "flex", flexDirection: "row", gap: "10px" }}
            >
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="java"
                  value="java"
                  onChange={handleLanguageChange}
                  checked={selectedLanguages.includes("java")}
                />
                <label className="form-check-label" htmlFor="java">
                  Java
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="javascript"
                  value="javascript"
                  onChange={handleLanguageChange}
                  checked={selectedLanguages.includes("javascript")}
                />
                <label className="form-check-label" htmlFor="javascript">
                  Javascript
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="python"
                  value="python"
                  onChange={handleLanguageChange}
                  checked={selectedLanguages.includes("python")}
                />
                <label className="form-check-label" htmlFor="python">
                  Python
                </label>
              </div>
            </div>
          </div>

          {/* Spinner */}
          {loading && (
            <div className="position-absolute top-50 start-50 translate-middle">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Carregando...</span>
              </Spinner>
            </div>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Criar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

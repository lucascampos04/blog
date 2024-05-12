import { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

export const FormCreatedPublication = ({ show, handleClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isMaxLengthReached, setIsMaxLengthReached] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <Modal show={show} onHide={handleClose} onShow={handleShow} centered className='fade'>
      <Modal.Header closeButton>
        <Modal.Title>Criar Publicação</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form style={loading ? { opacity: 0.5 } : {}}>
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
              className={`form-control ${isMaxLengthReached ? 'text-danger' : ''}`} 
              id="content"
              name="content"
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <div className={`form-text ${isMaxLengthReached ? 'text-danger' : ''}`}>
              {content.length}/200 Caracteres
              </div>
          </div>

          {/* Spinner */}
          {loading && (
            <div className='position-absolute top-50 start-50 translate-middle'>
              <Spinner animation='border' role='status'> 
                <span className='visually-hidden'>Carregando...</span>
              </Spinner>
            </div>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Criar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

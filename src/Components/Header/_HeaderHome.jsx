import React, { useState } from 'react';
import {FormCreatedPublication} from "../Forms/FormCreatePublication/FormCreationPublication"

export const HeaderHome = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <header>
            <span>
                <button 
                    type="button"  
                    className="btn btn-secondary"
                >
                    Ver todas as publicações
                </button>
            </span>
            <span>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleShowModal}
                >
                    Criar publicação
                </button>
            </span>
            <FormCreatedPublication show={showModal} handleClose={handleCloseModal} />
        </header>
    );
};

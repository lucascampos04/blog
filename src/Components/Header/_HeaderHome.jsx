import React, { useContext, useState } from 'react';
import { FormCreatedPublication } from "../Forms/FormCreatePublication/FormCreationPublication";
import { authContextGoogle } from '../../Context/LoginContext/authGoogle';
import { useNavigate } from "react-router-dom";

export const HeaderHome = () => {
    const [showModal, setShowModal] = useState(false);
    const { signOut } = useContext(authContextGoogle);
    const navigate = useNavigate(); 

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleSignOut = () => {
        signOut();
        navigate("/"); 
    };

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

                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={handleSignOut}
                >
                    Sair
                </button>
            </span>

            <FormCreatedPublication show={showModal} handleClose={handleCloseModal} />
        </header>
    );
};

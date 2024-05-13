import React, { useContext, useState } from 'react';
import { FormCreatedPublication } from "../Forms/FormCreatePublication/FormCreationPublication";
import { authContextGoogle } from '../../Context/LoginContext/authGoogle';
import { useNavigate } from "react-router-dom";
import "../../public/home.css"
import { doc, getFirestore, deleteDoc } from 'firebase/firestore';

export const HeaderHome = () => {
    const [showModal, setShowModal] = useState(false);
    const [projectIdToDelete, setProjectIdToDelete] = useState("")


    const { signOut } = useContext(authContextGoogle);
    const navigate = useNavigate(); 

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleSignOut = () => {
        signOut();
        navigate("/"); 
    };

    const handleDeleteProject = async (projectId) => {
        try{
            const db = getFirestore()
            await deleteDoc(doc(db, "projects", projectId))
            window.location.reload()
            console.log("Projeto excluido com sucesso")
        } catch (error){
            console.error(error);
        }
    }

    const handlePromptForProjectId = () => {
        const projectId = prompt("Id do projeto: ")
        if (projectId){
            setProjectIdToDelete(projectId)
            handleDeleteProject(projectId)
        }
    }

    return (
        <header>
            <span>
                <button 
                    type="button"  
                    className="btn btn-secondary"
                >
                    Ver todas as publicações
                </button>
                <button
                    type="button"
                    className='btn btn-danger'
                    onClick={handlePromptForProjectId}
                >
                    Excluir projeto
                </button>
            </span>
            <span className='buttons-right'>
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

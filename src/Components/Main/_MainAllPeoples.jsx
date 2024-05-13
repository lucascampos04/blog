import React, { useContext, useEffect, useState } from "react";
import "../../public/main.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { AppConfigFirebase } from "../../Services/firebase";
import { authContextGoogle } from "../../Context/LoginContext/authGoogle";

export const _MainAllPeoples = () => {
  const [projects, setProjects] = useState([]);
  const [userId, setUserId] = useState("");
  const allowedUserEmail = "camposdlucasoli@gmail.com";

  const {user} = useContext(authContextGoogle)

  const isUserAuthorized = () => {
    return user && user.email === allowedUserEmail
  }

  useEffect(() => {
    const fetchProjects = async () => {
      const db = getFirestore(AppConfigFirebase);
      const projectsCollection = collection(db, "projects");
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsData = projectsSnapshot.docs.map((doc) => {
        const projectData = doc.data();
        const timestamp = projectData.data;
        const data =
          timestamp && timestamp.seconds
            ? new Date(timestamp.seconds * 1000)
            : null;
        const dateFormatted = data ? data.toLocaleDateString() : "";
        return { id: doc.id, ...projectData, dataFormatada: dateFormatted };
      });
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <main>
      <div className="c1 modal-options-projects">Modal 1</div>
      <div className="c2 modal-view-all-projects">
        {projects.map((project) => (
          <div key={project.id} className="project-unique">
            {isUserAuthorized() && <p> id : {project.id}</p>}
            <h2>{project.title}</h2>
            <p>{project.comentario}</p>
            <p>{project.dataFormatada}</p>
            <p>{project.language}</p>
            {project.image && <img src={project.image} alt="Imagem" width={"500px"} height={"300px"}/>}
            <a href={`https://github.com/lucascampos04/${project.projectLink}`} target="_blank" rel="noopener noreferrer">
                Github
            </a>
          </div>
        ))}
      </div>
      <div className="c3 modal-options-type-projects">Modal 3</div>
    </main>
  );
};

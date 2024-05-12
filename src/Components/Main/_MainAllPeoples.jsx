import { useEffect, useState } from "react";
import "../../public/main.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { AppConfigFirebase } from "../../Services/firebase";

export const _MainAllPeoples = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const db = getFirestore(AppConfigFirebase);
            const projectsCollection = collection(db, "projects");
            const projectsSnapshot = await getDocs(projectsCollection);
            const projectsData = projectsSnapshot.docs.map(doc => {
                const projectData = doc.data();
                const timestamp = projectData.data;
                const data = timestamp && timestamp.seconds ? new Date(timestamp.seconds * 1000) : null;
                const dateFormatted = data ? data.toLocaleDateString() : '';
                return { id: doc.id, ...projectData, dataFormatada: dateFormatted };
            });
            setProjects(projectsData);
        };

        fetchProjects();
    }, []);

    return (
        <main>
            <div className="c1 modal-options-projects">
                Modal 1
            </div>
            <div className="c2 modal-view-all-projects">
                {projects.map(project => (
                    <div key={project.id} className="project-unique">
                        <h2>{project.title}</h2>
                        <p>{project.comentario}</p>
                        <p>{project.dataFormatada}</p> 
                        <p>{project.language}</p> 
                    </div>
                ))}
            </div>
            <div className="c3 modal-options-type-projects">
                Modal 3
            </div>
        </main>
    );
};

import { useEffect, useState } from "react";

import { getProjects } from "../api/projects";


function useProjects(){

    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect(()=>{

        async function fetchProjects(){

            try{

                const data = await getProjects();

                setProjects(data);

            }
            catch(error){

                console.error(
                    "Failed to load projects",
                    error
                );

            }
            finally{

                setLoading(false);

            }

        }


        fetchProjects();


    },[]);



    return {
        projects,
        loading
    };

}


export default useProjects;
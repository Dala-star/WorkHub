import { useEffect, useState } from "react";

import {
    getProjects,
    createProject,
    deleteProject
} from "../api/projects";



function ProjectsManager(){


    const [projects,setProjects] = useState([]);



    const [form,setForm] = useState({

        title:"",
        description:"",
        tech:"",
        image:"",
        github:"",
        live_demo:""

    });



    async function loadProjects(){

        const data = await getProjects();

        setProjects(data);

    }



    useEffect(()=>{

        loadProjects();

    },[]);





    async function handleSubmit(e){

        e.preventDefault();


        await createProject(form);


        setForm({

            title:"",
            description:"",
            tech:"",
            image:"",
            github:"",
            live_demo:""

        });


        loadProjects();

    }






    async function handleDelete(id){

        await deleteProject(id);

        loadProjects();

    }







    return (

        <div className="space-y-10">


            <div
                className="
                rounded-3xl
                bg-slate-900
                p-8
                "
            >

                <h2 className="text-2xl font-bold text-white">
                    Add Project
                </h2>



                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-4"
                >


                    {
                    Object.keys(form).map((field)=>(

                        <input

                            key={field}

                            placeholder={field}

                            value={form[field]}

                            onChange={
                                e =>
                                setForm({
                                    ...form,
                                    [field]:
                                    e.target.value
                                })
                            }

                            className="
                            w-full
                            rounded-xl
                            bg-slate-800
                            p-3
                            text-white
                            "

                        />

                    ))
                    }



                    <button

                        className="
                        rounded-xl
                        bg-cyan-500
                        px-6
                        py-3
                        font-bold
                        text-black
                        "

                    >

                        Add Project

                    </button>


                </form>


            </div>






            <div
                className="
                grid
                gap-6
                md:grid-cols-2
                "
            >

                {
                projects.map(project=>(


                    <div
                        key={project.id}
                        className="
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900
                        p-6
                        "
                    >

                        <h3
                        className="
                        text-xl
                        font-bold
                        text-white
                        "
                        >
                            {project.title}
                        </h3>


                        <p className="mt-3 text-slate-400">
                            {project.description}
                        </p>


                        <p className="mt-3 text-cyan-400">
                            {project.tech}
                        </p>



                        <button

                            onClick={() =>
                                handleDelete(project.id)
                            }

                            className="
                            mt-5
                            rounded-lg
                            bg-red-500
                            px-4
                            py-2
                            text-white
                            "

                        >

                            Delete

                        </button>


                    </div>


                ))
                }


            </div>


        </div>

    );

}


export default ProjectsManager;
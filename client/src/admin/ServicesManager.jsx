import { useState } from "react";
import { createService } from "../api/services";


function ServicesManager(){

    const [form,setForm] = useState({

        title:"",
        description:"",
        icon:"FaCode"

    });


    async function handleSubmit(e){

        e.preventDefault();


        try{

            await createService(form);


            alert("Service added");


            setForm({
                title:"",
                description:"",
                icon:"FaCode"
            });


        }
        catch(error){

            console.error(error);

            alert("Failed to add service");

        }

    }



    return (

        <div
            className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            p-8
            "
        >

            <h2 className="text-2xl font-bold text-white">
                Add Service
            </h2>


            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
            >


                <input
                    className="w-full rounded-xl bg-slate-800 p-3 text-white"
                    placeholder="Title"
                    value={form.title}
                    onChange={
                        e =>
                        setForm({
                            ...form,
                            title:e.target.value
                        })
                    }
                />



                <textarea

                    className="w-full rounded-xl bg-slate-800 p-3 text-white"

                    placeholder="Description"

                    value={form.description}

                    onChange={
                        e =>
                        setForm({
                            ...form,
                            description:e.target.value
                        })
                    }

                />



                <input

                    className="w-full rounded-xl bg-slate-800 p-3 text-white"

                    placeholder="Icon"

                    value={form.icon}

                    onChange={
                        e =>
                        setForm({
                            ...form,
                            icon:e.target.value
                        })
                    }

                />



                <button

                    className="
                    rounded-xl
                    bg-cyan-500
                    px-6
                    py-3
                    font-semibold
                    text-black
                    "

                >

                    Save Service

                </button>


            </form>


        </div>

    );

}


export default ServicesManager;
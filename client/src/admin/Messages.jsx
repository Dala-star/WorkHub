import { useEffect, useState } from "react";

import {
    getMessages,
    updateMessageStatus,
    deleteMessage
} from "../api/messages";



function Messages(){


    const [messages,setMessages] = useState([]);




    async function loadMessages(){

        const data = await getMessages();

        setMessages(data);

    }



    useEffect(()=>{

        loadMessages();

    },[]);






    async function changeStatus(id,status){

        await updateMessageStatus(
            id,
            status
        );

        loadMessages();

    }






    async function removeMessage(id){

        await deleteMessage(id);

        loadMessages();

    }







    return (

        <div className="space-y-6">


            <h2 className="
                text-3xl
                font-bold
                text-white
            ">
                Messages
            </h2>



            {
            messages.length === 0 ?


            <p className="text-slate-400">
                No messages yet
            </p>


            :


            messages.map(message=>(


                <div
                    key={message.id}
                    className="
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-6
                    "
                >


                    <h3 className="
                        text-xl
                        font-bold
                        text-white
                    ">
                        {message.name}
                    </h3>


                    <p className="text-cyan-400">
                        {message.email}
                    </p>



                    <p className="mt-4 text-slate-300">
                        Service:
                        {" "}
                        {message.service}
                    </p>



                    <p className="
                        mt-4
                        text-slate-400
                    ">
                        {message.message}
                    </p>




                    <div className="
                        mt-6
                        flex
                        gap-4
                        items-center
                    ">


                        <select

                            value={message.status}

                            onChange={
                                e =>
                                changeStatus(
                                    message.id,
                                    e.target.value
                                )
                            }

                            className="
                            rounded-lg
                            bg-slate-800
                            p-2
                            text-white
                            "

                        >

                            <option>
                                New
                            </option>

                            <option>
                                Read
                            </option>

                            <option>
                                Completed
                            </option>


                        </select>




                        <button

                            onClick={() =>
                                removeMessage(
                                    message.id
                                )
                            }

                            className="
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


                </div>


            ))
            }


        </div>

    );

}


export default Messages;
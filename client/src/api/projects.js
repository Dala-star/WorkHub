import api from "./axios";



export async function getMessages(){

    const response = await api.get(
        "/contact/"
    );


    return response.data;

}




export async function updateMessageStatus(
    id,
    status
){

    const response = await api.put(
        `/contact/${id}`,
        {
            status
        }
    );


    return response.data;

}




export async function deleteMessage(id){

    const response = await api.delete(
        `/contact/${id}`
    );


    return response.data;

}
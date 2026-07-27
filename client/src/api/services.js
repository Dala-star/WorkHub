import api from "./axios";



export async function getServices(){

    const response = await api.get(
        "/services/"
    );

    return response.data;

}



export async function createService(service){

    const response = await api.post(
        "/services/",
        service
    );

    return response.data;

}



export async function deleteService(id){

    const response = await api.delete(
        `/services/${id}`
    );


    return response.data;

}
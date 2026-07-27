import api from "./axios";


// SERVICES

export async function getAdminServices(){

    const response = await api.get(
        "/admin/services"
    );

    return response.data.services;

}


export async function createService(data){

    const response = await api.post(
        "/admin/services",
        null,
        {
            params: data
        }
    );

    return response.data;

}


export async function deleteService(id){

    const response = await api.delete(
        `/admin/services/${id}`
    );

    return response.data;

}



// PROJECTS

export async function getAdminProjects(){

    const response = await api.get(
        "/admin/projects"
    );

    return response.data.projects;

}


export async function createProject(data){

    const response = await api.post(
        "/admin/projects",
        null,
        {
            params:data
        }
    );

    return response.data;

}


export async function deleteProject(id){

    const response = await api.delete(
        `/admin/projects/${id}`
    );

    return response.data;

}



// CONTACTS

export async function getMessages(){

    const response = await api.get(
        "/admin/messages"
    );

    return response.data.messages;

}


export async function deleteMessage(id){

    const response = await api.delete(
        `/admin/messages/${id}`
    );

    return response.data;

}
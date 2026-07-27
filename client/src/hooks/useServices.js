import { useEffect, useState } from "react";

import { getServices } from "../api/services";


function useServices(){

    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(()=>{

        async function fetchServices(){

            try{

                const data = await getServices();

                setServices(data);

            }
            catch(error){

                console.error(
                    "Failed to load services",
                    error
                );

            }
            finally{

                setLoading(false);

            }

        }


        fetchServices();


    },[]);



    return {
        services,
        loading
    };

}


export default useServices;
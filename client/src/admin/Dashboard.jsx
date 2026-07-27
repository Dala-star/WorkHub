import ServicesManager from "./ServicesManager";
import ProjectsManager from "./ProjectsManager";
import Messages from "./Messages";


function Dashboard(){

    return (

        <div className="
            min-h-screen
            bg-slate-950
            p-10
        ">


            <h1 className="
                text-4xl
                font-bold
                text-white
            ">
                WorkHub Admin Dashboard
            </h1>


            <p className="
                mt-3
                text-slate-400
            ">
                Manage website content
            </p>



            <div className="
                mt-12
                grid
                gap-10
            ">


                <ServicesManager />


                <ProjectsManager />


                <Messages />


            </div>


        </div>

    );

}


export default Dashboard;
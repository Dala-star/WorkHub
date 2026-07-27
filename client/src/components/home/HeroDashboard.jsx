import {
  FaCheckCircle,
  FaClock,
  FaUsers,
} from "react-icons/fa";


function HeroDashboard() {


  const stats = [
    {
      title: "Projects",
      value: "25+",
      icon: FaCheckCircle,
    },

    {
      title: "Clients",
      value: "15+",
      icon: FaUsers,
    },

    {
      title: "Requests",
      value: "08",
      icon: FaClock,
    },
  ];



  const activity = [
    {
      name: "Business Website",
      status: "Completed",
    },

    {
      name: "Brand Identity Design",
      status: "In Progress",
    },

    {
      name: "React Training",
      status: "Upcoming",
    },
  ];



  return (

    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/80
        p-6
        shadow-2xl
        backdrop-blur-xl
      "
    >


      {/* Header */}

      <div
        className="
          mb-6
          flex
          items-center
          justify-between
        "
      >

        <div>

          <h3
            className="
              font-semibold
              text-white
            "
          >
            WorkHub Dashboard
          </h3>


          <p
            className="
              mt-1
              text-xs
              text-slate-400
            "
          >
            Project Overview
          </p>

        </div>




        <span
          className="
            rounded-full
            bg-[var(--color-primary)]/20
            px-3
            py-1
            text-xs
            font-medium
            text-[var(--color-primary)]
          "
        >
          Live
        </span>


      </div>







      {/* Stats */}


      <div
        className="
          grid
          grid-cols-3
          gap-4
        "
      >

        {stats.map((item)=>(

          <div
            key={item.title}
            className="
              rounded-xl
              border
              border-slate-800
              bg-[var(--color-background)]
              p-4
            "
          >

            <item.icon
              className="
                text-[var(--color-primary)]
              "
            />


            <p
              className="
                mt-3
                text-xs
                text-slate-400
              "
            >
              {item.title}
            </p>


            <h2
              className="
                mt-1
                text-2xl
                font-bold
                text-white
              "
            >
              {item.value}
            </h2>


          </div>


        ))}


      </div>







      {/* Activity Chart */}

      <div
        className="
          mt-6
          rounded-xl
          border
          border-slate-800
          bg-[var(--color-background)]
          p-5
        "
      >


        <div
          className="
            mb-5
            flex
            items-center
            justify-between
          "
        >

          <p
            className="
              text-sm
              font-semibold
              text-white
            "
          >
            Project Growth
          </p>


          <span
            className="
              text-xs
              text-slate-400
            "
          >
            Last 6 months
          </span>


        </div>





        <div
          className="
            flex
            h-36
            items-end
            gap-3
          "
        >

          {[40,60,45,90,70,100].map((height,index)=>(

            <div
              key={index}
              className="
                flex-1
                rounded-t-lg
                bg-[var(--color-primary)]
                opacity-80
                transition
                hover:opacity-100
              "
              style={{
                height:`${height}%`,
              }}
            />

          ))}


        </div>


      </div>








      {/* Recent Activity */}

      <div
        className="
          mt-6
        "
      >

        <h4
          className="
            mb-4
            text-sm
            font-semibold
            text-white
          "
        >
          Recent Activity
        </h4>



        <div
          className="
            space-y-3
          "
        >

          {activity.map((item)=>(

            <div
              key={item.name}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                bg-slate-800
                px-4
                py-3
              "
            >

              <span
                className="
                  text-sm
                  text-slate-300
                "
              >
                {item.name}
              </span>


              <span
                className="
                  text-xs
                  text-[var(--color-primary)]
                "
              >
                {item.status}
              </span>


            </div>


          ))}


        </div>


      </div>



    </div>


  );

}


export default HeroDashboard;
import React from "react";
import { IoIosRocket } from "react-icons/io";
interface Props {
  title: string;
}

export default function SubHero({ title }: Props) {
  const str =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="flex items-center">
            <div style={{ fontSize: "48px", width: "48px", height: "48px" }}>
              <IoIosRocket />
            </div>
            <h1 className="pl-4 text-5xl font-bold ">{title}</h1>
          </div>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
    // <div className="w-full text-center">
    //   <div className="max-w-[1240px] w-full mx-auto p-2 justify-center items-center">
    //     <div>
    //       {/* <div className="flex">
    //         <IoIosRocket className="h-full" />
    //         <h1 className="py-4 text-white text-left">{title}</h1>
    //       </div> */}
    //       <div className="flex items-center">
    //         <div style={{ fontSize: "48px", width: "48px", height: "48px" }}>
    //           <IoIosRocket />
    //         </div>
    //         <div className="text-center">
    //           <h1 className="py-4 pl-4 text-white">{title}</h1>{" "}
    //         </div>
    //       </div>

    //       {/* <h1 className="py-4 text-white">
    //         Tomorrow's <span className="text-yellow-200">Technopreneur</span>
    //       </h1> */}
    //       <p className="uppercase text-sm tracking-wdest text-gray-50">{str}</p>
    //     </div>
    //   </div>
    // </div>
  );
}

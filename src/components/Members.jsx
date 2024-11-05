// // import React from "react";
// // const teams = [
// //   {
// //     id: 1,
// //     image: "/president.png",
// //     name: "JON SMITH",
// //     post: "PRESIDENT",
// //     linkedin: "https://in.linkedin.com",
// //     git: "https://github.com",
// //     insta: "https://www.instagram.com",
// //   },
// //   {
// //     id: 2,
// //     image: "/vicepresident.png",
// //     name: "HELLA",
// //     post: "VICE PRESIDENT",
// //     linkedin: "https://in.linkedin.com",
// //     git: "https://github.com",
// //     insta: "https://www.instagram.com",
// //   },
// //   {
// //     id: 3,
// //     image: "/secretary.png",
// //     name: "STEVE",
// //     post: "SECRETARY",
// //     linkedin: "https://in.linkedin.com",
// //     git: "https://github.com",
// //     insta: "https://www.instagram.com",
// //   },
// // ];

// // function Team() {
// //   return (
// //     <div className="bg-black">
// //       <div name="team" className="flex justify-center py-20">
// //         <div className="flex justify-center items-center w-[400px] h-[60px] rounded-full bg-black">
// //           <h1 className="font-bold text-4xl tracking-wide text-white">TEAM</h1>
// //         </div>
// //       </div>
// //       <div className="flex justify-center">
// //         {teams.map((team) => (
// //           <div className="bg-black text-white w-[400px] h-[550px] rounded-[50%] border-2 border-white shadow-xl  -ml-10 ">
// //             <div className="border-2 border-white bg-white  w-[250px] h-[250px] rounded-full ml-[73px] mt-3">
// //               <img
// //                 className="transition-all duration-300   hover:grayscale-0 rounded-[50%] grayscale   mt-8"
// //                 src={team.image}
// //                 alt=""
// //               />
// //             </div>
// //             <h1 className="text-center font-bold text-3xl pt-5">{team.name}</h1>
// //             <h1 className="text-center font-bold text-xl pt-3">{team.post}</h1>
// //             <div className="flex justify-center gap-5 pt-10 text-white">
// //               <a href={team.linkedin} target="blank" className="text-white">
// //                 <img
// //                   className="w-[50px] text-white"
// //                   src="https://cdn-icons-png.freepik.com/512/1384/1384014.png?ga=GA1.1.1235215610.1709790793"
// //                   alt=""
// //                 />
// //               </a>
// //               <a href={team.git} target="blank">
// //                 <img
// //                   className="w-[50px]"
// //                   src="https://cdn-icons-png.freepik.com/512/733/733609.png?ga=GA1.1.1235215610.1709790793"
// //                   alt=""
// //                 />
// //               </a>
// //               <a href={team.insta} target="blank">
// //                 <img
// //                   className="w-[50px]"
// //                   src="https://cdn-icons-png.freepik.com/512/1384/1384015.png?ga=GA1.1.1235215610.1709790793"
// //                   alt=""
// //                 />
// //               </a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Team;
// import React from "react";

// const teams = [
//   {
//     id: 1,
//     image: "/president.png",
//     name: "JON SMITH",
//     post: "PRESIDENT",
//     linkedin: "https://in.linkedin.com",
//     git: "https://github.com",
//     insta: "https://www.instagram.com",
//   },
//   {
//     id: 2,
//     image: "/vicepresident.png",
//     name: "HELLA",
//     post: "VICE PRESIDENT",
//     linkedin: "https://in.linkedin.com",
//     git: "https://github.com",
//     insta: "https://www.instagram.com",
//   },
//   {
//     id: 3,
//     image: "/secretary.png",
//     name: "STEVE",
//     post: "SECRETARY",
//     linkedin: "https://in.linkedin.com",
//     git: "https://github.com",
//     insta: "https://www.instagram.com",
//   },
// ];

// function Team() {
//   return (
//     <div className="bg-black">
//       <div name="team" className="flex justify-center py-20">
//         <div className="flex justify-center items-center w-[400px] h-[60px] rounded-full bg-black">
//           <h1 className="font-bold text-4xl tracking-wide text-white">TEAM</h1>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         {teams.map((team) => (
//           <div
//             key={team.id}
//             className="bg-black text-white w-[400px] h-[550px] rounded-[50%] border-2 border-white shadow-xl -ml-10"
//           >
//             <div className="border-2 border-white bg-white w-[250px] h-[250px] rounded-full ml-[73px] mt-3">
//               <img
//                 className="transition-all duration-300 hover:grayscale-0 rounded-[50%] grayscale mt-8"
//                 src={team.image}
//                 alt=""
//               />
//             </div>
//             <h1 className="text-center font-bold text-3xl pt-5">{team.name}</h1>
//             <h1 className="text-center font-bold text-xl pt-3">{team.post}</h1>
//             <div className="flex justify-center gap-5 pt-10 text-white">
//               <a href={team.linkedin} target="blank" className="text-white">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="50"
//                   height="50"
//                   fill="white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20.447 20.449l-3.876-3.876c.585-1.32.844-2.793.671-4.216-.394-3.214-3.183-5.617-6.576-5.617-1.854 0-3.585.698-4.863 1.878l-2.91-2.91c2.057-2.06 5.09-3.434 8.776-3.157 5.697.34 9.536 5.472 8.647 11.277-.182 1.45-.75 2.825-1.563 4.037zm-3.726-9.986c-.16-1.446-.875-2.729-1.855-3.604l-2.74 2.74 2.92 2.921c1.193-1.614 2.034-3.658 1.706-5.393z" />
//                 </svg>
//               </a>
//               <a href={team.git} target="blank">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="50"
//                   height="50"
//                   fill="white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 .296C5.373.296.196 5.473.196 12c0 4.978 3.052 9.144 7.283 10.678.533.098.728-.23.728-.511v-1.806c-2.978.656-3.595-1.448-3.595-1.448-.484-1.23-1.184-1.559-1.184-1.559-.967-.657.072-.644.072-.644 1.067-.075 1.627 1.107 1.627 1.107 1.907 3.257 5.004 2.315 6.21 1.771.192-1.386.745-2.315 1.351-2.848-2.74-.314-5.616-1.358-5.616-6.024 0-1.329.469-2.42 1.244-3.273-.126-.314-.537-.945-.073-1.86 0 0 1.063.103 1.56 2.012 1.19-.33 2.433-.455 3.682-.455 1.249 0 2.493.125 3.684.455 0 0 .503-1.91 1.566-2.012-.463.916.053 1.548-.073 1.86.774.853 1.244 1.944 1.244 3.273 0 4.666-2.875 5.71-5.616 6.024 1.452 1.245 3.177 3.089 3.177 5.836v1.8c0 .28.193.611.73.511 4.232-1.534 7.284-5.7 7.284-10.678 0-6.527-5.178-11.704-11.804-11.704z" />
//                 </svg>
//               </a>
//               <a href={team.insta} target="blank">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="50"
//                   height="50"
//                   fill="white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M7.5 2.5c0-1.37 1.12-2.5 2.5-2.5s2.5 1.13 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.13-2.5-2.5zm9 0c0-1.37 1.12-2.5 2.5-2.5s2.5 1.13 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.13-2.5-2.5zm4.5 2c.553 0 1 .447 1 1v13c0 .553-.447 1-1 1h-18c-.553 0-1-.447-1-1v-13c0-.553.447-1 1-1h18zm-9 7c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Team;
import React from "react";

const teams = [
  {
    id: 1,
    image: "/president.png",
    name: "JON SMITH",
    post: "PRESIDENT",
    linkedin: "https://in.linkedin.com",
    git: "https://github.com",
    insta: "https://www.instagram.com",
  },
  {
    id: 2,
    image: "/vicepresident.png",
    name: "HELLA",
    post: "VICE PRESIDENT",
    linkedin: "https://in.linkedin.com",
    git: "https://github.com",
    insta: "https://www.instagram.com",
  },
  {
    id: 3,
    image: "/secretary.png",
    name: "STEVE",
    post: "SECRETARY",
    linkedin: "https://in.linkedin.com",
    git: "https://github.com",
    insta: "https://www.instagram.com",
  },
];

function Team() {
  return (
    <div className="bg-black">
      <div name="team" className="flex justify-center py-20">
        <div className="flex justify-center items-center w-[400px] h-[60px] rounded-full bg-black">
          <h1 className="font-bold text-4xl tracking-wide text-white">TEAM</h1>
        </div>
      </div>
      <div className="flex justify-center">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-black text-white w-[400px] h-[550px] rounded-[50%] border-2 border-white shadow-xl -ml-10"
          >
            <div className="border-2 border-white bg-white w-[250px] h-[250px] rounded-full ml-[73px] mt-3">
              <img
                className="transition-all duration-300 hover:grayscale-0 rounded-[50%] grayscale mt-8"
                src={team.image}
                alt=""
              />
            </div>
            <h1 className="text-center font-bold text-3xl pt-5">{team.name}</h1>
            <h1 className="text-center font-bold text-xl pt-3">{team.post}</h1>
            <div className="flex justify-center gap-5 pt-10 text-white">
              <a href={team.linkedin} target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="white" // LinkedIn color
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.449l-3.876-3.876c.585-1.32.844-2.793.671-4.216-.394-3.214-3.183-5.617-6.576-5.617-1.854 0-3.585.698-4.863 1.878l-2.91-2.91c2.057-2.06 5.09-3.434 8.776-3.157 5.697.34 9.536 5.472 8.647 11.277-.182 1.45-.75 2.825-1.563 4.037zm-3.726-9.986c-.16-1.446-.875-2.729-1.855-3.604l-2.74 2.74 2.92 2.921c1.193-1.614 2.034-3.658 1.706-5.393z" />
                </svg>
              </a>
              <a href={team.git} target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="white" // GitHub color
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .296C5.373.296.196 5.473.196 12c0 4.978 3.052 9.144 7.283 10.678.533.098.728-.23.728-.511v-1.806c-2.978.656-3.595-1.448-3.595-1.448-.484-1.23-1.184-1.559-1.184-1.559-.967-.657.072-.644.072-.644 1.067-.075 1.627 1.107 1.627 1.107 1.907 3.257 5.004 2.315 6.21 1.771.192-1.386.745-2.315 1.351-2.848-2.74-.314-5.616-1.358-5.616-6.024 0-1.329.469-2.42 1.244-3.273-.126-.314-.537-.945-.073-1.86 0 0 1.063.103 1.56 2.012 1.19-.33 2.433-.455 3.682-.455 1.249 0 2.493.125 3.684.455 0 0 .503-1.91 1.566-2.012-.463.916.053 1.548-.073 1.86.774.853 1.244 1.944 1.244 3.273 0 4.666-2.875 5.71-5.616 6.024 1.452 1.245 3.177 3.089 3.177 5.836v1.8c0 .28.193.611.73.511 4.232-1.534 7.284-5.7 7.284-10.678 0-6.527-5.178-11.704-11.804-11.704z" />
                </svg>
              </a>
              <a href={team.insta} target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="white" // Instagram color
                  viewBox="0 0 24 24"
                >
                  <path d="M7.5 2.5c0-1.37 1.12-2.5 2.5-2.5s2.5 1.13 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.13-2.5-2.5zm9 0c0-1.37 1.12-2.5 2.5-2.5s2.5 1.13 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.13-2.5-2.5zm4.5 2c.553 0 1 .447 1 1v13c0 .553-.447 1-1 1h-18c-.553 0-1-.447-1-1v-13c0-.553.447-1 1-1h18zm-9 7c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

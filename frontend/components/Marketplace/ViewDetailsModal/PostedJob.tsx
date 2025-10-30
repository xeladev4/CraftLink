// "use client";
// import { Job } from "@/utils/job";
// import Image from "next/image";
// import React, { useState } from "react";
// import Modal from "../Modal";
// import JobDetails from "./JobDetails";
// import AnimatedDiv from "@/components/AnimatedDiv";
// import { formatDate } from "@/utils/formatDate";

// interface TitleDetails {
//   name?: string;
//   imgSrc: string;
// }
// const PostedJob = ({ job }: { job: Job }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const displayPrice = job.price ? job.price / 1000000 : 0;

//   const titleDetails: TitleDetails[] = [
//     {
//       imgSrc: "/location.svg",
//       name: job.preferredLocation,
//     },
//     {
//       imgSrc: "/language.svg",
//       name: job.language ? job.language : "English",
//     },
//     {
//       imgSrc: "/calendar.svg",
//       name: `${job.projectDuration.weeks} weeks`,
//     },
//     {
//       imgSrc: "/totalJobs.png",
//       name:
//       job?.totalJobs && job?.totalJobs > 1
//           ? `${job.totalJobs} jobs posted`
//           : `${job.totalJobs} job posted`,
//     },
//   ];
//   return (
//     <AnimatedDiv
//       initialX="100%"
//       animateX={0}
//       exitX={"-100%"}
//       duration={1.0}
//       className="group hover:bg-[#F2E8CF0A] border-y border-[#FCFBF726] w-full md:rounded-lg flex flex-col px-4"
//       onClick={() => {
//         setIsModalOpen(true);
//       }}
//     >
//       <span className="italic font-merriweather text-fontPrimary text-sm py-2 pt-4">
//         Job dropped: {formatDate(job.createdAt)}
//       </span>
//       <h3 className="font-alata text-xl md:text-3xl text-fontPrimary group-hover:text-yellow">
//         {job.title}
//       </h3>
//       <div className="flex w-full md:w-[90%] 2xl:w-[50%] gap-x-4 py-2 ">
//         {titleDetails.map(
//           (details, index) =>
//             index < 3 && (
//               <div
//                 key={details.imgSrc}
//                 className={`flex justify-center items-center min-w-[28%] md:min-w-[23%] w-fit px-2 gap-x-2 ${
//                   index == 2 ? "border-0" : "border-r border-[#FCFBF726] "
//                 }`}
//               >
//                 <span className="font-merriweather text-[#D8D6CF]">
//                   {details.name}
//                 </span>
//               </div>
//             )
//         )}
//       </div>
//       <div className="py-2 md:py-8 font-merriweather text-fontPrimary flex gap-x-2 md:gap-x-4">
//         <Image
//           src="/expertise.svg"
//           alt="Expertise"
//           width="30"
//           height="22"
//           className="hidden md:flex"
//         />

//         <span className="capitalize self-center text-lg">{job.experienceLevel}</span>
//         <span className="px-4 text-fontPrimary self-center">---</span>
//         <Image
//           src="/money.svg"
//           alt="Amount"
//           width="30"
//           height="22"
//           className="hidden md:flex"
//         />

//         <span className=" self-center font-bold text-2xl">
//           ${displayPrice}
//           {/* <span className="text-[#B5B4AD] font-normal text-base">
//             ({job.paymentType})
//           </span> */}
//         </span>
//       </div>
//       <p className="text-[#D8D6CF] font-merriweather line-clamp-2 w-[90%]">
//         {job.projectDescription}
//       </p>
//       <div className="flex  flex-wrap md:py-4 py-2 gap-x-4 gap-y-2">
//         {job.skillCategory?.map(
//           (tag, index) =>
//             index < 3 && (
//               <div
//                 className="bg-[#26220826] text-[#D8D6CF] border rounded-full border-[#FFFFFF40] text-xs text-center xl:text-sm p-[10px]"
//                 key={tag}
//               >
//                 {tag}
//               </div>
//             )
//         )}
//       </div>
//       <div className="flex justify-between font-merriweather py-4">
//         <div className="flex py-2 max-sm:justify-center max-sm:w-full gap-x-4 italic text-sm">
//           <div className="flex items-center max-sm:w-[32%] gap-x-2">
//             <Image
//               src="/secure-payment.png"
//               alt={"paid"}
//               width="20"
//               height="12"
//             />{" "}
//             <span>{job.payment ? job.payment : "Secure Payment"}</span>
//           </div>
//           <div className="flex items-center gap-x-2">
//             <Image src="/star.png" alt="rating" width="20" height="12" />{" "}
//             <span>{job.rating ? job.rating : 3}/5</span>
//           </div>
//           <div className="flex items-center gap-x-2 capitalize">
//             <div className="rounded-full w-4 h-4 bg-[#AEFF00]" />{" "}
//             <span>{job.type ? job.type : "Open Application"}</span>
//           </div>
//         </div>
//         <button
//           className="hidden md:flex py-2 px-4 bg-[#262208] rounded-sm text-[#FCF8E3] font-bold"
//           onClick={() => {
//             setIsModalOpen(true);
//           }}
//         >
//           View Details
//         </button>
//       </div>

//       {isModalOpen && (
//         <Modal closeFn={() => setIsModalOpen(false)}>
//           <div className="bg-[#333333] w-[90vw] h-[90vh] max-w-4xl rounded-xl overflow-hidden flex flex-col">
//             {/* Header with close button */}
//             <div className="flex justify-between items-center p-6 border-b border-[#FCFBF726]">
//               <h1 className="text-white font-bold text-xl border-b-2 border-yellow pb-1">
//                 JOB DETAILS
//               </h1>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="text-[#B5B4AD] hover:text-white text-2xl"
//               >
//                 ×
//               </button>
//             </div>
            
//             {/* Scrollable content */}
//             <div className="flex-1 overflow-y-auto p-6">
//               <JobDetails job={job} />
//             </div>
//           </div>
//         </Modal>
//       )}
//     </AnimatedDiv>
//   );
// };

// export default PostedJob;
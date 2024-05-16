import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import ns1 from "./images/image10.png"
import ns2 from "./images/nazz1.png"
import ns3 from "./images/ns.png"
import ns4 from "./images/ns2.png"
import ns5 from "./images/ns3.png"
import w1 from "./images/w1.png"
import w2 from "./images/im.png"

export default function Gall() {
	return (
      <div style={{
                margin:"30px"
      }}>
         
         <MDBRow
			className="bg-white"
			style={{
				width: "99.7vw",
				margin:"0 auto"
			}}
		>
			<MDBCol lg={4} md={3} className="mb-4 mb-lg-0">
				  <img
               src={ns1}
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 1"
					 loading="lazy"
               effect="blur"
           
				/>

				<img
			
					// src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756296/g2_mgmxa0.jpg"
               src={ ns2}
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 2"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>

			<MDBCol lg={4} className="mb-4 mb-lg-0">
				  <img
               src={ ns3}
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 3"
							 loading="lazy"
              effect="blur"
				/>

				  <img
               src={ ns4}
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 4"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>

			<MDBCol lg={4} className="mb-4 mb-lg-0">
				<img
					
               src={ ns5}
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 5"
							 loading="lazy"
              effect="blur"
				/>

				<img
					
					src={w1}
					className="w-100 shadow-1-strong rounded mb-4"
				    alt="Event 6"
							 loading="lazy"
              effect="blur"
            />
            <img
					
					src={w2}
					classame="w-100 shadow-1-strong rounded mb-4"
				    alt="Event 6"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>
			
	
         </MDBRow>
         

         <h2 style={{

             textAlign:"center"
         }}> You Look Pretty 😉😉 </h2>
      </div>
   );
   



}
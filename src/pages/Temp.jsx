// import React, { useState, useRef } from 'react';
// import html2canvas from 'html2canvas';
// import './Temp.css';

// // Import your background image
// import backgroundImage from '../assets/pic-20.png';

// function Temp() {
//   const [invitationDetails, setInvitationDetails] = useState({
//     groomName: '',
//     brideName: '',
//     venue: '',
//     date: '',
//   });

//   const cardRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInvitationDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDownload = () => {
//     html2canvas(cardRef.current).then((canvas) => {
//       const link = document.createElement('a');
//       link.download = 'wedding-invitation.png';
//       link.href = canvas.toDataURL();
//       link.click();
//     });
//   };

//   return (
//     <div className="app">
//       <div className="form-section">
//         <h2>Wedding Invitation Details</h2>
//         <form>
//           <input
//             type="text"
//             name="groomName"
//             placeholder="Groom's Name"
//             value={invitationDetails.groomName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="brideName"
//             placeholder="Bride's Name"
//             value={invitationDetails.brideName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="venue"
//             placeholder="Venue"
//             value={invitationDetails.venue}
//             onChange={handleInputChange}
//           />
//           <input
//             type="date"
//             name="date"
//             value={invitationDetails.date}
//             onChange={handleInputChange}
//           />
//         </form>
//         <button onClick={handleDownload}>Download Invitation</button>
//       </div>
//       <div className="preview-section">
//         <div className="card" ref={cardRef} style={{backgroundImage: `url(${backgroundImage})`}}>
//           <div className="card-content">
//             <h1>Wedding Invitation</h1>
//             {invitationDetails.groomName && invitationDetails.brideName && (
//               <p className="names">{invitationDetails.groomName} & {invitationDetails.brideName}</p>
//             )}
//             <p>invite you to celebrate their wedding</p>
//             {invitationDetails.venue && <p>Venue: {invitationDetails.venue}</p>}
//             {invitationDetails.date && <p>Date: {invitationDetails.date}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Temp;

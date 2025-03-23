// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "../Components/Navbar";
// import { useSpring, animated } from "react-spring";

// const Result = () => {
//   const [activeTab, setActiveTab] = useState("Detection");
//   const [scannedUrls, setScannedUrls] = useState([]);
//   const location = useLocation();
//   const { url, isPhishing } = location.state || {};

//   const styles = {
//     container: {
//       top: 0,
//       left: 0,
//       right: 0,
//       fontFamily: "Arial, sans-serif",
//       backgroundColor: "#1a1a2e",
//       color: "#d3d3d3",
//       padding: "24px",
//       height: "100vh",
//       justifyContent: "flex-start",
//       paddingTop: "80px",
//       boxSizing: "border-box",
//       position: "fixed",
//       overflow: "hidden",
//       paddingLeft: "10%",
//       paddingRight: "10%",
//     },
//     header: {
//       display: "flex",
//       gap: "16px",
//       marginBottom: "24px",
//     },
//     cardSquare: {
//       backgroundColor: "#2d2d2d",
//       borderRadius: "8px",
//       width: "150px",
//       height: "150px",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     cardRectangle: {
//       backgroundColor: "#2d2d2d",
//       borderRadius: "8px",
//       height: "120px",
//       flexGrow: 1,
//       padding: "16px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     warningCard: {
//       backgroundColor: "#ef4444",
//       color: "white",
//       borderRadius: "8px",
//       padding: "20px",
//       textAlign: "center",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     safeCard: {
//       backgroundColor: "#4ade80",
//       color: "white",
//       borderRadius: "8px",
//       padding: "20px",
//       textAlign: "center",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     tabMenu: {
//       display: "flex",
//       justifyContent: "space-between",
//       position: "relative",
//       width: "350px",
//       borderBottom: "2px solid #444",
//       marginBottom: "2rem",
//     },
//     tab: {
//       fontSize: "0.7rem",
//       padding: "0.5rem 1rem",
//       background: "none",
//       color: "#d3d3d3",
//       border: "none",
//       cursor: "pointer",
//       transition: "color 0.3s",
//       flex: 1,
//       textAlign: "center",
//       position: "relative",
//     },
//     activeTab: {
//       color: "#87cefa",
//     },
//     underline: {
//       position: "absolute",
//       bottom: "-2px",
//       height: "2px",
//       backgroundColor: "#87cefa",
//       transition: "left 0.3s ease, width 0.3s ease",
//     },
//   };

//   const tabs = ["Detection", "Details", "History", "Community"];

//   useEffect(() => {
//     const fetchScannedUrls = async () => {
//       const data = [
//         { url: "http://example1.com", status: "Clean" },
//         { url: "http://example2.com", status: "Phishing" },
//         { url: "http://example3.com", status: "Clean" },
//       ];
//       setScannedUrls(data);
//     };

//     fetchScannedUrls();
//   }, []);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   // Phishing Alert with Animation
//   const phishingAlert = useSpring({
//     opacity: isPhishing ? 1 : 0,
//     transform: isPhishing ? "scale(1)" : "scale(0)",
//     config: { tension: 180, friction: 12 },
//   });

//   return (
//     <div style={styles.container}>
//       <Navbar />
//       <div style={styles.header}>
//         <div style={styles.cardSquare}>
//           <h1 style={{ fontSize: "36px", margin: "0" }}>0</h1>
//           <p style={{ color: "#4ade80", margin: "4px 0" }}>Community Score</p>
//           <p style={{ fontSize: "14px", color: "#aaa" }}>/96</p>
//         </div>
//         <div style={styles.cardRectangle}>
//           {isPhishing ? (
//             <animated.div style={phishingAlert}>
//               <div style={styles.warningCard}>
//                 <h2 style={{ fontSize: "1.5rem" }}>
//                   This URL is flagged as Phishing!
//                 </h2>
//                 <p style={{ fontSize: "1rem", margin: "10px 0" }}>
//                   Proceed with caution.
//                 </p>
//               </div>
//             </animated.div>
//           ) : (
//             <div style={styles.safeCard}>
//               <h2>No security vendors flagged this URL as malicious</h2>
//             </div>
//           )}
//           <p style={{ color: "#aaa", margin: "8px 0" }}>{url}</p>
//         </div>
//       </div>

//       <div style={styles.tabMenu}>
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             style={{
//               ...styles.tab,
//               ...(activeTab === tab ? styles.activeTab : {}),
//             }}
//             onClick={() => handleTabClick(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//         <div
//           style={{
//             ...styles.underline,
//             width: `${100 / tabs.length}%`,
//             left: `${tabs.indexOf(activeTab) * (100 / tabs.length)}%`,
//           }}
//         />
//       </div>

//       {activeTab === "Detection" && (
//         <table style={styles.table}>
//           <thead style={styles.tableHead}>
//             <tr>
//               <th style={styles.tableCell}>Security Vendor</th>
//               <th style={styles.tableCell}>Analysis</th>
//             </tr>
//           </thead>
//           <tbody style={styles.tableBody}>
//             <tr style={styles.tableRow}>
//               <td style={styles.tableCell}>Abusix</td>
//               <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
//                 Clean
//               </td>
//             </tr>
//             <tr style={styles.tableRow}>
//               <td style={styles.tableCell}>ADMINUSLabs</td>
//               <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
//                 Clean
//               </td>
//             </tr>
//             <tr style={styles.tableRow}>
//               <td style={styles.tableCell}>AlienVault</td>
//               <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
//                 Clean
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Result;

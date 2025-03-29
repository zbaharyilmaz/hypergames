// import { useEffect, useRef } from "react";
// import { VFX } from "@vfx-js/core";

// const HoverButton = ({ text }) => {
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const button = buttonRef.current;
//     if (!button) return
//     let vfx;
//     try {
//       vfx = new VFX();
//     } catch (error) {
//       console.error("VFX initialization failed:", error);
//       return;
//     }


//     const handleMouseEnter = () => {
//       vfx.add(button, { shader: "glitch", overflow: 100 });
//     };

//     const handleMouseLeave = () => {
//       vfx.remove(button);
//     };

//     if (button) {
//       button.addEventListener("mouseenter", handleMouseEnter);
//       button.addEventListener("mouseleave", handleMouseLeave);
//     }
//     return () => {
//       if (button) {
//         button.removeEventListener("mouseenter", handleMouseEnter);
//         button.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []); 

//   return (
//    // <button
//       ref={buttonRef}
//       style={{
//         all: "unset",
//         backgroundColor: "#F29F05",
//         border: "2px solid #292929",
//         borderRadius: "5px",
//         color: "#292929",
//         cursor: "pointer",
//         fontFamily: "Bungee Tint",
//         fontSize: "0.95rem",
//         padding: "0.2rem",
//         textTransform: "uppercase",
//       }}
//     >
//       {text}
//    // </button>
//   );
// };

// export default HoverButton;
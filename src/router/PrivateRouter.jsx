import { useContext } from "react";
import { Navigate,Outlet } from "react-router-dom";
import AuthPage from "../context/AuthContext";

const PrivateRouter = () => {
const {currentUser}= useContext(AuthPage)
return currentUser? <Outlet/> : <Navigate to="/" />
};

export default PrivateRouter;
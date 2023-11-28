import {Link, Outlet} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div style={{display:"flex"}}>
                <div className="btn btn-outline-success my-2 my-sm-0" ><Link to={"/create"}>Create</Link></div>
                <div className="btn btn-outline-success my-2 my-sm-0 ml-3" ><Link to={"/home"}>Home</Link></div>
            </div>

            <Outlet></Outlet>
        </>
    )
}
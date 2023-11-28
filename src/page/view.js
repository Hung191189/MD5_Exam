import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function View(){
const navigate = useNavigate();
const {id} = useParams();
const [list, setList] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`).then(res=>{
            setList(res.data)
        })
    })
    return(
        <>
            <div className="card">
                <div className="card-header">
                    Product information
                </div>
                <div className="card-body">
                    <h3 className="card-title">Product name: {list.title}</h3>
                    <h5 className="card-text">Description: {list.description}</h5>
                    <h5 className="card-text">Price: {list.price}</h5>
                    <Link to={"/home"} className="btn btn-primary"> Back to home</Link>
                </div>
            </div>
        </>
    )
}
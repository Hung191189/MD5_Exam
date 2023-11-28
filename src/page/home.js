import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then(res => {
            setList(res.data);
        })
    }, [])

    const handleDelete = (userId) => {
        Swal.fire({
            title: 'Are you sure delete it',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/products/${userId}`)
                    .then((res) => {
                        setList(list.filter(blog => blog.id !== userId));
                        // loadList()
                        Swal.fire({
                            title: 'Success delete',
                            icon: 'success',
                            timer: 1000,
                            showConfirmButton: true
                        })
                    })
                    .catch((error) => {
                        console.error('Error', error);
                        Swal.fire('Not found', 'error');
                    });
            }
        });
    };


    return (
        <>
            <table className="table table-striped">
                                <thead>
                      <tr>
                                   <th scope="col">#</th>
                              <th scope="col">Product Name</th>
                                    <th scope="col">Describe</th>
                                 <th scope="col">Price</th>
                                <th scope="col" rowSpan={2}>Action</th>
                                   <th scope="col"></th>
                              </tr>
                            </thead>
                              <tbody>
                            {list.map((item, index) =>{
                    return(
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td><Link to={"/view/" + item.id}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td className="btn btn-primary">< Link to={"/edit/" + item.id} style={{textDecoration:"none", color: "white"}} >Edit</Link> </td>
                            <td onClick={() => handleDelete(item.id)} className="btn btn-danger ml-3" >Delete</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}
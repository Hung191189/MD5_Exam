import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import ReactQuill from "react-quill";

export default function Edit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [list, setList] = useState({});
    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id).then(res => {
            setList(res.data);
        })
    }, [id])
    return (
        <>
            {Object.keys(list).length > 0 &&
                <div className="row">
                    <div className="offset-3 col-6">
                        <h1 style={{textAlign: "center"}}>Edit a product</h1>
                        <Formik initialValues={{
                            id: id,
                            title: list.title || "",
                            price: list.price || "",
                            description: list.description || ""
                               }}
                                enableReinitialize={true}
                                onSubmit={(values) => {
                                    axios.put('http://localhost:3000/products/' + id, values).then(r => {
                                        alert('Success Edit')
                                        navigate("/home")
                                    })
                                }}
                        >
                            <Form>
                                <div className="form-group">
                                    <label>Title</label>
                                    <Field className={"form-control"} name={"title"}></Field>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <Field type="number" className={"form-control"} name={"price"}>
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className={"form-control"} name={"description"}>
                                    </Field>
                                </div>


                                <button type="submit" className="btn btn-primary ml-3">Save</button>
                            </Form>
                        </Formik>
                    </div>
                </div>}
        </>
    )
}
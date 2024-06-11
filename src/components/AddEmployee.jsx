import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddEmployee = () => {
    const [data, setData] = useState(
        {
            "ecode":"",
            "name":"",
            "designation":"",
            "salary":"",
            "cname":"",
            "email":""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully")

                } else {
                    alert("Error")

                }
            }
        ).catch()
    }
  return (
    <div>
         <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>
                                <u>
                                    <center>Employee Details</center>
                                </u>
                            </h1>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Employee Code</label>
                                <input type="text" className="form-control" name='ecode' value={data.ecode} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Designation</label>
                                <input type="text" className="form-control" name='designation' value={data.designation} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Salary</label>
                                <input type="text" className="form-control" name='salary' value={data.salary} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text" className="form-control" name='cname' value={data.catchname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddEmployee
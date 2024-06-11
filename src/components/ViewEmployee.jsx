import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEmployee = () => {
    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.get("").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
  return (
    <div>
          <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Employee Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                    <td>{value.ecode}</td>
                                    <td>{value.name}</td>
                                    <td>{value.designation}</td>
                                    <td>{value.salary}</td>
                                    <td>{value.cname}</td>
                                    <td>{value.email}</td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
    </div>
  )
}

export default ViewEmployee
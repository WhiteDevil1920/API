import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

function App() {
    const [data, setData] = useState([])
    const [records, setRecords] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setData(res.data)
                setRecords(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const Filter = (event) => {
        setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }
    return (
        <div className="App">
            <header>
                <div className="navbar_container">
                    <Stack spacing={10} direction="row" style={{ position: "absolute", top: "20px", left: "20px" }}>
                        <Button variant="text">Home</Button>
                        <Button variant="text">About</Button>
                        <Button variant="text">Contact</Button>
                    </Stack>
                    <Stack direction="row" spacing={7} style={{ position: "absolute", top: "10px", left: "1200px" }}>
                        <Avatar>A</Avatar>
                        <Avatar sx={{ bgcolor: deepOrange[300] }}>B</Avatar>
                        <Avatar sx={{ bgcolor: deepPurple[300] }}>C</Avatar>
                    </Stack>
                </div>
            </header>
            <input type="search" onChange={Filter} placeholder="Search Here" className="srch_bar"></input>
            <div className="tbl_cnt">
                <div className="main_cnt">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.phone}</td>
                                    <td>{d.address.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
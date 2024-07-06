import "./homeindex.css"
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
const HomePage=()=>{
    const [value,setValue]=useState();
    const navigate=useNavigate();
    const handleJoinRoom=useCallback(()=>{
            navigate(`/room/${value}`)
    },[navigate,value])
    return <div className="Container">
        <input value={value} className="input" onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Enter Room Code" />
        <button className="btn" onClick={handleJoinRoom}>Join</button>
    </div>
};
export default HomePage;
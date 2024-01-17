import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./home.css"
import NavBar from '../../component/navbar/NavBar'
import Fetured from '../../component/feuchured/Fetured'
//import { List } from '@mui/material'
import Lists from '../../component/lists/Lists'

export default function Home({type}) {
    const [lists,setLists] = useState([])
    const [genra,setGanra] = useState(null)
    useEffect(()=>{
        const getRondumeList= async ()=>{
            try {
               const res = await axios.get(`lists${type ? "?type=" +type:"" }${genra ? "&genra=" +genra:""}`,
               {
                headers:{
                    token : "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTg1NGRlNzM4MzVmNTY2M2U2YjdkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDI4ODE1MywiZXhwIjoxNzAwNzIwMTUzfQ.6ZlAXs1oMBDm0ruzfVeLJeijAsqF7YawImV6YxAUv8U"
                }
               })
                setLists(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getRondumeList()
    },[type,genra])
    return (
        <div className='home'>
            <NavBar/>
            <Fetured type={type}/>
            {lists.map((list)=>(
                <Lists list={list}/>)) }
          

        </div>
    )
}

// <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
// <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
// <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
//,
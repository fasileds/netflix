import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import axios from "axios"
import "./feachure.css"
import { useEffect, useState } from "react"

export default function Fetured({type}) {
    const [content,setContente]=useState({})
    useEffect(()=>{
        const getRondumContent = async()=>{
            try {
                const res = await axios.get(`/movies/randome?type=${type}`,
                {
                    headers:{
                        token : "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTg1NGRlNzM4MzVmNTY2M2U2YjdkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDI4ODE1MywiZXhwIjoxNzAwNzIwMTUzfQ.6ZlAXs1oMBDm0ruzfVeLJeijAsqF7YawImV6YxAUv8U"
                    }
                   })
                   console.log(content)
                setContente(res.data[0])
            } catch (error) {
                console.log(error)
            }
            
        }
        getRondumContent()
    },[type])
    return (
        <div className="featured">
            {type && (
                <div className="catagories">
                    <span className="texts">{type ==="movie"? "Movies":"Series"}</span>
                    <select name="genera" id="genera">
                        <option>Genera</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sic-Fic</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentery">Documentery</option>
                    </select>
                </div>
            )}
           <img  className="image"
            src={content.image} alt="" />
            <div className="info">
                <img className="image2" src={content.imageTitle} alt="" />
                <span className="description">{content.desc}</span>
                <div className="button">
                    <button className="play"><PlayArrow/>
                    <span>Play</span>
                    </button>
                    <button className="moreinfo"><InfoOutlined/>
                      <span>Info</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./listItem.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ListItem({index,item}) {
 const [isHovered,setIsHovered] = useState(false)
 const [movie ,SetMovie] = useState({})
 useEffect(()=>{
    const getMove = async ()=>{
        try {
            const res= await axios.get("/movies/find/"+item)
               SetMovie(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    getMove()
 },[item])

    return (
        <Link to = {{pathname:"/watch", movie:movie}}>
        <div className="listItem" 
        style={{left:isHovered && index *225 - 50 + index*2.5}}
        onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <img className="image3" src={movie.image} alt="" />
            {isHovered &&(
                <>
            <video src={movie.trialer} autoPlay={true} loop/>
          
            
            <div className="itemsInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">+{movie.limit}</span>
                    <span>{movie.year}</span>
                </div>
                <div className="description">
                    {movie.desc}
                    </div>
                    <div className="genera">{movie.genra}</div>

            </div>
            </>
              )}

        </div>
        </Link>
    )
}

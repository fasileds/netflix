import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import "./lists.css"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"

export default function Lists({list}) {
    const [isMoved,setIsMoved] = useState(false)
    const [silideNumber,setSilideNumber]=useState(0)
    const listRef= useRef()
    const handleClick=(direction)=>{
        setIsMoved(true)
        const distance = listRef.current.getBoundingClientRect().x - 50;
     if(direction ==="left" && silideNumber>0){
        setSilideNumber(silideNumber-1)
        listRef.current.style.transform = `translateX(${230+distance}px)`
     }
     if(direction ==="right" &&silideNumber<5){
        setSilideNumber(silideNumber+1)
        listRef.current.style.transform = `translateX(${-230+distance}px)`
     }
    }
    return (
        <div className="list">
           <span className="listTitle">{list.title}</span>
           <div className="wraper">
            <ArrowBackIosOutlined className="siliderArrow left" onClick = {()=>handleClick("left")}
            style={{display : !isMoved && "none"}}
            />
            <div className="continer" ref={listRef}>
                {list.content.map((item,index)=>(
                <ListItem index ={index} item={item} />
                ))}

            </div>
            <ArrowForwardIosOutlined className="siliderArrow right" onClick= {()=>handleClick("right")}/>
           </div>
        </div>
    )
}


import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import "./navbar.css"
import { useState } from "react"
import {Link} from "react-router-dom"

export default function NavBar() {
    const [isScrolled,setIseScroled] = useState(false)
    window.onscroll = ()=>{
        setIseScroled(window.pageYOffset ===0? false:true)
        return ()=>{
            window.onscroll=null
        }

    }
    return (
        <div className= {isScrolled?"navbarScrolled":"navbar"}>
            <div className="continer">
                <div className="left">
                    <img className="imgLeft" src="./R.jpg" alt="" />
                    <Link to ="/" className="linke">
                    <span>HomePage</span></Link>
                    <Link to ="/Series" className="linke">
                    <span>Series</span></Link>
                    <Link to = "/movies" className="linke">
                    <span>Movies</span></Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className ="iconns"/>
                    <span>KID</span>
                    <Notifications className ="iconns"/>
                    <img className="rightImg" src="./OIP.jpg" alt="" />
                    <div className="profile">
                    <ArrowDropDown className ="iconns"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>LogOut</span>
                    </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

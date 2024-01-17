import { ArrowBackOutlined } from '@mui/icons-material'
import "./watch.css"
import { Link, useLocation } from 'react-router-dom'

export default function Watch() {
    const location =useLocation();
    const movie = location.movie
    return (
        <div className='watch'>
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            </Link>
            <video className='video' controls autoPlay Progress  src={movie.video}></video>

            
        </div>
    )
}

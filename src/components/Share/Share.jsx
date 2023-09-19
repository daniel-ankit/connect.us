import "./Share.css"
import { PermMedia } from "@mui/icons-material"

export default function Share() {
    return (
        <div className="share">
            <div className="wrapper">
                <div className="topBar">
                    <img src="/assets/Person/1.jpg" alt="" />
                    <input placeholder="What's on your mind?"></input>
                </div>
                <hr/>
                <div className="shareOptions">
                    <div className="option">
                        <PermMedia />
                        <span className="image">Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
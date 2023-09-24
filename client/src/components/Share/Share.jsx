import "./Share.css"
import { EmojiEmotions, LocalOffer, PermMedia, Room } from "@mui/icons-material"

export default function Share() {
    return (
        <div className="share">
            <div className="wrapper">
                <div className="topBar">
                    <img src="/assets/Person/1.jpg" alt="" />
                    <input placeholder="What's on your mind?"></input>
                </div>
                <hr/>
                <div className="bottomBar">
                    <div className="shareOptions">
                        <div className="option">
                            <PermMedia htmlColor="tomato" className="icon"/>
                            <span className="media">Add Media</span>
                        </div>
                        <div className="option">
                            <LocalOffer htmlColor="blue" className="icon"/>
                            <span className="image">Tag</span>
                        </div>
                        <div className="option">
                            <Room htmlColor="green" className="icon"/>
                            <span className="image">Location</span>
                        </div>
                        <div className="option">
                            <EmojiEmotions htmlColor="#FFC300" className="icon"/>
                            <span className="image">Feelings</span>
                        </div>
                    </div>
                    <button>Share</button>
                </div>
            </div>
        </div>
    )
};
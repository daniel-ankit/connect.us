import { MoreVert } from "@mui/icons-material"
import "./Post.css"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked)
    }
        return (
        <div className="post">
            <div className="wrapper">
                <div className="topBar">
                    <div className="topLeft">
                        <img src={"/assets/" + Users.filter(u=>u.id === post.userId)[0].profile} alt="" />
                        <div className="text">
                            <span>{Users.filter(u=>u.id === post.userId)[0].userName}</span>
                            <span className="time">{post.date}</span>
                        </div>
                    </div>
                    <div className="topRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="centerBar">
                    <span className="caption">{post?.description}</span>
                    <img src={"/assets/" + post.photo} alt="" />
                </div>
                <div className="bottomBar">
                    <div className="bottomLeft">
                        <img src="/assets/Like.png" alt="" onClick={likeHandler}/>
                        <span className="counter">{like} Likes</span>
                    </div>
                    <div className="bottomRight">
                        <span> {post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
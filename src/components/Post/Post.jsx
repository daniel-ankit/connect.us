import { MoreVert } from "@mui/icons-material"
import "./Post.css"

export default function Post({post}) {
    console.log(post);
    return (
        <div className="post">
            <div className="wrapper">
                <div className="topBar">
                    <div className="topLeft">
                        <img src="/assets/Person/1.jpg" alt="" />
                        <div className="text">
                            <span>Katherine Langford</span>
                            <span className="time">{post.date}</span>
                        </div>
                    </div>
                    <div className="topRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="centerBar">
                    <span className="caption">{post?.description}</span>
                    <img src={post.photo} alt="" />
                </div>
                <div className="bottomBar">
                    <div className="bottomLeft">
                        <img src="/assets/Like.png" alt="" />
                        <span className="counter">{post.like} Likes</span>
                    </div>
                    <div className="bottomRight">
                        <span> {post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
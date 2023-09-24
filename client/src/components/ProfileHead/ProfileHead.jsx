import "./ProfileHead.css"

export default function ProfileHead() {
    return (
        <div className="ProfileHeadWrapper">
            <div className="profileCover">
                <img src="/assets/Cover/1.jpg" alt="" className="coverImg"/>
                <img src="/assets/Person/1.jpg" alt="" className="profilePic"/>
            </div>
            <div className="profileInfo">
                <h4 className="profileName">Katherine Langford</h4>
                <span>I've heard so many stories about me now that I don't know which one is the most popular.</span>
            </div>
        </div>
    )
};
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
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, sunt? </span>
            </div>
        </div>
    )
};
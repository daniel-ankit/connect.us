import "./closeFriends.css"

export default function closeFriends({user}) {
    return (
        <li>
            <div className="profile">
                <img src={user.profile} alt="" />
            </div>
            <span>{user.userName}</span>
        </li>
    )
};
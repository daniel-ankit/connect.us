import "./Online.css"

export default function Online({user}) {
    return (
        <li>
            <div className="profile">
                <img src={user.profile} alt="" />
                <span className="online"></span>
            </div>
            <span>{user.userName}</span>
        </li>
    )
};
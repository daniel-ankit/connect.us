import "./Header.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Header() {
    return (
        <div className="container">
            <div className="left">
                <span className="logo">connect.us</span>
            </div>
            <div className="center">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input className="searchInput" placeholder="Search for friend, post or videos" />
                </div>
            </div>
            <div className="right">
                <div className="HeaderLinks">
                    <span className="HeaderLink">Homapage</span>
                    <span className="HeaderLink">Timeline</span>
                </div>
                <div className="HeaderIcons">
                    <div className="HeaderIcon">
                        <Person />
                        <span className="HeaderIconBadge">1</span>
                    </div>
                    <div className="HeaderIcon">
                        <Chat />
                        <span className="HeaderIconBadge">2</span>
                    </div>
                    <div className="HeaderIcon">
                        <Notifications />
                        <span className="HeaderIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/Person/1.jpg" alt="" className="HeaderProfile" />
            </div>
        </div>
    )
};
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@mui/icons-material";
import "./Left.css";
import {} from "@mui/material/Icon"
import Friends from "../closeFriends/closeFriends"
import { Users } from "../../dummyData";

export default function Left() {
    return (
        <div className="Left">
            <div className="wrapper">
                <ul>
                    <li>
                        <RssFeed className="icons"/>
                        <span>Feed</span>
                    </li>
                    <li>
                        <Chat className="icons"/>
                        <span>Chats</span>
                    </li>
                    <li>
                        <PlayCircleFilledOutlined className="icons"/>
                        <span>Videos</span>
                    </li>
                    <li>
                        <Group className="icons"/>
                        <span>Groups</span>
                    </li>
                    <li>
                        <Bookmark className="icons"/>
                        <span>Bookmark</span>
                    </li>
                    <li>
                        <Event className="icons"/>
                        <span>Events</span>
                    </li>
                    <li>
                        <School className="icons"/>
                        <span>Courses</span>
                    </li>
                </ul>
                <button>Show More</button>
                <hr/>
                <ul className="Friends" over>
                    {Users.map(u=>(
                        <Friends key = {u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
};
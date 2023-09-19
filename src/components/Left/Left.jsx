import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@mui/icons-material";
import "./Left.css";
import {} from "@mui/material/Icon"

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
                        <HelpOutline className="icons"/>
                        <span>Questions</span>
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
                    <li className="friend">
                        <img src="/assets/Person/2.jpeg" alt=""/>
                        <span>Tom Cruise</span>
                    </li>
                    <li className="friend">
                        <img src="/assets/Person/3.jpg" alt=""/>
                        <span>Chris Evans</span>
                    </li>
                    <li className="friend">
                        <img src="/assets/Person/5.jpg" alt=""/>
                        <span>Mimi Chakraborty</span>
                    </li>
                    <li className="friend">
                        <img src="/assets/Person/4.jpg" alt=""/>
                        <span>Jack Sparrow</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};
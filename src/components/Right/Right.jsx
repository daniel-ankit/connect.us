import "./Right.css";
import Online from "../online/online";
import { Users } from "../../dummyData"

export default function Right() {
    return (
        <div className="Right">
            <div className="wrapper">
                <div className="birthday">
                    <img src="/assets/Birthday.png" alt="" />
                    <span> <b>Gal Gadot</b> and <b>3 other friends </b> have birtdays today.</span>
                </div>
            </div>
            <h4>Online Friends</h4>
            <ul className="Friends">
                {Users.map(u=>(
                    <Online key = {u.id} user={u}/>
                ))}
            </ul>
        </div>
    )
};
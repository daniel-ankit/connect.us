import "./Right.css";
import Online from "../online/online";
import { Users } from "../../dummyData"
import React from 'react';

export default function Right({profile}) {
    const showProfile = profile !== undefined ? profile : false;
    if(showProfile)
    {
        return (
            <div className="Right">
                <div className="wrapper">
                    <h4 className="rightTitle">User Information</h4>
                    <div className="rightInfo">
                        <div className="infoItem">
                            <span className="infokey">From : </span>
                            <span className="infoValue">New York</span>
                        </div>
                        <div className="infoItem">
                            <span className="infokey">Home Town : </span>
                            <span className="infoValue">Perth, Australia</span>
                        </div>
                        <div className="infoItem">
                            <span className="infokey">Relationship : </span>
                            <span className="infoValue">Single</span>
                        </div>
                    </div>
                    <h4 className="rightTitle">User Friends</h4>
                    <div className="rightTitle">
                        <div className="followings">
                            <div className="following">
                                <img src="/assets/Person/2.jpeg" alt="" />
                                <span>Tom Cruise</span>
                            </div>
                            <div className="following">
                                <img src="/assets/Person/3.jpg" alt="" />
                                <span>Chris Evans</span>
                            </div>
                            <div className="following">
                                <img src="/assets/Person/10.jpg" alt="" />
                                <span>Katherine Langford</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    else
    {
        return (
                <div className="Right">
            <div className="wrapper">
                <div className="birthday">
                    <img src="/assets/Birthday.png" alt="" />
                    <span> <b>Gal Gadot</b> and <b>3 other friends </b> have birtdays today.</span>
                </div>
                <div className="posted">
                    <img src="/assets/Posted.png" alt="" />
                    <span> <b>Josephine Langford</b> has recently posted after a long time.</span>
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
    }
};
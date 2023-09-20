import "./Right.css";

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
                <li>
                    <div className="profile">
                        <img src="/assets/Person/2.jpeg" alt="" />
                        <span className="online"></span>
                    </div>
                    <span>Tom Cruise</span>
                </li>
                <li>
                    <div className="profile">
                        <img src="/assets/Person/3.jpg" alt="" />
                        <span className="online"></span>
                    </div>
                    <span>Chris Evans</span>
                </li>
                <li>
                    <div className="profile">
                        <img src="/assets/Person/4.jpg" alt="" />
                        <span className="online"></span>
                    </div>
                    <span>Jhonny Depp</span>
                </li>
            </ul>
        </div>
    )
};
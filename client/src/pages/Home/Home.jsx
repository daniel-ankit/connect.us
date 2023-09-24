import Feed  from "../../components/Feed/Feed"
import Header from "../../components/Header/Header"
import Left from "../../components/Left/Left"
import './Home.css'
import Right from "../../components/Right/Right"
import Ads from "../../components/ads/ads";

export default function Home() {
    return (
        <>
            <Header />
            <div className="Main">
                <div className="homeContainer">
                    <Left/>
                    <Feed/>
                    <Right/>
                </div>
            </div>
        </>
    )
};
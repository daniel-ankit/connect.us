import Header from "../../components/Header/Header"
import Left from "../../components/Left/Left"
import './Profile.css'
import Right from "../../components/Right/Right"
import ProfileMiddle from "../../components/ProfileMiddle/ProfileMiddle"

export default function Home() {
    return (
        <>
            <Header />
            <div className="Main">
                <div className="homeContainer">
                    <Left/>
                    <ProfileMiddle/>
                    <Right profile/>
                </div>
            </div>
        </>
    )
};
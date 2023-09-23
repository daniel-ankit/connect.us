import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "./Login.css"

const Background = () => {
    const options = {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#FFFFFF"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1
            },
            size: {
                value: { min: 2, max: 6 }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                }
            }
        }
    };

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="background">
            <Particles options={options} init={particlesInit} />
        </div>
    );
};

const Foreground = ({login}) => {
    const showLogin = login !== undefined ? login : false;
    if(showLogin)
    {
        return (
            <div className="loginWrapper">
            <div className="top">
                <h3>connect.us</h3>
                <span>Connect with your friends and the world around you!</span>
            </div>
            <div className="loginBox">
                <input type="Email" placeholder="Email" />
                <input type="Password" placeholder="Password"/>
                <button className="login">Log In</button>
                <span className="forgot">Forgot Password</span>
                <button className="register">Create a New Account</button>
            </div>
        </div>
        );
    }
    else
    {
        return (
            <div className="loginWrapper">
            <div className="top">
                <h3>connect.us</h3>
                <span>Connect with your friends and the world around you!</span>
            </div>
            <div className="loginBox">
                <input type="text" placeholder="Username" />
                <input type="Email" placeholder="Email" />
                <input type="Password" placeholder="Password"/>
                <input type="Password" placeholder="Confirm Password"/>
                <button className="login">Sign Up</button>
                <button className="register">Login into Existing</button>
            </div>
        </div>
        );
    }
}

export default function Login({login}) {
    return (
        <div className="loginContainer">
            <Background />
            {login ? <Foreground login/> : <Foreground/>}        
        </div>
    );
};
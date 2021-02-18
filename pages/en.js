import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { MdSecurity, MdImportantDevices, MdAutorenew } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GrMoney } from "react-icons/gr";
import { DiReact } from "react-icons/di";
import Navbar from '../components/Navbar'

const HomePageEnglish = () => {
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [errorMessage, setErrorMessage] = useState(null);


    function validateEmail(email) {
        setState("LOADING")
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email.match(pattern)) {
            subscribe(email)
        } else {
            setState("ERROR")
            setErrorMessage('Invalid email. Write us at matchmakingtech@gmail.com and we will contact you')
        }
    }

    const subscribe = async (email) => {
        setErrorMessage(null);
        let info = {
            from: 'Luis <matchmakingtech@gmail.com>',
            to: `${email}, luisglopez7777@gmail.com`,
            subject: 'Luis from Matchmaking',
            text: 'Hello! \n\nThanks for your interest in Matchmaking. We will contact you as soon as possible.\n\nGreetings, Luis G'
        }
        try {
            const response = await axios.post("/api/email", info);
            setState("SUCCESS");
        } catch (e) {
            setState("ERROR");
            setErrorMessage('Ooops... Something went wrong. Send us an email at matchmakingtech@gmail.com and we will contact you')
        }
    }

    return (
        <div>
            <Head>
                <title>Matchmaking Technologies</title>
                <meta name="description" content="Change the way tennis is played at your club. Have a social network of tennis players, sign up for tournaments, position yourself in the ranking, and much more!" />
            </Head>
            {/* <header>
                <nav>
                    <ul className="main-nav">
                        <li className="main-nav__item"> <h2>Matchmaking Technologies</h2></li>
                        <Link href="/">
                            <li className="main-nav__item"><p>Versión en español</p></li>
                        </Link>
                    </ul>
                </nav>
            </header> */}
            <Navbar version="Español" refTo="/" />

            <main className="landing">
                <div className="top-container">
                    <div className="landing-left">
                        <h1>We want to change the way tennis is played in your club</h1>
                        <p>Write your email so that we can contact you</p>
                        <form className="email">
                            <label htmlFor="emailEn">
                                <input type="email" name="emailEn" autoComplete="email" placeholder="Your email" id="emailEn" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <span>
                                <button
                                    disabled={state === "LOADING"}
                                    onClick={() => validateEmail(email)}
                                >
                                    Contact me
                                </button>
                            </span>
                        </form>
                        {state === "LOADING" && (
                            <p>Loading...</p>
                        )}

                        {state === "ERROR" && (
                            <p id="error">{errorMessage}</p>
                        )}
                        {state === "SUCCESS" && (
                            <p id="success">We sent you an email. You can also write us at: matchmakingtech@gmail.com</p>
                        )}

                    </div>

                    <div className="landing-right">
                        <iframe title="App explained" src="https://www.youtube.com/embed/XD3IjoDBPW0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <h2 className="subtitle">Features</h2>

                <div className="bottom-container">
                    <div className="bottom-left">
                        <div className="feature">
                            <h3><MdSecurity /> Security</h3>
                            <p>The information of your members is safe with us. We use the best security protocols.</p>
                        </div>

                        <div className="feature">
                            <h3><FiSettings /> Branding</h3>
                            <p>Improve the branding of your club. We personalize the app with the styles, colors, logo and url that represent you.</p>
                        </div>

                        <div className="feature">
                            <h3><MdAutorenew /> Automation</h3>
                            <p>The app works by itself. No third-party management is required.</p>
                        </div>
                    </div>

                    <div className="bottom-right">
                        <div className="feature">
                            <h3><GrMoney /> Earn money</h3>
                            <p>With our system of tournaments and sponsors you can earn money. </p>
                        </div>

                        <div className="feature">
                            <h3><DiReact /> Technology</h3>
                            <p>Just like the companies we admire (Facebook, Airbnb, Netflix, The New York Times) we use ReactJS.</p>
                        </div>

                        <div className="feature">
                            <h3><MdImportantDevices /> On all your devices</h3>
                            <p>Our app works on cell phones, computers, tablets and more. Regardless of the browser or operating system.</p>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default HomePageEnglish
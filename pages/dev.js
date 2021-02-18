import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { MdSecurity, MdImportantDevices, MdAutorenew } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GrMoney } from "react-icons/gr";
import { DiReact } from "react-icons/di";

const dev = () => {
    return (
        <div>
            <Head>
                <title>Matchmaking Technologies</title>
                <meta name="description" content="Cambia la forma en que se juega tenis en tu club. Ten una red social de tenistas, inscríbete a torneos, posicionate en el ranking y mucho mas!" />
            </Head>

            <Navbar version='Spanish' refTo='/' />

            <div className="top-container">
                <div className="landing-left">
                    <h1>Explanation of the app from a developer point of view</h1>
                    <p>We believe that having a modern software is the best competitive advantage you club can have</p>
                </div>

                <div className="landing-right">
                    <iframe title="Explicacion de App" src="https://www.youtube.com/embed/T7oapr0eWr8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
        </div>
    )
}
export default dev

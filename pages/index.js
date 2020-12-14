import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { MdSecurity, MdImportantDevices, MdAutorenew } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GrMoney } from "react-icons/gr";
import { DiReact } from "react-icons/di";

const HomePage = () => {
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [errorMessage, setErrorMessage] = useState(null);


    function validateEmail(valor) {
        setState("LOADING")
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email.match(pattern)) {
            subscribe(email)
        } else {
            setState("ERROR")
            setErrorMessage('Correo inválido. Envíanos un correo a matchmakingtech@gmail.com y nos pondremos en contacto')
        }
    }

    const subscribe = async (email) => {
        setErrorMessage(null);
        let info = {
            from: 'Luis <matchmakingtech@gmail.com>',
            to: `${email}, luisglopez7777@gmail.com`,
            subject: 'Luis de Matchmaking',
            text: 'Hola! \n\nGracias por tu interés en Matchmaking. Pronto nos pondremos en contacto contigo.\n\nSaludos, Luis G'
        }
        try {
            const response = await axios.post("/api/email", info);
            setState("SUCCESS");
        } catch (e) {
            setState("ERROR");
            setErrorMessage('Uuups... Algo salió mal. Envíanos un correo a matchmakingtech@gmail.com y nos pondremos en contacto')
        }
    }

    return (
        <div>
            <Head>
                <title>Matchmaking Technologies</title>
                <meta name="description" content="Cambia la forma en que se juega tenis en tu club. Ten una red social de tenistas, inscríbete a torneos, posicionate en el ranking y mucho mas!" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index,follow" />
                {/* <link rel="manifest" href="/public/manifest.json" /> */}
            </Head>
            <header>
                <nav>
                    <ul className="main-nav">
                        <li className="main-nav__item"> <h2>Matchmaking Technologies</h2></li>
                        <Link href="/en">
                            <li className="main-nav__item"><p>English Version</p></li>
                        </Link>
                    </ul>
                </nav>
            </header>

            <main className="landing">
                <div className="top-container">
                    <div className="landing-left">
                        <h1>Queremos cambiar la forma en la que se juega tenis en tu club</h1>
                        <p>Dejános tu correo para ponernos en contacto</p>
                        <div className="email">
                            <input type="email" autoComplete="email" placeholder="Tu correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span>
                                <button
                                    disabled={state === "LOADING"}
                                    onClick={() => validateEmail(email)}
                                >
                                    Quiero saber más
                                </button>
                            </span>
                        </div>
                        {state === "LOADING" && (
                            <p>Cargando...</p>
                        )}

                        {state === "ERROR" && (
                            <p id="error">{errorMessage}</p>
                        )}
                        {state === "SUCCESS" && (
                            <p id="success">Te hemos enviado un correo. También nos puedes escribir a: matchmakingtech@gmail.com</p>
                        )}
                    </div>

                    <div className="landing-right">
                        <iframe title="Explicacion de App" src="https://www.youtube.com/embed/nQ3T1ke-g38" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <h2 className="subtitle">Características y ventajas</h2>

                <div className="bottom-container">
                    <div className="bottom-left">
                        <div className="feature">
                            <h3><FiSettings /> Marca</h3>
                            <p>Posiciona la marca de tu club. Personalizamos la app con los estilos, colores, logo y url que te representen.</p>
                        </div>

                        <div className="feature">
                            <h3><MdSecurity /> Seguridad</h3>
                            <p>La información de tus usuarios está segura con nosotros. Usamos los mejores protocolos de seguridad.</p>
                        </div>

                        <div className="feature">
                            <h3><MdAutorenew /> Automatización</h3>
                            <p>La aplicación funciona por si sola. No se necesita gestión por parte de un tercero.</p>
                        </div>
                    </div>

                    <div className="bottom-right">
                        <div className="feature">
                            <h3><GrMoney /> Gana dinero</h3>
                            <p>Con nuestro sistema de torneos y patrocinadores puedes ganar dinero.</p>
                        </div>

                        <div className="feature">
                            <h3><DiReact /> Tecnología</h3>
                            <p>Al igual que las empresas que más admiramos (Facebook, Netflix, Airbnb, The New York Times) usamos ReactJS.</p>
                        </div>

                        <div className="feature">
                            <h3><MdImportantDevices /> En todos tus dispositivos</h3>
                            <p>Nuesta aplicación funciona en celulares, computadoras, laptops, tablets y demás. Sin importar el navegador o sistema operativo.</p>
                        </div>

                    </div>
                </div>
            </main>
        </div >
    )
}

export default HomePage


// import Document, { Html, Head, Main, NextScript, Meta } from 'next/document'

// class MyDocument extends Document {
//     // static async getInitialProps(ctx) {
//     //     const initialProps = await Document.getInitialProps(ctx)
//     //     return { ...initialProps }
//     // }

//     render() {
//         return (
//             <Html>
//                 <Head>
//                     {/* <>
//                         <meta charset="UTF-8" />
//                         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                         <title>Matchmaking Technologies</title>
//                         <meta name="description" content="Cambia la forma en que se juega tenis en tu club. Ten una red social de tenistas, inscríbete a torneos, posicionate en el ranking y mucho mas!" />
//                         <meta name="robots" content="index,follow" />
//                     </> */}
//                     {/* <title>Match</title> */}
//                 </Head >
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </Html>
//         )
//     }
// }

// export default MyDocument

import React from 'react';
import './Home.css';
function Home() {
    return (
        <div className="Container">
            <div className="fur-container">
                <img src={require("../../shared/img/Fursona.png")} className="Img-welcome"/>
            </div>
            <h1>Hola!</h1>
            <div className="message-container">
                <h2 className="message">Bienvenido a este basurero</h2>
                <h2 className="message">MI BASURERO</h2>
                <p className="msgTxt">En esta página encontrarás cosas que me gustan en particular,</p>
                <p className="msgTxt">asi que navega y disfruta del contenido</p>
            </div>
            <div className="image-container">
                <p>Arte destacado</p>
                <input type="image" src={require("../../shared/img/AshDash_ART.jpg")} className="FeaturedArt" onClick="window.location.href='https://w3docs.com"/>
                <p>Hecho por @AshGray_Art</p>
            </div>
            <div className="game-container">
                <p>Juego destacado</p>
                <a href="/putoJuego"><img src={require("../../shared/img/Smash.png")} className="FeaturedGame"/></a>
                <p>Hecho por mi, Carlos Farias y Gilberto Guzmán</p>
            </div>
        </div>
    );
}

export default Home;
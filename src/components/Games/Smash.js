import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import './Game.css';
function Smash() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "Smash/SmashBros.loader.js",
        dataUrl: "Smash/SmashBros.data",
        frameworkUrl: "Smash/SmashBros.framework.js",
        codeUrl: "Smash/SmashBros.wasm",
    });
    
    const loadingPercentage = Math.round(loadingProgression * 100);

    return (
        <div className="containerGame">
            {
                isLoaded === false && (
                <div className="loading-overlay">
                <p>Loading... ({loadingPercentage}%)</p>
                </div>
                )
            }
            <Unity className="unity" unityProvider={unityProvider}/>
            <h1><strong>Descripción</strong></h1>
            <p className="description">
                Juego realizado como proyecto final para el 3er parcial. Un intento de Smash
                bastante curioso con solo 2 personajes y uno que otro bug. Solo se puede jugar
                con 2. No hay opción de un solo jugador.
            </p>
        </div>
    );
}

export default Smash;
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import './Game.css';

function Runnerverse() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "Runner/Runnerverse.loader.js",
        dataUrl: "Runner/Runnerverse.data",
        frameworkUrl: "Runner/Runnerverse.framework.js",
        codeUrl: "Runner/Runnerverse.wasm",
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
                Juego realizado durante la Game Jam organizada por Uniat
                hecha por alumnos de 4to semestre de programación y diseño de arte.
                Eres un ladrón que, tras observar en el periódico una mochila peculiar, decides robarla
                pero en el proceso viajas entre varios universos. Tu objetivo es conseguir la mayor
                puntuación posible.
            </p>
        </div>
    );
}

export default Runnerverse;
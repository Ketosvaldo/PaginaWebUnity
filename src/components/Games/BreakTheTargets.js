import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import './Game.css';
function BreakTheTargets() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "BreakTheTargets/BreakTHETargets.loader.js",
        dataUrl: "BreakTheTargets/BreakTHETargets.data",
        frameworkUrl: "BreakTheTargets/BreakTHETargets.framework.js",
        codeUrl: "BreakTheTargets/BreakTHETargets.wasm",
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
                Juego realizado como proyecto para el 3er parcial. Esta es una pequeña demo prueba
                para disparos en 3ra persona. Realiza la mayor puntuación posible disparando en el centro
                de las dianas.
            </p>
        </div>
    );
}

export default BreakTheTargets;
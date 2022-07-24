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
        <div className="container">
            {
                isLoaded === false && (
                <div className="loading-overlay">
                <p>Loading... ({loadingPercentage}%)</p>
                </div>
                )
            }
            <Unity className="unity" unityProvider={unityProvider}/>
        </div>
    );
}

export default Smash;
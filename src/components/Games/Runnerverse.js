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

export default Runnerverse;
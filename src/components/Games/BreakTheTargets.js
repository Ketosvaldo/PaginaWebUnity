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

export default BreakTheTargets;
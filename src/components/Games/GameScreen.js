import React from 'react';
import './GameScreen.css';

function GameScreen() {
    return (
        <div className="okcontainer">
            <div className="title">
                Disfruta de este catálogo
            </div>
            <div className="box">
                <div className="title">
                    Runnerverse
                </div>
                <a href="/runnerverse"><img src={require('../../shared/img/RunnerverseChico.png')} className="img"/></a>
            </div>
            <div className="box">
                <div className="title">
                    Break the targets
                </div>
                <a href="/BrkTrgts"><img src={require('../../shared/img/BrkTrgts.png')} className="img"/></a>
            </div>
            <div className="box">
                <div className="title">
                    Super Smash Bros & Knuckles
                </div>
                <a href="/putoJuego"><img src={require('../../shared/img/SmashChico.png')} className="img"/></a>
            </div>
        </div>
    );
}

export default GameScreen;
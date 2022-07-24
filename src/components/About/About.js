import React from 'react';
import './About.css';
import items from '../../items/items';
import Cards from './Cards';
function About() {
    return (
        <div className="About-container">
            <h2>Sobre mi</h2>
            <p>
                Me llamo Osvaldo Ketchul González, y estoy estudiando programación para crear videojuegos y
                algún día crear una compañía desarrolladora en México. Actualmente he desarrollador varios proyectos
                chiquitos pero tengo un proyecto en desarrollo ya un poco ambicioso y espero terminar el prototipo para antes
                de fin de año
            </p>
            <h2>Sobre mi trabajo</h2>
            <p>
                Los 3 juegos disponibles en la sección de Games, son juegos en los que participé. Sin embargo, hay aún más
                juegos en los que he trabajo, algunos de ellos fueron en Game Jams y otros proyectos escolares. Con esto he 
                estado ganando experiencia para desarrollar mi propio videojuego y cada día me acerco más al producto final.
                Los juegos que están disponibles son versiones mejoradas de lo que fue su primera versión.
            </p>
            <h2>Arte</h2>
            <p>
                Aqui un poco de arte que considero esta genial
            </p>
            <div className="Cards-display">
                {
                    items.map((items, i) => (
                        <Cards
                            key = {i}
                            item = {items.id}
                            image = {items.image}
                            description = {items.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default About;
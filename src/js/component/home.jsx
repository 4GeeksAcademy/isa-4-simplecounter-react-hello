import React, { useState, useEffect } from "react";
import { Digit } from "./digit.jsx";

const Home = () => {
    const [timer, setTimer] = useState(0); 
    const [active, setActive] = useState(true); 
    // con el primer const seleciono desde qué número inicia el contador y con el segundo lo activo 

    useEffect(() => {
        if (active) {
            const intervalID = setInterval(() => {
                setTimer(value => value + 1); 
                // El valor de los números va aumentando un segundo cada segundo
            }, 1000);

            return () => clearInterval(intervalID); 
            
        }
    }, [active]);

    return (
        <main className="text-center">
            <section className="counter-holder">
                <Digit digitValue={<span className="fa fa-clock"></span>} />
                <Digit digitValue={Math.floor(timer / 100000) % 10} />
                <Digit digitValue={Math.floor(timer / 10000) % 10} />
                <Digit digitValue={Math.floor(timer / 1000) % 10} />
                <Digit digitValue={Math.floor(timer / 100) % 10} />
                <Digit digitValue={Math.floor(timer / 10) % 10} />
                <Digit digitValue={Math.floor(timer % 10)} />
            </section>
        </main>
    );
};

export default Home;
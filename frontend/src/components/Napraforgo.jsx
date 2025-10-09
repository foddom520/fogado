import React from "react";
import logo from '../assets/logo.png';
import hollo from '../assets/holloko_masolata.jpg';

function napraforgo() {
    return (
        <div>
            <h3>Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
            A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára. A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében.
            <p><a href="https://falusiturizmus.eu/" target='_blank'>Tájékoztató oldal</a><br  /><img src={logo} alt="logo.jpg" /></p>
            <p><img src={hollo} alt="holloko_masolata.jpg" /></p>
        </div>
    )
}
export default napraforgo;
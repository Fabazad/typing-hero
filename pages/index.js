import React from "react";
import Board from "../components/Board";
import services from "../services";

export default function Home() {
    const startGame = () => {
        services.gameActionSubject.next("start");
        document.addEventListener("keydown", (e) => {
            const key = e.key.toUpperCase();
            if (key.match(/^[A-Z]?$/)) {
                //services.currentLetterSubject.next(key);
            } else {
                e.preventDefault();
            }
        }, false);
    };

  return (
    <div className="container">
        <div className="row mt-3">
            <div className="col-12">
                <Board/>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 text-center">
                <button className="btn btn-primary" onClick={startGame}>Commencer</button>
            </div>
        </div>
    </div>
  )
}
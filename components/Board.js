import React, {useEffect, useState} from "react";
import constants from "../helpers/constants";
import BoardRow from "./BoardRow";
import {scroller, Element} from 'react-scroll';
import services from "../services";

const offset = 10000;
const duration = 20000;


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default function Board() {

    const [rows, setRows] = useState([]);
    const [currentLetter, setCurrentLetter] = useState(null);
    const [letterIndex, setLetterIndex] = useState(1);

    useEffect(() => {
        const rows = (new Array(40)).fill(null).map(e => {
            return Object.keys(constants.LETTER_POSITIONS)[getRandomInt(22)]
        });

        setRows([null, null, null, null, null].concat(rows));

        scroller.scrollTo('test', {
            containerId: 'scroll-test',
            duration: 1,
            smooth: true,
            offset
        });

        services.gameActionSubject.subscribe(() => {
            scroller.scrollTo('test', {
                containerId: 'scroll-test',
                duration,
                smooth: 'linear',
                ignoreCancelEvents: true
            });
            setInterval(() => {
                setLetterIndex(letterIndex => letterIndex + 1);
            }, offset * 1000 / duration);
        });

        services.currentLetterSubject.subscribe(setCurrentLetter);

    }, []);

    useEffect(() => {
        services.currentLetterSubject.next(rows[rows.length - letterIndex]);
    }, [letterIndex]);

    return (
        <>
            <div className="w-100 board p-2" id="scroll-test">
                <Element name={'test'}></Element>
                {rows.map((row, index) => <BoardRow key={index} letter={row}/>)}
            </div>
            <div>Current letter : {currentLetter} => {letterIndex}</div>
        </>
    )
};

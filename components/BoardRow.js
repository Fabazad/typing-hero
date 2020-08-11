import React from "react";
import BoardCol from "./BoardCol";
import constants from "../helpers/constants";

export default function BoardRow(props) {

    const {letter} = props;

    const cols = (new Array(constants.COL_NUMBER)).fill(null).map((col, index) => {
        if (letter && index === (constants.LETTER_POSITIONS[letter] - 1)) {
            return letter;
        }
        return null
    });

    return (
        <div className="text-center w-100 board-row">
            {cols.map((col, index) => <BoardCol key={index} letter={col}/>)}
        </div>
    )
};

import React from "react";

export default function BoardCol(props) {

    const {letter} = props;

    return (
        <div className={"d-inline-block shadow m-1 tile-design " + (letter ? ' letter-col' : 'empty-col')}>
            <span>
                {letter}
            </span>
        </div>
    )
};

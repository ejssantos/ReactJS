import React from "react";

const UseCallbackButtons = (props) => {
    console.log("render...");
    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>
                +6
            </button>
            <button className="btn" onClick={() => props.inc(12)}>
                +12
            </button>
            <button className="btn" onClick={() => props.inc(18)}>
                +18
            </button>
        </div>
    )
}

{/*
    React.memo() irá criar um cache do componente (Ex. UseCallbackButtons),
    e somente renderizará se as propiedades passadas forem diferentes, ou se
    estiver passando uma nova função.

    Se remover React.memo(), voltará a renderização.
*/}
export default React.memo(UseCallbackButtons);
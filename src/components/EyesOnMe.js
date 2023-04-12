import React from "react";

function EyesOnMe(){
    function blur(){
        console.log('Hey! Eyes on me!')
    }
    function focus(){
        console.log('Good!')
    }
    return (
        <div>
            <button onBlur={blur} onFocus={focus}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe
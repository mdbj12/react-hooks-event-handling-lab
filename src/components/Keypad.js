import React from 'react';

function Keypad (){
    function keypad(e){
        console.log(`${e.target.name}`)
    }

    return (
        <div>
            <input
                type='password'
                name='Entering password...'
                onChange={keypad}
                placeholder='Entering password...'
            />
        </div>
    )
}

export default Keypad;
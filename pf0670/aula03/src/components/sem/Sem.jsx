import React, { useState } from 'react'

export default function Sem() {

    const [relogio, setRelogio] = useState()
    const [count, setCount] = useState(0)

    setTimeout(() => {
        setRelogio(new Date().toLocaleTimeString())
        setCount(count + 1)
        if (count >= 20) {
            setCount(0)
        }

    }, 1000);

    return (
        <div>

            <div>

            </div>

            <h2>Time : {relogio}</h2>
            {count > 10 ? <p>ACESO</p> : <p>APAGADO</p>}
        </div>
    )
}

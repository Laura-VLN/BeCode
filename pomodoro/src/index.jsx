import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './index.css';

function Compteur() {
    const [minutes, setMinutes] = useState(null)
    const [secondes, setSecondes] = useState(null)
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSecondes = secondes < 10 ? `0${secondes}` : secondes

    function Start() {
        useEffect(() => {
            let interval = setInterval(() => {
                clearInterval(interval)
                if (secondes === 0) {
                    if (minutes !== 0) {
                        setSecondes(59)
                        setMinutes(minutes - 1)
                    } else {
                        let minutes = message ? 24 : 4
                        let secondes = 59

                        setSecondes(secondes)
                        setMinutes(minutes)
                        setMessage(!message)
                    }
                } else {
                    setSecondes(secondes - 1)
                }
            }, 1000)
        }, [secondes])
    }

    if (minutes || secondes === null) {
        return <>
            <button onClick={() => Start()}>Start</button>
        </>
    } else {
        return <>
            <div>{timerMinutes}:{timerSecondes}</div>
        </>
    }
}

render(
    <div>
        <Compteur />
    </div>,
    document.getElementById('app')
)

// import React, {useState, useEffect} from 'react';
// import { render } from 'react-dom';
// import './index.css';

// function Pomodoro() {
//     const [minutes, setMinutes] = useState(25)
//     const [secondes, setSecondes] = useState(0)
//     const [message, setMessage] = useState(false)

//     useEffect(() => {
//         let interval = setInterval(() => {
//             clearInterval(interval)
//             if (secondes === 0) {
//                 if (minutes !== 0) {
//                     setSecondes(59)
//                     setMinutes(minutes - 1)
//                 } else {
//                     let minutes = message ? 24 : 4
//                     let secondes = 59

//                     setSecondes(secondes)
//                     setMinutes(minutes)
//                     setMessage(!message)
//                 }
//             } else {
//                 setSecondes(secondes - 1)
//             }
//         }, 1000)
//     }, [secondes])

//     const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
//     const timerSecondes = secondes < 10 ? `0${secondes}` : secondes

//     return <>
//         <div className="pomodoro">
//             <div className="message">
//                 {message && <div>Coffee time ! You will have to work in :</div>}
//             </div>
//             <div className="timer">{timerMinutes}:{timerSecondes}</div>
//         </div>
//     </>
// }

// render(
//     <div>
//         <Pomodoro />
//     </div>,
//     document.getElementById('app')
// )
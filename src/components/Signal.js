import React, {useState, useEffect, Fragment} from 'react';
import SignalMain from "./SignalMain";
import './signal.css';


const Signal = ({signal, resetInterval}) => {
    const {lights} = signal;
    const currTime = new Date()
    const syncTime = new Date(signal.timer)

    const [ratioTimeModulo, setRatioTimeModulo] = useState(0)

    // every second grow the timeAfterReset bar
    useEffect(() => {
        const intervalObj = setInterval(() => {
            const timeAfterReset = Math.ceil(currTime.valueOf() / 1000 - syncTime.valueOf() / 1000) % resetInterval + 1
            setRatioTimeModulo(timeAfterReset)
        }, 1000);

        return () => {
            clearInterval(intervalObj);
        }
    })

    // compute styles of the bar
    const timeBarWidth = (ratioTimeModulo / resetInterval) * 90;
    let timeBarColor = 'orange';
    if (timeBarWidth < 40) timeBarColor = 'lightgreen';
    else if (timeBarWidth < 70) timeBarColor = 'yellow';


    const timerBarStyle = {
        width: timeBarWidth + '%',
        background: timeBarColor,
    }

    // taking advantage of rowspan only put the signal info
    // on the first row
    return lights.map((light, i) => <tr key={light.id}>
        {i === 0 ? <SignalMain {...{lights, signal, ratioTimeModulo, timerBarStyle}} /> : null}
        <th width='10px'>{light.id}</th>
        <td>{light.direction}</td>
        <td className={light.operationMode === 'OverRide' ? 'bgblue' : null}>{light.operationMode}</td>
        <td className={light.signalState === 'Red' ? 'bgred' : 'bggreen'}>
            {light.signalState}
        </td>
    </tr>)

}

export default Signal;
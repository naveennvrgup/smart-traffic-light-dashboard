import React, {useState, useEffect, Fragment} from 'react';
import './signal.css';


const Signal = ({signal, resetInterval, currTime}) => {
    const {lights} = signal;
    const syncTime = new Date(signal.timer)

    const [ratioTimeModulo, setRatioTimeModulo] = useState(0)

    useEffect(() => {
        const intervalObj = setInterval(() => {
            const diff = Math.ceil(currTime.valueOf() / 1000 - syncTime.valueOf() / 1000)
            setRatioTimeModulo(diff % resetInterval)
        }, 1000);

        return () => {
            clearInterval(intervalObj);
        }
    })


    const timeBarWidth = (ratioTimeModulo / resetInterval) * 90;
    let timeBarColor;
    if (timeBarWidth < 40) timeBarColor = 'lightgreen';
    else if (timeBarWidth < 70) timeBarColor = 'yellow';
    else timeBarColor = 'orange';


    const timerBarStyle = {
        width: timeBarWidth + '%',
        background: timeBarColor,
    }

    const main = <Fragment>
        <th rowSpan={lights.length} width='10px'>{signal.id}</th>
        <td rowSpan={lights.length} width='50px'>{signal.location}</td>
        <td rowSpan={lights.length}>{signal.lat}</td>
        <td rowSpan={lights.length}>{signal.lng}</td>
        <td rowSpan={lights.length}>
            <table className='table table-bordered mb-0'>
                <tbody>
                <tr>
                    <td className='table-active'>Sync Time</td>
                    <td>{new Date(signal.timer).toLocaleTimeString('en-IN', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                    })}</td>
                </tr>
                <tr>
                    <td className='table-active'>Since Reset</td>
                    <td className='timer'>
                        <span className="timeBar" style={timerBarStyle}></span>
                        <span className="time">{ratioTimeModulo}</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
        <td rowSpan={signal.lights.length}>
            <table className='table table-bordered mb-0'>
                <thead className='table-active'>
                <tr>
                    <td>Red</td>
                    <td>Green</td>
                </tr>
                </thead>
                <tbody>
                {signal.controlList.map((control, i) => <tr key={i}>
                    <td>{control.red.toString()}</td>
                    <td>{control.green.toString()}</td>
                </tr>)}
                </tbody>
            </table>
        </td>
        <td rowSpan={lights.length} width='10px'>{lights.length}</td>
    </Fragment>

    return lights.map((light, i) => <tr key={light.id}>
        {i === 0 ? main : null}
        <th width='10px'>{light.id}</th>
        <td>{light.direction}</td>
        <td className={light.operationMode === 'OverRide' ? 'bgblue' : null}>{light.operationMode}</td>
        <td className={light.signalState === 'Red' ? 'bgred' : 'bggreen'}>
            {light.signalState}
        </td>
    </tr>)

}

export default Signal;
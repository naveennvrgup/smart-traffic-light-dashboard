import React, {Fragment} from "react";

const SignalMain = ({lights, signal, timerBarStyle, ratioTimeModulo}) => {
    return <Fragment>
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
}

export default SignalMain;
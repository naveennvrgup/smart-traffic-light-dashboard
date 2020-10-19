import React, {Fragment} from 'react';
import axios from '../axios';

const Signal = ({signal}) => {
    let {lights, timer} = signal;
    const time = new Date();
    time.setHours(parseInt(timer.slice(0, 2)));
    time.setMinutes(parseInt(timer.slice(3, 5)));
    time.setSeconds(parseInt(timer.slice(6, 8)));


    const main = <Fragment>
        <td rowSpan={lights.length}>{signal.id}</td>
        <td rowSpan={lights.length}>{signal.operationMode}</td>
        <td rowSpan={lights.length}>{signal.location}</td>
        <td rowSpan={lights.length}>{signal.lat}</td>
        <td rowSpan={lights.length}>{signal.lng}</td>
        <td rowSpan={lights.length}>{`local:${time.toLocaleTimeString()} \n epoch:${time.valueOf()}`}</td>
        <td rowSpan={lights.length}>{lights.length}</td>
    </Fragment>

    lights = lights.map((light, i) => <tr key={light.id}>
        {i === 0 ? main : null}
        <td>{light.id}</td>
        <td>{light.direction}</td>
        <td>{light.operationMode}</td>
        <td>{light.signalState}</td>
    </tr>)

    return lights;
}

export default Signal;
import React, {Fragment} from 'react';
import axios from '../axios';

const Signal = ({signal}) => {
    var {lights} = signal;

    const main = <Fragment>
        <td rowSpan={lights.length}>{signal.id}</td>
        <td rowSpan={lights.length}>{signal.operationMode}</td>
        <td rowSpan={lights.length}>{signal.location}</td>
        <td rowSpan={lights.length}>{signal.lat}</td>
        <td rowSpan={lights.length}>{signal.lng}</td>
        <td rowSpan={lights.length}>{signal.timer}</td>
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
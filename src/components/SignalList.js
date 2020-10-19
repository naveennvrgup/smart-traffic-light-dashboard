import React, {Fragment, useEffect, useState} from 'react';
import axios from '../axios';
import Signal from "./Signal";

const SignalList = () => {
    const [signals, setSignals] = useState([])

    useEffect(() => {
        axios.get('/maps/stateReporting/')
            .then(response => {
                setSignals(response.data);
                console.log(response.data)
            }).catch(err => {
            console.log(err);
        })
    }, []);

    const signalsDiv = signals.map((signal, i) => <Signal key={i} signal={signal}/>)

    return <Fragment>
        <table className='table table-bordered'>
            <thead className='table-dark'>
                <tr>
                    <td>Signal Id</td>
                    <td>Mode</td>
                    <td>Location</td>
                    <td>Lat</td>
                    <td>Lng</td>
                    <td>Timer</td>
                    <td>Light Id</td>
                    <td>Direction</td>
                    <td>Mode</td>
                    <td>Color</td>
                </tr>
            </thead>
            <tbody>
                {signalsDiv}
            </tbody>
        </table>
    </Fragment>
}

export default SignalList;
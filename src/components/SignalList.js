import React, {Fragment, useEffect, useState} from 'react';
import axios from '../axios';
import Signal from "./Signal";

const SignalList = () => {
    const [signals, setSignals] = useState([]);
    const [resetInterval, setResetInterval] = useState(5);
    const [currTime, setCurTime] = useState(new Date());

    const fetchReport = () => {
        axios.get('/maps/stateReporting/')
            .then(response => {
                setSignals(response.data.signals);
                setResetInterval(response.data.resetInterval);
            }).catch(err => {
            console.log(err);
        })
    }

    // fetch the reporting data + resetInterval every second
    useEffect(() => {
        // fetchReport();
        const intervalObj = setInterval(() => {
            fetchReport();
            setCurTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalObj)
        }
    });

    const signalsDiv = signals.map((signal, i) => <Signal key={i} {...{signal, resetInterval}} />)

    return <Fragment>
        <table className='table table-bordered'>
            <thead className='table-dark'>
            <tr>
                <td>Signal Id</td>
                <td>Location</td>
                <td>Lat</td>
                <td>Lng</td>
                <td>Timer</td>
                <td>Control List</td>
                <td>No. Lights</td>
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
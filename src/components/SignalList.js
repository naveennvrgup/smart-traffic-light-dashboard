import React, {Fragment, useEffect, useState} from 'react';
import axios from '../axios';
import Signal from "./Signal";

const SignalList = ({history}) => {
    const [signals, setSignals] = useState([]);
    const [resetInterval, setResetInterval] = useState(5);
    const [loadingResetOverRide, setLoadingResetOverRide] = useState(false);

    const fetchReport = () => {
        axios.get('/maps/stateReporting/')
            .then(response => {
                setSignals(response.data.signals);
                setResetInterval(response.data.resetInterval);
            }).catch(err => {
            console.log(err);
        })
    }

    const revokeOverRide = () => {
        setLoadingResetOverRide(true);
        axios.get('/maps/revokeOverRide/')
            .then(response => {
                console.log(response);
            }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoadingResetOverRide(false);
        })
    }

    // fetch the reporting data + resetInterval every second
    useEffect(() => {
        // fetchReport();
        const intervalObj = setInterval(() => {
            fetchReport();
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
                <td style={{cursor: 'pointer'}} onClick={() => history.push('/map')}>
                    <span>Location </span>
                    <span className='text-danger'>*</span>
                </td>
                <td>Lat</td>
                <td>Lng</td>
                <td>Timer</td>
                <td>Control List</td>
                <td>No. Lights</td>
                <td>Light Id</td>
                <td>Direction</td>
                <td style={{cursor: 'pointer'}} onClick={revokeOverRide}>
                    <span>Mode </span>
                    {loadingResetOverRide ?
                        <span className='spinner-border text-primary spinner-border-sm'></span> :
                        <span className="text-danger">*</span>}
                </td>
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
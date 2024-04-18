//import {MultipleRecords, SingleRecord} from "../types/apiTypes";

import {MultipleRecords, SingleRecord} from "../types/apiTypes";

export async function getAllData(): Promise<MultipleRecords> {
    const errorValues = {RVEDV: [0], RVEF: [0], RVESV: [0]};
    return fetch('http://localhost:8000/getTest', { mode: 'cors', headers: {"Cross-Origin-Resource-Policy": "cross-origin"}})
        .then(async (response) => JSON.parse(await response.json()))
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err.message);
            return errorValues;
        });
}

export async function getPacientData(): Promise<SingleRecord>{
    const errorValues = {RVEDV: 0, RVEF: 0, RVESV: 0};
    return fetch('http://localhost:8000/getPatientData', { mode: 'cors', headers: {"Cross-Origin-Resource-Policy": "cross-origin"}})
        .then(async (response) => JSON.parse(await response.json()))
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err.message);
            return errorValues;
        });
}
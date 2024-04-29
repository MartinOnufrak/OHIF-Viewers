import {MultipleRecords, SingleRecord} from "../types/apiTypes";

export async function getAllData(): Promise<MultipleRecords> {
    return fetch('http://localhost:8000/getRVData', { mode: 'cors', headers: {"Cross-Origin-Resource-Policy": "cross-origin"}})
        .then(async (response) => JSON.parse(await response.json()))
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err.message);
            return null;
        });
}

export async function getPatientData(patientHash): Promise<SingleRecord>{
    return fetch('http://localhost:8000/getPatientData?patientHash=' + patientHash, { mode: 'cors', headers: {"Cross-Origin-Resource-Policy": "cross-origin"}})
        .then(async (response) => JSON.parse(await response.json()))
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err.message);
            return null;
        });
}

export async function getPatientPrediction(patientHash): Promise<number>{
    return fetch('http://localhost:8000/getPatientPrediction?mrn=' + patientHash, { mode: 'cors', headers: {"Cross-Origin-Resource-Policy": "cross-origin"}})
        .then(async (response) => JSON.parse(await response.json()))
        .then((data) => {
            return data.patientPrediction;
        })
        .catch((err) => {
            console.log(err.message);
            return null;
        });
}
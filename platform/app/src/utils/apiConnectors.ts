import {MultipleRecords, SingleRecord} from "../types/apiTypes";

export async function getAllData(): Promise<MultipleRecords> {
    return fetch('http://localhost:8000/getTest', { mode: 'cors', headers: {"Cross-Origin-Resource-Policy": "cross-origin"}})
        .then(async (response) => JSON.parse(await response.json()))
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err.message);
            return null;
        });
}

export async function getPatientData(studyInstanceUid): Promise<SingleRecord>{
    return fetch('http://localhost:8000/getPatientData?studyInstanceUid=' + studyInstanceUid, { mode: 'cors', headers: {"Cross-Origin-Resource-Policy": "cross-origin"}})
        .then(async (response) => JSON.parse(await response.json()))
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err.message);
            return null;
        });
}
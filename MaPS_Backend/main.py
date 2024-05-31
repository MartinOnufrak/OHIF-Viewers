import uvicorn
from fastapi import FastAPI
import numpy as np
import json

from fastapi.middleware.cors import CORSMiddleware

from model import patient_health

app = FastAPI()

origins = [
    "http://localhost",
    "http://127.0.0.1",
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],

)

data = np.genfromtxt('codebook.csv', delimiter=',', names=True, dtype=None, encoding='utf-8')
data_dicts = [dict(zip(data.dtype.names, row)) for row in data]


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/getRVESV")
async def get_rvesv():
    values = [row['RVESV'] for row in data_dicts]
    dictionary = {'RVESV': values}
    return json.dumps(dictionary)


@app.get("/getRVEDV")
async def get_rvedv():
    values = [row['RVEDV'] for row in data_dicts]
    dictionary = {'RVEDV': values}
    return json.dumps(dictionary)


@app.get("/getRVEF")
async def get_rvef():
    values = [row['RVEF'] for row in data_dicts]
    dictionary = {'RVEF': values}
    return json.dumps(dictionary)


@app.get("/getRVData")
async def get_rv_data():
    values_rvef = [row['RVEF'] for row in data_dicts]
    values_rvedv = [row['RVEDV'] for row in data_dicts]
    values_rvesv = [row['RVESV'] for row in data_dicts]
    dictionary = {'RVEF': values_rvef, 'RVEDV': values_rvedv, 'RVESV': values_rvesv}
    return json.dumps(dictionary)


@app.get("/getPatientData")
async def get_patient_data(hash):
    patient_data = [row for row in data_dicts if row['FileName'] == hash]
    dictionary = {'RVEF': patient_data[0]["RVEF"], 'RVEDV': patient_data[0]["RVEDV"], 'RVESV': patient_data[0]["RVESV"]}
    return json.dumps(dictionary)


@app.get("/getMetaData")
async def get_metadata():
    for d in data_dicts:
        for key, value in d.items():
            d[key] = convert_to_serializable(value)
    return json.dumps(data_dicts)


@app.get("/getPatientPrediction")
async def get_patient_prediction(hash):
    dictionary = {'patientPrediction': patient_health(hash)}
    return json.dumps(dictionary)

def convert_to_serializable(obj):
    if isinstance(obj, np.int32):
        return int(obj)
    else:
        return obj


# Do not delete
if __name__ == "__main__":
    uvicorn.run(app)

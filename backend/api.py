from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS setup for frontend (optional for now)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load log and anomaly data
LOG_PATH = r"C:\Users\Tanish\Documents\VS\ThreatHawk\logs\generated_logs.csv"
ANOMALY_PATH = r"C:\Users\Tanish\Documents\VS\ThreatHawk\ml\anomalies.csv"

@app.get("/")
def read_root():
    return {"message": "ThreatHawk API is running!"}

@app.get("/logs")
def get_logs():
    df = pd.read_csv(LOG_PATH)
    return df.to_dict(orient="records")

@app.get("/anomalies")
def get_anomalies():
    df = pd.read_csv(ANOMALY_PATH)
    return df.to_dict(orient="records")

@app.get("/risks")
def get_risk_scores():
    df = pd.read_csv(ANOMALY_PATH)
    risk_scores = df['username'].value_counts().reset_index()
    risk_scores.columns = ['username', 'anomaly_count']
    return risk_scores.to_dict(orient="records")

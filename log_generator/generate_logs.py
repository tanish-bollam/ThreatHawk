import json
import random
import csv
from datetime import datetime, timedelta

# Load users
with open('user_profiles.json') as f:
    users = json.load(f)

# Define roles and their actions
roles = {
    "engineer": ["read_code", "edit_code", "login", "access_server"],
    "admin": ["read_code", "delete_user", "modify_access", "access_server", "login"],
    "intern": ["read_code", "login"],
    "hr": ["read_hr_docs", "login"],
    "malicious_actor": ["login", "exfiltrate_data", "privilege_escalation", "access_server"]
}

# Generate logs
def generate_log_entries(num_entries=500):
    # Generate random log entries
    logs = []
    # Get current time
    now = datetime.now()
    # Generate logs for each user
    for _ in range(num_entries):
        user = random.choice(users)
        timestamp = now - timedelta(minutes=random.randint(0, 10000))
        action = random.choice(roles[user['role']])
        logs.append({
            "timestamp": timestamp.strftime("%Y-%m-%d %H:%M:%S"),
            "username": user["username"],
            "role": user["role"],
            "action": action
        })
    return logs

# Save to CSV
def save_logs(logs, filename=r"C:\Users\Tanish\Documents\VS\ThreatHawk\logs\generated_logs.csv"):
    with open(filename, 'w', newline='') as csvfile:
        fieldnames = ['timestamp', 'username', 'role', 'action']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(logs)

if __name__ == "__main__":
    logs = generate_log_entries()
    save_logs(logs)
    print(f"Generated {len(logs)} logs.")

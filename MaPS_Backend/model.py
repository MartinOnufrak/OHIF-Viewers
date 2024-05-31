import pandas as pd

def patient_health(data_id):
  data = pd.read_csv("codebook.csv")
  data_row = data[(data['FileName'] == data_id)]

  if len(data_row) == 0:
    return -1

  age = data_row["Age"].iloc[0]
  heart_rate = data_row["HR"].iloc[0]
  RVEF = data_row["RVEF"].iloc[0]
  health = 0
  fraction = 0

  if age <=64:
    if RVEF >= 35 and  RVEF <= 45:
      fraction = 2
    elif RVEF > 45:
      fraction = 1
    else:
      fraction = 3

  elif age > 65:
    if RVEF >= 35 and  RVEF <= 40:
      fraction = 2
    elif RVEF > 40:
      fraction = 1
    else:
      fraction = 3

  match data_row["PatientGroup"].iloc[0]:
    case "Patients with history of HTx":
      if age <= 5:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 100:
          health = 3
        elif heart_rate >= 100 and heart_rate <= 160:
          health = 1
        elif heart_rate >= 160 and heart_rate <= 280:
          health = 3
        elif heart_rate >= 280:
          health = 3
      elif age <= 17:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 70:
          health = 3
        elif heart_rate >= 70 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 3
        elif heart_rate >= 120:
          health = 3
      else:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 60:
          health = 3
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 3
        elif heart_rate >= 120:
          health = 3

    case "Athletes":
      if heart_rate < 40:
          health = 3
      elif heart_rate >= 40 and heart_rate <= 60:
          health = 1
      elif heart_rate >= 60 and heart_rate <= 100:
          health = 2
      elif heart_rate >= 100:
          health = 3

    case "HFrEF":
      if age <= 5:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 100:
          health = 3
        elif heart_rate >= 100 and heart_rate <= 160:
          health = 1
        elif heart_rate >= 160 and heart_rate <= 280:
          health = 3
        elif heart_rate >= 280:
          health = 3
      elif age <= 17:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 70:
          health = 3
        elif heart_rate >= 70 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 3
        elif heart_rate >= 120:
          health = 3
      else:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 60:
          health = 3
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 3
        elif heart_rate >= 120:
          health = 3

    case "VHD (mitral)":
      if age <= 5:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 100:
          health = 3
        elif heart_rate >= 100 and heart_rate <= 160:
          health = 1
        elif heart_rate >= 160 and heart_rate <= 280:
          health = 3
        elif heart_rate >= 280:
          health = 3
      elif age <= 17:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 70:
          health = 3
        elif heart_rate >= 70 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 3
        elif heart_rate >= 120:
          health = 3
      else:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 60:
          health = 3
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 3
        elif heart_rate >= 120:
          health = 3

    case "Healthy volunteers":
      if age <= 5:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 100:
          health = 2
        elif heart_rate >= 100 and heart_rate <= 160:
          health = 1
        elif heart_rate >= 160 and heart_rate <= 280:
          health = 2
        elif heart_rate >= 280:
          health = 3
      elif age <= 17:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 70:
          health = 2
        elif heart_rate >= 70 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 2
        elif heart_rate >= 120:
          health = 3
      else:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 60:
          health = 2
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 2
        elif heart_rate >= 120:
          health = 3

    case "VHD (aortic)":
      if age <= 5:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 100:
          health = 2
        elif heart_rate >= 100 and heart_rate <= 160:
          health = 1
        elif heart_rate >= 160 and heart_rate <= 280:
          health = 2
        elif heart_rate >= 280:
          health = 3
      elif age <= 17:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 70:
          health = 2
        elif heart_rate >= 70 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 2
        elif heart_rate >= 120:
          health = 3
      else:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 60:
          health = 2
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 2
        elif heart_rate >= 120:
          health = 3

    case "Pediatric healthy volunteers":
      if age == 1:
        if heart_rate < 60:
          health = 3
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 2
        elif heart_rate >= 100 and heart_rate <= 160:
          health = 1
        elif heart_rate >= 160 and heart_rate <= 220:
          health = 2
        elif heart_rate >= 220:
          health = 3
      elif age <= 10:
        if heart_rate < 50:
          health = 3
        elif heart_rate >= 50 and heart_rate <= 70:
          health = 2
        elif heart_rate >= 70 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 210:
          health = 2
        elif heart_rate >= 210:
          health = 3
      else:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 60:
          health = 2
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 200:
          health = 2
        elif heart_rate >= 200:
          health = 3

    case "Pediatric patients with history of KTx":
      if age == 1:
        if heart_rate < 60:
          health = 3
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 3
        elif heart_rate >= 100 and heart_rate <= 160:
          health = 1
        elif heart_rate >= 160 and heart_rate <= 220:
          health = 3
        elif heart_rate >= 220:
          health = 3
      elif age <= 10:
        if heart_rate < 50:
          health = 3
        elif heart_rate >= 50 and heart_rate <= 70:
          health = 3
        elif heart_rate >= 70 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 210:
          health = 3
        elif heart_rate >= 210:
          health = 3
      else:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 60:
          health = 3
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 200:
          health = 3
        elif heart_rate >= 200:
          health = 3

    case "Other":
      if age <= 5:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 100:
          health = 2
        elif heart_rate >= 100 and heart_rate <= 160:
          health = 1
        elif heart_rate >= 160 and heart_rate <= 280:
          health = 2
        elif heart_rate >= 280:
          health = 3
      elif age <= 17:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 70:
          health = 2
        elif heart_rate >= 70 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 2
        elif heart_rate >= 120:
          health = 3
      else:
        if heart_rate < 40:
          health = 3
        elif heart_rate >= 40 and heart_rate <= 60:
          health = 2
        elif heart_rate >= 60 and heart_rate <= 100:
          health = 1
        elif heart_rate >= 100 and heart_rate <= 120:
          health = 2
        elif heart_rate >= 120:
          health = 3

    case "Non-compaction CMP":
      if heart_rate < 40:
        health = 3
      elif heart_rate >= 40 and heart_rate <= 60:
        health = 2
      elif heart_rate >= 60 and heart_rate <= 100:
        health = 1
      elif heart_rate >= 100 and heart_rate <= 120:
        health = 2
      elif heart_rate >= 120:
        health = 3

  return max([health, fraction])
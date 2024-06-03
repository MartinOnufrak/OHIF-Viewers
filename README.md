<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<div align="center">
  <h1>Heart ejection fraction analysis solution from students of Technical University of Košice faculty electrotechnics and informatics </h1>
  <p>The domain of this application is echocardiography. It is a way of examining the heart
  muscle using an echocardiograph. The more popular name for this procedure is ul-
  cardiac ultrasound. It is a non-invasive procedure in which a probe emits a high-frequency
  high-frequency sound waves that bounce differently depending on the type of material on which
  it hits, which allows us to distinguish different tissues from bone and muscle, so that we can examine
  the human interior without surgical intervention. Our application specifically focuses on
  ejection fraction of the right ventricle, and thus measure the percentage of
  of blood pumped from the right ventricle with each contraction of the heart. From this
  value can be shown to predict the probability of survival in patients
  of patients with moderate heart failure. 1. In a healthy patient, this value
  ranges from 41.9% to 69.5%. This ratio is calculated using the equation
  EF (%) = EDV -ESV
  EDV ∗ 100, where EF is ejection fraction, EDV is ventricular blood volume
  before contraction, and ESV is the volume of blood in the ventricle after contraction.

<h2> Architecture </h2>

<p>The application will have a client-server architecture with a centralized server, on
hosting the Orthanc DICOM server, integration of the OHIF browser
Viewer and a Python API. Clients will communicate with the server
via web interfaces to view medical images, access
access technical documentation and perform model evaluations.

<h2> Setup of project </h2>

<h3> Clone the repositary </h3>

```
git clone https://github.com/MartinOnufrak/OHIF-Viewers.git
```

<h3> Navigate this path from root of the project in terminal </h3>

```
platform/app/.recipes/OpenResty-Orthanc
```

<h3> Build the project </h3>

```
docker-compose -f docker-compose.yml build
```

<h3> Run container </h3>

```
docker-compose -f docker-compose.yml up -d
```

<h2> Default IPs </h2>

<h3> OHIF </h3>

```
 127.0.0.1
```

<h3> Orthanc </h3>

```
127.0.0.1/pacs
```

<h3> Orthanc (with possibility of upload DICOMs) </h3>

```
127.0.0.1/pacs-admin
```

<h3> Python backend service API </h3>

```
127.0.0.1:8000
```

<div align="center">
  <a href="https://github.com/OHIF/Viewers"><strong>Original project of OHIF that was forked</strong></a>
</div>

<div align="center">
  <a href="https://github.com/jodogne/OrthancDocker"><strong>Original image of ORTHANC used for our project</strong></a>
</div>

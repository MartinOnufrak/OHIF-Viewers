import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AboutModal, Button, Header, Icon, useModal} from '@ohif/ui';
import appConfig, {useAppConfig} from "../state/appConfig";
import {useTranslation} from "react-i18next";
import './Styles/ChartsPage.css';
import {useLocation} from "react-router"; // Import the CSS file

const Dataset: React.FC = () => {
    const { state } = useLocation();
  const navigate = useNavigate();
    const { t } = useTranslation();
    const { show, hide } = useModal();
    const [appConfig] = useAppConfig();
    const versionNumber = process.env.VERSION_NUMBER;
    const commitHash = process.env.COMMIT_HASH;

    const menuOptions = [
        {
            title: t('Header:About'),
            icon: 'info',
            onClick: () =>
                show({
                    content: AboutModal,
                    title: t('AboutModal:About OHIF Viewer'),
                    contentProps: { versionNumber, commitHash },
                }),
        },
    ];

    if (appConfig.oidc) {
        menuOptions.push({
            icon: 'power-off',
            title: t('Header:Logout'),
            onClick: () => {
                navigate(`/logout?redirect_uri=${encodeURIComponent(window.location.href)}`);
            },
        });
    }

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Header
        isSticky
        menuOptions={menuOptions}
        isReturnEnabled={false}
        WhiteLabeling={appConfig.whiteLabeling}
      />

      <div
        style={{
          position: 'absolute',
          top: '80px', // 20px below the header
          right: '100px', // 100px from the right edge
        }}
      >
        <Button
          isDisabled={false}
          startIconTooltip={null}
          startIcon={<Icon className="!h-[20px] !w-[20px] text-black" name="launch-arrow" />}
          onClick={() => navigate('/MainPage', { replace: true, state: state})}
          className="text-[13px]"
        >
            Back
        </Button>
      </div>

      {/* Title positioned at top-left with custom spacing and white font color */}
      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: '100px',
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Dataset
      </div>

      <div
        style={{
          position: 'absolute',
          top: '80px', // Adjusted to create some space from the top
          right: '80px', // Adjusted to create some space from the right
        }}
      >
      </div>

      {/* Main content, vertically and horizontally centered */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >

        {/* Container for 3 clickable images with text below and 10px spacing */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
          {/* First clickable image */}
          <div
            style={{
              position: 'absolute',
              top: '290px',
              right: '70px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => console.log('Image 1 clicked')}
          >
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/assets/pictures/dset.png"
              alt="Image 1"
              style={{
                  height: '300px',
                  width: '300px'
            }}
            />
          </div>

              <div style={{
                  position: 'absolute',
                  top: '170px',
                  right: '150px', // Adjusted to create some space from the right
                  left: '150px',
                  color: 'white',
              }}>
                  <p>The dataset is named as RVENet (A Large Echocardiographic Dataset for the Deep Learning-Based Assessment of Right Ventricular Function)
                      which deals with the identification of right ventricular dysfunction.
                      The RVENet dataset was primarily designed to enable the training and evaluation of deep learning models that predict RVEF from 2D echocardiographic videos.
                      The fact that each 2D video is labeled with a 3D echocardiography-derived RVEF value makes our dataset one of its kind. Beyond serving as a benchmark dataset in the task mentioned above, the RVENet dataset may represent a valuable resource for several other research projects in the intersection of computer vision and cardiovascular imaging.
                  </p>

                      <p>&nbsp;</p>

                      <ul>
                          <li>Two-dimensional (2D) echocardiography is the most frequently performed imaging test to assess right ventricular (RV) function.</li>
                          <li>However, conventional 2D parameters are unable to reliably capture RV dysfunction across the entire spectrum of cardiac diseases.</li>
                          <li>Three-dimensional (3D) echocardiography-derived RV ejection fraction (RVEF) – a sensitive and reproducible parameter that </li>
                          <li>has been validated against cardiac magnetic resonance imaging – can bypass most of their limitations. Nonetheless, </li>
                          <li>3D echocardiography has limited availability, is more time-consuming, and requires significant human expertise. Therefore, novel </li>
                          <li>automated tools that utilize readily available and routinely acquired 2D echocardiographic recordings to predict RVEF and detect </li>
                          <li>RV dysfunction reliably would be highly desirable. To enable the implementation of such innovative solutions, publicly available </li>
                          <li>and sufficiently large dedicated datasets would be pivotal.</li>

                      </ul>

                  <p>&nbsp;</p>

                  <ul>
                      <li>The RVENet dataset consists of two major components: a large set of echocardiographic videos (in DICOM format) </li>
                      <li>and the corresponding labels and additional patient or video-related data (in a single separate CSV file). It contains 3,583</li>
                      <li> 2D apical four-chamber view echocardiographic videos from 944 examinations of 831 individuals in DICOM format. Each subject</li>
                  </ul>
                      <p> underwent one or more 3D transthoracic echocardiographic examinations between November 2013 and March 2021 at the Heart and Vascular Center of Semmelweis University.
                      The dataset comprises ten distinct subgroups of subjects: healthy adult volunteers (n=192), healthy pediatric volunteers (n=54), elite athletes (n=139), patients with heart
                      failure and reduced left ventricular EF (LVEF, n=98), patients with LV non-compaction cardiomyopathy (n=27), patients with aortic valve disease (n=85), patients with mitral valve disease (n=70),
                      patients who underwent orthotopic heart transplantation (n=87),  pediatric patients who underwent kidney transplantation (n=23), and others (n=56).
                     </p>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataset;

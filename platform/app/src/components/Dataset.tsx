import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AboutModal, Button, Header, Icon, useModal} from '@ohif/ui';
import appConfig, {useAppConfig} from "../state/appConfig";
import {useTranslation} from "react-i18next";
import './Styles/ChartsPage.css'; // Import the CSS file

const Dataset: React.FC = () => {
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

        <Button
            isabled={false}
            startIconTooltip={null}
            startIcon={
                <Icon
                    className="!h-[20px] !w-[20px] text-black"
                    name="launch-arrow"
                />
            }
            onClick={() => navigate('/MainPage', { replace: true })}
            className="text-[13px]"
        >
            Home
        </Button>

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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => console.log('Image 1 clicked')}
          >
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/assets/pictures/1.png"
              alt="Image 1"
              style={{ height: '300px', width: '300px' }}
            />
            <span style={{ marginTop: '50px', fontSize: '23px', color: 'white' }}>Dataset je pomenovaná ako RVENET, ktorá sa zaoberá identifikáciou dysfunkcie pravej komory. Obsahuej viac ako 3800 záznamov, ktoré sú v DICOM formáte a taktiež obsahuje aj kvalitné metadáta. Najčastejšie snímky sú zozbierané pomocou "apical 4 chamber view".</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataset;

import React from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { AboutModal, Button, Header, Icon, useModal } from '@ohif/ui';
import { useTranslation } from 'react-i18next';
import appConfig, { useAppConfig } from '../state/appConfig';

const MainPage: React.FC = props => {
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
        Heart USG
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
              onClick={() => navigate('/Dataset', { replace: true })}
            />
            <span style={{ marginTop: '50px', fontSize: '23px', color: 'white' }}>Dataset</span>
          </div>

          {/* Second clickable image */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              paddingLeft: '40px',
            }}
            onClick={() => console.log('Image 2 clicked')}
          >
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/assets/pictures/2.png"
              alt="Image 2"
              style={{ height: '300px', width: '300px' }}
              onClick={() => {
                navigate('/Charts', { replace: true, state: { state } });
              }}
            />
            <span style={{ marginTop: '50px', fontSize: '23px', color: 'white' }}>Graphs & recommendation</span>
          </div>

          {/* Third clickable image */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => console.log('Image 3 clicked')}
          >
            <img
              src="/assets/pictures/3.png"
              alt="Image 3"
              style={{ height: '300px', width: '300px', paddingLeft: '40px' }}
              onClick={() => navigate('/Procedure', { replace: true })}
            />
            <span style={{ marginTop: '50px', fontSize: '23px', color: 'white' }}>Procedure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

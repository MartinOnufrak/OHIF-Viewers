import React from 'react';
import AreaChart from './Charts/AreaChart';
import ScatterChart from './Charts/ScatterChart';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@ohif/ui';
import { useTranslation } from 'react-i18next';
import { useAppConfig } from '@state';
import {
  Icon,
  Header,
  Button,
} from '@ohif/ui';

import './Styles/ChartsPage.css';

const ChartPage: React.FC = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { show } = useModal();
  const { t } = useTranslation();
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

  const answer = 3;

  let conditionalContent;
  switch (answer) {
    case 1:
      conditionalContent = 'Recommended action: Patient is healthy, no additional interference needed.';
      break;
    case 2:
      conditionalContent = 'Recommended action: Patient is in a risk group, need more investigation for cause, regular monitoring recommended.';
      break;
    case 3:
      conditionalContent = 'Recommended action: Patient is in a critical state. Immediate intervention needed.';
      break;
    default:
      conditionalContent = 'Recommended action: No specific answer provided.';
      break;
  }

  return (
    <div>
      <Header
        isSticky
        menuOptions={menuOptions}
        isReturnEnabled={false}
        WhiteLabeling={appConfig.whiteLabeling}
      />
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
        Graphs and Recommendations
      </div>

      <div
        style={{
          position: 'absolute',
          top: '80px',
          right: '100px',
        }}
      >
        <Button
          isDisabled={false}
          startIconTooltip={null}
          startIcon={<Icon className="!h-[20px] !w-[20px] text-black" name="launch-arrow" />}
          onClick={() => navigate('/MainPage', { replace: true })}
          className="text-[13px]"
        >
          Home
        </Button>
      </div>

      <div
        style={{
          position: 'relative',
          top: '100px',
          left: '100px',
          fontSize: '16px',
          color: 'white',
        }}
      >
        {conditionalContent}
      </div>

      <div className={'chartContainer'}>
        <div className={'chart'}>
          <ScatterChart patientHash={state.patientHash} />
        </div>
        <div className={'description'}>
          Visualisation by patients' right ventricular end-systolic-volume and end-diastolic-volume with filtering based on calculated ejection fraction.
        </div>
      </div>
      <div className={'chartContainer'}>
        <div className={'description'}>
          Distribution of patients by their right ventricular ejection fraction.
        </div>
        <div className={'chart'}>
          <AreaChart patientHash={state.patientHash} />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;

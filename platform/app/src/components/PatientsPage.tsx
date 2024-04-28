import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@ohif/ui';
import './Styles/PatientsPage.css'; // Import the CSS file

const PatientsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      {/* Title positioned at top-left with custom spacing and white font color */}
      <div className="title">Patients</div>

      {/* Button to navigate to the home page */}
      <div className="home-button">
        <Button
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
      </div>

      {/* Main content with fixed-width buttons */}
      <div className="content">
        <Button
          startIcon={
            <Icon
              className="!h-[20px] !w/[20px] text-black"
              name="launch-arrow"
            />
          }
          onClick={() => navigate('/PatientInfo', { replace: true })}
          className="fixed-width-button text-[13px]" // Apply fixed-width-button class
        >
          Button1
        </Button>

        <Button
          startIcon={
            <Icon
              className="!h-[20px] !w/[20px] text-black"
              name="launch-arrow"
            />
          }
          onClick={() => navigate('/PatientInfo', { replace: true })}
          className="fixed-width-button text-[13px]" // Apply fixed-width-button class
        >
          Button2
        </Button>
      </div>
    </div>
  );
};

export default PatientsPage;

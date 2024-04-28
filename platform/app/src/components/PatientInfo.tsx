import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@ohif/ui';

const PatientInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {/* Title positioned at top-left with custom spacing and white font color */}
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '100px',
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Sanko Fekete (ID: 1500)
      </div>
    </div>
  );
};

export default PatientInfo;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@ohif/ui';

const Procedure: React.FC = () => {
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
        Procedure
      </div>
      <div
        style={{
          position: 'absolute',
          top: '80px', // Adjusted to create some space from the top
          right: '80px', // Adjusted to create some space from the right
        }}
      >
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
    </div>
  );
};

export default Procedure;

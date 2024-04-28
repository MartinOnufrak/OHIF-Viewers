import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@ohif/ui';

const PatientsPage: React.FC = () => {
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
        Patients
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
              onClick={() => navigate('/', { replace: true })}
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
            }}
            onClick={() => console.log('Image 2 clicked')}
          >
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/assets/pictures/2.png"
              alt="Image 2"
              style={{ height: '300px', width: '300px' }}
            />
            <span style={{ marginTop: '50px', fontSize: '23px', color: 'white' }}>Patients</span>
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
              style={{ height: '300px', width: '300px' }}
            />
            <span style={{ marginTop: '50px', fontSize: '23px', color: 'white' }}>Procedure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;

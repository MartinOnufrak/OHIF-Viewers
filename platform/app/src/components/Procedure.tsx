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
          top: '80px',
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
        <div style={{
            position: 'absolute',
            top: '270px',
            right: '80px', // Adjusted to create some space from the right
        }}>
            <img
                src="/assets/pictures/4.png"
                alt="Image 4"
                style={{ height: '300px',
                    width: '300px'
                }}
            />
        </div>
        <div style={{
            position: 'absolute',
            top: '620px',
            right: '80px', // Adjusted to create some space from the right
        }}>
        <img
            src="/assets/pictures/3.png"
            alt="Image 3"
            style={{ height: '300px',
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
            <p> An ultrasound of the heart is typically performed when there is a suspicion of a heart condition,
                to monitor the progression of a known heart condition, to assess cardiac function, to guide treatment decisions,
                and to monitor the effectiveness of treatment.
                The test shows how blood moves through the heart chambers and heart valves.
                Your health care provider may order this test if you have chest pain or shortness of breath. The examination lasts 15-30 min.
            </p>

            {/*Empty line */}
            <p>&nbsp;</p>

            <ul>
                <li>Before the echocardiogram begins, a healthcare provider or technologist will review your medical history, discuss any symptoms</li>
                <li>you're experiencing, and explain the procedure to you. They may also take your vital signs such as blood pressure, heart rate, </li>
                <li>and oxygen saturation. During the echocardiogram, you'll be asked to remove your clothing from the waist up and lie down on </li>
                <li>an examination table. The technologist will apply a special gel to your chest to help transmit sound waves and improve the quality </li>
                <li> of the images. Then, they'll use a handheld device called a transducer to capture images of your heart from different angles. </li>
                <li>You may be asked to change positions or hold your breath briefly during the exam to obtain better images.</li>
                <li>Once the echocardiogram is complete, you'll be able to wipe off the gel from your chest. You can usually resume your normal </li>
                <li>activities immediately afterward. In some cases, the healthcare provider may discuss preliminary findings with you right after </li>
                <li>the test, but a detailed analysis of the images will typically be done later by a cardiologist or a trained specialist.</li>
                <li>Depending on the results of the echocardiogram, your healthcare provider may schedule a follow-up appointment to discuss </li>
                <li>the findings and any further steps that may be needed, such as additional tests, treatment, or monitoring.</li>

            </ul>
        </div>

        <div style={{
            position: 'absolute',
            top: '620px',
            right: '150px', // Adjusted to create some space from the right
            left: '150px',
            color: 'white',
        }}>

            <ul>
                <li> An ultrasound image of the heart typically reveals the various structures of the heart, including the chambers such as the left </li>
                <li> and right ventricles, as well as the left and right atria. It also shows the heart valves, such as the mitral valve, aortic valve,</li>
                <li>tricuspid valve, and pulmonary valve, along with major blood vessels like the aorta, pulmonary artery, and superior and inferior</li>
                <li>vena cava. The image captures the dynamic motion of the heart walls as they contract and relax during each heartbeat, providing</li>
                <li>insight into the pumping function of the heart and highlighting any abnormalities in wall motion. Valve function is visualized</li>
                <li>through the opening and closing of the heart valves during each cardiac cycle, enabling assessment for any narrowing or leakage </li>
                <li>of the valves. Doppler ultrasound may be used to visualize blood flow within the heart chambers and blood vessels, allowing </li>
                <li>assessment of the direction, velocity, and characteristics of blood flow. This helps in detecting abnormalities such as valve </li>
                <li>regurgitation or shunts. Measurements of cardiac dimensions, valve areas, and ejection fraction may be included in the image, </li>
                <li>providing quantitative data for assessing cardiac function and identifying any abnormalities in size or function.</li>
            </ul>
        </div>
    </div>
  );
};

export default Procedure;

import React from 'react';
import './style.css';
import { Container } from '@mui/material';
import resume from '../../assets/Resume.doc';
function Resume() {
  return (
    <div>
      <h1>CLICK THE LINK BELOW TO DOWNLOAD MY RESUME!</h1>

      <Container id='project-card'>
        <div>
          <a key='resume' target='_blank' rel='noreferrer' href={resume}>
            CLICK ME 📥
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Resume;
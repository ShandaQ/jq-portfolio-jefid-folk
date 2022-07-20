import React from 'react';
import { Container, SvgIcon, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './style.css';

function Footer() {
  return (
    <footer className='header' id= "footer">
      <div>
        Contact Me Here:
      </div>

      <Container>
          <a
            href='https://github.com/Jefid'
            rel='noreferrer'
            target='_blank'
          >
            <Tooltip title='GitHub'>
              <SvgIcon
                alt='github-icon'
                fontSize='large'
                component={GitHubIcon}
              />
            </Tooltip>
          </a>{' '}
          <a
            href='https://www.linkedin.com/in/jefferson-quandt-1bb457232/'
            rel='noreferrer'
            target='_blank'
          >
            <Tooltip title='LinkedIn'>
              <SvgIcon
                alt='linkedin-icon'
                fontSize='large'
                component={LinkedInIcon}
              />
            </Tooltip>
          </a>
        </Container>
</footer>
  );
}
export default Footer;


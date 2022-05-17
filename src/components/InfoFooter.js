import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArticleIcon from '@mui/icons-material/Article';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../App.css'

function InfoFooter() {

    return (
        <Box sx={{ 
                '&:hover': {
                    opacity: [.7, .7, .8],
                }
            }}>
            <BottomNavigation
                showLabels
            >
                <div className="infooter">
                    <span>
                        <p>I'm Joel; hire me!</p>
                    </span>
                    <span>
                        <a href="https://github.com/xeonstaff" target="_blank" rel="noreferrer">
                            <BottomNavigationAction label="Github" icon={<GitHubIcon />} /></a>
                        <a href="https://www.linkedin.com/in/joelmounts/" target="_blank" rel="noreferrer">
                            <BottomNavigationAction label="Linkedin" icon={<LinkedInIcon />} /></a>
                        <a href="https://tiny.cc/joelresume" target="_blank" rel="noreferrer">
                            <BottomNavigationAction label="Resume" icon={<ArticleIcon />} /></a>
                    </span>
                </div>
            </BottomNavigation>
        </Box>
    );
}

export default InfoFooter

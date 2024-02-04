import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Image from './Image';
import { motion, useAnimation } from "framer-motion";
import Mission from "./Mission";
import { useInView } from "react-intersection-observer";
import gj from "../assets/50.png";
import TimeLine from "./Timeline";
import Vision from "./Vision";
import './Grid.css'

const pages = [];

function SideBar() {

    const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ 
        opacity: 1,
        y: 0,
        transition: { type: "spring" , delay: 0.5},
    });
    } else {
      controls.start({ opacity: 0,
        y: -50,
        transition: { type: "spring", delay: 0.5 }, 
    });
    }
  }, [controls, inView]);

  React.useEffect(() => {
    if (inView1) {
      controls1.start({ 
        opacity: 1,
        y: 0,
        transition: { type: "spring" , delay: 0.5},
    });
    } else {
      controls1.start({ opacity: 0,
        y: -50,
        transition: { type: "spring", delay: 0.5 }, 
    });
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({ 
        opacity: 1,
        y: 0,
        transition: { type: "spring" , delay: 0.5},
    });
    } else {
      controls2.start({ opacity: 0,
        y: -50,
        transition: { type: "spring", delay: 0.5 }, 
    });
    }
  }, [controls2, inView2]);

  return (
    <>
    <Box sx={{flexGrow: 1}}>
    <AppBar position="static" sx={{backgroundColor:'brown'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CFGA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CFGA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Image></Image>
    <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        className="mid"
      >
        <div className="mid1 colGrid">
        <Mission/>
        <Vision/>
        </div>
      </motion.div>
      <motion.div
        ref={ref1}
        animate={controls1}
        initial={{ opacity: 0, y: 50 }}
        className="mid"
      >
        <div className="mid1 colGrid">
        <img src={gj} alt="" width={'35%'} />
        <TimeLine/>
        </div>
      </motion.div>
    </Box>
    </>
  );
}
export default SideBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link, NavLink } from "react-router-dom";

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import "./Navbar.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


function Navigation() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/">SABKI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact className={(navData) => navData.isActive ? "is-active link" : "link"} to='/'>Home</NavLink>
            <NavLink exact className={(navData) => navData.isActive ? "is-active link" : "link"} to='/survey' onClick={handleClickOpen}>Survey</NavLink>
            <NavLink exact className={(navData) => navData.isActive ? "is-active link" : "link"} to='/panduan'>Panduan</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Panduan
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Sebelum mengisi survei ini, mohon untuk membaca petunjuk pengisian dengan teliti:
          <ol>
            <li>Pastikan Anda telah membaca <Link to="/panduan" onClick={handleClose}>PANDUAN</Link> Survei Anak Berkebutuhan Khusus Indonesia.</li>
            <li>Isilah seluruh data dengan lengkap dan benar pada kotak isian yang sudah disediakan.</li>
            <li>Setelah seluruh data pada formulir ini telah diisi, klik tombol "Selanjutnya" untuk melanjutkan ke proses selanjutnya.</li>
            <li>Khusus untuk <b>sekolah, rumah sakit, dan klinik</b> akan mengisikan rekapitulasi jumlah anak berkebutuhan khusus yang ditangani sesuai dengan kategorial umur: 0-5 tahun; 6-12 tahun; 13-17 tahun.</li>
            <li>Seluruh data dan informasi yang disampaikan melalui kuesioner ini dijamin kerahasiaannya.</li>
          </ol>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    <Outlet context={[open, setOpen]}/>
    </>
    
  );
}

export default Navigation;
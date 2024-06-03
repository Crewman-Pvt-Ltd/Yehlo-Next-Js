import React from "react";
import { Modal, Box, Button, Grid } from "@mui/material";

const LocationPopup = ({ open, handleClose, handleCurrentLocation, handleManualInput }) => {
  return (
    <Modal open={open} onClose={handleClose}>
     <Box
  sx={{
    position: 'absolute',
    top: '30%',
    // left: '20%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs: '370px',
      md: '400px'
    },
    left: {
      xs: '50%',
      md: '20%'
    },
    backgroundColor: "white",
    p: "30px 2px",
    alignItems: "center",
    textAlign: "center",
    border: "none",
  }}
  
>

        <h2>Select an Option</h2>
        <Grid container  justifyContent="center">
  <Button 
    variant="contained" 
    color="primary" 
    onClick={handleCurrentLocation}
    style={{ width: '190px', height: '40px' }}>
    <p>Use Current Location</p>
  </Button>
  <Button 
    variant="contained" 
    color="secondary" 
    onClick={handleManualInput} 
    sx={{ marginLeft: '10px' }}
    style={{ width: '150px', height: '40px' }}>
    <p>Type Manually</p>
  </Button>
</Grid>


      </Box>
    </Modal>
  );
};

export default LocationPopup;
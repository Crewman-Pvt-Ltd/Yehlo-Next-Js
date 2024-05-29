import React from "react";
import { Modal, Box, Button } from "@mui/material";

const LocationPopup = ({ open, handleClose, handleCurrentLocation, handleManualInput }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Select an Option</h2>
        <Button variant="contained" color="primary" onClick={handleCurrentLocation}>
          Use Current Location
        </Button>
        <Button variant="contained" color="secondary" onClick={handleManualInput} sx={{ mt: 2 }}>
          Type Manually
        </Button>
      </Box>
    </Modal>
  );
};

export default LocationPopup;
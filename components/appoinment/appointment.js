import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  TextareaAutosize,
  Input,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './appointment.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E88E5', // Blue
    },
    secondary: {
      main: '#43A047', // Green
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const App = () => {
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ date, timeSlot, name, description, files });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="image-side"></div>
        <div className="form-side">
          <Box className="form-container">
            <Typography variant="h4" gutterBottom align="center" color="primary">
              Book a Doctor's Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Choose Date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    inputProps: {
                      min: minDate,
                    },
                  }}
                  required
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Choose Time Slot</InputLabel>
                <Select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  required
                >
                  <MenuItem value="09:00">09:00 AM</MenuItem>
                  <MenuItem value="10:00">10:00 AM</MenuItem>
                  <MenuItem value="11:00">11:00 AM</MenuItem>
                  <MenuItem value="13:00">01:00 PM</MenuItem>
                  <MenuItem value="14:00">02:00 PM</MenuItem>
                  <MenuItem value="15:00">03:00 PM</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextareaAutosize
                  minRows={4}
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="textarea"
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Input
                  type="file"
                  inputProps={{ accept: '.pdf', multiple: true }}
                  onChange={handleFileChange}
                />
              </FormControl>
              <Box className="text-center mt-4">
                <Button type="submit" variant="contained" color="secondary">
                  Book Appointment
                </Button>
              </Box>
            </form>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
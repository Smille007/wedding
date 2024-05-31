import React, { useState } from 'react';
import axios from 'axios';
import Bridegroom from './components/Bridegroom';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Organization from './components/Organization';
import RSVP from './components/RSVP';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Where from './components/Where';
import ThankYou from './components/ThankYou'; // Import the ThankYou component
import 'react-refresh/runtime.js';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRSVPSubmit = async (formData) => {
    try {
      const response = await axios.post('https://wedding-back-atc8.onrender.com', formData);
      console.log('RSVP submitted:', response.data);
      setIsSubmitted(true); // Set state to true after successful submission
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Seeyou />
        <Organization />
        <Gallery />
        <Where />
        {isSubmitted ? ( // Render ThankYou component if RSVP is submitted
          <ThankYou />
        ) : ( // Render RSVP component if RSVP is not yet submitted
          <RSVP onSubmit={handleRSVPSubmit} />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react';

const ContactForm = () => {
  const [fullname, setFullname] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [emailid, setEmailId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the server for email processing
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, mobileno, emailid, message }),
      });

      if (response.ok) {
        // Handle success
        alert('Thank you for your message. We will contact you shortly.');
      } else {
        // Handle error
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
        <input type="tel" placeholder="Mobile Number" value={mobileno} onChange={(e) => setMobileNo(e.target.value)} required />
        <input type="email" placeholder="Email Address" value={emailid} onChange={(e) => setEmailId(e.target.value)} required />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

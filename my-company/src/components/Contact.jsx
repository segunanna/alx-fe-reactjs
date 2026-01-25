import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}!`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" placeholder="Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        <input 
          type="email" placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <textarea 
          placeholder="Message" 
          onChange={(e) => setFormData({...formData, message: e.target.value})} 
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
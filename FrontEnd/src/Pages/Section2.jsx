import Container from 'react-bootstrap/Container';
import { useState } from 'react'
import axios from 'axios';


const Section2 = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    startupname: '',
    email: '',
    phonenumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/submit', formData);
      console.log(response.data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit form');
    }
  };

  return (
    <Container className=' justify-form-center'>
    <form onSubmit={handleSubmit} >
    <h1>For Register Your Statup</h1>
      <div>
      
        <div >
          <label> First Name:</label>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
        </div>
        <div>
          <label> Last Name:</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
        </div>
        <div>
          <label> startupname Name:</label>
          <input type="text" name="startupname" value={formData.startupname} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phonenumber:</label>
          <input type='tel' name="phonenumber" value={formData.phonenumber} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </Container>
  );
};

export default Section2;
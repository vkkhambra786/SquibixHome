 


import React, { useState, useEffect } from 'react';

const AdminTool = ({ updateHomepageData }) => {
  const defaultData = {
    title: 'Welcome to Squbix Digital',
    description: 'At Squbix Digital, we aim to work with the latest technology to solve the needs and requirements of our clients. Passionate about using cutting-edge technology to meet client needs, delivering high-quality solutions for business success.',
    imageUrl: '',
    sliderHeading: 'BlockChain Consultant',
    slidercontent: 'BlockChain consultants help businesses and organizations navigate blockchain technology. They provide advice, strategic planning, and technical expertise to help clients use blockchain',
    sliderUrl: 'https://squbix.com/static/media/Consultancy.ff859984439a013883e4.gif',
    welcome:"Our Services",
    welcome_cont:"Your one-stop solution for business success in today's dynamic market. Our Services range from idea transformation to product enhancement:",
    prod_dev:"Product Development",
    prod_cont:"We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert  collaboration and cutting-edge technology.",
    prod_enh:"Product Enhancement",
    prod_cont1:"Enhance your existing product with tailored solutions to optimize user experiences, boost performance, and seamlessly integrate new functionalities.",
    squibix:"At Squbix Digital, we are dedicated to delivering exceptional services that empower businesses to thrive in the ever-evolving digital landscape. Reach out to us today to discuss your unique requirements and discover how our services can take your business to new heights.",
    whatwe:"What We Offer",
    mobiledev:"Mobile Development",
    mobilecont:"Mobile app experts for iOS and Android. Quality, efficiency, and exceptional user experiences with the latest technologies.",
    webedev:"Web Development",
    webcont:"Delivering high-quality web solutions optimized for speed, security, and performance.",
    blockchain:"Blockchain Consulting",
    blovkcont:"Your partner for blockchain solutions. Enhance business operations with decentralized apps, smart contracts, and blockchain technology.",
    cloudaws:"Cloud and AWS",
    cloudcont:"Cloud migration experts. Optimize cloud infrastructure, ensure security, and scalability with ongoing support."
     // Add other default fields as needed
    // Add other default fields as needed
  };

  const [formData, setFormData] = useState(defaultData);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('homepageData'));
    if (storedData) {
      setFormData(storedData);
    } else {
      setFormData(defaultData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update data in local storage and reflect changes
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Title and Description are required fields.');
      return;
    }
    if (!formData.welcome.trim()) {
      alert('Welcome are required fields.');
      return;
    }
    updateHomepageData(formData ,true);
    alert('Data submitted successfully.');
  };

   

  return (
    <div>
      <h2>Admin Tool</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Slider Heading:
          <input type="text" name="sliderHeading" value={formData.sliderHeading} onChange={handleChange} />
        </label>
        <br />
        <label>
          Slider Content:
          <input type="text" name="slidercontent" value={formData.slidercontent} onChange={handleChange} />
        </label>
        <br />
        <label>
          Slider Image URL:
          <input type="text" name="sliderUrl" value={formData.sliderUrl} onChange={handleChange} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        </label>
        <br />
        <label>
        Welcome:
          <input type="text" name="welcome" value={formData.welcome} onChange={handleChange} />
        </label>
        <br />
        <label>
          Welcome Content:
          <input type="text" name="welcome_cont" value={formData.welcome_cont} onChange={handleChange} />
        </label>
        <br />

        <label>
        Product Development:
          <input type="text" name="prod_dev" value={formData.prod_dev} onChange={handleChange} />
        </label>
        <br />
        <label>
          Product Content:
          <input type="text" name="prod_cont" value={formData.prod_cont} onChange={handleChange} />
        </label>
        <br />
        <label>
        Product Enhancement:
          <input type="text" name="prod_enh" value={formData.prod_enh} onChange={handleChange} />
        </label>
        <br />
        <label>
          Product Enha-Content:
          <input type="text" name="prod_cont1" value={formData.prod_cont1} onChange={handleChange} />
        </label>
        <br />

        <label>
          Squibix digital:
          <input type="text" name="squibix" value={formData.squibix} onChange={handleChange} />
        </label>
        <br />
        <label>
          What we  Offer:
          <input type="text" name="whatwe" value={formData.whatwe} onChange={handleChange} />
        </label>
        <br />
        <label>
           web  development:
          <input type="text" name="webdev" value={formData.webedev} onChange={handleChange} />
        </label>
        <br />
        <label>
          Web Content:
          <input type="text" name="webcont" value={formData.webcont} onChange={handleChange} />
        </label>
        <br />
        <label>
           Mobile  development:
          <input type="text" name="mobiledev" value={formData.mobiledev} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mobile Content:
          <input type="text" name="mobilecont" value={formData.mobilecont} onChange={handleChange} />
        </label>
        <br />

        <label>
           BlockChain  development:
          <input type="text" name="blockchain" value={formData.blockchain} onChange={handleChange} />
        </label>
        <br />
        <label>
           BlockChain Content:
          <input type="text" name="blovkcont" value={formData.blovkcont} onChange={handleChange} />
        </label>
        <br />
        
        <label>
           CLOUD AWS:
          <input type="text" name="cloudaws" value={formData.cloudaws} onChange={handleChange} />
        </label>
        <br />
        <label>
           CLOUD Content:
          <input type="text" name="cloudcont" value={formData.cloudcont} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Homepage</button>
      </form>
    </div>
  );
};

export default AdminTool;

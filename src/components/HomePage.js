 

// import React, { useState, useEffect } from 'react';
// import "./HomePage.css"
// const HomePage = () => {
//   const defaultData = {
//     title: 'Welcome to Squbix Digital',
//     description: 'At Squbix Digital, we aim to work with the latest technology to solve the needs and requirements of our clients. Passionate about using cutting-edge technology to meet client needs, delivering high-quality solutions for business success.',
//     imageUrl: '',
//     sliderHeading:'BlockCahin Consultant',
//     slidercontent:'Blockchain consultants help businesses and organizations navigate blockchain technology. They provide advice, strategic planning, and technical expertise to help clients use blockchain',
//     sliderUrl:'https://squbix.com/static/media/Consultancy.ff859984439a013883e4.gif',
//     welcome:"Our Services",
//     welcome_cont:"Your one-stop solution for business success in today's dynamic market. Our Services range from idea transformation to product enhancement:",
//     prod_dev:"Product Development",
//     prod_cont:"We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert  collaboration and cutting-edge technology.",
//     prod_enh:"Product Enhancement",
//     prod_cont1:"Enhance your existing product with tailored solutions to optimize user experiences, boost performance, and seamlessly integrate new functionalities.",
//     squibix:"At Squbix Digital, we are dedicated to delivering exceptional services that empower businesses to thrive in the ever-evolving digital landscape. Reach out to us today to discuss your unique requirements and discover how our services can take your business to new heights.",
    
    
//     // Add other default fields as needed
//   };

//   const [homepageData, setHomepageData] = useState(null);
  

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('homepageData'));
//     if (storedData) {
//       // Combine default data with stored data
//       setHomepageData({ ...defaultData, ...storedData });
//     } else {
//       // If no data in local storage, set default data
//       setHomepageData(defaultData);
//     }
//   }, []);

 
//   return (
//     <div className='main'>
       
//       {homepageData && (
//         <div>
//         <div class='first-div'>
//         <div class='child-div'>

//           <h1 className='sliderhead'>{homepageData.sliderHeading}</h1>
//           <div className='slidercont'>{homepageData.slidercontent}</div>
//         </div>
//         <div class='child-div1'>

//         {homepageData.sliderUrl && (
//             <img  width ="450px" height="400px" src={homepageData.sliderUrl} alt="Slider Image" />
//           )}
//         </div>
//     </div>
//           <h1 className='title'>{homepageData.title}</h1>
//           <p className='decription'> {homepageData.description}</p>  
//           {homepageData.imageUrl && (
//             <img src={homepageData.imageUrl} alt="Main Image" />
//           )}
//           {/* Render other data as needed */}
      
//         <div className='wel-cont'>
           
//            <h1 className='title'>{homepageData.welcome}</h1>
//            <div className='decription'>{homepageData.welcome_cont}</div>

//         </div>


//        <div className='main2'>
     
//      <div className='main2-child'>
       
//        <div className='childl rotate-left-to-right'>
         
//         <h2 className='prod-head'>{homepageData.prod_dev}</h2>
//         <div className='prod-cont'>{homepageData.prod_cont}</div>
//        </div>
//        <div className='child2 rotate-left-to-right1'>

//        <h2 className='prod-head'>{homepageData.prod_enh}</h2>
//         <div className='prod-cont'>{homepageData.prod_cont1}</div>
//        </div>

//      </div>

//       <div className='main2-child rotate-left-to-right2'>

// <div className='childl rotate-left-to-right'>

//  <h2 className='prod-head'>{homepageData.prod_dev}</h2>
//  <div className='prod-cont'>{homepageData.prod_cont}</div>
// </div>
// <div className='child2'>

// <h2 className='prod-head'>{homepageData.prod_enh}</h2>
//  <div className='prod-cont'>{homepageData.prod_cont1}</div>
// </div>

// </div>
 
// <div className='main2-child '>

// <div className='child5 rotate-left-to-right2'>

//  <h2 className='prod-head'>{homepageData.prod_dev}</h2>
//  <div className='prod-cont'>{homepageData.prod_cont}</div>
// </div>
 
// </div>  
 
        
//       </div>

// <div className='squibix'>{homepageData.squibix}</div>



//         </div> 
//       )}
//     </div>
//   );
// };

// export default HomePage;



import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const defaultData = {
    title: 'Welcome to Squbix Digital',
    description: 'At Squbix Digital, we aim to work with the latest technology to solve the needs and requirements of our clients. Passionate about using cutting-edge technology to meet client needs, delivering high-quality solutions for business success.',
    imageUrl: '',
    sliderHeading: 'BlockCahin Consultant',
    slidercontent: 'Blockchain consultants help businesses and organizations navigate blockchain technology. They provide advice, strategic planning, and technical expertise to help clients use blockchain',
    sliderUrl: 'https://squbix.com/static/media/Consultancy.ff859984439a013883e4.gif',
    welcome: "Our Services",
    welcome_cont: "Your one-stop solution for business success in today's dynamic market. Our Services range from idea transformation to product enhancement:",
    prod_dev: "Product Development",
    prod_cont: "We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.",
    prod_enh: "Product Enhancement",
    prod_cont1: "Enhance your existing product with tailored solutions to optimize user experiences, boost performance, and seamlessly integrate new functionalities.",
    squibix: "At Squbix Digital, we are dedicated to delivering exceptional services that empower businesses to thrive in the ever-evolving digital landscape. Reach out to us today to discuss your unique requirements and discover how our services can take your business to new heights.",
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
  };

  const [homepageData, setHomepageData] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('homepageData'));
    if (storedData) {
      setHomepageData({ ...defaultData, ...storedData });
    } else {
      setHomepageData(defaultData);
    }
  }, []);

  

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 100);
    };

    let timeout;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [defaultData]);

  return (
    <div className='main'>
      {homepageData && (
        <div>
          <div className='first-div'>
            <div className='child-div'>
              <h1 className='sliderhead'>{homepageData.sliderHeading}</h1>
              <div className='slidercont'>{homepageData.slidercontent}</div>
            </div>
            <div className='child-div1'>
              {homepageData.sliderUrl && (
                <img width="450px" height="400px" src={homepageData.sliderUrl} alt="Slider Image" />
              )}
            </div>
          </div>
          <h1 className='title'>{homepageData.title}</h1>
          <p className='decription'> {homepageData.description}</p>
          {homepageData.imageUrl && (
            <img src={homepageData.imageUrl} alt="Main Image" />
          )}
          <div className='wel-cont'>
            <h1 className='title'>{homepageData.welcome}</h1>
            <div className='decription'>{homepageData.welcome_cont}</div>
          </div>
          <div className='main2'>
            <div className='main2-child'>
              <div className='childl'>
                <h2 className='prod-head'>{homepageData.prod_dev}</h2>
                <div className='prod-cont'>{homepageData.prod_cont}</div>
              </div>
              <div   className={`child2 ${isScrolling ? 'rotate' : ''}`}>
                <h2 className='prod-head'>{homepageData.prod_enh}</h2>
                <div className='prod-cont'>{homepageData.prod_cont1}</div>
              </div>
            </div>
            <div className='main2-child'>
              <div className='childl'>
                <h2 className='prod-head'>{homepageData.prod_dev}</h2>
                <div className='prod-cont'>{homepageData.prod_cont}</div>
              </div>
              <div  className={`child2 ${isScrolling ? 'rotate' : ''}`}>
                <h2 className='prod-head'>{homepageData.prod_enh}</h2>
                <div className='prod-cont'>{homepageData.prod_cont1}</div>
              </div>
            </div>
            <div className='main2-child'>
              <div   className={`child5 ${isScrolling ? 'rotate' : ''}`}>
                <h2 className='prod-head'>{homepageData.prod_dev}</h2>
                <div className='prod-cont'>{homepageData.prod_cont}</div>
              </div>
            </div>
          </div>

          <div className='squibix'>{homepageData.squibix}</div>
          <h1 className='title'>{homepageData.whatwe}</h1>


          {/* Other roattaion part */}

          

          <div className='main2'>
            <div className='main2-child'>
              <div className='childl'>
                <h2 className='prod-head'>{homepageData.mobiledev}</h2>
                <div className='prod-cont'>{homepageData.mobilecont}</div>
                <h2 className='learn'>Learn More</h2>
              </div>
              <div   className={`child2 ${isScrolling ? 'rotate' : ''}`}>
                <h2 className='prod-head'>{homepageData.webedev}</h2>
                <div className='prod-cont'>{homepageData.webcont}</div>
                <h2 className='learn'>Learn More</h2>
              </div>
            </div>
            <div className='main2-child'>
              <div className='childl'>
                <h2 className='prod-head'>{homepageData.blockchain}</h2>
                <div className='prod-cont'>{homepageData.blovkcont}</div>
                <h2 className='learn'>Learn More</h2>
              </div>
              <div  className={`child2 ${isScrolling ? 'rotate' : ''}`}>
                <h2 className='prod-head'>{homepageData.cloudaws}</h2>
                <div className='prod-cont'>{homepageData.cloudcont}</div>
                <h2 className='learn'>Learn More</h2>
              </div>
            </div>
             
          </div>

          <div className='nu'>Our Core Values</div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

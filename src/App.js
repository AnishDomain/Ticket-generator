import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import {Routes,Route} from 'react-router-dom'
import { LandingPage } from './LadingPage';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function App() {
  const [image, setImage] = useState(null); 
  const [ticketNumber,setTicketNumber] = useState('')
  const[userInput,setUserinput]  = useState(
          {name:'' ,
           emailaddress:''
          }
        )
        const emailData = {
          ...userInput,    
          ticketNumber    
        };

  const navigate = useNavigate()

  const handleNavigation = () =>{
    if(ticketNumber) {
      navigate("/LandingPage")
    } else{
      alert("Fill up the mandatory fields")
      
    }
  }



  const [currentDate,setCurrentDate]= useState('');
  const[fullNameValidation,setFullNameValidation] =useState({validationmessage:''})
  const[emailValidation,setEmailValidation] = useState({validationmessage:''})
  const handleFullNameValidation = (e) => {
        console.log("Full Name Input:", e.target.value)
        const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
        const result = pattern.test(e.target.value) ? "Special characters are not allowed" : " "
        console.log("Validation Message:", result);
        setFullNameValidation({validationmessage:result}) 
  } 
  const handleEmailValidation = (e) => {
    console.log("Full Name Input:", e.target.value)
    const pattern = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/g;
    const result = pattern.test(e.target.value) ? "Special characters are not allowed" : " "
    console.log("Validation Message:", result);
    setEmailValidation({validationmessage:result}) 
} 


  
   

  
    const shareEmail = (e) => {
      const date = new Date();
      const formattedDate = `0${date.getMonth() + 1}/${date.getDate()}, ${date.getFullYear()}`;
      console.log('Formatted Date:', formattedDate);
      setCurrentDate(formattedDate);

      const ticketNum = `#${Math.floor(Math.random() * 100000)}`;
      setTicketNumber(ticketNum);
      
      emailjs.send('service_6fnrq6p', 'template_wr1v9aa', emailData, '_57Gdr1-82hCBuGCT')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    
    };

  
     
    
     const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;
    
      const reader = new FileReader();
      reader.readAsDataURL(file);
    
      reader.onloadend = () => {
        setImage({
          name: file.name,
          url: reader.result, 
        });
      };
    };
    


  const handleChange = (e) => {
      setUserinput({...userInput,[e.target.name]: e.target.value })
  }    



  
  
  
  
 

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home
          userInput = {userInput}
          setUserinput = {setUserinput}   
          handleChange = {handleChange}  
          image = {image}
          setImage ={setImage}
          ticketNumber={ticketNumber}
          setTicketNumber ={setTicketNumber}
          handleImageUpload={handleImageUpload}
          currentDate={currentDate}
          shareEmail={shareEmail}
          handleFullNameValidation={handleFullNameValidation}
          fullNameValidation={fullNameValidation}
          handleEmailValidation={handleEmailValidation}
          emailValidation={emailValidation}
          handleNavigation ={handleNavigation}
          

        />}/>
        <Route path='LandingPage' element={<LandingPage
          userInput = {userInput}
          setUserinput = {setUserinput}   
          handleChange = {handleChange}
          ticketNumber ={ticketNumber}
          currentDate={currentDate}
        />}/> 

      </Routes>
       
    </div>
  );
}

export default App;

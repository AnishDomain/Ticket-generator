import logo from './assets/images/logo-full.svg';
import mobilebackground from'./assets/images/background-mobile.png';
import patternlines  from'./assets/images/pattern-lines.svg';
import designbottom from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
import designtop from './assets/images/pattern-squiggly-line-top.svg'
import uploadicon from './assets/images/icon-upload.svg'
import iconinfo from'./assets/images/icon-info.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Home = ({userInput,setUserInput,handleChange,shareEmail,handleImageUpload,image,handleFullNameValidation,fullNameValidation,handleEmailValidation,emailValidation,handleNavigation}) => {
           
 return(
       <main>
         <div className="parentdiv">
             <div className="logocontainer">
                <img src={logo}/>
             </div>
        <img className='designtop' src={designtop}/>
        <img className='designbottom' src={designbottom}/>
        <h4>Your Journey to Coding Conf 2025 Starts Here!</h4>
        <p>Secure your spot at next years biggest coding conference.</p>
        <label>Upload Avatar</label>
        <div className='upload-box'>
            <img className='uploadicon' src={uploadicon}></img>
            <input className='choosefile' type="file" accept="image/*" onChange={handleImageUpload}/>
            <p>Drag and drop or click to upload</p>
            {image && (<img src={image.url} alt={image.name} width="100"/>)}
        </div>
          <img className='iconinfo' src={iconinfo}></img>
          <p className='iconinfo-para'>Upload your photo(JPG or PNG, max size: 500KB).</p>
        <form className='inputform'>
            <label>Full Name</label>
            <input
              name='name'
              type='text'
              value={userInput.name}
              onChange={(e)=>{
                handleChange(e)
                handleFullNameValidation(e)
                
              }}
            />
            <p style={{color:"red",fontWeight:300}}>{fullNameValidation.validationmessage}</p>
            <label>Email Address</label>
             <input
              name='emailaddress'
              type='text'
              value={userInput.emailaddress}
              placeholder='example@email.com'
              onChange={(e)=>{
                handleChange(e);
                handleEmailValidation(e);
              }}
            />
            <p style={{color:"red",fontWeight:300}}>{emailValidation.validationmessage}</p>
            <label>GitHub Username</label>
            <input
              name='github-username'
              type='text'
            />
         </form>
         <button className='generatebutton' onClick={() => { shareEmail(); handleNavigation(); }}
         >Generate My Ticket</button>
        
        </div>
       </main>
    )
}
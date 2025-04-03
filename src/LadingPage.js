import logo from './assets/images/logo-full.svg';
import mobilebackground from'./assets/images/background-mobile.png';
import patternlines  from'./assets/images/pattern-lines.svg';
import designbottom from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
import designtop from './assets/images/pattern-squiggly-line-top.svg'
import uploadicon from './assets/images/icon-upload.svg'
import iconinfo from'./assets/images/icon-info.svg'
import ticketpattern from'./assets/images/pattern-ticket.svg';
import logofull from'./assets/images/logo-full.svg'
import avatar from'./assets/images/image-avatar.jpg'

export const LandingPage = ({userInput,setUserInput,handleChange,currentDate,ticketNumber}) => {









    return(
       <main>
         <div className="parentdiv">
             <div className="logocontainer">
                <img src={logo}/>
             </div>
        <img className='designtop' src={designtop}/>
        <img className='designbottom' src={designbottom}/>
        <h4>Congrats {`${userInput.name}`},Your ticket is ready.</h4>
        <p>We've emailed your ticket to {`${userInput.emailaddress}`} and will send updates in the run up to the event.</p>
        
        <div className='ticket'>
           <div className='child1'>
            <img src={logofull}/>
            <p>{currentDate}</p>
           </div>
           <div className='child2'>
              <img src={avatar}/>
              <p>{userInput.name}</p>
            </div>
           <img  src={ticketpattern}/>
          <div className='child3'>
              <p>{ticketNumber}</p>
          </div> 

        </div>
          
        </div>
       </main>
    )
}
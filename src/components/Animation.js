import React from 'react';

const Anim =(props)=>{
    console.log(props); 
    return(
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_uJgRyM.json"  
        background="transparent"
          speed="1" 
           loop="2"
             autoplay
    
       >
       </lottie-player>
    );
}
export default Anim ;

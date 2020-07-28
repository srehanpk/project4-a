import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Bird2 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(-100%)"},
			{transform: "translatex(2000%)"},
                ],
          
                timing: {
                    
                      duration: 10000,
                        iterations: Infinity,	
                         direction: "reverse",	
                        //easing: "ease-in-out",
                        
                  
                }
    });

    return (

        <div className="sky">

        <img ref={ref} src="./bird2.gif" className="bird2" alt="bird2" />
        
        </div>
    );




}


export default Bird2;
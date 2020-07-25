import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Man2 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)"},
			{transform: "translatex(900px)"},
                ],
          
                timing: {
                    
                      duration: 11000,
                        iterations: Infinity,	
                         direction: "normal",	
                        //easing: "ease-in-out",
                        
                  
                }
    });

    return (

        <div className="sky">

        <img ref={ref} src="./man2.gif" className="man2" alt="man2" />
        
        </div>
    );




}


export default Man2;
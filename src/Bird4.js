import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Bird4 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)"},
			{transform: "translatex(900px)"},
                ],
          
                timing: {
                    
                      duration: 6000,
                        iterations: Infinity,	
                         direction: "normal",	
                        //easing: "ease-in-out",
                        
                  
                }
    });

    return (

        <div className="sky">

        <img ref={ref} src="./bird1.gif" className="bird4" alt="bird4" />
        
        </div>
    );




}


export default Bird4;
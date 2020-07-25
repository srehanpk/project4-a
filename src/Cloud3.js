import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Cloud3 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(-100%)"},
			{transform: "translatex(800px)"},
                ],
          
                timing: {
                    
                      duration: 260000,
                        iterations: Infinity,	
                         direction: "reverse",	
                        //easing: "ease-in-out",
                        
                  
                }
    });

    return (

        <div className="sky">

        <img ref={ref} src="./cloud2.png" className="cloud3" alt="cloud3"/>
        
        </div>
    );




}


export default Cloud3;
import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Dog = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)"},
            {transform: "translatex(750px)"},
            
        ],
          
                timing: {
                    
                      duration: 4000,
                        iterations: Infinity,	
                        //  direction: "reverse",	
                        //easing: "ease-in-out",
                        
                  
                }
    });

    return (

        <div className="dog-div">
        
        <img ref={ref} src="./dog.gif" className="dog" alt="dog"/>
        
        </div>
        
    );




}


export default Dog;
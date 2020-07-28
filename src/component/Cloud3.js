import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";




const Cloud3 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)" },
            { transform: "translatex(700px)" },
        ],

        timing: {

            duration: 200000,
            iterations: Infinity,
            direction: "reverse",
            //easing: "ease-in-out",


        }
    });

    return (

        <div className="sky">

            <img ref={ref} src="./Images/cloud2.png" className="cloud3" alt="cloud3" />

        </div>
    );




}


export default Cloud3;
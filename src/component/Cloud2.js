import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";




const Cloud2 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)" },
            { transform: "translatex(700px)" },
        ],

        timing: {

            duration: 160000,
            iterations: Infinity,
            direction: "reverse",
            //easing: "ease-in-out",


        }
    });

    return (

        <div className="sky">

            <img ref={ref} src="./Images/cloud1.png" className="cloud2" alt="cloud2" />

        </div>
    );




}


export default Cloud2;
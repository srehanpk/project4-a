import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";




const Man3 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)" },
            { transform: "translatex(800%)" },
        ],

        timing: {

            duration: 11000,
            iterations: Infinity,
            direction: "reverse",
            //easing: "ease-in-out",


        }
    });

    return (

        <div className="sky">

            <img ref={ref} src="./Images/man3.gif" className="man3" alt="man3" />

        </div>
    );




}


export default Man3;
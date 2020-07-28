import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Bird1 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)" },
            { transform: "translatex(2500%)" },
        ],

        timing: {

            duration: 9000,
            iterations: Infinity,
            direction: "normal",
            //easing: "ease-in-out",


        }
    });

    return (

        <div className="sky">

            <img ref={ref} src="./Images/bird1.gif" className="bird1" alt="bird1" />

        </div>
    );




}


export default Bird1;
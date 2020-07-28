import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Bird3 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)" },
            { transform: "translatex(2500%)" },
        ],

        timing: {

            duration: 6000,
            iterations: Infinity,
            direction: "reverse",
            //easing: "ease-in-out",


        }
    });

    return (

        <div className="sky">

            <img ref={ref} src="./Images/bird2.gif" className="bird3" alt="bird3" />

        </div>
    );




}


export default Bird3;
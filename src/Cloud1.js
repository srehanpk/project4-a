import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Cloud1 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(-100%)" },
            { transform: "translatex(400%)" },
        ],

        timing: {

            duration: 60000,
            iterations: Infinity,
            direction: "reverse",
            //easing: "ease-in-out",


        }
    });

    return (

        <div className="sky">

            <img ref={ref} src="./cloud1.png" className="cloud1" alt="cloud1" />

        </div>
    );




}


export default Cloud1;
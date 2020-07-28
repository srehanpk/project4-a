import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Cloud2 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(-100%)" },
            { transform: "translatex(800px)" },
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

            <img ref={ref} src="./cloud1.png" className="cloud2" alt="cloud2" />

        </div>
    );




}


export default Cloud2;
import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Man1 = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translate(-100%)" },
            { transform: "translate(500%)" },
        ],

        timing: {

            duration: 8000,
            iterations: Infinity,
            direction: "reverse",
            //easing: "ease-in-out",


        }
    });

    return (

        <div className="sky">

            <img ref={ref} src="./man1.gif" className="man1" alt="man1" />

        </div>
    );




}


export default Man1;
import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const Cat = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)" },
            { transform: "translatex(850px)" },

        ],

        timing: {

            duration: 4000,
            iterations: Infinity,
            //  direction: "reverse",	
            //easing: "ease-in-out",


        }
    });

    return (

        <div className="cat-div">


            <img ref={ref} src="./cat.gif" className="cat" alt="cat" />
        </div>

    );




}


export default Cat;
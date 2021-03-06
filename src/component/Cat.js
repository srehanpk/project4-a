import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";




const Cat = () => {

    const { ref } = useWebAnimations({

        keyframes: [

            { transform: "translatex(0px)" },
            { transform: "translatex(800px)" },

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


            <img ref={ref} src="./Images/cat.gif" className="cat" alt="cat" />
        </div>

    );




}


export default Cat;
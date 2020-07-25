import React from 'react';
import Sky from './Sky';
import Dog from './Dog';
import Cat from './Cat';
import Man1 from './Man1';
import Man2 from './Man2';






const Background = () => {

    return (

        <div className="bg">

        <Sky />
        <img src="./ground.jpeg" className="ground" alt="ground" />
        
        <Man2 />
        <Man1 />
        
        <Dog />
        <Cat />
        
        
        </div>
    );




}


export default Background;
import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css";
import FlipData from "./data.json";

const PageFlip = () => {

    //prepare and create array of image files 
    const reqJpgs = require.context ( '../../assets/imgs', true, /\.jpg$/ )
    const paths = reqJpgs.keys ()
    const jpgs = paths.map( path => reqJpgs ( path ) ) 

    const { flipData } = FlipData;
   
    return (
        <div>
        <div className="main-page-container">
            <HTMLFlipBook
            showCover={true} //false by default. Makes 1st and last image cover and back
            width={300}
            height={300}
            flippingTime={2000} //default is 1000 milliseconds
            style={{ margin: "0 auto" }}
            >
            {flipData.map((el, i) => (
                <div className="demoPage" key={el.id} >
                <img src={jpgs[i]} alt="" />
                </div>
            ))}
            </HTMLFlipBook>
        </div>
        </div>
    );
};

export default PageFlip;

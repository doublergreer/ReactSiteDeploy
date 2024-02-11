import React, { useState } from 'react';

export default function OldSite() {
    const [isHovered, setIsHovered] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(0);

    // Function to handle mouse over event
    const handleMouseOver = () => {
        setIsHovered(true);
    };
    
    // Function to handle mouse out event
    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setButtonClicked(buttonClicked+1);
    };

    return (
        <>
        <header> 
                {buttonClicked > 1 || <p id="title">Ryan Greer's Website</p>}
                <div className="projects-title">
                    {buttonClicked > 2 || <h2 id="links">Links:</h2>}
                </div>
                {buttonClicked > 3 || <div className="projects">
                    <a href="https://github.com/doublergreer" target="_blank" id="github"> Github </a>
                    <br/>
                    <br/>
                    <a href="https://www.linkedin.com/in/ryan-greer-b1123424a/" target="_blank" id="github"> Linkedin </a>
                    <br/> <br/>
                </div>}

                {buttonClicked >= 5 && <div>
                    <h1>Great Work</h1>
                    <h3>It's All Gone</h3>
                    <h5>Refresh the page to see the content again</h5>
                </div>}
                {buttonClicked >= 1 && buttonClicked < 5 && <button onClick={handleClick} width="20" height="20" >Delete</button>} 
        </header>
        <DestructSite isHovered={isHovered} buttonClicked={buttonClicked} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} handleClick={handleClick} />
        </>
    );
}

function DestructSite(props) {

    return (
        <>
            {props.buttonClicked > 0 || <a onMouseOver={props.handleMouseOver} onMouseOut={props.handleMouseOut} className='destroy'>
                Destroy Website
                    {props.isHovered && <button onClick={props.handleClick} width="20" height="20" >Delete</button>}
            </a> }
        </>
    )
}

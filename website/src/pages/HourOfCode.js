import React, { Component } from 'react';
import "./test.css";
import Typewriter from "typewriter-effect";

class HourOfCode extends Component {
    render() {
        return(
            <div className="container">
                <div className="header">
                    <Typewriter
  
                    onInit={(typewriter)=> {

                    typewriter
   
                    .typeString("It's the...")
    
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("...Hour of Code Week!")
                    .start();
                    }}
                    />
                </div>
                <img className="coding-img" src={require("../artifacts/images/Code typing-bro.png")} alt="coding-img"></img>
                <div className="content">
                    <div className="second-title"><h2>A great way to start your coding journey~</h2></div>
                    <div className = "dottedLine"></div>
                        <div className="intro">
                            <h2 className = "h2">Introduction</h2>
                            <img className = "intro-img"
                            src = {require("../artifacts/images/Code review-amico.png")}
                            alt = "intro-img"
                            />
                            <p className = "body">Programming, or the field of Computer Science, <br />
                             has shaped the world with fascinating
                                invention. <br /> From building a "Would you rather" to facial recognition, <br />Programming has
                                become a valuable skill to gain in our generation and beyond. <br />
                            if you want to explore deeper
                            of how computer science is changing the world, <br/>
                            watch this video ✈✈✈
                            <a className="intro-vid" href="https://youtu.be/xJqSu1IbcHg?list=PLzdnOPI1iJNfpD8i4Sx7U0y2MccnrNZuP">here :))</a>
                            </p>
                        </div>
                            <div className = "dottedLine"></div>
                            <div className="elementary">

                                <h2 className="h2">Elementary School Level - Dance Party</h2>
                                <img className="dance-img"
                                src={require("../artifacts/images/dance.gif")}
                                alt="dance-img"
                                />
                                <div className="button">
                                    <div className="vertical-center">
                                        <a className="hoc-btn" href="https://youtu.be/tY09z2y8-xQ">Introduction Video </a> 
                                        <a className="hoc-btn" href="https://hourofcode.com/dance2019">Dance Party Tutorial</a>
                                        <a className="hoc-btn" href="https://curriculum.code.org/hoc/plugged/8/">Teacher Notes</a> 
                                    </div>
                                </div>
                                <p className="dance-body">
                                Warm Up - <br />
                                As a class, first think about “what’s your favorite way to be creative?” <br/>
                                Today, we are going to be creative “code”, and dancing!! <br/>
                                Let’s get this mood started with this 
                                <a className="spotify-playlist" href="https://open.spotify.com/playlist/2MiLztu5QGQERdEsZed81b?si=6cF0s1ETQf2vN_ea8B4fIw&nd=1"> Spotify Playlist.</a>

                                </p>
                                

                                <p className="dance-body">
                                Go through the tutorial either as a class or in pairs, 
                                create a dance party of your own, featuring your favorite songs and artists!  <br />
                                Don’t forget to print out 
                                <a className="certificate" href="https://code.org/certificates"> certificates </a>
                                for students' hardwork! 
                                Happy Coding!
                                </p>
                                
                                
                            </div>
                            <div className = "dottedLine"></div>

                            <div className="middle-school">
                                <h2 className="h2">Middle School Level - Frozen</h2>
                                <img className="anna-img"
                                src={require("../artifacts/images/anna.jpg")}
                                alt="anna-img"
                                />
                                <div className="button">
                                    <div className="vertical-center">
                                        <a className="hoc-btn" href="https://youtu.be/H1-paxNG4kw">Introduction</a>
                                        <a className="hoc-btn" href="https://studio.code.org/s/frozen/lessons/1/levels/1">Frozen Tutorial</a>
                                        <a className="hoc-btn" href="https://curriculum.code.org/hoc/plugged/2/">Teacher Notes </a>
                                    </div> 
                                </div>
                                <p className="elsa-body">
                                Warm Up - <br />
                                As a class, think about what does the word ‘code’ mean? What does “debugging’ mean? <br/>
                                </p>
                                <p className="elsa-body">As a class or work in pairs, follow the steps on the instruction <br />
                                and code with Elsa and Anna to create a winter wonderland. <br/>
                                 You will create snowflakes and patterns as you ice-skate and <br />
                                 make a winter wonderland that you can then share with your friends! <br />
                                 If you have time, feel free to explore other cool projects 
                                 on the 
                                <a className="website-link" href="https://hourofcode.com/us/learn"> hourofcode.org website! </a><br /> 
                                 Have fun~ and don’t forget to print out 
                                <a className="certificate" href="https://code.org/certificates"> certificates </a>
                                for students' hardwork! 
                                </p>
                                
                            </div>
                            
                        <div className = "dottedLine"></div>
                            <div className="high-school">
                                <h2 className="h2">High School Level - Star Wars</h2>
                                <img className="star-wars-img"
                                src={require("../artifacts/images/star-wars.jpg")}
                                alt="star-wars-img"
                                />
                                <div className="button">
                                    <div className="vertical-center">

                                        <a className="hoc-btn" href="https://youtu.be/vNjiHkQQl6A">Introduction</a>
                                        <a className="hoc-btn" href="https://code.org/starwars">Star Wars Tutorial</a>
                                        <a className="hoc-btn" href="https://code.org/files/star-wars-lp.pdf" >Teacher Notes </a> 
                                    </div>
                                </div>
                                <p className="star-wars-body">
                                    Warm up - <br />
                                    As a class, 
                                    discuss what you already know about “coding” or “programming! <br/>
                                    In the next hour or so, <br/>
                                    follow the step-by-step tutorial to build Star Wars’ galaxy with code! <br />
                                    If you have time, feel free to explore other cool projects 
                                    on the 
                                    <a className="website-link" href="https://hourofcode.com/us/learn"> hourcode.org website, </a><br /> 
                                    or scroll down to the Resources section to learn about other programming languages! <br />

                                </p>
                            </div>
                        <div className = "dottedLine"></div>

                            <div>
                                <h2 className="h2">Resources.</h2>
                                <p className="body">Below are some amazing free online resources that can teach you about Python, Java, HTML, CSS, and Javascript</p>
                                <p className="body">Happy coding everyone 🖤💗</p>
                            </div>

                        <div className = "dottedLine"></div>
                            <div className="Python">
                                <img className="python-logo" 
                                src={require("../artifacts/images/python-logo.png")}
                                alt = "python-logo"
                                />
                                <ul className="python-coding-resources">
                                    <a className="mosh-python" href="https://youtu.be/kqtD5dpn9C8">Programming with Mosh - 🐍</a><br/>
                                    <p className="python-descr">In this 1 hour python completely beginner tutorial, Mosh will teach you step-by-step of 
                                    how to set up a python environment,
                                    code a simple project, and walk through many cool concepts such as in Python!</p>
                                </ul>
                            </div>

                            <div className="Java">
                                <img className="java-logo"
                                src={require("../artifacts/images/java-logo.png")}
                                alt="java-logo"
                                />
                                <ul className="java-coding-resources">
                                    <a className="geeksforgeeks" href="https://www.geeksforgeeks.org/java/?ref=shm">GeeksforGeeks - ☕</a><br/>
                                    <p className="java-descr">This self-paced Java tutorial goes in detail of 
                                    what Java is and how Java works, including concepts such as Strings,
                                    Methods, Flow Control etc that will allow you to code a cool program of your own!</p>
                                </ul>
                            </div>

                            <div className="the-combo">
                                <img className="the-combo-logo"
                                src={require("../artifacts/images/the-combo.png")}
                                alt="the-combo-logo"
                                />
                                <ul className="the-combo-resources">
                                    <a className="w3school-css" href="https://www.w3schools.com">W3Schools - 📑</a><br/>
                                    <p className="combo-dev">W3Schools include lots of fun practices along with detailed
                                    description for HTML, CSS, and Javascript, the combo you would need to build
                                    a functional website, like this one!</p>

                                </ul>
                            </div>

                </div>
            </div>
        )
    }
}

export default HourOfCode;
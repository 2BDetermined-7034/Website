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
                    <div className="second-title"><h2>A great way to get started your coding journey~</h2></div>
                    <div className = "dottedLine"></div>
                        <div className="resources">
                            <h2>Resources.</h2>
                            <p>Below are some amazing free online resources that can teach you about Python, Java, HTML, CSS, and Javascript</p>
                            <p>happy coding everyone 🖤💗</p>
                        </div>

                        <div className = "dottedLine"></div>
                            <div className="Python">
                                <img className="python-logo" 
                                src={require("../artifacts/images/python-logo.png")}
                                alt = "python-logo"
                                />
                                <ul className="python-coding-resources">
                                    <a className="mosh-python" href="https://youtu.be/kqtD5dpn9C8">Programming with Mosh - 🐍</a><br/>
                                    <a className="w3schools" href="https://www.w3schools.com/python/default.asp">W3Schools - 🐍</a><br/>
                                    <a className="learnPython" href="https://www.learnpython.org/">LearnPython - 🐍</a><br/>
                                    <a className="A-Byte-Of-Python" href="https://python.swaroopch.com/">A Byte of Python - 🐍</a><br/>
                                    <a className="google-python" href="https://developers.google.com/edu/python">Python with Google - 🐍</a><br/>
                                </ul>
                            </div>

                            <div className="Java">
                                <img className="java-logo"
                                src={require("../artifacts/images/java-logo.png")}
                                alt="java-logo"
                                />
                                <ul className="java-coding-resources">
                                    <a className="mosh-java" href="https://youtu.be/eIrMbAQSU34">Programming with Mosh - ☕</a><br/>
                                    <a className="w3schools" href="https://www.w3schools.com/java/default.asp">W3Schools - ☕</a><br/>
                                    <a className="geeksforgeeks" href="https://www.geeksforgeeks.org/java/?ref=shm">GeeksforGeeks - ☕</a><br/>
                                    <a className="codingbat" href="https://codingbat.com/java">CodingBat - ☕</a><br/>
                                    <a className="exploreJava" href="https://developer.ibm.com/learningpaths/java-get-started/">Explore Java - ☕</a><br/>
                                </ul>
                            </div>

                            <div className="the-combo">
                                <img className="the-combo-logo"
                                src={require("../artifacts/images/the-combo.png")}
                                alt="the-combo-logo"
                                />
                                <ul className="the-combo-resources">
                                    <a className="mosh-html" href="https://youtu.be/qz0aGYrrlhU">Programming with Mosh HTML - 📑</a><br/>
                                    <a className="mosh-javascript" href="https://youtu.be/W6NZfCO5SIk">Programming with Mosh Javascript - 📑</a><br/>
                                    <a className="w3school-css" href="https://www.w3schools.com/css/">W3Schools CSS - 📑</a><br/>
                                    <a className="w3school-javascript" href="https://www.w3schools.com/js/default.asp">W3Schools Javascript - 📑</a><br/>
                                    <a className="w3school-html" href="https://www.w3schools.com/html/default.asp">W3Schools HTML - 📑</a><br/>

                                </ul>
                            </div>

                </div>
            </div>
        )
    }
}

export default HourOfCode;
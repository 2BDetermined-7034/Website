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
                        <div>
                            <img className = "start-off-img"
                            src = {require("../artifacts/images/Source code-bro.png")}
                            alt = "start-off-img"
                            />
                            <h2 className = "h2">To Start Off...</h2>
                            <p className="body">If you are a complete beginner and have no idea <br />
                            how programming or programming 
                                language works, <br />
                                no worries! Let's start this journey with 
                                <a className="programming-vid" href="https://youtu.be/EGQh5SZctaE" >this video! </a><br />
                                There are many unique programming languages, <br />
                                with all of them have its own specialty! <br />
                                If you are wondering what lanaguage you want to learn first, <br/>
                                then scroll down to the Resources tab to see some of the <br />
                                most widely use and beginner friendly programming language!
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
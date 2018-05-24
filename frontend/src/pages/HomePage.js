import React, { Component } from 'react'
import './HomePage.css'
import Link from '../components/Link'
import Chatbot from '../components/Chatbot'

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Chatbot />
                <div className="MenuBar">
                    <Link text="resume"
                          link="/resume.pdf"
                    />
                    <Link
                        text="linkedin"
                        link="https://www.linkedin.com/in/edwardzhou96"
                    />
                    <Link
                        text="github"
                        link="https://www.github.com/edzmh96"
                    />
                    <Link
                        text="creative"
                        link="https://www.youtube.com"
                    />
                    <Link
                        text="blog"
                        link="/"
                    />
                </div>
            </div>
        )

    }
}

export default HomePage
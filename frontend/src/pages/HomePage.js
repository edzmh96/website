import React, { Component } from 'react';
import './HomePage.css';
import Link from '../components/Link';
import Screen from '../components/Screen';
import MenuBar from '../components/MenuBar';
import IntroSection from "../components/IntroSection";
import particlesJS from 'particles.js/particles';
// import { Rainfall } from "../components/Background";

class HomePage extends Component {

    state = {
        initial: true,
        project: false,
        bot: false,
    }

    onClickProjects(e) {
        if (!this.state.project) {
            this.setState({
                initial: false,
                project: true,
                bot: false,
            });
        }
    }

    onClickBot(e) {
        if (!this.state.bot) {
            this.setState({
                initial: false,
                project: false,
                bot: true,
            });
        }
    }

    componentDidMount() {
        window.particlesJS.load('particles-js', '/assets/particles.json',() => {
            console.log('callback - particles-js config loaded');
        });
    }
    render() {
        return (
            <div className="HomePage">
                    <div id="particles-js" style={{position: 'absolute', width: '100%', height: '100%', top: 0}}/>
                    <MenuBar
                        display={this.state}
                        onClickProjects={(e) => {
                            this.onClickProjects(e)
                        }}
                        onClickBot={(e) => {
                            this.onClickBot(e)
                        }}
                    />
                    <IntroSection display={this.state}/>
                    <Screen display={this.state} />
                    <div className="NavBar">
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
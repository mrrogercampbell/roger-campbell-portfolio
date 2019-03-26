import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/project-1.png'
import thumb02 from '../assets/images/thumbs/project-2.png'
import thumb03 from '../assets/images/thumbs/project-3.png'
import thumb04 from '../assets/images/thumbs/03.jpg'

import full01 from '../assets/images/fulls/project-1.png'
import full02 from '../assets/images/fulls/project-2.png'
import full03 from '../assets/images/fulls/project-3.png'
import full04 from '../assets/images/fulls/03.jpg'


const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Project 1', description: 'Gameplay and app rendering are all handled by DOM.', tech: 'HTML, CSS, JavaScript.', repo: 'https://github.com/rc1336/project-1-triva-game' },
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Project 2', description: 'A web application built with MEHN stack.', tech: 'MongoDB, Express.js, Handlebars, Node.js.', repo: 'https://github.com/rc1336/project-2' },
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Project 3', description: 'Developed utilizing a MERN stack. My primary responsibilities were to plan and develop the backend of this application.', tech: 'MongoDB, Express.js, React.js, Node.js.', repo: 'https://github.com/rc1336/devbook-backend' },
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Project 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', tech: 'MongoDB, Express.js, Handlebars, Node.js.', repo: 'https://github.com/rc1336/devbook-backend' },

];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Roger Campbell II"
        const siteDescription = "Roger Campbell II's Portfolio"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <h1>I am a mission driven Software Engineer equipped with the insight to thrive under pressure and tackle complex problems. I bring a creative edge and innovative mindset to development.</h1>

                        <br />

                        <p> <strong>Front-End Knowledge:</strong> JavaScript | React.js | React Native | Python | Django | Express | MongoDB | Mongoose | Node |  PostgresSQL </p>
                        <p> <strong>Back-End Knowledge:</strong> JavaScript | React.js | React Native | Python | Django | Express | MongoDB | Mongoose | Node |  PostgresSQL </p>
                        <ul className="actions">
                            <li><a href="#three" className="button">Get in Touch</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description, tech, repo }) => ({
                            id,
                            src,
                            thumbnail,
                            caption,
                            description,
                            tech,
                            repo
                        }))} />

                        <ul className="actions">
                            <li><a href="#three" className="button">Get in Touch</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        954.242.9917
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com/in/roger-campbell-ii' target='_blank'>
                                            <h3 className="icon fa-linkedin"><span className="label">LinkedIn</span></h3>
                                            linkedin.com/in/roger-campbell-ii
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/rc1336' target='_blank'>
                                            <h3 className="icon fa-github"><span className="label">GitHub</span></h3>
                                            github.com/rc1336
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:roger.campbell527@gmail.com?Subject=Hello,%20Roger!">
                                            <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                            Roger.Campbell527@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
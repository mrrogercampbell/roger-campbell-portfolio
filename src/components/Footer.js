import React from 'react'


class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/rc1336" className="icon fa-github" target='_blank'><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/roger-campbell-ii/" className="icon fa-linkedin" target='_blank'><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto:roger.campbell527@gmail.com?Subject=Hello,%20Roger!" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="tel:954-242-9917" className="icon fa-mobile"><span className="label">Phone</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li> Roger.Campbell527@gmail.com</li>
                        <li><a href="tel:954-242-9917">Phone: 954.242.9917</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

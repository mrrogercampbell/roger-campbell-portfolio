import React from 'react'


class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        {/* <li><a href="#" className="icon fa-twitter" target='_blank'><span className="label">Twitter</span></a></li> */}
                        <li><a href="https://github.com/rc1336" className="icon fa-github" target='_blank'><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/roger-campbell-ii/" className="icon fa-linkedin" target='_blank'><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto:roger.campbell527@gmail.com?Subject=Hello,%20Roger!" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Roger Campbell II</li><li>Phone: 954.242.9917</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

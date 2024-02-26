import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Daily Updates</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                                <li className="nav-link active nav-item"><Link className="nav-item" to="/business" style={{ textDecoration: 'none', color: "#fff" }}>Business</Link></li>
                                <li className="nav-link active"><Link className="nav-item" to="/entertainment" style={{ textDecoration: 'none', color: "#fff" }}>Entertainment</Link></li>
                                <li className="nav-link active"><Link className="nav-item" to="/health" style={{ textDecoration: 'none', color: "#fff" }}>Health</Link></li>
                                <li className="nav-link active"><Link className="nav-item" to="/science" style={{ textDecoration: 'none', color: "#fff" }}>Science</Link></li>
                                <li className="nav-link active"><Link className="nav-item" to="/sports" style={{ textDecoration: 'none', color: "#fff" }}>Sports</Link></li>
                                <li className="nav-link active"><Link className="nav-item" to="/technology" style={{ textDecoration: 'none', color: "#fff" }}>Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

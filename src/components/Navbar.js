import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {


    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Daily Updates</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/home">Home</Link></li>
                                <li class="nav-link active nav-item"><Link class="nav-item" to="/business" style={{ textDecoration: 'none', color: "#fff" }}>Business</Link></li>
                                <li class="nav-link active"><Link class="nav-item" to="/entertainment" style={{ textDecoration: 'none', color: "#fff" }}>Entertainment</Link></li>
                                <li class="nav-link active"><Link class="nav-item" to="/health" style={{ textDecoration: 'none', color: "#fff" }}>Health</Link></li>
                                <li class="nav-link active"><Link class="nav-item" to="/science" style={{ textDecoration: 'none', color: "#fff" }}>Science</Link></li>
                                <li class="nav-link active"><Link class="nav-item" to="/sports" style={{ textDecoration: 'none', color: "#fff" }}>Sports</Link></li>
                                <li class="nav-link active"><Link class="nav-item" to="/technology" style={{ textDecoration: 'none', color: "#fff" }}>Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

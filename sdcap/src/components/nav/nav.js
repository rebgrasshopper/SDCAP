import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {
    const [path, setPath] = useState("");


    useEffect(() => {
        const pathID = window.location.pathname;
        setPath(pathID);
    }, [])


    return ( 


        <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Creative Arts International</a>
            </div>
            <ul class="nav navbar-nav">
                <li><Link id = "homeLink" className = { path === "/" ? "nav-link disabled active" : "nav-link" } to = { process.env.PUBLIC_URL + "/" } > Home </Link></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Programs
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><Link id = "communityDanceLink" className = { path === "/communityDance" ? "nav-link disabled active" : "nav-link" } to = { process.env.PUBLIC_URL + "/communityDance" } > SDCAP: Dance, Voice, Theater </Link></li>
                        <li><Link id = "artSmartLink" className = { path === "/artSmart" ? "nav-link disabled active" : "nav-link" } to = { process.env.PUBLIC_URL + "/artSmart" } > ArtSmart </Link></li>
                        <li><Link id = "mediaServicesLink" className = { path === "/mediaServices" ? "nav-link disabled active" : "nav-link" } to = { process.env.PUBLIC_URL + "/mediaServices" } > Media Services </Link></li>
                    </ul>
                </li>
                <li><Link id = "galleryLink" className = { path === "/gallery" ? "nav-link disabled active" : "nav-link" } to = { process.env.PUBLIC_URL + "/gallery" } > Gallery </Link> </li>
                <li><Link id = "classesLink" className = { path === "/classes" ? "nav-link disabled active" : "nav-link" } to = { process.env.PUBLIC_URL + "/classes" } > Classes </Link></li>
                <li><Link id = "contactLink" className = { path === "/contact" ? "nav-link disabled active" : "nav-link" } to = { process.env.PUBLIC_URL + "/contact" } > Contact </Link> </li>
            </ul>
        </div>
    </nav>
    
    )
}

export default Nav;

//disabled active
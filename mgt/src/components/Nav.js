import React from 'react'
import {Link} from 'react-router-dom';

function Nav(){
    return(
      <nav class="navbar navbar-default">
        <div class="container-fluid">
         
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">MoocExplorer</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown active">
                    <a href="#" class="dropdown-toggle " data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false">Courses <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link to="/providers">Provider</Link></li>
                        <li><Link to="/subjects">Subjects</Link></li>
                        <li><Link to="/institutions"> Institutions</Link></li>
                    </ul>
                </li>
                <li><Link to="/write-a-review">New Review</Link></li>
                <li><Link to="/login">Sign in</Link></li>
                <li><Link to="/register"> Register</Link></li>
                <li><Link to="/profile/"></Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="#"> logout</Link></li>
                </ul>
            </div>
          </div>
      </nav>
    );
}

export default Nav;
import * as React from "react";
import './App.scss';

function App() {
    return (
        <div className="app bg-image shadow-2-strong">
            <div className="mask reduced-alpha">
                <div className="container d-flex align-items-center justify-content-center text-center h-100">
                    <div className="text-white">
                        <img className="img-fluid shadow-2-strong rounded-circle mb-3"
                             src={require('./profile-pic.jpg')}
                             alt="profile picture"/>
                        <h1 className="mb-2">Timothy Tong</h1>
                        <h5 className="mb-2">Software Engineer &middot; Badminton Player</h5>
                        <a className="btn btn-outline-light btn-lg m-2" href="mailto:tktong@ucdavis.edu" role="button">
                            <i className="fas fa-envelope" />
                        </a>
                        <a className="btn btn-outline-light btn-lg m-2" href="https://www.linkedin.com/in/tktong/"
                           role="button">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="btn btn-outline-light btn-lg m-2" href="https://github.com/tktong" role="button">
                            <i className="fab fa-github" />
                        </a>
                        <a className="btn btn-outline-light btn-lg m-2"
                           href="https://stackoverflow.com/users/5818270/tim-tong?tab=profile" role="button">
                            <i className="fab fa-stack-overflow" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 export default App;

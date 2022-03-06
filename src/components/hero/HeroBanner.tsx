import * as React from "react";

import './HeroBanner.scss';
import {MDBBtn, MDBContainer, MDBIcon} from "mdb-react-ui-kit";

function HeroBanner() {
    return (
        <div className="hero-banner">
            <MDBContainer className='text-white text-center'>
                <img id="profile-picture"
                     className="img-fluid shadow-2-strong rounded-circle mb-3"
                     src={require('./profile-pic.jpg')} alt="profile"/>
                <h1><strong>Timothy Tong</strong></h1>
                <h4>Software Engineer</h4>
                <MDBBtn
                    outline={true}
                    rounded={true}
                    color='light'
                    size='sm'
                    className='m-2'
                    href='mailto:tktong@ucdavis.edu'>
                    <MDBIcon fas icon='envelope' />
                </MDBBtn>
                <MDBBtn
                    outline={true}
                    rounded={true}
                    color='light'
                    size='sm'
                    className='m-2'
                    href='https://www.linkedin.com/in/tktong/'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
                <MDBBtn
                    outline={true}
                    rounded={true}
                    color='light'
                    size='sm'
                    className='m-2'
                    href='https://github.com/tktong'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
                <MDBBtn
                    outline={true}
                    rounded={true}
                    color='light'
                    size='sm'
                    className='m-2'
                    href='https://stackoverflow.com/users/5818270/tim-tong?tab=profile'>
                    <MDBIcon fab icon='stack-overflow' />
                </MDBBtn>
          </MDBContainer>
      </div>
    );
}

export default HeroBanner;

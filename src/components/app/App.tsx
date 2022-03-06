import * as React from "react";
import './App.scss';
import NavBar from "../navbar/NavBar";
import HeroBanner from "../hero/HeroBanner";
import {MDBContainer} from "mdb-react-ui-kit";

function App() {
    return (
        <>
            <NavBar />
            <HeroBanner />
            <section className="pt-5 pb-5">
                <MDBContainer className="text-center">
                       <h1>Page is under construction.</h1>
                </MDBContainer>
            </section>
        </>
    );
}
 export default App;

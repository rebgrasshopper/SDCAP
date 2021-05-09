import './contact.css';

function Contact(){
    return (<div>
        <section id="heroSection">
            <figure id="hero"></figure>
        </section>

        <section id="mainText">
            <div id="container">
                <header>
                    <h1>Get In Touch:</h1>
                </header>

                <img id="ballerina" src="./assets/images/ballerina.png" alt="shillouette of ballet child" ></img>

                <article id="contactMethods">
                    <div class="contactDiv">
                        <p>On Social Media:</p>
                        <div class="buttonDiv">

                            <button id="FB"><a href="https://www.facebook.com/SDCreativeArtsProject/" target="_blank"
                                    rel="noreferrer"><img src="./assets/images/icons/facebook.png"
                                        alt="facebook icon" ></img></a></button>

                            <button id="insta"><a href="https://www.instagram.com/sdcreativearts/" target="_blank"
                                    rel="noreferrer"><img src="./assets/images/icons/instagram.png"
                                        alt="instagram icon" ></img></a></button>
                        </div>
                    </div>
                    <div class="contactDiv">
                        <p>By Email:</p>
                        <div id="emailButtonDiv" class="buttonDiv">
                            <button id="email"><a href="mailto:sdcreativearts@gmail.com"><img
                                        src="./assets/images/icons/email.png" alt="email icon" ></img></a></button>
                            <h4>sdcreativearts@gmail.com</h4>
                        </div>
                    </div>
                    <div class="contactDiv">
                        <p>By Phone or Mail:</p>
                        <br />
                        <h4>(619) 786-0523</h4>
                        <p>2041 El Cajon Boulevard, San Diego, CA 92104
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </div>);

}

export default Contact;
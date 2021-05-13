import './home.css';
import './homeScripts.js';
import togetherWeRise from '../../images/togetherWeRise.png';
import landingImage from '../../images/background/CAI-pexels-steve-johnson-background-masks-pikpng-music-macrovector-freepik.png';

function Home() {

    return (<div>
<section id="heroSection">
            <figure id="hero">
                <img src={landingImage} alt="tabletop filled with art supplies. Center is a sketchbook open to a page that says, 'Creative Arts International' with a pencil laying on top.">
                </img>
            </figure>
        </section>

        <section id="mainText">
            <div id="container">
                <header>
                </header>
                <article id="covidUpdate">
                    <h3 className="superHeadings">Coronavirus Update:</h3>
                    <p><span class="programName">Creative Arts International</span> and all of its programs are committed to protecting our community's health during the pandemic.</p>
                    <p>SDCAP is currently running all classes through Zoom, and we can't wait to see you all again in person as soon as San Diego County allows dance studios to open!</p>
                    <p>Please find your class in our <a href="classes.html">schedule</a>, and email us for the link:
                        <span><a href="mail-to:sdcreativearts@gmail.com">sdcreativearts@gmail.com</a></span>
                    </p>
                    <p>artSmart is eagerly looking forward to the safe return of in person school, so that we can learn
                        together again!</p>
                    <p>We will post here and on our Facebook, and Instagram when there are any new developments.</p>

                </article>
                <article id="about">
                    <h2>Programs</h2>
                    <div class="program">
                        <h3 className = 'homeH3'><a href="communityDance.html">San Diego Creative Arts Project</a></h3>
                            <p>Study with these amazing MASTER INSTRUCTORS!!!</p>
                            <p><strong>Laura Hodge</strong>: Contemporary, Musical Theatre, Ballet, Jazz, Tap, Acting
                            </p>
                            <p><strong>Tammy Milner</strong>: Voice, Music, Musical Theatre</p>
                    </div>
                    <div class="program">
                        <h3 className = 'homeH3'><a href="artSmart.html">artSmart</a></h3>
                        <h4></h4>
                        <p>artSmart pairs with local schools to provide both in class art lessons, and after school theater programs.</p>
                        <p>Our class offerings include dance, theater, music, visual arts, spoken word poetry, and yoga.</p>
                    </div>
                    <div class="program">
                        <h3 className = 'homeH3'><a href="mediaServices.html">Media Services</a></h3>
                        <h4></h4>
                        <p>Creative Arts International knows that participation in today's community requires a high level of computer literacy.</p>
                        <p>We are glad to offer tutoring in basic digital literacy: learn to navigate the web, create and edit documents and photos, and participate in a variety of social media platforms.</p>
                        <p>We also offer help navigating your business or organization's online precense.</p>
                    </div>



                    <br /><br />
                    <h2 id="missionTitle">Mission</h2>
                    <br /><br />
                    <h4 className = 'subHeadings'>Creative Arts International</h4>
                    <h4 className = 'subHeadings'>"Where Arts Emerge!"</h4>
                    <p>
                        CAI is invested in engaging, training, and inspiring students of all ages and backgrounds who desire to grow artistically and confidently in the performing arts. Our organization is committed to providing an ongoing presence in communities, granting access to the arts as well as the stability of consistent after-school activity for children, especially the underprivileged and those who might not otherwise be able to afford it. </p>
                </article>

                <hr />

                <article id="recentProject">
                    <img id="TWRimage" src={togetherWeRise}
                        alt="raised fists in brown, tan, beige, rainbow, red, white, and blue, with the words Together We Rise" />

                    <h2>Together We Rise</h2>
                    <h4 className="subHeadings">A project for Light Up The Cathedral, San Diego Pride, 2020</h4>
                    <iframe id="TWRvideo" src="https://player.vimeo.com/video/439063529" width="375" height="260"
                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                    <p><a href="https://vimeo.com/439063529">&quot;Together We RIse&quot;aka &quot;Raison D&#039;etre -
                            We Live to
                            Rise&quot;</a> from <a href="https://vimeo.com/user108961341">San Diego Creative Arts
                            Project</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                    </iframe>
                    <div id="togetherWeRiseBlurb">
                        <p>Produced for "Light Up the Cathedral" and San Diego Pride
                        </p>
                        <p>
                            In 2018, San Diego Creative Arts Project was proud to be asked to perform for "Light Up the
                            Cathedral" for SD Pride. This event is an interfaith event including leaders from around the
                            world of many different religious beliefs and was broadcast. The performance
                            created and directed by SDCAP Artistic Director, Laura Hodge, included Contemporary Dance to
                            the Cathedral's renowned live organ, Spoken Word, and a Vocal Performance by SDCAP and
                            students.
                        </p>
                        <p>
                            When asked to make a video for this year's event, with the prompts to include the theme,
                            dance, and children and youth, Laura Hodge decided this was an opportunity to do something
                            she has been wanting to do. Collaborate across the country with former
                            colleagues and long time friends.
                        </p>
                        <p>
                            This collaboration includes Laura, along with Tome Cousin - Pittsburgh, Pa, Mami Tomatani -
                            New York City, John Diaz, San Diego, CA, and Samuel "Quin" Blesoe - San Diego, CA. The
                            children are Laura's SDCAP students, and students of Mami at Hariyama Ballet,
                            NY.
                        </p>
                    </div>
                    <div id="togetherWeRiseCreditsBios">
                        <div id="togetherWeRiseCredits">
                            <h2><strong>CREDITS</strong></h2>

                            <h5>Produced by San Diego Creative Arts Project</h5>

                            <h5>for</h5>

                            <h5>Light Up The Cathedral - San Diego Pride 2020</h5>

                            <p><strong>
                                    Video Production and Editor - Samuel “Quin” Bledsoe
                                </strong></p>
                            <h4 className = 'subHeadings'><strong>The Creators</strong></h4>
                            <div>
                                <p>
                                    Mami Tomotani - New York City, NY
                                </p>
                                <p>
                                    Tome Cousin - Pittsburgh, PA
                                </p>
                                <p>
                                    Laura Hodge - San Diego, CA
                                </p>
                                <p>
                                    John Diaz - San Diego, CA
                                </p>
                                <p>
                                    Samuel “Quin” Blesoe - San Diego, CA
                                </p>
                                <p>
                                    Bubble Performance Artist - “Dead Alan” James - San Diego, CA
                                </p>
                            </div>

                            <h4 className = 'subHeadings'><strong>Youth - San Diego Creative Arts Project, CA</strong></h4>
                            <div class="creditsDiv">
                                <div class="col1">
                                    <p>
                                        Mila Kuz
                                    </p>
                                    <p>
                                        Taavi Melgarejo
                                    </p>
                                    <p>
                                        Genevieve Silva
                                    </p>
                                </div>
                                <div class="col2">
                                    <p>
                                        Avante Vadlamudi
                                    </p>
                                    <p>
                                        Tabitha Silva
                                    </p>
                                    <p>
                                        Elijah Silva
                                    </p>
                                </div>

                            </div>
                            <p id="bottom">
                                Unicorn - Isabel Hodge
                            </p>
                            <h4 className = 'subHeadings'><strong>Youth & Teens - Hariyama Ballet NY, NY</strong></h4>
                            <div class="creditsDiv">
                                <div class="col1">
                                    <p>
                                        June Morishige
                                    </p>
                                    <p>
                                        Léa-Miyu Foulloy
                                    </p>
                                </div>
                                <div class="col2">
                                    <p>
                                        Kanae Funabiki
                                    </p>
                                    <p>
                                        Lyn Russell
                                    </p>
                                </div>


                            </div>
                            <p id="bottom">
                                Haruki Fukase
                            </p>
                        </div>

                        <div id="togetherWeRiseBios">
                            <h2><strong>BIOS</strong></h2>

                            <h4 className = 'subHeadings'><strong>LAURA HODGE</strong></h4>

                            <p>Executive Artistic Director of San Diego Creative Arts Project, Laura is a Dance and
                                Theatre Master Educator, Choreographer, Director, and Performing Artist, whose work is
                                respected from Coast to Coast, and Mexico. Laura is
                                originally from Pittsburgh, Pa, where she danced in Tome Cousin’s "Physical Theatre
                                Project".
                            </p>

                            <p>She has performed in numerous Musical Theatre productions, Dance companies, Touring
                                Companies, Film, and Television, is a Union Member of SAG-Screen Actors Guild, and does
                                Voice Over work.</p>

                            <p>Instagram: <a href="https://www.instagram.com/thereallaurette/?hl=en" target="_blank"
                                    rel="noreferrer">@thereallaurette</a> and <a
                                    href="https://www.instagram.com/sdcreativearts/?hl=en" target="_blank"
                                    rel="noreferrer">@sdcreativearts</a></p>


                            <h4 className = 'subHeadings'><strong>TOME' COUSIN</strong></h4>

                            <p>Tome’ Cousin: Is a cross-art-form practitioner. While maintaining a prolific performance
                                career he has molded an International award winning reputation that includes
                                collaborations in theater, dance, music, film, photography,
                                television and literature in the creation of over 90 original works.</p>

                            <p>Tome' is Associate Professor of Dance at Carnegie Mellon University.</p>



                            <h4 className = 'subHeadings'><strong>MAMI TOMOTANI</strong></h4>

                            <p>Mami Tomotani choreographed many shows at Fiorello H.LaGuardia High School, Pittsburgh
                                University and Contemporary dance pieces at Hariyama Ballet in NY. She performed many
                                shows, include Matthew Bourne’s New Adventures in
                                UK,USA and world tour, Musicals at Shiki in Tokyo and Contemporary at Ballet Linz in
                                Austria. Mami is assistant director of The Broadway Experience.</p>

                            <p>Instagram: <a href="https://www.instagram.com/happymamitomotani3/" target="_blank"
                                    rel="noreferrer"> @happymamitomotani3</a></p>



                            <h4 className = 'subHeadings'><strong>JOHN DIAZ</strong></h4>

                            <p>San Diego based John Diaz has worked nationally and abroad in Europe and South America as
                                a professional movement artist, choreographer, collaborator and educator. His encounters
                                with differing cultural models of body attitudes,
                                awareness, alignment, and the process of navigating in the world have led to
                                understanding functions of inner imagery, it's effects on the body, and the body's place
                                in the world. John’s hope is to facilitate the stability,
                                adaptability, radiance, grace, and directness inherent in everyone through movement
                                education and dance performance.</p>

                            <p>Instagram: <a href="https://www.instagram.com/johndiaz3/" target="_blank"
                                    rel="noreferrer">@veganheartdance</a></p>



                            <h4 className = 'subHeadings'><strong>SAM "QUIN" BLEDSOE</strong></h4>

                            <p>Sam is a Dancer, a Drag Performer, and hospitality specialist.</p>

                            <p>In 2014 Samuel studied dance at Grossmont College and learned Choreography and
                                Composition, around this time he also began learning the art of Drag. Now he performs at
                                local venues in San Diego as a dancer and Dragqueen. Currently
                                he creates online performance videos with Terratour Dance, and works at Urban Mo's as a
                                Host and Drag Queen.</p>

                            <p>Instagram: <a href="https://www.instagram.com/royalharlequin/" target="_blank"
                                    rel="noreferrer">@royalharlequin</a></p>
                        </div>
                    </div>
                </article>

                <hr />
            </div>
        </section>
    </div>)
}

export default Home;
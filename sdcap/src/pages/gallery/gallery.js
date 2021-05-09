import './gallery.css';
import './galleryScripts.js';

function Gallery(){
    return (
        <div>
            <section id="heroSection">
                <figure id="hero"></figure>
            </section>

        <section id="mainText">
            <div id="container">
                <header>
                    <h1>Gallery:</h1>
                </header>
                <br></br>
                <h3 id='sublinks'>
                    <a href="#photos">Photos</a>
                    <span></span>
                    <a href="#videos">Videos</a>
                    <span></span>
                    <a href="#posters">Posters</a>
                </h3>
                <div id="galleryDiv">
                    <h2>Images</h2>
                    <article id="photos">
                        <img src="./assets/images/carosel/2018-04-17_00_19_04_2018-04-17_00_18_54_contemp_4_32216-qqy.jpg" alt="Modern Dance" ></img>
                        <img src="./assets/images/carosel/2018-04-23_02_23_06_2018-04-23_02_23_03_backstage_pink_hug-ajd.jpg" alt="Backstage Hug" ></img>
                        <img src="./assets/images/carosel/aladdin_lean.jpg" alt="Practicing for the show!" ></img>
                        <img src="./assets/images/carosel/bow.jpg" alt="Take a bow!" ></img>
                        <img src="./assets/images/carosel/costume_try_on.jpg" alt="Trying on costumes!" ></img>
                        <img src="./assets/images/carosel/izze_teen_contemporary_17.jpg" alt="Contemporary Dance" ></img>
                        <img src="./assets/images/carosel/kids-zoom-class-mila-and-anjanay.jpg" alt="Zoom class!" ></img>
                        <img src="./assets/images/carosel/kids_1__2_barre_19.jpg" alt="Kids at barre." ></img>
                        <img src="./assets/images/carosel/lucy_5th.jpg" alt="5th Positon" ></img>
                        <img src="./assets/images/carosel/mila_super.jpg" alt="Superman!" ></img>
                        <img src="./assets/images/carosel/pre_2019_show_floor.jpg" alt="Pre-Dance show time!" ></img>
                        <img src="./assets/images/carosel/pre_dance_floor.jpg" alt="Pre-Dance Floor" ></img>
                        <img src="./assets/images/carosel/sequoia_alice_wave.jpg" alt="encore!" ></img>
                        <img src="./assets/images/carosel/students-floor-pose-studio.jpg" alt="Pose!" ></img>
                        <img src="./assets/images/carosel/BabesWashington.jpeg" alt="Babes In Toyland" ></img>
                        <img src="./assets/images/carosel/Cen Cast  with unicorn.jpg" alt="Cenicienta Cast" ></img>
                        <img src="./assets/images/carosel/Cen Outdoor stage.jpg" alt="Cenicienta on the outdoor stage!" ></img>
                        <img src="./assets/images/carosel/GodspellJordan.jpeg" alt="Godspell" ></img>
                        <img src="./assets/images/carosel/PeterpanCassidy.jpeg" alt="Peter Pan Rebooted" ></img>
                        <img src="./assets/images/carosel/PeterPanIzzeConner.jpeg" alt="Captain Hook Strikes!" ></img>
                        <img src="./assets/images/carosel/SDCAPAdultCo.jpeg" alt="SDCAP Adult Company" ></img>
                        <img src="./assets/images/carosel/SDCAPFLYER!.jpeg" alt="SDCAP!" ></img>
                        <img src="./assets/images/carosel/fame.JPG" alt="Fame" ></img>
                        <img src="./assets/images/carosel/pre-dance.JPG" alt="Young Dancers" ></img>
                    </article>

                    {/* <!-- The Modal --> */}
                    <div id="myModal" class="modal">

                        {/* <!-- Modal content --> */}
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <p id="modal-text"></p>
                        </div>

                    </div>
                    <article id="videos">
                        <h2>Videos</h2>
                        <br></br>
                        <div class="videoWrapper">
                            <iframe width="560" height="349" src="https://drive.google.com/file/d/1yBlfy6aJHJ5RkXQZfYmS7oAgLafkf8tj/preview"></iframe>width="560" height="349"
                        </div>
                        <p>ABC</p>
                        <div class="videoWrapper">
                            <iframe width="560" height="349" src="https://www.youtube.com/embed/xTiuIrT4rjk" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>width="560" height="349"
                        </div>
                        <p>Make it Magical Take Care of You</p>
                        <div class="videoWrapper">
                            <iframe width="560" height="349" src="https://drive.google.com/file/d/1FTMLQdf5gDtlJ0xY81n14SZMP3Kv9PnR/preview"></iframe>width="560" height="349"
                        </div>
                        <p>Annie Rehearsal</p>
                        <div class="videoWrapper">
                            <iframe width="560" height="349" src="https://drive.google.com/file/d/15gwArrI3XI1yxmEbIU55FIkI6kpGKRzL/preview"></iframe>width="560" height="349"
                        </div>
                        <p>Cenicienta on the news!</p>
                        <div class="videoWrapper">
                            <iframe width="560" height="349" src="https://drive.google.com/file/d/1S725x9W4ipIhhTdPCxrfc1nJMfQPqEjx/preview"></iframe>width="560" height="349"
                        </div>
                        <p>Tightrope, choreography by Laura Hodge</p>
                        <div class="videoWrapper">
                            <iframe width="560" height="349" src="https://www.youtube.com/embed/I5w2ptsueJk" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>width="560" height="349"
                        </div>
                        <p>Charleston</p>
                        <div class="videoWrapper">
                            <iframe width="560" height="349" src="https://www.youtube.com/embed/c_bJcftZOWk" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>width="560" height="349"
                        </div>
                        <p>Peter Pan Rebooted Clip</p>
                        <div class="videoWrapper">
                            <iframe width="560" height="349" src="https://www.youtube.com/embed/McBtlE5yjBg" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>width="560" height="349"
                        </div>
                        <p>Tango, Salsa, Hustle</p>
                    </article>
                    <article id="posters">
                        <h2>Posters</h2>
                        <div class="card">
                            <img src="./assets/images/shows/posters/CENICIENTA TABLOIDE.jpg" alt="poster for Cenicienta" class="poster"></img>
                            <div class="nonImages">
                                <h4 class='title liner'>Cenicienta</h4>
                                    <div class="text">
                                        A modern take on Cinderella, by:
                                        <br></br> Centro Estatal de las Artes Playas de Rosarito San Diego Creative Arts Project
                                        <br></br>
                                        <br></br> Written Laura Hodge, translated into Spanish by Jazmin Mendoza
                                        <br></br>
                                        <br></br> These scripts are available for cast of 12+, sliding scale performance fee.
                                    </div>
                                    <div class="morePics">

                                    </div>
                            </div>
                        </div>
                        {/* <!--end card--> */}




                        <div class="card">
                            <img src="./assets/images/shows/posters/Aliceposter.jpeg" alt="poster for Alice Rebooted" class="poster"></img>
                            <div class="nonImages">
                                <h4 class='title liner'>Alice: Rebooted</h4>
                                    <div class="text">
                                        A modern take on Alice in Wonderland, by:
                                        <br></br> San Diego Creative Arts Project
                                        <br></br>
                                        <br></br> Written by Laura Hodge
                                        <br></br>
                                        <br></br> These scripts are available for cast of 12+, sliding scale performance fee.
                                    </div>
                                    <div class="morePics">

                                    </div>
                            </div>
                        </div>
                        {/* <!--end card--> */}


                        <div class='card'>
                            <img src='./assets/images/shows/posters/peterPanRebootedPoster.png' alt='poster for Peter Pan Rebooted' class='poster'></img>
                            <div class='nonImages'>
                                <h4 class='title liner'>Peter Pan: Rebooted</h4>
                                    <div class='text'>
                                        A modern take on Peter Pan, by:
                                        <br></br> San Diego Creative Arts Project
                                        <br></br>
                                        <br></br> Written by Laura Hodge
                                        <br></br>
                                        <br></br> These scripts are available for cast of 12+, sliding scale performance fee.
                                    </div>
                                    <div class='morePics'>
                                    </div>
                            </div>
                        </div>


                        {/* <!--end card--> */}
                        <div class="card">
                            <img src="./assets/images/shows/posters/AladdinPoster.jpg" alt="poster for Aladdin Rebooted" class="poster"></img>
                            <div class="nonImages">
                                <h4 class='title liner'>Aladdin Rebooted</h4>
                                    <div class="text">
                                        A modern take on Aladdin, by:
                                        <br></br> San Diego Creative Arts Project
                                        <br></br>
                                        <br></br> Written Laura Hodge
                                        <br></br>
                                        <br></br> These scripts are available for cast of 12+, sliding scale performance fee.
                                    </div>
                                    <div class="morePics">

                                    </div>
                            </div>
                        </div>
                        {/* <!--end card--> */}

                        <div class='card'>
                            <img src='./assets/images/shows/posters/aChristmasCarol.png' alt='poster for A Christmas Carol in Old San Diego' class='poster'></img>
                            <div class='nonImages'>
                                <h4 class='title liner'>A Christmas Carol <br></br>in Old San Diego</h4>
                                    <div class='text'>
                                        A local story of a Christmas Carol, by:
                                        <br></br> San Diego Creative Arts Project
                                        <br></br>
                                        <br></br> Written by Laura Hodge
                                        <br></br>
                                        <br></br> These scripts are available for cast of 12+, sliding scale performance fee.
                                    </div>
                            </div>
                            <div class='morePics'>
                            </div>
                        </div>

                        {/* <!--end card--> */}



                        <div class="card">
                            <img src="./assets/images/shows/posters/Godspell-Flyer-600.jpg" alt="poster for Godspell" class="poster"></img>
                            <div class="nonImages">
                                <h4 class='title liner'>Godspell</h4>
                                    <div class="text">
                                        A steampunk take on Godspell, performed in the round by:
                                        <br></br> San Diego Creative Arts Project
                                        <br></br>
                                    </div>
                                    <div class="morePics">

                                    </div>
                            </div>
                        </div>
                        {/* <!--end card--> */}


                        <div class="card">
                            <img src="./assets/images/shows/posters/OZ.jpg" alt="poster for The Wizard of Oz" class="poster"></img>
                            <div class="nonImages">
                                <h4 class='title liner'>The Wizard of Oz</h4>
                                    <div class="text">
                                        Produced by San Diego Creative Arts Project, and performed at Our Lady of Peace.
                                    </div>
                                    <div class="morePics">

                                    </div>
                            </div>
                        </div>



                        <div class='card'>
                            <img src='./assets/images/shows/posters/JBKIDS.jpeg' alt='poster for The Jungle Book' class='poster'></img>
                            <div class='nonImages'>
                                <h4 class='title liner'>The Jungle Book</h4>
                                    <div class='text'>
                                        Produced by San Diego Creative Arts Project, and performed at Our Lady of Peace.
                                    </div>
                                    <div class='morePics'>
                                    </div>
                            </div>
                        </div>
                        {/* <!--end card--> */}

                        <div class='card'>
                            <img src='./assets/images/shows/posters/Fame.jpeg' alt='poster for Fame' class='poster'></img>
                            <div class='nonImages'>
                                <h4 class='title liner'>Fame</h4>
                                    <div class='text'>
                                        Produced by San Diego Creative Arts Project, and performed at Our Lady of Peace.

                                    </div>
                                    <div class='morePics'>
                                    </div>
                            </div>
                        </div>
                        {/* <!--end card--> */}


                        <div class="card">
                            <img src="./assets/images/shows/posters/B&Bposter.jpeg" alt="poster for beauty and the beast jr." class="poster"></img>
                            <div class="nonImages">
                                <h4 class='title liner'>Beauty And The Beast Jr.</h4>
                                    <div class="text">
                                        A really fun and popular Disney show, put on by San Diego Creative Arts Project at Roosevelt MS Theather in Balboa Park.
                                    </div>
                                    <div class="morePics">

                                    </div>
                            </div>
                        </div>
                        {/* <!--end card--> */}
                    </article>
                </div>
                {/* <!--galleryDiv--> */}
            </div>
            {/* <!--container--> */}
        </section>
        </div>
    );
}

export default Gallery;
import './artSmart.css';
import './artSmartScripts.js';
import {useEffect, useState} from "react";
import Jump from '../../images/artSmart/jump.jpeg';
import StudentArt from '../../images/artSmart/pexels-pragyan-bezbaruah-1720186.jpg';
import Info from '../../images/artSmart/The  SDCAP Arts Smart Program.pdf';

function ArtSmart(){

    const [open, setOpen] = useState({
        funDance: 'classTitle desc open',
        hipHop: 'classTitle desc closed',
        socialDance: 'classTitle desc closed',
        theater: 'classTitle desc closed',
        spokenWord: 'classTitle desc closed',
        voiceMusic: 'classTitle desc closed',
        visualArt: 'classTitle desc closed',
        yoga: 'classTitle desc closed',
        artsIntegration: 'classTitle desc closed',
        musicalTheater: 'classTitle desc closed'
    })

    function expander(event) {
        console.log(open)
        
        if (event.target.className.split(" ")[0] === 'classTitle') {
            console.log(event.target.id)
            let newOpen = open;
            
            console.log(open[event.target.id])
            if (open[event.target.id] === 'classTitle desc closed') {
                console.log('it was closed!')
                newOpen[event.target.id] = 'classTitle desc open';
                console.log(newOpen)
            } else {
                console.log('it was open!')
                newOpen[event.target.id] = 'classTitle desc closed';
                console.log(newOpen)

            }

            setOpen(newOpen);

        }

        // if (event.target.classList.contains("classTitle")) {
        //     const descriptionDiv = event.target.parentNode.childNodes[3];
        //     const carat = event.target.childNodes[1]
        //     if (descriptionDiv.classList.contains("closed")) {
        //         descriptionDiv.classList.remove("closed")
        //         carat.innerHTML = "▴"
        //     } else {
        //         descriptionDiv.classList.add("closed")
        //         carat.innerHTML = "▾"
        //     }
    
        // }
    
    }
    
    useEffect(()=>{
        console.log("Photo of students doing art by Pragyan Bezbaruah, from pexels.com")
    })




    return (
        <div>
            <section id="heroSection">
                <figure id="hero"></figure>
            </section>

            <section id="mainText">
                <div id="container">
                    <header>
                        <h1>ArtSmart</h1>
                        <h2>Visual and Performing Arts in Schools</h2>
                        <h3>Offered in partnership with SDCAP: San Diego Creative Arts Project</h3>
                        <img id="jumpingKids" src={Jump} alt="kids in the studio jumping"></img>
                        <div id="about">
                            <p>Arts and culture enhance all lives. Recent studies have shown that students involved in the arts are more likely to be recognized for academic achievement.</p>
                            <p>Low-income students who are highly engaged in the arts are twice as likely to graduate college as their peers with no arts education.</p>
                            <p>The arts are recognized as a core academic subject under the federal Elementary and Secondary Education Act, and 49 states have adopted standards for learning in the arts.</p>
                            <p>The act of performing can help students and youth recognize their potential for success and improve their confidence. Students who participate in arts learning experiences -often improve their achievement in other realms of learning
                                and life. All students benefit from the opportunity to learn about and experience the arts. Study of the arts — whether as a stand-alone subject or integrated into the school curriculum — is an essential part of achieving success
                                in school, work and life.</p>
                            <img src={StudentArt} alt="two students at a table doing art with pastels and pencils"></img>
                            <h1 id="coursesH1">Available courses</h1>

                            <div className="courses">
                                <h3 id='funDance' className ={open.funDance} onClick={expander}>Fun Dance - Basic <span className="carat">▾</span></h3>
                                <p>
                                    This Dance class includes the techniques of Jazz, Hip Hop, Contemporary, and Musical Theatre basic moves. Students learn how to count and dance rhythms, travel across the floor, form patterns, and shapes with their bodies, and as a group, while getting
                                    fit, motivated, and having fun with their peers.
                                </p>
                            </div>

                            <div className ='courses'>
                                <h3 id='hipHop' className ={open.hipHop} onClick={expander}>Hip Hop <span className ="carat">▾</span></h3>
                                <p>
                                    This class will introduce students to the history of Hip-Hop culture with basic moves. The style encompasses the movements of break-dancing and body- popping with a concentration on footwork. The focus of this class is to build a solid foundation to execute
                                    popular dance moves to original choreography. Warm up includes isolations, hard- hitting exercises, and a breakdown of the highly energetic routine to build stamina and increase musicality.

                                </p>
                            </div>

                            <div className ='courses'>
                                <h3 id='socialDance' className ={open.socialDance} onClick={expander}>Social Dance <span className ="carat">▾</span></h3>
                                <p>
                                    Did you know that social dancing improves physical coordination, strengthens muscles, improves posture and flexibility, and creates social connections? Students learn respect and tradition in a positive, non-judgmental and courteous manner. To each other,
                                    students say please and thank you, curtsy and bow, and walk arm and arm in escort position into and from the class. As students often change dance partners, their ability to relate to one another and to respect their differences
                                    is strengthened.
                                </p>
                            </div>

                            <div className ='courses'>
                                <h3 id='theater' className ={open.theater} onClick={expander}>Theater <span className ="carat">▾</span></h3>
                                <p>
                                    Participation in a drama class, has been proven as a source for gains in reading proficiency, improvement in self-concept and motivation, and higher levels of empathy and tolerance towards others among youth of all levels of socio-economic status. Drama
                                    activities help to maintain social and language skills. Improvisational drama and games help students to open up and express themselves with their peers, and challenge them to quickly and creatively come up with solutions
                                    to the moment. The skills developed through theater, not only train you how to convincingly deliver a message, but also build the confidence you need to take command of the stage.

                                </p>
                            </div>

                            <div className ='courses'>
                                <h3 id='spokenWord' className ={open.spokenWord} onClick={expander}>Spoken Word Poetry <span className ="carat">▾</span></h3>
                                <p>
                                    Creating spoken-word is more than just memorizing or understanding. It’s asking youth to think critically. It helps improve students as readers and writers, their critical thinking and analysis, their self-confidence, and their literacy skills. Teaching
                                    poetry is like pouring content into the students. Spoken-word allows kids to get problems down on a page, to share them verbally, and to get rid of that background noise from technology, and everyday life. Students will
                                    write from life experience - speaking from the heart. They will form a poem and then share it with their peers. This strengthens the bond of the class as team and community.

                                </p>
                            </div>

                            <div className ='courses'>
                                <h3 id='voiceMusic' className ={open.voiceMusic} onClick={expander}>Voice & Music Theory <span className ="carat">▾</span></h3>
                                <p>
                                    Students will sing and learn music together, where the emphasis is on participation. The climate of the classroom and attitudes shift dramatically. Students find they are not only participating in singing but they are actually enjoying it. As students
                                    begin to read music, the addition of music theory helps students understand what and why they are singing, and appreciate the musicality and how the notes create music.
                                </p>
                            </div>

                            <div className ='courses'>
                                <h3 id='visualArt' className ={open.visualArt} onClick={expander}>Visual Art <span className ="carat">▾</span></h3>
                                <p>
                                    Visual arts educators develop visual–spatial abilities, reflection, and experimentation. Visual arts education ensures that all young people become knowledgeable and skillful in the visual age. In addition to developing students’ intellectual capabilities,
                                    visual arts instruction also helps develop young people’s sense of civic engagement. The arts stimulate or release imagination by bringing into existence an alternative reality. Students will be engaged in discussion about
                                    the elements of art, such as content, composition, style, method and materials, with a focus on their life and sense of community.

                                </p>
                            </div>

                            <div className ='courses'>
                                <h3 id='yoga' className ={open.yoga} onClick={expander}>Yoga <span className ="carat">▾</span></h3>
                                <p>
                                    Yoga and mindfulness have been shown to improve both physical and mental health in school-age children. Yoga improves balance, strength, endurance, and aerobic capacity in children. Yoga and mindfulness offer psychological benefits for children as well.
                                    Research has shown that yoga can improve focus, memory, self-esteem, academic performance, and classroom behavior, and can even reduce anxiety and stress in children. In these yoga classes, fun games and stories will be
                                    woven with positive themes like compassion, gratitude, and strength.

                                </p>
                            </div>

                            <div className ='courses'>
                                <h3 id='artsIntegration' className ={open.artsIntegration} onClick={expander}>Arts Integration Courses <span className ="carat">▾</span></h3>
                                <div>
                                    <h3>4th Grade Social Studies, Literature, and Theater</h3>
                                    <h3>The Pine Nut Thieves</h3>
                                    <p>Students studying the Southern California Tribes, will learn about local Indigenous tribes’ culture of respect for the Earth, while crafting costumes from recyclable materials, and creating a movement theatre piece set
                                        loosely to the book, The Pine Nut Thieves, a Kumeyaay tale retold by Janie Louise Curry.
                                    </p>
                                    <p>This project was a huge success at Garfield Elementary School.
                                    </p>
                                    <p>This concept and more classes such as Poetry or Literature in Motion, exploring science, math, geography and world cultures through any of the performing and visual arts, are created specifically for teachers, schools,
                                        and classrooms</p>
                                </div>
                            </div>

                            <div className ='courses'>
                                <h3 id='musicalTheater' className ={open.musicalTheater} onClick={expander}>Musical Theatre Play Production <span className ="carat">▾</span></h3>
                                <div>
                                    <p>Casting open to large groups</p>
                                    <p>Grades K-6: Mini Production</p>
                                    <p>Grades 5-12: Full Production</p>
                                    <p>This course meets for 2 hour periods twice a week for 4 months (16 weeks) with a Theatre & Dance Director/Choreographer, and a Voice & Music Director.</p>
                                    <p>Included in this package is the rental for production of a choice of scripts written for and the rights owned by San Diego Creative Arts Project. Written by Executive Artistic Director, Laura Hodge, these scripts are “Rebooted”
                                        versions of classic tales, set with modern, artistic, settings, and pop-rock music from the 80’s, 90’s, and current. For instance, the setting of Cinderella’s household uses scenery in the style of German expressionism,
                                        and then the Ball where she meets the prince turns into a scene resembling a Bollywood musical.
                                    </p>
                                    <p>These dynamic new scripts have been produced and performed by SDCAP at theatres throughout San Diego, Tijuana, and Rosarito in Baja California. The productions are immersed in the arts on every level, including, performing
                                        and visual arts. This fee includes rehearsal, script rental, and a performance production.
                                    </p>
                                </div>
                            </div>

                            <p><a href="contact.html">Contact us</a> for more information</p>
                            <p><a href={Info}>further artSmart information</a></p>
                        </div>
                    </header>

                </div>
            </section>
        </div>
    );
}

export default ArtSmart;
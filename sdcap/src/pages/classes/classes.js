import './classes.css';
import RainbowKids from '../../images/rainbowkids.png';
import JumpingKids from '../../images/jumping_kids_color_image.jpg';
import Ballerina from '../../images/cyanBallerina.png';
import RedDancer from '../../images/redDancer.png';
import OrangeJump from '../../images/orangeJump.png';
import PinkJump from '../../images/pinkJump.png';
import GreenJump from '../../images/greenJump.png';


function Classes(){
    return (
<section id="mainText">
            <div id="container">
                <header id="classesHeader">
                    <h1>Classes:</h1>
                </header>

                <img id="rainbowKids" src={RainbowKids} alt="blue Shillouette of kid in ballet pose" />

                <p>San Diego Creative Arts Project (SDCAP) offers the following schedule:
                    <br />for artSmart courses, <a href="contact.html">contact us</a> directly or ask your local school.
                </p>
                <div id="scheduleTuition">
                    <article id="schedule">
                        <h2>Current Schedule:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Time</th>
                                    <th>Class</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="day">Monday</td>
                                    <td>9:00-10:00</td>
                                    <td><a href="#pilatesMat">Pilates Mat</a></td>
                                </tr>
                                <tr>
                                    <td className="prior"></td>
                                    <td>2:00-4:00</td>
                                    <td>Middle School Musical Video Production</td>
                                </tr>
                                <tr>
                                    <td className="day">Tuesday</td>
                                    <td>2:00-2:45</td>
                                    <td><a href="#funDance">Fun!!! Dance (TK-2)</a></td>
                                </tr>
                                <tr>

                                    <td className="empty"></td>
                                    <td>2:00-2:45</td>
                                    <td>Voice & Singing 1 (grades 2-5)</td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>3:00-4:00</td>
                                    <td><a href="#ballet">Adult/Teen Ballet</a></td>
                                </tr>
                                <tr>
                                    <td className="prior"></td>
                                    <td>4:30-6:00</td>
                                    <td><a href="#musicalTheater6-12">Musical Theatre Production Youth (grades 6-12)</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="day">Wednesday</td>
                                    <td>9:00-10:00</td>
                                    <td><a href="#pilatesMat">Pilates Mat</a></td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>1:00-2:00</td>
                                    <td>Music & Piano 2 (grades 6-12)</td>
                                </tr>
                                <tr>
                                    <td className="prior"></td>
                                    <td>2:00-4:00</td>
                                    <td>Middle School Musical Video Production</td>
                                </tr>
                                <tr>
                                    <td className="day">Thursday</td>
                                    <td>10:30-11:15</td>
                                    <td><a href="#preDance">Pre Dance (TK/pre school)</a></td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>2:00-2:45</td>
                                    <td>Music & Piano 1 (grades 2-5)</td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>2:00-2:45</td>
                                    <td><a href="#actingUpK-2">Acting Up 1 (grades K-2)</a></td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>3:00-4:00</td>
                                    <td><a href="#kids2Ballet">Kids 2 Ballet & Tap (grades 2-5)</a></td>
                                </tr>
                                <tr>
                                    <td className="prior"></td>
                                    <td>4:30-6:00</td>
                                    <td><a href="#musicalTheater6-12">Musical Theatre Production Youth (grades 6-12)</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="day">Friday</td>
                                    <td>9:00-10:00</td>
                                    <td><a href="#pilatesMat">Pilates Mat</a></td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>1:00-2:00</td>
                                    <td>Voice and Singing 2 (grades 6-12)</td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>2:00-3:00</td>
                                    <td><a href="#musicalTheater1-5">Musical Theatre Production Kids (grades 1-5)</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>3:00-4:00</td>
                                    <td><a href="#kids3TapJazz">Jazz & Tap 3 (grades 6-12)</a></td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>4:30-5:30</td>
                                    <td><a href="#contemporaryDance">Contemporary Dance (grades 6-12)</a></td>
                                </tr>
                                <tr>
                                    <td className="prior"></td>
                                    <td>5:30-6:30</td>
                                    <td><a href="#ballet">Adult/Teen Ballet</a></td>
                                </tr>
                                <tr>
                                    <td className="day">Saturday</td>
                                    <td>9:00-9:45</td>
                                    <td><a href="#preDance">Pre Dance (TK/pre school)</a></td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>10:00-10:30</td>
                                    <td><a href="#tumbling">Tumbling *(Adult should be present)</a></td>
                                </tr>
                                <tr>
                                    <td className="empty"></td>
                                    <td>10:30-11:15</td>
                                    <td><a href="#kids1Dance">Kids 1 Dance - Ballet & Tap (grades K-2)</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <p><span id="asterix">*</span> Tumbling: Adult to be present and able to help with exercises and tricks. Soft surface -Mat or Carpet.</p>
                    </article>

                    <article id="tuition">
                        <h2>Tuition</h2>
                        <h3 className="superHeadings">2021 Annual Registration Fee $25 - WAIVED</h3>
                        <p>
                            *Classes are Complete Courses and are scheduled for 10 months/school year. Students learn best when they are on time and prepared for class. Students who are invested and committed to consistent attendance and course/level completion progress and move
                            up to the next level upon discretion of director.
                        </p>
                        <p>
                            Registration for classes is a commitment for this entire period. (There are ongoing classes and camps through the summer)
                        </p>
                        <p>
                            TUITION is DUE: on the first calendar day of each month (not first class) $10 surcharge for payments received after the 3rd Calendar day of month.
                        </p>
                        <p>
                            Pay by:<br></br> PayPal: sdcreativearts@gmail.com<br></br> VENMO: SDCAP Laura Hodge
                        </p>
                        <p>
                            DROP IN: $15 per Class<br /> Tuition Rates - Monthly Long or short<br /> 45 Minutes & 1 Hour Classes<br /> $60. Month/ 1 class/hour per week<br /> $110. Month/ 2 classes/hours per week<br /> $155. Month/ 3 classes/hours per
                            week
                            <br /> $175. Month/4 classes/hours per week<br /> $30. Month/1 Half hour class per week(Tumbling - taken with another class)

                        </p>
                        <p>
                            <h4 className="subHeadings">MUSICAL THEATRE PRODUCTION CLASS</h4>
                            $350. per Semester meets twice a week<br /> April 5 - June 11, 2021<br /> September 13 - December 3, 2021<br /> January 3 - March 11, 2022<br /><br /> *10% Discounts for payments of 3 months or more paid in advance.<br /> *15%
                            Discount year paid in full.<br />

                        </p>
                        <p>
                            <h4 className="subHeadings">Private Coaching & Choreography:<br /> ACTING, DANCE, PUBLIC SPEAKING, AUDITION PREP & PERSONAL FITNESS</h4>

                            $60. per hour


                        </p>
                        <p>
                            <h4 className="subHeadings">Performance and Events</h4>

                            All Classes will the opportunity to perform and share what they have learned in December and June on Zoom, in videos and in person when permitted.</p>
                    </article>
                </div>
                {/* <!--end scheduleTuition--> */}
                <article id="camps">
                    <figure>
                        <img src={JumpingKids} alt="Shillouettes of kids jumping in rainbow colors" />
                    </figure>
                    <header>
                        <h1>Camps:</h1><br />
                        <h4 className="subHeadings">Camps are currently via Zoom. Camps will be in person when SD Country Guidlines permit. Stay tuned.<br /> Stay Safe San Diego!</h4>
                        <br />
                        <div id="campTuition">
                            <h4 className="subHeadings">CAMPS for Youth Ages 4-17</h4>

                            <p>Musical Theatre, Dance, Acting, Singing</p>

                            <h4 className="subHeadings"><strong>ALL CAMPS</strong> are <strong>10:00am - 1:00pm</strong>, tuition $100.</h4>
                            <p>Full day camps, from 9am - 3pm, will be available given enough interest.</p>
                            <p>$25 registration fee (applied to total). Balance due the Friday before first Camp Day.
                            </p>

                            <p>Email us for Registration and Camp Link: sdcreativearts@gmail.com</p>

                            <p>Payments: Paypal: sdcreativearts@gmail.com Venmo: SDCAP Laura Hodge</p>
                        </div>
                        <div id="campInfo">

                            <h2>CAMPS CALENDAR 2021</h2>
                            <p>
                                New Camps will be added on demand. Ages are flexible upon consideration.
                            </p>

                            <h3 className="superHeadings">JUNE</h3>

                            <p><span className="campDateRange">JUNE 14 - 18:</span> <a href="#fun">FUN!</a> Dance, Act & Sing ~ ages 4-8</p>
                            <p><span className="campDateRange">JUNE 21 - 25:</span> <a href="#broadwayBound">BROADWAY
                                    BOUND!</a> ﻿~ ages 7-17</p>
                            <h3 className="superHeadings">JULY</h3>


                            <p><span className="campDateRange">JULY 5-9:</span> <a href="#lightsCameraAction">CAMERA
                                    READY!</a> #1 ~ ages 7-17 ﻿</p>

                            <p><span className="campDateRange">JULY 12 - 16:</span> <a href="#danceAllDay">DANCE ALL DAY</a> ~ ages 10 -17 </p>

                            <p><span className="campDateRange">JULY 19 - 23:</span> <a href="#fun">FUN!</a> Dance & Sing Camp ~ ages 4-8</p>

                            <p><span className="campDateRange">JULY 26 - 30:</span> <a href="#tripleThreatTap">TRIPLE THREAT
                                    +
                                    TAP!</a> ~ ages 7-17 </p>

                            <h3 className="superHeadings">AUGUST</h3>

                            <p><span className="campDateRange">AUGUST 2 -6 :</span><a href="#lightsCameraAction">CAMERA
                                    READY!</a> #2 ~ ages 7-17 </p>
                            <p><span className="campDateRange">AUGUST 9 - 13:</span> <a href="#broadwayBound">BROADWAY
                                    BOUND!</a> ~ ages 7-17 </p>
                            <p><span className="campDateRange">AUGUST 16 - 20:</span> <a href="#fun">FUN!</a> Dance, Act & Sing ~ ages 4-8</p>

                        </div>
                    </header>
                </article>
                <article id="descriptions">

                    <header>
                        <h1>Course Descriptions:</h1>
                    </header>
                    <div id="twoDescriptions">

                        <div id="classDescriptions">
                            <h2>Classes:</h2>
                            <a className="anchor" id="preDance"></a>

                            <a className="anchor" id="funDance"></a>

                            <a className="anchor" id="kids1Dance"></a>

                            <img className="ballerina" src={Ballerina} alt="blue Shillouette of kid in ballet pose" />

                            <a className="anchor" id="actingUpK-2"></a>
                            <a className="anchor" id="musicalTheater1-5"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Pre Dance Grade Levels : TK-K</strong></h4>

                                Introduction to dance, how to be in a class, Very creative Ballet & Tap
                            </div>
                            <a className="anchor" id="tumbling"></a>

                            <a className="anchor" id="kids2Ballet"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>FUN! - Dance for Beginners Grade Levels TK-2</strong></h4>

                                This is a Fun - High Energy Basic Moves Dance class for Boys and Girls
                            </div>


                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Kids 1 Dance Grade Levels K-2</strong></h4>

                                Ballet & Tap Combination Class, Students learn the basics and vocabulary of Ballet and Tap
                            </div>


                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Acting Up - Kids 1 Grade Levels : K-2</strong></h4>

                                Introduction to Theatre - Fun acting games, exercises, and scene work, students will perform a story.
                            </div>

                            <a className="anchor" id="kids2TapJazz"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Musical Theatre Production- Kids Grade Levels : 1-5</strong></h4>

                                Students will meet twice a week , and learn what is involved in rehearsing and performing in a Musical Theatre Production. Two Shows per year. Musical TBA Price : $ 350.00
                            </div>

                            <a className="anchor" id="actingUp3-5"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Tumbling Grade Levels : 1- 5</strong></h4>

                                Beginner Tumbling moves to improve strength and flexibility Half hour class
                            </div>

                            <a className="anchor" id="kids3Ballet"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Kids 2 Ballet Grade Levels : 3-5</strong></h4>

                                Students will advance and learn new dance technique and vocabulary
                            </div>

                            <a className="anchor" id="kids3TapJazz"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Kids 2 Tap & Jazz Grade Levels: 3-5</strong></h4>

                                Students will learn Musical Theatre style Tap & Jazz dance
                            </div>

                            <a className="anchor" id="actingUp6-12"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Acting Up - Kids 2 Grade Levels : 3-5</strong></h4>

                                While exploring creative writing, improvisation, and scene study, students will write and act out their own scenes, and short scripts.
                            </div>
                            <br />
                            <img className="ballerina" src={RedDancer} alt="red Shillouette of person posing" />

                            <a className="anchor" id="musicalTheater6-12"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Kids 3 Ballet Grade Levels : 6- 8</strong></h4>

                                Students will learn challenging moves and combinations Twice weekly Recommended (price based on one class per week)
                            </div>

                            <a className="anchor" id="ballet"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Kids 3 Tap & Jazz Grade Levels : 6- 8</strong></h4>

                                Description : Students will dazzle with impressive Tap & Jazz steps and choreography
                            </div>

                            <a className="anchor" id="contemporaryDance"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Acting Up - Youth/Teens Grade Levels : 6- 12</strong></h4>

                                Description : Students will study theatre history, monologues, and scene work, character development and Acting for Camera -, scene writing and will make their own video.
                            </div>

                            <a className="anchor" id="pilatesMat"></a>

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Musical Theatre Production - Youth Grade Levels : 6-12</strong></h4>

                                Students will meet twice a week , and learn what is involved in rehearsing and performing in a Musical Theatre Production. Final Presentation. Two shows per year. Musical TBA Price : $ 350.00
                            </div>



                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Ballet Teen/Adult</strong></h4>

                                Students will gain strength and flexibility while discovering musicality, and work on choreography. Recommended twice per week. Price based on one class per week.
                            </div>



                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Contemporary Dance Teen/Adult</strong></h4>

                                This intensely physical and creative form of dance will focus on building technique and creative expression and encouraging students to create their own phrase of choreography for final sharing.
                            </div>



                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Pilates Mat Class: Teen - Adult</strong></h4>

                                Pilates Technique teaches students to strengthen and support form their "core" (abdominals) while promoting great posture and alignment, students improve flexibility. Breath technique improves overall performance, and promotes calm, de-stress. Highly
                                recommended for aspiring dancers and actors.
                            </div>
                        </div>
                        <div id="campDescriptions">
                            <h2>Camps:</h2>
                            <h5>ONE WEEK HALF DAY CAMPS 9:00-12:00 <strong>$100.</strong></h5>
                            <br />
                            <p className="campDate">Each camp does a final day performance!</p>
                            <p className="campDate">Invite friends and family to watch on Zoom!</p>

                            <br />

                            <a className="anchor" id="fun"></a>

                            <img className="ballerina" src={OrangeJump} alt="orange Shillouette of kid jumping" />

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>FUN! Dance & Sing Camp ages 4-7</strong></h4>

                                <h5 className="campDate">JUNE 14 - 18</h5>

                                <h5 className="campDate">JULY 19 - 23</h5>

                                <h5 className="campDate">AUGUST 16 - 20</h5>

                                <p>Young Students will learn Dance vocabulary, and Improve flexibility through Fun Dance, Stretches, Tumbling, play fun Acting Games, discover rhythm and learn to Sing like a pro!</p>
                            </div>

                            <a id="danceAllDay" className="anchor"></a>

                            <img className="ballerina" src={PinkJump} alt="pink Shillouette of kid jumping" />

                            <div className="courseInfo">
                                <h4 className="subHeadings"><strong>Dance All Day ages 10-17</strong></h4>

                                <h5 className="campDate">JULY 12 - 16</h5>

                                <p>Students will study Ballet, Contemporary Dance, Hip Hop, Jazz and Tap. They will gain strength, flexibility, and endurance through conditioning classes. Students will learn fun dance routines and how to create choreography
                                    and perform the final day of camp.</p>
                            </div>

                            <img className="ballerina" src={GreenJump} alt="green Shillouette of kid jumping" />

                            <a id="broadwayBound" className="anchor"></a>
                            <div className="courseInfo">
                                <h3 className="superHeadings"><strong>MUSICAL THEATRE KIDS</strong></h3>
                                <h5 className="campDate">ages 7-17</h5>



                                <p>Students will have a Theatrical Blast in 3 technique classes per day- as they improve in Voice, Dance, and Acting, and work on being “AUDITION READY” for Musical Theatre, TV, and FILM Auditions.
                                </p>

                                <p>Each camp has a Unique emphasis.</p>

                                <a id="tripleThreatTap" className="anchor"></a>

                                <h4 className="subHeadings"><strong>BROADWAY BOUND!</strong></h4>
                                    <h5 className="campDate">JUNE 21 - 25</h5>
                                    <h5 className="campDate">AUGUST 9 - 13</h5>
                                    <p>Broadway Bound and Triple Threat + Tap will focus on iconic Broadways musicals, scenes, songs and choreography (this summer we are are working on CATS, Hamilton, A Chorus Line, Frozen, and more.</p>
                                    <a id="lightsCameraAction" className="anchor"></a>
                                    <p>Students will focus on improving acting and singing technique, and learning iconic dances.
                                    </p>

                                    <h4 className="subHeadings"><strong>TRIPLE THREAT + TAP!</strong></h4>
                                        <h5 className="campDate">JULY 26 - JULY 30</h5>
                                        <p>In Triple Threat + Tap - the dance segment will be a Tap Dance workshop.</p>


                                        <h4 className="subHeadings"><strong>LIGHTS, CAMERA, ACTION!</strong></h4>
                                            <h5 className="campDate">JULY 5 - 9</h5>
                                            <h5 className="campDate">AUGUST 2 - 6</h5>
                                            <p>Camera Ready will train young actors to perform for camera, VoiceOver work, as well as song and dance, and creating their own music video.</p>

                            </div>
                        </div>
                    </div>

                </article>
            </div>
        </section>
    );
}

export default Classes;
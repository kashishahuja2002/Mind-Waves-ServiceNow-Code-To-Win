import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import LogoColouredLandscape from '../../assets/images/LogoColouredLandscape.png';
import LogoWhiteLandscape from '../../assets/images/LogoWhiteLandscape.png';

import '../../styles/pages/LandingPage.scss';

function LandingPage() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/auth/login');
    }

    return (
        <div>
            <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease-in-quart"
                data-easing2="ease-out-quart" role="banner" className="navbar w-nav">
                <div className="container nav w-container">
                    <div className="logo-wrapper"><img
                        src={LogoColouredLandscape}
                        loading="lazy" width="220" alt="Great Minds Logo" /></div>
                    <div className="nav-wrapper">
                        <nav role="navigation" glass="2" className="nav-menu w-nav-menu">
                            <a href="#feature"
                                className="nav-link w-inline-block">
                                <div>Features</div>
                            </a>

                            <a href="#Benefits" className="nav-link w-inline-block">
                                <div>Benefits</div></a>
                            <a href="#EAP" className="nav-link w-inline-block">
                                <div>EAP</div></a>
                        </nav>

                        <a data-w-id="c25a8e20-cb14-d39c-5bae-82075acd46a9" href="#"
                            className="button mobile w-button" onClick={handleNavigation}><span className="free-copy-switch">Sign In</span> </a>
                        <div className="menu-button w-nav-button">
                            <div className="icon w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "none", opacity: "0", transform: "translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="tips-outer-wrapper">
                    <div glass="1" className="tips-inner-wrapper">
                        <div className="container w-container">
                            <div className="form-space">
                                <div className="w-layout-grid grid-form"><img
                                    src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/6101ccb2eed367ee78c19d16_wellness-tips-illustration.svg"
                                    loading="lazy" id="w-node-_28781c6d-6336-dfd4-010b-d504a6f148c9-0862c5d4"
                                    alt="Wellness Tips Illustration" className="tips-form-illustration" />
                                    <div id="w-node-_579eb98f-2c79-d864-ff12-f7c3a5ae13b1-0862c5d4"><a
                                        data-w-id="6d814704-f291-19e1-ddb2-3bf720f88cd6" href="#"
                                        className="button close w-button"><span className="x">X</span> Close</a></div>
                                    <div id="w-node-_33d5fd1c-b58b-05d8-5245-8077e13a839a-0862c5d4" className="faux-heading">Sign up
                                        for free wellbeing tips</div>
                                    <p id="w-node-b31e8790-fd28-015b-4094-56c852f5ccf0-0862c5d4" className="tips-description">
                                        Receive free wellbeing tips in your inbox every week for a year. Each tip is based on my
                                        work with organisations to provide proven mental health and wellbeing solutions. They
                                        are designed to help you increase your productivity, health, creativity and resilience.
                                    </p>
                                    <div id="w-node-_780a3ef1-266a-8e4d-ad4f-6ce5fbad4577-0862c5d4" className="w-form">
                                        <form id="wf-form-Wellbeing-Tips-Form" name="wf-form-Wellbeing-Tips-Form"
                                            data-name="Wellbeing Tips Form" method="get">
                                            <div className="w-layout-grid grid-two tips">
                                                <div><label for="Tips-Firstname">First Name</label><input type="text"
                                                    className="input w-input" maxlength="256" name="Tips-Firstname"
                                                    data-name="Tips Firstname" placeholder="" id="Tips-Firstname"
                                                    required="" /></div>
                                                <div><label for="Tips-Last-Name">Last Name</label><input type="text"
                                                    className="input w-input" maxlength="256" name="Tips-Last-Name"
                                                    data-name="Tips Last Name" placeholder="" id="Tips-Last-Name"
                                                    required="" /></div>
                                            </div><label for="Tips-Email">Email Address</label><input type="email"
                                                className="input gap w-input" maxlength="256" name="Tips-Email"
                                                data-name="Tips Email" placeholder="" id="Tips-Email" required="" /><input
                                                type="submit" value="Submit" data-wait="Please wait..."
                                                className="button w-button" />
                                        </form>
                                        <div className="success-message w-form-done">
                                            <div>Thank you! Your request has been received. You will receive your first email
                                                shortly.</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                    <p id="w-node-_02e5f604-a338-7e9f-f73f-7cfd1bf8eb16-0862c5d4" className="small-copy">I respect
                                        your privacy. Your data is not shared with third parties and you can unsubscribe at any
                                        time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-curves-wrapper">
                <div style={{ transform: "translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="top-curve-background"></div>
                <div style={{ transform: "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="background-curve-fill-block"></div>
                <div style={{ transform: "translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="top-curve-foreground"></div>
            </div>

            <main className="main">
                <header id="Introduction" className="header wf-section">
                    <div className="container w-container">
                        <div className="w-layout-grid grid-two introduction">
                            <div className="introduction-headings">
                                <h1>Future of Workplace</h1>
                                <p className="subheading">A digital platform that will help you maintain your mental health.</p>
                            </div><img
                                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/6102a5804733360b13bd1fd4_great-minds-introduction-working.svg"
                                loading="lazy" id="w-node-_749094cd-3351-73b1-4786-0f89e0b5a528-0862c5d4"
                                alt="Office workers enjoying nature and relaxing" className="introduction-illustration" />
                        </div>
                    </div>
                </header>
                
                <section id="problem" className="xl-gap wf-section">
                    <div class="container w-container">
                        <h2>Mental health care for today’s workforce</h2>
                        <blockquote>Employee well-being directly impacts productivity, culture, retention, and healthcare costs. mindwaves provides the accessible & convenient support employees need to be mentally healthy—so your people (and your business) can thrive.<br /><br />— <span className="cite">mindwaves for employees</span><span className="cite"></span></blockquote>
                    </div>
                </section>

                <section id="MHFA" className="xl-gap wf-section">
                    <div class="container w-container">
                        <div className="w-layout-grid grid-two"><img
                            src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610130d39366c32014e41b48_mhfa-illustration.svg"
                            loading="lazy" alt="Managing stress during the " />
                            <div>
                                <p className="employee-fontSize"><strong>76% of full-time workers have experienced at least one symptom of a mental health condition</strong></p>
                                <p>The current socio-economic and global challenges have highlighted the need for effective, all-inclusive mental health solutions that employees can access now. The COVID-19 pandemic has had a significant impact on mental health, and many employees are experiencing increased levels of stress, anxiety, and burnout.
                                    Offering comprehensive mental health benefits and providing resources and support can create a workplace environment that promotes mental health and well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="feature" className="xl-gap wf-section">
                    <div className="container w-container">
                        <div className="w-layout-grid grid-four">
                            <div id="w-node-_5e6b692d-801f-8c96-0952-0b35636ec606-0862c5d4" className="relative organic-wrapper">
                                <div data-w-id="c34f6110-7ab3-36b4-dd32-6fe61dbf3389"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                                    className="organic-background"></div>
                                <div data-w-id="7edbff0e-4c3e-183b-2fbd-66ddb5d69d0f"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                                    className="organic-foreground"></div>
                                <div className="organic yohan"></div>
                            </div>
                            <div>
                                <h2>Consult with an expert</h2>
                                <p>Employee Assistance program, that offers employees access to confidential counseling and other resources to address personal and work-related issues, including mental health concerns. </p>
                            </div>
                            <div id="w-node-_14eda021-b872-0191-e91a-ec9c158f5fd5-0862c5d4" className="relative organic-wrapper">
                                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd6"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                                    className="organic-background tips"></div>
                                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd7"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                                    className="organic-foreground tips"></div>
                                <div className="organic tips"></div><img
                                    src="	https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/61004406ed607b6cff48225f_develop-your-wellbeing-strategy.svg"
                                    loading="lazy" width="238" alt="Wellness Tips Illustration" className="wb-tips-illustration" />
                            </div>
                            <div>
                                <h2>Track your goals</h2>
                                <p>Equipped with a health tracker that enables individuals to monitor various aspects of their health and wellness, such as physical activity, water intake, meditation durations and heart rate.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="xl-gap wf-section">
                    <div className="container w-container">
                        <div className="w-layout-grid grid-four">
                            <div id="w-node-_5e6b692d-801f-8c96-0952-0b35636ec606-0862c5d4" className="relative organic-wrapper">
                                <div data-w-id="c34f6110-7ab3-36b4-dd32-6fe61dbf3389"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                                    className="organic-background"></div>
                                <div data-w-id="7edbff0e-4c3e-183b-2fbd-66ddb5d69d0f"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                                    className="organic-foreground tips"></div>
                                <div className="organic tips"></div>
                                <img
                                    src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610044069f63d42429095115_tangible-business-benefits.svg"
                                    loading="lazy" width="238" alt="Wellness Tips Illustration" className="wb-tips-illustration" />
                            </div>
                            <div>
                                <h2>Track mood changes with a questionnaire</h2>
                                <p>Questionnaires designed to ask a series of questions that are intended to measure various aspects of mental health, such as mood, anxiety, or stress</p>
                            </div>
                            <div id="w-node-_14eda021-b872-0191-e91a-ec9c158f5fd5-0862c5d4" className="relative organic-wrapper">
                                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd6"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                                    className="organic-background tips"></div>
                                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd7"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                                    className="organic-foreground tips"></div>
                                <div className="organic tips"></div><img
                                    src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610117b5ac028a714ee1d543_course-illustration-6.svg"
                                    loading="lazy" width="238" alt="Wellness Tips Illustration" className="wb-tips-illustration" />
                            </div>
                            <div>
                                <h2>Engage in relaxing activities</h2>
                                <p>Engaging in a relaxing activity during your break can be a great way to take care of your mental health and well-being. Whether it's reading a book, listening to music, or any other activity you enjoy. </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="Benefits" className="xl-gap wf-section">
                    <div className="container w-container">
                        <h2>All-in-one solution for your employees</h2>
                        <div className="w-layout-grid grid-three">
                            <div className="feature-wrapper"><img
                                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610117b5e74ecc5ae470c3cc_course-illustration-3.svg"
                                loading="lazy" width="120" height="120" alt="Mental health &amp; wellbeing training" />
                                <h3> Improved mental health </h3>
                                <p>App offers self-assessment tools and access to mental health resources and support providers to improve the user's mental health.</p>
                            </div>
                            <div className="feature-wrapper"><img
                                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610044069b7545647841852b_safe-environment.svg"
                                loading="lazy" width="120" height="120" alt="Tangible business benefits" />
                                <h3>Achieve health goals and track progress </h3>
                                <p>Improves mental health by promoting target change strategies, self-care goals, reminders and progress tracking through an interactive dashboard.</p>
                            </div>
                            <div className="feature-wrapper"><img
                                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/6100440670493706fba22711_highly-experienced-trainer.svg"
                                loading="lazy" width="120" height="120" alt="Positive training experience" />
                                <h3> Encourages
                                    healthy competition</h3>
                                <p>The leaderboard is an effective way to track progress, set goals and promote a culture of support and accountability for employees' mental health.</p>
                            </div>
                            <div className="feature-wrapper"><img
                                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610117b564e81445d889c51c_course-illustration-5.svg"
                                loading="lazy" width="120" height="120" alt="Develop your wellbeing strategy" />
                                <h3> Increase Self Awareness</h3>
                                <p>Individuals can monitor their own behaviors, be more self-aware, and be empowered to seek medical attention as they see negative trends.</p>
                            </div>
                            <div className="feature-wrapper"><img
                                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/61004406b605fd16f533b8a6_mental-health-wellbeing-training.svg"
                                loading="lazy" width="120" height="120" alt="Highly experienced trainer" />
                                <h3> Prevents Burnout</h3>
                                <p>By taking breaks and participating in engaging activities like mediation and exercise, the user can avoid burnout and maintain a peaceful state of mind.
                                </p>
                            </div>
                            <div className="feature-wrapper"><img
                                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610135017eb6bbc2630138f2_contact_form_illustration.svg"
                                loading="lazy" width="120" height="120" alt="Safe environment" />
                                <h3> Increased access to mental health resources</h3>
                                <p>Provides convenient and accessible resources to support mental health, including self-help tools, articles and  guided meditations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="EAP" class="relative xxl-gap wf-section">

                    <div className="container w-container">
                        <h2>Expand your EAP with mindwaves</h2>
                        <blockquote>Employee Assistance Programs (EAPs) are an essential component of many organizations' benefits packages, providing employees with access to resources and support for a range of personal and work-related issues. mindwaves is a digital mental health platform that provides the facility of online therapy and counseling services to individuals and organizations. mindwaves offers a range of benefits that can complement and expand on existing EAP services<br /><br />— <span className="cite">mindwaves for Employee Assistance Programs</span><span className="cite"></span></blockquote>
                    </div>
                </section>
            </main>

            <footer className="footer wf-section">
                <div className="footer-curve-wrapper">
                    <div className="footer-piece background"></div>
                    <div className="footer-piece foreground"></div>
                    <div className="footer-piece solids"></div>
                    <div className="footer-piece curve"></div>
                </div>

                <div className="container footer w-container">
                    <img
                        src={LogoWhiteLandscape}
                        loading="lazy" alt="Great Minds Logo" className="footer-logo gap" 
                    />
                    <div className="w-layout-grid grid-three">
                        <div>
                            <div>Kahish Ahuja </div>
                            <div>Ishika Paliwal</div>
                            <div>Drakshi Chopra</div>
                        </div>

                        <div>
                            <a href="tel:(+91) 7999756630" className="footer-link">‭(+91) 7999756630</a>
                            <a href="mailto:hello@greatminds.training?subject=Hello%20Great%20Minds"
                            className="footer-link">hello@mindwaves.com</a>
                        </div>
                        <div>© mindwaves<br />International Institute of professional Studies</div>
                    </div>
                </div>
            </footer>
        </div>
    );

}
export default LandingPage;                                                                          

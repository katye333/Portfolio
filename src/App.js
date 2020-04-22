import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Person, Apps, Email, GitHub, LinkedIn, PhoneAndroid, ImportantDevices, School, Android, DeveloperMode } from '@material-ui/icons';
import { Card } from '@material-ui/core';
import ParticleComponent from './ParticleComponent';
import PieChart from 'react-minimal-pie-chart';
import Projects from './Projects';
import Contact from './Contact';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPersonal: true,
            showProjects: false,
            showContact: false
        }
    }

    render() {
        return (
            <div className="App" style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', position: 'absolute', top: 0, left: 0 }}>
                <ParticleComponent />
                <Card style={{ padding: 50, zIndex: 1, marginBottom: 200, width: '50%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <img alt="Kaitlin Stevens" src={process.env.PUBLIC_URL + '/me.jpg'} width={390} height={402} />

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <button 
                                    onClick={() => {
                                        this.setState({
                                            showPersonal: true,
                                            showProjects: false,
                                            showContact: false
                                        })
                                    }}
                                    style={{ width: 100, height: 100, backgroundColor: '#4FC0E9', borderStyle: 'none' }}>
                                    <Person style={{ fontSize: 40, color: '#ffffff' }} />
                                </button>
                                <button
                                    onClick={() => {
                                        this.setState({
                                            showPersonal: false,
                                            showProjects: true,
                                            showContact: false
                                        })
                                    }} 
                                    style={{ width: 100, height: 100, backgroundColor: '#A8D32A', borderStyle: 'none' }}>
                                    <Apps style={{ fontSize: 40, color: '#ffffff' }} />
                                </button>
                                <button
                                    onClick={() => {
                                        this.setState({
                                            showPersonal: false,
                                            showProjects: false,
                                            showContact: true
                                        })
                                    }}  
                                    style={{ width: 100, height: 100, backgroundColor: '#F7931E', borderStyle: 'none' }}>
                                    <Email style={{ fontSize: 40, color: '#ffffff' }} />
                                </button>
                                <a 
                                    href="https://github.com/katye333"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ width: 100, height: 100, backgroundColor: '#24292e', borderStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <GitHub style={{ fontSize: 40, color: '#ffffff' }} />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/kaitlin-stevens-webdev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ width: 100, height: 100, backgroundColor: '#0077b5', borderStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <LinkedIn style={{ fontSize: 40, color: '#ffffff' }} />
                                </a>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 20 }}>
                                <div style={{ paddingLeft: 40 }}>
                                    <h1 style={{ 
                                        fontSize: 36, 
                                        textAlign: 'left', 
                                        fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif',
                                        fontWeight: '700',
                                        marginBottom: 0
                                    }}>Kaitlin Stevens</h1>
                                    <h3 style={{
                                        marginTop: 10,
                                        textAlign: 'left',
                                        fontWeight: '700',
                                        fontSize: 18, 
                                        color: '#55C1E7', 
                                        fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif'
                                    }}>WEB DEVELOPER</h3>

                                    <p style={{
                                        textAlign: 'left',
                                        fontSize: 17,
                                        fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif',
                                        marginTop: 20,
                                        width: '26em'
                                    }}>
                                        Hello! My name is Katye Stevens. I am a Front End / Mobile App Developer
                                        living in Florida. With 7+ years of experience with JavaScript, HTML and CSS,
                                        I have expanded my knowledge to include a myriad of other languages and
                                        frameworks. Currently living in Tampa, FL but willing, ready and able to move 
                                        for the right job opportunity!
                                    </p>
                                </div>    
                            </div>
                        </div>    
                    </div>

                    {
                        this.state.showPersonal &&
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                                <div style={{ fontSize: 36, fontWeight: '900', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>
                                    <p>EMPLOYMENT</p>
                                </div>
                                <div style={{ width: 650, height: 5, borderColor: '#000000', backgroundColor: '#000000', marginTop: 55}}></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', marginRight: 50, flex: 0.5 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ padding: 15, borderRadius: 40, backgroundColor: '#55C1E7' }}>
                                            <PhoneAndroid style={{ fontSize: 40, color: '#ffffff' }} /> 
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15  }}>
                                            <h4 style={{ margin: 0, fontSize: 20, color: '#55C1E7', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>MOBILE APP DEVELOPER</h4>
                                            <p style={{ marginTop: 5, fontSize: 16, fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>College Hunks Hauling Junk</p>
                                            <h4 style={{ fontSize: 15, margin: 0, marginTop: -10 }}>2018 - 2020</h4>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <ul style={{ width: 350, minHeight: 250 }}>
                                            <li>Developed a React Native application for use on the respective app stores</li>
                                            <li>Integrated technologies such as Firebase for notifications and analytics, Square Reader for credit card
                                                processing, and PSPDFKit for generating, annotating and signing PDFs</li>
                                            <li>Responsible for app deployments via the store front and using AppCenter’s code push tool</li>
                                            <li>Configured Jest with Enzyme to facilitate testing throughout the development process</li>
                                            <li>Followed the Material UI guidelines set by Google to create a truly beautiful app</li>
                                        </ul>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: 300 }}>
                                        <PieChart
                                            animate={false}
                                            animationDuration={500}
                                            animationEasing="ease-out"
                                            cx={50}
                                            cy={50}
                                            data={[
                                                {
                                                    color: '#43A19E',
                                                    title: 'React Native',
                                                    value: 50
                                                },
                                                {
                                                    color: '#7B43A1',
                                                    title: 'Android',
                                                    value: 30
                                                },
                                                {
                                                    color: '#F2317A',
                                                    title: 'iOS',
                                                    value: 20
                                                }
                                            ]}
                                            label={({ data, dataIndex }) => data[dataIndex].title}
                                            labelPosition={60}
                                            labelStyle={{
                                                fontFamily: 'sans-serif',
                                                fontSize: '5px'
                                            }}
                                            lengthAngle={360}
                                            lineWidth={20}
                                            paddingAngle={18}
                                            radius={50}
                                            rounded
                                            startAngle={0}
                                            viewBoxSize={[
                                                100,
                                                100
                                            ]}
                                        />
                                    </div>
                                </div>

                                <div style={{ width: 1, height: 750, borderColor: '#cccccc', backgroundColor: '#cccccc' }} />

                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15, flex: 0.5 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ padding: 15, borderRadius: 40, backgroundColor: '#55C1E7' }}>
                                            <ImportantDevices style={{ fontSize: 40, color: '#ffffff' }} /> 
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15  }}>
                                            <h4 style={{ margin: 0, fontSize: 20, color: '#55C1E7', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>FULL STACK DEVELOPER</h4>
                                            <p style={{ marginTop: 5, fontSize: 16, fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>mJobTime Corporation</p>
                                            <h4 style={{ fontSize: 15, margin: 0, marginTop: -10 }}>2013 - 2017</h4>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <ul style={{ width: 350, minHeight: 250 }}>
                                            <li>Developed an web application using AppCache and Service Workers in conjunction with C# to facilitate offline capabilities</li>
                                            <li>Solely responsible for changes to the application interface using Bootstrap, Flexbox and custom CSS</li>
                                            <li>Created stored procedures using Sybase and MSSQL</li>
                                            <li>Configured Jest with Enzyme to facilitate testing throughout the development process</li>
                                            <li>Implemented GPS Geotracking using a REST web api to let businesses monitor employee and equipment movement on the job site.</li>
                                        </ul>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: 300 }}>
                                        <PieChart
                                            animate={false}
                                            animationDuration={500}
                                            animationEasing="ease-out"
                                            cx={50}
                                            cy={50}
                                            data={[
                                                {
                                                    color: '#43A19E',
                                                    title: '.NET/#C',
                                                    value: 20
                                                },
                                                {
                                                    color: '#7B43A1',
                                                    title: 'SQL',
                                                    value: 10
                                                },
                                                {
                                                    color: '#F2317A',
                                                    title: 'HTML5',
                                                    value: 20
                                                },
                                                {
                                                    color: '#FF9824',
                                                    title: 'CSS3',
                                                    value: 10
                                                },
                                                {
                                                    color: '#58CF6C',
                                                    title: 'JavaScript',
                                                    value: 40
                                                }
                                            ]}
                                            label={({ data, dataIndex }) => data[dataIndex].title}
                                            labelPosition={70}
                                            labelStyle={{
                                                fontFamily: 'sans-serif',
                                                fontSize: '5px'
                                            }}
                                            lengthAngle={360}
                                            lineWidth={20}
                                            paddingAngle={18}
                                            radius={50}
                                            rounded
                                            startAngle={0}
                                            viewBoxSize={[
                                                100,
                                                100
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                                <div style={{ fontSize: 36, fontWeight: '900', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>
                                    <p>EDUCATION & SKILLS</p>
                                </div>
                                <div style={{ width: 505, height: 5, borderColor: '#000000', backgroundColor: '#000000', marginTop: 55}}></div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', flex: 0.5 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15, flex: 0.5 }}>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ padding: 15, borderRadius: 40, backgroundColor: '#FF9824' }}>
                                                <Android style={{ fontSize: 40, color: '#ffffff' }} /> 
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15  }}>
                                                <h4 style={{ margin: 0, fontSize: 20, color: '#FF9824', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>ADVANCED ANDROID NANODEGREE</h4>
                                                <p style={{ marginTop: 5, fontSize: 16, fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>Udacity</p>
                                                <h4 style={{ fontSize: 15, margin: 0, marginTop: -10 }}>Currently Enrolled</h4>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: 25, marginBottom: 15, width: 485, height: 1, borderColor: '#cccccc', backgroundColor: '#cccccc' }} />

                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ padding: 15, borderRadius: 40, backgroundColor: '#FF9824' }}>
                                                <Android style={{ fontSize: 40, color: '#ffffff' }} /> 
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15  }}>
                                                <h4 style={{ margin: 0, fontSize: 20, color: '#FF9824', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>ANDROID BASICS NANODEGREE</h4>
                                                <p style={{ marginTop: 5, fontSize: 16, fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>Udacity</p>
                                                <h4 style={{ fontSize: 15, margin: 0, marginTop: -10 }}>2019</h4>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: 25, marginBottom: 15, width: 485, height: 1, borderColor: '#cccccc', backgroundColor: '#cccccc' }} />

                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ padding: 15, borderRadius: 40, backgroundColor: '#FF9824' }}>
                                                <DeveloperMode style={{ fontSize: 40, color: '#ffffff' }} /> 
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15  }}>
                                                <h4 style={{ margin: 0, fontSize: 20, color: '#FF9824', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>REACT NANODEGREE</h4>
                                                <p style={{ marginTop: 5, fontSize: 16, fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>Udacity</p>
                                                <h4 style={{ fontSize: 15, margin: 0, marginTop: -10 }}>2017</h4>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: 25, marginBottom: 15, width: 485, height: 1, borderColor: '#cccccc', backgroundColor: '#cccccc' }} />

                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ padding: 15, borderRadius: 40, backgroundColor: '#FF9824' }}>
                                                <School style={{ fontSize: 40, color: '#ffffff' }} /> 
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15  }}>
                                                <h4 style={{ margin: 0, fontSize: 20, color: '#FF9824', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>COMPUTER SCIENCE</h4>
                                                <p style={{ marginTop: 5, fontSize: 16, fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>Lamar University</p>
                                                <h4 style={{ fontSize: 15, margin: 0, marginTop: -10 }}>2012 - 2017</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', flex: 0.5, marginLeft: 10}}>
                                    <div style={{ marginBottom: 5, width: 350, backgroundColor: '#43A19E', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginLeft: 10 }}>JavaScript</p>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginRight: 10 }}>7 years</p>  
                                    </div>
                                    <div style={{ marginBottom: 5, width: 250, backgroundColor: '#7B43A1', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginLeft: 10 }}>ReactJS</p>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginRight: 10 }}>3 years</p>  
                                    </div>
                                    <div style={{ marginBottom: 5, width: 250, backgroundColor: '#F2317A', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginLeft: 10 }}>React Native</p>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginRight: 10 }}>3 years</p>  
                                    </div>
                                    <div style={{ marginBottom: 5, width: 350, backgroundColor: '#FF9824', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginLeft: 10 }}>HTML5</p>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginRight: 10 }}>7 years</p>  
                                    </div>
                                    <div style={{ marginBottom: 5, width: 350, backgroundColor: '#58CF6C', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginLeft: 10 }}>CSS</p>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginRight: 10 }}>7 years</p>  
                                    </div>
                                    <div style={{ marginBottom: 5, width: 300, backgroundColor: '#43A19E', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginLeft: 10 }}>.NET/C#</p>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginRight: 10 }}>4 years</p>  
                                    </div>
                                    <div style={{ marginBottom: 5, width: 175, backgroundColor: '#7B43A1', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginLeft: 10 }}>Android</p>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginRight: 10 }}>2 years</p>  
                                    </div>
                                    <div style={{ marginBottom: 5, width: 175, backgroundColor: '#F2317A', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginLeft: 10 }}>iOS</p>
                                        <p style={{ fontSize: 16, color: 'white', padding: 5, marginRight: 10 }}>2 years</p>  
                                    </div>
                                </div>
                            </div>
                        </div>    
                    }
                    
                    {
                        this.state.showProjects &&
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                                <div style={{ fontSize: 36, fontWeight: '900', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>
                                    <p>PROJECTS</p>
                                </div>
                                <div style={{ width: 700, marginLeft: 10, height: 5, borderColor: '#000000', backgroundColor: '#000000', marginTop: 55}}></div>
                            </div>
                            <Projects />
                        </div>
                    }

                    {
                        this.state.showContact &&
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-evenly' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 30 }}>
                                <div style={{ fontSize: 36, fontWeight: '900', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>
                                    <p>CONTACT ME</p>
                                </div>
                                <div style={{ width: 655, marginLeft: 10, height: 5, borderColor: '#000000', backgroundColor: '#000000', marginTop: 55}}></div>
                            </div>
                            <div style={{ marginRight: 50, marginLeft: 50 }}>
                                <Contact />
                            </div>
                        </div>
                    }
                </Card>

            </div>
        );
    }
}

export default App;

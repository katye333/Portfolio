import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Person, Apps, Email, GitHub, LinkedIn, PhoneAndroid, ImportantDevices } from '@material-ui/icons';
import { Card } from '@material-ui/core';
import ParticleComponent from './ParticleComponent';
import PieChart from 'react-minimal-pie-chart';

function App() {

    return (
        <div className="App" style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', position: 'absolute', top: 0, left: 0 }}>
            <ParticleComponent />
            <Card style={{ padding: 50, zIndex: 1, marginBottom: 200 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <img alt="Kaitlin Stevens" src={process.env.PUBLIC_URL + '/me.jpg'} width={390} height={402} />

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <button style={{ width: 100, height: 100, backgroundColor: '#4FC0E9', borderStyle: 'none' }}>
                                <Person style={{ fontSize: 40, color: '#ffffff' }} />
                            </button>
                            <button style={{ width: 100, height: 100, backgroundColor: '#A8D32A', borderStyle: 'none' }}>
                                <Apps style={{ fontSize: 40, color: '#ffffff' }} />
                            </button>
                            <button style={{ width: 100, height: 100, backgroundColor: '#F7931E', borderStyle: 'none' }}>
                                <Email style={{ fontSize: 40, color: '#ffffff' }} />
                            </button>
                            <button style={{ width: 100, height: 100, backgroundColor: '#24292e', borderStyle: 'none' }}>
                                <GitHub style={{ fontSize: 40, color: '#ffffff' }} />
                            </button>
                            <button style={{ width: 100, height: 100, backgroundColor: '#0077b5', borderStyle: 'none' }}>
                                <LinkedIn style={{ fontSize: 40, color: '#ffffff' }} />
                            </button>
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

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                        <div style={{ marginRight: 10, fontSize: 36, fontWeight: '900', fontFamily: 'Helvetica, Helvetica Neue, Arial, sans-serif' }}>
                            <p>EMPLOYMENT</p>
                        </div>
                        <div style={{ width: 650, height: 5, borderColor: '#000000', backgroundColor: '#000000', marginTop: 55}}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15, flex: 0.5 }}>
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

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
                </div>
            </Card>

        </div>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Person, Apps, Email, GitHub, LinkedIn } from '@material-ui/icons';
import { Card } from '@material-ui/core';
import ParticleComponent from './ParticleComponent';

function App() {
    // particlesJS.load('particles-js', 'particles.json');

    return (
        <div className="App" style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <ParticleComponent />
            <Card style={{ padding: 50, zIndex: 1 }}>
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

                </div>
            </Card>

        </div>
    );
}

export default App;

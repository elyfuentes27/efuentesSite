import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import  myAvatar from '../images/myAvatar.png';

class Landing extends Component {
    render() { 
        return ( 
            <div style={{width:'100%', margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img 
                src ={myAvatar}
                alt="avatar"
                className="avatar-img"
                />
                </Cell>
                <div className="text-banner">
                    <h1>Software Engineer</h1>
                    <hr/>
                    <p> HTML/CSS | JavaScript | React | React Native | NodeJs </p>

                    <div className="social-links">
                        {/*Linkedin */}
                        <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </Grid>
            </div>
         );
    }
}
 
export default Landing;
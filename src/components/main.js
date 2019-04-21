import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './landing';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import AboutMe from './aboutMe';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aboutMe" component={AboutMe} />
    </Switch>
)

export default Main;
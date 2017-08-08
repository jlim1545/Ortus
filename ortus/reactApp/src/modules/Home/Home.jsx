var React = require('react');
var ReactDOM = require('react-dom');

import { Navbar } from './components/Navbar/Navbar';
import { DynamicContent } from './components/DynamicContent/DynamicContent';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvents';
import { FeaturedGroups } from './components/FeaturedGroups/FeaturedGroups';
import { GetInvolved } from './components/GetInvolved/GetInvolved';
import { styles } from './Home.scss';

/*
Home
  NavBar
  Content
    Dynamic Content
    Upcoming Events
    Featured Student Groups
    Get Involved
*/

export class Home extends React.Component {
  render() {
    return (
        <div className='wrapper'>
          <Navbar />
          <DynamicContent />
          <UpcomingEvents />
          <FeaturedGroups />
          <GetInvolved />
          <h1>Home Page!!</h1>
        </div>
    );
  }
};
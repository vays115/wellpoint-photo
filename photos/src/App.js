import React, { Component }  from 'react';
import './App.css';
import Photo from './components/Photo.js';
import Logo from './components/Logo.js';
import Alert from './components/Alert.js';
import DateTime from './components/DateTime.js';

function App() {
  const userName = 'ccrwpilsign'
  const communityID = '1000792'
  const apiLinks = {
    'Events':'/api/rest/digitalSign/calendarEvents?username='+ userName,
    'Dining':'/api/rest/digitalSign/menus?username='+ userName,
    'Photos':'/api/rest/digitalSign/photos?username='+ userName,
    'Bulletins':'/api/rest/digitalSign/bulletins?username='+ userName +'&stripHtml=true',
    'Alerts':'/api/rest/digitalSign/alerts?username='+ userName +'&stripHtml=true',
    'Videos':'/api/rest/digitalSign/videos?username='+ userName,
    'Team':'/api/rest/digitalSign/team?username='+ userName,
    'Residents':'/api/rest/digitalSign/newResidents?username='+ userName,
    'Mail':'/api/rest/digitalSign/mail?username='+ userName,
    'Community Resources':'/api/rest/digitalSign/communityConnections?username='+ userName,
    'Community':'/api/rest/community/'+ communityID,
  }

  return (
    <div className="App">
      <Photo photoAPILink={apiLinks['Photos']} username={userName}/>
      <Logo communityAPILink = {apiLinks['Community']}/>
      <Alert alertAPILink={apiLinks['Alerts']}/>
      <DateTime />
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import './logo.css';
 

const Logo = () => {

  // const { communityAPILink } = props;
  // const [communityLogo, setCommunityLogo] = useState('');
  // console.log(communityAPILink)

  // const fetchLogo = async () => {
  //   try {
  //     const response = await fetch(communityAPILink,{ mode: 'no-cors' });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //     const logo = data.logos[0].path;
  //     return logo;
  //   } catch (error) {
  //     console.log('error', error);
  //     return '';
  //   }
  // }

  // useEffect(() => {
  //   const getLogo = async () => {
  //     const logo = await fetchLogo();
  //     setCommunityLogo(logo);
  //   }
  //   getLogo();
  // }, [])

  return (
    <div className="logo-region">
      {/* {communityLogo && <img src={communityLogo} alt="community logo" />} */}
      <img src="https://clnproduction.s3.amazonaws.com/community/CHR/Asset-1.png56fe4c80dadc11ed98d28ff17f331f24.png" alt="community logo" />
    </div>
  )
}

export default Logo
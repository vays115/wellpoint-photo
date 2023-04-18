import React, { useState, useEffect } from 'react';
import './photo.css';

const Photo = (props) => {
  const { photoAPILink } = props;

  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(photoAPILink);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseText = await response.text();
      // console.log('Response Text:', responseText);

      const data = JSON.parse(responseText);
      // console.log(data);

      const photos = data
        .filter((item) => item.category === 'Activities')
        .map((item) => item.path);
      setPhotos(photos);
      setCurrentIndex(0); // reset the current index
    } catch (error) {
      console.log('error', error);
      setPhotos([]);
    }
  };

  useEffect(() => {
    fetchPhotos();

    const intervalId = setInterval(() => {
      fetchPhotos();
    }, 15 * 60 * 1000); // run fetchPhotos() every 15 minutes

    // clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // set a timer to update the current index every 10 seconds
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % photos.length); // loop back to 0 when the end is reached
    }, 10 * 1000);

    // clear the timer on component unmount
    return () => clearTimeout(timerId);
  }, [currentIndex, photos]);

  return (
    <div className="photo-region">
      {photos.length > 0 ? (
        <img src={photos[currentIndex]} alt="" />
      ) : (
        <p>No photos available</p>
      )}
    </div>
  );
};

export default Photo;
import React, { useEffect, useState } from 'react';
import './Courses.css';
const Courses = ({ profileData, videos, setVideos,setCourseraCourses,courseraCourses}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { title, duration, cost } = profileData;
        if (!title) return; // Avoid fetching if title is empty
  
        if (cost === 'true') { // If the course is not free, fetch Coursera courses
          const courseraResponse = await fetch(
            `https://api.coursera.org/api/courses.v1?q=search&query=${encodeURIComponent(title)}`
          );
          if (!courseraResponse.ok) {
            throw new Error('Network response was not ok for Coursera');
          }
          const courseraData = await courseraResponse.json();
          console.log('Coursera Data:', courseraData); // Debugging
          setCourseraCourses(courseraData.elements || []); // Ensure elements is an array
        } else {
          // Fetch YouTube data
          const apiKey = 'AIzaSyACQXMBIax1QP8GCbVhqEsm8wJtzUhrr-M';
          const searchQuery = `${title} ${duration} weeks`;
          const youtubeResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&key=${apiKey}`
          );
          if (!youtubeResponse.ok) {
            throw new Error('Network response was not ok for YouTube');
          }
          const youtubeData = await youtubeResponse.json();
          console.log('YouTube Data:', youtubeData); // Debugging
          setVideos(youtubeData.items || []); // Ensure items is an array
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchCourses();
  }, [profileData, setVideos]);

  return (
    <div>
      <h1>Courses</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {videos.map((video) => (
            <div key={video.id.videoId || video.id}>
              <h3>
                <a 
                  href={video.id.videoId ? `https://www.youtube.com/watch?v=${video.id.videoId}` : `https://www.coursera.org/learn/${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {video.snippet.title || video.name}
                </a>
              </h3>
              {/* <p>{video.snippet.description || video.description}</p> */}
              <img 
                src={video.snippet.thumbnails.default.url || video.thumbnail_url} 
                alt={video.snippet.title || video.name} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;

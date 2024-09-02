import React, { useEffect, useState } from 'react';
import './Courses.css';

const Courses = ({ profileData, videos, setVideos }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { title, duration } = profileData;
        if (!title) return;
        const apiKey = 'AIzaSyACQXMBIax1QP8GCbVhqEsm8wJtzUhrr-M';
        const searchQuery = `${title} ${duration} weeks`;
        const youtubeResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=10&key=${apiKey}`
        );
        if (!youtubeResponse.ok) {
          throw new Error('Network response was not ok for YouTube');
        }
        const youtubeData = await youtubeResponse.json();
        setVideos(youtubeData.items || []); // Ensure items is an array
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
      <h1>Recommended Courses</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="courses-container">
          {videos.map((video) => (
            <div key={video.id.videoId || video.id} className="course-item">
              <h3>
                <a 
                  href={video.id.videoId ? `https://www.youtube.com/watch?v=${video.id.videoId}` : `https://www.coursera.org/learn/${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {video.snippet.title || video.name}
                </a>
              </h3>
              <img 
                src={video.snippet.thumbnails.default.url || video.thumbnail_url} 
                alt={video.snippet.title || video.name} 
              />
              {/* Uncomment the line below to include video descriptions */}
              {/* <p>{video.snippet.description || video.description}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;

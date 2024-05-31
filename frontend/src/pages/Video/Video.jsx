import React, { useEffect, useState } from 'react'
import './Video.css'
import { useParams } from 'react-router-dom'

const Video = () => {

  const { videoId } = useParams()
  const [loading, setLoading] = useState(false)
  const [video, setVideo] = useState(null)

  const getVideo = (id) => {
    setLoading(true)
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCn7xdbNSUSXV1o6V8EeomcwE4E-1qJlY4`)
      .then(response => response.json()) // Parse JSON response
      .then(data => {
        console.log(data);
        setVideo(data)
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
        setLoading(false)
      });
  }

  useEffect(() => {
    getVideo(videoId)
  }, [])

  return (
    <div className="video">
      <iframe src={`https://www.youtube.com/embed/${videoId}`} frameborder="0"></iframe>
      <div className="title">
      {video === null ? <></> : video.items[0].snippet.localized.title}
      </div>
      <div className="desc">
        {/* {video === null ? <></> : video.items[0].snippet.description} */}
      </div>
    </div>
  )
}

export default Video
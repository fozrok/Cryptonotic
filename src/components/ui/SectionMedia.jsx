import React from 'react'

const SectionMedia = ({ 
  videoSrc, 
  videoTitle, 
  imageSrc, 
  imageAlt, 
  onImageClick,
  showImageModal = true 
}) => {
  return (
    <div className="section-media">
      <div className="content-video">
        <iframe 
          width="100%" 
          height="315" 
          src={videoSrc}
          title={videoTitle}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        <p className="video-caption">{videoTitle}</p>
      </div>
      
      {showImageModal ? (
        <div className="content-image" onClick={() => onImageClick(imageSrc, imageAlt)}>
          <img src={imageSrc} alt={imageAlt} />
          <p className="image-caption">{imageAlt}</p>
        </div>
      ) : (
        <div className="content-image">
          <img src={imageSrc} alt={imageAlt} />
          <p className="image-caption">{imageAlt}</p>
        </div>
      )}
    </div>
  )
}

export default SectionMedia

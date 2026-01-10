import React, { useEffect } from 'react'
import './ImageViewer.scss'

interface ImageViewerProps {
  imageSrc: string
  altText: string
  onClose: () => void
  extraContent?: React.ReactNode
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ imageSrc, altText, onClose, extraContent }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className='image-viewer'
      onClick={handleBackdropClick}
    >
      <div className='image-viewer__content'>
        <button className='image-viewer__close' onClick={onClose} aria-label='Fermer la visionneuse'>
          ✕
        </button>
        <img
          src={imageSrc}
          alt={altText}
          className='image-viewer__image'
        />
        {extraContent && (
          <div className='image-viewer__extra-content'>
            {extraContent}
          </div>
        )}
        <div className='image-viewer__caption'>
          {altText}
        </div>
      </div>
    </div>
  )
}
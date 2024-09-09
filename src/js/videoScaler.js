// src/VideoScaler.js

export function scaleVideo() {
    const video = document.querySelector('.video-background video');
    if (video) {
        const videoContainer = document.querySelector('.video-background');
        const windowWidth = window.innerWidth * 0.8; // 70% of window width
        const windowHeight = window.innerHeight * 0.8; // 70% of window height
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        // Calculate scale ratios
        const widthRatio = windowWidth / videoWidth;
        const heightRatio = windowHeight / videoHeight;
        const scaleRatio = Math.max(widthRatio, heightRatio);

        video.style.width = `${videoWidth * scaleRatio}px`;
        video.style.height = `${videoHeight * scaleRatio}px`;
    }
}

window.addEventListener('resize', scaleVideo);
window.addEventListener('load', scaleVideo);

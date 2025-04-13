---
title: "YouTube Videos | @VivaanBytes"
layout: "page.njk"
---

<style>
.youtube-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.channel-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: linear-gradient(135deg, #212529, #343a40);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.channel-header h1 {
    color: #ffc107;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.channel-header p {
    color: #f8f9fa;
    font-size: 1.2rem;
}

.videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.video-card {
    background: #212529;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.video-thumbnail {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}

.video-thumbnail iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.video-info {
    padding: 1.5rem;
}

.video-info h3 {
    color: #ffc107;
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
}

.video-info a {
    color: #f8f9fa;
    text-decoration: none;
    transition: color 0.2s ease;
}

.video-info a:hover {
    color: #ffc107;
}

.channel-link {
    display: inline-block;
    margin-top: 3rem;
    padding: 1rem 2rem;
    background-color: #ffc107;
    color: #212529;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.2s ease;
}

.channel-link:hover {
    background-color: #ffca2c;
}

@media (max-width: 768px) {
    .videos-grid {
        grid-template-columns: 1fr;
    }
    
    .channel-header {
        padding: 1.5rem;
    }
}
</style>

<div class="youtube-container">
    <div class="channel-header">
        <h1>@VivaanBytes</h1>
        <p>Welcome to my YouTube channel! Here you'll find my latest videos and content.</p>
    </div>

    <div class="videos-grid">
        <div class="video-card">
            <div class="video-thumbnail">
                <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="video-info">
                <h3><a href="/youtube/video1">Video 1 Title</a></h3>
            </div>
        </div>

        <div class="video-card">
            <div class="video-thumbnail">
                <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="video-info">
                <h3><a href="/youtube/video2">Video 2 Title</a></h3>
            </div>
        </div>

        <div class="video-card">
            <div class="video-thumbnail">
                <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="video-info">
                <h3><a href="/youtube/video3">Video 3 Title</a></h3>
            </div>
        </div>
    </div>

    <div style="text-align: center;">
        <a href="https://www.youtube.com/@VivaanBytes" target="_blank" class="channel-link">Visit My Channel</a>
    </div>
</div>
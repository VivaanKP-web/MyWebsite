---
title: "Video 1 Title"
layout: "page.njk"
---

<style>
.video-page {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.video-title {
    color: #ffc107;
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.video-description {
    color: #f8f9fa;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.back-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #343a40;
    color: #f8f9fa;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s ease;
}

.back-link:hover {
    background-color: #495057;
}
</style>

<div class="video-page">
    <h1 class="video-title">Video 1 Title</h1>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="video-description">
        <p>Video description goes here. Add details about the video content.</p>
    </div>
    <a href="/youtube" class="back-link">← Back to Videos</a>
</div>
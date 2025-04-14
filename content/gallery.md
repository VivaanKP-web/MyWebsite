---
title: "Art Gallery"
layout: "page.njk"
---

<style>
.gallery-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.gallery-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: linear-gradient(135deg, #212529, #343a40);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gallery-header h1 {
    color: #ffc107;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.gallery-header p {
    color: #f8f9fa;
    font-size: 1.2rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.art-card {
    background: #212529;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.art-card:hover {
    transform: translateY(-5px);
}

.art-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.art-info {
    padding: 1.5rem;
}

.art-title {
    color: #ffc107;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.art-description {
    color: #f8f9fa;
    font-size: 1rem;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="gallery-container">
    <div class="gallery-header">
        <h1>Art Gallery</h1>
        <p>Welcome to my digital art gallery. Here you'll find a collection of my creative works.</p>
    </div>

    <div class="gallery-grid">
        <!-- Art pieces will be added here -->
    </div>
</div>
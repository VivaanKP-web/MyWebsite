---
title: "Art Gallery"
layout: "base.njk"
---

<style>
body { padding: 0; margin: 0; }
#unity-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #231F20;
    z-index: 999;
}

#unity-canvas {
    width: 100%;
    height: 100%;
    background: #231F20;
}

#unity-loading-bar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
}

#unity-logo {
    width: 154px;
    height: 130px;
    background: url('/TemplateData/unity-logo-dark.png') no-repeat center;
}

#unity-progress-bar-empty {
    width: 141px;
    height: 18px;
    margin-top: 10px;
    background: url('/TemplateData/progress-bar-empty-dark.png') no-repeat center;
}

#unity-progress-bar-full {
    width: 0%;
    height: 18px;
    margin-top: 10px;
    background: url('/TemplateData/progress-bar-full-dark.png') no-repeat center;
}

#unity-warning {
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%);
    background: white;
    padding: 10px;
    display: none;
}

#unity-footer {
    position: absolute;
    bottom: 10px;
    right: 10px;
}

#unity-fullscreen-button {
    width: 38px;
    height: 38px;
    background: url('/TemplateData/fullscreen-button.png') no-repeat center;
    background-size: contain;
    cursor: pointer;
}
</style>

<div id="unity-container">
    <canvas id="unity-canvas" tabindex="1"></canvas>
    <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
        </div>
    </div>
    <div id="unity-warning">
        WebGL builds are not supported on mobile devices.
    </div>
    <div id="unity-footer">
        <div id="unity-fullscreen-button"></div>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var buildUrl = "/Build";
    var config = {
        dataUrl: buildUrl + "/ArtGallery.data",
        frameworkUrl: buildUrl + "/ArtGallery.framework.js",
        codeUrl: buildUrl + "/ArtGallery.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Vivaan",
        productName: "Art Gallery",
        productVersion: "1.0",
        showBanner: false
    };

    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loadingBar = document.querySelector("#unity-loading-bar");
    var progressBarFull = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton = document.querySelector("#unity-fullscreen-button");
    var warning = document.querySelector("#unity-warning");

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        warning.style.display = "block";
        setTimeout(() => {
            warning.style.display = "none";
        }, 5000);
    }

    var script = document.createElement("script");
    script.src = buildUrl + "/ArtGallery.loader.js";
    script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
            progressBarFull.style.width = (100 * progress) + "%";
        }).then((instance) => {
            loadingBar.style.display = "none";
            fullscreenButton.onclick = () => {
                instance.SetFullscreen(1);
            };
        }).catch((message) => {
            console.error(message);
            loadingBar.style.innerHTML = `<p style="color: red; width: 300px; text-align: center;">Error loading Unity content. Please try refreshing the page.</p>`;
        });
    };
    document.body.appendChild(script);
});
</script>
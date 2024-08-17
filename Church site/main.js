document.addEventListener("DOMContentLoaded", function () {
    // Array of video sources
    const videos = [
        "vids/video1.mp4",
        "vids/video2.mp4",
        "vids/video3.mp4"
    ];

    let currentVideoIndex = 0;
    const videoElements = [
        document.getElementById("video1"),
        document.getElementById("video2")
    ];

    function switchVideo() {
        // Toggle between the two video elements
        const currentVideo = videoElements[currentVideoIndex % 2];
        const nextVideo = videoElements[(currentVideoIndex + 1) % 2];

        // Update the source of the next video element
        nextVideo.src = videos[(currentVideoIndex + 1) % videos.length];
        nextVideo.load(); // Load the next video

        // Fade out the current video and fade in the next
        currentVideo.classList.remove("active");
        nextVideo.classList.add("active");

        // Increment the index for the next switch
        currentVideoIndex++;
    }

    // Set the interval (e.g., 10 seconds) to switch videos
    setInterval(switchVideo, 10000); // 10000 milliseconds = 10 seconds
});

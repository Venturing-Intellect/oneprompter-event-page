document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('submissionsFrame');
    const updateTimeSpan = document.getElementById('updateTime');
    
    function updateIframe() {
        // Update the iframe source with a timestamp to force refresh
        const timestamp = new Date().getTime();
        const currentSrc = iframe.src.split('&timestamp=')[0];
        iframe.src = `${currentSrc}&timestamp=${timestamp}`;
        
        // Update the last refreshed time
        const formattedTime = new Date().toLocaleTimeString();
        updateTimeSpan.textContent = formattedTime;
    }
    
    // Initial update
    updateIframe();
    
    // Refresh every 30 seconds
    setInterval(updateIframe, 30000);
});
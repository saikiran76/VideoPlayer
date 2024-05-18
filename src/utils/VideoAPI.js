export const loadYouTubeAPI = () => {
    return new Promise((resolve, reject) => {
        if (window.YT && window.YT.Player) {
            resolve(window.YT);
            return;
        }

        const scriptId = 'youtube-api-script';
        if (document.getElementById(scriptId)) { 
            resolve(window.YT);
            return;
        }

        const tag = document.createElement('script');
        tag.id = scriptId;
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.onload = () => {
            window.onYouTubeIframeAPIReady = () => {
                resolve(window.YT);
            };
        };
        tag.onerror = () => {
            reject(new Error('Failed to load YouTube API'));
        };
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
};

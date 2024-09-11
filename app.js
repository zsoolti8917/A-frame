// Initialize A-Frame
document.addEventListener('DOMContentLoaded', () => {
    // Create a scene
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', '');
    scene.setAttribute('arjs-webxr', '');

    // Create a marker for the AR content
    const marker = document.createElement('a-marker');
    marker.setAttribute('preset', 'hiro');

    // Create an entity to display the website
    const iframe = document.createElement('a-entity');
    iframe.setAttribute('geometry', {
        primitive: 'plane',
        width: 1.6,
        height: 0.9
    });
    iframe.setAttribute('material', {
        src: 'https://zsoltvarju.com' // Your website URL
    });
    iframe.setAttribute('position', '0 0 0');

    marker.appendChild(iframe);
    scene.appendChild(marker);
    document.getElementById('container').appendChild(scene);
});

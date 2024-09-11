document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('xr-container');
    const iframe = document.getElementById('iframe-container');

    // Initialize WebXR
    const xrSession = navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test']
    }).then(session => {
        // Set up WebXR session
        session.updateRenderState({ baseLayer: new XRWebGLLayer(session, renderer.getContext()) });
        session.requestReferenceSpace('local').then(referenceSpace => {
            // Handle the AR content rendering
            session.requestAnimationFrame((time, frame) => {
                const pose = frame.getViewerPose(referenceSpace);
                if (pose) {
                    // Update iframe position and scale based on the AR environment
                    // This is a placeholder for AR content positioning
                }
            });
        });

        // Handle session end
        session.addEventListener('end', () => {
            iframe.style.display = 'none'; // Hide iframe when AR session ends
        });
    });

    // Start WebXR session on user interaction
    document.body.addEventListener('click', () => {
        xrSession;
    });
});

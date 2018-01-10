requirejs.config({
    baseUrl: 'build',
    paths: {
        compressed: 'compressed.min',
    },
    shim: {
        'compressed': {
            exports: 'compressed'
        },
    },
    waitSeconds: 10
});

// Start the main app logic.
requirejs(['compressed'],
function   ($) {
    
});
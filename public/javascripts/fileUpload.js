const rootStyles = window.getComputedStyle(document.documentElement);


if(rootStyles.getPropertyValue('--manga-cover-width-large') !== null &&
    rootStyles.getPropertyValue('--manga-cover-width-large') !== ''){
    ready()
} else {
    document.getElementById('main-css').addEventListener('load', ready);
}

function ready(){
    const coverWidth = parseFloat(rootStyles.getPropertyValue('--manga-cover-width-large'));
    const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--manga-cover-aspect-ratio'));
    const coverHeight = coverWidth/coverAspectRatio;

    FilePond.registerPlugin(
        FilePondPluginFileEncode,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
    );
    
    FilePond.setOptions({
        stylePanelAspectRatio: 1 / coverAspectRatio,
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight

        
    });
    
    
    FilePond.parse(document.body);
}

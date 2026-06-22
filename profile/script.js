function myMenuFunction(){
    var menuBtn=document.getElementById("myNavMenu");
    if(menuBtn.className==="nav-menu"){
        menuBtn.className+=" active";
    }
    else{
        menuBtn.className="nav-menu";
    }
}

window.onscroll=function(){headerShadow()};
function headerShadow(){
    const navHeader=document.getElementById("header");
    if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
        navHeader.style.boxShadow="0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="70px";
    }
    else{
        navHeader.style.boxShadow="none";
        navHeader.style.height="90px";
        navHeader.style.lineHeight="90px";
    }
}

// Demo Video popup modal
function toggleVideo(videoId) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const srcVideo = document.getElementById(videoId);

    if (!modal || !modalVideo || !srcVideo) return;

    // Stop any currently playing modal video
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();

    // Get source url from hidden video
    const sourceEl = srcVideo.querySelector('source');
    const src = sourceEl ? sourceEl.src : null;
    if (!src) return;

    modal.style.display = 'flex';
    modalVideo.src = src;

    // Play (autoplay might be blocked; user interaction usually allows it)
    modalVideo.play().catch(() => {});
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    if (!modal || !modalVideo) return;

    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
}




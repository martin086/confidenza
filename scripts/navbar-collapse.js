if ( Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 767 ) {
    let anchorLinks = document.querySelectorAll('.anchor-link');
    let menu = document.getElementById('navbarSupportedContent');
    let bootstrapCollapse = new bootstrap.Collapse(menu, {toggle:false});

    anchorLinks.forEach((link) => {
        link.addEventListener('click', function () {
            bootstrapCollapse.toggle()
        })
    })
}
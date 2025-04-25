document.addEventListener("DOMContentLoaded", function() {
    $(function(){
        $('a[href*="#"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    var navigation = $('.sd-nav').outerHeight() - 1;
                    $('html,body').animate({scrollTop: (targetOffset - navigation)}, 600);
                    return false;
                }
            }
        });
    });

    const mobileLinks = document.querySelectorAll('.nrl-item-mobile a');
    const mobileCheckbox = document.querySelector('.mobile-checkbox');

    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileCheckbox.checked = false;
        });
    });

    
    console.log("click");
    const listItems = document.querySelectorAll('.ubul-item');

    if (listItems.length > 0) {
        listItems.forEach(item => {
            const outer = item.querySelector('.ubuli-outer');
            const inner = item.querySelector('.ubuli-inner');
            const innerText = item.querySelector('.ubulii-text');
            const img = item.querySelector('.ubulii-img');
            const text = item.querySelector('.ubulii-text');

            outer.addEventListener('click', function() {
                if (item.classList.contains('expanded')) {
                    img.style.opacity = 0;
                    text.style.opacity = 0;
                    inner.style.maxHeight = 0;

                    setTimeout(() => {
                        item.classList.remove('expanded');
                    }, 300);
                } else {
                    item.classList.add('expanded');

                    setTimeout(() => {
                        const paddingTop = parseInt(window.getComputedStyle(innerText).paddingTop);
                        const paddingBottom = parseInt(window.getComputedStyle(innerText).paddingBottom);
                        const totalHeight = inner.scrollHeight + paddingTop + paddingBottom;
                        inner.style.maxHeight = totalHeight + 'px';
                        img.style.opacity = 1;
                        text.style.opacity = 1;
                    }, 10);
                }
            });
        });
    }

});


document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
  
    // Prüfen, ob der Cookie gesetzt ist
    const hasAcceptedCookies = document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted='));
  
    if (!hasAcceptedCookies) {
      banner.style.display = "flex"; // Banner anzeigen
    }
  
    // Klick auf "Akzeptieren"-Button
    acceptButton.addEventListener("click", function () {
      // Cookie setzen
      document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 365;
      banner.style.display = "none"; // Banner ausblenden
    });
});
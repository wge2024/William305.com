document.addEventListener("DOMContentLoaded", function() {
    const lazyElements = document.querySelectorAll(".lazy");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if (el.tagName === "IFRAME" || el.tagName === "IMG") {
                    el.src = el.getAttribute("data-src");
                }
                observer.unobserve(el);
            }
        });
    });

    lazyElements.forEach(el => observer.observe(el));

    function moveAffiliates() {
        const windowWidth = window.innerWidth;
        const affiliatePlaceholders = document.querySelectorAll('.affiliate-placeholder');
        const affiliateSidebarItems = document.querySelectorAll('.affiliate-sidebar');

        if (windowWidth <= 768) {
            affiliateSidebarItems.forEach((item, index) => {
                if (affiliatePlaceholders[index]) {
                    affiliatePlaceholders[index].innerHTML = item.innerHTML;
                }
            });
        } else {
            affiliatePlaceholders.forEach(placeholder => {
                placeholder.innerHTML = '';
            });
        }
    }

    // Run moveAffiliates on initial load and on resize
    moveAffiliates();
    window.addEventListener('resize', moveAffiliates);
});
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
});
const whatsappNumber = "01205899826";


// ==============================
// أزرار الطلب
// ==============================

const orderButtons = document.querySelectorAll(".order-btn");


orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productName =
            button.getAttribute("data-product");

        const message =
            `أريد طلب ${productName} من طباعه ستور ☕💚`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappURL,
            "_blank"
        );

    });

});


// ==============================
// تأثير ظهور العناصر أثناء السكرول
// ==============================

const cards = document.querySelectorAll(
    ".product-card, .football-card, .contact-box"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "0.6s ease";

    observer.observe(card);

});
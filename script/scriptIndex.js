    document.addEventListener("DOMContentLoaded", function () {
        const target = document.querySelector('.caixa-sobre .sobre-container .sobre-img');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Para animar só uma vez
                }
            });
        }, {
            threshold: 0.1 // Pode ajustar para mais ou menos visibilidade
        });

        if (target) {
            observer.observe(target);
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        const img1 = document.querySelector('.ministerio-img .img1');
        const img2 = document.querySelector('.ministerio-img .img2');

        const observerOptions = { threshold: 0.1 };

        const animateOnScroll = (element) => {
            if (!element) return;

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target); // Só anima uma vez
                    }
                });
            }, observerOptions);

            observer.observe(element);
        };

        animateOnScroll(img1);
        animateOnScroll(img2);
    });


   
    document.addEventListener("DOMContentLoaded", function () {
        const botao = document.querySelector('.botao-link-conecte');

        const observerOptions = { threshold: 0.1 };

        const animateOnScroll = (element) => {
            if (!element) return;

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target); // Anima só uma vez
                    }
                });
            }, observerOptions);

            observer.observe(element);
        };

        animateOnScroll(botao);
    });



    document.addEventListener("DOMContentLoaded", function () {
        const imagens = document.querySelectorAll('.horarios-img img');

        const observerOptions = { threshold: 0.1 };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // anima só uma vez
                }
            });
        }, observerOptions);

        imagens.forEach(img => observer.observe(img));
    });



    document.addEventListener("DOMContentLoaded", function () {
        const botaoHorarios = document.querySelector('.botao-link-horarios');

        const observerOptions = { threshold: 0.1 };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // anima só uma vez
                }
            });
        }, observerOptions);

        if (botaoHorarios) {
            observer.observe(botaoHorarios);
        }
    });



    document.addEventListener("DOMContentLoaded", function () {
        const imgEscola = document.querySelector('.escola-img .img-escola');

        const observerOptions = { threshold: 0.1 };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // anima só uma vez
                }
            });
        }, observerOptions);

        if (imgEscola) {
            observer.observe(imgEscola);
        }
    });



    document.addEventListener("DOMContentLoaded", function () {
        const botaoEscola = document.querySelector('.botao-link-escola');

        const observerOptions = { threshold: 0.1 };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // A animação acontece só uma vez
                }
            });
        }, observerOptions);

        if (botaoEscola) {
            observer.observe(botaoEscola);
        }
    });




 
        document.addEventListener("DOMContentLoaded", function () {
            const calendarioImg = document.querySelector('.calendario-img img');

            const observerOptions = { threshold: 0.1 };

            const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Só anima uma vez
                }
            });
            }, observerOptions);

            if (calendarioImg) {
            observer.observe(calendarioImg);
            }
        });



    document.addEventListener("DOMContentLoaded", function () {
        const botaoCalendario = document.querySelector('.botao-link-calendario');

        const observerOptions = { threshold: 0.1 };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Só anima uma vez
                }
            });
        }, observerOptions);

        if (botaoCalendario) {
            observer.observe(botaoCalendario);
        }
    });









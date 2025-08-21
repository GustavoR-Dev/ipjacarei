// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {

    // Elementos do DOM
    const form = document.getElementById('welcomeForm');
    const modal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close');
    const submitButton = document.querySelector('.submit-button');
    const buttonText = document.querySelector('.button-text');
    const buttonLoader = document.querySelector('.button-loader');

    // Configuração de validação
    const validators = {
        nome: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
            message: 'Nome deve conter apenas letras e ter pelo menos 2 caracteres'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Por favor, insira um e-mail válido'
        },
        telefone: {
            required: false,
            pattern: /^(\(\d{2}\)\s?)?\d{4,5}-?\d{4}$/,
            message: 'Formato: (11) 99999-9999 ou 11999999999'
        }
    };

    // Função para validar campo individual
    function validateField(fieldName, value) {
        const validator = validators[fieldName];
        if (!validator) return { isValid: true };

        if (validator.required && (!value || value.trim() === '')) {
            return { isValid: false, message: 'Este campo é obrigatório' };
        }
        if (!validator.required && (!value || value.trim() === '')) {
            return { isValid: true };
        }
        if (validator.minLength && value.length < validator.minLength) {
            return { isValid: false, message: validator.message };
        }
        if (validator.pattern && !validator.pattern.test(value)) {
            return { isValid: false, message: validator.message };
        }

        return { isValid: true };
    }

    // Mostrar erro
    function showError(fieldName, message) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + '-error');
        if (field) field.classList.add('error');
        if (errorElement) errorElement.textContent = message;
    }

    // Limpar erro
    function clearError(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + '-error');
        if (field) field.classList.remove('error');
        if (errorElement) errorElement.textContent = '';
    }

    // Validação em tempo real
    Object.keys(validators).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            field.addEventListener('blur', function() {
                const validation = validateField(fieldName, this.value);
                if (!validation.isValid) showError(fieldName, validation.message);
                else clearError(fieldName);
            });
            field.addEventListener('input', function() {
                if (field.classList.contains('error')) {
                    const validation = validateField(fieldName, this.value);
                    if (validation.isValid) clearError(fieldName);
                }
            });
        }
    });

    // Máscara de telefone
    const telefoneField = document.getElementById('telefone');
    if (telefoneField) {
        telefoneField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                if (value.length <= 2) {
                    value = value.replace(/(\d{0,2})/, '($1');
                } else if (value.length <= 6) {
                    value = value.replace(/(\d{2})(\d{0,4})/, '($1) $2');
                } else if (value.length <= 10) {
                    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                }
            }
            e.target.value = value;
        });
    }

    // Fechar modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (modal) modal.style.display = 'none';
        });
    }
    window.addEventListener('click', function(e) {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // Header animado
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            if (header) header.style.transform = 'translateY(-100%)';
        } else {
            if (header) header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Animações de entrada
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.section-header, .video-wrapper, .welcome-form, .footer-section').forEach(el => {
        observer.observe(el);
    });

    // Ajustes mobile
    if (window.innerWidth <= 768) {
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
    }

    // Asterisco campos obrigatórios
    document.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
        const label = document.querySelector(`label[for="${field.id}"]`);
        if (label && !label.textContent.includes('*')) {
            label.innerHTML += ' <span style="color: #ef4444;">*</span>';
        }
    });

    // Prevenção de spam
    let lastSubmitTime = 0;
    const SUBMIT_COOLDOWN = 5000;

    // Envio AJAX do formulário
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const now = Date.now();
            if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
                alert('Por favor, aguarde alguns segundos antes de enviar novamente.');
                return;
            }
            lastSubmitTime = now;

            // Validação do formulário
            let isFormValid = true;
            const formData = new FormData(form);
            Object.keys(validators).forEach(fieldName => {
                const value = formData.get(fieldName) || '';
                const validation = validateField(fieldName, value);
                if (!validation.isValid) {
                    showError(fieldName, validation.message);
                    isFormValid = false;
                } else {
                    clearError(fieldName);
                }
            });
            if (!isFormValid) return;

            // Ativa loader
            if (submitButton) submitButton.disabled = true;
            if (buttonText) buttonText.style.display = 'none';
            if (buttonLoader) buttonLoader.style.display = 'inline';

            try {
                const response = await fetch("api/salvar.php", { method: "POST", body: formData });
                const data = await response.json();

                if (data.success) {
                    form.reset();
                    if (modal) modal.style.display = 'block';
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert("Erro ao enviar os dados. Tente novamente.");
                console.error("Erro:", error);
            }

            // Reset loader
            if (submitButton) submitButton.disabled = false;
            if (buttonText) buttonText.style.display = 'inline';
            if (buttonLoader) buttonLoader.style.display = 'none';
        });
    }

    console.log('🎉 Página de boas-vindas carregada com sucesso!');
});



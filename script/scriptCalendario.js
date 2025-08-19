// --- SCRIPT DE AUTOMAÇÃO DO CALENDÁRIO DE EVENTOS ---

    // 1. LISTA DE EVENTOS (ÚNICO LUGAR PARA EDITAR )
    // Adicione, remova ou altere eventos aqui.
    // Formato da data: 'YYYY-MM-DD' (Ano-Mês-Dia).
    const eventos = [
        {
            titulo: "Congresso de Casais",
            data: "2025-06-14",
            dataCompleta: "Sábado, 14 de junho de 2025",
            local: "IP Jacareí, Rua Faria Lima, 375.",
            descricao: [
                "Família IP Jacareí, junte-se a nós para esse congresso incrível.",
                "Você casal não pode ficar de fora desse momento em que vocês serão edificados.",
                "Mal podemos esperar para ver você lá!"
            ],
            descricaoCurta: "Você casal não pode ficar de fora desse momento em que vocês serão edificados.",
            imagem: "./img/ip-img-calendario.jpg",
            linkInscricao: "https://docs.google.com/forms/d/e/1FAIpQLScZOZEzz33P9wNGUP48FnZGE2WAJGiaGV_UuWo9555UEn9UIw/viewform"
        },
        {
            titulo: "IP Integração",
            data: "2025-06-21",
            dataCompleta: "Sábado, 21 de junho de 2025",
            local: "IP Jacareí, Rua Faria Lima, 375.",
            descricao: [
                "Um café da manhã para integração de novos membros da IP Jacareí.",
                "Onde iremos apresentar a visão, história, líderes e ministérios."
            ],
            descricaoCurta: "Um café da manhã para integração de novos membros da IP Jacareí.",
            imagem: "./img/ip-img-calendario.jpg",
            linkInscricao: "#primeiros-passos"
        },
        {
            titulo: "Culto de Casais",
            data: "2025-08-23",
            dataCompleta: "Sábado, 23 de Agosto de 2025",
            local: "IP Jacareí, Rua Faria Lima, 375.",
            descricao: [
                "Culto de Casais para o casal ser edificado pela palavra de Deus."
            ],
            descricaoCurta: "Culto de Casais para o casal ser edificado pela palavra de Deus.",
            imagem: "./img/ip-img-calendario.jpg",
            linkInscricao: "#primeiros-passos"
        },
        {
            titulo: "Semana do Avivamento",
            data: "2025-09-14",
            dataCompleta: "14 a 21 de Setembro de 2025",
            local: "IP Jacareí, Rua Faria Lima, 375.",
            descricao: [
                "Uma semana de cultos todos os dias, com pastores, profetas, mestres, evangelistas, e apóstolos de todo o Mundo.",
                "Ministrando sobre avivamento."
            ],
            descricaoCurta: "Uma semana de cultos diários com ministros de todo o mundo sobre avivamento.",
            imagem: "./img/ip-img-calendario.jpg",
            linkInscricao: "#primeiros-passos"
        },
        {
            titulo: "Seminário de Casais",
            data: "2025-10-04",
            dataCompleta: "Sábado, 4 de Outubro de 2025",
            local: "IP Jacareí, Rua Faria Lima, 375.",
            descricao: [
                "Um seminário para você casal receber ainda mais do Senhor."
            ],
            descricaoCurta: "Um seminário para você casal receber ainda mais do Senhor.",
            imagem: "./img/ip-img-calendario.jpg",
            linkInscricao: "#primeiros-passos"
        },
        {
            titulo: "Conferência de Jovens",
            data: "2025-10-24",
            dataCompleta: "Sexta, 24 de Outubro de 2025",
            local: "IP Jacareí, Rua Faria Lima, 375.",
            descricao: [
                "Conferência de ativação para Jovens."
            ],
            descricaoCurta: "Conferência de ativação para Jovens.",
            imagem: "./img/ip-img-calendario.jpg",
            linkInscricao: "#primeiros-passos"
        }
    ];

    // 2. FUNÇÕES AUXILIARES
    function getEventosFuturos( ) {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0); // Zera a hora para comparar apenas a data

        return eventos
            .filter(evento => new Date(evento.data) >= hoje)
            .sort((a, b) => new Date(a.data) - new Date(b.data));
    }

    // 3. FUNÇÃO PARA ATUALIZAR A SEÇÃO "PRÓXIMO EVENTO"
    function atualizarSecaoProximoEvento(eventosFuturos) {
        const proximoEvento = eventosFuturos.length > 0 ? eventosFuturos[0] : null;
        const container = document.querySelector(".caixa-proximo-evento");

        if (proximoEvento) {
            const descricaoHTML = proximoEvento.descricao.map(p => `<p>${p}</p>`).join('');
            container.innerHTML = `
                <img src="${proximoEvento.imagem}" alt="Imagem do evento ${proximoEvento.titulo}"/>
                <div class="caixa-info-proximo">
                    <h1>${proximoEvento.titulo}</h1>
                    <h3>Faça sua inscrição e garanta seu ingresso</h3>
                    <p><strong>DATA</strong></p>
                    <p>${proximoEvento.dataCompleta}</p> </br>
                    <p><strong>Localização</strong></p>
                    <p>${proximoEvento.local}</p> </br> </br>
                    ${descricaoHTML}
                    <a class="botao-link-eventos" href="${proximoEvento.linkInscricao}">
                        Inscreva-se
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </a>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="caixa-info-proximo">
                    <h1>Nenhum evento futuro agendado</h1>
                    <p>Fique de olho em nossas redes para futuras atualizações!</p>
                </div>
            `;
        }
    }

    // 4. FUNÇÃO PARA ATUALIZAR A SEÇÃO "CALENDÁRIO ANUAL"
    function atualizarSecaoCalendarioAnual(eventosFuturos ) {
        const container = document.querySelector(".container-calendario");
        container.innerHTML = ''; // Limpa o container antes de adicionar os novos cards

        if (eventosFuturos.length > 0) {
            eventosFuturos.forEach(evento => {
                const cardHTML = `
                    <div class="caixa-integração">
                        <img src="${evento.imagem}" alt="Imagem do evento ${evento.titulo}" />
                        <h2>${evento.titulo}</h2>
                        <p>${evento.dataCompleta}</p>
                        <p>${evento.descricaoCurta}</p>
                        <a class="botao-link" href="${evento.linkInscricao}">
                            Inscreva-se
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </a>
                    </div>
                `;
                container.innerHTML += cardHTML;
            } );
        } else {
            // Opcional: mensagem se não houver eventos
            container.innerHTML = "<p style='color: white; text-align: center;'>Nenhum evento agendado no momento.</p>";
        }
    }

    // 5. EXECUÇÃO QUANDO A PÁGINA CARREGA
    document.addEventListener('DOMContentLoaded', () => {
        const eventosFuturos = getEventosFuturos();
        
        atualizarSecaoProximoEvento(eventosFuturos);
        atualizarSecaoCalendarioAnual(eventosFuturos);

        // Script do menu (já existente)
        const toggleBtn = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".menu");

        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    });
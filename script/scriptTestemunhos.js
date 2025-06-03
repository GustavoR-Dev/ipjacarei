    document.getElementById('toggleDropdown').addEventListener('click', function () {
        const menu = document.getElementById('dropdownMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Fecha dropdown se clicar fora
    document.addEventListener('click', function (e) {
        const dropdown = document.getElementById('dropdownMenu');
        const button = document.getElementById('toggleDropdown');
        if (!button.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });


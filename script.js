<script>
    // Автоматичне стилізування за допомогою JavaScript
    document.addEventListener("DOMContentLoaded", () => {
        document.body.style.backgroundColor = "#f0f4f8";
        document.body.style.fontFamily = "'Segoe UI', sans-serif";
        document.body.style.margin = "0";

        // Стилі для header і footer
        document.querySelectorAll("header, footer").forEach(el => {
            el.style.backgroundColor = "#003366";
            el.style.color = "#fff";
            el.style.textAlign = "center";
            el.style.padding = "1.5em 1em";
        });

        // Меню
        const nav = document.querySelector("nav");
        nav.style.backgroundColor = "#005b99";
        nav.style.textAlign = "center";
        nav.style.padding = "1em";

        document.querySelectorAll("nav a").forEach(a => {
            a.style.color = "white";
            a.style.textDecoration = "none";
            a.style.margin = "0 20px";
            a.style.fontWeight = "bold";
            a.style.transition = "color 0.3s";
            a.addEventListener("mouseover", () => a.style.color = "#ffcc00");
            a.addEventListener("mouseout", () => a.style.color = "white");
        });

        // Секції
        document.querySelectorAll("section").forEach(section => {
            section.style.padding = "3em 1em";
            section.style.backgroundColor = "#fff";
            section.style.margin = "1em auto";
            section.style.borderRadius = "12px";
            section.style.maxWidth = "900px";
            section.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
        });

        // Заголовки
        document.querySelectorAll("h2").forEach(h2 => {
            h2.style.color = "#660052";
        });

        // Форми
        document.querySelectorAll(".calculator input, .calculator select").forEach(input => {
            input.style.padding = "8px";
            input.style.margin = "5px 0";
            input.style.width = "100%";
            input.style.maxWidth = "300px";
            input.style.display = "block";
        });

        // Кнопка
        const button = document.querySelector(".calculator button");
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "#005b99";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "6px";
        button.style.cursor = "pointer";
        button.style.transition = "background-color 0.3s";
        button.addEventListener("mouseover", () => button.style.backgroundColor = "#003366");
        button.addEventListener("mouseout", () => button.style.backgroundColor = "#005b99");

        // Результат
        const result = document.querySelector(".result");
        result.style.marginTop = "15px";
        result.style.fontSize = "1.2em";
        result.style.color = "#007700";

        // Контейнер
        document.querySelectorAll(".container").forEach(container => {
            container.style.padding = "0 1em";
        });
    });
</script>

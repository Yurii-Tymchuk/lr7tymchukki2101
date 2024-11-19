const translations = {};

async function loadTranslations(language) {
    const response = await fetch(`locales/${language}.json`);
    translations[language] = await response.json();
}

async function updateContent(language) {
    if (!translations[language]) {
        await loadTranslations(language);
    }
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("description").textContent = translations[language].description;
}

document.getElementById("language-selector").addEventListener("change", (event) => {
    updateContent(event.target.value);
});

// Load default language
updateContent("en");

const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";
const input = document.querySelector("#search");
const btn = document.querySelector("#search-btn");
const msg = document.querySelector(".msg p");

btn.addEventListener("click", () => {
    console.log(input.value);
    const fetchMeaning = async () => {
        const Url = `${baseUrl}/${input.value}`;
        const response = await fetch(Url);
        const data = await response.json();
        console.log(data);

        const meaning = data[0].meanings[0];
        const definition = meaning.definitions[0].definition || "Not Available";
        const synonyms = meaning.synonyms[0] || "Not Available";
        const antonyms = meaning.antonyms[0] || "Not Available";

        msg.innerHTML = `1. <span class="label">Definition:</span><span class="content">  ${definition}</span><br>
        2. <span class="label">Synonyms:</span><span class="content">  ${synonyms}</span><br>
        3. <span class="label">Antonyms:</span><span class="content">  ${antonyms}</span>`;
    }
    fetchMeaning();
});


document.getElementById("findButton").onclick = function () {

    var typedText = document.getElementById("input").value;

    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim()
    }

    const sorted = alphabetize(typedText);

    let anagrams = [];

    words.forEach(function (word) {
        let wordSorted = alphabetize(word);

        if (wordSorted === sorted) {
            anagrams.push(word);
        }
    })


    let content = document.createElement("div");
    let textContent = document.createTextNode(anagrams);
    content.appendChild(textContent);
    document.getElementById("stuff").appendChild(content);

}
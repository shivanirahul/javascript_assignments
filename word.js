function countWord() {

    let text = document.getElementById("text").value.toLowerCase();
    let word = document.getElementById("word").value.toLowerCase();

    if (word == "") {
        alert("Please enter a search word");
        return;
    }

    let words = text.split(/\W+/);
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] == word) {
            count++;
        }
    }

    document.getElementById("result").innerHTML =
        "Occurrences of '" + word + "' = " + count;
}
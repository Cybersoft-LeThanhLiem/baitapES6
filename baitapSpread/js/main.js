let headingText = document.getElementsByClassName("heading")[0].innerHTML;

let headingChars = [...headingText].filter(c => c != ' ');

let innerSpans = "";
headingChars.forEach(c => {
    innerSpans += `<span>${c}</span>`;
});

document.getElementsByClassName("heading")[0].innerHTML = innerSpans;
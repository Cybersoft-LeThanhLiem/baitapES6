const average = (...marks) => marks.reduce((a, b) => a + b) / marks.length;
const getMark = (id) => Number(document.getElementById(id).value);

document.getElementById("btnKhoi1").addEventListener("click", () => {
    let toan = getMark("inpToan");
    let ly = getMark("inpLy");
    let hoa = getMark("inpHoa");
    document.getElementById("tbKhoi1").innerHTML = average(toan, ly, hoa).toFixed(2);
});

document.getElementById("btnKhoi2").addEventListener("click", () => {
    let van = getMark("inpVan");
    let su = getMark("inpSu");
    let dia = getMark("inpDia");
    let english = getMark("inpEnglish");
    document.getElementById("tbKhoi2").innerHTML = average(van, su, dia, english).toFixed(2);
});
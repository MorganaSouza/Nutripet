document.querySelector("#peso").addEventListener("input", calcularIMCC);
document.querySelector("#altura").addEventListener("input", calcularIMCC);
document.querySelector("#pesoUnidade").addEventListener("change", calcularIMCC);
document.querySelector("#alturaUnidade").addEventListener("change", calcularIMCC);
document.querySelector("#porte").addEventListener("change", calcularIMCC);

function calcularIMCC() {
    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value);
    let unidadePeso = document.querySelector("#pesoUnidade").value;
    let unidadeAltura = document.querySelector("#alturaUnidade").value;
    let porte = document.querySelector("#porte").value;
    let calcularIMCC = document.querySelector("#calcularIMCC");
    let mensagemDiv = document.querySelector("#mensagemResultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        calcularIMCC.textContent = "--";
        mensagemDiv.innerHTML = "";
        return;
    }

    if (unidadePeso === "g") peso /= 1000;
    if (unidadePeso === "lb") peso *= 0.453592;
    if (unidadePeso === "st") peso *= 6.35029;
    if (unidadeAltura === "cm") altura /= 100;

    let imcc = peso / (altura ** 2);

    if (porte === "grande") imcc *= 0.8;
    if (porte === "pequeno") imcc *= 1.1;

    let classificacao, faixaSaudavel;

    if (imcc < 11.7) {
        classificacao = "abaixo do peso";
        faixaSaudavel = "11.8 a 15";
    } else if (imcc >= 11.8 && imcc <= 15) {
        classificacao = "no peso ideal";
        faixaSaudavel = "11.8 a 15";
    } else if (imcc > 15 && imcc <= 18.6) {
        classificacao = "acima do peso";
        faixaSaudavel = "15.1 a 18.6";
    } else {
        classificacao = "obeso";
        faixaSaudavel = "acima de 18.7";
    }

    calcularIMCC.textContent = imcc.toFixed(2);

    mensagemDiv.innerHTML = `
        <p>Este IMCC sugere que seu cão pode estar <strong>${classificacao}</strong>.</p>
        <p>A estimativa do IMCC saudável para esta raça é de <strong>${faixaSaudavel}</strong> 🐶.</p>
        <p><strong>Lembre-se:</strong> este resultado é apenas uma orientação e você deve sempre consultar seu veterinário.</p>
    `;
}

function toggleInfo(id) {
    let info = document.getElementById(id);
    info.style.display = info.style.display === "block" ? "none" : "block";
}

function compartilhar() {
    alert("Função de compartilhar em desenvolvimento!");
}

function limpar() {
    location.reload();
}


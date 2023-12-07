// Keliling diketahui 3 sisi
function kelilingA() {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    const keliling = sideA + sideB + sideC;
    const resultElement = document.getElementById("result1");
    resultElement.innerHTML = `K = S1 + S2 + S3<br>K = ${sideA} + ${sideB} + ${sideC}<br>K = ${keliling}`;
};

// Luas diketahui alas dan tinggi
function luasB() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const luas = 1/2 * alas * tinggi;
    const resultElement = document.getElementById("result2");
    resultElement.innerHTML = `L = 1/2 x a x t<br>L = 1/2 x ${alas} x ${tinggi}<br>L = ${luas}`
}
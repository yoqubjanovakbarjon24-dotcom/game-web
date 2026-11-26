let tanlanganKategoriya = "Barchasi";

let oyna = document.getElementById("xabarOynasi");
let sarlavha = document.getElementById("xabarSarlavha");
let matn = document.getElementById("xabarMatn");

let kartalar = document.querySelectorAll(".oyin-karta");
let filtrTugmalari = document.querySelectorAll(".filtr-tugma");
let boshlashTugmalari = document.querySelectorAll(".oyin-boshlash");

for (let i = 0; i < boshlashTugmalari.length; i++) {
    boshlashTugmalari[i].addEventListener("click", function () {
        let nom = boshlashTugmalari[i].getAttribute("data-game");

        if (nom == "Iloncha sarguzashti") {
            sarlavha.textContent = "Iloncha sarguzashti";
            matn.textContent = "Bu o‘yin hozircha namuna.";
        } else if (nom == "Tezkor poyga") {
            sarlavha.textContent = "Tezkor poyga";
            matn.textContent = "Poyga o‘yini tanlandi!";
        } else if (nom == "Sehrli jumboq") {
            sarlavha.textContent = "Sehrli jumboq";
            matn.textContent = "Mantiqiy jumboq tanlandi!";
        } else {
            sarlavha.textContent = nom;
            matn.textContent = "Siz " + nom + " o‘yinini tanladingiz.";
        }

        oyna.classList.add("ochiq");
    });
}

for (let i = 0; i < filtrTugmalari.length; i++) {
    filtrTugmalari[i].addEventListener("click", function () {
        tanlanganKategoriya = filtrTugmalari[i].getAttribute("data-filter");

        for (let j = 0; j < filtrTugmalari.length; j++) {
            filtrTugmalari[j].classList.remove("faol");
        }

        filtrTugmalari[i].classList.add("faol");

        let korsatilgan = 0;

        for (let j = 0; j < kartalar.length; j++) {
            let kategoriya = kartalar[j].getAttribute("data-category");

            if (tanlanganKategoriya == "Barchasi" || kategoriya == tanlanganKategoriya) {
                kartalar[j].classList.remove("yashirin");
                korsatilgan++;
            } else {
                kartalar[j].classList.add("yashirin");
            }
        }

        document.getElementById("natijaXabari").textContent = korsatilgan + " ta o‘yin topildi.";
    });
}

document.getElementById("qidiruvTugma").addEventListener("click", function () {
    let qidiruv = document.getElementById("oyinQidiruv").value.toLowerCase();
    let topildi = 0;

    for (let i = 0; i < kartalar.length; i++) {
        let nom = kartalar[i].getAttribute("data-name");
        let kategoriya = kartalar[i].getAttribute("data-category");

        if (
            nom.includes(qidiruv) &&
            (tanlanganKategoriya == "Barchasi" || kategoriya == tanlanganKategoriya)
        ) {
            kartalar[i].classList.remove("yashirin");
            topildi++;
        } else {
            kartalar[i].classList.add("yashirin");
        }
    }

    if (topildi > 0) {
        document.getElementById("natijaXabari").textContent =
            topildi + " ta mos o‘yin topildi.";
    } else {
        document.getElementById("natijaXabari").textContent =
            "Bunday o‘yin topilmadi.";
    }
});
 
document.getElementById("xabarYopish").addEventListener("click", function () {
    oyna.classList.remove("ochiq");
});

oyna.addEventListener("click", function (event) {
    if (event.target == oyna) {
        oyna.classList.remove("ochiq");
    }
});

let umumiyOyinlar = 0;
let hisoblagich = 1;

while (hisoblagich <= boshlashTugmalari.length) {
    umumiyOyinlar++;
    hisoblagich++;
}

console.log("GameZone katalogidagi o‘yinlar: " + umumiyOyinlar);
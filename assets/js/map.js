const base_url = "/assets/json/data.json";
const olderStd = qs(".olderStd");
const showStudent = qs(".showStudent");

function qs(selector){
    const element = document.querySelector(selector);
    return element;
}

function qsAll(selector){
    const elements = document.querySelectorAll(selector);
    return elements;
}

function bindEvents(selector, eventType, cbFunction){
    const element = qs(selector);
    element.addEventListener(eventType, cbFunction);
}

async function getInfos(){
    const response = await fetch(base_url);
    const data = await response.json();
    return data.Ogrenciler;
}

async function showInfos(){
    const ogrenciler = await getInfos();

    const currentYear = new Date();
    const yeniDizi = ogrenciler.map(ogrenci => {
        return {
            adiSoyadi:ogrenci.adiSoyadi,
            yas:currentYear.getFullYear()-ogrenci.dogumYili
        }
    }).filter(ogrenci => ogrenci.yas > 22);
    // const yeniDizi = ogrenciler.map(ogrenci => {
    //     ogrenci.yas = currentYear.getFullYear() - ogrenci.dogumYili;
    //     return ogrenci;
    // }).filter(ogrenci => ogrenci.yas > 22);
    console.log(yeniDizi);

    olderStd.addEventListener("click", function(e){
        e.preventDefault();
   
        yeniDizi.forEach(ogrenci => {
            showStudent.innerHTML += `<li>${ogrenci.adiSoyadi} - ${ogrenci.yas}</li>`;
        })

    })
}

function init(){
    showInfos();
}

init();
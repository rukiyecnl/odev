const dizi = Array.from({length:5});
console.log(dizi);

const yeniDizi = dizi.map((eleman,index) => eleman = index+1);
console.log(yeniDizi);


const dizi2 = [10, "rukiye", "frontend", true, "rukiye"];

dizi2.forEach(eleman => console.log(eleman));

const yeni = dizi2.map(eleman => eleman = "hepsi böyle");
console.log(yeni);

const arananObj = dizi2.find(eleman => eleman == "rukiye")
console.log(arananObj);

const arananElemanlar = dizi2.filter(eleman => eleman == "rukiye");
console.log(arananElemanlar);

const urunler = [
    {
        adi:"bilgisayar",
        fiyat:38000
    },
    {
        adi:"ayakkabı",
        fiyat:5000
    },
    {
        adi:"telefon",
        fiyat:12000
    }
]

const arananUrunler = urunler.filter(urun => urun.fiyat < 10000);
console.log(arananUrunler);

fetch("/assets/json/data.json").then(r => r.json()).then(result => console.log(result));

async function getData(){
    const response = await fetch("/assets/json/data.json");
    const data =await response.json();
    return data;
}

async function init(){
    const data = await getData();
    // console.log(data);
    const bigStudents = data.Ogrenciler.filter(ogrenci => ogrenci.yas > 20);
    console.log(bigStudents);
}
// try {
//     const data = await getData();
//     console.log(data);
// } catch (e) {
//     console.log(error);
// }


init();

//  json a dogum yili ekle map ile kullaniciların yaslarının oldugu bir dizi olustur
// dogum yilindan yas hesapla zincir mantıgini kullan
// data.map().filter() seklinde zincir mantigi kullan 


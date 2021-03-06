/***
 number - исходное число
 decimals - количество знаков после разделителя
 dec_point - символ разделителя
 thousands_sep - разделитель тысячных
 ***/
var xx = new Array();
var lastOrgPay =0;
var sumPay = 0;

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                .toFixed(prec);
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
        .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }
    return s.join(dec);
}
function listClck(){
    //alert("OK!");
    var sI1=document.Test2.Item.selectedIndex;
    var sI2=document.Test2.Item.options[sI1].value;
    // alert(sI2)
    switch (Number(sI2)) {
        case 1: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 2: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 3: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 4: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 5: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 6: document.getElementById("label1").innerHTML="Укажите количество машино-мест:"; break;
        case 7: document.getElementById("label1").innerHTML="Укажите количество машино-мест:"; break;
        case 8: document.getElementById("label1").innerHTML="Укажите количество машино-мест:"; break;
        case 9: document.getElementById("label1").innerHTML="Укажите количество машино-мест:"; break;
        case 10: document.getElementById("label1").innerHTML="Укажите количество машино-мест:"; break;
        case 11: document.getElementById("label1").innerHTML="Укажите количество пассажиров:"; break;
        case 12: document.getElementById("label1").innerHTML="Укажите количество детей:"; break;
        case 13: document.getElementById("label1").innerHTML="Укажите количество учащихся:"; break;
        case 14: document.getElementById("label1").innerHTML="Укажите количество учащихся:"; break;
        case 15: document.getElementById("label1").innerHTML="Укажите количество мест:"; break;
        case 16: document.getElementById("label1").innerHTML="Укажите количество мест:"; break;
        case 17: document.getElementById("label1").innerHTML="Укажите количество мест:"; break;
        case 18: document.getElementById("label1").innerHTML="Укажите количество мест:"; break;
        case 19: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 20: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 21: document.getElementById("label1").innerHTML="Укажите количество мест:"; break;
        case 22: document.getElementById("label1").innerHTML="Укажите количество объектов:"; break;
        case 23: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 24: document.getElementById("label1").innerHTML="Укажите количество мест:"; break;
        case 25: document.getElementById("label1").innerHTML="Укажите общую площадь, м<sup>2</sup>:"; break;
        case 26: document.getElementById("label1").innerHTML="Укажите количество мест:"; break;
        case 27: document.getElementById("label1").innerHTML="Укажите количество мест:"; break;
        case 28: document.getElementById("label1").innerHTML="Укажите количество участников:"; break;

    }

}

function btnClick2()
{

    var sI=document.Test2.Item.selectedIndex;
    let a = [2.32,	0.92,	28.63,	15.09,	2.25,	750.97,	541.62,	121.84,	37.62,	378.25,	15.13,	31.16,	12.96,	2.2,	41.19,	11.18,	19.91,	32.63,	4.63,	3.03,	183.52,	238.31,	4.26,	90.08,	10.03,	304.05,	1.9,	160.62]

    var T=a[Number(sI)];

    var i0=document.Test2.v1.value.replace(",",".");

    document.getElementById("r0").innerHTML="Норматив накопления ТКО: "+number_format(T,2,',',' ')+" кг/год на единицу";
    document.getElementById("result1").innerHTML="Масса ТКО в месяц: "+number_format(((T/12)*i0)/1000,2,',',' ')+" тонн";
    document.getElementById("result2").innerHTML="<p>Платеж в месяц: "+number_format(((T/12)*i0)/1000*5895.11,2,',',' ')+" руб</p>"
    lastOrgPay = ((T/12)*i0)/1000*5895.11;
    document.getElementById("btnAdd").disabled=false;
  /*  var stcond1 = document.getElementById("btn1").style.display;
    if (stcond1 == "none") {
        document.getElementById("btn1").style.display=null;
    }*/
}

function btnClick3()
{
    let c = [33.1428571428571,	18.4,	66.5813953488372,	19.8552631578947,	75,	65.8745614035088,	73.0931174089069,	55.8899082568807,	156.75,	35.6503298774741,	72.0476190476191,	94.4242424242424,	117.818181818182,	27.5,	52.1392405063291,	101.636363636364,	14.2214285714286,	148.318181818182,	57.875,	101,	81.9285714285714,	28.6774969915764,	25.0588235294118,	28.5968253968254,	94.622641509434,	99.3627450980392,	63.3333333333333,	117.240875912409]
    var sIc=document.Test2.Item.selectedIndex;

    var T2=c[Number(sIc)];

    let a = [2.32,	0.92,	28.63,	15.09,	2.25,	750.97,	541.62,	121.84,	37.62,	378.25,	15.13,	31.16,	12.96,	2.2,	41.19,	11.18,	19.91,	32.63,	4.63,	3.03,	183.52,	238.31,	4.26,	90.08,	10.03,	304.05,	1.9,	160.62]

    var T=a[Number(sIc)];

    var k0=document.Test2.k1.value.replace(",",".");
    var k1=document.Test2.k2.value.replace(",",".");
    var k2=document.Test2.k3.value.replace(",",".");

    document.getElementById("rk1").innerHTML="Норматив накопления ТКО: "+number_format(T, 2, ',', ' ')+" кг/год на единицу";
    document.getElementById("rk2").innerHTML="Норматив накопления ТКО: "+number_format(T/T2, 2, ',', ' ')+" м<sup>3</sup>/год на единицу";
    document.getElementById("rk3").innerHTML="Плотность ТКО: "+number_format(T2,2,","," ")+" кг/м<sup>3</sup>";
    document.getElementById("rk4").innerHTML="Тариф регоператора: 5 895,11 руб/тонна";
    document.getElementById("rk5").innerHTML="Объем ТКО в месяц: "+number_format(k0*k1*k2, 2, ',', ' ')+" м<sup>3</sup>";
    document.getElementById("rk6").innerHTML="Масса ТКО в месяц: "+number_format(T2*k0*k1*k2/1000, 2, ',', ' ')+" тонн";
    document.getElementById("rk7").innerHTML="Платеж в месяц: "+number_format(T2*k0*k1*k2*5.89511, 2, ',', ' ')+" руб";


    document.getElementById("normk").innerHTML="<p>Плотность мусора: "+number_format(T, 2, ',', ' ')+" кг/м<sup>3</sup></p>" +
        "<p>Количество ТКО в месяц, т: "+number_format(T*k0*k1*k2/1000, 2, ',', ' ')+"</p>";

    document.getElementById("resultk1").innerHTML="Тариф: "+number_format(T*k0*k1*k2*5.89511, 2, ',', ' ')+" за весь период";
    var txtk = "";
    for (let i = 1; i <= k2; i++) {
        txtk = txtk + "<p>Тариф за " + String(i) + " месяц: "+ number_format(T*k0*k1*5.89511, 2, ',', ' ')+"</p>"
    }
    document.getElementById("resultk2").innerHTML="<p>Тариф по месяцам:</p>"+txtk;

}
function btnaddToLst() {
    var mUnit = ["м<sup>2</sup>",
        "м<sup>2</sup>",
        "м<sup>2</sup>",
        "м<sup>2</sup>",
        "м<sup>2</sup>",
        "машино-мест",
        "машино-мест",
        "машино-мест",
        "машино-мест",
        "машино-мест",
        "пассажиров",
        "детей",
        "учащихся",
        "учащихся",
        "мест",
        "мест",
        "мест",
        "мест",
        "м<sup>2</sup>",
        "м<sup>2</sup>",
        "мест",
        "объектов",
        "м<sup>2</sup>",
        "мест",
        "м<sup>2</sup>",
        "мест",
        "мест",
        "участников"]
    var stcond1 = document.getElementById("r3").style.display;
    if (stcond1 == "none") {
        document.getElementById("r3").style.display=null;
    }
    var stcond2 = document.getElementById("r2.9").style.display;
    if (stcond2 == "none") {
        document.getElementById("r2.9").style.display=null;
    }
    var sI01=document.Test2.Item.selectedIndex;
    var sI02=document.Test2.Item.options[sI01].text;
    // вставляем строку данных (div)
    var divRow = document.createElement("div");
    // ищем элемент, после которого надо вставить строку
    var divContainer = document.getElementById("papa");
    var lastDiv = divContainer.lastChild;
    divContainer.insertBefore(divRow, lastDiv.nextSibling)
    divRow.className="row";
    divRow.id="r"+String(xx.length+4);

    xx.push({
        0: sI02,
        1: mUnit[sI01]+":<br> "+number_format(Number(document.getElementById("v1").value),2,",", " "),
        2: document.getElementById("result1").innerHTML.replace("Масса ТКО в месяц: ",""),
        3: document.getElementById("r0").innerHTML.replace("Норматив накопления ТКО: ",""),
        4: "5 895,11 руб/тонна",
        5: document.getElementById("result2").innerHTML.replace("Платеж в месяц: ","")
    });
    //вставляем div-колонки
    for (i=0; i<6; i++){
        var divCol = document.createElement("div");
        if (divRow.lastChild !== null) {
            divRow.insertBefore(divCol, divRow.lastChild.nextSibling);
        } else {
            divRow.insertBefore(divCol, divRow.lastChild);
        }

        divCol.className="col border";
        divCol.id=divRow.id+"i"+String(i);
        divCol.innerHTML=xx[xx.length-1][i];
    }
    sumPay = sumPay+lastOrgPay;
    // ищем строку суммы. Если есть - то удаляем. Если нет - то ничего не делаем, она создастся заново
    if (document.getElementById("rSumi0") !== null) {
        var node = document.querySelector('#rSumi0');
        node.parentNode.removeChild(node);
    }
    var sumDiv = document.createElement("div")
    divContainer.insertBefore(sumDiv, divRow.nextSibling);
    sumDiv.className="row text-right font-weight-bold";
    sumDiv.id="rSum";

    for (i=0; i<6; i++){
        divCol = document.createElement("div");
        if (sumDiv.lastChild !== null) {
            sumDiv.insertBefore(divCol, sumDiv.lastChild.nextSibling);
        } else {
            sumDiv.insertBefore(divCol, sumDiv.lastChild);
        }

        divCol.className="col mb-3";
        divCol.id=sumDiv.id+"i"+String(i);
        if (i=6) {
            divCol.innerHTML="Итого: "+number_format(sumPay,2,","," ")+" руб";
        }
    }
    document.getElementById("r3").scrollIntoView(true);
}
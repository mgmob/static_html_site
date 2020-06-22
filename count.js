/***
 number - исходное число
 decimals - количество знаков после разделителя
 dec_point - символ разделителя
 thousands_sep - разделитель тысячных
 ***/
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
        case 1:
            document.getElementById("label1").innerHTML="Укажите общую площадь:";
            break;
        case 2:
            document.getElementById("label1").innerHTML="Укажите общую площадь:";
            break;
        case 3:
            document.getElementById("label1").innerHTML="Укажите общую площадь:";
            break;
        case 4:
            document.getElementById("label1").innerHTML="Укажите общую площадь:";
            break;
        case 5:
            document.getElementById("label1").innerHTML="Укажите количество машино-мест:";
            break;
        case 6:
            document.getElementById("label1").innerHTML="Укажите количество машино-мест:";
            break;
        case 7:
            document.getElementById("label1").innerHTML="Укажите количество машино-мест:";
            break;
        case 8:
            document.getElementById("label1").innerHTML="Укажите количество машино-мест:";
            break;
        case 9:
            document.getElementById("label1").innerHTML="Укажите количество машино-мест:";
            break;
        case 10:
            document.getElementById("label1").innerHTML="Укажите количество пассажиров:";
            break;
        case 11:
            document.getElementById("label1").innerHTML="Укажите количество детей:";
            break;
        case 12:
            document.getElementById("label1").innerHTML="Укажите количество учащихся:";
            break;
        case 13:
            document.getElementById("label1").innerHTML="Укажите количество учащихся:";
            break;
        case 14:
            document.getElementById("label1").innerHTML="Укажите количество мест:";
            break;
        case 15:
            document.getElementById("label1").innerHTML="Укажите количество мест:";
            break;
        case 16:
            document.getElementById("label1").innerHTML="Укажите количество мест:";
            break;
        case 17:
            document.getElementById("label1").innerHTML="Укажите общую площадь:";
            break;
        case 18:
            document.getElementById("label1").innerHTML="Укажите общую площадь:";
            break;
        case 19:
            document.getElementById("label1").innerHTML="Укажите общую площадь:";
            break;
        case 20:
            document.getElementById("label1").innerHTML="Укажите количество мест:";
            break;
        case 21:
            document.getElementById("label1").innerHTML="Укажите общую площадь:";
            break;
        case 22:
            document.getElementById("label1").innerHTML="Укажите количество мест:";
            break;
        case 23:
            document.getElementById("label1").innerHTML="Укажите количество мест:";
            break;
        case 24:
            document.getElementById("label1").innerHTML="Укажите количество мест:";
            break;
        case 25:
            document.getElementById("label1").innerHTML="Укажите количество участников:";
            break;
    }

}

function btnClick2()
{

    var sI=document.Test2.Item.selectedIndex;
    var a = [2.32, 	25.17, 	17.47, 	2.25, 	750.97, 	541.62, 	121.84, 	37.62, 	378.25, 	15.13, 	31.16, 	12.96, 	2.2, 	41.19, 	11.18, 	19.91, 	33.7, 	4.63, 	3.03, 	183.52, 	4.26, 	90.08, 	304.05, 	1.9, 	160.62];

    var T=a[Number(sI)];

    document.getElementById("norm").innerHTML="Норматив потребления "+number_format(T, 2, ',', ' ')+" кг/год на единицу";
    var i0=document.Test2.v1.value;
    var i1=document.Test2.v2.value;
    document.getElementById("result1").innerHTML="Тариф: "+number_format((T/12)*i0*i1*5.89511,2,',',' ')+" за период";
    var txt1 = "";
    for (let i = 1; i <= i1; i++) {
        txt1 = txt1 + "<p>Тариф за " + String(i) + " месяц: "+ number_format((T/12)*i0*5.89511, 2, ',', ' ')+"</p>"
    }
    document.getElementById("result2").innerHTML="<p>Тариф по месяцам</p>"+txt1

}

function btnClick3()
{
    var c = [33.1428571428571, 	66.2368421052632, 	27.7301587301587, 	75, 	65.8745614035088, 	73.0931174089069, 	55.8899082568807, 	156.75, 	35.6503298774741, 	72.0476190476191, 	94.4242424242424, 	117.818181818182, 	27.5, 	52.1392405063291, 	101.636363636364, 	14.2214285714286, 	124.814814814815, 	57.875, 	101, 	81.9285714285714, 	25.0588235294118, 	28.5968253968254, 	99.3627450980392, 	63.3333333333333, 	117.240875912409]
    var sIc=document.Test2.Item.selectedIndex;

    var T=c[Number(sIc)];

    var k0=document.Test2.k1.value;
    var k1=document.Test2.k2.value;
    var k2=document.Test2.k3.value;

    document.getElementById("normk").innerHTML="<p>Плотность мусора: "+number_format(T, 2, ',', ' ')+" кг/м<sup>3</sup></p>" +
        "<p>Количество ТКО в месяц, т: "+number_format(T*k0*k1*k2/1000, 2, ',', ' ')+"</p>";

    document.getElementById("resultk1").innerHTML="Тариф: "+number_format(T*k0*k1*k2*5.89511, 2, ',', ' ')+" за весь период";
    var txtk = "";
    for (let i = 1; i <= k2; i++) {
        txtk = txtk + "<p>Тариф за " + String(i) + " месяц: "+ number_format(T*k0*k1*5.89511, 2, ',', ' ')+"</p>"
    }
    document.getElementById("resultk2").innerHTML="<p>Тариф по месяцам:</p>"+txtk

}
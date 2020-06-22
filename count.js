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

    document.getElementById("norm").innerHTML="Норматив потребления "+String(T)+" кг/год на единицу";
    var i0=document.Test2.v1.value;
    var i1=document.Test2.v2.value;
    document.getElementById("result1").innerHTML="Тариф: "+String((T/12)*i0*i1*5.89511)+" за период";
    var txt1 = "";
    for (let i = 1; i <= i1; i++) {
        txt1 = txt1 + "<p>Тариф за " + String(i) + " месяц: "+ String((T/12)*i0*5.89511)+"</p>"
    }
    document.getElementById("result2").innerHTML="<p>Тариф по месяцам</p>"+txt1

}
/*****************TOTAL PRICE*************/
var T=[1,2,3,4];
document.getElementById("total").value="0 DT";
for (let i of T){
    var value = Number(document.getElementById(`inp${i}`).value);
    document.getElementById("total").value=`${Number(document.getElementById("total").value.slice(0,document.getElementById("total").value.length - 2)) + Number(document.getElementById(`price${i}`).innerHTML.slice(0,document.getElementById(`price${i}`).innerHTML.length - 2))*value} DT`;
}

function sumPrice(){
    document.getElementById("total").value="0 DT";
    for (let i of T){
        if(typeof(i) === "undefined"){continue}
        else {
            var value = Number(document.getElementById(`inp${i}`).value);
            document.getElementById("total").value=`${Number(document.getElementById("total").value.slice(0,document.getElementById("total").value.length - 2)) + Number(document.getElementById(`price${i}`).innerHTML.slice(0,document.getElementById(`price${i}`).innerHTML.length - 2))*value} DT`;
        }    
    }
}


/*****************LIKE*************/

function redColor(x) {
    if (document.getElementById(x).style.color == "red") {
        document.getElementById(x).style.color = "black";
    }
    else {
        document.getElementById(x).style.color = "red";
    }
}

/*****************CLOSE*************/

function closeItem(x,y){
    delete T[Number(x.slice(x.length-1))-1];
    sumPrice();
    document.getElementById(x).remove();   
}

/*****************SUBSTRACTION*************/
function subItem(x){
    var value = parseInt(document.getElementById(x).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value>0){
        value--;
        document.getElementById(x).value = value;
    }
}

/*****************ADDITION*************/
function addItem(x){
    var value = parseInt(document.getElementById(x).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value<10){
        value++;
        document.getElementById(x).value = value;
    }
    else{
        alert("You have the maximum number of items");
    }
}


function buttonClicked(){
    if(document.getElementById("qone1").checked == true){
        alert('radio 1')
    }
    else if(document.getElementById("qone2").checked == true){
        alert('radio 2')
    }
    else if(document.getElementById("qone3").checked == true){
        alert('radio 3')
    }
}

function changeColor(active, na1, na2){
    document.getElementById(active).style.color = "red";
    document.getElementById(na1).style.color = "white";
    document.getElementById(na2).style.color = "white";
}
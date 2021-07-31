function compute()
{
    var principal = document.getElementById("principal");

    if(principal.value > 0 && principal.value != ""){
        document.getElementById("resultText").hidden=false
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal.value * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("amount").innerText = principal.value
        document.getElementById("interest").innerText = rate
        document.getElementById("result").innerText = interest.toString();
        document.getElementById("year").innerText = year;
    }else{
        alert("Enter a positive number");
        principal.focus();
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
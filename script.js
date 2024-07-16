function emi(p,r,n){
    let num1 = p
    let num2 = r*0.01*p
    let num3 = n
    let num4 = num1+num2
    let ans = num4/num3
    
    
    return ans;
}


function get(){
    let inpamount = document.getElementById("inpamount").value;
    let inprate = document.getElementById("inprate").value;
    let inpmonth = document.getElementById("inpmonth").value;
    
    if (inpamount,inpmonth,inprate == ""){
        alert("please fill it");
    }else{
    
        document.getElementById("show").innerText = "your Monthy EMI  is "+ emi(parseInt(inpamount),parseInt(inprate),parseInt(inpmonth));

    }

    
}


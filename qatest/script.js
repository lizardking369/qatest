document.getElementById("mainbutton").addEventListener("click",color);


function print(){
    let filledname = document.getElementById("nameinput").value;
    let filledsecondname= document.getElementById("secondnameinput").value;
    let filledage = document.getElementById("ageinput").value;
    if(filledname!=""&&filledsecondname!=""&&filledage!=""){
        document.getElementById("inputedInformation").innerHTML="სახელი:"+filledname+" გვარი:"+filledsecondname+" ასაკი:"+filledage;
    }else{
        document.getElementById("inputedInformation").innerHTML="მოგვაწოდეთ სრულყოფილი ინფორმაცია";
    }
    
    
}

function change(){
    document.getElementById("mainbutton").innerHTML="გაგზავნილია";
    document.getElementById("mainbutton").style.backgroundColor="green";
}
function color(){
    document.getElementById("mainbutton").style.color="blue";
}
function restart(){
    if( document.getElementById("nameinput").value===""){
        alert("შეავსე სახელის ველი");
       
    }else if(document.getElementById("secondnameinput").value==""){
        alert("შეავსე გვარის ველი");
    }else if(document.getElementById("ageinput").value==""){
        alert("შეავსე ასაკის ველი");
    }
}
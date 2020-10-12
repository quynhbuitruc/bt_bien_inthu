function display() {
    let Receiver = document.getElementById("receiver").value;
    let Date = document.getElementById("date").value;
    let Place = document.getElementById("address").value;
    let Hienthi1 = Receiver +"" + "thương nhớ,";
    let Hienthi2 = document.getElementById("ndung").innerText;
    let Hienthi3 = Place + "," + Date;
    document.getElementById("hienthi1").innerHTML = Hienthi1;
    document.getElementById("hienthi2").innerHTML = Hienthi2;
    document.getElementById("hienthi3").innerHTML = Hienthi3;
}
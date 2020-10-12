function display() {
    let Receiver = document.getElementById("receiver").value;
    let Date = document.getElementById("date").value;
    let Place = document.getElementById("address").value;
    document.getElementById("hienthi 1").innerHTML = Receiver + "thương nhớ,"
    document.getElementById("hienthi 2").innerHTML = document.getElementById("ndung").value
    document.getElementById("hienthi 3").innerHTML = Place + "," + Date;
}
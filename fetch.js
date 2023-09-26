function loadChats(){
    var result;
    fetch("../php/loadChats.php", { method: "POST"})
    .then(res => res.text())
    .then(txt => result=txt)
    .catch(err => console.error(err));
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(result);
    }, 200);
  });
}
function loadMessages(czat){
    var result;
    document.getElementsByName("czat")[0].value=czat;
    var data = new FormData(document.getElementById("buffer"));
    fetch("../php/loadMessages.php", { method: "POST", body: data})
    .then(res => res.text())
    .then(txt => result=txt)
    .catch(err => console.error(err));
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(result);
    }, 200);
  });
}
function loadUsers(){
    var result;
    fetch("../php/loadUsers.php", { method: "POST"})
    .then(res => res.text())
    .then(txt => result=txt)
    .catch(err => console.error(err));
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(result);
    }, 200);
  });
}
function sendMessages(wyslal, czat, wiadomosc){
    var result;
    document.getElementsByName("wyslal")[0].value=wyslal;
    document.getElementsByName("czat")[0].value=czat;
    document.getElementsByName("wiadomosc")[0].value=wiadomosc;
    var data = new FormData(document.getElementById("buffer"));
    fetch("../php/sendMessages.php", { method: "POST", body: data})
    .then(res => res.text())
    .then(txt => result=txt)
    .catch(err => console.error(err));
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(result);
    }, 200);
  });
}

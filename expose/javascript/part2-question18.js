function def(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(def, 1000);
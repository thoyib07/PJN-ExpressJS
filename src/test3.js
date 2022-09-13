function highestTopSpeed(data) {  
    const arrSpeed = data.split(",");
    var  dataSpeed = [];
    for (let idx = 0; idx < arrSpeed.length; idx++) {
        const el = arrSpeed[idx].split(":");
        if (el.length > 1) {
            const speed = el[1].split(" ");
            dataSpeed.push(speed[0]);
        }
    }
    let topSpeed = 0;
    for (let idx = 0; idx < dataSpeed.length; idx++) {
        if (topSpeed < dataSpeed[idx]) {
            topSpeed = dataSpeed[idx]
        }
    }
    if (topSpeed <= 0) {
        return "NoData"
    } else {
        return topSpeed;
    }
}   
  
console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));  
console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));  
console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h')); 
console.log(highestTopSpeed(''));
function multiplyNumeric(obj){
    for(let values in obj){
        if(typeof(obj[values]) === "number"){
            obj[values]*=2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "Im going to school"
};

multiplyNumeric(menu);
for(let property in menu){
    console.log(menu[property]);
}
var result = 0;

var number = 0;
var count = 0;

while(1){
    number = Math.random()*65535;

    if(number <= 206){
        break;
    }else{
        count++;
    }
}

print(count);

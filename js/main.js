var result = 0;

var number = 0; 
var count = 0; //回転数
var hitcount = 0; //初当たり回数
var totalcount = 0; //総回転数

var start = document.getElementById("start");
start.addEventListener("click",hitcounter)


function hitcounter(){
    count = 1;
    while(1){
        number = Math.random()*65535;
    
        // 206/65535 = 1/319
        if(number <= 206){
            //初当たり
            hitcount++;
            totalcount += count;
            break;
        }else{
            //はずれ
            count++;
        }
    }

    //結果表示
    var result = document.getElementById("result");
    result.innerHTML = "回転数:"+count+"回<br>総当たり回数:"+hitcount+"回<br>総回転数:"+totalcount+"回";
    
    console.log(count);
}


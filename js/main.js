var number = 0 //乱数用
var count = 0; //回転数
var hitcount = 0; //初当たり回数
var totalcount = 0; //総回転数

//大当たり確率(nomalHitRate/65535)
var nomalHitRate = 2060

var start = document.getElementById("start");
start.addEventListener("click",hitcounter)
var rotate = document.getElementById("rotate");
rotate.addEventListener("click",rotation)


//当たりまでやるやつ
function hitcounter(){
    count = 1;
    while(1){
        number = Math.random()*65535;
    
        // 当たり判定
        if(number <= nomalHitRate){
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

//1回転
function rotation(){
    count++;
    number = Math.random()*65535;
    
    var rotate_result = document.getElementById("rotate_result")
    
    // 当たり判定
    if(number <= nomalHitRate){
        //初当たり
        hitcount++;
        totalcount += count;

        rotate_result.innerHTML ="当たり！！！"
    }else{
        //はずれ
        rotate_result.innerHTML =""
    }
    //結果表示
    var result = document.getElementById("result");
    result.innerHTML = "回転数:"+count+"回<br>総当たり回数:"+hitcount+"回<br>総回転数:"+totalcount+"回";
}


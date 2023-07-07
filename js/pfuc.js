//スペック回り
var normalHitRate = 205; //通常時大当たり確率=(normalHitRate/65536)≒1/319.7
var rushHitRate = 1595; //RUSH時実質大当たり確率=(rushHitRate/65536)≒1/41.1
var rushFallRate = 426; //RUSH時転落小当たり確率=(rushFallRate/65536)≒1/153.7
var randomNumber = 65536;

//機種状態
var mode = "normal";

//抽せんの実装
var start_button = document.getElementById("start_button");
start_button.addEventListener("click",start);


//抽選
function start(){
    //抽せん番号
    var number = Math.random()*65536;

    if(mode == "normal"){
        //通常時抽選
        hitjudge(normalHitRate,number,0)

    }else if(mode=="rush"){
        //RUSH時抽選
    }
}

//大当たり判定
function hitjudge(number,hitrate,fallrate){
    if(number < hitrate){
        //大当り
        return 
    }else if(){
        //転落小当たり

    }else{
        //はずれ
    }
}
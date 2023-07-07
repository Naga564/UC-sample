//スペック回り
var normalHitRate = 205; //通常時大当たり確率=(normalHitRate/65536)≒1/319.7
var rushHitRate = 1595; //RUSH時実質大当たり確率=(rushHitRate/65536)≒1/41.1
var rushFallRate = 426; //RUSH時転落小当たり確率=(rushFallRate/65536)≒1/153.7

//使用変数
var randomNumber = 65536; //乱数総数

//機種状態
var mode = "normal"; //現在状態
var judge =""; //当たりの判定状態
var totalJackpot = 0; //総大当り回数
var rushJackpot = 0; //時短中大当り回数
var totalRollCount = 0; //総回転数
var rollCount = 0; //大当りからの回転数
// var profits = 0; //収支


//抽せんの実装
var start_button = document.getElementById("start_button");
start_button.addEventListener("click",start);

//各種表示(データランプ？)
var totalRollInformation = document.getElementById("totalRollCount");
totalRollInformation.innerHTML=totalRollCount;
var rollInformation = document.getElementById("rollCount");
rollInformation.innerHTML=rollCount;
var totalJackpotInformation= document.getElementById("totalJackpot");
totalJackpotInformation.innerHTML=totalJackpot;
var rushJackpotInformation= document.getElementById("rushJackpot");
rushJackpotInformation.innerHTML=rushJackpot;
//抽選
function start(){
    //抽せん番号
    var number = Math.random()*65536;

    if(mode == "normal"){
        //通常時抽選
        if(hitjudge(normalHitRate,number,0)=="jackpot"){
            //大当り処理
            //RUSH振り分け
        }

    }else if(mode== "rush"){
        //RUSH時抽選
    }else if(mode == "3000FEVER"){

    }
}

//大当たり判定
function hitjudge(number,hitrate,fallrate){
    if(number < hitrate){
        //大当り
        return "jackpot";
    }else if(randomNumber - fallrate < number){
        //転落小当たり
        // profits--;
        return "fall";

    }else{
        //はずれ
        // profits--;
        return "miss";
    }
}

//RUSH振り分け
function rushJudge(){

}
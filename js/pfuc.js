//スペック回り
var normalHitRate = 205; //通常時大当たり確率=(normalHitRate/65536)≒1/319.7
var rushHitRate = 1595; //RUSH時実質大当たり確率=(rushHitRate/65536)≒1/41.1
var rushFallRate = 426; //RUSH時転落小当たり確率=(rushFallRate/65536)≒1/153.7
var fever3000Rate = 20; //3000FEVER振り分け確率(%)
var rushRate = 40; //RUSH突入振り分け確率(%)
var fallcount = 255; //3000FEVER時の転落判定に使用

//使用変数
var randomNumber = 65536; //乱数総数
var rollResult = "";

//機種状態
var mode = "normal"; //現在状態
var judge =""; //当たりの判定状態
var totalJackpot = 0; //総大当り回数
var rushJackpot = 0; //時短中総大当り回数
var rushJackpotCount = 0; //当RUSH中大当り回数=継続数
var totalRollCount = 0; //総回転数
var rollCount = 0; //大当りからの回転数
var fallCounter = fallcount; //3000FEVER転落判定
// var profits = 0; //収支


//抽せんの実装
var start_button = document.getElementById("start_button");
start_button.addEventListener("click", start);

//各種表示(データランプ？)


//現在状態




//抽選
function start(){
    //抽せん番号
    var number = Math.random()*65536;

    //回転数更新
    totalRollCount++;
    rollCount++;

    if(mode == "normal"){
        //通常時抽選
        if(hitjudge(number,normalHitRate,0)=="jackpot"){
            //大当り処理
            totalJackpot++;

            //RUSH振り分け
            rushJudge();
        }

    }else if(mode== "rush"){
        //RUSH時抽選
        var rollstatus = hitjudge(number,normalHitRate,rushFallRate);
        if(rollstatus == "jackpot"){
            //RUSH中大当り
            totalJackpot++;
            rushJackpot++;
            rushJackpotCount++;
            if(rushJackpotCount >= 3){
                mode = "HYPER";
            }
        }else if(rollstatus == "fall"){
            //転落小当たり
            mode = "normal";
            rushJackpotCount = 0;
        }
    }else if(mode == "3000FEVER"){
        //3000FEVER時抽選
        var rollstatus = hitjudge(number,normalHitRate,rushFallRate);
        if(rollstatus == "jackpot"){
            //3000FEVER中大当り
            totalJackpot++;
            rushJackpot++;
            rushJackpotCount++;
            mode = "rush";
        }else if(rollstatus == "fall"){
            //転落小当たり
            fallCounter--;
            if(fallCounter == 0){
                mode = "normal";
            }
        }
    }else if(mode == "HYPER"){
        //覚醒HYPERのとき
        var rollstatus = hitjudge(number,normalHitRate,rushFallRate);
        if(rollstatus == "jackpot"){
            //RUSH中大当り
            totalJackpot++;
            rushJackpot++;
            rushJackpotCount++;

        }else if(rollstatus == "fall"){
            //転落小当たり
            mode = "normal";
            rushJackpotCount = 0;
        }
    }
    //データを更新
    Getstatus();
}

//大当たり判定
function hitjudge(number,hitrate,fallrate){

    rollResult="抽選結果：";
    if(number < hitrate){
        //大当り
        console.log("大当り");
        rollResult+="大当り!";
        rollCount = 0;
        return "jackpot";
    }else if(randomNumber - fallrate < number){
        //転落小当たり
        // profits--;
        rollResult+="転落...";
        return "fall";


    }else{
        //はずれ
        // profits--;
        console.log("はずれ");
        rollResult+="はずれ";
        return "miss";
    }
}

//RUSH振り分け
function rushJudge(){
    var rushJudge = Math.random()*100;

    if(rushJudge < fever3000Rate){
        //3000FEVER振り分け
        mode = "3000FEVER";
        rushJackpotCount++;

    }else if(rushJudge < fever3000Rate + rushRate){
        //RUSH振り分け
        mode = "rush";
        rushJackpotCount++;
    }
}

//状態表示
function Getstatus(){

    var statusInformation = document.getElementById("status");
    var rollResultInformation = document.getElementById("rollResult");
    //現在のモード表示
    var message = "状態：";
    if(mode == "normal"){
        message += "通常";
    }else if(mode == "rush"){
        message += "RUSH中! "+ rushJackpotCount +"連中!";
    }else if(mode == "HYPER"){
        message += "覚醒HYPER!!!!! "+ rushJackpotCount +"連中!";
    }else if(mode == "3000FEVER"){
        message += "3000FEVER!!! "+ rushJackpotCount +"連中!";
    }
    statusInformation.innerHTML = message;
    rollResultInformation.innerHTML = rollResult;
    //console.log(rollResult);

    //データランプ
    var totalRollInformation = document.getElementById("totalRollCount");
    totalRollInformation.innerHTML=totalRollCount;
    var rollInformation = document.getElementById("rollCount");
    rollInformation.innerHTML=rollCount;
    var totalJackpotInformation= document.getElementById("totalJackpot");
    totalJackpotInformation.innerHTML=totalJackpot;
    var rushJackpotInformation= document.getElementById("rushJackpot");
    rushJackpotInformation.innerHTML=rushJackpot;

    console.log(mode);
}
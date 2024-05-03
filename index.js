function checkClick(){
    firstTeamname.textContent = firstTeam.value;
    firstWin.textContent = firstTeamWin.value;
    firstLose.textContent = firstTeamLose.value;
    firstDraw.textContent = firstTeamDraw.value;
    firstGameText.textContent = parseInt(firstTeamWin.value) +  parseInt(firstTeamLose.value) + parseInt(firstTeamDraw.value);
    firstPoint.textContent = parseInt(firstTeamWin.value)*3.0 + parseInt(firstTeamDraw.value);
    
    secondTeamname.textContent = secondTeam.value;
    secondWin.textContent = secondTeamWin.value;
    secondLose.textContent = secondTeamLose.value;
    secondDraw.textContent = secondTeamDraw.value;
    secondGameText.textContent = parseInt(secondTeamWin.value) +  parseInt(secondTeamLose.value) + parseInt(secondTeamDraw.value);
    secondPoint.textContent = parseInt(secondTeamWin.value)*3.0 + parseInt(secondTeamDraw.value);

    thirdTeamname.textContent = thirdTeam.value;
    thirdWin.textContent = thirdTeamWin.value;
    thirdLose.textContent = thirdTeamLose.value;
    thirdDraw.textContent = thirdTeamDraw.value;
    thirdGameText.textContent = parseInt(thirdTeamWin.value) +  parseInt(thirdTeamLose.value) + parseInt(thirdTeamDraw.value);
    thirdPoint.textContent = parseInt(thirdTeamWin.value)*3.0 + parseInt(thirdTeamDraw.value);

    forthTeamname.textContent = forthTeam.value;
    forthWin.textContent = forthTeamWin.value;
    forthLose.textContent = forthTeamLose.value;
    forthDraw.textContent = forthTeamDraw.value;
    forthGameText.textContent = parseInt(forthTeamWin.value) +  parseInt(forthTeamLose.value) + parseInt(forthTeamDraw.value);
    forthPoint.textContent = parseInt(forthTeamWin.value)*3.0 + parseInt(forthTeamDraw.value);

    fifthTeamname.textContent = fifthTeam.value;
    fifthWin.textContent = fifthTeamWin.value;
    fifthLose.textContent = fifthTeamLose.value;
    fifthDraw.textContent = fifthTeamDraw.value;
    fifthGameText.textContent = parseInt(fifthTeamWin.value) +  parseInt(fifthTeamLose.value) + parseInt(fifthTeamDraw.value);
    fifthPoint.textContent = parseInt(fifthTeamWin.value)*3.0 + parseInt(fifthTeamDraw.value);

    sixthTeamname.textContent = sixthTeam.value;
    sixthWin.textContent = sixthTeamWin.value;
    sixthLose.textContent = sixthTeamLose.value;
    sixthDraw.textContent = sixthTeamDraw.value;
    sixthGameText.textContent = parseInt(sixthTeamWin.value) +  parseInt(sixthTeamLose.value) + parseInt(sixthTeamDraw.value);
    sixthPoint.textContent = parseInt(sixthTeamWin.value)*3.0 + parseInt(sixthTeamDraw.value);

    seventhTeamname.textContent = seventhTeam.value;
    seventhWin.textContent = seventhTeamWin.value;
    seventhLose.textContent = seventhTeamLose.value;
    seventhDraw.textContent = seventhTeamDraw.value;
    seventhGameText.textContent = parseInt(seventhTeamWin.value) +  parseInt(seventhTeamLose.value) + parseInt(seventhTeamDraw.value);
    seventhPoint.textContent = parseInt(seventhTeamWin.value)*3.0 + parseInt(seventhTeamDraw.value);

    html2canvas(document.getElementById("target")).then(canvas => {
        document.body.appendChild(canvas)
        canvas.id = "canvas"
      });
}

function downloadClick(){
    var canvas = document.getElementById("canvas");
    const name = 'secondstandings.png';
    const a = document.createElement('a');

    a.href = canvas.toDataURL();
    a.download = name;
    a.click();
}

var today=new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();

var now = year +"年"+ month + "月" + day + "日時点";
document.getElementById("now").innerHTML = now;
  
  let firstTeam = document.getElementById('firstTeam');
  let firstTeamname = document.getElementById('firstTeamname');
  let secondTeam = document.getElementById('secondTeam');
  let secondTeamname = document.getElementById('secondTeamname');
  let thirdTeam = document.getElementById('thirdTeam');
  let thirdTeamname = document.getElementById('thirdTeamname');
  let forthTeam = document.getElementById('forthTeam');
  let forthTeamname = document.getElementById('forthTeamname');
  let fifthTeam = document.getElementById('fifthTeam');
  let fifthTeamname = document.getElementById('fifthTeamname');
  let sixthTeam = document.getElementById('sixthTeam');
  let sixthTeamname = document.getElementById('sixthTeamname');
  let seventhTeam = document.getElementById('seventhTeam');
  let seventhTeamname = document.getElementById('seventhTeamname');

  let firstWin = document.getElementById('firstWin');
  let firstTeamWin = document.getElementById('firstTeamWin');
  let firstLose = document.getElementById('firstLose');
  let firstTeamLose = document.getElementById('firstTeamLose');
  let firstDraw = document.getElementById('firstDraw');
  let firstTeamDraw = document.getElementById('firstTeamDraw');
  var firstGameText = document.getElementById('firstGameText');
  var firstPoint = document.getElementById('firstPoint');

  let secondWin = document.getElementById('secondWin');
  let secondTeamWin = document.getElementById('secondTeamWin');
  let secondLose = document.getElementById('secondLose');
  let secondTeamLose = document.getElementById('secondTeamLose');
  let secondDraw = document.getElementById('secondDraw');
  let secondTeamDraw = document.getElementById('secondTeamDraw');

  let thirdWin = document.getElementById('thirdWin');
  let thirdTeamWin = document.getElementById('thirdTeamWin');
  let thirdLose = document.getElementById('thirdLose');
  let thirdTeamLose = document.getElementById('thirdTeamLose');
  let thirdDraw = document.getElementById('thirdDraw');
  let thirdTeamDraw = document.getElementById('thirdTeamDraw');

  let forthWin = document.getElementById('forthWin');
  let forthTeamWin = document.getElementById('forthTeamWin');
  let forthLose = document.getElementById('forthLose');
  let forthTeamLose = document.getElementById('forthTeamLose');
  let forthDraw = document.getElementById('forthDraw');
  let forthTeamDraw = document.getElementById('forthTeamDraw');

  let fifthWin = document.getElementById('fifthWin');
  let fifthTeamWin = document.getElementById('fifthTeamWin');
  let fifthLose = document.getElementById('fifthLose');
  let fifthTeamLose = document.getElementById('fifthTeamLose');
  let fifthDraw = document.getElementById('fifthDraw');
  let fifthTeamDraw = document.getElementById('fifthTeamDraw');

  let sixthWin = document.getElementById('sixthWin');
  let sixthTeamWin = document.getElementById('sixthTeamWin');
  let sixthLose = document.getElementById('sixthLose');
  let sixthTeamLose = document.getElementById('sixthTeamLose');
  let sixthDraw = document.getElementById('sixthDraw');
  let sixthTeamDraw = document.getElementById('sixthTeamDraw');

  let seventhWin = document.getElementById('seventhWin');
  let seventhTeamWin = document.getElementById('seventhTeamWin');
  let seventhLose = document.getElementById('seventhLose');
  let seventhTeamLose = document.getElementById('seventhTeamLose');
  let seventhDraw = document.getElementById('seventhDraw');
  let seventhTeamDraw = document.getElementById('seventhTeamDraw');
  
  let checkButton = document.getElementById('checkButton');
  checkButton.addEventListener('click', checkClick);
  let downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', downloadClick);
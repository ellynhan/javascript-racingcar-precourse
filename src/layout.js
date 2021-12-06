export default class Layout{
  constructor() {
    this.countForm = document.getElementById('count-form');
    this.countH4 = document.getElementById('count-h4');
    this.resultH4 = document.getElementById('result-h4');
    this.app = document.getElementById('app');
  }

  hideForms() {
    this.countForm.style.visibility = 'hidden';
    this.countH4.style.visibility = 'hidden';
    this.resultH4.style.visibility = 'hidden';
  }

  showCountForm() {
    this.countForm.style.visibility = 'visible';
    this.countH4.style.visibility = 'visible';
  }

  showResultH4(){
    this.resultH4.style.visibility = 'visible';
  }

  printScores(currentScore) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = currentScore;
    this.app.appendChild(newDiv);
  }

  printWinners(winners) {
    const winnerDiv = document.createElement('div');
    const winnerList = document.createElement('span');
    winnerDiv.innerHTML = '최종 우승자: ';
    winnerList.setAttribute('id', 'racing-winners');
    winnerList.innerHTML = winners;
    winnerDiv.appendChild(winnerList);
    this.app.appendChild(winnerDiv);
  }
}
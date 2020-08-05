import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  playArea = Array.from(Array(8), () => new Array(8))

  columLetters = ['a','b','c','d','e','f','g','h']

  constructor() { }

  ngOnInit() {
    for(let i = 0; i <= 15; i++){
      if(i < 8){
        this.playArea[1][i] = 'p'
      }
      else{
        this.playArea[6][i-8] = 'p'
      }
    }
    this.playArea[0][4] = 'k'
    this.playArea[7][4] = 'k'

    this.playArea[0][3] = 'q'
    this.playArea[7][3] = 'q'

    this.playArea[0][2] = 'b'
    this.playArea[0][5] = 'b'
    this.playArea[7][2] = 'b'
    this.playArea[7][5] = 'b'

    this.playArea[0][1] = 't'
    this.playArea[0][6] = 't'
    this.playArea[7][1] = 't'
    this.playArea[7][6] = 't'

    this.playArea[0][0] = 'r'
    this.playArea[0][7] = 'r'
    this.playArea[7][0] = 'r'
    this.playArea[7][7] = 'r'
  }

  rowNumberTopDrift(rowNumber){
    return {'top': `calc((1.5vw) + (((100% - 3vw)/8)*${rowNumber}) - (((100% - 2vw)/8)/1.6) )`}
  }

  columnLetterLeftDrift(columnNumber){
    return {'left': `calc((1.5vw) + (((100% - 3vw)/8)*${columnNumber}) - (((100% - 2vw)/8)/1.6) )`}
  }

  columnLetterTag(letterNumber){
    return this.columLetters[letterNumber]
  }

  rowNumberTag(rowNumber){
    return 8 - rowNumber
  }

  lightOrDark(row,column){

    if((row+column)%2===0){
      return {'background-color': '#CFD8DC'}
    }
    else{
      return {'background-color': '#263238'}
    }
  }

  arrayLogger(){
    console.log(this.playArea)
  }

}

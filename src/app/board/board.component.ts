import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  playArea = [
    ['h','g','f','e','d','c','b','a'],
    ['h','g','f','e','d','c','b','a'],
    ['h','g','f','e','d','c','b','a'],
    ['h','g','f','e','d','c','b','a'],
    ['h','g','f','e','d','c','b','a'],
    ['h','g','f','e','d','c','b','a'],
    ['h','g','f','e','d','c','b','a'],
    ['h','g','f','e','d','c','b','a']
  ]

  constructor() { }

  ngOnInit() {
  }

  rowNumberTopDrift(rowNumber){
    return {'top': `calc((1.5vw) + (((100% - 3vw)/8)*${rowNumber}) - (((100% - 2vw)/8)/1.6) )`}
  }

  columnLetterLeftDrift(columnNumber){
    return {'left': `calc((1.5vw) + (((100% - 3vw)/8)*${columnNumber}) - (((100% - 2vw)/8)/1.6) )`}
  }

  lightOrDark(row,column){

    if((row+column)%2===0){
      return {'background-color': '#CFD8DC'}
    }
    else{
      return {'background-color': '#263238'}
    }
  }

}

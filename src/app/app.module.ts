import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PawnComponent } from './pieces/pawn/pawn.component';
import { KingComponent } from './pieces/king/king.component';
import { QueenComponent } from './pieces/queen/queen.component';
import { BishopComponent } from './pieces/bishop/bishop.component';
import { KnightComponent } from './pieces/knight/knight.component';
import { RookComponent } from './pieces/rook/rook.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PawnComponent,
    KingComponent,
    QueenComponent,
    BishopComponent,
    KnightComponent,
    RookComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

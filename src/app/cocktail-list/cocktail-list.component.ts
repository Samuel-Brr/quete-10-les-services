import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[] = []

  constructor(private cocktailService: CocktailService) {

    cocktailService.getCocktails
      .pipe(
        tap(cocktails => this.cocktails = cocktails)
      )
      .subscribe()

   }

  ngOnInit(): void {
    console.log("MA LISTE", this.cocktails)
  }

}

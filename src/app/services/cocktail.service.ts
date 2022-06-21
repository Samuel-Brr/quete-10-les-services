import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() {

    new Cocktail("Daiquiri", 15, "#"),
    new Cocktail("Mojito", 12, "#"),
    new Cocktail("Pinacolada", 16, "#"),
    new Cocktail("Ti punch", 9, "#")

   }

   get getCocktails(){
    return Cocktail.cocktails
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) {
   }

   get getCocktails(): Observable<Cocktail[]>{

    return this.http.get<Cocktail[]>("assets/cocktails.json")
      .pipe(
        map((res: any) => {
          res = res.payload;
          const cocktails = []
          for(const key in res){
            const name = res[key]._name;
            const price = res[key]._price;
            const img = res[key]._img;
            let cocktail = new Cocktail(name, price, img)
            cocktails.push(cocktail)
          }
          res = cocktails;
          return res
        }),
      )


   }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'requisicao-api-externa';

  public pokemons$: Observable<any>;

  constructor(private http: HttpClient) {
    this.pokemons$ = this.http.get(
      'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
    );
  }
}

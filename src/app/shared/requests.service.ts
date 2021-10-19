import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { genresRes, movieType } from './types/movieRes.interface';

@Injectable({
  providedIn: 'root'
})

export class RequestsService {

  constructor(
    private http: HttpClient
  ) { }

  // Type is getting inferred from declaration right?
  public movies = new Subject<movieType[]>();

  HttpGetMovies(
    genreId: number,
    key: string = environment.key,
    adultContent: boolean = true
  ) {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=${adultContent}&include_video=false&page=2&with_watch_monetization_types=flatrate&with_genres=${genreId}`)
      .pipe(
        map((res: genresRes) => {
          this.movies.next(res.results);
        })
      ).subscribe()
  }
}

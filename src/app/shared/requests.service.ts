import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService implements OnInit {

  key: string = '3ae490253ee322e21c4bc0d329e8e179'

  // Type is getting inferred from declaration right?
  public movies = new Subject<object[]>();

  // This is a genre list response from that idiotic API
  
  requests = [
    // Get movies by genre 
    'https://api.themoviedb.org/3/discover/movie?api_key=3ae490253ee322e21c4bc0d329e8e179&language=en-US&include_adult=true&include_video=false&page=2&with_watch_monetization_types=flatrate&with_genres=37',
    // Get images by movie ID // THIS BITCH DOES NOT REALLY WORK 
    'https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=3ae490253ee322e21c4bc0d329e8e179&language=en-U',
    // Get images by img_path or something // WORKS
    'https://image.tmdb.org/t/p/w500//t1KPGlW0UGd0m515LPQmk2F4nu1.jpg'

  ]

  async getMovies(
    genreId: number,
    key: string = '3ae490253ee322e21c4bc0d329e8e179',
    adultContent: boolean = false
  ) {
    // let promises: any[] = []
    await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=${adultContent}&include_video=false&page=2&with_watch_monetization_types=flatrate&with_genres=${genreId}`)
      .then(
        (res) => {
          res.json()
            .then(
              (jsonRes) => {
                // this.movies.next(jsonRes.results)
                jsonRes.results.forEach((el: any) => {
                  this.getPic(el.poster_path)
                    .then(
                      (res) => {
                        el.poster_path = res
                      })
                });
                this.movies.next(jsonRes.results)
                // console.log(jsonRes)
              }
            )
        })
  }

  async getPic(path: string, width: number = 500) {
    if (path !== null) {
      const res = await fetch(`https://image.tmdb.org/t/p/w${width}//${path}`)
      return res.url
    } else {
      return 'No Pic Found BIATCH'
    }

  }

  ngOnInit() { }

  constructor() { }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getQuery( query:string){
      const url=`https://api.spotify.com/v1/${query}`;

      const headers=new HttpHeaders({
          'Authorization': 'Bearer BQC8hQF42fkJeOWy6DG0ikSLr9xyv9_7QoD7ymTqrweHmPdJLjIGPt6OHKto2MaYNNRkTmM8mafUoDgYT_U'
      })

      return this.http.get(url,{ headers });
  }

  getNewRelease(){

      return this.getQuery('browse/new-releases?limit=50')
        .pipe( map( data=> data['albums'].items ));


  }

  getArtistas(busqueda:string){

      return this.getQuery(`search?q=${busqueda}&type=artist&limit=10`)
      .pipe( map( data=> data['artists'].items ));

  }

  getArtista(id){
      return this.getQuery(`artists/${ id }`);
      /*.pipe( map( data=> data['artists'].items ));*/
  }


  getTopTracks(id){
      return this.getQuery(`artists/${ id }/top-tracks?country=mx`)
        .pipe( map( data => data['tracks'] ));
  }
}

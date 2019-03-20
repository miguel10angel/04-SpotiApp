import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

    public artista:any={}
    public loading=true;
    public tracks:any[]=[];
  constructor(
                private route:ActivatedRoute,
                private spotify:SpotifyService
            ) {
      this.route.params.subscribe( params=>{
          this.getArtista(params["id"]);
          this.getTopTracks(params["id"]);
      })
  }

  ngOnInit() {
  }

  getArtista(id:string){
      this.spotify.getArtista(id)
      .subscribe(artista=>{
          this.artista=artista;
          this.loading=false;
      });
  }

  getTopTracks(id:string){
      this.spotify.getTopTracks(id)
      .subscribe((tracks:any)=>{
          this.tracks=tracks;
          console.log(tracks);
      });
  }
}

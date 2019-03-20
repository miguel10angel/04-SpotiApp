import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
//import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//    paises:any[]=[];
    nuevasCanciones:any[]=[];
    loading:Boolean;
    messageError:string;
    errorServicio:Boolean;

//private http:HttpClient ///poner en el Constructor
  constructor( private spotify:SpotifyService ) {
      /*console.log("Constructor del home hecho");
      this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe( (respuesta:any)=>{
            this.paises=respuesta;
            console.log(respuesta);
        })*/
        this.loading=true;
        this.spotify.getNewRelease().subscribe( ( data:any )=>{

                this.nuevasCanciones=data;
                console.log(this.nuevasCanciones);
                this.loading=false;
            }, (error)=>{
                this.loading=false;
                this.errorServicio=true;
                this.messageError=error.error.error.message;
            }
        )

  }

  ngOnInit() {
  }

}

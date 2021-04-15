import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ConsultanumRCService } from '../../servicesshared/consultanum-rc.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  respCR: any;
  reportes: any;
  comentarios: any;
  cardsSubscription: Subscription= new Subscription();;
  constructor(
    private consultaRC: ConsultanumRCService
  ) {
    //  this.consultaRC.consultanumRC().subscribe(data=>{
    //   console.log(data.Data.reportes), this.reportes=data.Data.reportes, this.comentarios= data.Data.comentarios
    //  });



    this.cardsSubscription=this.consultaRC.Respuesta.subscribe((value) => {
      if (value) {
        this.reportes = value.reportes;
        this.comentarios = value.comentarios
      }
    });



  }

  ngOnInit() {

   this.consultaRC.consultanumRC();
  }

  ngOnDestroy() {

    if(this.cardsSubscription){
      this.cardsSubscription.unsubscribe();
        }
  
  }

}

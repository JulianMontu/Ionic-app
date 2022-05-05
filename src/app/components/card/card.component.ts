import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() imagen: String;
  @Input() titulo: String;
  @Input() subtitulo: String;
  @Input() contenido: String;
  directIMG: string="../../../assets/images/";

  constructor() { }

  ngOnInit() {
    if(this.imagen){
      this.directIMG += this.imagen;
    }else{
      this.directIMG+="none.jpg"
    }
  }

}

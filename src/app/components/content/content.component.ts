import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function getContent() {
      return document.querySelector('ion-content');
    }
    function scrollToTop() {
      getContent().scrollToTop(500);
    }
    let buton=document.querySelector(".button")
    buton.addEventListener('click',function(){
      scrollToTop();
    })
  }

}

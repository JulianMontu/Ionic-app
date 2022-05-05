import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ContentComponent
  ],
  exports:[
    HeaderComponent,
    CardComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

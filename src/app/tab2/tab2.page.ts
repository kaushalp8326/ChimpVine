import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // ion-segment
  coursesOrGames: string;

  constructor() {}

  // Decides which ion-segment is selected by default
  ngOnInit() {
    this.coursesOrGames = 'courses';
  }

  // When selection of ion-segment changes
  segmentChanged(event: any){
    console.log('Segment changed', event);
  }

  mathCardClick(){
    console.log('Math clicked');
  }

  englishCardClick(){
    console.log('English clicked');
  }

  scienceCardClick(){
    console.log('Science clicked');
  }

  socialStudiesCardClick(){
    console.log('Social Studies clicked');
  }

  computerCardClick(){
    console.log('Computer clicked');
  }

  financeCardClick(){
    console.log('Finance clicked');
  }

  spanishCardClick(){
    console.log('Spanish clicked');
  }

}

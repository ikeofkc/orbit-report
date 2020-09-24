import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
     this.sourceList = [];
     this.displayList = [];
     let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

     window.fetch(satellitesUrl).then(function(response) {
        response.json().then(function(data) {


        // TODO: loop over satellites
         let satData = data.satellites;
         for (let i=0; i< satData.length; i++) {
           // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
           let satelliteObj = new Satellite(satData[i].name, satData[i].type, satData[i].launchDate, satData[i].orbitType, satData[i].operational);
           // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
           this.sourceList.push(satelliteObj);
          }
          this.displayList = this.sourceList.slice(0);
        }.bind(this));
     }.bind(this));
  }

  search(searchTerm: string): void {
   let matchingSatellites: Satellite[] = [];
   searchTerm = searchTerm.toLowerCase();
   for(let i=0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
         matchingSatellites.push(this.sourceList[i]);
      }
   }
   // assign this.displayList to be the array of matching satellites
   // this will cause Angular to re-make the table, but now only containing matches
   this.displayList = matchingSatellites;
  }

}

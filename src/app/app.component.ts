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
  constructor() {
   this.sourceList = [];
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

      }.bind(this));
   }.bind(this));

}
}

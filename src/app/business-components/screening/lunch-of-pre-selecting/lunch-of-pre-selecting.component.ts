import { Component, OnInit, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {NgbdSortableHeader, SortEvent} from './sortable.directive';

@Component({
  selector: 'app-lunch-of-pre-selecting',
  templateUrl: './lunch-of-pre-selecting.component.html',
  styleUrls: ['./lunch-of-pre-selecting.component.scss']
})
export class LunchOfPreSelectingComponent implements OnInit {
  uploadedCvs;
  progressValue = 0;
  numberOfPreselected=1;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log(this.progressValue);

  }
  onLunch(event) {
    console.log(event);
    this.getAllselectedCvs();
    
    console.log("nuuuumber of preselected  " + this.numberOfPreselected);
  }

  getAllselectedCvs() {
    this.http.get('http://localhost:3000/upload').subscribe(data => {
      console.log(data);
      
      this.uploadedCvs = data;
      console.log(this.uploadedCvs.length); 
      this.uploadedCvs.length=this.numberOfPreselected
      this.progressIncrease();
    })
  }



  progressIncrease() {

    while (this.progressValue < 100){
      this.progressValue += Math.floor(Math.random() * 100) + 1;;
      console.log(this.progressValue);
    }

    // if(this.progressValue<100){
    //   this.progressTime= setInterval(() => {          
    //    // this.progressValue += Math.floor(Math.random() * 100) + 1;;
    //    this.progressValue += 6;
    //            // console.log(this.uploadedCvs);
    //     console.log(this.progressValue);
    //    },this.uploadedCvs.length*10 );
    //  }else{
    //      clearInterval(this.progressTime);
    //      console.log("cleeeeeeeeeear");
    //    }

  }

  SelectNumberOfPreSelected(event){
    console.log(event.target.value);
    this.numberOfPreselected=event.target.value
    console.log("nuuuumber of preselected  " + this.numberOfPreselected);
    
  }








  // progressIncrease(){
  //   setTimeout(() => {
  //     if (this.progressValue === 100) {

  //       console.log("noooooooooooooooooooooooooooooooooooooooooooooooooooooo");
  //       return;

  //     } else {

  //       console.log(this.uploadedCvs);
  //       console.log(this.progressValue);
  //       const progressInterval = setInterval(() => {
  //         if (this.progressValue === 100) {
  //           clearInterval(progressInterval);
  //           // this.uploadFilesSimulator(index + 1);
  //           console.log("stooooooooooooooooop");

  //           // console.log(this.uploadedCvs);
  //           // console.log(this.progressValue);


  //         } else {
  //           this.progressValue += Math.floor(Math.random() * 100) + 1;;

  //           console.log(this.uploadedCvs);
  //           console.log(this.progressValue);
  //         }
  //       }, this.uploadedCvs.length*10);
  //     }
  //   },this.uploadedCvs.length*10 );
  // }



}

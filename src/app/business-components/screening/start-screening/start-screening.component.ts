import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-start-screening',
  templateUrl: './start-screening.component.html',
  styleUrls: ['./start-screening.component.scss']
})
export class StartScreeningComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}

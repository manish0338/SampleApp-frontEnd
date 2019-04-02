import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { environment } from '@env/environment';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string = environment.version;
  data = {};
  columnsToDisplay = ['userName', 'age'];

  constructor(private restApi:RestApiService) {}

  ngOnInit() {
  	this.restApi.getEmployees().subscribe((data: {}) => {
  		console.log(data);
  		this.data = data;
  	});
  }
}

import { Component, OnInit } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  username;
  repo_list;

  slideState = 'out';
  displayedColumns: string[] = ['sno', 'name'];
  dataSource;
  constructor(public http:Http,private location: Location) { }

  ngOnInit() {
    this.username = localStorage.getItem('user');
    this.viewuser();
  }

  viewuser(){

    this.http.get("https://api.github.com/users/"+this.username+"/repos").subscribe((res:any) => {
     
    this.repo_list =JSON.parse(res._body);
    this.dataSource=this.repo_list;

    },
    err => console.error(err)
    );
    
    }

    backClicked() {
      this.location.back();
    }

}








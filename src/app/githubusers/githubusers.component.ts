import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-githubusers',
  templateUrl: './githubusers.component.html',
  styleUrls: ['./githubusers.component.css']
})
export class GithubusersComponent implements OnInit {
   public toggleenable: Boolean = false;
   user_list;
   slideState = 'out';
   displayedColumns: string[] = ['sno', 'name', 'type', 'symbol'];
   dataSource ;
   constructor(public http:Http,private router: Router) { }

  ngOnInit() {
    this.github_users();
 }


 github_users(){
   this.http.get("https://api.github.com/users").subscribe((res:any) => {
this.user_list =JSON.parse(res._body);
this.dataSource=this.user_list;


},
err => console.error(err)
);
}


viewuser(userdata){
localStorage.setItem('user',userdata)
this.router.navigate(['/viewuser']);
}


applyFilter(filterValue: string) {
  var re = /[filterValue]/g; 
  var newarr =[];
  var listlength = this.user_list.length;
  for(var i=0;i<listlength;i++){
    if (this.user_list[i].login.search(re) == 0 ) { 
      newarr.push(this.user_list[i])
   }
  }
  this.dataSource = newarr;
}


}
















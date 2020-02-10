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

   // displayedColumns: string[] = ['sno', 'name', 'action'];
   public toggleenable: Boolean = false;
   user_list;
   // dataSource: any;
   slideState = 'out';
   displayedColumns: string[] = ['sno', 'name', 'type', 'symbol'];
   dataSource ;
   // @ViewChild(MatPaginator) paginator: MatPaginator;
   constructor(public http:Http,private router: Router) { }

  ngOnInit() {
    this.github_users();
 }


 github_users(){
   this.http.get("https://api.github.com/users").subscribe((res:any) => {

this.user_list =JSON.parse(res._body);
console.log("this.user_list = ",this.user_list)
this.dataSource=this.user_list;


},
err => console.error(err)
);
}


viewuser(userdata){
console.log("userdata = =",userdata)
localStorage.setItem('user',userdata)
this.router.navigate(['/viewuser']);
// this.http.get("https://api.github.com/users/"+userdata+"/repos").subscribe((res:any) => {

// console.log("this.user_list = ",res)

//           // this.dataSource = new MatTableDataSource();
//           // // this.dataSource.paginator = this.paginator;
//           // this.dataSource.data = this.user_list;


// },
// err => console.error(err)
// );

}



}
















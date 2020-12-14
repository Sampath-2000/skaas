import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../services/github.service';
import {Observable} from 'rxjs';
import { error } from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName = '';
  data:any;
  users :String[] | undefined;
  
  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
  }

  getRepositories(USERNAME:any)
  {
    this.githubService.getData(USERNAME).subscribe((data)=>{
      this.data = data;
      this.users=data;
     console.log(this.users);


     if(data.length == 0){
       alert("UserNotFound!")
       location.reload();
     }
    },error=>{
     alert("UserNotFound!");
     location.reload();
    }
    )
  }
}

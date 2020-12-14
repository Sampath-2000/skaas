import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

@Input() users:{
  name:string,
  size:any,
  language:any,
  description:any,
  watchers_count:any,
  stargazers_count:any,
  fork:any,
  
} | any

goToLink(url: string){
  window.open(url, "_blank");
  
}


  constructor() { }

  ngOnInit(): void {
  }

}

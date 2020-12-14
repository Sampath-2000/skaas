import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  getData(USERNAME:any):Observable<any>{
    const githubApiUrl = "https://api.github.com/users/"+USERNAME+"/repos"
    return this.http.get<any>(githubApiUrl)
  }
}

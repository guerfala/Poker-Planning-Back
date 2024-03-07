import { Injectable } from '@angular/core';
import { Team } from '../team';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseURL="http://localhost:8082/api/" ;

  constructor(private httpClient: HttpClient) { }

  getTeamList(): Observable<Team[]>{
    return this.httpClient.get<Team[]>(`${this.baseURL+"Teams"}`);
  }

  createTeam(team: Team):Observable<Object>{
    
    return this.httpClient.post(`${this.baseURL+"addTeam"}`, team);
  }

  getTeamById(id: number): Observable<Team>{
    return this.httpClient.get<Team>(`${this.baseURL+"Team"}/${id}`);
  }

  updateTeam(id: number, team: Team): Observable<Object>{
    return this.httpClient.post(`${this.baseURL +"updateTeam"}/${id}`, team);
  }

  deleteTeam(id: number): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "deleteTeam"}/${id}` );
  }

}

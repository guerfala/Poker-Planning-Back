import { Component } from '@angular/core';
import { Team } from '../team';
import { Router , Route} from '@angular/router';
import { TeamService } from '../Services/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.css'
})
export class CreateTeamComponent {
  team : Team = new Team();
  constructor(private teamService : TeamService , private router: Router){}


  onSubmit(){
    console.log(this.team);
    this.saveTeam();
    this.router.navigate(['/teams']);
  }

  saveTeam (){
    this.teamService.createTeam(this.team).subscribe( data => {
      console.log(data);
    },
    error => console.log (error));
    this.router.navigate(['/teams']);

  }

}
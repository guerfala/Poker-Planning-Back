import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../Services/team.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrl: './update-team.component.css'
})
export class UpdateTeamComponent {

  team : Team = new Team();
  id!: number;
  

  constructor(private teamService : TeamService , private route: ActivatedRoute ,private router: Router){}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.teamService.getTeamById(this.id).subscribe(data =>{
      this.team = data;
    });
  }

  onSubmit(){
    this.teamService.updateTeam(this.id, this.team).subscribe( data =>{
      this.goToTeamList();
    }
    , error => console.log(error));
  }

  goToTeamList(){
    this.router.navigate(['/teams']);
  }



}

import { Component,OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../Services/team.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit{

  teams!: Team[];

  dataSource: Team[] = [];
  displayedColumns: string[] = ['teamId', 'teamName', 'Evaluation'];
 
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private teamService: TeamService , private router: Router , private dialog: MatDialog) {}
  

  ngOnInit(): void{
    this.getTeams();
  }

  private getTeams(){
    this.teamService.getTeamList().subscribe(data => {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.teams = data.slice(startIndex, endIndex);
      this.dataSource = data;
    });
  }

  updateTeam(id: number){
    this.router.navigate(['updateTeam', id]);
  }

  deleteTeam(id: number) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.teamService.deleteTeam(id).subscribe(data => {
        console.log(data);
        this.getTeams();
      });
    }
  }

  goToNextPage() {
    this.currentPage++;
    this.getTeams();
  }
  
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getTeams();
    }
  }

  searchTerm: string = '';

  // Autres codes...

  searchTeams() {
      if (this.searchTerm.trim() === '') {
          // Si la barre de recherche est vide, afficher toutes les équipes
          this.getTeams();
      } else {

          this.teams = this.dataSource.filter(team =>
              team.teamName.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
          );
      }
  }
  
  


}



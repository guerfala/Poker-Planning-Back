import {Component, OnInit} from '@angular/core';
import {Pack} from "../pack";
import {PackService} from "../pack.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../card";
import {CardService} from "../card.service";

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrl: './edit-card.component.css'
})
export class EditCardComponent implements OnInit{
  id!: number;
  card: Card = new Card();
  constructor(private cardService: CardService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cardService.getCardById(this.id).subscribe(data => {
      this.card = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.cardService.updatecard(this.id, this.card).subscribe( data =>{
          this.gotopack();
        }
        , error => console.log(error));
  }

  gotopack(){
    this.router.navigate(['/list-card']);
  }
}

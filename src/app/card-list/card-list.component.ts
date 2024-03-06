import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Pack} from "../pack";
import {PackService} from "../pack.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Card} from "../card";
import {CardService} from "../card.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements AfterViewInit,OnInit{

  card!:Card;
  cards!: Card[] ;
  dataSource !: any;

  constructor(private cardService:CardService,private router:Router) { }

  ngOnInit(): void {
    this.getCards();

    //this.dataSource = new MatTableDataSource<Card>(this.cards);


  }



  private getCards(){
    this.cards=[];
    this.cardService.getCardList().subscribe(data =>{
      this.cards=data;
    });
  }

  onEdit(id: bigint) {
    // Handle edit action here
    this.router.navigate(['update-card', id]);
  }




  onDelete(id: bigint) {
    // Handle delete action here
    this.cardService.deleteCard(id).subscribe( data => {
      console.log(data);
      this.getCards();

    })
  }

  ngAfterViewInit(): void {
  }


}

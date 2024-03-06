import {Component, OnInit} from '@angular/core';
import {Pack} from "../pack";
import {PackService} from "../pack.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../card";
import {CardService} from "../card.service";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent   implements OnInit {


  cardId!:bigint;
  value!:number;
  pack!:Pack;
  test :Card = new Card();
  packs!: Pack[] ;
  id!: bigint;
  selectedFile: File | null = null;

  constructor(private cardService: CardService,private packService: PackService,private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      console.log('Selected file name:', this.selectedFile.name);
     this.test.image=this.selectedFile.name;
    }
  }

  savecard(){
    this.cardService.createCard(this.test,this.id).subscribe( data =>{
        console.log(data);
        this.goTocardList();
      },
      error => console.log(error));
  }

  private getPacks(){
    this.packs=[];
    this.packService.getPackList().subscribe(data =>{
      this.packs=data;
    });
  }

  goTocardList(){
    this.router.navigate(['/list-pack']);
  }

  onSubmit(){
    this.test.value=this.value;
    this.test.pack=this.pack;
    console.log(this.test);
    this.savecard();
  }

}

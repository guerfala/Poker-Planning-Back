import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PackService} from "../pack.service";
import {Pack} from "../pack";
import {Router} from "@angular/router";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
@Component({
  selector: 'app-paks-list',
  templateUrl: './paks-list.component.html',
  styleUrl: './paks-list.component.css'
})
export class PaksListComponent implements AfterViewInit,OnInit{
  displayedColumns: string[] = ['packId', 'nbCards', 'packDescription', 'packName', 'action'];

  pack!:Pack;
  packs!: Pack[] ;
  dataSource !: any;

  constructor(private packsService:PackService,private router:Router) { }

  ngOnInit(): void {
    this.getPacks();
    this.dataSource = new MatTableDataSource<Pack>(this.packs);


  }



  private getPacks(){
    this.packs=[];
    this.packsService.getPackList().subscribe(data =>{
      this.packs=data;
    });
  }

  onEdit(id: bigint) {
    // Handle edit action here
    this.router.navigate(['update-pack', id]);
  }

  onAddcard(id: bigint) {
    // Handle edit action here
    this.router.navigate(['add-card', id]);
  }


  onDelete(id: bigint) {
    // Handle delete action here
    this.packsService.deletePack(id).subscribe( data => {
      console.log(data);
      this.getPacks();

    })
  }


  ngAfterViewInit(): void {
  }


}

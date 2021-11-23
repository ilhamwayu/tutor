import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CollectionsService } from '../collections/collections.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections-detail',
  templateUrl: './collections-detail.component.html',
  styleUrls: ['./collections-detail.component.scss']
})
export class CollectionsDetailComponent implements OnInit {

  public slug:string  = this.routing.snapshot.params['slug'];
  public description:string = '';
  public galery:any   = [];
  public data:any     = [];
  public name:string  = '';
  public price:number = 0 ;
  public stock:number = 0 ;
  public color:string = '';
  public size:number  = 0 ;
  public rate:number  = 0 ;
  public img:string   = '';

  constructor(
    config: NgbRatingConfig,
    private routing:ActivatedRoute,
    private collectionsService:CollectionsService
  ) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections(){
    this.collectionsService.getCollections().subscribe(
      result => {
        this.data = result;
        this.data = (this.slug) ?this.data.filter((p:any) => { return p.slug === this.slug;}) : this.data;
        this.name = this.data[0].productName;
        this.price = this.data[0].price;
        this.stock = this.data[0].stock;
        this.color = this.data[0].color;
        this.size = this.data[0].size;
        this.description = this.data[0].description;
        this.rate = this.data[0].rate;
        this.img = this.data[0].image;
        this.galery = this.data[0].gallery;
      }
    );
  }

}

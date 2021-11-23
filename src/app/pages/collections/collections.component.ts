import { Component, OnInit } from '@angular/core';
import { CollectionsService } from './collections.service';
import { NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  providers: [NgbRatingConfig]
})
export class CollectionsComponent implements OnInit {

  public data:any = [];
  public p: number = 1;
  public count: number = 6;

  constructor(
    private collectionsService:CollectionsService,
    config: NgbRatingConfig,
    private router: Router,
    private routing: ActivatedRoute
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
      },
      error => {
        alert("load data failed");
      }
    );
  }

  detail(slug:string){
    this.router.navigate(['collectionsDetail/', slug]);
  }
}

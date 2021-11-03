import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "ANGULAR TOUR OF HEROES";
  digit:number = 0;
  nama:string ="";
  showLabel:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  plus(){
    if (this.digit == 10) {
      alert("10 digit limit");
    }
    else{
      this.digit = this.digit + 1;
    }
  }

  min(){
    if (this.digit == 0) {
      this.digit = this.digit;
    }
    else{
      this.digit = this.digit - 1;
    }
  }

  show(){
		this.showLabel = false;
	}

	hide(){
		this.showLabel = true;
	}
}

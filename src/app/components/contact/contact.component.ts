import { Component, OnInit, DoCheck} from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, DoCheck {
	public lenguaje:number = 2;
	public lang;
  constructor() { }

  ngOnInit(): void {
  	AOS.init();
  }

  ngDoCheck(){
  	this.lenguaje =+localStorage.getItem('lang');
  	if(this.lenguaje == 1){
  		this.lang = 'esp';
  	}else{
  		this.lang = 'ing';
  	}
  }
  
}



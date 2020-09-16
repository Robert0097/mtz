import { Component, OnInit,DoCheck } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import AOS from 'aos';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, DoCheck {
	public lenguaje:number = 2;
	public lang;
  	public options: any = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    easingFn: null,
    formattingFn: null,
    prefix: '',
    suffix: '',
    duration: 10
  };
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


   

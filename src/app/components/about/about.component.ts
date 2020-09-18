import { Component, OnInit,DoCheck } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import AOS from 'aos';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
  constructor( @Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    AOS.init();
  }
  
  ngDoCheck(){
       if (isPlatformBrowser(this.platformId)) {
            this.lenguaje =+localStorage.getItem('lang');
            if(!localStorage||localStorage==null){
              this.lenguaje==2;
            }
            if(this.lenguaje == 1){
              this.lang = 'esp';
            }else{
              this.lang = 'ing';
            }
      }
    }
}


   

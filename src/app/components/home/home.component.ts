import { Component, OnInit, DoCheck } from '@angular/core';
import AOS from 'aos';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck{
	public lenguaje:number = 2;
	public lang;
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
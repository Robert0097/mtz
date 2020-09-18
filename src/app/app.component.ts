import { Component, DoCheck } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements DoCheck {
title = 'mtz';
public lenguaje:number = 2;
public lang;

    constructor(
      @Inject(PLATFORM_ID) private platformId: object,
       private titleService : Title,
       private meta: Meta
      ) {
        this.titleService.setTitle('Mtz Solutions');
        this.meta.addTag({name:'description', content:'Company focuse on the installation and repair of communication system'});
        this.meta.addTag({name:'keywords', content:'installation, repair, communication, communication system, fiber optic, coaxial work, america, Florida'});
        	}
	ngOnInit(){
  	console.log('Webapp cargada correctamente');
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('lang',"2");
    }
  }
  list: any = [
    {id: 1, name: 'Spanish'},
    {id: 2, name: 'English'}
  ];
  current = 2;
  log = '';

 logDropdown(id: number): void {
    const NAME = this.list.find((item: any) => item.id === +id).id;
    this.log += `Value ${NAME} was selected\n`;
    localStorage.setItem('lang',NAME);
  }

  scrollcontact() {
    let el = document.getElementById("contact");
    el.scrollIntoView({behavior:"smooth"});
  }
    scrolls() {
    let el = document.getElementById("services");
    el.scrollIntoView({behavior:"smooth"});
  }
    scrollh() {
    let el = document.getElementById("cuerpo");
    el.scrollIntoView({behavior:"smooth"});
  }
    scrolla() {
    let el = document.getElementById("about");
    el.scrollIntoView({behavior:"smooth"});
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
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {
  pushRightClass: string = 'push-right';
  tarefa: boolean = true;
  idioma: boolean = false;
  nameFieldTarefa: string[] = ['nome', 'tarefa'];
  nameFieldIdioma: string[] = ['nome', 'idioma'];
  listaTarefa:any[] =[];
  listaIdioma:any[] =[];
  constructor(private translate: TranslateService, public router: Router) {
    this.listaIdioma.push({nome:'Português', idioma:'pt'});
    this.listaIdioma.push({nome:'Inglês', idioma:'en'});
    this.listaIdioma.push({nome:'Espanhol', idioma:'es'});
    
    this.translate.addLangs(['pt', 'en', 'es']);
    this.translate.setDefaultLang('pt');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/pt|en|es/) ? browserLang : 'pt');

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() { }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  onLoggedout() {
    localStorage.removeItem('token');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
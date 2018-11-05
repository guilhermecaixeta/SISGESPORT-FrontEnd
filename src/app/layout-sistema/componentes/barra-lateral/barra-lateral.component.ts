import { MenuLateral } from '../../../model/menu-lateral';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PerfilSistema } from '../../../enum/sisgesport.enum';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent implements OnInit {
  isActive: boolean = false;
  pushRightClass: string = 'push-right';
  idioma: boolean = false;
  listaIdioma: any[] = [];
  nameFieldIdioma: string[] = ['nome', 'idioma'];
  tagIdioma: string[] = ['fa fa-language', 'Language'];

  @Input() user: any;
  @Input() lista: MenuLateral[] = [
    {
      IClass: 'fa fa-home',
      legend: 'Principal',
      router: '/principal',
      perfil: PerfilSistema.NO_ROLE,
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-fw fa-bank',
      legend: 'Instituição',
      router: '/instituicao',
      perfil: PerfilSistema.ROLE_ADMIN,
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-briefcase',
      legend: 'Cargo',
      router: '/cargo',
      perfil: PerfilSistema.ROLE_ADMIN,
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-address-book',
      legend: 'Curso',
      router: '/curso',
      perfil: PerfilSistema.ROLE_ADMIN,
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-group',
      legend: 'Turma',
      router: '/turma',
      perfil: PerfilSistema.ROLE_ADMIN,
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-users',
      legend: 'Evento',
      router: '/evento',
      perfil: PerfilSistema.ROLE_ADMIN,
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-soccer-ball-o',
      legend: 'Esporte',
      router: null,
      perfil: PerfilSistema.ROLE_ADMIN,
      nestedsMenus: [
        {
          IClass: 'fa fa-check-circle-o',
          legend: 'Tipo-Ponto',
          router: '/esporte/tipo-ponto',
          perfil: PerfilSistema.ROLE_ADMIN,
          nestedsMenus: null
        },
        {
          IClass: 'fa fa-user-times',
          legend: 'Penalidade',
          router: '/esporte/penalidade',
          perfil: PerfilSistema.ROLE_ADMIN,
          nestedsMenus: null
        },
        {
          IClass: 'fa fa-male',
          legend: 'Posição',
          router: '/esporte/posicao',
          perfil: PerfilSistema.ROLE_ADMIN,
          nestedsMenus: null
        },
        {
          IClass: 'fa fa-futbol-o',
          legend: 'Modalidade',
          router: '/esporte/modalidade',
          perfil: PerfilSistema.ROLE_ADMIN,
          nestedsMenus: null
        }
      ]
    }

  ];

  constructor(private translate: TranslateService, public router: Router) {
    this.listaIdioma.push({ nome: 'Português', idioma: 'pt' }, { nome: 'Inglês', idioma: 'en' }, { nome: 'Espanhol', idioma: 'es' });
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

  eventCalled() {
    this.isActive = !this.isActive;
  }

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

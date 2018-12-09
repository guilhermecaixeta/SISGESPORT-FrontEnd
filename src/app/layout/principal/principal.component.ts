import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss'],
    animations: [routerTransition()]
})
export class PrincipalComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/campus.jpg',
                label: 'IFG Campus Luziânia',
                text:
                    'Saiba mais sobre o IFG...',
                html: 'http://ifg.edu.br/luziania/'
            },
            {
                imagePath: 'assets/images/esporte-1.jpg',
                label: 'Saiba mais sobre os eventos',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                html: 'http://localhost:4200/gerenciar-evento/evento'
            },
            {
                imagePath: 'assets/images/esporte-2.jpg',
                label: 'Saiba mais sobre as modalidade',
                text:'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
                html: 'http://localhost:4200/esporte/modalidade'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
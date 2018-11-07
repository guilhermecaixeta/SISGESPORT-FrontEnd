import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
       let token = localStorage.get('token');
       if(token){
        this.router.navigate(['/principal'], { relativeTo: this.activatedRoute });
       }else{
        this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
       }    
    }
}

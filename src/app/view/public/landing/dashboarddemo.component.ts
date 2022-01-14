import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class DashboardDemoComponent implements OnInit {

    products: any[];

    items: MenuItem[];



    events: any[];

    fullcalendarOptions: any;

    home: any[];
    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }
}

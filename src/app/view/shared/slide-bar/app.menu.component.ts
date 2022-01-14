import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AppComponent} from '../../../app.component';
import {PublicComponent} from '../../public/public.component';
import {MenuService} from "./app.menu.service";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    animations: [
        trigger('inline', [
            state('hidden', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visible', style({
                height: '*',
            })),
            state('hiddenAnimated', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuComponent implements OnInit {

    // model: any[];

    constructor(public app: AppComponent, public appMain: PublicComponent,private sideBarService:MenuService) {
    }



    get model(): any[] {
        return this.sideBarService.model;
    }

    set model(value: any[]) {
        this.sideBarService.model = value;
    }


    ngOnInit() {

    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
        this.appMain.rightPanelMenuActive = false;
    }
}

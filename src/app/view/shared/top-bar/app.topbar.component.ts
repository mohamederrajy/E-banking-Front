import {Component} from '@angular/core';
import {AppComponent} from '../../../app.component';
import {MenuItem} from 'primeng/api';
import {PublicComponent} from '../../public/public.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent  {
    items: MenuItem[];

    constructor(public app: AppComponent, public appMain: PublicComponent) {
    }
}

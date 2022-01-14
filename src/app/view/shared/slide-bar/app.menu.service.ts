import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MenuService {

    private _model: any[];

    get model(): any[] {
        return this._model;
    }

    set model(value: any[]) {
        this._model = value;
    }

    private menuSource = new Subject<string>();
    menuSource$ = this.menuSource.asObservable();
    private resetSource = new Subject();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(key: string) {
        this.menuSource.next(key);
    }

    reset() {
        this.resetSource.next();
    }
}

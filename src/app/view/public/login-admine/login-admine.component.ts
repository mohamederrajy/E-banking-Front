import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {MenuService} from "../../shared/slide-bar/app.menu.service";


@Component({
    selector: 'app-login-admine',
    templateUrl: './login-admine.component.html',
    styleUrls: ['./login-admine.component.scss']
})
export class LoginAdmineComponent implements OnInit {

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                 private router: Router,private menuService:MenuService) {

    }

    private _role: string;

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    private _login: string;

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    private _password: string;

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    private _correct: boolean;

    get correct(): boolean {
        return this._correct;
    }

    set correct(value: boolean) {
        this._correct = value;
    }


    get model(): any[] {
        return this.menuService.model;
    }

    set model(value: any[]) {
        this.menuService.model = value;
    }


    public choose() {
        document.getElementById('log-pass').style.visibility = 'hidden';
    }

    ngOnInit(): void {
    }

    loginAdmin() {
        this.model = [
            {label: 'Transaction Consultation', icon: 'pi pi-fw pi-list', routerLink: ['/admin/transaction-consultation']},
            {label: 'Transaction Bloquage', icon: 'pi pi-fw pi-power-off', routerLink: ['/admin/transaction-bloque']},
            {label: 'Transaction Debloquage', icon: 'pi pi-fw pi-play', routerLink: ['/admin/transaction-debloque']},
            {label: 'Notification', icon: 'pi pi-fw pi-bell', routerLink: ['/admin/transaction-notification']},
            {label: 'Plafond Configuration', icon: 'pi pi-fw pi-cog', routerLink: ['/admin/plafond-config']},
            {label: 'Commission', icon: 'pi pi-fw pi-dollar', routerLink: ['/admin/commission']},
            {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']},
        ];
        this.router.navigate(['admin/transaction-consultation']);
    }
}

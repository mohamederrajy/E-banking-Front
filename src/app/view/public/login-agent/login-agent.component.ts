import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {MenuService} from "../../shared/slide-bar/app.menu.service";

@Component({
  selector: 'app-login-agent',
  templateUrl: './login-agent.component.html',
  styleUrls: ['./login-agent.component.scss']
})
export class LoginAgentComponent implements OnInit {

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

  public findEtudiant() {
    this.model = [
      {label: 'Client Management', icon: 'pi pi-fw pi-user-edit', routerLink: ['/agent/client-management']},
      {label: 'Transaction Emission', icon: 'pi pi-fw pi-wallet', routerLink: ['/agent/transaction-emission']},
      {label: 'Transaction Servir', icon: 'pi pi-fw pi-check-circle', routerLink: ['/agent/transaction-servir']},
      {label: 'Transaction Extourn', icon: 'pi pi-fw pi-power-off', routerLink: ['/agent/transaction-extourn']},
      {label: 'Transaction Restitution', icon: 'pi pi-fw pi-replay', routerLink: ['/agent/transaction-restitution']},
      {label: 'Transaction Historique', icon: 'pi pi-fw pi-history', routerLink: ['/agent/transaction-historique']},
      {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']},
    ];
    this.router.navigate(['agent/client-management']);
  }

  public choose() {
    document.getElementById('log-pass').style.visibility = 'hidden';
  }

  ngOnInit(): void {
  }

}

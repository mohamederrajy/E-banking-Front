import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';


import {DashboardDemoComponent} from './view/public/landing/dashboarddemo.component';
import {PublicComponent} from './view/public/public.component';
import {LoginAgentComponent} from "./view/public/login-agent/login-agent.component";
import {ClientManagementComponent} from "./view/agent/client-management/client-management.component";
import {TransactionEmissionComponent} from "./view/agent/transaction-emission/transaction-emission.component";
import {TransactionServirComponent} from "./view/agent/transaction-servir/transaction-servir.component";
import {TransactionExtournComponent} from "./view/agent/transaction-extourn/transaction-extourn.component";
import {TransactionRestitutionComponent} from "./view/agent/transaction-restitution/transaction-restitution.component";
import {TransactionHistoriqueComponent} from "./view/agent/transaction-historique/transaction-historique.component";
import {LoginAdmineComponent} from "./view/public/login-admine/login-admine.component";
import {TransactionConsultationComponent} from "./view/admine/transaction-consultation/transaction-consultation.component";
import {TransactionBloquageComponent} from "./view/admine/transaction-bloquage/transaction-bloquage.component";
import {TransactionDebloquageComponent} from "./view/admine/transaction-debloquage/transaction-debloquage.component";
import {TransactionNotificationComponent} from "./view/admine/transaction-notification/transaction-notification.component";
import {PlafondConfigComponent} from "./view/admine/plafond-config/plafond-config.component";
import {CommissionComponent} from "./view/admine/commission/commission.component";
import {AgentComponent} from "./view/agent/agent.component";
import {AdmineComponent} from "./view/admine/admine.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path:'admin',component: AdmineComponent,
                children:[
                    {path: 'transaction-consultation', component: TransactionConsultationComponent},
                    {path: 'transaction-bloque', component: TransactionBloquageComponent},
                    {path: 'transaction-debloque', component: TransactionDebloquageComponent},
                    {path: 'transaction-notification', component: TransactionNotificationComponent},
                    {path: 'plafond-config', component: PlafondConfigComponent},
                    {path: 'commission', component: CommissionComponent},
                ]
            },
            {path:'agent',component: AgentComponent,
                children:[
                    {path: 'client-management', component: ClientManagementComponent},
                    {path: 'transaction-emission', component: TransactionEmissionComponent},
                    {path: 'transaction-servir', component: TransactionServirComponent},
                    {path: 'transaction-extourn', component: TransactionExtournComponent},
                    {path: 'transaction-restitution', component: TransactionRestitutionComponent},
                    {path: 'transaction-historique', component: TransactionHistoriqueComponent},
                ]
            },
            {path:'',component: PublicComponent,
                children:[
                    {path: '', component: DashboardDemoComponent},
                    {path: 'public/login-admin', component: LoginAdmineComponent},
                    {path: 'public/login-agent', component: LoginAgentComponent},
                ]
            },
            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

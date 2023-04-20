import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoFourComponent},
    {path: 'home', component: HomeDemoFourComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundPageComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
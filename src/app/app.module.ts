import { NgModule } from '@angular/core';
import { AccordionModule } from "ngx-accordion";
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ExtraOptions, RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { GetStartedComponent } from './components/common/get-started/get-started.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { HomefiveBannerComponent } from './components/pages/home-demo-five/homefive-banner/homefive-banner.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { PartnersComponent } from './components/common/partners/partners.component';
import { WorkProcessComponent } from './components/common/work-process/work-process.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { GetReportComponent } from './components/common/get-report/get-report.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HomefourAboutComponent } from './components/pages/home-demo-four/homefour-about/homefour-about.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { ConsultationFormComponent } from './components/common/consultation-form/consultation-form.component';
import { HomefiveAboutComponent } from './components/pages/home-demo-five/homefive-about/homefive-about.component';
import { OurPlatformsComponent } from './components/common/our-platforms/our-platforms.component';
import { HomefiveContactComponent } from './components/pages/home-demo-five/homefive-contact/homefive-contact.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';


const routes: Routes = [
    {
      path: "",
      component: AppComponent
    }
  ];
  const routerOptions: ExtraOptions = {
    anchorScrolling: "enabled"
    //scrollPositionRestoration: "enabled"
  };

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoFourComponent,
        HomeDemoFiveComponent,
        FooterComponent,
        GetStartedComponent,
        NavbarComponent,
        HomefourBannerComponent,
        HomefiveBannerComponent,
        FeaturesComponent,
        PartnersComponent,
        WorkProcessComponent,
        FeedbackComponent,
        FunfactsComponent,
        GetReportComponent,
        SubscribeComponent,
        HomefourAboutComponent,
        WhyChooseUsComponent,
        ConsultationFormComponent,
        HomefiveAboutComponent,
        OurPlatformsComponent,
        HomefiveContactComponent,
        ContactPageComponent,
        NotFoundPageComponent,
        FaqComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        StickyNavModule,
        CarouselModule,
        NgxSimpleCountdownModule,
        AccordionModule,
        NgxSmartModalModule.forRoot(),
        RouterModule,
        RouterModule.forRoot(routes, routerOptions)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

 }
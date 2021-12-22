import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './pages/main/components/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { CarouselComponent } from './pages/main/components/carousel/carousel.component';
import { OrderCardsComponent } from './pages/main/components/orderCards/orderCards.component';
import { OrderCardComponent } from './pages/main/components/orderCards/orderCard/orderCard.component';
import { PromoComponent } from './pages/main/components/promo/promo.component';
import {CategorySelectorComponent} from "./pages/main/components/category-selector/category-selector.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {ItemCardComponent} from "./pages/main/components/itemCard/itemCard.component";
import {ItemsCategoryComponent} from "./pages/main/components/itemCategoryes/itemsCategory.component";
import {AboutProjectComponent} from "./pages/about-project/about-project.component";
import {AppRoutingModule} from "./app-routing.module";
import {AboutBannerComponent} from "./pages/about-project/components/aboutBanner/aboutBanner.component";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { OurMissionComponent } from './pages/about-project/components/our-mission/our-mission.component';
import { OurTargetComponent } from './pages/about-project/components/our-target/our-target.component';
import { AboutServiceComponent } from './pages/about-project/components/about-service/about-service.component';
import { ProviderComponent } from './pages/about-project/components/provider/provider.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsCardComponent } from './pages/news/components/news-card/news-card.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';
import { NzTagModule } from 'ng-zorro-antd/tag';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    MainComponent,
    CarouselComponent,
    OrderCardsComponent,
    OrderCardComponent,
    PromoComponent,
    CategorySelectorComponent,
    ItemCardComponent,
    ItemsCategoryComponent,
    AboutProjectComponent,
    AboutBannerComponent,
    OurMissionComponent,
    OurTargetComponent,
    AboutServiceComponent,
    ProviderComponent,
    NewsComponent,
    NewsCardComponent,
    QuestionsComponent,
    ContactUsComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzDrawerModule,
    NzCarouselModule,
    NzCardModule,
    AppRoutingModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzFormModule,
    ReactiveFormsModule,
    NzTagModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }

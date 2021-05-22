import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { TabComponent } from './tab/tab.component';
import { ToastComponent } from './toast/toast.component';
import { SliderComponent } from './slider/slider.component';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SwiperModule,
        PipeModule
    ],
    declarations: [
        HeaderComponent,
        LoaderComponent,
        SkeletonComponent,
        TabComponent,
        ToastComponent,
        SliderComponent
    ],
    exports: [
        HeaderComponent,
        LoaderComponent,
        SkeletonComponent,
        TabComponent,
        ToastComponent,
        SliderComponent
    ]
})

export class SharedModule { }

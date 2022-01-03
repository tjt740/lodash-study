import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ng-zorro 组件
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IndexOpenComponent } from './components/index-open/index-open.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { KnowledgePoint1Component } from './pages/knowledge-point1/knowledge-point1.component';
import { KnowledgePoint2Component } from './pages/knowledge-point2/knowledge-point2.component';
import { KnowledgePoint3Component } from './pages/knowledge-point3/knowledge-point3.component';

// 服务


// 插件


// 管道
import { SortPipePipe } from './pipe/sort-pipe.pipe';
import { QuChongPipe } from './pipe/qu-chong.pipe';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NoFoundComponent,
    IndexOpenComponent,
    KnowledgePoint1Component,
    KnowledgePoint2Component,
    KnowledgePoint3Component,
    SortPipePipe,
    QuChongPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // ng-zorro 组件
    NzLayoutModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}

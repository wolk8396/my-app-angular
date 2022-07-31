import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { ComponentsinDetailComponent } from './components/pages/componentsin-detail/componentsin-detail.component';
import { BasicSyntaxComponent } from './components/pages/basic-syntax/basic-syntax.component';
import { RunPageComponent } from './components/shard/run-page/run-page.component';
import { BindingsLearnComponent } from './components/shard/bindings-learn/bindings-learn.component';
import { EventbindingsLearnComponent } from './components/shard/eventbindings-learn/eventbindings-learn.component';
import { NgStyleLearnComponent } from './components/shard/ng-style-learn/ng-style-learn.component';
import { NgClassleLearnComponent } from './components/shard/ng-classle-learn/ng-classle-learn.component';
import { NgIfleLearnComponent } from './components/shard/ng-ifle-learn/ng-ifle-learn.component';
import { NgSwitchleLearnComponent } from './components/shard/ng-switchle-learn/ng-switchle-learn.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ComponentsinDetailComponent,
    BasicSyntaxComponent,
    RunPageComponent,
    BindingsLearnComponent,
    EventbindingsLearnComponent,
    NgStyleLearnComponent,
    NgClassleLearnComponent,
    NgIfleLearnComponent,
    NgSwitchleLearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

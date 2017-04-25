import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InterestListComponent } from './interest-list/interest-list.component';
import { SimpleComponent } from './interest-list/simple/simple.component';
import { CompoundComponent } from './interest-list/compound/compound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InterestListComponent,
    SimpleComponent,
    CompoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './shared-components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './shared-components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { UserModule } from './shared-components/user/user.module';
import { CardComponent } from './shared-components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule} from '@angular/material/chips';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OweToComponent } from './dashboard/owe-to/owe-to.component';
import { OweMeComponent } from './dashboard/owe-me/owe-me.component';
import { ContactsComponent } from './shared-components/contacts-dialog/contacts.component';
import { ExpenseInputsDialogComponent } from './shared-components/expense-inputs-dialog/expense-inputs-dialog.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightSearchPipe } from './pipes/highlight.pipe';
import { OweCardComponent } from './shared-components/owe-card/owe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    CardComponent,
    DashboardComponent,
    OweToComponent,
    OweMeComponent,
    ContactsComponent,
    ExpenseInputsDialogComponent,

    // Pipes  & Directives
    FilterPipe,
    HighlightSearchPipe,
    OweCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    //local modules
    UserModule,

    // Angular material Modules
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

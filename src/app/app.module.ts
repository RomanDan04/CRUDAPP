import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from './modules/icons/icons.module';
import { InputComponent } from './components/input/input.component';
import { SwitchComponent } from './components/switch/switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareService } from './services/share.service';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ServicesComponent } from './components/services/services.component';
import { UsersComponent } from './components/users/users.component';
import { GroupMenuComponent } from './components/group-menu/group-menu.component';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { GroupFormComponent } from './pages/group-form/group-form.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { PlatformComponent } from './components/platform/platform.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupFormComponent,
    GroupMenuComponent,
    ServicesComponent,
    UsersComponent,
    SwitchComponent,
    InputComponent,
    FilterPipe,
    SortPipe,
    PlatformComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    NgbModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ShareService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

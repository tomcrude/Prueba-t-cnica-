import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RegistersComponent } from './pages/records/registers.component';
import { EditRegisterComponent } from './pages/edit-records/edit-register.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecordComponent } from './components/record/record.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import { SignComponent } from './components/sign/sign.component';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignInComponent,
    SignUpComponent,
    RegistersComponent,
    EditRegisterComponent,
    FooterComponent,
    RecordComponent,
    SignComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    TextFieldModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

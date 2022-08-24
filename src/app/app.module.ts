import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UsercomponentComponent } from './pages/user/usercomponent/usercomponent.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewComponentComponent } from './pages/admin/view-component/view-component.component';
import { AddComponentComponent } from './pages/admin/add-component/add-component.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { QuizUpdateComponent } from './pages/admin/quiz-update/quiz-update.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddquestionComponent } from './pages/admin/addquestion/addquestion.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UsersidebarComponent } from './pages/user/usersidebar/usersidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule  } from "ngx-ui-loader";
import { ViewBlogComponent } from './pages/user/view-blog/view-blog.component';
import { OpenContentComponent } from './pages/user/open-content/open-content.component';
import { ArmyquestionsComponent } from './pages/user/armyquestions/armyquestions.component';
import { UpscquestionsComponent } from './pages/user/upscquestions/upscquestions.component';
import { GkquestionsComponent } from './pages/user/gkquestions/gkquestions.component';
import { PythonquestionsComponent } from './pages/user/pythonquestions/pythonquestions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UsercomponentComponent,
    ProfilesComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewComponentComponent,
    AddComponentComponent,
    ViewQuizComponent,
    AddQuizComponent,
    QuizUpdateComponent,
    ViewQuestionsComponent,
    AddquestionComponent,
    UsersidebarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    ViewBlogComponent,
    OpenContentComponent,
    ArmyquestionsComponent,
    UpscquestionsComponent,
    GkquestionsComponent,
    PythonquestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
    
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

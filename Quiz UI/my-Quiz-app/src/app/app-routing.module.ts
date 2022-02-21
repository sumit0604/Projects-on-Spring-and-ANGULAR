import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ArmyQuestion from './Datasets_of_questions/ArmyDataset';
import { HeaderComponent } from './components/header/header.component';
import { AddComponentComponent } from './pages/admin/add-component/add-component.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AddquestionComponent } from './pages/admin/addquestion/addquestion.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { QuizUpdateComponent } from './pages/admin/quiz-update/quiz-update.component';
import { ViewComponentComponent } from './pages/admin/view-component/view-component.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ArmyquestionsComponent } from './pages/user/armyquestions/armyquestions.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { OpenContentComponent } from './pages/user/open-content/open-content.component';
import { StartComponent } from './pages/user/start/start.component';
import { UsercomponentComponent } from './pages/user/usercomponent/usercomponent.component';
import { ViewBlogComponent } from './pages/user/view-blog/view-blog.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'admin',component:DashboardComponent,canActivate:[AdminGuard],
  children:[
    {
      path:'profile',component:ProfilesComponent
    },
    {
      path:'',component:WelcomeComponent
    },
    {
      path:'view-category',component:ViewComponentComponent
    },
    {
      path:'add-category',component:AddComponentComponent
    },
    {
      path:'view-quiz',component:ViewQuizComponent
    },
    {
      path:'add-quiz',component:AddQuizComponent
    },
    {
      path:'update/:qid',component:QuizUpdateComponent
    },
    {
      path:'questions/:qid/:title',component:ViewQuestionsComponent
    },
    {
      path:'questions/add/:qId/:title',component:AddquestionComponent
    }
  ]
},
  {
    path:'user-dashboard',
    component:UsercomponentComponent,
    canActivate:[NormalGuard],
    children:[{
    path:':catId',component:LoadQuizComponent
  },
  {
    path:'instruction/:qid',component:InstructionsComponent
  }

]}

,{
  path:'start/:qid',component:StartComponent,canActivate:[NormalGuard]
},
{
  path: 'blogs',component:ViewBlogComponent,canActivate:[NormalGuard]
},
{
  path:'content',component:OpenContentComponent
},
{
  path:'army_question',component:ArmyquestionsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

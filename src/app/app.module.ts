import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatChipsModule,
  MatIconModule,
  MatListModule, MatMenuModule,
  MatRadioModule,
  MatRippleModule, MatSidenavModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {SignInComponent} from './pages/authentication/sign-in/sign-in.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { MainComponent } from './pages/main/main/main.component';
import { SearchAndFiltersComponent } from './pages/main/search-and-filters/search-and-filters.component';
import { FeedComponent } from './pages/main/feed/feed/feed.component';
import { FeedElementComponent } from './pages/main/feed/feed-element/feed-element.component';
import { PostQuestionComponent } from './pages/main/post-question/post-question.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line:max-line-length
import { SingleQuestionWithAnswersComponent } from './pages/main/single-question-with-answers/single-question-with-answers.component';
import { AnswerElementComponent } from './pages/main/answer-feed/answer-element/answer-element.component';
import { AnswerFeedComponent } from './pages/main/answer-feed/answer-feed/answer-feed.component';
import { ShinyTextComponent } from './utility/shiny-text/shiny-text.component';
import { DiscussionFeedComponent } from './pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component';
// tslint:disable-next-line:max-line-length
import { DiscussionElementComponent } from './pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component';
import { CreateClassroomComponent } from './pages/main/instructor/create-classroom/create-classroom.component';
// tslint:disable-next-line:max-line-length
import { ManageClassroomStudentsComponent } from './pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component';
import {FlexLayoutModule} from '@angular/flex-layout';
// tslint:disable-next-line:max-line-length
import { ManageClassroomInstructorsComponent } from './pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component';
import {ChosenUsersService} from './Shared/chosen-users.service';
// tslint:disable-next-line:max-line-length
import {SelectUserElementComponent} from './pages/main/instructor/manage/select-user-element/select-user-element.component';
import { ResetPasswordComponent } from './pages/authentication/reset-password/reset-password.component';
import { ResponsiveDesignComponent } from './_playground/responsive-design/responsive-design.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ResetPasswordComponent,
    SidebarComponent,
    MainComponent,
    SearchAndFiltersComponent,
    FeedComponent,
    FeedElementComponent,
    PostQuestionComponent,
    SingleQuestionWithAnswersComponent,
    AnswerElementComponent,
    AnswerFeedComponent,
    ShinyTextComponent,
    DiscussionFeedComponent,
    DiscussionElementComponent,
    CreateClassroomComponent,
    ManageClassroomStudentsComponent,
    SelectUserElementComponent,
    ManageClassroomInstructorsComponent,
    ResponsiveDesignComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    NgxEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  providers: [ChosenUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

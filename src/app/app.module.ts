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
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SidebarComponent } from './alternate/sidebar/sidebar.component';
import { AltMainComponent } from './alternate/alt-main/alt-main.component';
import { SearchAndFiltersComponent } from './alternate/alt-main/search-and-filters/search-and-filters.component';
import { FeedComponent } from './alternate/alt-main/feed/feed/feed.component';
import { FeedElementComponent } from './alternate/alt-main/feed/feed-element/feed-element.component';
import { PostQuestionComponent } from './alternate/alt-main/post-question/post-question.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line:max-line-length
import { SingleQuestionWithAnswersComponent } from './alternate/alt-main/single-question-with-answers/single-question-with-answers.component';
import { AnswerElementComponent } from './alternate/alt-main/answer-feed/answer-element/answer-element.component';
import { AnswerFeedComponent } from './alternate/alt-main/answer-feed/answer-feed/answer-feed.component';
import { ShinyTextComponent } from './utility/shiny-text/shiny-text.component';
import { DiscussionFeedComponent } from './alternate/alt-main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component';
// tslint:disable-next-line:max-line-length
import { DiscussionElementComponent } from './alternate/alt-main/answer-feed/discussion-feed/discussion-element/discussion-element.component';
import { CreateClassroomComponent } from './alternate/alt-main/instructor/create-classroom/create-classroom.component';
// tslint:disable-next-line:max-line-length
import { ManageClassroomStudentsComponent } from './alternate/alt-main/instructor/add-students-to-classroom/manage-classroom-students.component';
import {ChosenStudentsService} from './alternate/alt-main/instructor/add-students-to-classroom/chosen-students.service';
import {FlexLayoutModule} from '@angular/flex-layout';
// tslint:disable-next-line:max-line-length
import { ManageClassroomInstructorsComponent } from './alternate/alt-main/instructor/manage-classroom-instructors/manage-classroom-instructors.component';
import {ChosenUsersService} from './alternate/alt-main/instructor/chosen-users.service';
// tslint:disable-next-line:max-line-length
import {SelectUserElementComponent} from './alternate/alt-main/instructor/add-students-to-classroom/select-user-element/select-user-element.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ResetPasswordComponent,
    SidebarComponent,
    AltMainComponent,
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
  ],
  imports: [
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
  providers: [ChosenStudentsService, ChosenUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

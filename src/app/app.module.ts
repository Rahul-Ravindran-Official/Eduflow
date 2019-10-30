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
import { MainComponent } from './pages/main/main/main.component';
import { LeftSidebarComponent } from './pages/main/left-sidebar/left-sidebar/left-sidebar.component';
import { SingleGroupElementComponent } from './pages/main/left-sidebar/single-group-element/single-group-element.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CenterComponent } from './pages/main/center/center/center.component';
import { SidebarComponent } from './alternate/sidebar/sidebar.component';
import { AltMainComponent } from './alternate/alt-main/alt-main.component';
import { SearchAndFiltersComponent } from './alternate/alt-main/search-and-filters/search-and-filters.component';
import { FeedComponent } from './alternate/alt-main/feed/feed/feed.component';
import { FeedElementComponent } from './alternate/alt-main/feed/feed-element/feed-element.component';
import { PostQuestionComponent } from './alternate/alt-main/post-question/post-question.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { SingleQuestionWithAnswersComponent } from './alternate/alt-main/single-question-with-answers/single-question-with-answers.component';
import { AnswerElementComponent } from './alternate/alt-main/answer-feed/answer-element/answer-element.component';
import { AnswerFeedComponent } from './alternate/alt-main/answer-feed/answer-feed/answer-feed.component';
import { ShinyTextComponent } from './utility/shiny-text/shiny-text.component';
import { DiscussionFeedComponent } from './alternate/alt-main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component';
import { DiscussionElementComponent } from './alternate/alt-main/answer-feed/discussion-feed/discussion-element/discussion-element.component';
import { CreateClassroomComponent } from './alternate/alt-main/instructor/create-classroom/create-classroom.component';
import { ManageClassroomStudentsComponent } from './alternate/alt-main/instructor/add-students-to-classroom/manage-classroom-students.component';
import { SelectStudentElementComponent } from './alternate/alt-main/instructor/add-students-to-classroom/select-student-element/select-student-element.component';
import {ChosenStudentsService} from './alternate/alt-main/instructor/add-students-to-classroom/chosen-students.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainComponent,
    LeftSidebarComponent,
    SingleGroupElementComponent,
    CenterComponent,
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
    SelectStudentElementComponent,
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
    MatMenuModule
  ],
  providers: [ChosenStudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

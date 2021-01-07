import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './component/course-list/course-list.component';

import {HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { CourseService } from './service/course.service';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { StudentService } from './service/student.service';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentSaveComponent } from './component/student-save/student-save.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorSaveComponent } from './component/instructor-save/instructor-save.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { EnrollmentListComponent } from './component/enrollment-list/enrollment-list.component';
import { EnrollomentSaveComponent } from './component/enrollment-save/enrollment-save.component';
import { EnrollmentEditComponent } from './component/enrollment-edit/enrollment-edit.component';
import { EnrollmentDeleteComponent } from './component/enrollment-delete/enrollment-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseSaveComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    StudentListComponent,
    StudentSaveComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    InstructorListComponent,
    InstructorSaveComponent,
    InstructorEditComponent,
    InstructorDeleteComponent,
    EnrollmentListComponent,
    EnrollomentSaveComponent,
    EnrollmentEditComponent,
    EnrollmentDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

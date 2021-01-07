import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import {Subscription} from 'rxjs'
import { Course } from 'src/app/domain/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public course: Course[] = [];
  public SubCourses: Subscription = new Subscription;

  constructor(public courService: CourseService) { }
  ngOnDestroy(): void {
    this.SubCourses.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.SubCourses = this.courService.getAll().subscribe(data =>{
      this.course = data;
    });

  }
 
}

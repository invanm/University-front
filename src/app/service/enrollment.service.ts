import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../domain/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {
  
  public url: string;

  constructor(public httpClient: HttpClient) {
    //this.url = './assets/MOCK_DATA.json';
    //this.url = 'https://localhost:44303/University.API/api/Courses'
    this.url = environment.apiUrl + 'api/Enrollments/';
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url + 'GetEnrollments/');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'GetEnrollments/' + id);
  };

  public save(course: Course): Observable<any> {
    return this.httpClient.post(this.url, course);
  }

  public edit(course: Course): Observable<any> {
    return this.httpClient.put(this.url + '/' + course.CourseID, course);
  };

  public delete(id: number) {
    return this.httpClient.delete(this.url + id);
  };
}



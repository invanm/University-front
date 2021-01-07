import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Instructor } from '../domain/instructor';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    //this.url = './assets/MOCK_DATA_INSTRUCTOR';
    //this.url = 'api/Instructors/';
    this.url = environment.apiUrl + 'api/Instructors/';
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url + 'GetInstructor/');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'GetInstructor/' + id);
  };

  public save(instructor: Instructor): Observable<any> {
    return this.httpClient.post(this.url, instructor);
  }

  public edit(instructor: Instructor): Observable<any> {
    return this.httpClient.put(this.url + instructor.ID, instructor);
  };

  public delete(id: number){
    return this.httpClient.delete(this.url + id);
  };

}


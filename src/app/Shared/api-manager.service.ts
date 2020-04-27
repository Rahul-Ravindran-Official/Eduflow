import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {ObjectMapper} from 'json-object-mapper';
export enum RequestType {
  bQuery,
  bController
}

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  protocol = 'http://';
  ip = 'backendless.io/';
  commonFolder = 'user/';
  user = 'ceac10a0309e60457d2567b349fa872bc913dc2958b9b0a86052f8a2c0752e6e/';

  bApi = 'api/70edcc9efa97c30/';
  bController = 'logix/70edcc9efa97c30/';

  base: string = this.protocol + this.ip + this.commonFolder + this.user;
  apiBase: string = this.base + this.bApi;
  controllerBase: string = this.base + this.bController;

  onCallbackReceived = new Subject <any>();

  // Api List
  createGroup = 'Create_Group.php';

  // Logix List
  createClassroom = 'Classroom/c4ad7/CreateClassroom.php';
  getManageClassroomData = 'Classroom/c4ad7/GetAllManageClassroomStudentData.php';

  constructor(private http: Http) {}

  public sendBQueryPostRequest(topic: string, api: string, payload?: any) {
    this.sendPostRequest(
      topic,
      api,
      RequestType.bQuery,
      payload
    );
  }
  public sendBControllerPostRequest(topic: string, api: string, payload?: any) {
    this.sendPostRequest(
      topic,
      api,
      RequestType.bController,
      payload
    );
  }
  private sendPostRequest(topic: string, api: string, requestType: RequestType, payload?: any) {

    let finalApi: string;

    switch (requestType) {
      case RequestType.bQuery:
        finalApi = this.apiBase + api;
        break;

      case RequestType.bController:
        finalApi = this.controllerBase + api;
        break;
    }

    let stringObject: string;

    if (payload === undefined) {
      stringObject = '';
    } else {
      stringObject = ObjectMapper.serialize(payload) as string;
    }

    console.log(stringObject);

    this.http
      .post(finalApi, stringObject )
      .pipe(
        map( (response: any) => {
          return response.json();
        })
      )
      .subscribe((transformedData: any) => {
        this.onCallbackReceived.next({
          topic,
          data: transformedData
        });
      });
  }

}

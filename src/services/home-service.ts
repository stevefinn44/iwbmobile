import { IService } from './IService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable()
export class HomeService {

    constructor( private loadingService: LoadingService) { }

    getData = () => {
        return {
            "toolbarTitle": "Ionic3 UI Theme - Yellow Dark",
            "title": "SAVE HOURS",
            "subtitle": "OF DEVELOPING",
            "subtitle2": "and make apps fast as light!",
            "link":"http://csform.com/documentation-for-ionic-2-ui-template-app/",
            "description": "For better understanding how our template works please read documentation.",
            "background": "assets/images/background/29.jpg"
        };
    };

    load(): Observable<any> {
        var that = this;
        that.loadingService.show();
        
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getData());
                observer.complete();
            });
       
    }
}

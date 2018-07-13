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
            "toolbarTitle": "In Which Bag",
            "title": "SAVE MONEY",
            "subtitle": "SAVE THE PLANET",
            "subtitle2": "and save time!",
            "link":"",
            "description": "",
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

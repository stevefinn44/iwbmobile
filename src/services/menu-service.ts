import { IService } from './IService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';

@Injectable()
export class MenuService implements IService {

    constructor() {}

    

    getId = ():string => 'menu';

    getTitle = ():string => 'In Which Bag';

    getAllThemes = (): Array<any> => {
      return [
        //{"title" : "List Views", "theme"  : "listViews",  "icon" : "icon-format-align-justify", "listView" : true, "component": "", "singlePage":false},
        //{"title" : "Parallax", "theme"  : "parallax",  "icon" : "icon-format-line-spacing", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Login Pages", "theme"  : "login",  "icon" : "icon-lock-open-outline", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Register Pages", "theme"  : "register",  "icon" : "icon-comment-account", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Image Gallery", "theme"  : "imageGallery",  "icon" : "icon-apps", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Splash Screen", "theme"  : "splashScreens",  "icon" : "icon-logout", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Check Boxs", "theme"  : "checkBoxes",  "icon" : "icon-checkbox-marked", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Search Bars", "theme"  : "searchBars",  "icon" : "icon-magnify", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Typo + small components", "theme"  : "textViews",  "icon" : "icon-tumblr", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Wizard", "theme"  : "wizard",  "icon" : "icon-cellphone-settings", "listView" : false, "component":"", "singlePage": false},
        //{"title" : "Spinner", "theme"  : "spinner",  "icon" : "icon-image-filter-tilt-shift", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Tabs", "theme"  : "tabs",  "icon" : "icon-view-array", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Maps", "theme"  : "maps",  "icon" : "icon-google-maps", "listView" : false, "component":"", "singlePage":false},
        {"title" : "QRCode", "theme"  : "qrcode",  "icon" : "icon-qrcode", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Radio Button", "theme"  : "radioButton",  "icon" : "icon-radiobox-marked", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Range", "theme"  : "range",  "icon" : "icon-toggle-switch-off", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Toggle", "theme"  : "toggle",  "icon" : "icon-toggle-switch", "listView" : false, "component":"", "singlePage":false},
        //{"title" : "Select", "theme"  : "select",  "icon" : "icon-menu-down", "listView" : true, "component":"", "singlePage":false},
        //{"title" : "Action Sheet", "theme"  : "actionSheet",  "icon" : "icon-dots-horizontal", "listView" : false, "component":"", "singlePage":false}
      ];
    };

    getDataForTheme = (menuItem: any) => {
      return {
        "background": "assets/images/background/16.jpg",
        "image": "assets/images/logo/login.png",
        "title": "Ionic3 UI Theme - Yellow Dark"
      };
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
        title: item.title,
        data: {},
        events: this.getEventsForTheme(item)
      };
    };

    load(item: any): Observable<any> {

        return new Observable(observer => {
          observer.next(this.getDataForTheme(item));
          observer.complete();
        });

    }

    selectPageForOpen(value: string): any {
      let page;

      switch (value) {
        case "spinner":
          page = "ItemDetailsPageSpinner";
          break;
        case "textViews":
          page = "ItemDetailsPageTextView";
          break;
        case "splashScreens":
          page = "ItemDetailsPageSplashScreen";
          break;
        case "searchBars":
          page = "ItemDetailsPageSearchBar";
          break;
        case "checkBoxes":
          page = "ItemDetailsPageCheckBox";
          break;
        case "wizard":
          page = "ItemDetailsPageWizard";
          break;
        case "tabs":
          page = "ItemDetailsPageTabs";
          break;
        case "login":
          page = "ItemDetailsPageLogin";
          break;
        case "register":
          page = "ItemDetailsPageRegister";
          break;
        case "expandable":
          page = "ItemDetailsPageExpandable";
          break;
        case "swipeToDismiss":
          page = "ItemDetailsPageSwipeToDismiss";
          break;
        case "dragAndDrop":
          page = "ItemDetailsPageDragAndDrop";
          break;
        case "appearanceAnimation":
          page = "ItemDetailsPageAppearanceAnimation";
          break;
        case "googleCards":
          page = "ItemDetailsPageGoogleCard";
          break;
        case "stickyListHeader":
          page = "ItemDetailsPageStickyListHeader";
          break;
        case "parallax":
          page = "ItemDetailsPageParallax";
          break;
        case "maps":
          page = "ItemDetailsPageMaps";
          break;
        case "imageGallery":
          page = "ItemDetailsPageImageGallery";
          break;
        case "qrcode":
          page = "ItemDetailsPageQRCode";
          break;
        case "radioButton":
          page = "ItemDetailsPageRadioButton";
          break;
        case "range":
          page = "ItemDetailsPageRange";
          break;
        case "toggle":
          page = "ItemDetailsPageToggle";
          break;
        case "select":
          page = "ItemDetailsPageSelect";
          break;
        case "actionSheet":
          page = "ItemDetailsPageActionSheet";
          break;

        default:
          page = "ItemDetailsPage";
      }
      return page;
  }
}

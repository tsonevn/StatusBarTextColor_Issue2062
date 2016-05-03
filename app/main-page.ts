import { EventData } from "data/observable";
import { Page } from "ui/page";
import { topmost } from "ui/frame";


export function loaded(args: EventData){
    var page:Page = <Page> args.object;
     if (page.ios) {
        var navigationBar = topmost().ios.controller.navigationBar;
        console.log(navigationBar);
        //working iOS docs UIBarStyleBlack == 1
        navigationBar.barStyle = 1;
        //error
        //navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }
}
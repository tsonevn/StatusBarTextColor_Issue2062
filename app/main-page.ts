import { EventData } from "data/observable";
import { Page } from "ui/page";
import { topmost } from "ui/frame";


export function loaded(args: EventData){
    var page:Page = <Page> args.object;
     if (page.ios) {
        var navigationBar = topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }
}
import { Injectable, EventEmitter, Output } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CounterService{

    counter: number = 0;

    notifyStatusChanged(){
        console.log('status changed : ' + this.counter++ + ' time(s)');
    }

}
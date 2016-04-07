import {Component} from "angular2/core";
import {TodoList} from "./TodoList";

@Component({
    selector: "root",
    directives: [TodoList],
    templateUrl: "/app/views/root.html"
})
export class Root
{
    public constructor() {  }
}
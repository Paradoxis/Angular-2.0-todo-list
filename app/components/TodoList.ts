import {Component} from "angular2/core";
import {TodoService, TodoItem} from "../services/TodoService";

@Component({
    selector: "todo-list",
    providers: [TodoService],
    templateUrl: "/app/views/todo-list.html"
})
export class TodoList
{
    public list: TodoItem[];

    public constructor(todoService: TodoService)
    {
        this.list = todoService.getItems();
    }

    public add(title: string)
    {
        if (title !== "") this.list.push(new TodoItem(title));
    }

    public remove(index: number)
    {
        if (this.list[index] != null) {
            this.list.splice(index, 1);
        }
    }

    public removeCompleted(): void
    {
        var list: TodoItem[] = [];

        this.list.forEach((item) => {
            if (item.status !== "completed") {
                list.push(item);
            }
        });

        this.list = list;
    }

    public removeAll(): void
    {
        this.list = [];
    }

    public toggle(index: number)
    {
        if (this.list[index] != null) {
            if (this.list[index].status === "completed") {
                this.list[index].status = "";
            } else {
                this.list[index].status = "completed";
            }
        }
    }
}
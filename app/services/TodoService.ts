export class TodoService
{
    public getItems(): TodoItem[]
    {
        return [];
    }
}

export class TodoItem
{
    public edit: boolean = false;

    public constructor(
        public title: string,
        public status: string = ""
    ) {}
}
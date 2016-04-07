export class TodoService
{
    public getItems(): TodoItem[]
    {
        return [];
    }
    
    public authenticate() : boolean 
    {
        try {
            this.validateHasUsername();
            this.validateHasPassword();
            this.validateCredentials();
            return true;
        } catch (e) {
            return false;
        }
    }
    
    public validateHasUsername() : void 
    {
        if (this.username == "") {
            throw new Error("No username");
        }
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
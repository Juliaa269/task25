class TodoController {
    constructor() {
        this.$container = $('.container')
        this.listView = new TodoListView();
        // this.formView = new TodoFormView();

        this.$container.append(this.listView.$el);
        this.collection = new TodoCollection();

        this.collection.getCollection()
            .then(() => {
                this.listView.render(this.collection.list);
            // console.log(this.collection.list)
        });
    }
}
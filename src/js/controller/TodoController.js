class TodoController {
  constructor() {
    this.$container = $('.container');

    this.listview = new TodoListView({
      onToggle: (id) => this.onToggle(id),
      onDelete: (id) => this.onDelete(id),
    });

    this.formView = new TodoFormView({
      onAddTask: (task) => this.onAddTask(task),
    });

    this.collection = new TodoCollection();

    this.$container.append(this.listview.$el);
    this.$container.append(this.formView.$el);

    this.collection.getList().then(() => {
      this.listview.render(this.collection.list);
      // console.log(this.collection.list)
    });
  }

  onToggle(id) {
    this.collection.toggle(id);
    this.listview.render(this.collection.list);
  }

  onDelete(id) {
    this.collection.delete(id);
    this.listview.render(this.collection.list);
  }
  onAddTask(task) {
    console.log('task', task);

    this.collection.add(task).then(() => {
          this.listview.render(this.collection.list);
        });
  }
}

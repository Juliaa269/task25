class TodoController{
  constructor(){
      this.$container = $('.container');
      this.listView = new TodoListView({
          onToggle: (id) => this.onToggle(id),
          onDelete: (id) => this.onDelete(id)
      });

      this.$container.append(this.listView.$el);
      this.$container.append(this.formView.$el);

      this.formView = new TodoFormView({
        onSave: (task) => this.onSave(task)
      });

      this.collection = new TodoCollection();

      this.collection.getList()
          .then(() => {
              this.listView.render(this.collection.list)
              // console.log(this.collection.list)
          });
  }

  onToggle(id){
      this.collection.toggle(id);
      this.listView.render(this.collection.list)
  }

  onDelete(id){
      this.collection.delete(id)
      this.listView.render(this.collection.list)
  }

  onSave(task) {
    console.log('task', task)
    this.collection.add(task).then(() => {
      this.listView.render(this.collection.list)
    })
  }
}
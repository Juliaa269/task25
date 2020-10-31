class TodoFormView {
  constructor(config) {
    console.log('TodoFormView created');

    this.config = config;
    //   console.log(this.config);

    this.$addTaskBtn = $("#addTask");
    this.$todoInput = $("#input-task");
    this.initForm();
  }

  initForm() {
    this.$addTaskBtn.on("click", () => this.onAddTodoClick());
  }

  onAddTodoClick() {
    this.config.onAddTask();
  }
}

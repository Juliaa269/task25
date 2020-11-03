class TodoFormView {
  constructor(config) {
    console.log('TodoFormView created');

    this.config = config;
      // console.log(this.config);
    this.$el = this.initView();
    this.$taskInput = this.$el.find('#input-task');
  }

  initView() {
    return $(
      `<form>
        <input
          placeholder="Введите текст."
          type="text"
          name="todo"
          id="input-task"
        />
        <button class="addTask" type="submit" id="addTask">Добавить</button>
      </form>`).on('submit', (e) => this.onFormSubmit(e))
  
  }

  
  onFormSubmit(e) {
    e.preventDefault();

    const task = {
      title: this.$taskInput.val()
    }

    this.config.onAddTask(task);
    this.$taskInput.val('');
  }
}

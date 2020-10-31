class TodoListView {
    constructor() {
        console.log('TodoListView created')

        this.$el = this.initView();
    }

    initView() {
        return $(`<div id="taskList" class="task-list u-full-width"></div>`)
    }

    render(list){
        this.$el.html(list.map(this.getTodoTemplate).join('\n'))
    }

    getTodoTemplate(todoItem) {
        return `<div class="task-item u-full-width ${todoItem.isDone ? 'done' : ''}" data-todo-id="${todoItem.id}">
                    ${todoItem.title}
                    <span class="delete-btn">✘</span>
                </div>`

    }
}
class TodoCollection{
    constructor(){
        console.log('TodoCollection created')

        this.list = [];
    }

    getCollection() {
        return fetch(TODOS_URL)
            .then(res => res.json())
            .then((data) => this.list = data)
    }
}
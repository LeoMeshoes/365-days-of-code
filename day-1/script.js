const app = new Vue({
   el: ".app",
   data: {
     errorMessage: null,
     toDoList: [
     ],
     toDo: ""
     },
     methods: {
       save() {
         this.errorMessage = null
       if (!this.toDo){
         this.errorMessage = "Preencha o texto"
         return
       }
       
         this.toDoList.push({text: this.toDo, completed: false})
         this.toDo = ''
       },
       complete(toDo) {
         this.$set(toDo, 'completed', true)
       },
       remove(toDo) {
         const index = this.toDoList.indexOf(toDo)
         this.toDoList.splice(index, 1)
       }
     },
   mounted() {
         this.$refs.toDoInput.focus()
       },
   updated() {
        this.$refs.toDoInput.focus()
   }
 })
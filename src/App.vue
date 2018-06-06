<template>
  <div id="app">
    <header>
      <div v-for="(item, index) in selectors" 
      :key="index" class="selector" 
      :class="{'actived':item===show}"
      @click="filter(item)">
        <p>{{item}}</p>
      </div>
    </header>
    <div class="main">
      <add-todo></add-todo>
      <ul class="todoList">
        <todo-item v-for="item in todoItems" :key="item.number" :item="item"></todo-item>
      </ul>
      <p class="tasks">{{processingItems}} tasks left</p>
    </div>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "App",
  data() {
    return {
      selectors: ["My Tasks", "In Progress", "Completed"],
      show: "My Tasks"
    };
  },
  methods: {
    filter(selector) {
      this.show = selector;
    }
  },
  computed: {
    todoItems() {
      console.log(this.show);
      switch (this.show) {
        case "My Tasks":
          return this.$store.getters.getAllItems.sort(
            (a, b) => b.isHighlight > a.isHighlight
          );
          console.log(1);
          break;
        case "In Progress":
          return this.$store.getters.getProcessingItems.sort(
            (a, b) => b.isHighlight > a.isHighlight
          );
          console.log(2);
          break;
        case "Completed":
          return this.$store.getters.getCompletedItems.sort(
            (a, b) => b.isHighlight > a.isHighlight
          );
          console.log(3);
          break;
        default:
          console.log(4);
      }
    },
    processingItems() {
      return this.$store.getters.getProcessingItems.length;
    }
  },
  components: {
    AddTodo,
    TodoItem
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: #e1e1e1;
}

p {
  margin: 0;
}

header {
  width: 100%;
  height: 76px;
  background: #4a90e2;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .selector {
    padding: 0 30px;
    position: relative;
    height: 71px;
    line-height: 71px;
    cursor: pointer;

    p {
      font-family: Roboto-Medium;
      font-size: 24px;
      color: #00408b;
      text-align: center;
    }
  }

  .selector.actived {
    border-bottom: 5px solid #00408b;
    p {
      color: #ffffff;
    }
  }
}

.main {
  width: 620px;
  margin: 0 auto;

  ul {
    margin: 24px 0 0 0;
    padding: 0;
    list-style: none;
  }

  .tasks {
    font-family: Roboto-Italic;
    font-size: 24px;
    color: #c8c8c8;
    padding-left: 32px; 
  }
}
</style>


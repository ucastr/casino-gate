<template>
  <NavView :permissions="permissions" />
  <div id="MainView">
    <HeaderComponent :breadcrumbs="breadcrumbs" />
    <div class="content-block">
      <div class="inner-content">
        <AddItemComponent @add="addItem" />
        <ListComponent :items="dados" @edit="editItem" @delete="deleteItem" />
      </div>
    </div>
  </div>
</template>

<script>
import NavView from "./NavView.vue";
import HeaderComponent from "./HeaderComponent.vue";
import ListComponent from "./ListComponent.vue";
import AddItemComponent from "./AddItemComponent.vue";

export default {
  components: {
    NavView,
    HeaderComponent,
    ListComponent,
    AddItemComponent,
  },
  data() {
    return {
      permissions: [],
      breadcrumbs: [
        { title: "GAMEMANAGER", link: "/gamemanager" },
        { title: "All Games", link: "" },
      ],
      dados: [
        { type: "gamemanager", propriedade5: "valor1", propriedade6: "valor2" },
        // Adicione mais objetos com diferentes tipos e propriedades conforme necessário
      ],
    };
  },
  methods: {
    editItem(index) {
      // Lógica para editar item
      console.log("edit item = ", index);
    },
    deleteItem(index) {
      // Lógica para excluir item
      console.log("delete item = ", index);
    },
    addItem(newItem) {
      this.items.push(newItem);
    },
  },
};
</script>

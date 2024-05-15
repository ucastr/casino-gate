<template>
  <div>
    <!-- Lista de itens -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div v-if="item.type === 'tournaments'">
          {{ item.propriedade1 }} - {{ item.propriedade2 }} -
          <button @click="editItem(index)">Editar</button>
          <button @click="deleteItem(index)">Excluir</button>
        </div>
        <div v-else-if="item.type === 'marketplace'">
          {{ item.propriedade3 }} - {{ item.propriedade4 }} -
          <button @click="editItem(index)">Editar</button>
          <button @click="deleteItem(index)">Excluir</button>
        </div>
        <div v-else-if="item.type === 'gamemanager'">
          {{ item.propriedade5 }} - {{ item.propriedade6 }} -
          <button @click="editItem(index)">Editar</button>
          <button @click="deleteItem(index)">Excluir</button>
        </div>
        <!-- Adicione mais condições conforme necessário para outros tipos -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    editItem(index) {
      this.$emit("edit", index);
    },
    deleteItem(index) {
      this.$emit("delete", index);
    },
  },
};
</script>

<template>
  <div>
    <!-- Formulário para adicionar novo item -->
    <form @submit.prevent="saveItem">
      <input type="text" v-model="name" placeholder="Nome" />
      <input type="text" v-model="description" placeholder="Descrição" />
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    saveItem() {
      const newItem = { name: this.name, description: this.description };
      this.$emit("add", newItem);
      // Limpar campos do formulário após adicionar o item
      this.name = "";
      this.description = "";
    },
  },
};
</script>

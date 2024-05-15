<template>
  <NavView />
  <div id="MainView">
    <HeaderComponent :breadcrumbs="breadcrumbs" />
    <div class="content-block">
      <layout-div>
        <router-link to="/add" class="btn btn-outline-primary addButton"
          >NEW ITEM
        </router-link>
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th width="240px">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in projects" :key="project.id">
                <td>{{ project.name }}</td>
                <td>{{ project.description }}</td>
                <td>
                  <router-link
                    :to="`/show/${project.id}`"
                    class="btn btn-outline-info mx-1"
                    >Show</router-link
                  >
                  <router-link
                    :to="`/edit/${project.id}`"
                    class="btn btn-outline-success mx-1"
                    >Edit</router-link
                  >
                  <button
                    @click="handleDelete(project.id)"
                    className="btn btn-outline-danger mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </layout-div>
    </div>
  </div>
</template>

<script>
import NavView from "../NavView.vue";
import HeaderComponent from "../HeaderComponent.vue";
import axios from "axios";
import LayoutDiv from "../LayoutDiv.vue";
import Swal from "sweetalert2";

export default {
  name: "MarketPlaceList",
  components: {
    LayoutDiv,
    NavView,
    HeaderComponent,
  },
  data() {
    return {
      projects: [],
      breadcrumbs: [
        { title: "Marketplace", link: "/marketplace" },
        { title: "All Items", link: "" },
      ],
    };
  },
  created() {
    this.fetchProjectList();
  },
  methods: {
    NavView,
    HeaderComponent,
    fetchProjectList() {
      axios
        .get("https://staging.casinogate.pt/backoffice/get-items")
        .then((response) => {
          this.projects = response.data;
          console.log(response.data);
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    handleDelete(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://staging.casinogate.pt/backoffice/delete-feature${id}`
            )
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Project deleted successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              this.fetchProjectList();
              return response;
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "An Error Occured!",
                showConfirmButton: false,
                timer: 1500,
              });
              return error;
            });
        }
      });
    },
  },
};
</script>

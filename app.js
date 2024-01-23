const vm = Vue.createApp({
  data() {
    return {
      worker: {},
      persons: [],
      departmentList: ["Dasturlash", "Dizayn", "Marketin"],
      search: "",
    };
  },
  methods: {
    add() {
      console.log(this.worker.department);
      if ((!this.worker.name || !this.worker.age) ?? !this.worker.department)
        return false;
      this.persons.push(this.worker);
      this.worker = {};
    },
  },
  computed: {
    dasturlashXodimlar() {
      return this.persons.filter((person) => person.department == 0).length;
    },
    dizaynXodimlar() {
      return this.persons.filter((person) => person.department == 1).length;
    },
    marketingXodimlar() {
      return this.persons.filter((person) => person.department == 2).length;
    },
    newPersons() {
      return this.persons.filter(
        (person) =>
          person.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1
      );
    },
  },
});

vm.mount("#app");

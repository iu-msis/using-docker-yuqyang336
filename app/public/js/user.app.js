var user = new Vue({
  el: '#user',
  data: {
    user: []
  },
  methods: {
    fetchuser() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {user.user = json});
    }
  },
  created() {
    this.fetchuser()
  }
  });

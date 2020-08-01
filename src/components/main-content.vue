<template>
  <div class="main-content">
    <h1 class="main-content__title">JackYapa6eu</h1>
    <p class="main-content__description">{{helloWord}}, дорогой друг! Этот сайт я сделал в основном для себя, но если у тебя есть музыка/фильмы/сериалы или какой-нибудь вкусный рецептик, которым ты хочешь поделиться, то милости прошу!
    </p>
  </div>
</template>

<script>
export default {
  name: 'mainContent',
  data () {
    return {
      helloWord: '',
    }
  },
  mounted() {
    this.$root.location = '';
    this.timeOfDay();
  },
  methods: {
    timeOfDay() {
      let now = new Date();
      let hours = now.getHours();
      if (hours > 3 && hours < 12) {
        this.helloWord = 'Добрейшее утречко';
      } else if (hours > 11 && hours < 18) {
        this.helloWord = 'Добрейший денечек';
      } else if (hours > 17 && hours <= 23) {
        this.helloWord = 'Добрейший вечерочек'
      } else if (hours >= 0 && hours < 3) {
        this.helloWord = 'Добрейшей ночи'
      }
    }
  }
}
</script>

<style>

</style>

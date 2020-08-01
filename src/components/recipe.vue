<template>
  <div v-if="loading"></div>
  <article class="recipe decor" v-else>
    <h2 class="recipe__title">{{recipe.name}}</h2>
    <p><span>Время приготовления:</span> <span>{{recipe.time}}</span></p>
    <img class="recipe__image" :src="recipe.images[0]" alt="итоговое изображение">
    <div class="recipe__composition">
      <div class="recipe__ingredients">
        <span>Ингридиенты</span>
        <div class="recipe__portions">
          <span>Порций</span>
          <span @click="reducePortions()"> - </span>
          <span>{{newPortions}}</span>
          <span @click="increasePortions()"> + </span>
        </div>
      </div>
      <div class="recipe__composition-item" v-for="(item, index) in recipe.ingridients" v-bind:key="index">
        <span>{{item.name}}</span>
        <div class="recipe__dots"></div>
        <span>{{countIngridients(item.count, recipe.portions, item.unit)}}</span>
      </div>
    </div>
    <article style="display: flex; flex-direction: column;" v-html="recipe.text"></article>
  </article>
</template>

<script>
export default {
  name: 'recipe',
  data () {
    return {
      recipe: {},
      newPortions: 1,
      loading: true
    }
  },
  mounted() {
    this.$root.location = 'recipe';
    console.log('mounted recipe');
    this.loadRecipe();
  },
  methods: {
    loadRecipe() {
      let self = this;
      let recipeRef = firebase.database().ref('recipes/' + this.$route.params.Rid);
      recipeRef.once('value', (snapshot) => {
        self.loading = false;
          if (snapshot.val() === null) {
            return
          }
          let obj = snapshot.val();
          self.recipe = obj;
          self.newPortions = obj.portions;
          console.log(obj);
      });
    },
    reducePortions() {
      if (this.newPortions === 1) {
        return
      }
      else {
        this.newPortions--;
      }
    },
    increasePortions() {
      this.newPortions++;
    },
    countIngridients(count, portions, unit) {
      let result = count / portions * this.newPortions;
      console.log(count, portions);
      if (result < 1) {
        if (result < 0.02) {
          return 'по вкусу'
        }
        else {
          return result.toFixed(2) + unit
        }
      }
      else {
        return result.toFixed(0) + unit
      }
    }
  },

}
</script>

<style>
  @import url(../blocks/recipe/recipe.css);
</style>

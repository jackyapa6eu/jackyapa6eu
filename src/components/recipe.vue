<template>
  <div v-if="loading"></div>
  <article class="recipe" v-else>
    <h2 class="recipe__title">{{recipe.name}}</h2>
    <p><span>Время приготовления:</span> <span>{{recipe.time}}</span></p>
    <img class="recipe__image" :src="recipe.images[0]" alt="итоговое изображение">
    <div class="recipe__ingredients">
      <span>Ингридиенты</span>
      <div class="recipe__portions">
        <span v-if="recipe.type === 'cake'">Диаметр</span>
        <span v-else>Порций</span>
        <span @click="reducePortions()"> - </span>
        <span>{{newPortions}}</span>
        <span @click="increasePortions()"> + </span>
      </div>
    </div>
    <div class="recipe__full-composition" @click.stop="toggleSpoiler" v-if="recipe.ingridientsFor.length > 1">
      <h4 class="recipe__composition-title">Весь состав</h4>
      <div class="recipe__composition-item" v-for="(item, index) in fullList" 
      v-bind:key="'index___' + index" 
      @click="highLightListItem"
      > 
        <span>{{item.name}}</span>
        <div class="recipe__dots"></div>
        <span>{{countIngridients(item.count, recipe.portions, item.unit, recipe.type)}}</span>
      </div>
    </div>
    <div class="recipe__composition">
      <div class="recipe__part-of-composition spoiler-container" v-for="(subRecipe, index) in recipe.ingridientsFor" v-bind:key="'index__' + index" @click="toggleSpoiler">
        <h4 class="recipe__composition-title">{{subRecipe.name}}</h4>
        <div class="recipe__composition-item" v-for="(item, index) in subRecipe.ingridients" 
          v-bind:key="index" 
          @click="highLightListItem"
        >
          <span>{{item.name}}</span>
          <div class="recipe__dots"></div>
          <span>{{countIngridients(item.count, recipe.portions, item.unit, recipe.type)}}</span>
        </div>
        <p class="recipe__text">{{subRecipe.text}}</p>
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
      fullList: [],
      recipe: {},
      newPortions: 1,
      loading: true
    }
  },
  mounted() {
    this.$root.location = 'recipe';
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
          self.getFullList();
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
    countIngridients(count, portions, unit, type) {
      let result
      if (type === 'cake') {
        let k = 3.14 * (portions / 2)*(portions / 2);
        let nK = 3.14 * (this.newPortions / 2)*(this.newPortions / 2);
        result = (nK / k) * count;
      }
      else {
        result = count / portions * this.newPortions;     
      }
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
    },
    highLightListItem(event) {
      event.currentTarget.classList.toggle('recipe__composition-item_active');
    },
    getFullList() {
      let arrOfArrays = [];
      for (let i = 0; i < this.recipe.ingridientsFor.length; i++) {
        arrOfArrays.push(this.recipe.ingridientsFor[i].ingridients);
      }
      this.fullList = arrOfArrays.flat(1).map( x => JSON.parse(JSON.stringify(x))).reduce( (acc,cur) => { 
        let idx = acc.findIndex((el) => el.name === cur.name);
        if (idx < 0) acc.push(cur);
        else acc[idx].count = Number(acc[idx].count) + Number(cur.count);
        return acc;
      }, []);
    },
    toggleSpoiler() {
      if (event.currentTarget === event.target) {
        event.currentTarget.classList.toggle('spoiler-container');
      }
    }
  },

}
</script>

<style>
  @import url(../blocks/recipe/recipe.css);
</style>

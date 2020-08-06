<template>
  <div class="recipes-container">
    <div class="add-new-btn decor" @click="$root.routeTo('add-new-recipe')"></div>
    <div class="recipes">
      <div v-for="recipe in recipes" class="recipes__item decor" v-bind:key="recipe.id" @click="openRecipe(recipe.id)">
        <h3 class="recipes__title">{{recipe.name}}</h3>
        <div class="recipes__bg-box" v-bind:style='{ backgroundImage: "url(" + recipe.images[0] + ")" }'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipes',
  data () {
    return {
      recipes: []
    }
  },
  mounted() {
    this.$root.location = 'recipes';
    let self = this;
    let recipesRef = firebase.database().ref('recipes/');
    recipesRef.once('value', (snapshot) => {
        if (snapshot.val() === null) {
            return
        }
        let obj = snapshot.val();
        console.log(obj);
        /*Object.keys(obj)[0] это будет имя ключа
        // длинна Object.keys(obj).length
        obj[Object.keys(obj)[0]] это будет значение */
        for (let i = 0; i < Object.keys(obj).length; i++) {
            let recipe = obj[Object.keys(obj)[i]];
            recipe.id = Object.keys(obj)[i];
            self.recipes.unshift(recipe);
        }
        console.log(self.recipes);
    });
  },
  methods: {
    openRecipe(id) {
        this.$router.push({name: 'recipe', params:{Rid: id}});
    }
  },


}
</script>

<style>
@import url(../blocks/recipes-container/recipes-container.css);
@import url(../blocks/add-new-btn/add-new-btn.css);
@import url(../blocks/recipes/recipes.css);
</style>

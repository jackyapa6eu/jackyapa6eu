import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/components/main-content.vue'
import user from '@/components/user.vue'
import frontEnd from '@/components/front-end.vue'
import recipes from '@/components/recipes.vue'
import recipe from '@/components/recipe.vue'
import newRecipe from '@/components/add-new-recipe.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/frontEnd',
      name: 'fronEnd',
      component: frontEnd
    },
    { path: '/recipes/:Rid',
      name: 'recipe',
      component: recipe
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: recipes
    },
    {
      path: '/add-new-recipe',
      name: 'add-new-recipe',
      component: newRecipe
    }
  ]
})

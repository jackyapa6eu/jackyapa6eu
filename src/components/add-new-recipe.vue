<template>
  <div class="add-new-recipe border" style="min-height: 80vh;">
    <input type="text" placeholder="название рецепта" v-model="newRecipe.name">
    <input type="text" placeholder="время приготовления" v-model="newRecipe.time">
    <input type="number" placeholder="количество порций" v-model="newRecipe.portions">
    <p>Ингридиенты</p>
    <div v-for="(ingridient, index) in newRecipe.ingridients" v-bind:key="'index_' + index" style="display: flex">
      <input type="text" placeholder="название ингридиента" v-model="ingridient.name">
      <input type="number" placeholder="количество" v-model="ingridient.count">
      <input type="text" placeholder="ед. измерения" v-model="ingridient.unit">
    </div>
    <div style="display: flex">
      <span @click="addIngridient()">___+____</span>||<span @click="deleteIngridient()">___-____</span>
    </div>
    <input class="" type="file" id="file" ref="myFiles" @change="uploadImage()" accept="image/jpeg,image/png">
    <div v-for="(img, index) in newRecipe.images" v-bind:key="index">
      <img :src="img" width="50px" height="50px"><span @click="pushImgToText(img)">добавить в текст</span>_<span>удалить</span>
    </div>
    <textarea v-model="newRecipe.text"></textarea>
    <span @click="sendNewRecipe()">____SEND NEW RECIPE____</span>
  </div>
<!---
  <article class="recipe border">
    <h2 class="recipe__title">Простой и вкусный рецепт куриных крылышек.</h2>
    <p><span>Время приготовления:</span> <span>50 минут</span></p>
    <img class="recipe__image" src="../assets/recipe-main-image.jpg">
    <div class="recipe__composition">
      <div class="recipe__ingredients">
        <span>Ингридиенты</span>
        <div class="recipe__portions">
          <span>Порций</span>
          <span> - </span>
          <span> 5 </span>
          <span> + </span>
        </div>
      </div>
      <div class="recipe__composition-item">
        <span>Курочка</span>
        <div class="recipe__dots"></div>
        <span>250г</span>
      </div>
      <div class="recipe__composition-item">
        <span>Соевый соус</span>
        <div class="recipe__dots"></div>
        <span>50 мл</span>
      </div>
      <div class="recipe__composition-item">
        <span>Чеснок</span>
        <div class="recipe__dots"></div>
        <span>2 зубчика</span>
      </div>
    </div>
    <img class="recipe__image" src="../assets/recipe-sostav-image.jpg">
      Куриные крылышки выложить в глубокую посуду.
      Подавить чеснок, залить соевый соус, перемешать и оставить мариноваться на 15 минут.
      Еще раз перемешать и мариновать еще минимум 15 минут.
      Духовку разогреть до 180С* на режиме конвекции.
      Выложить курицу на противень, предварительно постелив фальгу.
      Жарить в течение 50 минут.
      После первых 25-ти минут перевернуть крылышки.
      Через 50 минут курочка готова!
      Вы великолепны!
  </article>
  --->
</template>

<script>
export default {
  name: 'new-recipe',
  data () {
    return {
      newRecipe: {
        name: '',
        time: '',
        portions: 0,
        images: [],
        text: '',
        ingridients: [
          {
            name: '',
            count: 0,
            unit: '',
            inStock: false
          }
        ]
      },

    }
  },
  mounted() {
    this.$root.location = 'new-recipe';
  },
  methods: {
    addIngridient() {
      this.newRecipe.ingridients.push({
        name: '',
        count: 0,
        unit: '',
        inStock: false
      })
    },
    deleteIngridient() {
      this.newRecipe.ingridients.pop();
    },
    uploadImage() {
        var self = this;
        this.files = this.$refs.myFiles.files;
        var storageRef = firebase.storage().ref();
        let file = this.files[0];
        let name = (Math.random() * 9999).toString(16);
        storageRef.child(name).put(file).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then(function(downloadURL) {
                self.newRecipe.images.push(downloadURL);
            })
        });
    },
    pushImgToText(url) {
      this.newRecipe.text += `<img class="recipe__image" src="${url}" alt="картинка рецепта">`;
    },
    sendNewRecipe() {
        let updates = {};
        updates['recipes/' + this.$root.translit(this.newRecipe.name)] = this.newRecipe;

        return firebase.database().ref().update(updates);
    }
  },

}
</script>

<style>
  .add-new-recipe {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }
</style>

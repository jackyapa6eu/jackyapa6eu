<template>
  <div class="add-new-recipe" style="min-height: 80vh; border: solid 2px purple">
    <label>Название рецепта</label>
    <input type="text" placeholder="название рецепта" v-model="newRecipe.name">
    <label>время приготовления</label>
    <input type="text" placeholder="время приготовления" v-model="newRecipe.time">

    <input type="radio" id="meal" value="meal" v-model="newRecipe.type" checked>
    <label for="meal">Блюдо</label>
    <input type="radio" id="cake" value="cake" v-model="newRecipe.type">
    <label for="cake">Торт</label>
    <label v-if="newRecipe.type === 'cake'">Диаметр кольца</label>
    <label v-else>Количество порций</label>
    <input type="number" placeholder="количество порций" v-model="newRecipe.portions">
    <p>Ингридиенты</p> 
    <div v-for="(item, index) in newRecipe.ingridientsFor" v-bind:key="'i_' + index" style="display: flex; flex-direction: column;  margin-bottom: 30px; border: solid 3px red" >
      {{item.name}}
      <div v-for="(ingridient, index) in item.ingridients" v-bind:key="'index_' + index" style="display: flex; flex-direction: column;margin: 0 auto; margin-bottom: 20px; width: 70%; border: solid 3px green">
        <label style="width: 100%;">Название ингридиента</label>
        <input type="text" placeholder="название ингридиента" v-model="ingridient.name" required>
        <label style="width: 100%;">Количество</label>
        <input type="number" placeholder="количество" v-model="ingridient.count">
        <label style="width: 100%;">Единицы измерения</label>
        <input type="text" placeholder="ед. измерения" v-model="ingridient.unit">
      </div>
      <button @click="addIngridient(item.ingridients)">Добавить Ингридиент</button>
      <textarea v-model="item.text"></textarea>
      
    </div>
    <div>
      <button @click="addSubRecipe">Добавить подрецепт для</button> 
      <input type="text" placeholder="название подрецепта" v-model="subRecipeName"> 
    </div>
    <input class="" type="file" id="file" ref="myFiles" @change="uploadImage()" accept="image/jpeg,image/png">
    <div v-for="(img, index) in newRecipe.images" v-bind:key="index">
      <img :src="img" width="50px" height="50px"><span @click="pushImgToText(img)">добавить в текст</span>_<span>удалить</span>
    </div>
    <textarea v-model="newRecipe.text"></textarea>
    <span @click="sendNewRecipe()">____SEND NEW RECIPE____</span>
  </div>
</template>

<script>
export default {
  name: 'new-recipe',
  data () {
    return {
      subRecipeName: '',
      newRecipe: {
        type: 'meal',
        name: '',
        time: '',
        portions: 0,
        images: [],
        text: '',
        ingridientsFor: [],
      },

    }
  },
  mounted() {
    this.$root.location = 'new-recipe';
  },
  methods: {
    addIngridient(arr) {
      arr.push({
        name: '',
        count: 0,
        unit: '',
      })
    },
    addSubRecipe() {
      this.newRecipe.ingridientsFor.push(
        {
        name: this.subRecipeName,
        ingridients: [
          {
            name: '',
            count: 0,
            unit: '',
          },
        ],
        text: ''
        }
      )
      this.subRecipeName = '';
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
      if (this.newRecipe.name === '') {
        return
      }
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
    width: 80%;
    margin: 0 auto;
  }
</style>

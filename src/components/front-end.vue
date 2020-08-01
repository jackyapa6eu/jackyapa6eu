<template>
  <div class="front-end">
    <div class="add-new-btn decor" @click="toggleAddNewCheatSheet()" v-if="!addNewCheatSheet"></div>
    <div class="add-new-container border" v-if="addNewCheatSheet">
      <div class="add-new-btn add-new-btn__close" @click="toggleAddNewCheatSheet()"></div>
      <div class="add-new-container__controls">
        <span @click="addCode()" style="color: black;">code</span>
        <span @click="addBold()" style="color: black;">bold</span>
      </div>
      <input type="text" class="add-new-container__titlearea" v-model="newCheatSheetTitle" placeholder="Введите заголовок">
      <textarea class="add-new-container__textarea" v-model="newCheatSheetText">
      </textarea>
      <div class="add-new-container__send-btn" @click="sendCheatSheet()"></div>
    </div>
    <div class="cheat-sheets-container" v-if="!addNewCheatSheet">
      <article v-for="(cheatSheet, index) in cheatSheets" v-bind:key="index" class="cheat-sheet decor">
        <h3 class="cheat-sheet__title" @click.stop="toggleCheatSheet(index)">{{cheatSheet.title}}</h3>
        <transition name="test">
          <p class="cheat-sheet__text" v-if="cheatSheet.open" v-html="decodeText(cheatSheet.text)"></p>
        </transition>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'frontEnd',
  data () {
    return {
      addNewCheatSheet: false,
      newCheatSheetText: '',
      newCheatSheetTitle: '',
      cheatSheets: []
    }
  },
  methods: {
    addCode() {
      let selectionStart = document.querySelector('.add-new-container__textarea').selectionStart;
      let selectionEnd = document.querySelector('.add-new-container__textarea').selectionEnd;
      this.newCheatSheetText = this.newCheatSheetText.slice(0, selectionStart) +
        '[code]' + this.newCheatSheetText.slice(selectionStart, selectionEnd) +
        '[/code]' + this.newCheatSheetText.slice(selectionEnd);
    },
    addBold() {
      let selectionStart = document.querySelector('.add-new-container__textarea').selectionStart;
      let selectionEnd = document.querySelector('.add-new-container__textarea').selectionEnd;
      this.newCheatSheetText = this.newCheatSheetText.slice(0, selectionStart) +
        '[bold]' + this.newCheatSheetText.slice(selectionStart, selectionEnd) +
        '[/bold]' + this.newCheatSheetText.slice(selectionEnd);
    },
    replaceCode(text) {
      let startCode = /(\[code])/g;
      let endCode = /(\[\/code])/g;
      let replacedText = text.replace(startCode, `<span class="cheat-sheet__code">`).replace(endCode, `</span>`);
      return replacedText
    },
    replaceBold(text) {
      let startBold = /(\[bold])/g;
      let endBold = /(\[\/bold])/g;
      let replacedText = text.replace(startBold, `<span class="cheat-sheet__bold">`).replace(endBold, `</span>`);
      return replacedText
    },
    decodeText(text) {
      let decodedText = this.replaceCode(text);
      decodedText = this.replaceBold(decodedText);
      return decodedText
    },
    toggleCheatSheet(index) {
      this.cheatSheets[index].open = !this.cheatSheets[index].open;
    },
    toggleAddNewCheatSheet() {
      this.addNewCheatSheet = !this.addNewCheatSheet;
    },
    sendCheatSheet() {
      console.log('sendCheatSheet()');
      if (this.newCheatSheetText === '') {
          return
      }
      else {
        let newCheatSheet = {
            text: this.newCheatSheetText,
            title: this.newCheatSheetTitle,
            open: false,
            order: this.cheatSheets.length + 1
        }
        this.cheatSheets.push(newCheatSheet);
        let updates = {};
        updates['frontEnd/'] = this.cheatSheets;
        this.newCheatSheetTitle = '';
        this.newCheatSheetText = '';
        this.toggleAddNewCheatSheet();
        return firebase.database().ref().update(updates);
      }
    }
  },
  mounted() {
    console.log('front-end mounted');
    this.$root.location = 'frontEnd';
    const self = this;
    let cheatSheetsRef = firebase.database().ref('frontEnd/');
    cheatSheetsRef.on('value', (snapshot) => {
        if (snapshot.val() === null) {
            return
        }
        self.cheatSheets = snapshot.val();
    });
  }
}
</script>

<style>
  @import url(../blocks/cheat-sheet/cheat-sheet.css);
  @import url(../blocks/add-new-btn/add-new-btn.css);
  @import url(../blocks/add-new-btn/__close/add-new-btn__close.css);
  @import url(../blocks/add-new-container/add-new-container.css);
</style>

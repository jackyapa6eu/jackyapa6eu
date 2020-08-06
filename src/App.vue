<template>
  <div id="app">
    <header class="header decor">
        <div class="logo logo_place_header" @click="goTo('')">
          <div class="logo__item"></div>
          <div class="logo__item"></div>
          <div class="logo__item"></div>
          <div class="logo__item"></div>
        </div>
        <input type="checkbox" id="burger-menu" class="header__burger-menu-checkbox">
        <label class="header__burger-menu" for="burger-menu"></label>
        <transition name="appearing">
          <nav class="nav nav_place_header">
            <ul class="menu menu_place_header">
              <li class="menu__link menu__link_place_header" @click="goTo('frontEnd')" v-bind:class="{menu__link_active: $root.location === 'frontEnd' }">frontend</li>
              <li class="menu__link menu__link_place_header" @click="goTo('music')" v-bind:class="{menu__link_active: $root.location === 'music' }">Музыка</li>
              <li class="menu__link menu__link_place_header" @click="goTo('toWatch')" v-bind:class="{menu__link_active: $root.location === 'toWatch' }">Что посмотреть</li>
              <li class="menu__link menu__link_place_header" @click="goTo('recipes')" v-bind:class="{menu__link_active: $root.location === 'recipes' }">Рецепты</li>
              <li class="menu__link menu__link_place_header" @click="goTo('user')" v-bind:class="{menu__link_active: $root.location === 'user' }">Профиль</li>
            </ul>
          </nav>
        </transition>
    </header>
    <router-view/>
    <footer class="footer">
      <div class="footer__row">
      </div>
      <div class="footer__row footer__row_content_social">
        <a class="footer__link" href="https://www.instagram.com/jackyapa6eu/" target="_blank">
          <img class="footer__social-img" src="./assets/instagram-icon.png" alt="иконка instagram">
        </a>
        <a class="footer__link" href="https://www.facebook.com/profile.php?id=100010492893966" target="_blank">
          <img class="footer__social-img" src="./assets/facebook-icon.png" alt="иконка facebook">
        </a>
        <a class="footer__link" href="https://vk.com/yapa6eu" target="_blank">
          <img class="footer__social-img" src="./assets/vk-icon.png" alt="иконка vkontakte">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goTo(direction) {
      this.$root.location = direction;
      this.$root.routeTo(direction);
    }
  },
  mounted() {
    let global = this.$root;
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      global.signedIn = true;
      global.user.email = user.email;
      global.user.displayName = user.displayName;
      global.user.uid = user.uid;
    } else {

      }
    });

  }
}

</script>

<style>
@import url(./blocks/fonts/fonts.css);
@import url(./blocks/header/header.css);
@import url(./blocks/logo/logo.css);
@import url(./blocks/nav/nav.css);
@import url(./blocks/menu/menu.css);
@import url(./blocks/main-content/main-content.css);
@import url(./blocks/footer/footer.css);
@import url(./blocks/user-container/user-container.css);
@import url(./blocks/user-section/user-section.css);
@import url(./blocks/front-end/front-end.css);
@import url(./blocks/decor/decor.css);
@import url(./blocks/spoiler-container/spoiler-container.css);

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  overflow-x: hidden;
  margin: 0 auto;
}

.body {
  background: #19171D;
  font-family: 'Noto Sans';
  color: #D1D2D3;
}

::selection {
  color: #19171D;
  background-color: #D1D2D3;
}

.body::-webkit-scrollbar {
  width: 0;
}

@media screen and (min-width: 1280px) {
  #app {
    max-width: 1280px;
  }
}

</style>

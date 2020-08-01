<template>
  <div class="user-container">
    <section class="user-section decor" v-if="$root.signedIn">
      <p class="user-section__text">{{$root.user.displayName}}</p>
      <p class="user-section__text">{{$root.user.email}}</p>
      <p class="user-section__text" @click="signOut()">Выход</p>
    </section>
    <section class="user-section decor" v-else-if="signUp">
        <h2 class="user-section__title">Регистрация</h2>
        <span class="user-section__error-message" v-if="error">{{errorMessage}}</span>
        <form class="user-section__form" @submit.prevent="registerUser">
          <input type="email" class="user-section__input" id="email" placeholder="Email" required v-model="user.email">
          <input type="name" class="user-section__input" id="nickname" placeholder="Nickname" required v-model="user.displayName">
          <input type="password" class="user-section__input" id="signUpPassword" placeholder="Пароль" required v-model="user.password">
          <input type="password" class="user-section__input" id="password2" placeholder="Повтор пароля" required v-model="user.confirmPassword">
          <button type="submit" class="user-section__btn">Зарегистрироваться</button>
        </form>
        <div class="user-section__question">
          <p class="user-section__description">
            уже есть аккаунт?
          </p>
          <span class="user-section__question-btn" @click="signInSignUpShow('signIn')">
            авторизоваться
          </span>
        </div>
    </section>
    <section class="user-section decor" v-else-if="signIn">
        <h2 class="user-section__title">Авторизация</h2>
        <span class="user-section__error-message" v-if="error">{{errorMessage}}</span>
        <form class="user-section__form" @submit.prevent="logIn">
          <input type="email" class="user-section__input" id="email" placeholder="Email" required v-model="user.email">
          <input type="password" class="user-section__input" id="signUpPassword" placeholder="Пароль" required v-model="user.password">
          <button type="submit" class="user-section__btn">Войти</button>
        </form>
        <div class="user-section__question">
          <p class="user-section__description">
            еще нет аккаунта?
          </p>
          <span class="user-section__question-btn" @click="signInSignUpShow('signUp')">
            зарегистрироваться
          </span>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      signIn: true,
      signUp: true,
      error: false,
      errorMessage: 'ErrorMessage',
      user: {
          email: '',
          displayName: '',
          password: '',
          confirmPassword: '',
          photoURL: 'https://img2.freepng.ru/20180604/tap/kisspng-profile-of-a-person-drawing-clip-art-man-head-5b156a49902c44.8825949315281301215905.jpg',

      },
    }
  },
  mounted() {
    this.$root.location = 'user';
  },
  methods: {
    registerUser() {
        let self = this;
        if (self.user.password !== this.user.confirmPassword) {
            self.errorMessage = 'Пароли не совпадают.';
            self.showError();
            return
        }
        else if(self.user.password.length < 6) {
            self.errorMessage = 'Минимум 6 символов.';
            self.showError();
            return
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
            .then( (response) => {
                if (response.operationType !== 'signIn') {
                    self.errorMessage = 'Неизвестная ошибка.';
                    self.showError();
                } else {
                    var user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: self.user.displayName,
                        photoURL: self.user.photoURL,
                                }).then(function() {
                                    self.$root.user.displayName = self.user.displayName;
                                    self.addNewUser();
                                    self.$root.routeTo('');
                                    // Update successful.
                                }).catch(function(error) {
                                    self.errorMessage = 'Неизвестная ошибка.';
                                    self.showError();
                                });
                        }
            })
            .catch( (error) => {
                if (error.code === "auth/email-already-in-use") {
                    self.errorMessage = 'Данный email уже используется.';
                    self.showError();
                }
                else {
                    self.errorMessage = 'Неизвестная ошибка';
                    self.showError();
                }
            })
        }
    },
    logIn() {
        const self = this;
        firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
            .then( response => {
                self.$router.push({path: '/'});
                })
            .catch( error => {
                if (error.code === "auth/user-not-found") {
                    self.errorMessage = 'Пользователь не найден.'
                }
                else if (error.code === "auth/wrong-password") {
                    self.errorMessage = 'Неправильный пароль.';
                }
                else if (error.code === "auth/too-many-requests") {
                    self.errorMessage = 'Слишком частые запросы, попробуйте позднее';
                }
                else {
                    self.errorMessage = 'Неизвестная ошибка, попробуйте позднее.'
                }
                self.showError();
            })
    },
    addNewUser() {
        let newUserKey = firebase.database().ref().child('users/').push().key;
        var userData = {
          displayName: this.user.displayName,
          email: this.$root.user.email,
          vk: 'vk',
          instagram: 'instagram',
          facebook: 'facebook'
        };
        return firebase.database().ref().child('users/').update({
            [this.$root.user.uid]: userData
        });
    },
    showError() {
        let self = this;
        self.error = true;
        setTimeout(function(){
            self.error = false;
            self.errorMessage = '';
        }, 2000)
    },
    signInSignUpShow(choice) {
      if (choice === 'signIn') {
        this.signIn = true;
        this.signUp = false;
      }
      else if (choice === 'signUp') {
        this.signUp = true;
        this.signIn = false;
      }
    },
    signOut() {
      let self = this;
      firebase.auth().signOut().then(function() {
        self.$root.signedIn = false;
        self.$root.routeTo('');
        console.log('signOut success');
      }).catch(function(error) {
      });

    },
  }
}
</script>

<style>



</style>

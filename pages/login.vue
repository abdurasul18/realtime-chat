<template>
  <v-parallax dark src="https://picsum.photos/400/700">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="text-h4 font-weight-thin mb-4">Login</h1>
        <h4 class="subheading">
          Please, login with google account for continue
        </h4>
        <div>
          <v-btn @click="login" class="ma-2" color="info">
            <v-icon class="mr-2"> mdi-google </v-icon>
            login with google
            <template v-slot:loader>
              <span class="custom-loader">
                <v-icon light>mdi-cached</v-icon>
              </span>
            </template>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          console.log(user);
          console.log(token);
        this.$store.commit('SET_USER', {
            name : user.displayName,
            email : user.email,
            photoUrl : user.photoURL,
            token : token

        })
        this.$router.push('/')

        })
        .catch((error) => {
             this.$store.commit('SET_USER', '')
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    },
  },
};
</script>

<style>
</style>
<template>
  <v-container>
    <div class="chat-wrapper">
      <div class="messages">
        <div class="sms-box" v-for="(message, i) in messages" :key="i">
          <v-card
            class="mx-auto  mb-5"
            :class="{'float-right' : message.name== user.name, 'float-left' : message.name != user.name}"
            :color="color(message)"
            dark
            max-width="70%"
          >
            <v-card-title>
              <img :src="message.photoUrl" class="prof-img">
              <span class="text-h6 font-weight-light">{{message.name}}</span>
            </v-card-title>

            <v-card-text color="red" class="text-h5 font-weight-bold">
              {{ message.message }}
              <div class="text-right ">
                {{ timeFormat(message.created_at.seconds*1000) }}
              </div>
            </v-card-text>
           
          </v-card>
        </div>
        <div id="scroller"></div>
      </div>
      <div class="send-msg-wrapper">
        <v-container class="send-container">
          <v-text-field
            class="message-input"
            placeholder="Wite message..."
            v-model="message"
            @keyup.enter="sendMessage"
          ></v-text-field>
          <v-btn :loading="loading" @click="sendMessage" class="send-btn" fab color="#26c6da">
            <v-icon> mdi-send-outline </v-icon>
          </v-btn>
        </v-container>
      </div>
    </div>
  </v-container>
</template>

<script>
import { monthFormat, timeFormat } from '@/utils/dateFormat.js'
import {mapState} from 'vuex'
export default {
  middleware : ['auth'],
  data() {
    return {
      message: "",
      messages: [],
      loading:false
    };
  },
  computed : {
    ...mapState(['user']),
   
  },
  methods: {
    timeFormat,
    timeFormat,
     color(mes){
      if(this.user.name == mes.name) return '#26c6da'
      return '#6A1B9A'
    },
    sendMessage() {
      document.querySelector("#scroller").scrollIntoView();
      this.loading = true
      db.collection("chat").add({
        message: this.message,
        created_at : new Date(),
        photoUrl : this.user.photoUrl,
        name : this.user.name

      }).then(()=>{
        this.loading =false
          document.querySelector("#scroller").scrollIntoView();

      })
      this.message = "";
    },
    async getMessages() {
      await db
        .collection("chat")
        .orderBy('created_at')
        .onSnapshot((res) => {
          this.messages = [];
          res.forEach((element) => {
              document.querySelector("#scroller").scrollIntoView();
            return this.messages.push(element.data());
            
          });
        });
      console.log(this.messages);
    },
  },
  mounted() {
    this.getMessages();
  },
};
</script>

<style>
.prof-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 5px;
}
.sms-box::after,
.sms-box::before {
  content: "";
  display: table;
  clear: both;
}
.chat-wrapper {
  min-height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
}
.message-input {
  font-size: 32px;
  padding-right: 50px;
}

.theme--dark.v-card > .v-card__text,
.theme--dark.v-card .v-card__subtitle {
  color: #fff;
}
.send-msg-wrapper {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 5;
  background: #121212;
}
.send-btn {
  position: absolute;
  right: 0;
  bottom: 30px;
}
.send-container {
  position: relative;
}
</style>
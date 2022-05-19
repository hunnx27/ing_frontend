<template>
<q-layout view="lhh LpR lff" container style="height: 500px" class="shadow-2 rounded-borders">
   <q-header reveal class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="drawerLeft"
      :width="200"
      :breakpoint="700"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page style="padding-top: 60px" class="q-pa-md">
        <div class="contents-wrap">
          <h3>(&) 원앤집</h3>
          <p>함께 만드는 유아교사 필수앱</p>
          <br/>
          ID : <input type="text" class="form-control" v-model="state.name"/>
          <br/>
          Password : <input type="password" class="form-control" v-model="state.password"/>
          <br/><br/>
          <q-btn color="black" @click="login()" label="Login"/>
          <hr/>
          또는 간편 로그인
          <hr/>
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="amber"  @click="loginKakao()" label="KakaoTalk"/>
            <q-btn color="primary"  @click="loginFacebook()" label="Facebook"/>
            <q-btn color="deep-orange"  @click="loginGoogle()" label="Google"/>
          </div>
        </div>        

        <q-page-sticky position="top-left" :offset="[18, 68]">
          <q-btn round color="primary" icon="arrow_back" class="rotate-45" />
        </q-page-sticky>
        <q-page-sticky position="top-right" :offset="[18, 68]">
          <q-btn round color="primary" icon="arrow_upward" class="rotate-45" />
        </q-page-sticky>
        <q-page-sticky position="bottom-left" :offset="[18, 18]">
          <q-btn round color="primary" icon="arrow_forward" class="rotate-135" />
        </q-page-sticky>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn round color="primary" icon="arrow_forward" class="rotate-45" />
        </q-page-sticky>

        <q-page-sticky position="top" expand class="bg-accent text-white">
          <q-toolbar>
            <q-btn flat round dense icon="map" />
            <q-toolbar-title>Title</q-toolbar-title>
          </q-toolbar>
        </q-page-sticky>
      </q-page>

      <q-page-scroller position="bottom">
        <q-btn fab icon="keyboard_arrow_up" color="red" />
      </q-page-scroller>
    </q-page-container>

</q-layout>
</template>

<script>
//import CounterItem from '/src/components/counter/CounterItem.vue'
import { ref } from 'vue'
import {reactive} from "vue";
import axios from 'axios';
/* eslint-disable */
export default {
  name: 'HomeItem',
  props: {
    msg: String
  },
  components:{
    // CounterItem
  },
  setup () {

    /**
     * Variables
     */
    const state = reactive({
      name : "",
      password : ""
    })

    /**
     * FUNCTIONS...
     */
    const drawerLeft = ref(false); // 드로어
    const login = ()=>{
      // FIXME test 필요 토큰값 처리 로직 추가 예정
      axios.post("/login", new URLSearchParams(state)).then((res) => {
        switch (res.status) {
          case 200:
            alert('로그인성공');  
            break;
          case 400:
            alert('잘못된 파라미터입니다.');
          case 401:
            alert('ID혹은 Password가 일치하지 않습니다. 계정정보를 확인해주세요.');
          default:
            alert('시스템 오류입니다. 관리자에게 문의하세요.');
            break;
        }
        if(res.status != 200){
          console.log("서버와 통신이 되지 않습니다.");
          return;
        }else if(res.data!=null && res.data.content!=null && res.data.content.length>0){
          alert('로그인성공!', '<br/>', cookie.authorization);
          state.data = res.data.content;
        }
      }).catch((e)=>(
        console.log("서버에 오류가 있습니다.", e)
      ))
    }
    const loginKakao = ()=>{
      // FIXME test 필요 토큰값 처리 로직 추가 예정
      axios.post("/loginKakao", new URLSearchParams(state)).then((res) => {
        switch (res.status) {
          case 200:
            alert('로그인성공');  
            break;
          case 400:
            alert('잘못된 파라미터입니다.');
          case 401:
            alert('ID혹은 Password가 일치하지 않습니다. 계정정보를 확인해주세요.');
          default:
            alert('시스템 오류입니다. 관리자에게 문의하세요.');
            break;
        }
        if(res.status != 200){
          console.log("서버와 통신이 되지 않습니다.");
          return;
        }else if(res.data!=null && res.data.content!=null && res.data.content.length>0){
          alert('로그인성공!', '<br/>', cookie.authorization);
          state.data = res.data.content;
        }
      }).catch((e)=>(
        console.log("서버에 오류가 있습니다.", e)
      ))
    }
    const loginFacebook = ()=>{
      console.error("loginFacebook");
    }
    const loginGoogle = ()=>{
      console.error("loginGoogle");
    }

    return {
      state,
      login,
      loginKakao,
      loginFacebook,
      loginGoogle,
      drawerLeft
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.contents-wrap{
  text-align: center;
}
</style>

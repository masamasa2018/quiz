<template>

<p class="common_title2">お問合せフォーム</p>

 <div v-if="sended">
    <h3>送信完了</h3>
    <p>お問合せいただきありがとうございました！</p>
    <p>また何かありましたらよろしくお願いいたします。</p>
  </div>
  
 <div v-else>
    
    <form @submit.prevent="submitForm">

          <div class="Form">
              <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>氏名</p>
                <input type="text" class="Form-Item-Input" id="name" v-model="name" required placeholder="例）山田太郎">
              </div>

              <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                <input type="email" class="Form-Item-Input" id="email" v-model="email" required  placeholder="例）example@gmail.com">
              </div>
              <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
                <textarea class="Form-Item-Textarea"  v-model="message"></textarea>
              </div>
              <input type="submit" class="Form-Btn" value="送信する">
          </div>
    </form>
  </div>

</template>

<script lang="ts">
import { ref } from 'vue';
import inqueryData from "../../model/inquery/inqueryData"
import type { Ref } from 'vue'

export default {
    setup() {
      const name: Ref<string> = ref('');
      const email: Ref<string> = ref('');
      const message: Ref<string> = ref('');

      const sended = ref(false);
  
      const submitForm = () => {
        const data = {
          name: name.value,
          email: email.value,
          message: message.value,
          sended: sended.value
        };

        inqueryData.insert(data.name , data.email , data.message);

        // フォームのリセット
        name.value = '';
        email.value = '';
        message.value = '';
        sended.value = true

      };
  
    return {
      name,
      email,
      message,
      sended,
      submitForm,
    };
  }
};
</script>

<style lang="scss">
Form {
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
@media screen and (max-width: 480px) {
  .Form {
    margin-top: 3px;
  }
}
.Form-Item {
  border-top: 1px solid #ddd;
  padding-top: 5px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .Form-Item {
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 4px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}
.Form-Item:nth-child(5) {
  border-bottom: 1px solid #ddd;
}
.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 12px;
  }
}
.Form-Item-Label.isMsg {
  margin-top: 3px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label.isMsg {
    margin-top: 0;
  }
}
.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 3px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #5bc8ac;
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}
.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 350px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 2px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 350px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Btn {
  border-radius: 2px;
  margin-top: 2px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 280px;
  
  display: block;
  letter-spacing: 0.05em;
  background: #5bc8ac;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  }
}
</style>
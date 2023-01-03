<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cabin:wght@300;400;500;600&display=swap");

:root{
  --color-primary: #14121F;
  --color-white: #FFFFFF;
  --color-white-backgroud: #F6F6F6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  border: none;
}

body{
  background-color: var(--color-white-backgroud);
}

input{
  border: 1px solid #000000;
  -webkit-transition: 0.5s;
  transition: 0.3s;
  outline: none;
}

input:focus {
  border: 2px solid red;
}

</style>
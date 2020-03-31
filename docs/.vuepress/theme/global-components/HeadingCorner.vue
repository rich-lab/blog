<template>
  <img :src="url" alt="">
</template>

<script>
  const corners = [
    'https://cdn.nlark.com/yuque/0/2019/png/85418/1571121214824-1110e085-f9e9-43e7-a9c5-06b87e4b1720.png#align=left&display=inline&height=32&name=image.png&originHeight=64&originWidth=62&size=1220&status=done&style=none&width=31',
    'https://cdn.nlark.com/yuque/0/2019/png/168578/1566969460107-ca19be82-58a2-40bc-9690-9c5a7d70eb3a.png#align=left&display=inline&height=29&name=image.png&originHeight=58&originWidth=56&size=962&status=done&style=none&width=28',
    'https://cdn.nlark.com/yuque/0/2019/png/168578/1566969950134-b9755684-a5fb-4392-a60a-7605846b7efe.png#align=left&display=inline&height=28&name=image.png&originHeight=56&originWidth=58&size=987&status=done&style=none&width=29',
    'https://cdn.nlark.com/yuque/0/2019/png/168578/1566969834239-d5641b88-18d9-4885-b263-302d202783e0.png#align=left&display=inline&height=28&name=image.png&originHeight=56&originWidth=58&size=1021&status=done&style=none&width=29 ',
  ]

  export default {
    data() {
      return {
        url: corners[Math.floor(Math.random() * 4)]
      }
    }
  }
</script>

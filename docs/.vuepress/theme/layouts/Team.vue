<template>
  <div>
    <section class="container mx-auto pt-24">
      <h1 class="text-center text-5xl  font-bold text-gray-900">
        和喜欢的人一起
      </h1>
      <h1 class="text-center text-5xl font-bold text-gray-900">
        做人人都喜欢的产品
      </h1>
    </section>

    <section class="container mx-auto">
      <img
        class="black"
        src="https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*dpdHQ7UagZMAAAAAAAAAAABkARQnAQ"
      />
    </section>

    <section class="px-4 sm:w-1/2 sm:px-0 mx-auto container">
      <h1></h1>
      <p>
        在 RichLab,
        我们打造的前端项目每天都被数百万用户在使用。我们相信，是保持年轻、好玩、认真的心态，让团队富有创造力。这是每一位成员聚集在一起形成的团队基因。
      </p>
    </section>

    <section class="container mx-auto">
      <div class="sm:flex sm:-mx-2">
        <div class="sm:flex-1 sm:mx-2">
          <img
            class="black"
            src="https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*40qYQKaPgRwAAAAAAAAAAABkARQnAQ"
            alt=""
          />
        </div>
        <div class="sm:flex-1 sm:mx-2 ">
          <img
            class="black"
            src="https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*T8bwR7rAgzsAAAAAAAAAAABkARQnAQ"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="container mx-auto sm:w-1/2 px-4 sm:px-0">
      <h1>背靠大舞台</h1>
      <p>
        「得益于蚂蚁金服花呗借呗亿级用户的金融平台，我们有机会通过自研 2D/3D
        引擎 (Oasis)
        和工作流，开发出动画、游戏等富交互应用，帮助业务获得更高的增长。」
      </p>
      <p class="text-right mt-4 text-gray-800">
        —— RichLab 自研 2D/3D 引擎 Oasis 负责人 烧鹅
      </p>
    </section>

    <section>
      <div>
        <img
          class="black mt-4"
          src="https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*YiB2QKBq1E0AAAAAAAAAAABkARQnAQ"
          alt=""
        />
      </div>
    </section>

    <!-- <section class="pl-0 pr-0">
      <div class="flex">
        <div class="w-1/6">
          <img
            class="black"
            src="https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*HLuASIp9Mk4AAAAAAAAAAABkARQnAQ"
            alt=""
          />
        </div>
      </div>
    </section> -->

    <section class="container mx-auto sm:w-1/2 px-4 sm:px-0">
      <h1>乐在双十一</h1>
      <p>
        每年双十一，我们既在忙碌和紧张中面对稳定性的挑战，又在并肩作战中感受快乐。
      </p>
    </section>

    <section class="pl-0 pr-0">
      <div class="flex flex-wrap">
        <div v-for="src in imageList['1111']" class="w-1/3">
          <img class="black" :src="src" alt="" />
        </div>
      </div>
    </section>

    <section class="container mx-auto sm:w-1/2 px-4 sm:px-0">
      <h1>践行公益</h1>
      <p>
        RichLab
        全员每年践行阿里巴巴「公益时」。从社区服务，到环境清洁，向外界贡献技术之外的价值。
      </p>
    </section>

    <section class="container mx-auto pb-0 sm:pb-4">
      <img
        src="https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*-kYgRoTFQU0AAAAAAAAAAABkARQnAQ"
        alt=""
      />
    </section>

    <section class="container mx-auto pt-0">
      <div class="flex sm:-mx-2">
        <div v-for="src in imageList.envioronment" class="w-1/3 sm:mx-2">
          <img class="black" :src="src" />
        </div>
      </div>
    </section>

    <section class="container mx-auto sm:w-1/2 px-4 sm:px-0">
      <h1>代码之外，各有所长</h1>
      <p>
        代码不是生活的全部，我们在音乐、越野、运动、旅行等领域都可以大展身手。
      </p>
    </section>

    <section v-for="(hobit, index) in hobits">
      <div class="flex flex-col sm:flex-row sm:-mx-4" :class="{ 'sm:flex-row-reverse': (index + 1) % 2 === 0  }" >
        <div class="sm:w-1/2 sm:mx-4">
          <img class="black" :src="hobit.image" alt="" />
        </div>
        <div class="sm:w-1/2 sm:mx-4 self-center p-4 sm:p-0">
          <p>「{{ hobit.content }}」</p>
          <p class="mt-4">—— {{ hobit.quote }}</p>
        </div>
      </div>
    </section>

    <section class="container mx-auto text-center">
      <h1 class="text-5xl">成为有趣好玩的一部分</h1>
      <p>如果你想成为我们的一份子，请点击 <a :href="$withBase('/blog/2019/12/02/invitation/')">此处</a>。</p>
      <p>我们期待一个独一无二的你。</p>
    </section>

    <div>
      <img
        class="black"
        src="https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*JCTBQ5AFInsAAAAAAAAAAABkARQnAQ"
        alt=""
      />
    </div>

    <section class="text-center">
      END
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: {
        "1111": [
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*VkLrTKjC7LQAAAAAAAAAAABkARQnAQ",
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*RXneT6l0Y0UAAAAAAAAAAABkARQnAQ",
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*rjdYTJn7pN8AAAAAAAAAAABkARQnAQ",
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*pkCqQZ76TiAAAAAAAAAAAABkARQnAQ",
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*zP_jQr0TrowAAAAAAAAAAABkARQnAQ",
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*zYP_SKU7YLgAAAAAAAAAAABkARQnAQ"
        ],
        envioronment: [
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*4XHqQqhT-6EAAAAAAAAAAABkARQnAQ",
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*WtDRQ6Zp3xgAAAAAAAAAAABkARQnAQ",
          "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*wKlRQpyMs7AAAAAAAAAAAABkARQnAQ"
        ]
      },
      hobits: [
        // 玄寂
        {
          content:
            "越野很多时候，有很大一部分情况是没有退路的，你最后挑战的并不是车，而是自己，人有太多的心理障碍和对未知的恐惧，很容易让你想要放弃，然而在越野中你会发现，你碰到了实在过不去的砍，大家会想尽一切办法来帮助你，搬石头，拉绞盘，做指挥，等等等等，而你要做的是咬咬牙关，或许就成功了，这是一种很纯粹的快乐。",
          quote: "VLOG 博主、越野玩家 玄寂",
          image:
            "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*kQhJRozy3IYAAAAAAAAAAABkARQnAQ"
        },
        // 完颜
        {
          content:
            "摇滚乐对我来说，不仅仅是一种音乐类型，也是一种审美和价值体系，一种与世界沟通和对话的方式，一种生活态度。它告诉你什么是要唾弃的，什么是要坚守的，什么是要热爱的。想要领悟摇滚乐的魅力，跟我一起去livehouse吧。",
          quote: "摇滚乐爱好者、吉他手 完颜",
          image:
            "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*VrWmRJqwN1kAAAAAAAAAAABkARQnAQ"
        },
        // Randy
        {
          content:
            "音乐最大的魅力在于她能引起共鸣，通过键盘的黑白键我可以触摸到音乐本身，告诉听众我的喜怒哀乐，我的世界观。这是一种比言语和文字更丰富的表达方式。",
          quote: "键盘手 Randy",
          image:
            "https://gw.alipayobjects.com/mdn/rms_89e39d/afts/img/A*LbzbTK0EnmcAAAAAAAAAAABkARQnAQ"
        }
      ]
    };
  }
};
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;

body,
h1 {
  @apply tracking-normal;
}

p.lg {
  @apply tracking-normal text-2xl;
}

section {
  @apply p-0 pt-4 pb-4;
}

section h1 {
  @apply text-2xl font-bold mb-2;
}

img.black {
  transition: 0.2s all;
  filter: grayscale(100%);
}

img.black:hover {
  filter: grayscale(10%);
}

@screen sm {
  section {
    @apply p-12;
  }
}
</style>

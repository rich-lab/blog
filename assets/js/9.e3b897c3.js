(window.webpackJsonp=window.webpackJsonp||[]).push([[9,15],{228:function(t,s,a){},235:function(t,s,a){"use strict";var e=a(228);a.n(e).a},236:function(t,s,a){"use strict";a.r(s);var e={props:["page"],computed:{apage:function(){return this.page||{title:"",frontmatter:{}}}}},o=(a(235),a(4)),n=Object(o.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("router-link",{staticClass:"blog-post",attrs:{to:t.apage.path||"#"}},[a("div",{staticClass:"post-hero",style:{backgroundImage:"url("+t.apage.frontmatter.hero+")"}}),t._v(" "),a("div",{staticClass:"post-overlay"}),t._v(" "),a("div",{staticClass:"post-info"},[a("span",{staticClass:"post-title"},[t._v(t._s(t.apage.title))]),a("br"),t._v(" "),a("span",{staticClass:"post-description"},[t._v(t._s(t.apage.frontmatter.description))])])])}),[],!1,null,null,null);s.default=n.exports},240:function(t,s,a){},278:function(t,s,a){"use strict";var e=a(240);a.n(e).a},330:function(t,s,a){"use strict";a.r(s);var e=a(236),o={props:{pages:Array},components:{BlogPostPage:e.default}},n=(a(278),a(4)),i=Object(n.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"blog-block-layout"},[a("section",{staticClass:"main-post"},[a("BlogPostPage",{staticClass:"fisrt-post",attrs:{page:t.pages[0]}}),t._v(" "),a("div",{staticClass:"second-posts"},[a("BlogPostPage",{staticClass:"second-post",attrs:{page:t.pages[1]}}),t._v(" "),a("BlogPostPage",{staticClass:"second-post",attrs:{page:t.pages[2]}})],1)],1),t._v(" "),a("section",{staticClass:"minor-posts"},[a("BlogPostPage",{staticClass:"minor-post",attrs:{page:t.pages[3]}}),t._v(" "),a("BlogPostPage",{staticClass:"minor-post",attrs:{page:t.pages[4]}}),t._v(" "),a("BlogPostPage",{staticClass:"minor-post",attrs:{page:t.pages[5]}})],1)])}),[],!1,null,null,null);s.default=i.exports}}]);
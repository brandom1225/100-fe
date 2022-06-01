"use strict";(self["webpackChunkfe_blog"]=self["webpackChunkfe_blog"]||[]).push([[349],{349:function(s,a,t){t.r(a),t.d(a,{default:function(){return v}});var r=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},e=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("html",[t("head"),t("body",[t("h1",[s._v("css实现类似水涌动的效果")]),t("h2",[s._v("实现原理")]),t("ol",[t("li",[s._v("瞄定纹理展示背景框，基于背景框的尺寸，使用伪元素在框上增加div")]),t("li",[s._v("修改div的border-radius，并增加animation，使div滚动")]),t("li",[s._v("调整div定位，将div旋转后的部分线条移动到背景框可见")]),t("li",[s._v("将背景框设置为overflow：hidden，隐藏其它多余线条")])]),t("p",[s._v("参考实现代码")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"container"')]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"wave"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-css"}},[s._v('<style lang="less" scoped>\n'),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".container")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": relative;\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("600px")]),s._v(";\n  \n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".wave")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("bottom")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400px")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000px")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8px")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#f2f2f2")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("will-change")]),s._v(": transform;\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("overflow")]),s._v(": hidden;\n\n    &"),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v("::before")]),s._v(",\n    &"),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v("::after")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("content")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": inline-block;\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("left")]),s._v(": -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50%")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("top")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("350px")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("transform")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("translateY")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(");\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("rgba")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(");\n    }\n\n    &"),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v("::before")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1800px")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1800px")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("48%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("48%")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("animation")]),s._v(": \n        wave-color "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13s")]),s._v(" linear infinite alternate both, \n        wave-rotate "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17s")]),s._v(" linear infinite;\n    }\n\n    &"),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v("::after")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2200px")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2200px")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("48%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("48%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40%")]),s._v(";\n      "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("animation")]),s._v(":\n        wave-color "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17s")]),s._v(" linear infinite alternate both,\n        wave-rotate "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13s")]),s._v(" linear infinite;\n    }\n  }\n}\n\n@keyframes wave-"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("from")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("opacity")]),s._v(": ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(";\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30%")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("opacity")]),s._v(": ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(";\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60%")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("opacity")]),s._v(": ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(";\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("to")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("opacity")]),s._v(": ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(";\n  }\n}\n\n@keyframes wave-rotate {\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("from")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("transform")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("rotate")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(");\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("to")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("transform")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("rotate")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("360deg")]),s._v(");\n  }\n}\n</style>\n")])])])])])}],n=t(1001),l={},p=(0,n.Z)(l,r,e,!1,null,null,null),v=p.exports}}]);
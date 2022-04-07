import{u as e,i as t,E as l,H as s,s as a,m as i,v as r,n as c,t as o,o as n,x as u,F as m,q as d,ac as f,w as p,I as v,J as x,ad as y,ae as b,K as h}from"./vendor.fe537731.js";import{_ as g}from"./Breadcrumb.667f0490.js";/* empty css                 */import{_ as k,a as _,b as w,c as B}from"./4.d9250fe1.js";import{u as F}from"./app.4d1d050c.js";var $={};const j={class:"flex"},G={class:"left-box"},q={class:"text-13 text-font-info mt-2"},V={class:"form my-12"},A={class:"flex justify-between items-center mb-2 text-15"},E={class:"opacity-0 absolute"},I={class:"mt-10 mb-5"},U={class:"flex justify-between mb-4 items-center"},P={class:"flex items-center"},S=c("img",{width:"18",height:"18",src:k},null,-1),C={class:"ml-1 text-14"},H=["placeholder"],J={class:"flex justify-between mb-4 items-center"},K={class:"flex items-center"},M=c("img",{width:"18",height:"18",src:_},null,-1),Q={class:"ml-1 text-14"},R=["placeholder"],z={class:"flex justify-between mb-4 items-center"},D={class:"flex items-center"},L=c("img",{width:"18",height:"18",src:w},null,-1),N={class:"ml-1 text-14"},O=["placeholder"],T={class:"flex justify-between mb-4 items-center"},W={class:"flex items-center"},X=c("img",{width:"18",height:"18",src:B},null,-1),Y={class:"ml-1 text-14"},Z=["placeholder"],ee={class:"flex justify-between items-center mt-10"},te=c("div",null,null,-1),le={class:"text-15 text-font-warning font-medium"},se={class:"right-box"},ae={class:"bg-main bg-opacity-30 px-5 py-10"},ie={class:"p-5 mb-10"},re={class:"flex justify-between text-15 font-medium py-5"},ce={class:""},oe={class:"text-20"},ne={class:"number-family"},ue={class:"text-center my-10"},me={class:"py-5 text-16 font-medium text-font-warning"},de={class:"relative mt-10 mb-16 mx-auto",style:{width:"160px",height:"160px"}},fe={class:"absolute left-1/2 top-0 -translate-x-1/2",style:{width:"160px",height:"160px"}},pe=c("div",{class:"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",style:{width:"180px",height:"90px"}},[c("img",{width:"180",height:"90",src:"/assets/shoes.b270c8a1.png"})],-1),ve={class:"grid grid-cols-2 gap-y-3 mt-10 text-left text-font-info"},xe={class:"number-family"},ye={class:"hidden border-luck text-luck bg-common bg-uncommon bg-rare bg-font-info text-main border-main"},be={setup(k){const{t:_}=e(),w=F(),B={common:[{value:20,title:"score.Generally",score:2.5,remark:"0-20"},{value:24,title:"score.Good",score:2.5,remark:"21-24"},{value:28,title:"score.Epic",score:2.5,remark:"25-28"},{value:32,title:"score.Fabulous",score:2.5,remark:"29-32"},{value:36,title:"score.Incredible",score:2.5,remark:"33-36"},{value:40,title:"score.Perfect",score:2.5,remark:"37-40"}],uncommon:[{value:36,title:"score.Generally",score:1.38,remark:"0-36"},{value:43,title:"score.Good",score:1.38,remark:"37-43"},{value:50,title:"score.Epic",score:1.38,remark:"44-50"},{value:58,title:"score.Fabulous",score:1.38,remark:"51-58"},{value:65,title:"score.Incredible",score:1.38,remark:"59-65"},{value:72,title:"score.Perfect",score:1.38,remark:"66-72"}],rare:[{value:70,title:"score.Generally",score:.71,remark:"0-70"},{value:84,title:"score.Good",score:.71,remark:"71-84"},{value:98,title:"score.Epic",score:.71,remark:"85-98"},{value:112,title:"score.Fabulous",score:.71,remark:"99-112"},{value:126,title:"score.Incredible",score:.71,remark:"113-126"},{value:140,title:"score.Perfect",score:.71,remark:"127-140"}],epic:[{value:126,title:"score.Generally",score:.39},{value:151,title:"score.Good",score:.39},{value:176,title:"score.Epic",score:.39},{value:202,title:"score.Fabulous",score:.39},{value:227,title:"score.Incredible",score:.39},{value:252,title:"score.Perfect",score:.39}]},$=t({sneaker_quality:"common",efficiencyBase:"",luckBase:"",comfortBase:"",resilienceBase:"",title:"score.Generally"});function be(){$.efficiencyBase="",$.luckBase="",$.comfortBase="",$.resilienceBase=""}const he=l((()=>w.quality.filter((e=>e.value===$.sneaker_quality))[0])),ge=l((()=>he.value.ranges)),ke=l((()=>(1*parseFloat($.efficiencyBase).toFixed(2)||0)+(1*parseFloat($.luckBase).toFixed(2)||0)+(1*parseFloat($.comfortBase).toFixed(2)||0)+(1*parseFloat($.resilienceBase).toFixed(2)||0))),_e=l((()=>{const e=B[$.sneaker_quality];let t={value:20,title:"score.Generally",score:2.5};return e.filter((e=>{if(!(e.value<=ke.value))return t;t=e})),$.title=t.title,Math.ceil(ke.value*t.score)}));function we(e){return $.sneaker_quality===e.value?["bg-main","text-font-main","border-solid","border-2","hover:bg-main","text-font-main"]:[`border-${e.color}`,`text-${e.color}`,"hover:bg-white"]}return(e,t)=>{const l=g,k=y,F=b,Be=h,Fe=s("d-input-point"),$e=s("d-input-max");return a(),i("div",null,[r(l),c("div",j,[c("div",G,[c("h2",null,o(n(_)("score.Sneakers_score_title")),1),c("p",q,o(n(_)("score.Sneakers_score_describe")),1),c("div",V,[c("div",A,[c("h3",null,o(n(_)("income.Quality")),1),r(F,{modelValue:n($).sneaker_quality,"onUpdate:modelValue":t[0]||(t[0]=e=>n($).sneaker_quality=e),onChange:be},{default:u((()=>[(a(!0),i(m,null,d(n(w).quality,(e=>(a(),i("div",{key:e.value,class:f(["my-radio relative mr-5",we(e)])},[p(o(n(_)(e.title))+" ",1),c("div",E,[r(k,{"checked-value":e.value},{default:u((()=>[p(o(n(_)(e.title)),1)])),_:2},1032,["checked-value"])])],2)))),128))])),_:1},8,["modelValue"])]),c("h3",I,o(n(_)("income.Attributes")),1),c("div",U,[c("div",P,[S,c("span",C,o(n(_)("income.Attributes_efficiency")),1)]),c("div",null,[v(c("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n($).efficiencyBase=e),type:"text",placeholder:`${n(ge)[0]}-${n(ge)[1]}`,class:"my-input-sig"},null,8,H),[[x,n($).efficiencyBase],[Fe],[$e,n(ge)[1]]])])]),c("div",J,[c("div",K,[M,c("span",Q,o(n(_)("income.Attributes_luck")),1)]),c("div",null,[v(c("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n($).luckBase=e),type:"text",placeholder:`${n(ge)[0]}-${n(ge)[1]}`,class:"my-input-sig"},null,8,R),[[x,n($).luckBase],[Fe],[$e,n(ge)[1]]])])]),c("div",z,[c("div",D,[L,c("span",N,o(n(_)("income.Attributes_comfort")),1)]),c("div",null,[v(c("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>n($).comfortBase=e),type:"text",placeholder:`${n(ge)[0]}-${n(ge)[1]}`,class:"my-input-sig"},null,8,O),[[x,n($).comfortBase],[Fe],[$e,n(ge)[1]]])])]),c("div",T,[c("div",W,[X,c("span",Y,o(n(_)("income.Attributes_resilience")),1)]),c("div",null,[v(c("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>n($).resilienceBase=e),type:"text",placeholder:`${n(ge)[0]}-${n(ge)[1]}`,class:"my-input-sig"},null,8,Z),[[x,n($).resilienceBase],[Fe],[$e,n(ge)[1]]])])]),c("div",ee,[te,c("div",le,o(n(_)("score.Attributes_total_points"))+" "+o(n(ke)),1)])])]),c("div",se,[c("h2",ae,o(n(_)("score.Calculation_results")),1),c("div",ie,[c("div",re,[c("div",ce,o(n(_)("score.Get_points")),1),c("div",oe,[c("span",ne,o(n(_e)),1)])]),r(Be),c("div",ue,[c("p",me,o(n(_)("score.Sneaker_title"))+"："+o(n(_)(n($).title)),1),c("div",de,[c("div",fe,[c("div",{class:f([`bg-${n(he).value}`,"absolute opacity-20 rounded-full"]),style:{width:"160px",height:"160px"}},null,2),c("div",{class:f([`bg-${n(he).value}`,"absolute opacity-40 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"]),style:{width:"130px",height:"130px"}},null,2),c("div",{class:f([`bg-${n(he).value}`,"absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"]),style:{width:"100px",height:"100px"}},null,2)]),pe]),r(Be),c("div",ve,[(a(!0),i(m,null,d(B[n($).sneaker_quality],(e=>(a(),i("div",null,[p(o(n(_)(e.title))+"：",1),c("span",xe,o(e.remark),1)])))),256))])])])]),c("div",ye,o(n(he)),1)])])}}};"function"==typeof $&&$(be);export{be as default};

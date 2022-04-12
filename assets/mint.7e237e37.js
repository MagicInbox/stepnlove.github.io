import{u as e,i as s,E as t,H as n,s as l,m as i,v as a,n as m,t as o,o as c,w as r,I as p,J as d,K as u}from"./vendor.9e277265.js";import{_ as f}from"./Breadcrumb.5919387f.js";import{_ as b}from"./tooltip.50f6b0a4.js";import{u as x}from"./app.1d04147b.js";import"./el-popper.912df5fd.js";var _={};const v={class:"mobile-show mb-5"},h={class:"text-14 text-font-info mt-2"},y={class:"sm:flex"},S={class:"left-box"},k={class:"mobile-hidden"},w={class:"text-14 text-font-info mt-2"},g={class:"form sm:mt-12"},j={class:"flex justify-between items-center mb-5"},z={class:"text-font-info font-normal block sm:inline"},F={class:"flex items-center"},L=["placeholder"],M=m("span",null,"SOL",-1),O={class:"flex justify-between items-center mb-5"},U=m("div",null,[m("div",{class:"my-input-sig input-disabled mr-2 inline-block"}," 200 "),m("span",null,"GST")],-1),C={class:"flex justify-between items-center mb-5"},I={class:"text-font-info font-normal block sm:inline"},P=m("div",null,[m("div",{class:"my-input-sig input-disabled mr-2 inline-block"}," 20 "),m("span",null,"GST")],-1),V={class:"flex justify-between items-center mb-5"},G={class:"flex items-center"},T=["placeholder"],q=m("span",null,"SOL",-1),B={class:"flex justify-between items-center mb-5"},E={class:"text-font-info font-normal block sm:inline"},H={class:"flex items-center"},J=["placeholder"],K=m("span",null,"SOL",-1),A={class:"right-box"},D={class:"bg-main bg-opacity-30 px-5 py-5 sm:py-10 text-16 sm:text-18"},N={class:"p-5 sm:mb-10"},Q={class:"flex justify-between text-15 font-medium py-5"},R={class:""},W={class:"text-3xl sm:text-20 font-bold"},X={class:"number-family"},Y=m("span",{class:"text-15 sm:text-20"}," SOL",-1),Z={class:"flex items-center sm:block mb-8"},$={class:"mobile-h3-flex"},ee={class:"mobile-h3"},se={class:"font-bold sm:font-medium"},te={class:"number-family mobile-content"},ne={class:"mobile-h3-flex"},le={class:"mobile-h3"},ie={class:"font-bold sm:font-medium"},ae={class:"number-family mobile-content"},me={class:"mt-5 sm:mt-10 text-font-info"},oe={class:"mt-3 text-font-info"},ce=m("span",{class:"number-family"},"2",-1),re=m("span",{class:"number-family"},"2",-1),pe={class:"mt-3 text-font-info"},de=m("span",{class:"number-family"},"2",-1),ue=m("span",{class:"number-family"},"2",-1),fe=r(") * "),be=m("span",{class:"number-family"},"0.94",-1),xe=m("div",{class:"hidden border-luck text-luck text-main border-main"},null,-1),_e={setup(_){const _e=x(),{t:ve}=e(),he=s({sneaker_quality:"common",amount:"",zero:10,two:9,shoebox:11}),ye=t((()=>1*parseFloat(2*he.zero+440*_e.price.gst_sol).toFixed(2))),Se=t((()=>1*parseFloat(.94*(2*he.shoebox+2*he.two)).toFixed(2)));return(e,s)=>{const t=f,x=b,_=u,_e=n("d-input-point"),ke=n("d-input-max");return l(),i("div",null,[a(t),m("div",v,[m("h2",null,o(c(ve)("mint.Mint_spread_title")),1),m("p",h,o(c(ve)("mint.Mint_spread_describe")),1)]),m("div",y,[m("div",S,[m("div",k,[m("h2",null,o(c(ve)("mint.Mint_spread_title")),1),m("p",w,o(c(ve)("mint.Mint_spread_describe")),1)]),m("div",g,[m("div",j,[m("h3",null,[r(o(c(ve)("mint.Sneakers_price")),1),m("span",z," ("+o(c(ve)("mint.Sneakers_mint_zero"))+")",1)]),m("div",F,[a(x,{class:"mr-2 mobile-hidden",content:c(ve)("mint.Sneakers_price_tips")},null,8,["content"]),p(m("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>c(he).zero=e),type:"text",placeholder:c(ve)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,L),[[d,c(he).zero],[_e],[ke,99]]),M])]),m("div",O,[m("h3",null,o(c(ve)("mint.Mint_price")),1),U]),m("div",C,[m("h3",null,[r(o(c(ve)("mint.Upgrade_price")),1),m("span",I," ("+o(c(ve)("mint.Upgrade_zero_to_five"))+")",1)]),P]),m("div",V,[m("h3",null,o(c(ve)("mint.Shoeboxes_price")),1),m("div",G,[a(x,{class:"mr-2 mobile-hidden",content:c(ve)("mint.Sneakers_price_tips")},null,8,["content"]),p(m("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>c(he).shoebox=e),type:"text",placeholder:c(ve)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,T),[[d,c(he).shoebox]]),q])]),m("div",B,[m("h3",null,[r(o(c(ve)("mint.Sneakers_price")),1),m("span",E," ("+o(c(ve)("mint.Sneakers_mint_two"))+")",1)]),m("div",H,[a(x,{class:"mr-2 mobile-hidden",content:c(ve)("mint.Sneakers_price_tips")},null,8,["content"]),p(m("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>c(he).two=e),type:"text",placeholder:c(ve)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,J),[[d,c(he).two]]),K])])])]),m("div",A,[m("h2",D,o(c(ve)("base.Calculation_results")),1),m("div",N,[m("div",Q,[m("div",R,o(c(ve)("mint.Profitable")),1),m("div",W,[m("span",X,o(1*parseFloat(c(Se)-c(ye)).toFixed(2)),1),Y])]),a(_),m("div",Z,[m("div",$,[m("h3",ee,o(c(ve)("mint.Cost")),1),m("div",se,[m("span",te,o(c(ye))+" SOL",1)])]),m("div",ne,[m("h3",le,o(c(ve)("mint.Income")),1),m("div",ie,[m("span",ae,o(c(Se))+" SOL",1)])])]),a(_),m("div",me,o(c(ve)("mint.Calculation_formula")),1),m("p",oe,[r(o(c(ve)("mint.Income"))+" = "+o(c(ve)("mint.Sneakers_mint_zero_price"))+"*",1),ce,r(" + "+o(c(ve)("mint.Mint_price"))+" + "+o(c(ve)("mint.Upgrade_price"))+"*",1),re]),m("div",pe,[r(o(c(ve)("mint.Cost"))+" = ("+o(c(ve)("mint.Shoeboxes"))+"*",1),de,r(" + "+o(c(ve)("mint.Sneakers_mint_two"))+"*",1),ue,fe,be,a(x,{class:"mobile-hidden",content:c(ve)("mint.Income_tips")},null,8,["content"])])])])]),xe])}}};"function"==typeof _&&_(_e);export{_e as default};

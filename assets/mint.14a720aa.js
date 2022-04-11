import{u as e,i as s,E as t,H as n,s as l,m as i,v as a,n as m,t as o,o as c,w as r,I as p,J as d,K as u}from"./vendor.96619303.js";import{_ as b}from"./Breadcrumb.19ecf1c6.js";import{_ as f}from"./tooltip.d44a9610.js";import{u as x}from"./app.9327d654.js";import"./el-popper.8ec4b28a.js";var _={};const v={class:"mobile-show mb-5"},h={class:"text-14 text-font-info mt-2"},y={class:"sm:flex"},S={class:"left-box"},k={class:"mobile-hidden"},w={class:"text-14 text-font-info mt-2"},g={class:"form sm:mt-12"},j={class:"flex justify-between items-center mb-5"},z={class:"text-font-info font-normal block sm:inline"},F={class:"flex items-center"},L=["placeholder"],M=m("span",null,"SOL",-1),O={class:"flex justify-between items-center mb-5"},U=m("div",null,[m("div",{class:"my-input-sig input-disabled mr-2 inline-block"}," 200 "),m("span",null,"GST")],-1),C={class:"flex justify-between items-center mb-5"},I={class:"text-font-info font-normal block sm:inline"},P=m("div",null,[m("div",{class:"my-input-sig input-disabled mr-2 inline-block"}," 20 "),m("span",null,"GST")],-1),V={class:"flex justify-between items-center mb-5"},G={class:"flex items-center"},T=["placeholder"],q=m("span",null,"SOL",-1),B={class:"flex justify-between items-center mb-5"},E={class:"text-font-info font-normal block sm:inline"},H={class:"flex items-center"},J=["placeholder"],K=m("span",null,"SOL",-1),A={class:"right-box"},D={class:"bg-main bg-opacity-30 px-5 py-5 sm:py-10 text-16 sm:text-18"},N={class:"p-5 sm:mb-10"},Q={class:"flex justify-between text-15 font-medium py-5"},R={class:""},W={class:"text-3xl sm:text-20 font-bold sm:font-normal"},X={class:"number-family"},Y=m("span",{class:"text-15 sm:text-20"}," SOL",-1),Z={class:"flex items-center sm:block mb-8"},$={class:"mobile-h3-flex"},ee={class:"mobile-h3"},se={class:"font-bold sm:font-medium"},te={class:"number-family mobile-content"},ne=r(" SOL "),le={class:"mobile-h3-flex"},ie={class:"mobile-h3"},ae={class:"font-bold sm:font-medium"},me={class:"number-family mobile-content"},oe=r(" SOL "),ce={class:"mt-5 sm:mt-10 text-font-info"},re={class:"mt-3 text-font-info"},pe=m("span",{class:"number-family"},"2",-1),de=m("span",{class:"number-family"},"2",-1),ue={class:"mt-3 text-font-info"},be=m("span",{class:"number-family"},"2",-1),fe=m("span",{class:"number-family"},"2",-1),xe=r(") * "),_e=m("span",{class:"number-family"},"0.94",-1),ve=m("div",{class:"hidden border-luck text-luck text-main border-main"},null,-1),he={setup(_){const he=x(),{t:ye}=e(),Se=s({sneaker_quality:"common",amount:"",zero:10,two:9,shoebox:11}),ke=t((()=>1*parseFloat(2*Se.zero+440*he.price.gst_sol).toFixed(2))),we=t((()=>1*parseFloat(.94*(2*Se.shoebox+2*Se.two)).toFixed(2)));return(e,s)=>{const t=b,x=f,_=u,he=n("d-input-point"),ge=n("d-input-max");return l(),i("div",null,[a(t),m("div",v,[m("h2",null,o(c(ye)("mint.Mint_spread_title")),1),m("p",h,o(c(ye)("mint.Mint_spread_describe")),1)]),m("div",y,[m("div",S,[m("div",k,[m("h2",null,o(c(ye)("mint.Mint_spread_title")),1),m("p",w,o(c(ye)("mint.Mint_spread_describe")),1)]),m("div",g,[m("div",j,[m("h3",null,[r(o(c(ye)("mint.Sneakers_price")),1),m("span",z," ("+o(c(ye)("mint.Sneakers_mint_zero"))+")",1)]),m("div",F,[a(x,{class:"mr-2 mobile-hidden",content:c(ye)("mint.Sneakers_price_tips")},null,8,["content"]),p(m("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>c(Se).zero=e),type:"text",placeholder:c(ye)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,L),[[d,c(Se).zero],[he],[ge,99]]),M])]),m("div",O,[m("h3",null,o(c(ye)("mint.Mint_price")),1),U]),m("div",C,[m("h3",null,[r(o(c(ye)("mint.Upgrade_price")),1),m("span",I," ("+o(c(ye)("mint.Upgrade_zero_to_five"))+")",1)]),P]),m("div",V,[m("h3",null,o(c(ye)("mint.Shoeboxes_price")),1),m("div",G,[a(x,{class:"mr-2 mobile-hidden",content:c(ye)("mint.Sneakers_price_tips")},null,8,["content"]),p(m("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>c(Se).shoebox=e),type:"text",placeholder:c(ye)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,T),[[d,c(Se).shoebox]]),q])]),m("div",B,[m("h3",null,[r(o(c(ye)("mint.Sneakers_price")),1),m("span",E," ("+o(c(ye)("mint.Sneakers_mint_two"))+")",1)]),m("div",H,[a(x,{class:"mr-2 mobile-hidden",content:c(ye)("mint.Sneakers_price_tips")},null,8,["content"]),p(m("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>c(Se).two=e),type:"text",placeholder:c(ye)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,J),[[d,c(Se).two]]),K])])])]),m("div",A,[m("h2",D,o(c(ye)("base.Calculation_results")),1),m("div",N,[m("div",Q,[m("div",R,o(c(ye)("mint.Profitable")),1),m("div",W,[m("span",X,o(1*parseFloat(c(we)-c(ke)).toFixed(2)),1),Y])]),a(_),m("div",Z,[m("div",$,[m("h3",ee,o(c(ye)("mint.Cost")),1),m("div",se,[m("span",te,o(c(ke)),1),ne])]),m("div",le,[m("h3",ie,o(c(ye)("mint.Income")),1),m("div",ae,[m("span",me,o(c(we)),1),oe])])]),a(_),m("div",ce,o(c(ye)("mint.Calculation_formula")),1),m("p",re,[r(o(c(ye)("mint.Income"))+" = "+o(c(ye)("mint.Sneakers_mint_zero_price"))+"*",1),pe,r(" + "+o(c(ye)("mint.Mint_price"))+" + "+o(c(ye)("mint.Upgrade_price"))+"*",1),de]),m("div",ue,[r(o(c(ye)("mint.Cost"))+" = ("+o(c(ye)("mint.Shoeboxes"))+"*",1),be,r(" + "+o(c(ye)("mint.Sneakers_mint_two"))+"*",1),fe,xe,_e,a(x,{class:"mobile-hidden",content:c(ye)("mint.Income_tips")},null,8,["content"])])])])]),ve])}}};"function"==typeof _&&_(he);export{he as default};

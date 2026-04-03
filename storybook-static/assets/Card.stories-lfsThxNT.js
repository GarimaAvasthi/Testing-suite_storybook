import{r as b,R as i}from"./iframe-Bq0NOvN_.js";import{j as e}from"./jsx-runtime-Bq_kcYf7.js";import"./preload-helper-PPVm8Dsz.js";const M={blue:{bg:"rgba(99, 102, 241, 0.1)",color:"#4f46e5",border:"1px solid rgba(99, 102, 241, 0.2)"},green:{bg:"rgba(16, 185, 129, 0.1)",color:"#059669",border:"1px solid rgba(16, 185, 129, 0.2)"},red:{bg:"rgba(239, 68, 68, 0.1)",color:"#dc2626",border:"1px solid rgba(239, 68, 68, 0.2)"},yellow:{bg:"rgba(245, 158, 11, 0.1)",color:"#d97706",border:"1px solid rgba(245, 158, 11, 0.2)"}},a=({title:E,description:I,image:c,price:P,badge:n,badgeColor:R="blue",onAction:T,actionLabel:z="Learn More",featured:r=!1})=>{const[p,j]=b.useState(!1),[g,F]=b.useState(!1),[W,m]=b.useState(!1),t="'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",u=M[R]||M.blue,D={position:"relative",width:"320px",backgroundColor:"var(--card-bg)",borderRadius:"16px",overflow:"hidden",border:r?"1.5px solid var(--primary-glow, rgba(99, 102, 241, 0.3))":"1px solid var(--card-border)",boxShadow:p?r?"0 20px 40px var(--primary-glow, rgba(99, 102, 241, 0.15)), 0 8px 16px rgba(0,0,0,0.06)":"0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)":r?"0 8px 24px var(--primary-glow, rgba(99, 102, 241, 0.1)), 0 2px 8px rgba(0,0,0,0.04)":"0 4px 12px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.03)",transform:p?"translateY(-4px)":"translateY(0)",transition:"all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",cursor:"default",fontFamily:t},H={position:"relative",width:"100%",height:"200px",backgroundColor:"var(--border-subtle)",overflow:"hidden"},q={width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",transform:p?"scale(1.05)":"scale(1)"},B={position:"absolute",top:"12px",right:"12px",padding:"5px 12px",fontSize:"11.5px",fontWeight:650,letterSpacing:"0.03em",textTransform:"uppercase",borderRadius:"8px",backgroundColor:u.bg,color:u.color,border:u.border,backdropFilter:"blur(8px)",fontFamily:t,zIndex:2},U={padding:"20px 22px 22px",display:"flex",flexDirection:"column",gap:"6px"},N={fontSize:"17px",fontWeight:650,color:"var(--text-strong)",margin:0,letterSpacing:"-0.02em",lineHeight:"1.3",fontFamily:t},O={fontSize:"14px",color:"var(--text-muted)",margin:0,lineHeight:"1.55",fontWeight:400,fontFamily:t},V={fontSize:"22px",fontWeight:750,color:"var(--text-strong)",margin:"6px 0 2px",letterSpacing:"-0.02em",fontFamily:t},Y={width:"100%",padding:"11px",marginTop:"8px",background:W?"linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)":g?"linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)":"linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",color:"#ffffff",border:"none",borderRadius:"10px",fontSize:"14px",fontWeight:600,letterSpacing:"-0.01em",cursor:"pointer",boxShadow:g?"0 6px 20px rgba(99, 102, 241, 0.35)":"0 3px 10px rgba(99, 102, 241, 0.2)",transform:W?"scale(0.97)":g?"translateY(-1px)":"translateY(0)",transition:"all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",fontFamily:t},G=r?{position:"absolute",top:0,left:0,right:0,height:"3px",background:"linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa, #8b5cf6, #6366f1)",backgroundSize:"200% 100%",animation:"none",zIndex:1}:{};return e.jsxs("div",{style:D,onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[r&&e.jsx("div",{style:G}),c&&e.jsxs("div",{style:H,children:[e.jsx("img",{src:c,alt:E,style:q}),n&&e.jsx("span",{style:B,children:n})]}),!c&&n&&e.jsx("span",{style:{...B,position:"relative",alignSelf:"flex-start",margin:"16px 0 0 20px"},children:n}),e.jsxs("div",{style:U,children:[e.jsx("h3",{style:N,children:E}),I&&e.jsx("p",{style:O,children:I}),P!==void 0&&e.jsxs("div",{style:V,children:["$",P.toFixed(2)]}),T&&e.jsx("button",{onClick:T,style:Y,onMouseEnter:()=>F(!0),onMouseLeave:()=>{F(!1),m(!1)},onMouseDown:()=>m(!0),onMouseUp:()=>m(!1),children:z})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""},price:{required:!1,tsType:{name:"number"},description:""},badge:{required:!1,tsType:{name:"string"},description:""},badgeColor:{required:!1,tsType:{name:"union",raw:"'blue' | 'green' | 'red' | 'yellow'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Learn More'",computed:!1}},featured:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};var f,h,x,v,y,S,w,C,_,A,L,k;const Q={title:"Components/Card",component:a,argTypes:{title:{control:"text",description:"Card heading"},description:{control:"text",description:"Card body text"},price:{control:"number",description:"Price displayed on the card"},badge:{control:"text",description:'Badge label (e.g. "Sale", "New")'},badgeColor:{control:"radio",options:["blue","green","red","yellow"],description:"Badge color theme"},featured:{control:"boolean",description:"Featured card with accent border and glow"},actionLabel:{control:"text",description:"CTA button text"}},parameters:{docs:{description:{component:"A product card with floating hover lift, image zoom, translucent badges, and gradient CTA button."}}}},s={args:{title:"Minimal Card",description:"Clean and simple with no distractions - just content that speaks for itself.",price:29.99,actionLabel:"View Details",onAction:()=>{}}},l={args:{title:"MacBook Pro",description:"The ultimate pro notebook",price:1999,image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8-w=400&h=300&fit=crop",actionLabel:"Add to Cart",onAction:()=>{}}},d={args:{title:"Premium Headphones",description:"Immersive audio",price:349.99,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e-w=400&h=300&fit=crop",badge:"Best Seller",badgeColor:"green",featured:!0,actionLabel:"Buy Now",onAction:()=>{}}},o=()=>i.createElement("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"20px",alignItems:"flex-start"}},i.createElement(a,{title:"Studio Monitor",description:"Professional audio monitoring for creators and musicians.",price:199.99,badge:"NEW",badgeColor:"blue",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e-w=400&h=300&fit=crop",actionLabel:"Explore",onAction:()=>{}}),i.createElement(a,{title:"Smart Watch Ultra",description:"Advanced health tracking meets premium design.",price:449.99,badge:"POPULAR",badgeColor:"green",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30-w=400&h=300&fit=crop",featured:!0,actionLabel:"Pre-Order",onAction:()=>{}}),i.createElement(a,{title:"USB-C Hub Pro",description:"Everything you need in one sleek connector.",price:79.99,badge:"30% OFF",badgeColor:"red",image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8-w=400&h=300&fit=crop",actionLabel:"Add to Cart",onAction:()=>{}}));o.__docgenInfo={description:"",methods:[],displayName:"Showcase"};s.parameters={...s.parameters,docs:{...(f=s.parameters)===null||f===void 0?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Minimal Card',
    description: 'Clean and simple with no distractions - just content that speaks for itself.',
    price: 29.99,
    actionLabel: 'View Details',
    onAction: () => {}
  }
}`,...(x=s.parameters)===null||x===void 0||(h=x.docs)===null||h===void 0?void 0:h.source}}};l.parameters={...l.parameters,docs:{...(v=l.parameters)===null||v===void 0?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'MacBook Pro',
    description: "The ultimate pro notebook",
    price: 1999.00,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8-w=400&h=300&fit=crop',
    actionLabel: 'Add to Cart',
    onAction: () => {}
  }
}`,...(S=l.parameters)===null||S===void 0||(y=S.docs)===null||y===void 0?void 0:y.source}}};d.parameters={...d.parameters,docs:{...(w=d.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Premium Headphones',
    description: "Immersive audio",
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e-w=400&h=300&fit=crop',
    badge: 'Best Seller',
    badgeColor: 'green',
    featured: true,
    actionLabel: 'Buy Now',
    onAction: () => {}
  }
}`,...(_=d.parameters)===null||_===void 0||(C=_.docs)===null||C===void 0?void 0:C.source}}};o.parameters={...o.parameters,docs:{...(A=o.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`() => React.createElement('div', {
  style: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '20px',
    alignItems: 'flex-start'
  }
}, React.createElement(Card, {
  title: 'Studio Monitor',
  description: 'Professional audio monitoring for creators and musicians.',
  price: 199.99,
  badge: 'NEW',
  badgeColor: 'blue',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e-w=400&h=300&fit=crop',
  actionLabel: 'Explore',
  onAction: () => {}
}), React.createElement(Card, {
  title: 'Smart Watch Ultra',
  description: 'Advanced health tracking meets premium design.',
  price: 449.99,
  badge: 'POPULAR',
  badgeColor: 'green',
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30-w=400&h=300&fit=crop',
  featured: true,
  actionLabel: 'Pre-Order',
  onAction: () => {}
}), React.createElement(Card, {
  title: 'USB-C Hub Pro',
  description: 'Everything you need in one sleek connector.',
  price: 79.99,
  badge: '30% OFF',
  badgeColor: 'red',
  image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8-w=400&h=300&fit=crop',
  actionLabel: 'Add to Cart',
  onAction: () => {}
}))`,...(k=o.parameters)===null||k===void 0||(L=k.docs)===null||L===void 0?void 0:L.source}}};const X=["Default","WithImage","Featured","Showcase"];export{s as Default,d as Featured,o as Showcase,l as WithImage,X as __namedExportsOrder,Q as default};

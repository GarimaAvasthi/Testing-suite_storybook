import{r as L,R as e}from"./iframe-Bq0NOvN_.js";import{j as G}from"./jsx-runtime-Bq_kcYf7.js";import"./preload-helper-PPVm8Dsz.js";const U={primary:{background:"linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",hoverBackground:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #8b5cf6 100%)",color:"#ffffff",border:"none",shadow:"0 4px 14px rgba(99, 102, 241, 0.35), 0 1px 3px rgba(0,0,0,0.08)",hoverShadow:"0 8px 25px rgba(99, 102, 241, 0.45), 0 2px 6px rgba(0,0,0,0.1)"},secondary:{background:"var(--btn-secondary-bg)",hoverBackground:"var(--btn-secondary-bg)",color:"var(--btn-secondary-color)",border:"1.5px solid var(--btn-secondary-border)",shadow:"0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",hoverShadow:"0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)"},danger:{background:"linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)",hoverBackground:"linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)",color:"#ffffff",border:"none",shadow:"0 4px 14px rgba(239, 68, 68, 0.3), 0 1px 3px rgba(0,0,0,0.08)",hoverShadow:"0 8px 25px rgba(239, 68, 68, 0.4), 0 2px 6px rgba(0,0,0,0.1)"}},O={sm:{padding:"8px 18px",fontSize:"13px",borderRadius:"10px"},md:{padding:"11px 26px",fontSize:"14.5px",borderRadius:"12px"},lg:{padding:"14px 34px",fontSize:"16px",borderRadius:"14px"}},a=({variant:n="primary",size:i="md",children:u,disabled:r=!1,className:W="",style:j,...C})=>{const[g,q]=L.useState(!1),[F,v]=L.useState(!1),t=U[n],H=O[i],Y={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",fontFamily:"'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",fontWeight:600,letterSpacing:"-0.01em",lineHeight:"1",cursor:r?"not-allowed":"pointer",userSelect:"none",border:t.border,outline:"none",background:r?"linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)":g?t.hoverBackground:t.background,color:r?"#94a3b8":t.color,boxShadow:r?"0 1px 2px rgba(0,0,0,0.04)":g?t.hoverShadow:t.shadow,opacity:r?.65:1,transform:F&&!r?"scale(0.96) translateY(1px)":g&&!r?"translateY(-1px)":"translateY(0)",transition:"all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",...H,...j};return G.jsx("button",{className:W,style:Y,disabled:r,onMouseEnter:()=>q(!0),onMouseLeave:()=>{q(!1),v(!1)},onMouseDown:()=>v(!0),onMouseUp:()=>v(!1),...C,children:u})};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};var y,b,f,x,_,S,h,D,E,R,w,z,B,P,A,k,V,I,M,N,T;const X={title:"Components/Button",component:a,argTypes:{state:{control:{type:"radio"},options:["Primary","Secondary","Disabled"],description:"Quick state toggle for primary/secondary/disabled"},variant:{control:{type:"radio"},options:["primary","secondary","danger"],description:"Visual style variant"},size:{control:{type:"radio"},options:["sm","md","lg"],description:"Button size preset"},disabled:{control:{type:"boolean"},description:"Disabled state"},children:{control:{type:"text"},description:"Button label"}},parameters:{docs:{description:{component:"A tactile button with gradient backgrounds, layered shadows, and press-to-scale micro-interaction."}}}},l={args:{state:"Disabled",variant:"primary",disabled:!1,children:"Click Me"},argTypes:{variant:{control:!1},disabled:{control:!1}},render:n=>{const i=n.state==="Disabled",u=n.state==="Secondary"?"secondary":"primary";return e.createElement(a,{...n,variant:i?"primary":u,disabled:i},n.children)}},d={args:{variant:"secondary",children:"Get Started"}},c={args:{variant:"secondary",children:"Learn More"}},p={args:{variant:"danger",children:"Delete Account"}},m={args:{disabled:!1,variant:"primary",children:"Processing...",state:"Secondary"}},s=()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"}},e.createElement(a,{variant:"primary",size:"sm"},"Small"),e.createElement(a,{variant:"primary",size:"md"},"Medium"),e.createElement(a,{variant:"primary",size:"lg"},"Large")),o=()=>e.createElement("div",{style:{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center"}},e.createElement(a,{variant:"primary"},"Primary"),e.createElement(a,{variant:"secondary"},"Secondary"),e.createElement(a,{variant:"danger"},"Delete"),e.createElement(a,{variant:"primary",disabled:!0},"Disabled"));s.__docgenInfo={description:"",methods:[],displayName:"AllSizes"};o.__docgenInfo={description:"",methods:[],displayName:"AllVariants"};l.parameters={...l.parameters,docs:{...(y=l.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  args: {
    state: "Disabled",
    variant: 'primary',
    disabled: false,
    children: 'Click Me'
  },
  argTypes: {
    variant: {
      control: false
    },
    disabled: {
      control: false
    }
  },
  render: args => {
    const isDisabled = args.state === 'Disabled';
    const resolvedVariant = args.state === 'Secondary' ? 'secondary' : 'primary';
    return React.createElement(Button, {
      ...args,
      variant: isDisabled ? 'primary' : resolvedVariant,
      disabled: isDisabled
    }, args.children);
  }
}`,...(f=l.parameters)===null||f===void 0||(b=f.docs)===null||b===void 0?void 0:b.source}}};d.parameters={...d.parameters,docs:{...(x=d.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: 'Get Started'
  }
}`,...(S=d.parameters)===null||S===void 0||(_=S.docs)===null||_===void 0?void 0:_.source}}};c.parameters={...c.parameters,docs:{...(h=c.parameters)===null||h===void 0?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Learn More'
  }
}`,...(E=c.parameters)===null||E===void 0||(D=E.docs)===null||D===void 0?void 0:D.source}}};p.parameters={...p.parameters,docs:{...(R=p.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Delete Account'
  }
}`,...(z=p.parameters)===null||z===void 0||(w=z.docs)===null||w===void 0?void 0:w.source}}};m.parameters={...m.parameters,docs:{...(B=m.parameters)===null||B===void 0?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary',
    children: 'Processing...',
    state: "Secondary"
  }
}`,...(A=m.parameters)===null||A===void 0||(P=A.docs)===null||P===void 0?void 0:P.source}}};s.parameters={...s.parameters,docs:{...(k=s.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`() => React.createElement('div', {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  }
}, React.createElement(Button, {
  variant: 'primary',
  size: 'sm'
}, 'Small'), React.createElement(Button, {
  variant: 'primary',
  size: 'md'
}, 'Medium'), React.createElement(Button, {
  variant: 'primary',
  size: 'lg'
}, 'Large'))`,...(I=s.parameters)===null||I===void 0||(V=I.docs)===null||V===void 0?void 0:V.source}}};o.parameters={...o.parameters,docs:{...(M=o.parameters)===null||M===void 0?void 0:M.docs,source:{originalSource:`() => React.createElement('div', {
  style: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
}, React.createElement(Button, {
  variant: 'primary'
}, 'Primary'), React.createElement(Button, {
  variant: 'secondary'
}, 'Secondary'), React.createElement(Button, {
  variant: 'danger'
}, 'Delete'), React.createElement(Button, {
  variant: 'primary',
  disabled: true
}, 'Disabled'))`,...(T=o.parameters)===null||T===void 0||(N=T.docs)===null||N===void 0?void 0:N.source}}};const Z=["Playground","Primary","Secondary","Danger","Disabled","AllSizes","AllVariants"];export{s as AllSizes,o as AllVariants,p as Danger,m as Disabled,l as Playground,d as Primary,c as Secondary,Z as __namedExportsOrder,X as default};

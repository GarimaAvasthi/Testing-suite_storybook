import{r as A,R as n}from"./iframe-Bq0NOvN_.js";import{j as i}from"./jsx-runtime-Bq_kcYf7.js";import"./preload-helper-PPVm8Dsz.js";const l=({label:q,helperText:P,error:o=!1,fullWidth:U=!1,disabled:e=!1,type:J="text",className:O="",style:$,...a})=>{const[N,V]=A.useState(!1),[z,B]=A.useState(!1),s="'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",G={display:"flex",flexDirection:"column",gap:"6px",width:U?"100%":"320px",fontFamily:s},K={fontSize:"13.5px",fontWeight:600,letterSpacing:"-0.01em",color:o?"#dc2626":e?"var(--text-muted)":"var(--text-strong)",transition:"color 0.2s ease",fontFamily:s},Q={width:"100%",padding:"11px 14px",fontSize:"14.5px",lineHeight:"1.5",fontFamily:s,color:e?"var(--text-muted)":"var(--text-strong)",backgroundColor:e?"var(--page-bg)":"var(--card-bg)",border:`1.5px solid ${o?"#ef4444":N?"var(--primary-base, #6366f1)":z&&!e?"#a5b4fc":"var(--border-subtle, #d1d5db)"}`,borderRadius:"10px",outline:"none",boxShadow:N?o?"0 0 0 3px rgba(239, 68, 68, 0.12), 0 1px 3px rgba(0,0,0,0.04)":"0 0 0 3px var(--primary-glow, rgba(99, 102, 241, 0.12)), 0 1px 3px rgba(0,0,0,0.04)":z&&!e?"0 2px 8px rgba(0,0,0,0.04)":"0 1px 2px rgba(0,0,0,0.04)",transition:"all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",cursor:e?"not-allowed":"text",opacity:e?.65:1,...$},X={fontSize:"12.5px",lineHeight:"1.4",fontWeight:450,color:o?"#dc2626":"var(--text-muted)",margin:0,paddingLeft:"2px",fontFamily:s,transition:"color 0.2s ease"};return i.jsxs("div",{style:G,children:[q&&i.jsx("label",{style:K,children:q}),i.jsx("input",{type:J,className:O,style:Q,disabled:e,onFocus:x=>{var r;V(!0),(r=a.onFocus)===null||r===void 0||r.call(a,x)},onBlur:x=>{var r;V(!1),(r=a.onBlur)===null||r===void 0||r.call(a,x)},onMouseEnter:()=>B(!0),onMouseLeave:()=>B(!1),...a}),P&&i.jsx("p",{style:X,children:P})]})};l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};var v,b,f,_,g,y,E,F,w,W,S,T,D,I,H,R,L,j,k,C,M;const ae={title:"Components/Input",component:l,argTypes:{label:{control:"text",description:"Field label above the input"},helperText:{control:"text",description:"Helper or error message below the input"},error:{control:"boolean",description:"Error state with red styling"},disabled:{control:"boolean",description:"Disabled interaction state"},fullWidth:{control:"boolean",description:"Expand to fill parent container"},type:{control:{type:"select"},options:["text","email","password","number","date"],description:"HTML input type"},placeholder:{control:"text",description:"Placeholder text"}},parameters:{docs:{description:{component:"A polished input field with animated focus glow, smooth hover transitions, and error state styling."}}}},d={args:{placeholder:"Fill details"}},p={args:{label:"Email Address",placeholder:"you@company.com",type:"email"}},c={args:{label:"Password",type:"password",placeholder:"Enter your password",helperText:"Must be at least 8 characters with one uppercase letter"}},u={args:{label:"Username",placeholder:"",error:!0,helperText:"This username is already taken"}},m={args:{label:"Locked Field",placeholder:"Cannot edit this",disabled:!0}},h={args:{label:"Full Width Input",placeholder:"Expands to container width",fullWidth:!0}},t=()=>n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"4px",maxWidth:"400px",padding:"28px",backgroundColor:"#fafafa",borderRadius:"16px",border:"1px solid rgba(0,0,0,0.06)"}},n.createElement(l,{label:"Full Name",placeholder:"Jane Smith"}),n.createElement(l,{label:"Email",type:"email",placeholder:"jane@company.com",helperText:"We will never share your email"}),n.createElement(l,{label:"Password",type:"password",placeholder:"********",helperText:"Min 8 characters"}));t.__docgenInfo={description:"",methods:[],displayName:"FormExample"};d.parameters={...d.parameters,docs:{...(v=d.parameters)===null||v===void 0?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: "Fill details"
  }
}`,...(f=d.parameters)===null||f===void 0||(b=f.docs)===null||b===void 0?void 0:b.source}}};p.parameters={...p.parameters,docs:{...(_=p.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'you@company.com',
    type: 'email'
  }
}`,...(y=p.parameters)===null||y===void 0||(g=y.docs)===null||g===void 0?void 0:g.source}}};c.parameters={...c.parameters,docs:{...(E=c.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters with one uppercase letter'
  }
}`,...(w=c.parameters)===null||w===void 0||(F=w.docs)===null||F===void 0?void 0:F.source}}};u.parameters={...u.parameters,docs:{...(W=u.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: "",
    error: true,
    helperText: 'This username is already taken'
  }
}`,...(T=u.parameters)===null||T===void 0||(S=T.docs)===null||S===void 0?void 0:S.source}}};m.parameters={...m.parameters,docs:{...(D=m.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Locked Field',
    placeholder: 'Cannot edit this',
    disabled: true
  }
}`,...(H=m.parameters)===null||H===void 0||(I=H.docs)===null||I===void 0?void 0:I.source}}};h.parameters={...h.parameters,docs:{...(R=h.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'Expands to container width',
    fullWidth: true
  }
}`,...(j=h.parameters)===null||j===void 0||(L=j.docs)===null||L===void 0?void 0:L.source}}};t.parameters={...t.parameters,docs:{...(k=t.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`() => React.createElement('div', {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    maxWidth: '400px',
    padding: '28px',
    backgroundColor: '#fafafa',
    borderRadius: '16px',
    border: '1px solid rgba(0,0,0,0.06)'
  }
}, React.createElement(Input, {
  label: 'Full Name',
  placeholder: 'Jane Smith'
}), React.createElement(Input, {
  label: 'Email',
  type: 'email',
  placeholder: 'jane@company.com',
  helperText: 'We will never share your email'
}), React.createElement(Input, {
  label: 'Password',
  type: 'password',
  placeholder: '********',
  helperText: 'Min 8 characters'
}))`,...(M=t.parameters)===null||M===void 0||(C=M.docs)===null||C===void 0?void 0:C.source}}};const te=["Default","WithLabel","WithHelper","Error","Disabled","FullWidth","FormExample"];export{d as Default,m as Disabled,u as Error,t as FormExample,h as FullWidth,c as WithHelper,p as WithLabel,te as __namedExportsOrder,ae as default};

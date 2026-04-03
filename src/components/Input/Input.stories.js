import React from 'react';



import { Input } from './Input';







export default {



  title: 'Components/Input',



  component: Input,



  argTypes: {



    label: { control: 'text', description: 'Field label above the input' },



    helperText: { control: 'text', description: 'Helper or error message below the input' },



    error: { control: 'boolean', description: 'Error state with red styling' },



    disabled: { control: 'boolean', description: 'Disabled interaction state' },



    fullWidth: { control: 'boolean', description: 'Expand to fill parent container' },



    type: {



      control: { type: 'select' },



      options: ['text', 'email', 'password', 'number', 'date'],



      description: 'HTML input type',



    },



    placeholder: { control: 'text', description: 'Placeholder text' },



  },



  parameters: {



    docs: {



      description: {



        component: 'A polished input field with animated focus glow, smooth hover transitions, and error state styling.',



      },



    },



  },



};







export const Default = {


  args:{


    placeholder:"Fill details",



  },



};







export const WithLabel = {



  args: {



    label: 'Email Address',



    placeholder: 'you@company.com',



    type: 'email',



  },



};







export const WithHelper = {



  args: {



    label: 'Password',



    type: 'password',



    placeholder: 'Enter your password',



    helperText: 'Must be at least 8 characters with one uppercase letter',



  },



};







export const Error = {


  args:{


    label:'Username',


    placeholder:"",


    error:true,


    helperText:'This username is already taken',



  },



};







export const Disabled = {



  args: {



    label: 'Locked Field',



    placeholder: 'Cannot edit this',



    disabled: true,



  },



};







export const FullWidth = {



  args: {



    label: 'Full Width Input',



    placeholder: 'Expands to container width',



    fullWidth: true,



  },



};







export const FormExample = () =>



  React.createElement(



    'div',



    {



      style: {



        display: 'flex',



        flexDirection: 'column',



        gap: '4px',



        maxWidth: '400px',



        padding: '28px',



        backgroundColor: '#fafafa',



        borderRadius: '16px',



        border: '1px solid rgba(0,0,0,0.06)',



      },



    },



    React.createElement(Input, {



      label: 'Full Name',



      placeholder: 'Jane Smith',



    }),



    React.createElement(Input, {



      label: 'Email',



      type: 'email',



      placeholder: 'jane@company.com',



      helperText: 'We will never share your email',



    }),



    React.createElement(Input, {



      label: 'Password',



      type: 'password',



      placeholder: '********',



      helperText: 'Min 8 characters',



    })



  );




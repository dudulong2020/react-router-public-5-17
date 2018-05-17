import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Consumer} from './context';
import pathToReg from 'path-to-regexp';
export default class Route extends Component{
    constructor(){
        super();
   }
   render(){
     return <Consumer>
       {state=>{
         // path是route中传递的
         let { path, component: Component, exact=false} = this.props
         // pathname是location中的
         let pathname = state.location.pathname;
         // 根据path实现一个正则 通过这则匹配
         let reg = pathToReg(path, [], { end: exact});
         let result = pathname.match(reg);
         if (result){
           return <Component></Component>
         }
         return null
       }}
     </Consumer>
 }
}
/*
 * @Author: zhangdepeng zhang.depeng@smartcompany.jp
 * @Date: 2022-08-17 11:39:34
 * @LastEditors: zhangdepeng zhang.depeng@smartcompany.jp
 * @LastEditTime: 2022-09-26 18:07:26
 * @FilePath: \react_20220817\my-app\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import {useRef} from 'react';
// import logo from './logo.svg';
import {BrowserRouter,Route} from "react-router-dom";
import Welcome from './Admin/Page/Welcome';
function App(){
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Route path="/" compoment={Welcome} exact="false"/> */}
        <Welcome name="Sara"/>
      </div>
    </BrowserRouter>
  )
// function App() {
//   const ref = useRef(12)
//   var aaa = 23;
//   console.log(aaa);
//   const bbb = ()=>{
//      ref.current = aaa;
//     return ref.current;
//   }
  //  return bbb()

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         点击跳转
  //       </a>
  //     </header>
  //   </div>
  // );
  
  // return (
  //   <div>
  //     Hello World
  //   </div>
  // );
}

export default App;

// import Card from './Components/Card';
// import Conditional from './Components/Conditional';
// import Pracite from './Components/Practice';
// import NetflixSeries from "./Components/NetflixSeries.jsx"
// import EventHandling from './Components/EventHandling.jsx';
// import EventProps from './Components/EventProps.jsx';
// import EventPropogation from './Components/EventPropogation.jsx';
// import ContactForm from './Components/ContactForm.jsx';
// import ControlledAndUncontrolled from './Components/ControlledAndUncontrolled.jsx';
// import DerivedState from './Components/DerivedState.jsx';
// import { ThemeProvider } from './Components/Hooks/ContextAPI/ContextProvider.jsx';
// import DarkAndLightTheme from './Components/Hooks/ContextAPI/DarkAndLightTheme.jsx';
// import ReactMemo from './Components/Hooks/React_memo/ReatMemo.jsx';
// import MemoParentComponent from './Components/Hooks/UseMemo/UseMemo.jsx';
// import UseMemo from './Components/Hooks/UseMemo/UseMemo.jsx';
// import { createBrowserRouter, data, RouterProvider } from "react-router-dom"
// import Home from './Components/Router/Home.jsx';
// import About from './Components/Router/About.jsx';
// import Movie from './Components/Router/Movie.jsx';
// import AppLayout from './Components/Router/Layout/AppLayout.jsx';
// import UseEffectPractice from './Components/Hooks/UseEffect/UseEffectPractice.jsx';
// import UseForwardRef from './Components/Hooks/UseRef/UseForwardRef.jsx';
// import UseState from './Components/Hooks/UseState.jsx';
// import UseStatePractice from './Components/Hooks/UseStatePractice.jsx';
// import UseStatePractice2 from './Components/Hooks/UseStatePractice2.jsx';
// import LiftingStateUp from './Components/LiftingStateUp.jsx';
// import LoginForm from "./Components/LoginForm.jsx"
// import RegistrationForm from './Components/RegistrationForm.jsx';
// import ShortCircuit from './Components/ShortCircuit.jsx';
// // import Pokemon from './Projects/Pokemon.jsx';
// import {Pokemon} from "./Projects/Pokemon_Project/Pokemon.jsx"
// import { Todo } from './Projects/Todo/Todo.jsx';
// // import Todo from './Projects/Todo/Todo.jsx';
// import ToggleSwitch from './Projects/ToggleSwitch.jsx';
// import {getMovieData} from "./api/getMovieData"
// import Contact, { contactData } from './Components/Router/Contact.jsx';
import Axios from './Components/Axios/Axios.jsx';

//fetching data:-



function App() {
  // const getData=async()=>{
  //   const response= await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ea8d1079&s=titanic&page=1")
  //   const data=await response.json()
  //   return data
  //   // console.log("Data from getData Function",data.Search);
  // }
  //Router Practice
  // const router=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<AppLayout/>,
  //     children:[
  //       {
  //         path:"",
  //         element:<Home/>
  //       },
  //       {
  //         path:"about",
  //         element:<About/>,
  //         loader:getData
  //       },
  //       {
  //         path:"movie",
  //         element:<Movie/>
  //       },
  //       {
  //         path:"contact",
  //         element:<Contact/>,
  //         action:contactData
  //       }
    
  //     ]
  //   },
    
  // ])
  



    

  return (
    <>
   {/* **********************Card 1st Project************************************** */}
   {/* <Card/> */}
   {/* ***********************Conditional ************************************************* */}
   {/* <Conditional/> */}
   {/* ***************************Practice********************************** */}
   {/* <Pracite/> */}
   {/* *******************************Netflix Series********************* */}
   {/* <NetflixSeries/> */}
   {/* ******************************Event Handling********************** */}
   {/* <EventHandling/> */}
   {/* *********************************Event Props************************* */}
   {/* <EventProps/> */}
    {/* *****************************Event Propogation****************** */}
    {/* <EventPropogation/> */}
    {/* ********************************Use State Hook********************* */}
    {/* <UseState/> */}
    {/* *****************Use State Practice************************ */}
    {/* <UseStatePractice/> */}

    {/* *********************Derived State******************** */}
    {/* <DerivedState/> */}


    {/* ********************Lifting State Up******************** */}
    {/* <LiftingStateUp/> */}

      {/* ************************Toggle Switch****************     */}
      {/* <ToggleSwitch/> */}

      {/* **********************Todo Project******************** */}
      {/* <Todo/> */}
      {/* *******************Short Circuit************************** */}
      {/* <ShortCircuit/> */}
      {/* **********************Use State Practice********************* */}
      {/* <UseStatePractice2/> */}
      {/* *******************Controll and Uncontroled Component*********** */}
      {/* <ControlledAndUncontrolled/> */}
      {/* ****************Registration Form********************************* */}
      {/* <RegistrationForm/> */}

      {/* ***********************Login Form****************************** */}
      {/* <LoginForm/> */}

      {/* *************************Contact Form********************** */}
      {/* <ContactForm/> */}
      {/* *************************User Effect Practice****************** */}
      {/* <UseEffectPractice/> */}
      {/* ******************Pokemon Game*************************** */}
      {/* <Pokemon/> */}

      {/* *********************************Pokemon Crad Project*********** */}
      {/* <Pokemon/> */}

      {/* ***********************Forward Ref******************** */}
      {/* <UseForwardRef/> */}

      {/* ****************Dark and Light Theme Project with Context Api**** */}
      {/* <ThemeProvider>
          <DarkAndLightTheme/>
      </ThemeProvider> */}

      {/* ****************************React.Memo*********************** */}
      {/* <ReactMemo/> */}

      {/* **************************Use Memo******************** */}
          {/* <MemoParentComponent/> */}
          {/* <RouterProvider router={router}/> */}
          <Axios/>

    
    </>
  );
}

export default App;

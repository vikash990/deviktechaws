import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import dblogo from "../Images/deviktechlogo.png"
import SliderToggle from './Slider/sliderToggle.js';

const NavWrapper = styled('div')`
        display: flex;
        flex-direction: row;
        height:60px;
        padding:12px 15px 12px 15px;
        background: white;            

    `;

const ApplyWrapper = styled('div')`
    
     dispaly:flex;
     margin:0px 40px;
     width:70px;
     border-radius:8px;  
     font-family:'Nunito Sans', sans-serif;
     font-style:italic;
     font-variant: normal;
     font-weight:550;     
     background-color:blue;
     text-align:center;

     @media(max-width:768px) {
        margin:0px 15px;
        width:200px;
    }
     
`;


const NavLinkWrapper= styled(NavLink)`
    
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      justify-content: center;
      color:black;
      text-decoration:none;
      &:hover {
        
        color:black;
        text-decoration:none;
      }

      @media(max-width:768px) {
          display:none;
      }
    
`;

const Spacer = styled('div')`
    flex:1

`;
const SliderToggleWrapper=styled('div')`
   @media(min-width:769px){
       display:none;
   }
`;

const ApplyLinkWrapper=styled('a')`
     display: flex;
     flex-direction: column;
     color:white;
     text-decoration:none;
     margin-top:5px;

  &:hover { 
    color:black;
    text-decoration:none;
}
`;

const AllNavLinkWrapper = styled('div')`

  display:flex;
  flex-direction:row;
  justify-content:space-around;
  width:350px;
  margin:0px 0px 0px 30px;
  font-family:'Nunito Sans', sans-serif;
  font-style:italic;
  font-variant: normal;
  font-weight:550;
  

`;



class Header extends React.Component{

    render(){
        return(
        <NavWrapper>
            <SliderToggleWrapper>
                <SliderToggle click={this.props.drawerClickHandler}/>
            </SliderToggleWrapper>
        <AllNavLinkWrapper>
           <NavLinkWrapper to ="/" exact ><img src={dblogo}/></NavLinkWrapper>
          {/*  <NavLinkWrapper to ="/courses" exact >Courses</NavLinkWrapper> */}
           <NavLinkWrapper to ="/about" exact >About Us</NavLinkWrapper>         
           <NavLinkWrapper to ="/contact" exact >Contact Us</NavLinkWrapper> 
           <NavLinkWrapper to ="/apply" exact >Apply</NavLinkWrapper>
        </AllNavLinkWrapper>
            <Spacer/>        
      {/*   <ApplyWrapper>   
          <ApplyLinkWrapper target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1">Apply</ApplyLinkWrapper> 
        </ApplyWrapper> */}
        </NavWrapper>
        );

    }
}
export default Header;
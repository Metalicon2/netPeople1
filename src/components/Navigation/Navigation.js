import React from 'react';
import {NavigationBar, Logo, LogoText, List, UList, ListItem, ButtonContainer, Button, ButtonText} from './style.js';
import {
  Link
} from "react-router-dom";
import {randomColor} from 'randomcolor';

const LogoTitle = 'Happy-Newspapers';

const Navigation = () => {
  return (
      <NavigationBar>
        <Logo>
          {//Itt ciklikusan a LogoTitle sztringből generálom a betű komponenseket azért, hogy a hover-nél random szín jelenhessen meg mindegyikre (felesleges és giccses de menő)
            LogoTitle.split('').map((item, index) => {
              return (item === '-' || (item === 's' && index >= 12) ? <LogoText key={index} hyphen color={randomColor()}>{item}</LogoText>
              :
              (index >= 5 ? <LogoText key={index} grey color={randomColor()}>{item}</LogoText>
              :
              <LogoText key={index} color={randomColor()}>{item}</LogoText>))
            })
          }
        </Logo>
        <List>
          <UList>
          <Link to='/home'><ListItem>HOME</ListItem></Link>
          <Link to='/order'><ListItem>ORDER</ListItem></Link>
          <Link to='/faq'><ListItem>FAQ</ListItem></Link>
          <Link to='/contact'><ListItem>CONTACT</ListItem></Link>
          </UList>
        </List>
        <ButtonContainer>
          <Button><ButtonText>START HERE</ButtonText></Button>
        </ButtonContainer>
      </NavigationBar>
  );
}

export default Navigation;
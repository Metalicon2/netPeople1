import React from 'react';
import {NavigationBar, Logo, LogoText, List, UList, ListItem, ButtonContainer, Button, ButtonText} from './style.js';

const Navigation = () => {
  return (
      <NavigationBar>
        <Logo>
          <LogoText>Birthday</LogoText>
          <LogoText hyphen>-</LogoText>
          <LogoText grey>Newspaper</LogoText>
          <LogoText hyphen>s</LogoText>
        </Logo>
        <List>
          <UList>
          <ListItem>HOME</ListItem>
          <ListItem>ORDER</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>CONTACT</ListItem>
          </UList>
        </List>
        <ButtonContainer>
          <Button><ButtonText>START HERE</ButtonText></Button>
        </ButtonContainer>
      </NavigationBar>
  );
}

export default Navigation;
import React, {useState} from 'react';
import {FirstBox, Title, Text, Newspaper, SecondBox, Title2, Title3, CardContainer, Card, ThirdBox, CardContainer2, Card2, CardTextWrapper, CardText2,
CardImage1, CardImage2, CardImage3, CardImage4, CardImage5, CardImage6, CardTitle, CardText, Footer, UList, ListItem, PayPal} from './style.js';
import Calendar from './Calendar.js';

const Home = () => {
    return (
        <div>
            <FirstBox>
                <Title>The Best Birthday Gift</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan congue fermentum. Praesent lobortis massa turpis, sit amet placerat metus sollicitudin eget.
                </Text>
                <Newspaper></Newspaper>
            </FirstBox>
            <SecondBox>
                <Title2>This gift makes everybody cry.</Title2>
                <CardContainer>
                    <Card><CardImage1/><CardTitle>Aznapi újság, amikor Ő született</CardTitle><CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </CardText></Card>
                    <Card><CardImage2/><CardTitle>Egyedi cikk és kép</CardTitle><CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </CardText></Card>
                    <Card><CardImage3/><CardTitle>Válaszd ki, mi legyen az alap újság</CardTitle><CardText>100+ újság közül választhatod ki azt, ami a legközelebb áll az ajándékozotthoz.</CardText></Card>
                    <Card><CardImage4/><CardTitle>Akár 2 nap múlva nálad</CardTitle><CardText>Nem baj, ha sürgős. Rendels SOS verziót, és 2 nap múlva kézhez kapod az újságot.</CardText></Card>
                </CardContainer>
            </SecondBox>
            <ThirdBox>
                <Title3>Make your (ünnepeltedet) Thrilled!</Title3>
                <CardContainer2>
                    <Card2><CardImage5/>
                    <CardTextWrapper>
                        <CardText2>"Kedves "Meglepkék" szombaton rendeltünk Nálatok egy 12 oldalas újságot 40. születésnapra, tegnap este átadtuk az ünnepeltnek. Azt leírni nem tudom, 
                            hogy milyen hatással volt rá, de az öröm, a meglepetés óriási volt, ezúton szeretném megköszönni odafigyelő, gyors hozzáállásotokat és az ÖRÖK emlék újságot." 
                        </CardText2>
                    </CardTextWrapper>
                    </Card2>
                    <Card2><CardImage6/>
                    <CardTextWrapper>
                        <CardText2>"Kedves "Meglepkék" szombaton rendeltünk Nálatok egy 12 oldalas újságot 40. születésnapra, tegnap este átadtuk az ünnepeltnek. Azt leírni nem tudom, 
                            hogy milyen hatással volt rá, de az öröm, a meglepetés óriási volt, ezúton szeretném megköszönni odafigyelő, gyors hozzáállásotokat és az ÖRÖK emlék újságot." 
                        </CardText2>
                    </CardTextWrapper></Card2>
                    <Card2><CardImage5/>
                    <CardTextWrapper>
                        <CardText2>"Kedves "Meglepkék" szombaton rendeltünk Nálatok egy 12 oldalas újságot 40. születésnapra, tegnap este átadtuk az ünnepeltnek. Azt leírni nem tudom, 
                            hogy milyen hatással volt rá, de az öröm, a meglepetés óriási volt, ezúton szeretném megköszönni odafigyelő, gyors hozzáállásotokat és az ÖRÖK emlék újságot." 
                        </CardText2>
                    </CardTextWrapper>
                    </Card2>
                </CardContainer2>
            </ThirdBox>
            <Calendar />
            <Footer>
                <UList>
                    <ListItem>CUSTOMER SERVICE</ListItem>
                    <ListItem>FAQ</ListItem>
                    <ListItem>PRIVACY POLICY</ListItem>
                    <ListItem>HOW TO ORDER</ListItem>
                    <ListItem>BLOG</ListItem>
                    <ListItem paypal><PayPal/></ListItem>
                </UList>
            </Footer>
        </div>
    );
}

export default Home;
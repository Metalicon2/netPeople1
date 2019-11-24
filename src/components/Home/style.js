import styled from 'styled-components';
import img from './img/background.png';
import newspaper from './img/newspaper-mockup-5.png';
import newspapermd from './img/output-onlinepngtools.png';
import shape1 from './img/shape1.PNG';
import shape2 from './img/shape2.PNG';
import shape3 from './img/shape3.PNG';
import shape4 from './img/shape4.PNG';
import shape5 from './img/paypal.PNG';

export const FirstBox = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-color: #2f466c;
    text-align: center;
    padding: 70px;
`

export const Title = styled.h1`
    font-family: Merriweather;
    font-size: 39px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    color: #ffffff;
    margin: 0;
`

export const Title2 = styled(Title)`
    font-family: Lato-Light;
    color: black;
    font-weight: 300;
    padding: 50px 0;
`

export const Text = styled.p`
    font-family: Lato-Light;
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    color: #ffffff;
    margin: 30px 250px 0 250px;
    @media only screen and (max-width: 1380px) {
        margin: 30px 100px 0 100px;
    }
    @media only screen and (max-width: 1075px) {
        margin: 30px 0 0 0;
    }
`

export const Newspaper = styled.div`
    width: 807px;
    height: 785px;
    background-image: url(${newspaper});
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 900px) {
        background-image: none;
    }
`

export const SecondBox = styled.div`
    height: 462px;
    background-color: #feebd2;
    text-align: center;
`

export const CardContainer = styled.div`
    height: 260px;
    padding: 0 75px;
    display: flex;
    justify-content: center;
`

export const Card = styled.div`
    width: 270px;
    height: 260px;
    border-radius: 10px;
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    padding: 0 30px;
    transition: all .4s ease-in-out;
    &:hover { border-radius:50%; }
    box-shadow: 14px -11px 17px -12px rgba(0,0,0,0.4);
`

export const CardImage1 = styled.img.attrs({
    src: shape1
})`
    height: 60px;
    margin: 35px 0;
`

export const CardImage2 = styled.img.attrs({
    src: shape2
})`
    height: 60px;
    margin: 35px 0;
`

export const CardImage3 = styled.img.attrs({
    src: shape3
})`
    height: 60px;
    margin: 35px 0;
`

export const CardImage4 = styled.img.attrs({
    src: shape4
})`
    height: 60px;
    margin: 35px 0;
`

export const CardTitle = styled.p`
    font-family: Lato-Bold;
    font-size: 16px;
    margin: 0;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.28px;
`

export const CardText = styled.p`
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #7f7f7f;
    margin: 10px 0;
`

export const Footer = styled.div`
    height: 129px;
    background-image: linear-gradient(101deg, #fefefe 49%, #e8e8e8);
    width: 100%;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const UList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const ListItem = styled.li`
    margin: 0px 30px;
    padding: 10px 0;
    display: inline-block;
    font-family: Lato;
    color: #454043;
    font-size: 14px;
    opacity: ${(props) => props.paypal ? 1 : 0.6};
    &:hover{
        cursor:pointer;
        color: black;
        transition: 0.5s;
        opacity: 1;
    }
`

export const PayPal = styled.img.attrs({
    src: shape5
})`
    height: 30px;
    vertical-align: middle;
`



import styled from 'styled-components';

export const NavigationBar = styled.div`
    margin: 5px 0;
    overflow: hidden;
    background: white;
    position: relative;
    border-bottom: 1px solid black;
    @media only screen and (max-width: 600px) {
          background: pink;
    }
`

export const Logo = styled.div`
    width: 30%;
    float: left;
    text-align: right;
`

export const LogoText = styled.h2`
    display: inline-block;
    cursor: pointer;
    color: ${props => props.hyphen ? '#d56c2c' : (props.grey ? '#979797' : 'black')}
    margin: 0;
    font-family: Buffalo;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2.93px;
`

export const List = styled.div`
    width: 40%;
    float: left;
    text-align: center;
`

export const UList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 19px 0;
`

export const ListItem = styled.li`
    margin: 0px 30px;
    display: inline-block;
    font-family: Lato;
    color: #454043;
    font-size: 13px;
    &:after{
        content: "";
        border-color: #fbad42;
    }
    &:hover:after {
        content: "";
        display: block; 
        margin: 0 auto; 
        width: 70%; 
        padding-top: 5px; 
        border-bottom: 1px solid #fbad42;
        transition: 0.5s;
    }
    &:hover{
        cursor:pointer;
        color: #fbad42;
        transition: 0.5s;
    }
`

export const ButtonContainer = styled.div`
    width: 30%;
    float: left;
    margin: 10px 0;
`

export const Button = styled.button`
    outline: none;
    width: 140px;
    height: 40px;
    border-radius: 25px;
    background-color: #fbad42;
    cursor: pointer;
    font-family: Lato;
    color: white;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    transition: all 0.5s;
    &:hover span {
        padding-right: 25px;
    }
      
    &:hover span:after {
        opacity: 1;
        right: 0;
    }
`

export const ButtonText = styled.span`
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    &:after{
        content: '>>';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }
`
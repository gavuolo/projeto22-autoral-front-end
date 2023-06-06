import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
//minhas
*{
	user-select: none;
	box-sizing: border-box;
}
div{
	font-family: 'Raleway';
}
p{
	font-family: 'Raleway';
	font-weight: 700;
	font-size: 20px;
	line-height: 23px;
	color: #FFFFFF;
}
input{
	width: 326px;
	height: 58px;
	background: #FFFFFF;
	border-radius: 5px;
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	margin-bottom: 13px;
}
input:focus{
	box-shadow: 0 0 0 0;
    outline: 0;
}
h5{
	font-family: 'Saira Stencil One';
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	line-height: 50px;
	color: #FFFFFF;
}
*{
	font-family: 'Lexend Deca', sans-serif;
	box-sizing: border-box;
}
p, h1, h2, h3, h4{
    font-family: 'Poppins', sans-serif;
	font-style: normal;
	color: #000000;
}
h1{
    font-weight: 200;
    font-size: 64px;
    line-height: 80px;
}
h2{
	font-weight: 700;
	font-size: 36px;
	line-height: 45px;
}
ul{ 
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 28px;
}
`;

export default GlobalStyle;
// import { createGlobalStyle } from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   :root {
//     --pink: #E31F71;
//     --black: #212121;
//     --green: #23ce6b;
//     --blue: #016fb9;
//     scroll-padding-top: 10rem;
//   }

//   /* General styles */
//   ul, li {
//     text-decoration: none;
//     list-style: none;
//     margin: 0;
//     padding:0;
//   }

//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   html {
//     font-size: 62.5%;
//   }

//   body {
//     font-size: 1.6rem;
//     -webkit-font-smoothing: antialiased;
//     background-color: var(--black);
//     color: #FFF;
//     font-family: 'Red Hat Display', sans-serif;
//     font-weight: 400;
//     transition: 0.5s;
//   }

//   a {
//     text-decoration: none;
//   }

//   button, .button {
//     border: none;
//     cursor: pointer;
//     background-color: var(--green);
//     color: #FFF;
//     border-radius: 2rem;
//     font-weight: 500;
//     transition: filter 0.25s;
    
//     &:hover {
//       filter: brightness(0.8);
//     }
    
//     &:disabled {
//       filter: brightness(0.8);
//       cursor: not-allowed;
//     }
//   }

//   .logo {
//     font-size: 3rem;
//     color: #FFF;
//   }

//   /* Light Theme Styles */
//   .light body {
//     background-color: #f5f5f5;
//     color: var(--black);
//   }

//   .light .logo {
//     color: var(--black);
//   }

//   .light header.header-fixed {
//     background-color: rgba(245, 245, 245, 0.5);
//   }

//   .light a {
//     color: black;
//   }

//   .light .menu, 
//   .light .menu:before, 
//   .light .menu:after {
//     background-color: var(--black);
//   }

//   .light .menu.active {
//     background-color: rgba(255, 255, 255, 0);
//   }

//   .light footer.footer {
//     background-color: rgba(0, 0, 0, 0.1);
//     color: var(--black);
//   }

//   .light form input,
//   .light form textarea {
//     border: solid 1px var(--black);
//     color: var(--black);

//     &::placeholder {
//       color: var(--black);
//     }
//   }

//   /* Back Theme Styles */
//   .back .background-video-container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//     z-index: -1;
//   }

//   .back #background-video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .back body {
//     background-color: #f5f5f5;
//     color: var(--black);
//   }

//   .back .logo {
//     color: var(--black);
//   }

//   .back header.header-fixed {
//     background-color: rgba(245, 245, 245, 0.5);
//   }

//   .back a {
//     color: black;
//   }

//   .back .menu, 
//   .back .menu:before, 
//   .back .menu:after {
//     background-color: var(--black);
//   }

//   .back .menu.active {
//     background-color: rgba(255, 255, 255, 0);
//   }

//   .back footer.footer {
//     background-color: rgba(0, 0, 0, 0.1);
//     color: var(--black);
//   }

//   .back form input,
//   .back form textarea {
//     border: solid 1px var(--black);
//     color: var(--black);

//     &::placeholder {
//       color: var(--black);
//     }
//   }
// `;



import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`
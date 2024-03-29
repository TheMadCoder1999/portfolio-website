/*
Colors used

Text Color (Dark Gray): #2b2b2b;
Primary Color (Purple): #357b70;
Secondary Color (Orange): #e0b354;
 */

:root {
    --bg-color: rgb(204, 199, 199);
    --btn-bg-color: blue;
    --btn-text-color: white;
    --btn-hover-color: darkblue;
    --btn-active-color: lightblue;
    --btn-focus-color: red;
    --grid-bg-color: skyblue;
    --link-visited: #4d056e;
    --link-color: #357b70;
    --selected-link: #6e9c;
    --link-focus: #001f83;
  }
  
    body {
      background-color: var(--bg-color); 
      color: black;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 16px;
      /* Sets the font size to 16px */
      line-height: 1.6;
      /* Sets the line-height to 1.6 */
    }
  
    h1 {
      font-size: 30px;
      font-weight: 700;
    }
    
    h2 {
      font-size: 24px;
      font-weight: 700;
    }
    
    h3 {
      font-size: 18px;
      font-weight: 700;
    }
  
    a {
      color: var(--link-color);
      font-size: 20px;
    }
    
    a:hover {
      /* No underlining when hovering over a link */
      text-decoration: none;
    }
  
    a:visited {
      /* visited link */
      color: var(--link-visited);
    }
    
    a:active {
      /* selected link */
      color: var(--selected-link);
    }
  
    a:focus {
      /* blue boarder around link */
      color: var(--link-focus);
    }
  
    button {
      background-color: var(--btn-bg-color);
      color: var(--btn-text-color);
      font-size: 16px;
      padding: 10px 10px;
    }
  
    button:hover {
      background-color: var(--btn-hover-color);
    }
  
     button:active {
      background-color: var(--btn-active-color);
  }
  
     button:focus {
      border: 2px solid var(--btn-focus-colors);
     }
  
     button:hover, button:focus {
      /* lets the mouse appear as a hand when hovering over the button */
      cursor: pointer;
      /* reduces the opacity of the button to 80% */
      opacity: 0.8;
    }
  
    .button__secondary {
      background-color: #e0b354;
      color: #2b2b2b;
    }
  
    .navigation-list_item--active {
      text-decoration: none;
    }
  
    .profile_portrait {
      float: left;
      width: 250px ;
      margin-right: 40px;
      border-radius: 50%;
    }
  
    .profile {
      max-width: 700px;
      margin: 0 auto;
    }
  
    .page-footer {
      clear: both;
    }
  
    * {
      box-sizing: border-box;
    }
  
  /* Flex Box */
  
  .page-footer {
    clear: both;
    text-align: center;
  }
  
  /* supose to be:
  .page-footer {
      clear: both;
      display: flex;
      flex-direction: column;
      text-align: center;
  }
   but it will not work properly*/
  
   .page-header {
    display: flex;
    width: 100%;
    padding: 20px;
  }
  
  .page-header__item {
    flex: 0 1 200px;
  }
  
  .page-header_item:last-child {
    flex-grow: 1;
    text-align: right;
  }
  
  .navigation-list {
    list-style-type: none;
  }
  
  .navigation-list li {
    display: inline-block;
    margin-left: 15px;
  }
  
  .about_child {
    text-align: center;
    list-style-type: none;
  }
  
  /* Grid */
  
  .grid {
    display: grid;
  }
  
  .grid_item {
    background-color: var(--grid-bg-color0);
    transition: transform 0.5s
  }
  
  .grid_item:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  
  .grid_item:last-child {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  /* short form
  .grid__item:last-child {
    grid-column: 3 / 3;
    grid-row: 1 / 4;
  } */
  
  /* Media Queries */
  
  /*
  @media all and (min-width: 500px) and (max-width: 750px){
    .grid {
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
    .grid_item:last-child {
      grid-column: auto / auto;
      grid-row: auto / auto;
    }
    h1 {
      font-size: 22px;
    }
  }
  @media all and (max-width: 500px) {
    .grid {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
    .grid_item:last-child {
      grid-column: auto / auto;
      grid-row: auto / auto;
    }
    h1 {
      font-size: 22px;
    }
  } */
  
  
  
  
  @media all and (max-width: 750px) {
    .grid {
      grid-gap: 10px;
    }
    .grid_item:last-child {
      grid-column: auto / auto;
      grid-row: auto / auto;
    }
    h1 {
      font-size: 22px;
    }
  }
  @media all and (min-width: 500px) and (max-width: 750px){
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media all and (max-width: 500px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  
  /* button transitions */
  
  .button, button {
    /* overwrites browser defaults and resets the border */
    border: none;
    display: inline-block;
    /* takes the font from the outer container */
    font-family: inherit;
    /* styles the button */
    background-color: #357b70;
    color: white;
    text-decoration: none;
    padding: 10px;
    border-radius: 3px;
    /* width of the border, type, color */
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    transition-duration: 0.2s;
    transition-property: opacity;
  }
  
  button:hover,
  button:focus,
  .button:hover,
  .button:focus {
    /* lets the mouse appear as a hand when hovering over the button */
    cursor: pointer;
    /* reduces the opacity of the button to 80% */
    opacity: 0.8;
  }
  
  /* animation keyframes */
  
  @keyframes color-change {
    0% {
      fill: #edc655;
    }
    50% {
      fill: #fcffad;
    }
    100% {
      fill: #f76414;
    }
  }
  
  @keyframes cloud-move {
    from {
      transform: translate(0, 50px)
    }
    to {
      transform: translate(200px, 50px)
    }
  }
  
  @keyframes cloud-move-reverse {
    from {
      transform: translate(446px, 48px)
    }
    to {
      transform: translate(100px, 48px)
    }
  }
  
  /* .sun {
    animation-duration: 4s;
    animation-name: color-change;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
  } */
  
    .sun {
    animation: 4s color-change infinite alternate linear;
  }
  
    .cloud-front {
    animation: 30s cloud-move infinite alternate linear;
  }
  
    .cloud-back {
    animation: 34s cloud-move-reverse infinite alternate linear;
  }
  
  
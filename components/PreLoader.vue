<template>
  <div class="loader-wrapper fixed w-screen h-screen bg-black z-50" id="loader-4">
    <div id="loader">L</div>
    <div id="loader">O</div>
    <div id="loader">A</div>
    <div id="loader">D</div>
    <div id="loader">I</div>
    <div id="loader">N</div>
    <div id="loader">G</div>
  </div>
</template>

<style scoped>
/*Loading fade animation */
/*Include as many nth-of-type childs of loader-4 as letters are there*/
/*delay their animation time as suitable*/



#loader-4 #loader {
  position: relative;
  color: transparent;
  font-size: 4em;
  font-family: 'Righteous', cursive !important;
  text-decoration: none;
  float: left;
  top: 40%;
  left: 40%;
  z-index: 2;
  -webkit-animation: fade 2s linear infinite;
  -moz-animation: fade 2s linear infinite;
  -o-animation: fade 2s linear infinite;
  animation: fade 2s linear infinite;
}

#loader-4>#loader:nth-of-type(1) {
  -webkit-animation-delay: 0.75s;
  -moz-animation-delay: 0.75s;
  -o-animation-delay: 0.75s;
  animation-delay: 0.75s;
}

#loader-4>#loader:nth-of-type(2) {
  -webkit-animation-delay: 0.92s;
  -moz-animation-delay: 0.92s;
  -o-animation-delay: 0.92s;
  animation-delay: 0.92s;
}

#loader-4>#loader:nth-of-type(3) {
  -webkit-animation-delay: 1.08s;
  -moz-animation-delay: 1.08s;
  -o-animation-delay: 1.08s;
  animation-delay: 1.08s;
}

#loader-4>#loader:nth-of-type(4) {
  -webkit-animation-delay: 1.2s;
  -moz-animation-delay: 1.2s;
  -o-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

#loader-4>#loader:nth-of-type(5) {
  -webkit-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
  -o-animation-delay: 1.5s;
  animation-delay: 1.5s;
}

#loader-4>#loader:nth-of-type(6) {
  -webkit-animation-delay: 1.7s;
  -moz-animation-delay: 1.7s;
  -o-animation-delay: 1.7s;
  animation-delay: 1.7s;
}

#loader-4>#loader:nth-of-type(7) {
  -webkit-animation-delay: 1.85s;
  -moz-animation-delay: 1.85s;
  -o-animation-delay: 1.85s;
  animation-delay: 1.85s;
}


/*keyframes for fade animation*/


@-webkit-keyframes fade {
  0% {
    text-shadow: rgb(255, 46, 0) 0 0 0;
  }

  90%,
  100% {
    text-shadow: rgb(0, 0, 0) 0 0 19px;
  }
}

@-moz-keyframes fade {
  0% {
    text-shadow: rgb(255, 46, 0) 0 0 0;
  }

  90%,
  100% {
    text-shadow: rgb(0, 0, 0) 0 0 19px;
  }
}

@-o-keyframes fade {
  0% {
    text-shadow: rgb(255, 255, 255) 0 0 0;
  }

  90%,
  100% {
    text-shadow: rgb(0, 0, 0) 0 0 19px;
  }
}

@keyframes fade {
  0% {
    text-shadow: rgb(255, 46, 0) 0 0 0;
  }

  90%,
  100% {
    text-shadow: rgb(0, 0, 0) 0 0 19px;
  }
}
</style>

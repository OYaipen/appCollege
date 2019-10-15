<template>
    <div>
<div class="d-flex align-items-center justify-content-center" style="height: calc(100vh - 48px);">
    <form class="form-signin text-center" @submit.prevent="submit"><img src="assets/taistana.jpg" alt="" width="130" height="130" />
        <h3 class="pt-2">TaiSale</h3>
        <hr/>
        <h1 class="h3 mb-3 font-weight-normal">Por favor identifiquese</h1>
        <label class="sr-only" for="inputEmail">Email address</label>
        <input class="form-control" id="inputEmail" type="email" placeholder="Email" 
         required="required" autofocus="autofocus" />
        <label class="sr-only"
            for="inputPassword">Password</label>
            <input class="form-control" id="inputPassword" type="password" placeholder="Contraseña" 
             required="required" />
            <button class="btn btn-lg btn-danger btn-block mb-3" type="submit">Ingresar</button>
        <div
            class="form-group"><a href="#">Registrarse</a></div>
<div class="form-group"><a href="#">¿Olvido la contraseña?</a></div>
<!--a.mt-5.mb-3(href='https://www.taistana.com' target='_blank') www.taistana.com-->
</form>
</div>
</div>
    
</template>
<style scoped>
  .form-signin {
    min-width: 330px;
    max-width: 330px;
    padding: 15px;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
</style>

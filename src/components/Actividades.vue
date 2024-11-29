
<template>
  <h1 class="text-center mt-5">Únete a nosotras en nuestros próximos eventos</h1>
  
  
  <div id="carouselExampleDark" class="carousel carousel-dark slide text-center">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <RouterLink to = "/actividades">
          <img src="/public/img/actbuceo.jpg" class="rounded-pill" alt="...">
        </RouterLink>
          
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <RouterLink to = "/actividades">
          <img src="/public/img/actsoltartortuga.jpg" class="rounded-pill" alt="...">
        </RouterLink>
        
      </div>
      <div class="carousel-item">
        <RouterLink to = "/actividades">
          <img src="/public/img/actrecolectar.jpg" class="rounded-pill"alt="...">
        </RouterLink>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  </template>
// =============================
// MENU MOBILE - VERSÃO SIMPLES
// =============================

document.addEventListener('DOMContentLoaded', function() {
  // 1. ELEMENTOS PRINCIPAIS
  const menuBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-links');
  const oficinasBtn = document.querySelector('.dropdown > a');
  
  // 2. MENU HAMBURGUER (Abrir/Fechar menu principal)
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function() {
      // Alterna entre aberto/fechado
      navMenu.classList.toggle('ativo');
      
      // Muda o ícone do botão
      if (navMenu.classList.contains('ativo')) {
        menuBtn.textContent = '✕'; // X quando aberto
      } else {
        menuBtn.textContent = '☰'; // Hamburger quando fechado
      }
    });
  }
  
  // 3. DROPDOWN DAS OFICINAS (Apenas no mobile)
  if (oficinasBtn) {
    oficinasBtn.addEventListener('click', function(e) {
      // Verifica se está no modo mobile
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Impede o comportamento normal do link
        
        // Encontra o submenu (a lista de oficinas)
        const submenu = this.nextElementSibling;
        
        // Verifica se encontrou o submenu
        if (submenu && submenu.classList.contains('submenu')) {
          // Abre ou fecha o submenu
          submenu.classList.toggle('ativo');
        }
      }
    });
  }
  
  // 4. FECHAR MENU AO CLICAR EM UM LINK
  const todosLinks = document.querySelectorAll('.nav-links a');
  
  todosLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Apenas no mobile
      if (window.innerWidth <= 768) {
        // Fecha o menu principal
        if (navMenu) {
          navMenu.classList.remove('ativo');
        }
        
        // Volta o ícone do botão para hamburger
        if (menuBtn) {
          menuBtn.textContent = '☰';
        }
        
        // Fecha todos os submenus abertos
        const submenusAbertos = document.querySelectorAll('.submenu.ativo');
        submenusAbertos.forEach(function(submenu) {
          submenu.classList.remove('ativo');
        });
      }
    });
  });
});
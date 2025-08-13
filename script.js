
// Smooth scroll for nav
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href'); if(id.length>1){ e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth'})}
  })
});

// Simple "HiperAgente" demo chat (front-end only)
const chatToggle = document.querySelectorAll('[data-open-chat]');
chatToggle.forEach(b=>b.addEventListener('click',()=>{
  document.getElementById('chat').showModal();
}));
function sendMsg(){
  const input = document.getElementById('chat-input');
  const log = document.getElementById('chat-log');
  if(!input.value.trim()) return;
  const user = document.createElement('div');
  user.textContent = "Você: " + input.value;
  log.appendChild(user);
  // Simulated agent reply
  const reply = document.createElement('div');
  reply.textContent = "HiperAgente: Obrigado! Nosso time irá te retornar e posso agendar uma instalação. Prefere amanhã às 10h?";
  setTimeout(()=>log.appendChild(reply), 500);
  input.value='';
  log.scrollTop = log.scrollHeight;
}

// Replace WhatsApp number placeholder
(function(){
  const link = document.getElementById('wa-link');
  const number = document.body.dataset.whatsapp || '5599999999999'; // editar no HTML data-whatsapp
  link.href = 'https://wa.me/' + number + '?text=Quero%20o%20HiperAgente%20da%20Qelvorn%20IA';
})();

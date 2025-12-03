// Meta Pixel Configuration
// Para instalar o Meta Pixel (Facebook/Instagram Ads):
// 
// 1. Acesse o Facebook Business Manager: https://business.facebook.com
// 2. Vá em "Eventos de Dados" > "Pixels"
// 3. Copie o código do Pixel
// 4. Substitua o 'YOUR_PIXEL_ID' abaixo pelo ID do seu pixel
// 5. Descomente o código e adicione no <head> do index.html

/*
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
*/

// Eventos de conversão recomendados:
// - fbq('track', 'Contact'); // Quando alguém clica em "Fale Conosco"
// - fbq('track', 'Lead'); // Quando alguém preenche formulário
// - fbq('track', 'ViewContent'); // Quando alguém visualiza página de serviço

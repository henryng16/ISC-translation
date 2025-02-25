const root = document.querySelector("#root");
const displayTest = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
const htmlInput = document.querySelector("#html-input");
const updateHtmlButton = document.querySelector("#update-html-button");
const replaceDoubleQuotesButton = document.querySelector(
  "#replace-double-quotes-button"
);
const textArea = document.querySelector(".text-area");

const mapping = [
  `Below is a list of our internationally located distributors and service centers for our traditional watches and service centers that are equipped to service smartwatches.`,
  `For traveling customers, please contact your original seller.`,
  `This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.`,
  `This partner cannot repair jewelry or leather goods, please contact your original seller.`,
  `This partner cannot repair smartwatches and jewelry products, please contact your original seller.`,
  `Please click below to visit our Repair Portal`,
  `Contact Us`,
  `Repair Instructions`,
  `This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.`,
];
const languageMappings = {
  en_US: [
    `Below is a list of our internationally located distributors and service centers for our traditional watches and service centers that are equipped to service smartwatches.`,
    `For traveling customers, please contact your original seller.`,
    `This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.`,
    `This partner cannot repair jewelry or leather goods, please contact your original seller.`,
    `This partner cannot repair smartwatches and jewelry products, please contact your original seller.`,
    `Please click below to visit our Repair Portal`,
    `Contact Us`,
    `Repair Instructions`,
    `This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.`,
  ],
  nl_NL: [
    `Hieronder vindt u een lijst van onze internationaal gevestigde distributeurs en servicecentra voor onze traditionele horloges en servicecentra die zijn uitgerust om smartwatches te onderhouden.`,
    `Voor reizende klanten, gelieve contact op te nemen met uw oorspronkelijke verkoper.`,
    `Deze partner kan geen smartwatches, sieraden of lederwaren repareren, neem hiervoor contact op met uw oorspronkelijke verkoper.`,
    `Deze partner kan geen sieraden of lederwaren repareren, neem hiervoor contact op met uw oorspronkelijke verkoper.`,
    `Deze partner kan geen smartwatches en sieraden repareren, neem hiervoor contact op met je oorspronkelijke verkoper.`,
    `Klik hieronder om naar onze reparatieportal te gaan`,
    `Neem contact met ons op`,
    `Instructies voor Reparatie`,
    `Deze partner kan alleen artikelen repareren die via hen zijn gekocht en repareert geen smartwatches, sieraden of lederwaren. Voor items die je op reis of bij een internationale verkoper hebt gekocht, kun je contact opnemen met de verkoper die op je kassabon staat vermeld.`,
  ],
  fr: [
    `Vous trouverez ci-dessous une liste de nos distributeurs et centres de service situés dans le monde entier pour nos montres traditionnelles et nos centres de service équipés pour entretenir les smartwatches.`,
    `Pour les clients qui voyagent, veuillez contacter votre vendeur d'origine.`,
    `Ce partenaire ne peut pas réparer les smartwatches, les bijoux ou les articles en cuir, veuillez contacter votre vendeur d'origine.`,
    `Ce partenaire ne peut pas réparer les bijoux ou les articles en cuir, veuillez contacter votre vendeur d'origine.`,
    `Ce partenaire ne peut pas réparer les smartwatches et les bijoux, veuillez contacter votre revendeur d'origine.`,
    `Veuillez visitez notre portail de réparation en ligne`,
    `Contactez-nous`,
    `Instructions de réparation`,
    `Ce partenaire ne peut réparer que les articles achetés par son intermédiaire et ne répare pas les smartwatches, les bijoux ou les articles de maroquinerie. Pour les articles achetés en voyage ou auprès d'un vendeur international, veuillez contacter le vendeur mentionné sur votre reçu pour obtenir de l'aide.`,
  ],
  de: [
    `Nachfolgend finden Sie eine Liste unserer internationalen Vertriebspartner und Servicezentren für unsere traditionellen Uhren sowie Servicezentren, die für die Wartung von Smartwatches ausgerüstet sind.`,
    `Kunden, die auf Reisen sind, wenden sich bitte an ihren ursprünglichen Verkäufer.`,
    `Dieses Servicezentrum kann keine Smartwatches, Schmuck oder Lederwaren reparieren, bitte kontaktiere den jeweiligen Verkäufer.`,
    `Dieses Servicezentrum kann keinen Schmuck oder Lederwaren reparieren, bitte kontaktiere den jeweiligen Verkäufer.`,
    `Dieses Servicezentrum kann keine Smartwatches und Schmuck reparieren, bitte kontaktiere den jeweiligen Verkäufer.`,
    `Bitte besuche unser Reparaturportal`,
    `Kontakt`,
    `Reparaturanleitung`,
    `Dieser Partner kann nur Artikel reparieren, die bei ihm gekauft wurden. Smartwatches, Schmuck und Lederwaren werden nicht repariert. Bei Artikeln, die Sie auf Reisen oder bei einem internationalen Verkäufer gekauft haben, wenden Sie sich bitte an den auf Ihrer Quittung aufgeführten Verkäufer.`,
  ],
  it: [
    `Di seguito è riportato un elenco dei nostri distributori e centri di assistenza situati a livello internazionale per i nostri orologi tradizionali e per i centri di assistenza attrezzati per la manutenzione degli smartwatch.`,
    `Per i clienti in viaggio, si prega di contattare il venditore originale.`,
    `Questo partner non è in grado di riparare smartwatch, gioielli o articoli in pelle; si prega di contattare il venditore originale.`,
    `Questo partner non è in grado di riparare gioielli o articoli in pelle; si prega di contattare il venditore originale.`,
    `Questo partner non è in grado di riparare smartwatch e gioielli; si prega di contattare il venditore originale.`,
    `Fare clic qui sotto per visitare il nostro portale delle riparazioni`,
    `Contattaci`,
    `Istruzioni per la riparazione`,
    `Questo partner può riparare solo gli articoli acquistati tramite loro e non ripara smartwatch, gioielli o articoli in pelle. Per gli articoli acquistati in viaggio o da un venditore internazionale, contattare il venditore indicato sulla ricevuta per ricevere assistenza.`,
  ],
  es: [
    `A continuación encontrará una lista de nuestros distribuidores y centros de servicio internacional para nuestros relojes tradicionales y centros de servicio equipados para el mantenimiento de smartwatches.`,
    `Para los clientes que viajan, póngase en contacto con su vendedor original.`,
    `Este socio no puede reparar smartwatches, joyas ni artículos de cuero. Póngase en contacto con su vendedor original.`,
    `Este socio no puede reparar joyas ni artículos de cuero. Póngase en contacto con su vendedor original.`,
    `Este socio no puede reparar smartwatches ni productos de joyería. Póngase en contacto con su vendedor original.`,
    `Haga clic a continuación para visitar nuestro Portal de reparaciones`,
    `Contactarnos`,
    `Instrucciones de reparación`,
    `Este socio solo puede reparar artículos comprados a través de él y no repara relojes inteligentes, joyas ni artículos de cuero. Para los artículos comprados durante un viaje o a un vendedor internacional, ponte en contacto con el vendedor que figura en tu recibo para obtener asistencia.`,
  ],
  zh_CN: [
    `以下列表是我们传统手表和智能手表的分销商和服务中心。对于旅行客户，请联系您的原始卖家。`,
    ``,
    `本伙伴不能维修智能手表、珠宝或皮革制品，请联系您的原卖家。`,
    `本伙伴不能维修珠宝或皮革制品，请联系您的原卖家。`,
    `本伙伴不能维修智能手表以及珠宝，请联系您的原卖家。`,
    `请点击下面访问我们的维修门户`,
    `联系我们`,
    `维修说明`,
    `该合作伙伴只能维修通过其购买的商品，不能维修智能手表、珠宝或皮具。对于在旅行中购买的商品或从国际卖家处购买的商品，请联系收据上所列的卖家寻求帮助。`,
  ],
  zh_TW: [
    `以下列表是我們傳統手錶和智能手錶的分銷商和服務中心。對於旅行客戶，請聯繫您的原始賣家。`,
    ``,
    `本夥伴不能維修智能手錶、珠寶或皮革製品，請聯繫您的原賣家。`,
    `本夥伴不能維修珠寶或皮革製品，請聯繫您的原賣家。`,
    `本夥伴不能維修智能手錶以及珠寶，請聯繫您的原賣家。`,
    `請點擊下面訪問我們的維修門戶`,
    `聯繫我們`,
    `維修說明`,
    `本合作夥伴僅能維修透過其購買的商品，無法維修智慧型手錶、珠寶或皮件。對於在旅行途中或從國際賣家購買的商品，請聯絡收據上所列的賣家尋求協助。`,
  ],
  ja: [
    `以下は、従来の時計の国際的な販売代理店とサービスセンター、およびスマートウォッチのサービスを提供するサービスセンターのリストです。`,
    `旅行中のお客様へ、元の販売者にご連絡ください。`,
    `このパートナーでは、スマートウォッチ、ジュエリー、レザーグッズの修理はできませんので、ご購入店舗までお問い合わせください。`,
    `このパートナーでは、ジュエリー、レザーグッズの修理はできませんので、ご購入店舗までお問い合わせください。`,
    `このパートナーは、スマートウォッチやジュエリー製品の修理はできませんので、元の販売元にお問い合わせください。`,
    `下記をクリックし、修理ポータルをご覧ください。`,
    `お問い合わせ`,
    `修理の案内`,
    `スマートウォッチ、ジュエリー、革製品の修理は行っておりません。旅行中または海外の販売者から購入された商品については、レシートに記載されている販売者にお問い合わせください。`,
  ],
  pl: [
    `Poniżej znajduje się wykaz międzynarodowych dystrybutorów i centrów serwisowych dla naszych tradycyjnych zegarków oraz centrów serwisowych, które są przygotowane do serwisowania smartwatchów.`,
    `Klientów w podróży prosimy o kontakt z oryginalnym sprzedawcą.`,
    `Ten partner nie naprawia smartwatchy, biżuterii ani wyrobów skórzanych, prosimy o kontakt z oryginalnym sprzedawcą.`,
    `Ten partner nie naprawia biżuterii ani wyrobów skórzanych, prosimy o kontakt z oryginalnym sprzedawcą.`,
    `Ten partner nie naprawia smartwatchy ani biżuterii, prosimy o kontakt z oryginalnym sprzedawcą.`,
    `Kliknij poniżej, aby odwiedzić nasz Portal naprawczy`,
    `Kontakt`,
    `Zalecenia dotyczące naprawy`,
    `Ten partner może serwisować tylko przedmioty zakupione za jego pośrednictwem i nie naprawia smartwatchy, biżuterii ani wyrobów skórzanych. W przypadku przedmiotów zakupionych podczas podróży lub od sprzedawcy zagranicznego należy skontaktować się ze sprzedawcą wymienionym na paragonie w celu uzyskania pomocy.`,
  ],
  pt_PT: [
    `Segue-se uma lista dos nossos distribuidores e centros de assistência localizados internacionalmente para os nossos relógios tradicionais e centros de assistência equipados para a assistência a smartwatches.`,
    `Para clientes em viagem, contacte o seu vendedor original.`,
    `Este parceiro não pode reparar smartwatches, jóias ou artigos em pele. Contacte o seu vendedor original.`,
    `Este parceiro não pode reparar jóias ou artigos de couro, contacte o seu vendedor original.`,
    `Este parceiro não pode reparar smartwatches e produtos de joalharia, contacte o seu vendedor original.`,
    `Clique em baixo para visitar o nosso Portal de Reparações`,
    `Contactar-nos`,
    `Instruções de reparação`,
    `Este parceiro só pode reparar artigos comprados através dele e não repara smartwatches, jóias ou artigos de couro. Para artigos comprados durante uma viagem ou a um vendedor internacional, contacte o vendedor indicado no recibo para obter assistência.`,
  ],
  ko: [
    `아래는 스마트워치를 서비스할 수 있는 전통적인 시계 및 서비스 센터를 위한 국제적으로 위치한 유통업체 및 서비스 센터 목록입니다.`,
    `여행하는 고객의 경우 원래 판매자에게 문의하십시오.`,
    `이 파트너는 스마트워치, 보석, 가죽 제품에 대한 수리 서비스를 제공하지 않습니다. 구매한 판매처에 문의하십시오.`,
    `이 파트너는 보석이나 가죽 제품에 대한 수리 서비스를 제공하지 않습니다. 구매한 판매처에 문의하십시오.`,
    `이 파트너는 스마트워치와 보석 제품에 대한 수리 서비스를 제공하지 않습니다. 구매한 판매처에 문의하십시오.`,
    `수리 포털로 이동하러 다음을 클릭하십시오`,
    `문의하기`,
    `수리 지시`,
    `이 파트너는 해당 파트너를 통해 구매한 품목에 대해서만 서비스를 제공할 수 있으며 스마트워치, 보석류 또는 가죽 제품은 수리할 수 없습니다. 여행 중 또는 해외 판매자로부터 구매한 품목의 경우 영수증에 기재된 판매자에게 문의하여 도움을 받으시기 바랍니다.`,
  ],
};

let originalHtmlText = `<p>Below is a list of our internationally located distributors and service centers for our traditional watches and service centers that are equipped to service smartwatches.<br><br>For traveling customers, please contact your original seller.</p>
<p>&nbsp;</p>
<div class="wrapper" style="display: flex; flex-wrap: wrap; gap: 3rem; justify-content: space-between;">
  <div class="items" style="width: 43%;"><strong>AFGHANISTAN</strong><br>Luxe Koncept Les Montres Trading<br>2nd Floor, 786 Pharmacy Building<br>Karte Parwan, Wahaj Hospital Street<br>Kabul- Afghanistan<br>T: +93 78 7049257<br>E: <a href="mailto:cs@luxekoncept.com" target="_blank" rel="noopener">cs@luxekoncept.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>ARMENIA</strong><br>Timeless LLC<br>5/171 Northern Avenue<br>0001 Yerevan<br>Armenia<br>T: + 374 11 500 401<br>E: <a href="mailto:info@time.am" target="_blank" rel="noopener">info@time.am</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>ALBANIA</strong><br>Rivaldi Watches<br>European Trade Center 53<br>Tirana<br>Albania<br>T: +355 6820 46110<br>E: <a href="mailto:shehu_dritan@yahoo.com" target="_blank" rel="noopener">shehu_dritan@yahoo.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>AUSTRALIA</strong><br>Metro Service Centre<br>Lkd bag 6277<br>Frenchs Forest 2086<br>Australia<br>T: (+61) 02 8977 8086<br>T: (+61) 1 800 818 853 (toll free)<br>E: <a href="mailto:customercare.au@fossil.com" target="_blank" rel="noopener">customercare.au@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>ALGERIA</strong><br>NexTimes Distributon LLC<br>Promotion immobili&egrave;re 21&egrave;me si&egrave;cle Bt 5 P16<br>Ain Allah<br>Algiers<br>T: +213 560 927 331<br>E: <a href="mailto:service.client@nextimes.dz" target="_blank" rel="noopener">service.client@nextimes.dz</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>AUSTRIA</strong><br>DHL Express (Austria) GmbH<br>Fossil Repairs Service<br>Gewerbestrasse 9<br>A- 5102 Anthering<br><a href="https://support.fossilgroup.com/s/contactsupport?language=de" target="_blank" rel="noopener">Contact Us</a><br><a href="https://support.fossilgroup.com/s/article/How-do-I-repair-my-watch-1616590583786?language=de_CH" target="_blank" rel="noopener">Repair Instructions</a></div>
  <div class="items" style="width: 43%;"><strong>ANDORRA</strong><br>L&acute;ESCAIRE<br>Avda. del Pesebre, 1 LOC.2<br>AD700 Escaldes-Engordany<br>Andorra<br>T: +376869400<br>E: <a href="mailto:escaire@andornet.ad" target="_blank" rel="noopener">escaire@andornet.ad</a><br>E: <a href="mailto:customerservice.es@fossil.com" target="_blank" rel="noopener">customerservice.es@fossil.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>AZERBAIJAN</strong><br>Baygroup<br>Nizami 77<br>1100 Baku<br>Azerbaijan<br>T: 491 77893 3278<br>E: <a href="mailto:fikrat@baygroup.az" target="_blank" rel="noopener">fikrat@baygroup.az</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>ARGENTINA</strong><br>Joyeria Di Maio<br><span>Macacha Guemes 378, Local 3 Puerto Madero</span><br>Buenos Aires<br>Argentina<br>T: 11 5218-3729<br>E: <a href="mailto:info@demaiojoyeria.com.ar" target="_blank" rel="noopener">info@demaiojoyeria.com.ar</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>BAHRAIN</strong><br>Yousif a Wahab al Hawaj &amp; sons<br>P. O. Box 891<br>305 Manama<br>Bahrain<br>T: (973) 17 230-088<br>E: <a href="mailto:aswathy.prasad@alhawaj.com" target="_blank" rel="noopener">aswathy.prasad@alhawaj.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>BANGLADESH</strong><br>Watches World Ltd.<br>Union Center<br>68/1 Gulshan Ave.<br>Gulshan, Dhaka - 1212<br>T: +88 02 988-5771<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>BELGIUM / LUXEMBOURG</strong><br>DHL&nbsp;<br>Attn. Warranty &amp; Repairs<br>Woluwelaan 151&nbsp;<br>1831 Diegem<br><a href="https://support.fossilgroup.com/s/contactsupport?language=fr_BE" target="_blank" rel="noopener">Contact Us</a><br><a href="https://support.fossilgroup.com/s/article/How-do-I-repair-my-watch-1616590583786?language=fr_BE" target="_blank" rel="noopener">Repair Instructions</a></div>
  <div class="items" style="width: 43%;"><strong>BANGLADESH</strong><br>Watches World Ltd.<br>Level-04, Block - A<br>Bashundora city shopping mall<br>Panthopath, Dhaka<br>T: +88 02 988-5771<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>BOLIVIA</strong><br>S&amp;K CASA TOKYO<br>Calle Ayacucho 229<br>Santa Cruz<br>Bolivia<br>T: +591 3 3332960<br>E: <a href="mailto:gerencia@casatokyo.com.bo" target="_blank" rel="noopener">gerencia@casatokyo.com.bo</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>BANGLADESH</strong><br>Watches World Ltd.<br>Jamuna Future Park, GD-29 &amp; 30<br>Ka-244, Kuril<br>Progoti Sarani, Dhaka - 1229<br>T: +88 01713199266 &nbsp;<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>BOSNIA / HERZEGOVINA</strong><br>Watch Line D.O.O.<br>Muhameda ef. Pandze 4D<br>71000 Sarajevo<br>Bosnia / Herzegovina<br>T: +387 33 273 950&nbsp;<br>E: <a href="mailto:watchlin@bih.net.ba" target="_blank" rel="noopener">watchlin@bih.net.ba</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>BELARUS</strong><br>Timegroup International LLC<br>Pobediteley Avenue 84, office 108<br>220030 Minsk<br>Belarus<br>T: +374 11 500 422<br>E: <a href="mailto:sona.shirinyan@time.am" target="_blank" rel="noopener">sona.shirinyan@time.am</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>BRAZIL</strong><br>Grupo Technos<br>Rua 24 de Maio, 77, 3 andar<br>Republica<br>S&atilde;o Paulo 01041907<br>T: +11 - 239-48300<br>E: <a href="mailto:sac@grupotechnos.com.br" target="_blank" rel="noopener">sac@grupotechnos.com.br</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>BELARUS</strong><br>ZIKO LLC<br>PROMZONA SHABANY NOVODVORSKY S/S, 71/1<br>223016 Minsk<br>Belarus<br>T: +375 17 364-11-63<br>E: <a href="mailto:zikoservice@ziko.by" target="_blank" rel="noopener">zikoservice@ziko.by</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>BULGARIA</strong><br>Navitaimer Ltd.<br>Knyaz Boris I Str. 109<br>1301 Sofia<br>Bulgaria<br>T: +359 88 825 1390<br>E: <a href="mailto:n.milanov@navitaimer.com" target="_blank" rel="noopener">n.milanov@navitaimer.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>BULGARIA</strong><br>Vreme<br>Dimitar Konstantinov Str. 23A<br>5800 Pleven<br>E: <a href="mailto:martsev@abv.bg" target="_blank" rel="noopener">martsev@abv.bg</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>CHINA</strong><br>Fossil Trading ( Shanghai) Co. Ltd<br>4th Floor, Building A1<br>No. 928 Mingzhu Road<br>Qingpu District, Shanghai, China<br>T: (86)400-820-3126<br>E: <a href="mailto:shanghaicustomerservicegroup2@fossil.com" target="_blank" rel="noopener">shanghaicustomerservicegroup2@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>BULGARIA</strong><br>Agency Mitev-Radulov Ltd.<br>Alexander Kussev Str.9<br>5500 Lovech<br>T: +359 68 66 33 31<br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>CHINA</strong><br>Watch Service Centre<br>17/F, CDW Building<br>388 Castle Peak Road<br>Tsuen Wan, New Territories<br>Hong Kong SAR, China<br>T: (852) 2437 8566<br>E: <a href="mailto:FossilAsia-AfterSales@fossil.com" target="_blank" rel="noopener">FossilAsia-AfterSales@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>CAMBODIA</strong><br>Watch Empire Co. LTD<br>The Fortune Tower (C7),<br>Olympia City, St.217,<br>Sangkat Velvong, Khan 7makara,<br>Phnom Penh<br>T: (855) 7775 1000<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>CHINA</strong><br>Taiwan, China<br>Dragonfly Asia-Pacific Limited<br>Taiwan Branch<br>4F, No. 2, Fuxing North Road<br>Zhongshan District<br>Taipei, Taiwan, China<br>T: (886) 2 8773 9911<br>E: <a href="mailto:service@dragonflyapac.com.tw" target="_blank" rel="noopener">service@dragonflyapac.com.tw</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>CANADA</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-ca.fossilgroup.com/" target="_blank" rel="noopener">https://services-ca.fossilgroup.com</a></div>
  <div class="items" style="width: 43%;"><strong>COLOMBIA</strong><br>TSQ S.A - Servicio Tecnico<br>Centro Comercial Hacienda<br>Contact Person: Adriana Sanchez - (TSQ)<br>Calle 114# 6A - 92 local C-235, Santa Barbara<br>T: 2132688, 6121837<br>E: ​<a href="mailto:serviciotecnicohsb@tsqsa.com" target="_blank" rel="noopener">serviciotecnicohsb@tsqsa.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>CHILE</strong><br>PRIME BRANDS SAC<br>Nueva Providencia office 805 C, Providencia, Santiago, Chile<br>SANTIAGO, CHILE<br>T: 56 9 4404 2954<br>E: <a href="mailto:roberto.salazar@primebrands.cl" target="_blank" rel="noopener">roberto.salazar@primebrands.cl</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>COSTA RICA</strong><br>Guialsa S.A.<br>Attn: Juan Carlos<br>75 Oeste de la funeraria del&nbsp;magisterio,<br>Paseo Colon<br>San Jose, Costa Rica<br>T: 222-0804<br>T: 2256-5716<br>T: 2257-2349<br>E: <a href="mailto:guialsa@polarcr.com" target="_blank" rel="noopener">guialsa@polarcr.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>CROATIA</strong><br>Krona 2011 D.O.O.<br>Zagrebacka avenija 104c<br>10000 Zagreb<br>Croatia<br>T: +385 1 386 42 85<br>E: <a href="mailto:maja.barbaric@krona.hr" target="_blank" rel="noopener">maja.barbaric@krona.hr</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>ECUADOR</strong><br>Distribuidora Yabimodas<br>Remigio tamariz 380 y austin cueva<br>Cuenca - Ecuador<br>Codigo Postal 010101<br>T: (593) 999455606<br>E: <a href="mailto:gerenciageneral@dym.ec" target="_blank" rel="noopener">gerenciageneral@dym.ec</a><br><strong>This partner cannot repair smartwatches and jewelry products, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>CYPRUS</strong><br>Rist Hellas<br>27,Georgikis Scholis Avenue<br>57001 Thessaloniki<br>Greece<br>T: +30 2310 511 413<br>E: <a href="mailto:service@rist.gr" target="_blank" rel="noopener">service@rist.gr</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>EGYPT</strong><br>Link Watches<br>17 El Shaheed Mahmoud El Ashry St.<br>Triumph Sq - Helipolis, Cairo<br>Egypt<br>T: (20) 2 2690 0001 / 2<br>E: <a href="mailto:linkwatches@linkwatches.com" target="_blank" rel="noopener">linkwatches@linkwatches.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>CZECH REPUBLIC</strong><br>CLA Distribution, s.r.o.<br>Československ&eacute; arm&aacute;dy 3<br>26101 Př&iacute;bram IV<br>Czech Republic<br>T: &nbsp;+420 602 723 820<br>E: <a href="mailto:info@cladistribution.com" target="_blank" rel="noopener">info@cladistribution.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>ESTONIA</strong><br>O&uuml; Megafort<br>P&auml;rnu mnt 141<br>11314 Tallinn<br>Estonia<br>T: +372 7 337030<br>E: <a href="mailto:megafort@megafort.ee" target="_blank" rel="noopener">megafort@megafort.ee</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>DENMARK</strong><br>Henning Staehr A/S<br>Grusbakken 14, 2820 Gentofte<br>T: +45 45 26 91 70<br>E: <a href="mailto:service@staehrgroup.com" target="_self">service@staehrgroup.com</a><a href="https://support.fossilgroup.com/s/contactsupport?language=en_GB" target="_blank" rel="noopener"></a></div>
  <div class="items" style="width: 43%;"><strong>FINLAND</strong><br>Aurora House of Luxury Oy<br>Koivulehdontie 5 A 5<br>01510 Vantaa<br>E-mail: <a href="mailto:aftersales@aurorahouseofluxury.fi" target="_self">aftersales@aurorahouseofluxury.fi</a></div>
  <div class="items" style="width: 43%;"><strong>FRANCE</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-fr.fossilgroup.com/" target="_blank" rel="noopener">https://services-fr.fossilgroup.com/</a></div>
  <div class="items" style="width: 43%;"><strong>GERMANY</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-de.fossilgroup.com/" target="_blank" rel="noopener">https://services-de.fossilgroup.com</a></div>
  <div class="items" style="width: 43%;"><strong>GEORGIA</strong><br>Timeless Ltd.<br>46 Rustaveli Str.<br>0108 Tbilisi<br>Georgia<br>T: (+995) 32 200 02 80<br>E: <a href="mailto:info@time.am" target="_blank" rel="noopener">info@time.am</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>GREECE</strong><br>Rist Hellas<br>27,Georgikis Scholis Avenue<br>57001 Thessaloniki<br>Greece<br>T: +30 2310 511 413<br>E: <a href="mailto:service@rist.gr" target="_blank" rel="noopener">service@rist.gr</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>HUNGARY</strong><br>KZM LTD.<br>Time Service Bt.<br>Baross u. 20<br>1085 Budapest<br>T: 00-36-1-318 5658<br>E: <a href="mailto:szerviz@time-service.hu" target="_blank" rel="noopener">szerviz@time-service.hu</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>GUATEMALA</strong><br>Watch it!<br>Diagonal 6, 13-01 zona 10 Oakland Mall<br>Tercer nivel<br>Guatemala<br>T:&nbsp;+502 4220 5778<br>E: <a href="mailto:serviciotecnico@victorino.gt" target="_blank" rel="noopener">serviciotecnico@victorino.gt</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>ICELAND</strong><br>Mari Time EHF.<br>Nybylavegur 10<br>200 Kopavogur<br>Iceland<br>T: +354 511 5500<br>E: <a href="mailto:stefan@maritime.is" target="_blank" rel="noopener">stefan@maritime.is</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>GUYANA</strong><br>c/o King's Jewelry World<br>King's Plaza 141 Quamina St.<br>South Cummingsburg<br>Georgetown<br>T: 592 226 0704<br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>621,1st floor, 12th Main<br>HAL II Stage, Indira Nagar<br>Bangalore - 560008<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>HONDURAS</strong><br>Centro Tecnico Relojero<br>Centro Comercial Metroplaza<br>1er nivel de tiendas, local no. 5, Cortes<br>San Pedro Sula, Honduras<br>T: 504 2580 2221<br>E: <a href="mailto:rpineda@zaredjoyeros.com" target="_blank" rel="noopener">rpineda@zaredjoyeros.com</a><br>E: <a href="mailto:centecrelojero@zaredjoyeros.com" target="_blank" rel="noopener">centecrelojero@zaredjoyeros.com</a><br>E: <a href="mailto:centecrelojero@ontimehn.com" target="_blank" rel="noopener">centecrelojero@ontimehn.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop G18, Orion Mall<br>Dr. Raj Kumar Road, Rajaji Nagar<br>Bangalore &ndash; 560055<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop No.S010, Ground Floor, Express Avenue Mall<br>Plot No.213,Whites Road,Royapettah<br>Chennai - 600014<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop no G-33, Oberoi Mall,Oberoi Garden City, Off Western Express Highway<br>Dindoshi, Goregaon-East<br>Mumbai 400063<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop No. G32, Level, 2<br>Inorbit Mall Rd, Software Units Layout, Hyderabad,<br>Telangana 500081<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop No. S018, South City Mall<br>375 Prince Anwar Shah Road<br>Kolkata-700068<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop No.G-48, Ground Floor, Phoenix Palassio Mall,<br>Amar Shaheed Path, Sector-7, Gomti Nagar,<br>Lucknow, Uttar Pradesh 226010<br>India<br>T:&nbsp;18604253747<br>E:&nbsp;<a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>DLF Mall of India<br>Sector 18, Noida<br>Uttar Pradesh 201301<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Unit No. G-29A, Ahmedabad One Mall<br>Plot No-216, T.P Scheme-1, Near Vastrapur Lake<br>Vastrapur, Ahmedabad 380054<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd,<br>UG 27, Phoenix Mall of the Millennium,<br>Pune - Bangalore Highway, Shankar Kalat Nagar,<br>Wakad, Pune &ndash; 411057<br>India<br>T: 020 69121026<br>E: <a href="mailto:service_3622@fossil.com" target="_blank" rel="noopener">service_3622@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>GRAND INDONESIA</strong><br>Watch Care Centre<br>Jl. MH. Thamrin no 1,<br>East Mall, Level 5 #GD2 - 16,17<br>Jakarta 10310<br>T: (62 21) 2358 1344<br>E: <a href="mailto:watchcare@time.co.id" target="_blank" rel="noopener">watchcare@time.co.id</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>ISRAEL</strong><br>Planet Style<br>4 Habitachon St.<br>Kiryat Matalon<br>4951248 Petach Tikva<br>T: +972 (0)3 924 6828<br>E: <a href="mailto:service@planetgroup.co.il" target="_blank" rel="noopener">service@planetgroup.co.il</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>IRAQ</strong><br>Al Azyaa Al Alamiah<br>Ontime Service Center<br>Majidi Mall<br>Erbil, Iraq<br>T: +066-2648404<br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>ITALY</strong><br>FAST Europe<br>C/O DHL Supply Chain<br>Corso Lombardia N.61<br>10099 San Mauro Torinese (TO)<br><a href="https://support.fossilgroup.com/s/contactsupport?language=it" target="_blank" rel="noopener">Contact Us</a><br><a href="https://support.fossilgroup.com/s/article/How-do-I-repair-my-watch-1616590583786?language=it" target="_blank" rel="noopener">Repair Instructions</a></div>
  <div class="items" style="width: 43%;"><strong>IRELAND</strong><br>Fossil - Ireland repairs<br>Rue du Martelberg, BP80023<br>67700 Monswiller<br>France<br><a href="https://support.fossilgroup.com/s/contactsupport?language=en_GB" target="_blank" rel="noopener">Contact Us</a><br><a href="https://support.fossilgroup.com/s/article/How-do-I-repair-my-watch-1616590583786?language=en_GB" target="_blank" rel="noopener">Repair Instructions</a></div>
  <div class="items" style="width: 43%;"><strong>JAPAN</strong><br>Fossil Japan Repair Center<br>Yasuda A building 2F, 3-9<br>Moriya-cho Kanagawa-ku<br>Yokohama, 221-0022<br>T: +81-3-4520-2361<br>F: (81) 45 450 6243<br>E: <a href="mailto:shop.jp@fossil.com" target="_blank" rel="noopener">shop.jp@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>SOUTH KOREA</strong><br>Trend Mecca<br>7 floor, M BD<br>626, Nonhyeon-ro, Gangnam-gu<br>Seoul, Korea<br>T: 1555-3038<br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>JORDAN</strong><br>Abu Shakra Trading Agency<br>P O Box 6971<br>11118 Amman<br>Jordan<br>T: +962-6-581-7173<br>E: <a href="mailto:gm.off@abushakra.com" target="_blank" rel="noopener">gm.off@abushakra.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>KOSOVO</strong><br>IAS Group<br>Bulevardi I Pavaresise<br>60000 Gjilan<br>Kosovo<br>T: +383 45 587 587<br>E: <a href="mailto:info@ias-ks.com" target="_blank" rel="noopener">info@ias-ks.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>KAZAKHSTAN</strong><br>Chronos Ltd.<br>125 Ablay Khan str.<br>050000 Almaty<br>Kazakhstan<br>T: +7 727 272 74 41<br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>KUWAIT</strong><br>Al Yasra Fashion Ontime Service Center<br>Marina Mall<br>Salmiya<br>Kuwait<br>T: +965-2-2244515&nbsp;<br>E: <a href="mailto:a.mullachery@alyasra.com" target="_blank" rel="noopener">a.mullachery@alyasra.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>LITHUANIA</strong><br>UAB Laiko Zvaigzde<br>Draugystes G. 19<br>51230 Kaunas<br>Lithuania<br>T: +370 631 63287<br>E: <a href="mailto:servisas@madosprieskoniai.lt" target="_blank" rel="noopener">servisas@madosprieskoniai.lt</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>LATVIA</strong><br>Estonia<br>O&uuml; Megafort<br>P&auml;rnu mnt 141<br>11314 Tallinn<br>T: +372 7 337030<br>E: <a href="mailto:megafort@megafort.ee" target="_blank" rel="noopener">megafort@megafort.ee</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>MACEDONIA</strong><br>Watch ID dooel<br>Bul.&nbsp;8-mi Septemvri Br.3, Lamela 4, Lokal 4<br>1000 Skopje<br>Macedonia<br>T: +3892 3126 468<br>E: <a href="mailto:dragan@watchid.mk" target="_blank" rel="noopener">dragan@watchid.mk</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>LEBANON</strong><br>Romance<br>P.O. Box 773<br>Fattal building, Jisr el-Wati (Sin el-Fil)<br>Lebanon / Beirut<br>T: +961 1 512002 &nbsp;ext 337-340<br>E: <a href="mailto:nadine.sfeir@fattal.com.lb" target="_blank" rel="noopener">nadine.sfeir@fattal.com.lb</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>MALAYSIA</strong><br>Fossil Time Malaysia - Service Centre<br>Unit L2-2-7, 2nd Floor<br>Wisma Kemajuan<br>No.2 Jalan 19/1B<br>46300 Petaling Jaya, Selangor<br>T: 03-7969 1900<br>E: <a href="mailto:fmycs@fossil.com" target="_blank" rel="noopener">fmycs@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>MOLDOVA</strong><br>Cronograf<br>23 Decebal Str., Jumbo, of. 204<br>2002 Chisinau<br>Moldova<br>T: 373 22 505 604<br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>MALTA</strong><br>Watch Clinic Repair Centre<br>Triq B.Bontadini<br>Birkirkara<br>Malta<br>T: +356 2147 2980<br>E: <a href="mailto:info@aftersalesrepairs.com" target="_blank" rel="noopener">info@aftersalesrepairs.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>MONTENEGRO</strong><br>Leandro Jewelry &amp; Watches<br>Miljana Vukova 13<br>81000 Podgorica<br>Montenegro<br>T: +382 69 388 750<br>E: <a href="mailto:online@leandro-stores.com" target="_blank" rel="noopener">online@leandro-stores.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>MEXICO</strong><br>Metro Service Center M&eacute;xico<br>Carretera Monterrey - Saltillo 1249 - A<br>Col. Pio XII<br>Santa Catarina, N.L. Mexico C.P. 66362<br>T: 01 800 236 7745<br>E: <a href="mailto:reparaciones@fossil.com.mx" target="_blank" rel="noopener">reparaciones@fossil.com.mx</a></div>
  <div class="items" style="width: 43%;"><strong>MOROCCO</strong><br>Tempus<br>190 Boulevard d'Anfa<br>20050 Casablanca<br>Morocco<br>T:&nbsp;+212 522 944 373<br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>THE NETHERLANDS</strong><br>Team for Logistics<br>Attn. Warranty &amp; Repairs<br>Lireweg 114<br>2153 PH Nieuw Vennep<br><a href="https://support.fossilgroup.com/s/contactsupport?language=nl_NL" target="_blank" rel="noopener">Contact Us</a>&nbsp;(NL)<br><a href="https://support.fossilgroup.com/s/contactsupport?language=fr" target="_blank" rel="noopener">Contact Us</a> (FR)<br><a href="https://support.fossilgroup.com/s/article/How-do-I-repair-my-watch-1616590583786?language=nl_NL" target="_blank" rel="noopener">Repair Instructions</a></div>
  <div class="items" style="width: 43%;"><strong>MYANMAR</strong><br>Cherry Oo Sevice Center, No.408, First Floor<br>Conner of Thein Phyu Road &amp; Bominyaung Street<br>Mingalar Taung Nyunt Township<br>Yangon, Myanmar<br>T: (+95-1) 200290<br>E: <a href="mailto:choservice@naingfamilymyanmar.com" target="_blank" rel="noopener">choservice@naingfamilymyanmar.com</a><br>9:00 AM - 5:00 PM (Monday to Saturday)<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>NEW ZEALAND</strong><br>Watch World Ltd<br>45a Arrenway Drive<br>Albany<br>Auckland<br>T: 09 475 6103<br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>NEPAL</strong><br>Swiss Watch Service<br>Jamal, Dubarmarg<br>Besides Mayalu Centre<br>Kathmandu<br>T: +977-1-4222909<br>10:00 AM - 7:00 PM (Sunday to Friday)<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>NORWAY</strong><br>Henning Staehr A/S<br>Grusbakken 14, 2820 Gentofte<br>T: +45 45 26 91 70<br>E: <a href="mailto:service@staehrgroup.com" target="_self">service@staehrgroup.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>PAKISTAN</strong><br>OWS Emporium Mall<br>1st Floor, Shop # F-25<br>Abdul Haque Road, Johar Town Phase 2<br>Lahore, Pakistan<br>T: +92 42 32592370<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>PAKISTAN</strong><br>OWS<br>Fortune Center, Office 304, 3rd Floor<br>Shahrah-e-Faisal, P.E.C.H.S Block 6<br>Karachi, Pakistan<br>T: +92 346 0081268<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>PAKISTAN</strong><br>Islamabad<br>Shams Department Store,<br>Shop # B-8, School Road, F-6 Markaz.<br>Islamabad, Pakistan<br>T: +92 313 4038732<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>PANAMA</strong><br>Maxima Watch - Laguna Bay<br>Mall Multiplaza, Punta pacifica local B-<br>Panama City<br>Panama<br>T: 00507-3023727<br>E: <a href="mailto:oren@maximawatch.com" target="_blank" rel="noopener">oren@maximawatch.com</a><br>E: <a href="mailto:liorkovner@gmail.com" target="_blank" rel="noopener">liorkovner@gmail.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>PHILIPPINES</strong><br>TIMECHECK<br>Unit 369 -374 Level 3, Main Wing, Shangri-La Plaza, EDSA cor. Shaw Blvd.<br>Wack-Wack, Mandaluyong City<br>T: (+632 )5310-3748 to 51<br>Fax: (+632) 5310-3748 loc. 357<br>E: <a href="mailto:timecheck.6750@gmail.com" target="_blank" rel="noopener">timecheck.6750@gmail.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>PARAGUAY</strong><br>Tiempo de Relojes<br>Attn: Vicente Acosta<br>Lillo casy Bulnes<br>Asuncion, Paraguay<br>T: (+595) 21 - 660 109<br>E: <a href="mailto:tdr@tiempoderelojes.com.py" target="_blank" rel="noopener">tdr@tiempoderelojes.com.py</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>POLAND</strong><br>PHU Jubiler Sp. z o.o.<br>Poleczki 13. 02-882 Warsaw<br>T: +48 22 46 27 955<br>E: <a href="mailto:serwis@phujubiler.pl" target="_self">serwis@phujubiler.pl</a></div>
  <div class="items" style="width: 43%;"><strong>PERU</strong><br>Le Grand Montres &amp; Bijoux<br>Av Risso # 243<br>Oficina 202, Lince - T&eacute;cnico, Jose Mu&ntilde;oz<br>Lima, Peru<br>T: (+51) 935 508 416<br>E: <a href="mailto:peru.legrand@gmail.com" target="_blank" rel="noopener">peru.legrand@gmail.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>PORTUGAL</strong><br>Expeditors Portugal C/O Espa&ccedil;otrans<br>Att Reparac&otilde;es Fossil (FAST)<br>Rua Marinhas do Tejo, N&ordm;164 G<br>2625-090 P&oacute;voa de Santa Iria<br><a href="https://support.fossilgroup.com/s/contactsupport?language=pt_PT" target="_blank" rel="noopener">Contact Us</a><br><a href="https://support.fossilgroup.com/s/article/Watch-Repairs-1616590590646?language=pt_PT" target="_blank" rel="noopener">Repair Instructions</a></div>
  <div class="items" style="width: 43%;"><strong>RUSSIA</strong><br>Fortuna-Time Ltd.&nbsp;<br>Garibaldi str., bld 7<br>119313 Moscow<br>Russia<br>T: +7(499) 553-49-92<br>E: <a href="mailto:service@fortuna-time.ru" target="_blank" rel="noopener">service@fortuna-time.ru</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>QATAR</strong><br>Blue Salon<br>P.O. Box 6255<br>Suhaim Bin Hamad Street<br>Doha<br>T: + 974 44 66 111<br>E: <a href="mailto:r.a.mansoori@bluesalon.com" target="_blank" rel="noopener">r.a.mansoori@bluesalon.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>SAUDI ARABIA</strong><br>Al Yasra Fashion (OnTime)<br>Prince Naser Bin Abdul Aziz Street<br>Behind Guthmi Furniture<br>Khurais Road, Rawda Dist.<br>Riyadh, KSA<br>T: +966 1 2572095<br>E: <a href="mailto:anwarul@alyasra.com" target="_blank" rel="noopener">anwarul@alyasra.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>ROMANIA</strong><br>B &amp; B Collection SRL<br>Unirea Shopping Center<br>P-ta. Unirii Nr.1, Sector 3<br>Parter, aripa Splai<br>Bucharest, Romania<br>T: +40.21.303.03.65&nbsp;<br>E: <a href="mailto:service@bbcollection.ro" target="_blank" rel="noopener">service@bbcollection.ro</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>SERBIA</strong><br>BPM Export - Import<br>Kneza Milosa 16<br>11000 Belgrade 6<br>Serbia<br>T: +381 11 362 0427<br>E: <a href="mailto:bpmservis@bpmsatovi.rs" target="_blank" rel="noopener">bpmservis@bpmsatovi.rs</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>SLOVENIA</strong><br>Slowatch D.O.O.<br>Gosposvetska cesta 5<br>1000 Ljubljana<br>Slovenia<br>T: +386 1 200 3100<br>E: <a href="mailto:slowatch@slowatch.si" target="_blank" rel="noopener">slowatch@slowatch.si</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>SINGAPORE</strong><br>Fossil Singapore Pte Ltd<br>10 Kallang Avenue&nbsp;<br>Aperia Tower 2&nbsp;<br>#07-10&nbsp;<br>Singapore 339510&nbsp;<br>T: 65 6431 8100<br>E: <a href="mailto:customerservice.sg@fossil.com" target="_blank" rel="noopener">customerservice.sg@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>SOUTH AFRICA</strong><br>Fossil Accessories South Africa (Pty) Ltd<br>Unit 1, 48 Neptune Street<br>Paarden Eiland, 7405<br>Cape Town<br>South Africa<br>T: +27 21 4180045<br>E: <a href="mailto:customercareza@fossil.com" target="_blank" rel="noopener">customercareza@fossil.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>SLOVAKIA</strong><br>Czech Republic<br>CLA Distribution, s.r.o.<br>Československ&eacute; arm&aacute;dy 3<br>26101 Př&iacute;bram IV<br>Czech Republic<br>T: &nbsp;+420 602 723 820<br>E: <a href="mailto:info@cladistribution.com" target="_blank" rel="noopener">info@cladistribution.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>SPAIN - CANARIAS</strong><br>RELOCAN<br>Quintana Alonso Relojeros<br>Tom&aacute;s Miller, 26<br>35007 Las Palmas de Gran Canaria<br>Espa&ntilde;a<br>T:&nbsp;+34 92828014055<br>E: <a href="mailto:serviciotecnico.canarias@satrelocan.com" target="_blank" rel="noopener">serviciotecnico.canarias@satrelocan.com</a><br>E: <a href="mailto:customerservice.es@fossil.com" target="_blank" rel="noopener">customerservice.es@fossil.com</a></div>
  <div class="items" style="width: 43%;"><strong>SURINAME</strong><br>Timeless Jewelry, N.V<br>Attn: Ms. Inisrah Ashruf<br>Johannes Mungrastraat 17<br>Paramaribo<br>T: 597 473998<br>E: <a href="mailto:inisrah.ashruf@timelessnv.com" target="_blank" rel="noopener">inisrah.ashruf@timelessnv.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>SPAIN - PENINSULA</strong><br>Naeko Logistics<br>Avda. Mare de Deu de N&uacute;ria, 13-15<br>Nave 05<br>08830 Sant Boi de LLobregat<br><a href="https://support.fossilgroup.com/s/contactsupport?language=es" target="_blank" rel="noopener">Contact Us</a><br><a href="https://support.fossilgroup.com/s/article/How-do-I-repair-my-watch-1616590583786?language=es" target="_blank" rel="noopener">Repair Instructions</a></div>
  <div class="items" style="width: 43%;"><strong>SWEDEN</strong><br>Henning Staehr A/S<br>Grusbakken 14, 2820 Gentofte<br>T: +45 45 26 91 70<br>E: <a href="mailto:service@staehrgroup.com" target="_self">service@staehrgroup.com</a></div>
  <div class="items" style="width: 43%;"><strong>SRI LANKA</strong><br>Galleria<br>No. 232/1, Havelock Road<br>Colombo 05<br>Sri Lanka<br>T:&nbsp;+94115625925<br>T:&nbsp;94115626626<br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>SWITZERLAND</strong><br>Fossil Switzerland GmbH<br>Rue des Places 28<br>2855 Glovelier<br>Switzerland<br><a href="https://support.fossilgroup.com/s/contactsupport?language=de" target="_blank" rel="noopener">Contact Us</a>&nbsp;(DE)<br><a href="https://support.fossilgroup.com/s/contactsupport?language=fr" target="_blank" rel="noopener">Contact Us</a>&nbsp;(FR)&nbsp;<br><a href="https://support.fossilgroup.com/s/article/How-do-I-repair-my-watch-1616590583786?language=en_BE" target="_blank" rel="noopener">Repair Instructions</a></div>
  <div class="items" style="width: 43%;"><strong>T&Uuml;RKIYE</strong><br>Saat Ve Saat San Ve Tic A.S.<br>Noramin Is Merkezi<br>Maslak Mah. Buyukdere Cad. &nbsp;237/D<br>34398 Sisli - Istanbul<br>T: +90 212 444 7228-0<br>E: <a href="mailto:teknik@saatvesaat.com" target="_blank" rel="noopener">teknik@saatvesaat.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>THAILAND</strong><br>TDC corporation Co., Ltd.<br>9 Soi Ramintra 55/8 Ramintra Rd.,<br>Tharang, Bangkhen<br>Bangkok 10230 ,Thailand<br>T: +66 (0) 2-347-0180<br>E: <a href="mailto:Service@tdccorp.co.th" target="_blank" rel="noopener">Service@tdccorp.co.th</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
  <div class="items" style="width: 43%;"><strong>UKRAINE</strong><br>Ametist Trade LLC<br>80 Berezinskaya st.<br>49000 Dnipro City<br>Ukraine<br>T: +38 095 485 15 46<br>T: +38 096 887 10 27<br>E: <a href="mailto:info@ametist-trade.net" target="_blank" rel="noopener">info@ametist-trade.net</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>TUNISIA</strong><br>ABCO Distribution&nbsp;<br>Bis Avenue de L'uma 62<br>Immeuble Nesma, Apt. B 32<br>2036 Ariana<br>T: +216 71 942 558<br>E: amir@abcodistribution.com<br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>UNITED ARAB EMIRATES</strong><br>Al Futtaim Watches &amp; Jewellry Co. LLC<br>Al Futtaim Tower / 1st Floor, Office # 102<br>Baniyas Square, Al Maktoum Street<br>Deira, Dubai<br>T: +971 4701 6900<br>E: <a href="mailto:joshy.narayanan@alfuttaim.ae" target="_blank" rel="noopener">joshy.narayanan@alfuttaim.ae</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>UNITED ARAB EMIRATES</strong><br>Seddiqi &amp; Sons L.L.C.<br>17th Floor Capricorn Tower<br>Shaikh Zayed Road<br>Dubai<br>T: +971 4 332 3777<br>E: <a href="mailto:info@seddiqi.com" target="_blank" rel="noopener">info@seddiqi.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>UNITED STATES OF AMERICA</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-us.fossilgroup.com/" target="_blank" rel="noopener">https://services-us.fossilgroup.com</a></div>
  <div class="items" style="width: 43%;"><strong>UNITED KINGDOM</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-uk.fossilgroup.com/" target="_blank" rel="noopener">https://services-uk.fossilgroup.com</a><br>&nbsp;</div>
  <div class="items" style="width: 43%;"><strong>UNITED ARAB EMIRATES</strong><br>Al Yasra Fashion Ontime Service Center<br>Ontime Marina Mall<br>Ground Floor, Unit No 21, Marina Mall&nbsp;<br>Abu Dhabi<br>T: +971 2681 8134<br>E: <a href="mailto:info-watches@alyasra.com" target="_blank" rel="noopener">info-watches@alyasra.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>UNITED ARAB EMIRATES</strong><br>Al Yasra Fashion Ontime Service Center<br>Ontime Dubai Festival City<br>First Floor, Shop No. SC227<br>Dubai<br>T: +971 4285 5455<br>E: <a href="mailto:info-watches@alyasra.com" target="_blank" rel="noopener">info-watches@alyasra.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>UZBEKISTAN</strong><br>Eleron-Ka Co. Ltd.<br>Mirzo-Ulugbek district<br>Poitacht Business Centre<br>Khamid Olimjan Square, Block K<br>100029 Tashkent<br>Uzbekistan<br>T: +998 71 234 75 12<br>E: <a href="mailto:eleronkaco@gmail.com" target="_blank" rel="noopener">eleronkaco@gmail.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>URUGUAY</strong><br>Lucia Achdjian<br>Dr. Enrique Mu&ntilde;oz 883<br>Montevideo, Uruguay<br>T: +598 27113757<br>E: <a href="mailto:service.lucia@gmail.com" target="_blank" rel="noopener">service.lucia@gmail.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>VENEZUELA</strong><br>Representaciones Horloge<br>Av. Urdaneta, Torre Financiera Latino, piso 14, oficina 3, Urbanizaci&oacute;n La Candelaria, Caracas<br>Caracas, Venezuela<br>T: +58 212 5640219<br>E: <a href="mailto:Belipe00@gmail.com" target="_blank" rel="noopener">Belipe00@gmail.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
  <div class="items" style="width: 43%;"><strong>VIETNAM</strong><br>DRAGONFLY SELECT BRANDS VIETNAM LIMITED COMPANY<br>222, Dien Bien Phu Street<br>Vo Thi Sau Ward, District 3<br>HCMC, Vietnam<br>Tel: 0708881010<br>Email: <a href="mailto:ecom@dragonflyapac.com" target="_blank" rel="noopener">ecom@dragonflyapac.com</a><br><a href="http://" target="_blank" rel="noopener">http://fossil.com.vn/</a><br><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong></div>
</div>`;
let htmlText = originalHtmlText;
console.log(htmlText);
const updateHtml = () => {
  const newHtml = htmlInput.value;
  if (newHtml) {
    originalHtmlText = newHtml;
    htmlText = originalHtmlText;
  }
};

function renderLSC(langCode) {
  const translations = languageMappings[langCode]; // Dynamically get the mapping array
  if (!translations) {
    console.error("Invalid language code");
    return;
  }
  htmlText = originalHtmlText; // Reset to original HTML text before replacements
  for (let index = 0; index < mapping.length; index++) {
    htmlText = htmlText.split(mapping[index]).join(translations[index]);
  }
}

function replaceDoubleQuotes() {
  textArea.textContent = htmlText.replaceAll('"', '""');
}

function mapLanguagesToTranslations() {
  const versionInput = document.querySelector("#version-input").value.trim();
  // Replace double quotes
  const replacedHtmlText = htmlText.replace(/"/g, '""');
  const lines = versionInput.split("\n");
  // mapping languages for other locale like en_BE en_CH en_AU en_CA en_GB en_IN...
  const translations = lines.map((line) => {
    const [_, id, language] = line.split(/\s+/);
    let translatedHtml = "";
    let actualLanguage = language;
    if (languageMappings.hasOwnProperty(language)) {
      translatedHtml = getTranslatedHtml(language, replacedHtmlText);
    } else {
      switch (language) {
        case "de_CH":
          actualLanguage = "de";
          break;
        case "fr_BE":
        case "fr_CH":
        case "fr_CA":
          actualLanguage = "fr";
          break;
        case "en_AU":
        case "en_BE":
        case "en_GB":
        case "en_CA":
        case "en_IN":
        case "en_CH":
        case "sv":
          actualLanguage = "en_US";
          break;
        default:
          console.error("Unsupported language code:", language);
      }
      translatedHtml = getTranslatedHtml(actualLanguage, replacedHtmlText);
    }
    return {
      Id: id,
      Language: language,
      Article_Body_External__c: translatedHtml,
    };
  });

  console.log(translations);
  return translations;
}

function getTranslatedHtml(langCode, htmlText) {
  const translations = languageMappings[langCode]; // Dynamically get the mapping array
  if (!translations) {
    console.error("Invalid language code:", langCode);
    return htmlText;
  }
  let translatedHtml = htmlText; // Reset to original HTML text before replacements
  console.log(`Original HTML: ${htmlText}`);
  for (let index = 0; index < mapping.length; index++) {
    console.log(`Replacing "${mapping[index]}" with "${translations[index]}"`);
    translatedHtml = translatedHtml
      .split(mapping[index])
      .join(translations[index]);
  }
  console.log(`Translated HTML for ${langCode}:`, translatedHtml);
  return translatedHtml;
}

// Function to handle button clicks
function getValue(button) {
  const langCode = button.textContent; // Get the clicked button's language code
  renderLSC(langCode);
  root.textContent = htmlText; // Update the DOM with the translated content
}

// Event listener for mapping languages to translations and exporting to CSV
document
  .querySelector("#map-language-to-translation")
  .addEventListener("click", () => {
    const translations = mapLanguagesToTranslations();
    exportToCSV(translations);
  });

function exportToCSV(translations) {
  const csvRows = [];
  const headers = ["Id", "Language", "Article_Body_External__c"];
  csvRows.push(headers.join(","));

  translations.forEach((translation) => {
    const values = [
      translation.Id,
      translation.Language,
      `"${translation.Article_Body_External__c}"`,
    ];
    csvRows.push(values.join(","));
  });

  const csvContent = csvRows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "translations.csv");
  a.click();
}

// Function to handle button clicks
// function getValue(button) {
//   const langCode = button.textContent; // Get the clicked button's language code
//   renderLSC(langCode);
//   root.textContent = htmlText; // Update the DOM with the translated content
// }

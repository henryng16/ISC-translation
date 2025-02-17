const root = document.querySelector("#root");
const displayTest = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
const htmlInput = document.querySelector("#html-input");
const updateHtmlButton = document.querySelector("#update-html-button");

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
  mapping: [
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
  nl: [
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
  chSimp: [
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
  chTrad: [
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
  ptPt: [
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
  kr: [
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

let originalHtmlText = `<p>Below is a list of our internationally located distributors and service centers for our traditional watches and service centers that are equipped to service smartwatches.<br><br>For traveling customers, please contact your original seller.<br>&nbsp;</p>
<div class="wrapper" style="display: flex; flex-wrap: wrap; gap: 3rem;">
<div class="items" style="width: 40%;"><strong>ANDORRA</strong><br>L&acute;ESCAIRE<br>Avda. del Pesebre, 1 LOC.2<br>AD700 Escaldes-Engordany<br>Andorra<br>T: +376869400<br>E: <a href="mailto:escaire@andornet.ad" target="_blank" rel="noopener">escaire@andornet.ad</a><br>E: <a href="mailto:customerservice.es@fossil.com" target="_blank" rel="noopener">customerservice.es@fossil.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
<div class="items" style="width: 40%;"><strong>CHINA</strong><br>Watch Service Centre<br>17/F, CDW Building<br>388 Castle Peak Road<br>Tsuen Wan, New Territories<br>Hong Kong SAR, China<br>T: (852) 2437 8566<br>E: <a href="mailto:FossilAsia-AfterSales@fossil.com" target="_blank" rel="noopener">FossilAsia-AfterSales@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>AUSTRALIA</strong><br>Metro Service Centre<br>Lkd bag 6277<br>Frenchs Forest 2086<br>Australia<br>T: (+61) 02 8977 8086<br>T: (+61) 1 800 818 853 (toll free)<br>E: <a href="mailto:customercare.au@fossil.com" target="_blank" rel="noopener">customercare.au@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>CHINA</strong><br>Taiwan, China<br>Dragonfly Asia-Pacific Limited<br>Taiwan Branch<br>4F, No. 2, Fuxing North Road<br>Zhongshan District<br>Taipei, Taiwan, China<br>T: (886) 2 8773 9911<br>E: <a href="mailto:service@dragonflyapac.com.tw" target="_blank" rel="noopener">service@dragonflyapac.com.tw</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>BELGIUM / LUXEMBOURG</strong><br>DHL&nbsp;<br>Attn. Warranty &amp; Repairs<br>Woluwelaan 151&nbsp;<br>1831 Diegem<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=fr_BE" target="_blank" rel="noopener">Contact Us</a><br><a href="https://zodiac.fgservices.com/s/article/How-Do-I-Request-A-Repair-Zodiac?language=fr_BE" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>COSTA RICA</strong><br>Guialsa S.A.<br>Attn: Juan Carlos<br>75 Oeste de la funeraria del&nbsp;magisterio,<br>Paseo Colon<br>San Jose, Costa Rica<br>T: 222-0804<br>T: 2256-5716<br>T: 2257-2349<br>E: <a href="mailto:guialsa@polarcr.com" target="_blank" rel="noopener">guialsa@polarcr.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
<div class="items" style="width: 40%;"><strong>CANADA</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-ca.fossilgroup.com/" target="_blank" rel="noopener">https://services-ca.fossilgroup.com</a></div>
<div class="items" style="width: 40%;"><strong>FRANCE</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-fr.fossilgroup.com/" target="_blank" rel="noopener">https://services-fr.fossilgroup.com/</a></div>
<div class="items" style="width: 40%;"><strong>FINLAND</strong><br>Traffic Tech Nordics AB<br>C/O Fast Europe<br>Marieholmsgatan 60<br>41502 G&ouml;teborg<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=en_GB" target="_blank" rel="noopener">Contact Us</a><br><a href="https://zodiac.fgservices.com/s/article/How-Do-I-Request-A-Repair-Zodiac?language=pl" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>CHINA</strong><br>Fossil Trading ( Shanghai) Co. Ltd<br>4th Floor, Building A1<br>No. 928 Mingzhu Road<br>Qingpu District, Shanghai, China<br>T: (86)400-820-3126<br>E: <a href="mailto:shanghaicustomerservicegroup2@fossil.com" target="_blank" rel="noopener">shanghaicustomerservicegroup2@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>GUATEMALA</strong><br>Watch it!<br>Diagonal 6, 13-01 zona 10 Oakland Mall<br>Tercer nivel<br>Guatemala<br>T:&nbsp;+502 4220 5778<br>E: <a href="mailto:serviciotecnico@victorino.gt" target="_blank" rel="noopener">serviciotecnico@victorino.gt</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
<div class="items" style="width: 40%;"><strong>HONDURAS</strong><br>Centro Tecnico Relojero<br>Centro Comercial Metroplaza<br>1er nivel de tiendas, local no. 5, Cortes<br>San Pedro Sula, Honduras<br>T: 504 2580 2221<br>E: <a href="mailto:rpineda@zaredjoyeros.com" target="_blank" rel="noopener">rpineda@zaredjoyeros.com</a><br>E: <a href="mailto:centecrelojero@zaredjoyeros.com" target="_blank" rel="noopener">centecrelojero@zaredjoyeros.com</a><br>E: <a href="mailto:centecrelojero@ontimehn.com" target="_blank" rel="noopener">centecrelojero@ontimehn.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>621,1st floor, 12th Main<br>HAL II Stage, Indira Nagar<br>Bangalore - 560008<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop G18, Orion Mall<br>Dr. Raj Kumar Road, Rajaji Nagar<br>Bangalore &ndash; 560055<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop no G-33, Oberoi Mall,Oberoi Garden City, Off Western Express Highway<br>Dindoshi, Goregaon-East<br>Mumbai 400063<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Watch Station International<br>613, 12th Main Rd<br>7th Cross, HAL 2nd Stage,Indiranagar, Bengaluru, Karnataka 560038<br>Karnataka<br>India<br>T: 18604253747<br>E:&nbsp;<a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop No. S018, South City Mall<br>375 Prince Anwar Shah Road<br>Kolkata-700068<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop No.S010, Ground Floor, Express Avenue Mall<br>Plot No.213,Whites Road,Royapettah<br>Chennai - 600014<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>DLF Mall of India<br>Sector 18, Noida<br>Uttar Pradesh 201301<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop No.G-48, Ground Floor, Phoenix Palassio Mall,<br>Amar Shaheed Path, Sector-7, Gomti Nagar,<br>Lucknow, Uttar Pradesh 226010<br>India<br>T: 18604253747<br>E:&nbsp;<a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Shop No. G32, Level, 2<br>Inorbit Mall Rd, Software Units Layout, Hyderabad,<br>Telangana 500081<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>INDIA</strong><br>Fossil India Pvt. Ltd.<br>Unit No. G-29A, Ahmedabad One Mall<br>Plot No-216, T.P Scheme-1, Near Vastrapur Lake<br>Vastrapur, Ahmedabad 380054<br>India<br>T: 18604253747<br>E: <a href="mailto:service.in@fossil.com" target="_blank" rel="noopener">service.in@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>IRELAND</strong><br>Fossil - Ireland repairs<br>Rue du Martelberg, BP80023<br>67700 Monswiller<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=en_GB" target="_blank" rel="noopener">Contact Us</a><br><a href="https://zodiac.fgservices.com/s/article/How-Do-I-Request-A-Repair-Zodiac?language=pl" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>MALAYSIA</strong><br>Fossil Time Malaysia - Service Centre<br>Unit L2-2-7, 2nd Floor<br>Wisma Kemajuan<br>No.2 Jalan 19/1B<br>46300 Petaling Jaya, Selangor<br>T: 03-7969 1900<br>E: <a href="mailto:fmycs@fossil.com" target="_blank" rel="noopener">fmycs@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>ITALY</strong><br>FAST Europe<br>C/O DHL Supply Chain<br>Corso Lombardia N.61<br>10099 San Mauro Torinese (TO)<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=it" target="_blank" rel="noopener">Contact Us</a><br><a href="https://zodiac.fgservices.com/s/article/How-Do-I-Request-A-Repair-Zodiac?language=it" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>MEXICO</strong><br>Metro Service Center M&eacute;xico<br>Carretera Monterrey - Saltillo 1249 - A<br>Col. Pio XII<br>Santa Catarina, N.L. Mexico C.P. 66362<br>T: 01 800 236 7745<br>E: <a href="mailto:reparaciones@fossil.com.mx" target="_blank" rel="noopener">reparaciones@fossil.com.mx</a></div>
<div class="items" style="width: 40%;"><strong>JAPAN</strong><br>Fossil Japan Repair Center<br>Yasuda A building 2F, 3-9<br>Moriya-cho Kanagawa-ku<br>Yokohama, 221-0022<br>T: +81-3-4520-2361<br>F: (81) 45 450 6243<br>E: <a href="mailto:shop.jp@fossil.com" target="_blank" rel="noopener">shop.jp@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>This partner cannot repair smartwatches, jewelry or leather goods, please contact your original seller.</strong><br>Swiss Watch Service<br>Jamal, Dubarmarg<br>Besides Mayalu Centre<br>Kathmandu<br>T: +977-1-4222909<br>10:00 AM - 7:00 PM (Sunday to Friday)<br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
<div class="items" style="width: 40%;"><strong>SOUTH KOREA</strong><br>Trend Mecca<br>5F Yangji BD<br>619 Nonhyeon-ro, Gangnam-gu<br>Seoul, Korea<br>T: 1555-3038<br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>THE NETHERLANDS</strong><br>Team for Logistics<br>Attn. Warranty &amp; Repairs<br>Lireweg 114<br>2153 PH Nieuw Vennep<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=nl_NL" target="_blank" rel="noopener">Contact Us</a> (NL)<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=fr" target="_blank" rel="noopener">Contact Us</a> (FR)<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=nl_NL" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>NORWAY</strong><br>Urspesialisten AS<br>Tordenskjoldsgate 11<br>4612 Kristiansand<br>Norway<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=en_GB" target="_blank" rel="noopener">Contact Us</a><br><a href="https://zodiac.fgservices.com/s/article/How-Do-I-Request-A-Repair-Zodiac?language=pl" target="_blank" rel="noopener">Repair Instructions</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>NEW ZEALAND</strong><br>Watch World Ltd<br>45a Arrenway Drive<br>Albany<br>Auckland<br>T: 09 475 6103<br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>PANAMA</strong><br>Maxima Watch - Laguna Bay<br>Mall Multiplaza, Punta pacifica local B-<br>Panama City<br>Panama<br>T: 00507-3023727<br>E: <a href="mailto:oren@maximawatch.com" target="_blank" rel="noopener">oren@maximawatch.com</a><br>E: <a href="mailto:liorkovner@gmail.com" target="_blank" rel="noopener">liorkovner@gmail.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
<div class="items" style="width: 40%;"><strong>SPAIN - PENINSULA</strong><br>Naeko Logistics<br>Avda. Mare de Deu de N&uacute;ria, 13-15<br>Nave 05<br>08830 Sant Boi de LLobregat<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=es" target="_blank" rel="noopener">Contact Us</a><br><a href="https://zodiac.fgservices.com/s/article/How-Do-I-Request-A-Repair-Zodiac?language=es" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>POLAND</strong><br>FAST<br>C/O Expeditors Polska<br>Św. Tomasza 4D<br>05-808 Parzniew<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=en_GB" target="_blank" rel="noopener">Contact Us</a><br><a href="https://zodiac.fgservices.com/s/article/Watch-Repairs-Zodiac?language=pl" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>SURINAME</strong><br>Timeless Jewelry, N.V<br>Attn: Ms. Inisrah Ashruf<br>Johannes Mungrastraat 17<br>Paramaribo<br>T: 597 473998<br>E: <a href="mailto:inisrah.ashruf@timelessnv.com" target="_blank" rel="noopener">inisrah.ashruf@timelessnv.com</a><br><strong>This partner can only service items purchased through them and does not repair smartwatches, jewellery or leather goods. For items bought while travelling or from an international seller, please contact the seller listed on your receipt for assistance.</strong></div>
<div class="items" style="width: 40%;"><strong>SINGAPORE</strong><br>Fossil Singapore Pte Ltd<br>10 Kallang Avenue&nbsp;<br>Aperia Tower 2&nbsp;<br>#07-10&nbsp;<br>Singapore 339510<br>T: 65 6431 8100<br>E: <a href="mailto:customerservice.sg@fossil.com" target="_blank" rel="noopener">customerservice.sg@fossil.com</a><br><strong>This partner cannot repair jewelry or leather goods, please contact your original seller.</strong></div>
<div class="items" style="width: 40%;"><strong>SWEDEN</strong><br>Traffic Tech Nordics AB<br>C/O Fast Europe<br>Marieholmsgatan 60<br>41502 G&ouml;teborg<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=en_GB" target="_blank" rel="noopener">Contact Us</a><br><a href="https://zodiac.fgservices.com/s/article/How-Do-I-Request-A-Repair-Zodiac?language=pl" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>SPAIN - CANARIAS</strong><br>RELOCAN<br>Quintana Alonso Relojeros<br>Tom&aacute;s Miller, 26<br>35007 Las Palmas de Gran Canaria<br>Espa&ntilde;a<br>T:&nbsp;+34 92828014055<br>E: <a href="mailto:serviciotecnico.canarias@satrelocan.com" target="_blank" rel="noopener">serviciotecnico.canarias@satrelocan.com</a><br>E: <a href="mailto:customerservice.es@fossil.com" target="_blank" rel="noopener">customerservice.es@fossil.com</a></div>
<div class="items" style="width: 40%;"><strong>SWITZERLAND</strong><br>Fossil Switzerland GmbH<br>Rue des Places 28<br>2855 Glovelier<br>Switzerland<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=de" target="_blank" rel="noopener">Contact Us</a> (DE)<br><a href="https://zodiac.fgservices.com/s/contactsupport?language=fr" target="_blank" rel="noopener">Contact Us</a> (FR)&nbsp;<br><a href="https://zodiac.fgservices.com/s/article/How-Do-I-Request-A-Repair-Zodiac?language=pl" target="_blank" rel="noopener">Repair Instructions</a></div>
<div class="items" style="width: 40%;"><strong>UNITED STATES OF AMERICA</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-us.fossilgroup.com/" target="_blank" rel="noopener">https://services-us.fossilgroup.com</a></div>
<div class="items" style="width: 40%;"><strong>UNITED KINGDOM</strong><br>Please click below to visit our Repair Portal<br><a href="https://services-uk.fossilgroup.com/" target="_blank" rel="noopener">https://services-uk.fossilgroup.com</a>/</div>
</div>`;
let htmlText = originalHtmlText;

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

// Function to handle button clicks
function getValue(button) {
  const langCode = button.textContent; // Get the clicked button's language code
  renderLSC(langCode);
  root.textContent = htmlText; // Update the DOM with the translated content
}

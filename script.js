document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  }

  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');
  if (cookieBanner && localStorage.getItem('chieasyCookiesAccepted') === 'true') cookieBanner.classList.add('hidden');
  if (acceptCookies && cookieBanner) {
    acceptCookies.addEventListener('click', () => {
      localStorage.setItem('chieasyCookiesAccepted', 'true');
      cookieBanner.classList.add('hidden');
    });
  }

  const META_TRANSLATIONS = {
    en: {
      title: 'Chieasy Travel — Custom China Trips & Premium Experiences',
      description: 'Discover the China most travelers never see. Custom routes, private tours and premium experiences across China with Chieasy Travel.'
    },
    ru: {
      title: 'Chieasy Travel — индивидуальные путешествия и премиум-впечатления в Китае',
      description: 'Откройте Китай, который большинство туристов не видит: индивидуальные маршруты, частные туры и премиум-впечатления с Chieasy Travel.'
    },
    es: {
      title: 'Chieasy Travel — viajes personalizados y experiencias premium en China',
      description: 'Descubre la China que la mayoría de viajeros no ve: rutas personalizadas, tours privados y experiencias premium con Chieasy Travel.'
    },
    pt: {
      title: 'Chieasy Travel — viagens personalizadas e experiências premium na China',
      description: 'Descubra a China que a maioria dos viajantes não vê: roteiros personalizados, tours privados e experiências premium com a Chieasy Travel.'
    },
    cn: {
      title: 'Chieasy Travel — 中国定制旅行与高端体验',
      description: '探索大多数旅行者看不到的中国：定制路线、私人旅行和 Chieasy Travel 的高端体验。'
    }
  };

  const TRANSLATIONS = {
    ru: {
      'Home': 'Главная',
      'Consultation': 'Консультация',
      'Routes': 'Маршруты',
      'Experiences': 'Впечатления',
      'Video': 'Видео',
      'FAQ': 'FAQ',
      'Custom China Travel Company': 'Индивидуальные путешествия по Китаю',
      'Discover the China Most Travelers Never See': 'Откройте Китай, который большинство туристов не видит',
      'Custom routes, private tours and premium experiences across China — built by a team founded on 12 years of real China experience.': 'Индивидуальные маршруты, частные туры и премиум-впечатления по Китаю — от команды с 12 годами реального опыта в Китае.',
      'Plan My Trip': 'Спланировать поездку',
      '45-min Consultation · €149': 'Консультация 45 минут · €149',
      'Explore Routes': 'Смотреть маршруты',
      'Not a standard tour. A smarter China route.': 'Не стандартный тур. А умный маршрут по Китаю.',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Мы помогаем заранее разобраться с оплатой, маршрутом, отелями, транспортом, локальной поддержкой и необычными впечатлениями.',
      'China Consultation': 'Консультация по Китаю',
      '45 minutes · €149': '45 минут · €149',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Логика маршрута, приложения, оплата, отели, транспорт и вопросы первой поездки.',
      'Pay with Revolut': 'Оплатить через Revolut',
      'Years of China experience': 'лет опыта в Китае',
      'Cities explored': 'городов изучено',
      'Languages: EN / RU / ES / PT / CN': 'Языки: EN / RU / ES / PT / CN',
      'Custom routes': 'индивидуальные маршруты',
      'Partners across China': 'партнёры по всему Китаю',
      'Premium experiences': 'премиум-впечатления',
      'Need clarity before booking the full route?': 'Нужна ясность перед бронированием маршрута?',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'Забронируйте 45-минутную консультацию и получите реалистичный план по Китаю: куда ехать, чего избегать, какие приложения подготовить, как думать о транспорте, отелях, оплате и тайминге.',
      'Route review': 'Разбор маршрута',
      'Payments & apps': 'Оплата и приложения',
      'Hotels & transport': 'Отели и транспорт',
      'First-trip strategy': 'Стратегия первой поездки',
      '45 minutes': '45 минут',
      'Online call. Secure payment via Revolut.': 'Онлайн-звонок. Безопасная оплата через Revolut.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'После оплаты напишите нам в WhatsApp, чтобы выбрать время звонка.',
      'Swipe sideways': 'Листайте в сторону',
      'Ready-Made Trip Ideas': 'Готовые идеи маршрутов',
      'Start with a route. Then we customize it.': 'Начните с маршрута. Потом мы адаптируем его под вас.',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': 'Это примеры маршрутов. Даты, отели, транспорт, гиды и впечатления настраиваются под ваш стиль путешествия.',
      'View popular places': 'Популярные места',
      'First Time in China': 'Первый раз в Китае',
      'Avatar Mountains Route': 'Маршрут “Горы Аватара”',
      'China Nature Route': 'Природный Китай',
      'Golden Triangle': 'Золотой треугольник',
      'Historical China': 'Исторический Китай',
      'Sacred Mountains Route': 'Священные горы',
      'Cyber China Route': 'Кибер-Китай',
      'Xinjiang Road Trip': 'Роуд-трип по Синьцзяну',
      'Inner Mongolia Escape': 'Побег во Внутреннюю Монголию',
      'Content Creator Route': 'Маршрут для контента',
      'Gastro Tour': 'Гастро-тур',
      'Yunnan Explorer Route': 'Исследование Юньнани',
      'China Bucket List Experiences': 'Впечатления мечты в Китае',
      'Not just places. Experiences people remember.': 'Не просто места. А впечатления, которые запоминаются.',
      'Fly Above the Avatar Mountains': 'Полет над горами Аватара',
      'Waterfall Cliff Hotels': 'Отели у скал и водопадов',
      'Ride Across the Grasslands': 'Поездка по степям',
      'Yangshuo River Experience': 'Река Яншо',
      'Chongqing After Dark': 'Чунцин после заката',
      'Why Chieasy Travel?': 'Почему Chieasy Travel?',
      'Standard tours are built for everyone. Our routes are built for you.': 'Стандартные туры делают для всех. Наши маршруты — под вас.',
      'Standard Tour': 'Стандартный тур',
      'Chieasy Travel': 'Chieasy Travel',
      'Fixed itinerary': 'Фиксированная программа',
      'Custom route': 'Индивидуальный маршрут',
      'Tourist hotspots': 'Туристические места',
      'Hidden gems + essentials': 'Скрытые места + главное',
      'Large groups': 'Большие группы',
      'Private planning': 'Частное планирование',
      'Generic guide': 'Обычный гид',
      'China specialist network': 'Сеть специалистов по Китаю',
      'Limited flexibility': 'Мало гибкости',
      'Trip designed around you': 'Поездка вокруг ваших интересов',
      'How It Works': 'Как это работает',
      'A simple process before you arrive in China.': 'Простой процесс до вашего приезда в Китай.',
      'Tell Us About Your Trip': 'Расскажите о поездке',
      'Get Your Custom Route': 'Получите маршрут',
      'Arrange The Details': 'Настроим детали',
      'Travel With Support': 'Путешествуйте с поддержкой',
      'Premium Add-ons': 'Премиум-опции',
      'Turn the route into a special experience.': 'Превратите маршрут в особенное путешествие.',
      'Request premium options': 'Запросить премиум-опции',
      'Helicopter Flights': 'Полёты на вертолёте',
      'Private Boats': 'Частные лодки',
      'Event Logistics': 'Организация мероприятий',
      'Signature Stays': 'Особенные отели',
      'Founder Story': 'История основателя',
      'Built by someone who made China his everyday life.': 'Создано человеком, для которого Китай стал повседневной жизнью.',
      'Chieasy Online School': 'Chieasy Online School',
      'Visit Chieasy School': 'Перейти в Chieasy School',
      'Featured Video': 'Видео',
      'Start here before visiting China.': 'Начните здесь перед поездкой в Китай.',
      'Open on YouTube': 'Открыть на YouTube',
      'Traveler Notes': 'Запросы путешественников',
      'What people usually need help with.': 'С чем обычно нужна помощь.',
      'Plan Your Trip': 'Спланировать поездку',
      'Build your China route.': 'Соберите свой маршрут по Китаю.',
      'Who is traveling?': 'Кто путешествует?',
      'Step 1 of 5': 'Шаг 1 из 5',
      'Step 2 of 5': 'Шаг 2 из 5',
      'Step 3 of 5': 'Шаг 3 из 5',
      'Step 4 of 5': 'Шаг 4 из 5',
      'Step 5 of 5': 'Шаг 5 из 5',
      'Solo': 'Один',
      'Couple': 'Пара',
      'Family': 'Семья',
      'Group': 'Группа',
      'What kind of China do you want?': 'Какой Китай вы хотите увидеть?',
      'Nature': 'Природа',
      'Megacities': 'Мегаполисы',
      'Food': 'Еда',
      'Business': 'Бизнес',
      'Photography': 'Фото',
      'Adventure': 'Приключения',
      'Dates and cities': 'Даты и города',
      'Travel dates': 'Даты поездки',
      'Cities or regions': 'Города или регионы',
      'Budget and format': 'Бюджет и формат',
      'Approximate budget': 'Примерный бюджет',
      'Select': 'Выбрать',
      'Message': 'Сообщение',
      'How can we contact you?': 'Как с вами связаться?',
      'Name': 'Имя',
      'Email': 'Email',
      'WhatsApp / Telegram': 'WhatsApp / Telegram',
      'Back': 'Назад',
      'Next': 'Далее',
      'Send Trip Request': 'Отправить заявку',
      'Before You Visit China': 'Перед поездкой в Китай',
      'Things most travelers ask before visiting China': 'Что чаще всего спрашивают перед поездкой в Китай',
      'Do I need a visa for China?': 'Нужна ли мне виза в Китай?',
      'Ready to plan China properly?': 'Готовы спланировать Китай правильно?',
      'Start Trip Quiz': 'Начать анкету',
      'WhatsApp Our Team': 'Написать в WhatsApp',
      '€149 Call': 'Звонок €149',
      'Plan Trip': 'План поездки',
      'Privacy': 'Приватность',
      'Terms': 'Условия',
      'Chieasy School': 'Chieasy School',
      'Cookie notice': 'Cookie',
      'Accept': 'Принять',
      'Privacy Policy': 'Политика приватности'
    },
    es: {
      'Home': 'Inicio',
      'Consultation': 'Consulta',
      'Routes': 'Rutas',
      'Experiences': 'Experiencias',
      'Video': 'Video',
      'FAQ': 'FAQ',
      'Custom China Travel Company': 'Viajes personalizados por China',
      'Discover the China Most Travelers Never See': 'Descubre la China que la mayoría de viajeros no ve',
      'Custom routes, private tours and premium experiences across China — built by a team founded on 12 years of real China experience.': 'Rutas personalizadas, tours privados y experiencias premium por China, creadas por un equipo con 12 años de experiencia real en el país.',
      'Plan My Trip': 'Planificar mi viaje',
      '45-min Consultation · €149': 'Consulta 45 min · €149',
      'Explore Routes': 'Ver rutas',
      'Not a standard tour. A smarter China route.': 'No es un tour estándar. Es una ruta más inteligente por China.',
      'Pay with Revolut': 'Pagar con Revolut',
      'Years of China experience': 'años de experiencia en China',
      'Cities explored': 'ciudades exploradas',
      'Languages: EN / RU / ES / PT / CN': 'Idiomas: EN / RU / ES / PT / CN',
      'Custom routes': 'rutas personalizadas',
      'Partners across China': 'socios locales en China',
      'Premium experiences': 'experiencias premium',
      'Need clarity before booking the full route?': '¿Necesitas claridad antes de reservar toda la ruta?',
      'Route review': 'Revisión de ruta',
      'Payments & apps': 'Pagos y apps',
      'Hotels & transport': 'Hoteles y transporte',
      'First-trip strategy': 'Estrategia para el primer viaje',
      'Ready-Made Trip Ideas': 'Ideas de rutas listas',
      'Start with a route. Then we customize it.': 'Empieza con una ruta. Luego la adaptamos a ti.',
      'View popular places': 'Ver lugares populares',
      'First Time in China': 'Primera vez en China',
      'Avatar Mountains Route': 'Ruta Montañas Avatar',
      'China Nature Route': 'Ruta de naturaleza en China',
      'Golden Triangle': 'Triángulo Dorado',
      'Historical China': 'China histórica',
      'Sacred Mountains Route': 'Ruta de montañas sagradas',
      'Cyber China Route': 'Ruta Cyber China',
      'Xinjiang Road Trip': 'Road trip por Xinjiang',
      'Inner Mongolia Escape': 'Escapada a Mongolia Interior',
      'Content Creator Route': 'Ruta para creadores',
      'Gastro Tour': 'Tour gastronómico',
      'Yunnan Explorer Route': 'Ruta explorador de Yunnan',
      'China Bucket List Experiences': 'Experiencias imprescindibles en China',
      'Not just places. Experiences people remember.': 'No solo lugares. Experiencias que se recuerdan.',
      'Why Chieasy Travel?': '¿Por qué Chieasy Travel?',
      'Standard tours are built for everyone. Our routes are built for you.': 'Los tours estándar son para todos. Nuestras rutas son para ti.',
      'How It Works': 'Cómo funciona',
      'A simple process before you arrive in China.': 'Un proceso simple antes de llegar a China.',
      'Premium Add-ons': 'Opciones premium',
      'Turn the route into a special experience.': 'Convierte la ruta en una experiencia especial.',
      'Request premium options': 'Solicitar opciones premium',
      'Helicopter Flights': 'Vuelos en helicóptero',
      'Private Boats': 'Barcos privados',
      'Event Logistics': 'Logística de eventos',
      'Signature Stays': 'Estancias especiales',
      'Founder Story': 'Historia del fundador',
      'Built by someone who made China his everyday life.': 'Creado por alguien que convirtió China en su vida diaria.',
      'Chieasy Online School': 'Chieasy Online School',
      'Visit Chieasy School': 'Visitar Chieasy School',
      'Featured Video': 'Video destacado',
      'Start here before visiting China.': 'Empieza aquí antes de visitar China.',
      'Traveler Notes': 'Notas de viajeros',
      'What people usually need help with.': 'Con qué suelen necesitar ayuda.',
      'Plan Your Trip': 'Planifica tu viaje',
      'Build your China route.': 'Crea tu ruta por China.',
      'Who is traveling?': '¿Quién viaja?',
      'Step 1 of 5': 'Paso 1 de 5',
      'Step 2 of 5': 'Paso 2 de 5',
      'Step 3 of 5': 'Paso 3 de 5',
      'Step 4 of 5': 'Paso 4 de 5',
      'Step 5 of 5': 'Paso 5 de 5',
      'Solo': 'Solo',
      'Couple': 'Pareja',
      'Family': 'Familia',
      'Group': 'Grupo',
      'What kind of China do you want?': '¿Qué tipo de China quieres ver?',
      'Nature': 'Naturaleza',
      'Megacities': 'Megaciudades',
      'Food': 'Comida',
      'Business': 'Negocios',
      'Photography': 'Fotografía',
      'Adventure': 'Aventura',
      'Dates and cities': 'Fechas y ciudades',
      'Travel dates': 'Fechas de viaje',
      'Cities or regions': 'Ciudades o regiones',
      'Budget and format': 'Presupuesto y formato',
      'Approximate budget': 'Presupuesto aproximado',
      'Select': 'Seleccionar',
      'Message': 'Mensaje',
      'How can we contact you?': '¿Cómo podemos contactarte?',
      'Back': 'Atrás',
      'Next': 'Siguiente',
      'Send Trip Request': 'Enviar solicitud',
      'Before You Visit China': 'Antes de visitar China',
      'Ready to plan China properly?': '¿Listo para planificar China bien?',
      'Start Trip Quiz': 'Empezar formulario',
      'WhatsApp Our Team': 'WhatsApp',
      '€149 Call': 'Llamada €149',
      'Plan Trip': 'Planificar',
      'Privacy': 'Privacidad',
      'Terms': 'Términos',
      'Accept': 'Aceptar'
    },
    pt: {
      'Home': 'Início',
      'Consultation': 'Consultoria',
      'Routes': 'Roteiros',
      'Experiences': 'Experiências',
      'Video': 'Vídeo',
      'FAQ': 'FAQ',
      'Custom China Travel Company': 'Viagens personalizadas pela China',
      'Discover the China Most Travelers Never See': 'Descubra a China que a maioria dos viajantes não vê',
      'Custom routes, private tours and premium experiences across China — built by a team founded on 12 years of real China experience.': 'Roteiros personalizados, tours privados e experiências premium pela China, criados por uma equipe com 12 anos de experiência real no país.',
      'Plan My Trip': 'Planejar minha viagem',
      '45-min Consultation · €149': 'Consultoria 45 min · €149',
      'Explore Routes': 'Ver roteiros',
      'Not a standard tour. A smarter China route.': 'Não é um tour padrão. É um roteiro mais inteligente pela China.',
      'Pay with Revolut': 'Pagar com Revolut',
      'Years of China experience': 'anos de experiência na China',
      'Cities explored': 'cidades exploradas',
      'Languages: EN / RU / ES / PT / CN': 'Idiomas: EN / RU / ES / PT / CN',
      'Custom routes': 'roteiros personalizados',
      'Partners across China': 'parceiros pela China',
      'Premium experiences': 'experiências premium',
      'Need clarity before booking the full route?': 'Precisa de clareza antes de reservar o roteiro completo?',
      'Route review': 'Revisão do roteiro',
      'Payments & apps': 'Pagamentos e apps',
      'Hotels & transport': 'Hotéis e transporte',
      'First-trip strategy': 'Estratégia para a primeira viagem',
      'Ready-Made Trip Ideas': 'Ideias de roteiros',
      'Start with a route. Then we customize it.': 'Comece com um roteiro. Depois adaptamos para você.',
      'View popular places': 'Ver lugares populares',
      'First Time in China': 'Primeira vez na China',
      'Avatar Mountains Route': 'Roteiro Montanhas Avatar',
      'China Nature Route': 'Roteiro natureza na China',
      'Golden Triangle': 'Triângulo Dourado',
      'Historical China': 'China histórica',
      'Sacred Mountains Route': 'Roteiro montanhas sagradas',
      'Cyber China Route': 'Roteiro Cyber China',
      'Xinjiang Road Trip': 'Road trip por Xinjiang',
      'Inner Mongolia Escape': 'Escapada para Mongólia Interior',
      'Content Creator Route': 'Roteiro para criadores',
      'Gastro Tour': 'Tour gastronômico',
      'Yunnan Explorer Route': 'Roteiro explorador de Yunnan',
      'China Bucket List Experiences': 'Experiências imperdíveis na China',
      'Not just places. Experiences people remember.': 'Não apenas lugares. Experiências que ficam na memória.',
      'Why Chieasy Travel?': 'Por que Chieasy Travel?',
      'Standard tours are built for everyone. Our routes are built for you.': 'Tours padrão são feitos para todos. Nossos roteiros são feitos para você.',
      'How It Works': 'Como funciona',
      'A simple process before you arrive in China.': 'Um processo simples antes de você chegar à China.',
      'Premium Add-ons': 'Opções premium',
      'Turn the route into a special experience.': 'Transforme o roteiro em uma experiência especial.',
      'Request premium options': 'Solicitar opções premium',
      'Helicopter Flights': 'Voos de helicóptero',
      'Private Boats': 'Barcos privados',
      'Event Logistics': 'Logística de eventos',
      'Signature Stays': 'Estadias especiais',
      'Founder Story': 'História do fundador',
      'Built by someone who made China his everyday life.': 'Criado por alguém que transformou a China em sua vida cotidiana.',
      'Chieasy Online School': 'Chieasy Online School',
      'Visit Chieasy School': 'Visitar Chieasy School',
      'Featured Video': 'Vídeo em destaque',
      'Start here before visiting China.': 'Comece aqui antes de visitar a China.',
      'Traveler Notes': 'Notas de viajantes',
      'What people usually need help with.': 'Com o que as pessoas geralmente precisam de ajuda.',
      'Plan Your Trip': 'Planeje sua viagem',
      'Build your China route.': 'Monte seu roteiro pela China.',
      'Who is traveling?': 'Quem vai viajar?',
      'Step 1 of 5': 'Passo 1 de 5',
      'Step 2 of 5': 'Passo 2 de 5',
      'Step 3 of 5': 'Passo 3 de 5',
      'Step 4 of 5': 'Passo 4 de 5',
      'Step 5 of 5': 'Passo 5 de 5',
      'Solo': 'Sozinho',
      'Couple': 'Casal',
      'Family': 'Família',
      'Group': 'Grupo',
      'What kind of China do you want?': 'Que tipo de China você quer ver?',
      'Nature': 'Natureza',
      'Megacities': 'Megacidades',
      'Food': 'Comida',
      'Business': 'Negócios',
      'Photography': 'Fotografia',
      'Adventure': 'Aventura',
      'Dates and cities': 'Datas e cidades',
      'Travel dates': 'Datas da viagem',
      'Cities or regions': 'Cidades ou regiões',
      'Budget and format': 'Orçamento e formato',
      'Approximate budget': 'Orçamento aproximado',
      'Select': 'Selecionar',
      'Message': 'Mensagem',
      'How can we contact you?': 'Como podemos falar com você?',
      'Back': 'Voltar',
      'Next': 'Próximo',
      'Send Trip Request': 'Enviar pedido',
      'Before You Visit China': 'Antes de visitar a China',
      'Ready to plan China properly?': 'Pronto para planejar a China direito?',
      'Start Trip Quiz': 'Começar formulário',
      'WhatsApp Our Team': 'WhatsApp',
      '€149 Call': 'Chamada €149',
      'Plan Trip': 'Planejar',
      'Privacy': 'Privacidade',
      'Terms': 'Termos',
      'Accept': 'Aceitar'
    },
    cn: {
      'Home': '首页',
      'Consultation': '咨询',
      'Routes': '路线',
      'Experiences': '体验',
      'Video': '视频',
      'FAQ': '常见问题',
      'Custom China Travel Company': '中国定制旅行公司',
      'Discover the China Most Travelers Never See': '发现大多数旅行者看不到的中国',
      'Custom routes, private tours and premium experiences across China — built by a team founded on 12 years of real China experience.': '中国定制路线、私人旅行和高端体验，由拥有 12 年真实中国经验的团队打造。',
      'Plan My Trip': '规划我的旅行',
      '45-min Consultation · €149': '45 分钟咨询 · €149',
      'Explore Routes': '查看路线',
      'Not a standard tour. A smarter China route.': '不是标准跟团游，而是更聪明的中国路线。',
      'Pay with Revolut': '用 Revolut 支付',
      'Years of China experience': '年中国经验',
      'Cities explored': '探索过的城市',
      'Languages: EN / RU / ES / PT / CN': '语言：EN / RU / ES / PT / CN',
      'Custom routes': '定制路线',
      'Partners across China': '中国本地合作伙伴',
      'Premium experiences': '高端体验',
      'Need clarity before booking the full route?': '预订完整路线前需要更清楚的计划？',
      'Route review': '路线评估',
      'Payments & apps': '支付与应用',
      'Hotels & transport': '酒店与交通',
      'First-trip strategy': '首次来华策略',
      'Ready-Made Trip Ideas': '路线灵感',
      'Start with a route. Then we customize it.': '先选择路线，再为你定制。',
      'View popular places': '查看热门地点',
      'First Time in China': '第一次来中国',
      'Avatar Mountains Route': '阿凡达山路线',
      'China Nature Route': '中国自然路线',
      'Golden Triangle': '黄金三角',
      'Historical China': '历史中国',
      'Sacred Mountains Route': '名山路线',
      'Cyber China Route': '赛博中国路线',
      'Xinjiang Road Trip': '新疆自驾路线',
      'Inner Mongolia Escape': '内蒙古之旅',
      'Content Creator Route': '内容创作者路线',
      'Gastro Tour': '美食之旅',
      'Yunnan Explorer Route': '云南探索路线',
      'China Bucket List Experiences': '中国必体验清单',
      'Not just places. Experiences people remember.': '不只是地点，而是值得记住的体验。',
      'Why Chieasy Travel?': '为什么选择 Chieasy Travel？',
      'Standard tours are built for everyone. Our routes are built for you.': '标准旅行适合所有人，我们的路线只为你定制。',
      'How It Works': '流程',
      'A simple process before you arrive in China.': '到达中国前的简单流程。',
      'Premium Add-ons': '高端附加体验',
      'Turn the route into a special experience.': '把路线变成特别体验。',
      'Request premium options': '咨询高端选项',
      'Helicopter Flights': '直升机飞行',
      'Private Boats': '私人船只',
      'Event Logistics': '活动安排',
      'Signature Stays': '特色住宿',
      'Founder Story': '创始人故事',
      'Built by someone who made China his everyday life.': '由真正把中国变成日常生活的人打造。',
      'Chieasy Online School': 'Chieasy 在线学校',
      'Visit Chieasy School': '访问 Chieasy School',
      'Featured Video': '精选视频',
      'Start here before visiting China.': '来中国前先从这里开始。',
      'Traveler Notes': '旅行者需求',
      'What people usually need help with.': '大家通常需要我们帮助的地方。',
      'Plan Your Trip': '规划旅行',
      'Build your China route.': '创建你的中国路线。',
      'Who is traveling?': '谁来旅行？',
      'Step 1 of 5': '第 1 步，共 5 步',
      'Step 2 of 5': '第 2 步，共 5 步',
      'Step 3 of 5': '第 3 步，共 5 步',
      'Step 4 of 5': '第 4 步，共 5 步',
      'Step 5 of 5': '第 5 步，共 5 步',
      'Solo': '单人',
      'Couple': '情侣',
      'Family': '家庭',
      'Group': '团体',
      'What kind of China do you want?': '你想看到什么样的中国？',
      'Nature': '自然',
      'Megacities': '大城市',
      'Food': '美食',
      'Business': '商务',
      'Photography': '摄影',
      'Adventure': '冒险',
      'Dates and cities': '日期和城市',
      'Travel dates': '旅行日期',
      'Cities or regions': '城市或地区',
      'Budget and format': '预算和形式',
      'Approximate budget': '大概预算',
      'Select': '选择',
      'Message': '留言',
      'How can we contact you?': '如何联系你？',
      'Back': '返回',
      'Next': '下一步',
      'Send Trip Request': '发送旅行需求',
      'Before You Visit China': '来中国之前',
      'Ready to plan China properly?': '准备好认真规划中国了吗？',
      'Start Trip Quiz': '开始填写',
      'WhatsApp Our Team': 'WhatsApp 联系我们',
      '€149 Call': '€149 咨询',
      'Plan Trip': '规划旅行',
      'Privacy': '隐私',
      'Terms': '条款',
      'Accept': '接受'
    }
  };

  const EXTRA_TRANSLATIONS = {
    ru: {
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Мы помогаем путешественникам заранее решить вопросы оплаты, маршрута, отелей, транспорта, локальной поддержки и уникальных впечатлений.',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'Забронируйте 45-минутную консультацию и получите реалистичный план по Китаю: куда ехать, чего избегать, какие приложения подготовить, как думать о транспорте, отелях, оплате и тайминге.',
      'Online call. Secure payment via Revolut.': 'Онлайн-звонок. Безопасная оплата через Revolut.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'После оплаты напишите нам в WhatsApp, чтобы выбрать время звонка.',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': 'Это примеры маршрутов. Даты, отели, транспорт, гиды и впечатления адаптируются под ваш стиль путешествия.',
      'Shanghai → Zhangjiajie → Chongqing. A powerful first route mixing modern China, nature and a crazy megacity.': 'Шанхай → Чжанцзяцзе → Чунцин. Сильный первый маршрут: современный Китай, природа и безумный мегаполис.',
      'Zhangjiajie → Tianmen Mountain → Furong. Nature, cliffs, waterfalls and optional helicopter experiences.': 'Чжанцзяцзе → Тяньмэнь → Фужун. Природа, скалы, водопады и опциональные полёты на вертолёте.',
      'Yangshuo → Zhangjiajie → Yunnan. Rivers, karst mountains, ancient towns and dramatic scenery.': 'Яншо → Чжанцзяцзе → Юньнань. Реки, карстовые горы, древние города и драматичные виды.',
      'Hong Kong → Macau → Guangzhou → Shenzhen. South China, skyline, food, business and history.': 'Гонконг → Макао → Гуанчжоу → Шэньчжэнь. Южный Китай, skyline, еда, бизнес и история.',
      'Beijing → Nanjing → Changsha → Xi\'an. Ancient capitals, city walls, temples and big historical questions.': 'Пекин → Нанкин → Чанша → Сиань. Древние столицы, стены, храмы и большая история.',
      'Taishan → Huashan → Hengshan → Songshan. Cliffs, temples, sunrise routes and active China.': 'Тайшань → Хуашань → Хэншань → Суншань. Скалы, храмы, рассветы и активный Китай.',
      'Qingdao → Chongqing → Shenzhen → Hong Kong. Neon cities, layered roads and future-facing China.': 'Циндао → Чунцин → Шэньчжэнь → Гонконг. Неоновые города, многоуровневые дороги и Китай будущего.',
      'Deserts, mountains, bazaars and some of the most spectacular roads in Asia.': 'Пустыни, горы, базары и одни из самых зрелищных дорог Азии.',
      'Grasslands, horses, yurts, sunsets and a completely different side of China.': 'Степи, лошади, юрты, закаты и совершенно другой Китай.',
      'Locations for reels, YouTube, photography, drone-style shots and cinematic travel content.': 'Локации для reels, YouTube, фотографии, дрон-кадров и кинематографичного travel-контента.',
      'Guangzhou → Chengdu → Xi\'an. Cantonese food, Sichuan spice, markets and unexpected flavors.': 'Гуанчжоу → Чэнду → Сиань. Кантонская кухня, сычуаньская острота, рынки и неожиданные вкусы.',
      'Dali → Lijiang → Shangri-La. Ancient towns, snow mountains, lakes, tea culture and slower China.': 'Дали → Лицзян → Шангри-Ла. Древние города, снежные горы, озёра, чай и более медленный Китай.',
      'Zhangjiajie helicopter flights on selected routes.': 'Вертолётные полёты в Чжанцзяцзе на выбранных маршрутах.',
      'Unique stays near waterfalls, cliffs and mountain valleys.': 'Необычные отели рядом с водопадами, скалами и горными долинами.',
      'Inner Mongolia horses, yurts and sunset routes.': 'Лошади, юрты и закатные маршруты во Внутренней Монголии.',
      'Desert highways, mountains and remote landscapes.': 'Пустынные дороги, горы и удалённые пейзажи.',
      'Private boat routes through karst mountains.': 'Частные лодочные маршруты среди карстовых гор.',
      'Cyberpunk viewpoints, neon streets and night photography.': 'Киберпанк-точки, неоновые улицы и ночная съёмка.',
      'Share your dates, travel style, interests and budget.': 'Поделитесь датами, стилем путешествия, интересами и бюджетом.',
      'We suggest cities, transport logic, hotels and experiences.': 'Мы предлагаем города, транспортную логику, отели и впечатления.',
      'Private tours, drivers, tickets, apps, hotels and premium options.': 'Частные туры, водители, билеты, приложения, отели и премиум-опции.',
      'You travel with a clearer route and local help when needed.': 'Вы путешествуете с понятным маршрутом и локальной помощью при необходимости.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Для тех, кто хочет больше, чем sightseeing: виды с воздуха, частные лодки, организация событий, премиум-отели и внимательная локальная поддержка.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Выбранные обзорные полёты над Чжанцзяцзе, горами или драматичными пейзажами, когда доступны.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Река Ли, ночные городские круизы или спокойные природные маршруты вокруг направления.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': 'Частные ужины, бизнес-визиты, съёмки для контента, групповые приезды и координация на месте.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Бутик-отели, виды со скал, премиум-номера и красивые stays по маршруту.',
      'Ilya moved to China in 2015, studied Chinese at Shenzhen University and later completed a bachelor\'s degree in Chinese together with Chinese classmates. Chieasy started from language and culture, then grew into education, admissions support and now custom China travel.': 'Илья переехал в Китай в 2015 году, учил китайский в Shenzhen University, а затем закончил бакалавриат на китайском вместе с китайскими студентами. Chieasy начался с языка и культуры, затем вырос в образование, помощь с поступлением и теперь — в индивидуальные путешествия по Китаю.',
      'Opened in 2020. Students from around the world can join online Chinese, Spanish and English lessons at any time.': 'Открыта в 2020 году. Студенты со всего мира могут в любой момент записаться на онлайн-уроки китайского, испанского и английского.',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': 'Сотрудничество с Ctrip и поездки на travel-конференции помогают нам видеть новые маршруты, отели и форматы впечатлений раньше, чем они становятся очевидными.',
      'Common planning situations we solve before the trip, written as short traveler notes.': 'Типичные ситуации, которые мы решаем до поездки, оформленные как короткие заметки путешественников.',
      'Answer a few questions and our team will understand the best route, format and next step.': 'Ответьте на несколько вопросов, и команда поймёт лучший маршрут, формат и следующий шаг.',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': 'Китаем легко наслаждаться, когда план реалистичен. Эти ответы закрывают самые частые вопросы перед первой поездкой.',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': 'Отправьте даты, города и стиль путешествия. Мы поможем избежать ошибок и собрать лучший маршрут.',
      'We use cookies to improve website performance and understand how visitors use the site.': 'Мы используем cookie, чтобы улучшать работу сайта и понимать, как посетители им пользуются.'
    },
    es: {
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Ayudamos a resolver pagos, rutas, hoteles, transporte, apoyo local y experiencias únicas antes de llegar.',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'Reserva una consulta de 45 minutos y sal con un plan realista para China: dónde ir, qué evitar, qué apps preparar y cómo pensar en transporte, hoteles, pagos y tiempos.',
      'Online call. Secure payment via Revolut.': 'Llamada online. Pago seguro por Revolut.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'Después del pago, escríbenos por WhatsApp para elegir la hora de la llamada.',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': 'Son conceptos de ruta. Fechas, hoteles, transporte, guías y experiencias se ajustan a tu forma de viajar.',
      'Shanghai → Zhangjiajie → Chongqing. A powerful first route mixing modern China, nature and a crazy megacity.': 'Shanghái → Zhangjiajie → Chongqing. Una primera ruta potente con China moderna, naturaleza y una megaciudad increíble.',
      'Zhangjiajie → Tianmen Mountain → Furong. Nature, cliffs, waterfalls and optional helicopter experiences.': 'Zhangjiajie → Tianmen → Furong. Naturaleza, acantilados, cascadas y experiencias opcionales en helicóptero.',
      'Yangshuo → Zhangjiajie → Yunnan. Rivers, karst mountains, ancient towns and dramatic scenery.': 'Yangshuo → Zhangjiajie → Yunnan. Ríos, montañas kársticas, pueblos antiguos y paisajes dramáticos.',
      'Deserts, mountains, bazaars and some of the most spectacular roads in Asia.': 'Desiertos, montañas, bazares y algunas de las carreteras más espectaculares de Asia.',
      'Grasslands, horses, yurts, sunsets and a completely different side of China.': 'Praderas, caballos, yurtas, atardeceres y una China completamente diferente.',
      'Locations for reels, YouTube, photography, drone-style shots and cinematic travel content.': 'Lugares para reels, YouTube, fotografía, tomas tipo dron y contenido de viaje cinematográfico.',
      'Zhangjiajie helicopter flights on selected routes.': 'Vuelos en helicóptero en Zhangjiajie en rutas seleccionadas.',
      'Unique stays near waterfalls, cliffs and mountain valleys.': 'Estancias únicas cerca de cascadas, acantilados y valles de montaña.',
      'Private boat routes through karst mountains.': 'Rutas privadas en barco entre montañas kársticas.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Para viajeros que quieren más que visitas: vistas aéreas, barcos privados, logística de eventos, estancias premium y apoyo local cercano.',
      'Ilya moved to China in 2015, studied Chinese at Shenzhen University and later completed a bachelor\'s degree in Chinese together with Chinese classmates. Chieasy started from language and culture, then grew into education, admissions support and now custom China travel.': 'Ilya se mudó a China en 2015, estudió chino en Shenzhen University y después terminó una licenciatura en chino junto con compañeros chinos. Chieasy empezó con idioma y cultura, creció hacia educación, apoyo para admisiones y ahora viajes personalizados por China.',
      'Opened in 2020. Students from around the world can join online Chinese, Spanish and English lessons at any time.': 'Abierta en 2020. Estudiantes de todo el mundo pueden empezar clases online de chino, español e inglés en cualquier momento.',
      'Common planning situations we solve before the trip, written as short traveler notes.': 'Situaciones comunes que resolvemos antes del viaje, escritas como notas breves de viajeros.',
      'Answer a few questions and our team will understand the best route, format and next step.': 'Responde unas preguntas y nuestro equipo entenderá la mejor ruta, formato y siguiente paso.',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': 'China se disfruta mucho más cuando la planificación es realista. Estas respuestas cubren las dudas más comunes antes del primer viaje.',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': 'Envía tus fechas, ciudades y estilo de viaje. Te ayudaremos a evitar errores y construir una mejor ruta.',
      'We use cookies to improve website performance and understand how visitors use the site.': 'Usamos cookies para mejorar el rendimiento del sitio y entender cómo lo usan los visitantes.'
    },
    pt: {
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Ajudamos viajantes a resolver pagamentos, roteiros, hotéis, transporte, apoio local e experiências únicas antes da chegada.',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'Reserve uma consultoria de 45 minutos e saia com um plano realista para a China: onde ir, o que evitar, quais apps preparar e como pensar em transporte, hotéis, pagamentos e timing.',
      'Online call. Secure payment via Revolut.': 'Chamada online. Pagamento seguro via Revolut.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'Depois do pagamento, envie mensagem no WhatsApp para escolher o horário da chamada.',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': 'São ideias de roteiro. Datas, hotéis, transporte, guias e experiências são ajustados ao seu estilo de viagem.',
      'Shanghai → Zhangjiajie → Chongqing. A powerful first route mixing modern China, nature and a crazy megacity.': 'Xangai → Zhangjiajie → Chongqing. Uma primeira rota forte com China moderna, natureza e uma megacidade intensa.',
      'Zhangjiajie → Tianmen Mountain → Furong. Nature, cliffs, waterfalls and optional helicopter experiences.': 'Zhangjiajie → Tianmen → Furong. Natureza, penhascos, cachoeiras e experiências opcionais de helicóptero.',
      'Yangshuo → Zhangjiajie → Yunnan. Rivers, karst mountains, ancient towns and dramatic scenery.': 'Yangshuo → Zhangjiajie → Yunnan. Rios, montanhas cársticas, vilas antigas e cenários dramáticos.',
      'Deserts, mountains, bazaars and some of the most spectacular roads in Asia.': 'Desertos, montanhas, bazares e algumas das estradas mais espetaculares da Ásia.',
      'Grasslands, horses, yurts, sunsets and a completely different side of China.': 'Campos, cavalos, yurts, pores do sol e um lado totalmente diferente da China.',
      'Locations for reels, YouTube, photography, drone-style shots and cinematic travel content.': 'Locais para reels, YouTube, fotografia, cenas estilo drone e conteúdo de viagem cinematográfico.',
      'Zhangjiajie helicopter flights on selected routes.': 'Voos de helicóptero em Zhangjiajie em rotas selecionadas.',
      'Unique stays near waterfalls, cliffs and mountain valleys.': 'Estadias únicas perto de cachoeiras, penhascos e vales de montanha.',
      'Private boat routes through karst mountains.': 'Rotas privadas de barco entre montanhas cársticas.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Para viajantes que querem mais que turismo: vistas aéreas, barcos privados, logística de eventos, estadias premium e apoio local próximo.',
      'Ilya moved to China in 2015, studied Chinese at Shenzhen University and later completed a bachelor\'s degree in Chinese together with Chinese classmates. Chieasy started from language and culture, then grew into education, admissions support and now custom China travel.': 'Ilya mudou-se para a China em 2015, estudou chinês na Shenzhen University e depois concluiu uma graduação em chinês junto com colegas chineses. A Chieasy começou com idioma e cultura, cresceu para educação, apoio em admissões e agora viagens personalizadas pela China.',
      'Opened in 2020. Students from around the world can join online Chinese, Spanish and English lessons at any time.': 'Aberta em 2020. Estudantes do mundo todo podem entrar em aulas online de chinês, espanhol e inglês a qualquer momento.',
      'Common planning situations we solve before the trip, written as short traveler notes.': 'Situações comuns que resolvemos antes da viagem, escritas como notas curtas de viajantes.',
      'Answer a few questions and our team will understand the best route, format and next step.': 'Responda algumas perguntas e nossa equipe entenderá o melhor roteiro, formato e próximo passo.',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': 'A China é muito melhor quando o planejamento é realista. Estas respostas cobrem as dúvidas mais comuns antes da primeira viagem.',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': 'Envie suas datas, cidades e estilo de viagem. Vamos ajudar a evitar erros e criar um roteiro melhor.',
      'We use cookies to improve website performance and understand how visitors use the site.': 'Usamos cookies para melhorar o desempenho do site e entender como os visitantes o utilizam.'
    },
    cn: {
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': '我们帮助旅行者在出发前解决支付、路线、酒店、交通、本地支持和独特体验等问题。',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': '预订 45 分钟专注咨询，获得一份现实可行的中国旅行计划：去哪里、避开什么、准备哪些应用，以及如何安排交通、酒店、支付和时间。',
      'Online call. Secure payment via Revolut.': '线上通话。通过 Revolut 安全支付。',
      'After payment, message us on WhatsApp to choose a time for the call.': '付款后请在 WhatsApp 联系我们选择通话时间。',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': '这些是路线示例。日期、酒店、交通、导游和体验都会根据你的旅行风格调整。',
      'Shanghai → Zhangjiajie → Chongqing. A powerful first route mixing modern China, nature and a crazy megacity.': '上海 → 张家界 → 重庆。第一次来中国的强路线：现代城市、自然景观和震撼山城。',
      'Zhangjiajie → Tianmen Mountain → Furong. Nature, cliffs, waterfalls and optional helicopter experiences.': '张家界 → 天门山 → 芙蓉镇。自然、悬崖、瀑布和可选直升机体验。',
      'Yangshuo → Zhangjiajie → Yunnan. Rivers, karst mountains, ancient towns and dramatic scenery.': '阳朔 → 张家界 → 云南。河流、喀斯特山水、古镇和震撼风景。',
      'Deserts, mountains, bazaars and some of the most spectacular roads in Asia.': '沙漠、雪山、巴扎，以及亚洲最壮观的道路之一。',
      'Grasslands, horses, yurts, sunsets and a completely different side of China.': '草原、马、蒙古包、日落，以及完全不同的一面中国。',
      'Locations for reels, YouTube, photography, drone-style shots and cinematic travel content.': '适合 reels、YouTube、摄影、航拍感镜头和电影感旅行内容的地点。',
      'Zhangjiajie helicopter flights on selected routes.': '张家界指定路线直升机飞行体验。',
      'Unique stays near waterfalls, cliffs and mountain valleys.': '瀑布、悬崖和山谷附近的特色住宿。',
      'Private boat routes through karst mountains.': '穿行喀斯特山水的私人船只路线。',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': '适合想要更多体验的旅行者：空中视角、私人船只、活动安排、高端住宿和细致本地支持。',
      'Ilya moved to China in 2015, studied Chinese at Shenzhen University and later completed a bachelor\'s degree in Chinese together with Chinese classmates. Chieasy started from language and culture, then grew into education, admissions support and now custom China travel.': 'Ilya 于 2015 年搬到中国，在深圳大学学习中文，之后和中国同学一起用中文完成本科。Chieasy 从语言和文化开始，逐渐发展到教育、留学申请支持，现在也提供中国定制旅行。',
      'Opened in 2020. Students from around the world can join online Chinese, Spanish and English lessons at any time.': '2020 年创立。来自世界各地的学生可以随时加入线上中文、西班牙语和英语课程。',
      'Common planning situations we solve before the trip, written as short traveler notes.': '这些是我们在旅行前经常帮助解决的问题，以旅行者笔记的形式呈现。',
      'Answer a few questions and our team will understand the best route, format and next step.': '回答几个问题，我们的团队就能判断最适合你的路线、形式和下一步。',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': '当计划足够现实，中国会更好玩。这里回答第一次来中国前最常见的问题。',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': '发送你的日期、城市和旅行风格，我们会帮你避免错误并打造更好的路线。',
      'We use cookies to improve website performance and understand how visitors use the site.': '我们使用 cookie 来提升网站表现并了解访客如何使用网站。'
    }
  };

  Object.keys(EXTRA_TRANSLATIONS).forEach(lang => {
    Object.assign(TRANSLATIONS[lang], EXTRA_TRANSLATIONS[lang]);
  });

  const PLACEHOLDER_TRANSLATIONS = {
    ru: {
      'Month / exact dates': 'Месяц / точные даты',
      'Shenzhen, Zhangjiajie, Yunnan...': 'Шэньчжэнь, Чжанцзяцзе, Юньнань...',
      'Tell us what matters most: comfort, photos, nature, business, premium experiences...': 'Расскажите, что важнее всего: комфорт, фото, природа, бизнес, премиум-впечатления...',
      '+1..., @username...': '+7..., @username...'
    },
    es: {
      'Month / exact dates': 'Mes / fechas exactas',
      'Shenzhen, Zhangjiajie, Yunnan...': 'Shenzhen, Zhangjiajie, Yunnan...',
      'Tell us what matters most: comfort, photos, nature, business, premium experiences...': 'Cuéntanos qué importa más: comodidad, fotos, naturaleza, negocios, experiencias premium...',
      '+1..., @username...': '+34..., @usuario...'
    },
    pt: {
      'Month / exact dates': 'Mês / datas exatas',
      'Shenzhen, Zhangjiajie, Yunnan...': 'Shenzhen, Zhangjiajie, Yunnan...',
      'Tell us what matters most: comfort, photos, nature, business, premium experiences...': 'Diga o que importa mais: conforto, fotos, natureza, negócios, experiências premium...',
      '+1..., @username...': '+351..., @usuario...'
    },
    cn: {
      'Month / exact dates': '月份 / 具体日期',
      'Shenzhen, Zhangjiajie, Yunnan...': '深圳、张家界、云南...',
      'Tell us what matters most: comfort, photos, nature, business, premium experiences...': '告诉我们你最看重什么：舒适、拍摄、自然、商务、高端体验...',
      '+1..., @username...': '+86..., @用户名...'
    }
  };

  const originalTextNodes = new WeakMap();
  function shouldSkipTranslationNode(node) {
    const parent = node.parentElement;
    return !parent || parent.closest('script, style, noscript, .lang-switch');
  }

  function translateString(original, lang) {
    if (lang === 'en') return original;
    return TRANSLATIONS[lang]?.[original] || original;
  }

  function applyLanguage(lang) {
    const activeLang = META_TRANSLATIONS[lang] ? lang : 'en';
    localStorage.setItem('chieasyLanguage', activeLang);
    document.documentElement.lang = activeLang === 'cn' ? 'zh-CN' : activeLang;
    document.title = META_TRANSLATIONS[activeLang].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', META_TRANSLATIONS[activeLang].description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', META_TRANSLATIONS[activeLang].title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', META_TRANSLATIONS[activeLang].description);

    document.querySelectorAll('.lang-switch button').forEach(button => {
      button.classList.toggle('active', button.dataset.lang === activeLang);
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (shouldSkipTranslationNode(node)) return;
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
      const original = originalTextNodes.get(node);
      const trimmed = original.trim();
      if (!trimmed) return;
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leading}${translateString(trimmed, activeLang)}${trailing}`;
    });

    document.querySelectorAll('[placeholder]').forEach(element => {
      if (!element.dataset.originalPlaceholder) element.dataset.originalPlaceholder = element.getAttribute('placeholder');
      const original = element.dataset.originalPlaceholder;
      element.setAttribute('placeholder', activeLang === 'en' ? original : PLACEHOLDER_TRANSLATIONS[activeLang]?.[original] || original);
    });
  }

  document.querySelectorAll('.lang-switch button').forEach(button => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.lang);
      closeRouteModal();
    });
  });

  const savedLanguage = localStorage.getItem('chieasyLanguage') || 'en';
  applyLanguage(savedLanguage);

  const routeDetails = {
    'first-time': {
      title: 'First Time in China',
      text: 'A strong first route with classic skyline views, cinematic nature and one of China’s most unusual megacities.',
      places: [
        ['Shanghai', 'Gateway City', 'The Bund, Lujiazui skyline, French Concession, food streets and first-arrival comfort.'],
        ['Zhangjiajie', 'Nature Icon', 'Avatar-style pillars, Tianmen Mountain, glass walkways and dramatic viewpoints.'],
        ['Chongqing', 'Megacity', 'Neon streets, mountain roads, hotpot, river views and cyberpunk night routes.'],
        ['Furong Ancient Town', 'Add-on', 'Waterfall old town near Zhangjiajie, good for photos and a slower evening.'],
        ['Tianmen Mountain', 'Add-on', 'Cable car, cliff roads, glass path and one of the area’s most famous mountain views.'],
        ['Shanghai Food Route', 'Add-on', 'Local noodles, dumplings, street snacks and modern dining districts.']
      ]
    },
    avatar: {
      title: 'Avatar Mountains Route',
      text: 'For travelers who want the most dramatic mountain landscapes and a compact route around Zhangjiajie.',
      places: [
        ['Zhangjiajie National Forest Park', 'Must-see', 'Tall sandstone pillars, viewpoints, forest trails and the classic Avatar scenery.'],
        ['Tianmen Mountain', 'Must-see', 'Long cable car, cliff road, glass walkway and Heaven’s Gate mountain arch.'],
        ['Furong Ancient Town', 'Old Town', 'Traditional town built around a waterfall, great for evening lights and photos.'],
        ['Baofeng Lake', 'Scenic Stop', 'Calm lake scenery between cliffs, easy to add into a softer day.'],
        ['Zhangjiajie Grand Canyon', 'Adventure', 'Glass bridge, canyon walks and high-impact viewpoints.'],
        ['Helicopter Experience', 'Premium', 'Selected aerial routes above the mountain landscape when available.']
      ]
    },
    nature: {
      title: 'China Nature Route',
      text: 'A route for rivers, karst mountains, ancient towns and big landscapes without focusing only on cities.',
      places: [
        ['Yangshuo', 'Karst Landscape', 'Li River views, bamboo rafts, cycling routes and mountain sunsets.'],
        ['Guilin', 'Gateway', 'Reed Flute Cave, river cruises and easy access to Yangshuo.'],
        ['Zhangjiajie', 'Dramatic Nature', 'Avatar mountains, cliff walks and forest viewpoints.'],
        ['Dali', 'Yunnan', 'Old town, Erhai Lake, mountain views and relaxed cafe culture.'],
        ['Lijiang', 'Yunnan', 'Ancient town, Naxi culture and access to snow mountain areas.'],
        ['Tiger Leaping Gorge', 'Yunnan', 'One of China’s most famous hiking landscapes.']
      ]
    },
    'golden-triangle': {
      title: 'Golden Triangle',
      text: 'South China at full intensity: Hong Kong, Macau, Guangzhou and Shenzhen in one route with skyline, food, colonial history and business energy.',
      places: [
        ['Hong Kong', 'Skyline', 'Victoria Peak, harbor views, dense streets, island life and one of Asia’s strongest city panoramas.'],
        ['Macau', 'Heritage', 'Portuguese architecture, casino lights, UNESCO streets and a completely different atmosphere next to mainland China.'],
        ['Guangzhou', 'Canton', 'Canton Tower, dim sum, old trading history, markets and the gateway of South China.'],
        ['Shenzhen', 'Innovation', 'Tech districts, sea views, creative parks and the speed of modern China.'],
        ['Sun Yat-sen Memorial Areas', 'History', 'Important southern Chinese history and cultural stops around Guangdong.'],
        ['Light Shows & Theme Parks', 'Add-on', 'Evening skyline routes, Disneyland or theme parks depending on the traveler’s style.']
      ]
    },
    historical: {
      title: 'Historical China',
      text: 'A route through former capitals and symbolic cities: imperial power, ancient walls, temples, revolutionary history and old China.',
      places: [
        ['Beijing', 'Imperial China', 'Forbidden City, hutongs, Temple of Heaven, Summer Palace and Great Wall options.'],
        ['Xi’an', 'Ancient Capital', 'Terracotta Warriors, city wall, Muslim Quarter and Silk Road history.'],
        ['Nanjing', 'Old Capital', 'Sun Yat-sen Mausoleum, Confucius Temple, old city gates and serious modern history.'],
        ['Changsha', 'Mao History', 'A cultural and entertainment center with links to Mao Zedong and Hunan identity.'],
        ['Longmen or Luoyang Add-on', 'Ancient Art', 'Buddhist grottoes and another layer of old capital history.'],
        ['Great Wall Add-on', 'Icon', 'The clearest symbol of historic China, best added from Beijing.']
      ]
    },
    'sacred-mountains': {
      title: 'Sacred Mountains Route',
      text: 'An active route inspired by China’s sacred peaks: temples, cliff paths, sunrise climbs and dramatic mountain landscapes.',
      places: [
        ['Taishan', 'Sunrise Mountain', 'A classic pilgrimage mountain associated with renewal, sunrise and imperial history.'],
        ['Huashan', 'Cliff Route', 'One of China’s most dramatic mountains, famous for steep paths and high-altitude views.'],
        ['Hengshan South', 'Temple Mountain', 'A Buddhist and Daoist mountain area in Hunan with many temples and forest scenery.'],
        ['Hengshan North', 'Hanging Temple', 'A mountain route known for the cliffside Xuankong Temple.'],
        ['Songshan', 'Shaolin Area', 'Shaolin Temple, martial arts culture and central sacred mountain history.'],
        ['Zhangjiajie or Guilin Add-on', 'Scenic Extension', 'Extra landscapes for travelers who want mountains without only hard climbs.']
      ]
    },
    megacities: {
      title: 'Cyber China Route',
      text: 'These cities turn into a huge light show at night: neon bridges, layered streets, futuristic skylines and urban China at full volume.',
      places: [
        ['Chongqing', 'Cyberpunk City', 'Layered roads, neon buildings, hotpot and river viewpoints.'],
        ['Qingdao', 'Coastal City', 'Sea views, German-era streets, night skyline and a softer cyber-city contrast.'],
        ['Shenzhen', 'Future City', 'Tech districts, sea views, creative parks and modern architecture.'],
        ['Hong Kong', 'Vertical City', 'Dense skyline, harbor lights, escalators, markets and night photography.'],
        ['Guangzhou', 'Pearl River', 'Canton Tower, river lights, food districts and modern southern China.'],
        ['Shanghai Add-on', 'Classic Skyline', 'The Bund, Lujiazui and the easiest gateway into urban China.']
      ]
    },
    xinjiang: {
      title: 'Xinjiang Road Trip',
      text: 'A long-distance route with mountains, lakes, deserts, bazaars and Central Asian atmosphere.',
      places: [
        ['Urumqi', 'Gateway', 'Arrival city, markets and starting point for wider Xinjiang travel.'],
        ['Kashgar', 'Culture', 'Old city atmosphere, bazaars, food and Silk Road history.'],
        ['Kanas Lake', 'Nature', 'Alpine lake landscapes, forests and one of Xinjiang’s most famous scenic areas.'],
        ['Sayram Lake', 'Scenic Drive', 'Blue water, open roads and mountain-backed views.'],
        ['Tianshan Mountains', 'Landscape', 'High mountain scenery, grasslands and dramatic road sections.'],
        ['Turpan', 'Desert Stop', 'Heat, grapes, ancient ruins and desert-edge landscapes.']
      ]
    },
    mongolia: {
      title: 'Inner Mongolia Escape',
      text: 'A softer route for open space, horses, yurts, grasslands and sunsets.',
      places: [
        ['Hohhot', 'Gateway', 'Easy arrival point with temples, food and access to nearby grasslands.'],
        ['Xilamuren Grassland', 'Classic Stop', 'Yurts, riding, open grassland views and evening shows.'],
        ['Hulunbuir', 'Big Landscape', 'Wide grasslands, rivers, forest edges and longer scenic drives.'],
        ['Erguna Wetland', 'Nature', 'Boardwalks, river bends and a different side of northern China.'],
        ['Resonant Sand Bay', 'Desert Add-on', 'Dunes, desert activities and contrast with grassland scenery.'],
        ['Manzhouli', 'Border City', 'Colorful Russian-influenced architecture and border-town atmosphere.']
      ]
    },
    creator: {
      title: 'Content Creator Route',
      text: 'Built around cinematic locations, strong visual contrast, short-form video and flexible shooting time.',
      places: [
        ['Chongqing', 'Neon Visuals', 'Layered streets, metro-through-building shots, hotpot and night scenes.'],
        ['Zhangjiajie', 'Epic Nature', 'Mountain pillars, glass walkways, cliff roads and drone-style compositions.'],
        ['Yangshuo', 'Soft Nature', 'River bends, karst peaks, sunrise viewpoints and countryside scenes.'],
        ['Shanghai', 'Modern Contrast', 'Skyline, street style, cafes, old lanes and high-production city shots.'],
        ['Xinjiang', 'Road Trip Visuals', 'Deserts, mountains, open roads and strong travel-film atmosphere.'],
        ['Fenghuang or Furong', 'Old Towns', 'Lanterns, riverside streets, waterfalls and evening photo routes.']
      ]
    },
    'food-culture': {
      title: 'Gastro Tour',
      text: 'China is not only Peking duck. This route is about regional cuisines, markets, tea houses, surprising dishes and food as culture.',
      places: [
        ['Guangzhou', 'Cantonese Food', 'Dim sum, roast meats, tea restaurants, food markets and old trading streets.'],
        ['Chengdu', 'Spicy Capital', 'Hotpot, teahouses, pandas, Sichuan opera and relaxed local neighborhoods.'],
        ['Xi’an', 'Ancient China', 'Terracotta Warriors, city walls, Muslim Quarter and classic street food.'],
        ['Fujian Add-on', 'Coastal Cuisine', 'Seafood, soups, tea culture and dishes many first-time travelers never try.'],
        ['Hunan Add-on', 'Bold Flavors', 'Spicy, smoky, sour and intense food culture around Changsha.'],
        ['Hangzhou or Suzhou', 'Jiangnan Cuisine', 'Softer eastern flavors, water-town atmosphere and refined local dishes.']
      ]
    },
    yunnan: {
      title: 'Yunnan Explorer Route',
      text: 'A route for ancient towns, snow mountains, minority cultures, tea, lakes and a softer pace of travel.',
      places: [
        ['Dali', 'Lake Town', 'Erhai Lake, old town streets, mountain views, cafes and relaxed Yunnan atmosphere.'],
        ['Lijiang', 'Ancient Town', 'Naxi culture, old canals, evening lights and access to Jade Dragon Snow Mountain.'],
        ['Shangri-La', 'Tibetan Culture', 'Monasteries, highland scenery, old town streets and mountain air.'],
        ['Jade Dragon Snow Mountain', 'Nature Icon', 'Snow peaks, blue valley views and one of Yunnan’s most famous landscapes.'],
        ['Tiger Leaping Gorge', 'Hiking Add-on', 'Dramatic canyon scenery and one of China’s classic trekking routes.'],
        ['Pu’er or Xishuangbanna', 'Tea & Tropical Add-on', 'Tea culture, rainforest feeling, Dai villages and a warmer southern extension.']
      ]
    }
  };

  const routeModal = document.getElementById('routeModal');
  const routeModalTitle = document.getElementById('routeModalTitle');
  const routeModalText = document.getElementById('routeModalText');
  const routePlaceGrid = document.getElementById('routePlaceGrid');

  function closeRouteModal() {
    if (!routeModal) return;
    routeModal.classList.remove('open');
    routeModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function openRouteModal(routeKey) {
    const data = routeDetails[routeKey];
    if (!routeModal || !data) return;
    routeModalTitle.textContent = data.title;
    routeModalText.textContent = data.text;
    routePlaceGrid.innerHTML = data.places.map(([name, tag, description]) => `
      <article class="route-place">
        <span>${tag}</span>
        <h4>${name}</h4>
        <p>${description}</p>
      </article>
    `).join('');
    routeModal.classList.add('open');
    routeModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    applyLanguage(localStorage.getItem('chieasyLanguage') || 'en');
  }

  document.querySelectorAll('.route-card[data-route]').forEach(card => {
    card.setAttribute('aria-label', `Open ${card.querySelector('h3')?.textContent || 'route'} popular places`);
  });

  document.querySelectorAll('.route-grid').forEach(grid => {
    grid.addEventListener('click', event => {
      const card = event.target.closest('.route-card[data-route]');
      if (!card || !grid.contains(card)) return;
      openRouteModal(card.dataset.route);
    });
    grid.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const card = event.target.closest('.route-card[data-route]');
      if (!card || !grid.contains(card)) return;
      event.preventDefault();
      openRouteModal(card.dataset.route);
    });
  });
  document.querySelectorAll('[data-close-route-modal]').forEach(control => {
    control.addEventListener('click', closeRouteModal);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeRouteModal();
  });

  let step = 1;
  const steps = Array.from(document.querySelectorAll('.quiz-step'));
  const prev = document.getElementById('prevStep');
  const next = document.getElementById('nextStep');
  const submit = document.getElementById('submitQuiz');

  function showStep(n) {
    step = Math.max(1, Math.min(n, steps.length));
    steps.forEach(s => s.classList.toggle('active', Number(s.dataset.step) === step));
    if (prev) prev.style.display = step === 1 ? 'none' : 'inline-flex';
    if (next) next.style.display = step === steps.length ? 'none' : 'inline-flex';
    if (submit) submit.classList.toggle('show', step === steps.length);
  }
  if (prev && next && submit) {
    prev.addEventListener('click', () => showStep(step - 1));
    next.addEventListener('click', () => showStep(step + 1));
    showStep(1);
  }
});

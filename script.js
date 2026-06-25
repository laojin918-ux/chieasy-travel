document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    const setMenuOpen = (isOpen) => {
      nav.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    };
    toggle.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
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
      title: 'Chieasy Travel — Custom China Travel Planning & Premium Experiences',
      description: 'Discover the China most travelers never see. Custom routes, private China experiences and premium travel support across China with Chieasy Travel.'
    },
    ru: {
      title: 'Chieasy Travel — планирование путешествий и премиум-впечатления в Китае',
      description: 'Персональные маршруты по Китаю, частные впечатления и премиальная travel-поддержка через проверенных локальных партнёров.'
    },
    es: {
      title: 'Chieasy Travel — viajes personalizados y experiencias premium en China',
      description: 'Planificación privada para China con criterio local, apoyo premium y experiencias coordinadas con socios locales de confianza.'
    },
    pt: {
      title: 'Chieasy Travel — viagens personalizadas e experiências premium na China',
      description: 'Planejamento privado para a China com curadoria local, apoio premium e experiências coordenadas com parceiros locais de confiança.'
    },
    cn: {
      title: 'Chieasy Travel — 中国定制路线规划与高端体验',
      description: '以本地经验、私人体验和高端旅行支持，协调可信赖的本地伙伴，设计更有质感的中国路线。'
    }
  };

  const TRANSLATIONS = {
    ru: {
      'Home': 'Главная',
      'Consultation': 'Консультация',
      'Routes': 'Маршруты',
      'Experiences': 'Впечатления',
      'Video': 'Видео',
      'FAQ': 'Вопросы',
      'Custom China Travel Planning & Private Experiences': 'Планирование маршрутов и частные впечатления в Китае',
      'Discover the China Most Travelers Never See': 'Откройте Китай, который большинство туристов не видит',
      'Custom routes, private China experiences and premium travel support across China — designed by a team with 12 years of real China experience and coordinated through trusted local partners.': 'Индивидуальные маршруты, частные впечатления и премиальная поддержка по Китаю — от команды с 12 годами реального опыта и координацией через проверенных локальных партнёров.',
      'Plan My Trip': 'Спланировать поездку',
      '45-min Consultation · €149': 'Консультация 45 минут · €149',
      'Explore Routes': 'Смотреть маршруты',
      'Not a standard group trip. A smarter China route.': 'Не стандартная групповая поездка. А умный маршрут по Китаю.',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Мы помогаем заранее разобраться с оплатой, маршрутом, отелями, транспортом, локальной поддержкой и необычными впечатлениями.',
      'China Consultation': 'Консультация по Китаю',
      '45 minutes · €149': '45 минут · €149',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Логика маршрута, приложения, оплата, отели, транспорт и вопросы первой поездки.',
      'Book now': 'Оплатить по СБП',
      'Years of China experience': 'лет опыта в Китае',
      'Cities explored': 'городов изучено',
      'Languages: EN / RU / ES / PT / CN': 'Языки: EN / RU / ES / PT / CN',
      'Custom routes': 'индивидуальные маршруты',
      'Personalized': 'Персональное',
      'route planning': 'планирование маршрута',
      'Partners across China': 'партнёры по всему Китаю',
      'Premium': 'Премиум',
      'Premium experiences': 'премиум-впечатления',
      'Experiences coordinated through local partners': 'впечатления через локальных партнёров',
      'Need clarity before booking the full route?': 'Нужна ясность перед бронированием маршрута?',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'Забронируйте 45-минутную консультацию и получите реалистичный план по Китаю: куда ехать, чего избегать, какие приложения подготовить, как думать о транспорте, отелях, оплате и тайминге.',
      'Route review': 'Разбор маршрута',
      'Payments & apps': 'Оплата и приложения',
      'Hotels & transport': 'Отели и транспорт',
      'First-trip strategy': 'Стратегия первой поездки',
      '45 minutes': '45 минут',
      'Online call. Secure booking via Stripe.': 'Онлайн-консультация. Оплата по СБП для русскоязычной версии.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'После оплаты напишите нам в WhatsApp, чтобы выбрать удобное время консультации.',
      'Swipe sideways': 'Листайте карточки',
      'Ready-Made Trip Ideas': 'Готовые идеи маршрутов',
      'Start with a route. Then we customize it.': 'Начните с маршрута. Потом мы адаптируем его под вас.',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': 'Это примеры маршрутов. Даты, районы отелей, логика транспорта, проверенные локальные партнёры и варианты впечатлений настраиваются под ваш стиль поездки.',
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
      'Gastro Route': 'Гастро-маршрут',
      'Yunnan Explorer Route': 'Исследование Юньнаня',
      'China Bucket List Experiences': 'Впечатления мечты в Китае',
      'Not just places. Experiences people remember.': 'Не просто места. А впечатления, которые запоминаются.',
      'Fly Above the Avatar Mountains': 'Полет над горами Аватара',
      'Waterfall Cliff Hotels': 'Отели у скал и водопадов',
      'Ride Across the Grasslands': 'Поездка по степям',
      'Yangshuo River Experience': 'Река в Яншо',
      'Chongqing After Dark': 'Чунцин после заката',
      'Why Chieasy Travel?': 'Почему Chieasy Travel?',
      'Standard group trips are built for everyone. Our routes are built around you.': 'Стандартные групповые поездки делают для всех. Наши маршруты строятся вокруг вас.',
      'Standard Group Trip': 'Стандартная групповая поездка',
      'Chieasy Travel': 'Chieasy Travel',
      'Fixed itinerary': 'Фиксированная программа',
      'Custom route': 'Индивидуальный маршрут',
      'Common hotspots': 'Типовые точки',
      'Hidden gems + essentials': 'Скрытые места + главное',
      'Large groups': 'Большие группы',
      'Private planning': 'Частное планирование',
      'Generic local guide': 'Обычный локальный гид',
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
      'China, planned from the inside.': 'Китай, спланированный изнутри.',
      'China, explained from the inside.': 'Китай изнутри, а не из каталога.',
      'Chieasy Online School': 'Онлайн-школа Chieasy',
      'Visit Chieasy School': 'Открыть школу Chieasy',
      'Featured Video': 'Видео о Китае',
      'Start here before visiting China.': 'Начните здесь перед поездкой в Китай.',
      'Watch video on YouTube': 'Смотреть видео на YouTube',
      'Open on YouTube': 'Смотреть на YouTube',
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
      'Book consultation': 'Разбор поездки',
      'Plan Trip': 'План поездки',
      'Privacy': 'Приватность',
      'Terms': 'Условия',
      'Chieasy School': 'Chieasy School',
      'Cookie notice': 'Cookie',
      'Accept': 'Принять',
      'Privacy Policy': 'Политика конфиденциальности'
      ,'GDPR Privacy Policy': 'GDPR Privacy Policy'
      ,'GDPR Consent': 'Согласие на обработку персональных данных'
      ,'Consent to Personal Data Processing': 'Согласие на обработку персональных данных'
      ,'Personal Data Consent': 'Согласие на обработку персональных данных'
      ,'Cookie Policy': 'Политика cookie'
      ,'Terms & Conditions': 'Пользовательское соглашение'
      ,'User Agreement': 'Пользовательское соглашение'
      ,'Public Offer': 'Публичная оферта'
      ,'Refund Policy': 'Политика возвратов'
      ,'Responsibility': 'Ответственность'
      ,'Disclaimer': 'Disclaimer'
      ,'Travel Participation & Risk Waiver': 'Соглашение о принятии рисков путешествия'
      ,'Travel Participation & Risk Waiver Agreement': 'Соглашение о принятии рисков путешествия'
      ,'Legal Documents': 'Юридические документы'
      ,'Close': 'Закрыть'
      ,'Close legal popup': 'Закрыть юридический попап'
      ,'Review the official document before booking or paying for services.': 'Ознакомьтесь с официальным документом перед бронированием или оплатой услуг.'
      ,'I consent to the processing of my personal data.': 'Я согласен на обработку персональных данных.'
      ,'Read personal data consent': 'Открыть согласие на обработку данных'
      ,'Chieasy Travel — Custom China Travel Planning & Premium Experiences': 'Chieasy Travel — планирование путешествий и премиум-впечатления в Китае'
      ,'7–10 days': '7–10 дней'
      ,'5–7 days': '5–7 дней'
      ,'7–9 days': '7–9 дней'
      ,'8–12 days': '8–12 дней'
      ,'8 days': '8 дней'
      ,'4–5 days': '4–5 дней'
      ,'6–9 days': '6–9 дней'
      ,'Open menu': 'Открыть меню'
      ,'Language switcher': 'Переключатель языка'
      ,'Close route details': 'Закрыть детали маршрута'
      ,'Education and travel network': 'Образовательная и travel-сеть'
      ,'China travel video': 'Видео о путешествиях по Китаю'
      ,'Ilya at a travel conference in China': 'Илья на travel-конференции в Китае'
      ,'Local': 'Свои'
      ,'VIP': 'VIP'
      ,'Active': 'Активный маршрут'
      ,'Custom': 'Индивидуально'
      ,'Popular Places': 'Популярные места'
      ,'Route highlights': 'Главное по маршруту'
      ,'Plan this route': 'Спланировать этот маршрут'
      ,'Keep exploring': 'Смотреть дальше'
      ,'Pick a route': 'Выберите маршрут'
      ,'Add premium access': 'Добавьте премиум-доступ'
      ,'Travel with support': 'Путешествуйте с поддержкой'
      ,'Aerial': 'С воздуха'
      ,'Water': 'Вода'
      ,'Events': 'События'
      ,'Comfort': 'Комфорт'
      ,'Since 2015': 'С 2015'
      ,'living, studying and traveling across China': 'жизнь, учёба и путешествия по Китаю'
      ,'Since 2020': 'С 2020'
      ,'online language school, enrollment anytime': 'онлайн-школа языков, запись в любой момент'
      ,'China since 2015': 'Китай с 2015'
      ,'China Education': 'Образование в Китае'
      ,"Studied Chinese at Shenzhen University and finished a bachelor's degree in Chinese, inside the Chinese student environment.": 'Учился китайскому в Shenzhen University и закончил бакалавриат на китайском в китайской студенческой среде.'
      ,'Admissions Support': 'Помощь с поступлением'
      ,'We also help students understand study opportunities in China, university applications and the practical side of moving there.': 'Мы также помогаем студентам разобраться с учёбой в Китае, поступлением в университеты и практической стороной переезда.'
      ,'Travel Network': 'Партнёрская сеть'
      ,'See how we talk about China before you travel with us.': 'Посмотрите, как мы говорим о Китае до вашей поездки.'
      ,'Direct, practical and based on real experience living, studying and traveling across China.': 'Прямо, практично и на основе реального опыта жизни, учёбы и путешествий по Китаю.'
      ,'Watch the video here on the site. No YouTube jump, just press play.': 'Смотрите видео прямо на сайте. Без перехода на YouTube, просто нажмите play.'
      ,'Open video if the player is blocked': 'Открыть видео, если плеер заблокирован'
      ,'Plan after watching': 'Спланировать после просмотра'
      ,'First China Trip': 'Первая поездка в Китай'
      ,'“China looks incredible, but online information feels scattered. I need a route that makes sense, not just a list of cities.”': '«Китай выглядит невероятно, но информация в интернете разрозненная. Мне нужен маршрут с логикой, а не просто список городов».'
      ,'Route idea: Shanghai → Zhangjiajie → Chongqing': 'Идея маршрута: Шанхай → Чжанцзяцзе → Чунцин'
      ,'Creator Route': 'Маршрут для контента'
      ,'“I want cinematic places, night views and nature, but I do not know where the best viewpoints and timing are.”': '«Мне нужны кинематографичные места, ночные виды и природа, но я не знаю лучшие точки и тайминг».'
      ,'Route idea: Chongqing → Zhangjiajie → Yangshuo': 'Идея маршрута: Чунцин → Чжанцзяцзе → Яншо'
      ,'Premium Nature': 'Премиум-природа'
      ,'“We want beautiful landscapes, boutique stays and comfort, without turning the trip into a rushed checklist.”': '«Мы хотим красивые пейзажи, бутик-отели и комфорт, но без ощущения гонки по чеклисту».'
      ,'Route idea: Yunnan → Yangshuo → Zhangjiajie': 'Идея маршрута: Юньнань → Яншо → Чжанцзяцзе'
      ,'Business + Travel': 'Бизнес + путешествие'
      ,'“I am combining meetings, conferences and travel. I need local logic, transport clarity and time to actually enjoy China.”': '«Я совмещаю встречи, конференции и путешествие. Нужна локальная логика, понятный транспорт и время действительно насладиться Китаем».'
      ,'Route idea: Shenzhen → Guangzhou → Hong Kong': 'Идея маршрута: Шэньчжэнь → Гуанчжоу → Гонконг'
      ,'Don’t fill this out:': 'Не заполняйте это:'
      ,'Visa requirements depend on your passport, route, travel dates and the cities you plan to visit. We can help you understand what to verify for your specific trip, but final visa decisions always depend on official authorities.': 'Визовые требования зависят от паспорта, маршрута, дат и городов. Мы поможем понять, что проверить для вашей поездки, но окончательное решение всегда за официальными органами.'
      ,'Is China difficult for first-time visitors?': 'Сложно ли впервые ехать в Китай?'
      ,'China is rewarding, but it works differently from Europe, North America and Southeast Asia. Mobile payments, apps, hotels and transport require preparation. With the right setup, travel becomes much easier.': 'Китай очень интересный, но устроен иначе, чем Европа, Северная Америка и Юго-Восточная Азия. Мобильные платежи, приложения, отели и транспорт требуют подготовки. С правильной настройкой путешествие становится намного проще.'
      ,'Can I travel around China without speaking Chinese?': 'Можно ли путешествовать по Китаю без китайского?'
      ,'Yes, but the route and app setup matter. A well-planned trip can prevent most communication problems before they happen.': 'Да, но важны маршрут и подготовка приложений. Хороший план предотвращает большую часть проблем с коммуникацией заранее.'
      ,'Can you arrange unique or extreme experiences?': 'Можете организовать необычные или экстремальные впечатления?'
      ,'Depending on location, season, availability and local provider conditions, we may help coordinate helicopter flights, horseback riding, private boat experiences, sunrise routes, special stays and creator-focused routes through local partners.': 'В зависимости от места, сезона, доступности и условий локальных провайдеров мы можем помочь с координацией полётов на вертолёте, верховой езды, частных лодочных впечатлений, маршрутов на рассвет, особенных отелей и маршрутов для контента через локальных партнёров.'
      ,'Can your team help before I arrive?': 'Может ли команда помочь до моего приезда?'
      ,'Yes. We can help with route planning, hotel areas, transport logic, WeChat and Alipay preparation, eSIM suggestions and general travel strategy.': 'Да. Мы можем помочь с маршрутом, районами отелей, транспортной логикой, подготовкой WeChat и Alipay, eSIM и общей стратегией поездки.'
      ,'Custom China Travel Planning • Private China Experiences • Premium Travel Support • Local Partners Across China': 'Планирование путешествий по Китаю • Частные впечатления в Китае • Премиальная travel-поддержка • Локальные партнёры по всему Китаю'
    },
    es: {
      'Home': 'Inicio',
      'Consultation': 'Consulta',
      'Routes': 'Rutas',
      'Experiences': 'Experiencias',
      'Video': 'Vídeo',
      'FAQ': 'Preguntas',
      'Custom China Travel Planning & Private Experiences': 'Planificación de China y experiencias privadas',
      'Discover the China Most Travelers Never See': 'Descubre la China que la mayoría de viajeros no ve',
      'Custom routes, private China experiences and premium travel support across China — designed by a team with 12 years of real China experience and coordinated through trusted local partners.': 'Rutas a medida, experiencias privadas en China y apoyo premium, diseñados por un equipo con 12 años de experiencia real y coordinados con socios locales de confianza.',
      'Plan My Trip': 'Planificar mi viaje',
      '45-min Consultation · €149': 'Consulta 45 min · €149',
      'Explore Routes': 'Ver rutas',
      'Not a standard group trip. A smarter China route.': 'No es un viaje grupal estándar. Es una ruta más inteligente por China.',
      'Book now': 'Reservar',
      'Years of China experience': 'años de experiencia en China',
      'Cities explored': 'ciudades exploradas',
      'Languages: EN / RU / ES / PT / CN': 'Idiomas: EN / RU / ES / PT / CN',
      'Custom routes': 'rutas personalizadas',
      'Personalized': 'Planificación',
      'route planning': 'de ruta personalizada',
      'Partners across China': 'socios locales en China',
      'Premium': 'Premium',
      'Premium experiences': 'experiencias premium',
      'Experiences coordinated through local partners': 'experiencias coordinadas con socios locales',
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
      'Gastro Route': 'Ruta gastronómica',
      'Yunnan Explorer Route': 'Ruta explorador de Yunnan',
      'China Bucket List Experiences': 'Experiencias imprescindibles en China',
      'Not just places. Experiences people remember.': 'No solo lugares. Experiencias que se recuerdan.',
      'Why Chieasy Travel?': '¿Por qué Chieasy Travel?',
      'Standard group trips are built for everyone. Our routes are built around you.': 'Los viajes grupales estándar son para todos. Nuestras rutas se diseñan alrededor de ti.',
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
      'China, planned from the inside.': 'China, planificada desde dentro.',
      'China, explained from the inside.': 'China explicada desde dentro, no desde un catálogo.',
      'Chieasy Online School': 'Chieasy Online School',
      'Visit Chieasy School': 'Visitar Chieasy School',
      'Featured Video': 'Video destacado',
      'Start here before visiting China.': 'Empieza aquí antes de visitar China.',
      'Watch video on YouTube': 'Ver video en YouTube',
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
      'Book consultation': 'Reservar consulta',
      'Plan Trip': 'Planificar',
      'Privacy': 'Privacidad',
      'Terms': 'Términos',
      'Accept': 'Aceptar'
      ,'Open video if the player is blocked': 'Abrir el vídeo si el reproductor está bloqueado'
    },
    pt: {
      'Home': 'Início',
      'Consultation': 'Consultoria',
      'Routes': 'Roteiros',
      'Experiences': 'Experiências',
      'Video': 'Vídeo',
      'FAQ': 'Dúvidas',
      'Custom China Travel Planning & Private Experiences': 'Planejamento da China e experiências privadas',
      'Discover the China Most Travelers Never See': 'Descubra a China que a maioria dos viajantes não vê',
      'Custom routes, private China experiences and premium travel support across China — designed by a team with 12 years of real China experience and coordinated through trusted local partners.': 'Roteiros sob medida, experiências privadas na China e apoio premium, desenhados por uma equipe com 12 anos de experiência real e coordenados com parceiros locais de confiança.',
      'Plan My Trip': 'Planejar minha viagem',
      '45-min Consultation · €149': 'Consultoria 45 min · €149',
      'Explore Routes': 'Ver roteiros',
      'Not a standard group trip. A smarter China route.': 'Não é uma viagem em grupo padrão. É um roteiro mais inteligente pela China.',
      'Book now': 'Reservar',
      'Years of China experience': 'anos de experiência na China',
      'Cities explored': 'cidades exploradas',
      'Languages: EN / RU / ES / PT / CN': 'Idiomas: EN / RU / ES / PT / CN',
      'Custom routes': 'roteiros personalizados',
      'Personalized': 'Planejamento',
      'route planning': 'de roteiro personalizado',
      'Partners across China': 'parceiros pela China',
      'Premium': 'Premium',
      'Premium experiences': 'experiências premium',
      'Experiences coordinated through local partners': 'experiências coordenadas com parceiros locais',
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
      'Gastro Route': 'Roteiro gastronômico',
      'Yunnan Explorer Route': 'Roteiro explorador de Yunnan',
      'China Bucket List Experiences': 'Experiências imperdíveis na China',
      'Not just places. Experiences people remember.': 'Não apenas lugares. Experiências que ficam na memória.',
      'Why Chieasy Travel?': 'Por que Chieasy Travel?',
      'Standard group trips are built for everyone. Our routes are built around you.': 'Viagens em grupo padrão são feitas para todos. Nossos roteiros são desenhados em torno de você.',
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
      'China, planned from the inside.': 'China, planejada a partir de dentro.',
      'China, explained from the inside.': 'China explicada por dentro, não por catálogo.',
      'Chieasy Online School': 'Chieasy Online School',
      'Visit Chieasy School': 'Visitar Chieasy School',
      'Featured Video': 'Vídeo em destaque',
      'Start here before visiting China.': 'Comece aqui antes de visitar a China.',
      'Watch video on YouTube': 'Ver vídeo no YouTube',
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
      'Book consultation': 'Reservar consultoria',
      'Plan Trip': 'Planejar',
      'Privacy': 'Privacidade',
      'Terms': 'Termos',
      'Accept': 'Aceitar'
      ,'Open video if the player is blocked': 'Abrir vídeo se o player estiver bloqueado'
    },
    cn: {
      'Home': '首页',
      'Consultation': '咨询',
      'Routes': '路线',
      'Experiences': '体验',
      'Video': '视频',
      'FAQ': '常见问题',
      'Custom China Travel Planning & Private Experiences': '中国定制路线规划与私人体验',
      'Discover the China Most Travelers Never See': '发现大多数旅行者看不到的中国',
      'Custom routes, private China experiences and premium travel support across China — designed by a team with 12 years of real China experience and coordinated through trusted local partners.': '中国定制路线、私人体验和高端旅行支持，由拥有 12 年真实中国经验的团队设计，并通过可信赖的本地伙伴协调。',
      'Plan My Trip': '规划我的旅行',
      '45-min Consultation · €149': '45 分钟咨询 · €149',
      'Explore Routes': '查看路线',
      'Not a standard group trip. A smarter China route.': '不是统一模板行程，而是更聪明的中国路线。',
      'Book now': '预约',
      'Open video if the player is blocked': '如果播放器被阻止，请打开视频',
      'Years of China experience': '年中国经验',
      'Cities explored': '探索过的城市',
      'Languages: EN / RU / ES / PT / CN': '语言：EN / RU / ES / PT / CN',
      'Custom routes': '定制路线',
      'Personalized': '个性化',
      'route planning': '路线规划',
      'Partners across China': '中国本地合作伙伴',
      'Premium': '高端',
      'Premium experiences': '高端体验',
      'Experiences coordinated through local partners': '通过本地伙伴协调的体验',
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
      'Gastro Route': '美食路线',
      'Yunnan Explorer Route': '云南探索路线',
      'China Bucket List Experiences': '中国必体验清单',
      'Not just places. Experiences people remember.': '不只是地点，而是值得记住的体验。',
      'Why Chieasy Travel?': '为什么选择 Chieasy Travel？',
      'Standard group trips are built for everyone. Our routes are built around you.': '统一模板行程面向所有人，我们的路线围绕你来设计。',
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
      'China, planned from the inside.': '从中国内部经验出发设计行程。',
      'China, explained from the inside.': '从真实中国经验出发理解中国，而不是照搬旅游目录。',
      'Chieasy Online School': 'Chieasy 在线学校',
      'Visit Chieasy School': '访问 Chieasy School',
      'Featured Video': '精选视频',
      'Start here before visiting China.': '来中国前先从这里开始。',
      'Watch video on YouTube': '在 YouTube 观看视频',
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
      'Book consultation': '预约咨询',
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
      'Online call. Secure booking via Stripe.': 'Онлайн-консультация. Оплата по СБП для русскоязычной версии.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'После оплаты напишите нам в WhatsApp, чтобы выбрать время звонка.',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': 'Это не фиксированные групповые поездки, а сильные концепции маршрутов. Мы настраиваем города, темп, районы отелей, транспорт, локальных партнёров и впечатления под ваш стиль поездки.',
      '1 day': '1 день',
      'Founder-led city day': 'Авторский день',
      'Inside Shenzhen': 'Шэньчжэнь изнутри',
      'One day of personal city accompaniment: reform-era Shekou, old Shenzhen, tech districts, skyline waterfront, light show and drone-show timing.': 'Авторский день по городу: Шэкоу и история реформ, старый Шэньчжэнь, tech-районы, waterfront, световое шоу и тайминг дрон-шоу.',
      'Open the Shenzhen day': 'Открыть программу',
      'Start': 'Старт',
      'Shekou, Sea World, reform-era story': 'Шэкоу, Sea World, история реформ',
      'Context': 'Контекст',
      'Old Shenzhen, urban villages, tech and business logic': 'Старый Шэньчжэнь, urban villages, tech и бизнес-логика',
      'Finale': 'Финал',
      'Talent Park, Bay Area skyline, light and drone-show windows': 'Talent Park, skyline Greater Bay Area, световое шоу и окна дрон-шоу',
      'Book this route': 'Забронировать маршрут',
      'Name': 'Имя',
      'Phone': 'Телефон',
      'Email': 'Почта',
      'Preferred date': 'Дата',
      'Send booking request': 'Отправить заявку',
      'Sending...': 'Отправляем...',
      'We will contact you to confirm details.': 'Мы свяжемся с вами, чтобы уточнить детали.',
      'Thank you. We will contact you.': 'Спасибо, мы с вами свяжемся.',
      'Your route request has been sent.': 'Заявка по маршруту отправлена.',
      'Shanghai → Zhangjiajie → Chongqing. A powerful first route mixing modern China, nature and a crazy megacity.': 'Шанхай → Чжанцзяцзе → Чунцин. Сильный первый маршрут: современный Китай, природа и безумный мегаполис.',
      'Zhangjiajie → Tianmen Mountain → Furong. Nature, cliffs, waterfalls and optional helicopter experiences.': 'Чжанцзяцзе → Тяньмэнь → Фужун. Природа, скалы, водопады и опциональные полёты на вертолёте.',
      'Yangshuo → Zhangjiajie → Yunnan. Rivers, karst mountains, ancient towns and dramatic scenery.': 'Яншо → Чжанцзяцзе → Юньнань. Реки, карстовые горы, древние города и драматичные виды.',
      'Hong Kong → Macau → Guangzhou → Shenzhen. South China, skyline, food, business and history.': 'Гонконг → Макао → Гуанчжоу → Шэньчжэнь. Южный Китай: панорамы, еда, бизнес и история.',
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
      'Private boat experiences arranged through local providers among karst mountains.': 'Лодочные впечатления среди карстовых гор через локальных провайдеров.',
      'Cyberpunk viewpoints, neon streets and night photography.': 'Киберпанк-точки, неоновые улицы и ночная съёмка.',
      'Share your dates, travel style, interests and budget.': 'Поделитесь датами, стилем путешествия, интересами и бюджетом.',
      'We suggest cities, transport logic, hotel areas and experience options.': 'Мы предлагаем города, транспортную логику, районы отелей и варианты впечатлений.',
      'Local experiences, drivers, tickets, apps, hotels and premium options arranged through independent local partners.': 'Локальные впечатления, водители, билеты, приложения, отели и премиум-опции координируются через независимых локальных партнёров.',
      'You travel with a clearer route and coordination support when needed.': 'Вы путешествуете с понятным маршрутом и координационной поддержкой при необходимости.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Для тех, кто хочет больше, чем осмотр достопримечательностей: виды с воздуха, частные лодки, организация событий, премиум-отели и внимательная локальная поддержка.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Выбранные обзорные полёты над Чжанцзяцзе, горами или драматичными пейзажами, когда доступны.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Река Ли, ночные городские круизы или спокойные природные маршруты вокруг направления.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination arranged through local partners where applicable.': 'Частные ужины, бизнес-визиты, съёмки для контента, групповые приезды и координация на месте.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Бутик-отели, виды со скал, премиум-номера и проживание, которое красиво дополняет маршрут.',
      'Ilya moved to China in 2015, studied Chinese at Shenzhen University and completed a bachelor\'s degree in Chinese alongside local classmates. Chieasy began with language and culture, then expanded into online education, admissions support and custom China travel.': 'Илья переехал в Китай в 2015 году, учил китайский в Shenzhen University и закончил бакалавриат на китайском вместе с местными студентами. Chieasy начался с языка и культуры, а затем вырос в онлайн-образование, помощь с поступлением и планирование маршрутов по Китаю.',
      'Ilya does not plan China like a travel catalogue. Since 2015, he has lived, studied, worked and traveled across the country, then built Chieasy around language, education and practical travel planning with trusted local partners.': 'Илья не собирает Китай как туристический каталог. С 2015 года он жил, учился, работал и путешествовал по стране, а Chieasy вырос из языка, образования и практичного планирования поездок вместе с проверенными локальными партнёрами.',
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
      'Online call. Secure booking via Stripe.': 'Llamada online. Reserva segura por Stripe.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'Después del pago, escríbenos por WhatsApp para elegir la hora de la llamada.',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': 'Son conceptos de ruta. Fechas, zonas de hotel, lógica de transporte, socios locales de confianza y experiencias se ajustan a tu forma de viajar.',
      '1 day': '1 día',
      'Founder-led city day': 'Día con el fundador',
      'Inside Shenzhen': 'Shenzhen desde dentro',
      'One day of personal city accompaniment: reform-era Shekou, old Shenzhen, tech districts, skyline waterfront, light show and drone-show timing.': 'Un día de acompañamiento urbano: Shekou y la historia de reformas, Shenzhen antiguo, zonas tech, waterfront, show de luces y timing de drones.',
      'Open the Shenzhen day': 'Abrir programa',
      'Start': 'Inicio',
      'Shekou, Sea World, reform-era story': 'Shekou, Sea World, historia de reformas',
      'Context': 'Contexto',
      'Old Shenzhen, urban villages, tech and business logic': 'Shenzhen antiguo, urban villages, tech y lógica de negocios',
      'Finale': 'Final',
      'Talent Park, Bay Area skyline, light and drone-show windows': 'Talent Park, skyline del Greater Bay Area, show de luces y ventanas de drones',
      'Book this route': 'Reservar ruta',
      'Name': 'Nombre',
      'Phone': 'Teléfono',
      'Email': 'Email',
      'Preferred date': 'Fecha preferida',
      'Send booking request': 'Enviar solicitud',
      'Sending...': 'Enviando...',
      'We will contact you to confirm details.': 'Te contactaremos para confirmar los detalles.',
      'Thank you. We will contact you.': 'Gracias, nos pondremos en contacto contigo.',
      'Your route request has been sent.': 'Tu solicitud de ruta ha sido enviada.',
      'Shanghai → Zhangjiajie → Chongqing. A powerful first route mixing modern China, nature and a crazy megacity.': 'Shanghái → Zhangjiajie → Chongqing. Una primera ruta potente con China moderna, naturaleza y una megaciudad increíble.',
      'Zhangjiajie → Tianmen Mountain → Furong. Nature, cliffs, waterfalls and optional helicopter experiences.': 'Zhangjiajie → Tianmen → Furong. Naturaleza, acantilados, cascadas y experiencias opcionales en helicóptero.',
      'Yangshuo → Zhangjiajie → Yunnan. Rivers, karst mountains, ancient towns and dramatic scenery.': 'Yangshuo → Zhangjiajie → Yunnan. Ríos, montañas kársticas, pueblos antiguos y paisajes dramáticos.',
      'Deserts, mountains, bazaars and some of the most spectacular roads in Asia.': 'Desiertos, montañas, bazares y algunas de las carreteras más espectaculares de Asia.',
      'Grasslands, horses, yurts, sunsets and a completely different side of China.': 'Praderas, caballos, yurtas, atardeceres y una China completamente diferente.',
      'Locations for reels, YouTube, photography, drone-style shots and cinematic travel content.': 'Lugares para reels, YouTube, fotografía, tomas tipo dron y contenido de viaje cinematográfico.',
      'Zhangjiajie helicopter flights on selected routes.': 'Vuelos en helicóptero en Zhangjiajie en rutas seleccionadas.',
      'Unique stays near waterfalls, cliffs and mountain valleys.': 'Estancias únicas cerca de cascadas, acantilados y valles de montaña.',
      'Private boat experiences arranged through local providers among karst mountains.': 'Experiencias privadas en barco entre montañas kársticas, coordinadas con proveedores locales.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Para viajeros que quieren más que visitas: vistas aéreas, barcos privados, logística de eventos, estancias premium y apoyo local cercano.',
      'Ilya moved to China in 2015, studied Chinese at Shenzhen University and completed a bachelor\'s degree in Chinese alongside local classmates. Chieasy began with language and culture, then expanded into online education, admissions support and custom China travel.': 'Ilya se mudó a China en 2015, estudió chino en Shenzhen University y terminó una licenciatura en chino junto a compañeros locales. Chieasy empezó con idioma y cultura, y luego creció hacia educación online, apoyo de admisiones y viajes personalizados por China.',
      'Ilya does not plan China like a travel catalogue. Since 2015, he has lived, studied, worked and traveled across the country, then built Chieasy around language, education and practical travel planning with trusted local partners.': 'Ilya no planifica China como un catálogo turístico. Desde 2015 ha vivido, estudiado, trabajado y viajado por el país, y construyó Chieasy alrededor del idioma, la educación y la planificación práctica con socios locales de confianza.',
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
      'Online call. Secure booking via Stripe.': 'Chamada online. Reserva segura via Stripe.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'Depois do pagamento, envie mensagem no WhatsApp para escolher o horário da chamada.',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': 'São ideias de roteiro. Datas, zonas de hotel, lógica de transporte, parceiros locais de confiança e experiências são ajustados ao seu estilo de viagem.',
      '1 day': '1 dia',
      'Founder-led city day': 'Dia com o fundador',
      'Inside Shenzhen': 'Shenzhen por dentro',
      'One day of personal city accompaniment: reform-era Shekou, old Shenzhen, tech districts, skyline waterfront, light show and drone-show timing.': 'Um dia de acompanhamento urbano: Shekou e a história das reformas, Shenzhen antigo, zonas tech, waterfront, show de luzes e timing de drones.',
      'Open the Shenzhen day': 'Abrir programa',
      'Start': 'Início',
      'Shekou, Sea World, reform-era story': 'Shekou, Sea World, história das reformas',
      'Context': 'Contexto',
      'Old Shenzhen, urban villages, tech and business logic': 'Shenzhen antigo, urban villages, tech e lógica de negócios',
      'Finale': 'Final',
      'Talent Park, Bay Area skyline, light and drone-show windows': 'Talent Park, skyline da Greater Bay Area, show de luzes e janelas de drones',
      'Book this route': 'Reservar roteiro',
      'Name': 'Nome',
      'Phone': 'Telefone',
      'Email': 'Email',
      'Preferred date': 'Data preferida',
      'Send booking request': 'Enviar pedido',
      'Sending...': 'A enviar...',
      'We will contact you to confirm details.': 'Entraremos em contacto para confirmar os detalhes.',
      'Thank you. We will contact you.': 'Obrigado, entraremos em contacto.',
      'Your route request has been sent.': 'O seu pedido de roteiro foi enviado.',
      'Shanghai → Zhangjiajie → Chongqing. A powerful first route mixing modern China, nature and a crazy megacity.': 'Xangai → Zhangjiajie → Chongqing. Uma primeira rota forte com China moderna, natureza e uma megacidade intensa.',
      'Zhangjiajie → Tianmen Mountain → Furong. Nature, cliffs, waterfalls and optional helicopter experiences.': 'Zhangjiajie → Tianmen → Furong. Natureza, penhascos, cachoeiras e experiências opcionais de helicóptero.',
      'Yangshuo → Zhangjiajie → Yunnan. Rivers, karst mountains, ancient towns and dramatic scenery.': 'Yangshuo → Zhangjiajie → Yunnan. Rios, montanhas cársticas, vilas antigas e cenários dramáticos.',
      'Deserts, mountains, bazaars and some of the most spectacular roads in Asia.': 'Desertos, montanhas, bazares e algumas das estradas mais espetaculares da Ásia.',
      'Grasslands, horses, yurts, sunsets and a completely different side of China.': 'Campos, cavalos, yurts, pores do sol e um lado totalmente diferente da China.',
      'Locations for reels, YouTube, photography, drone-style shots and cinematic travel content.': 'Locais para reels, YouTube, fotografia, cenas estilo drone e conteúdo de viagem cinematográfico.',
      'Zhangjiajie helicopter flights on selected routes.': 'Voos de helicóptero em Zhangjiajie em rotas selecionadas.',
      'Unique stays near waterfalls, cliffs and mountain valleys.': 'Estadias únicas perto de cachoeiras, penhascos e vales de montanha.',
      'Private boat experiences arranged through local providers among karst mountains.': 'Experiências privadas de barco entre montanhas cársticas, coordenadas com fornecedores locais.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Para viajantes que querem mais que turismo: vistas aéreas, barcos privados, logística de eventos, estadias premium e apoio local próximo.',
      'Ilya moved to China in 2015, studied Chinese at Shenzhen University and completed a bachelor\'s degree in Chinese alongside local classmates. Chieasy began with language and culture, then expanded into online education, admissions support and custom China travel.': 'Ilya mudou-se para a China em 2015, estudou chinês na Shenzhen University e concluiu uma graduação em chinês junto com colegas locais. A Chieasy começou com idioma e cultura, depois cresceu para educação online, apoio em admissões e viagens personalizadas pela China.',
      'Ilya does not plan China like a travel catalogue. Since 2015, he has lived, studied, worked and traveled across the country, then built Chieasy around language, education and practical travel planning with trusted local partners.': 'Ilya não planeja a China como um catálogo turístico. Desde 2015, viveu, estudou, trabalhou e viajou pelo país, e construiu a Chieasy em torno de idiomas, educação e planejamento prático com parceiros locais de confiança.',
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
      'Online call. Secure booking via Stripe.': '线上咨询。通过 Stripe 安全预订。',
      'After payment, message us on WhatsApp to choose a time for the call.': '付款后请在 WhatsApp 联系我们选择通话时间。',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': '这些是路线示例。日期、酒店区域、交通逻辑、可信赖的本地伙伴和体验选项都会根据你的旅行风格调整。',
      '1 day': '1 天',
      'Founder-led city day': '创始人陪同一日',
      'Inside Shenzhen': '深圳深度一日',
      'One day of personal city accompaniment: reform-era Shekou, old Shenzhen, tech districts, skyline waterfront, light show and drone-show timing.': '一天深度看深圳：蛇口改革故事、老深圳、科技区、海岸线、灯光秀和无人机表演时间。',
      'Open the Shenzhen day': '打开行程',
      'Start': '开始',
      'Shekou, Sea World, reform-era story': '蛇口、海上世界、改革故事',
      'Context': '城市语境',
      'Old Shenzhen, urban villages, tech and business logic': '老深圳、城中村、科技与商业逻辑',
      'Finale': '夜晚收尾',
      'Talent Park, Bay Area skyline, light and drone-show windows': '人才公园、大湾区天际线、灯光秀和无人机表演窗口',
      'Book this route': '预订路线',
      'Name': '姓名',
      'Phone': '电话',
      'Email': '邮箱',
      'Preferred date': '偏好日期',
      'Send booking request': '发送预订请求',
      'Sending...': '正在发送...',
      'We will contact you to confirm details.': '我们会联系你确认细节。',
      'Thank you. We will contact you.': '谢谢，我们会联系你。',
      'Your route request has been sent.': '你的路线申请已发送。',
      'Shanghai → Zhangjiajie → Chongqing. A powerful first route mixing modern China, nature and a crazy megacity.': '上海 → 张家界 → 重庆。第一次来中国的强路线：现代城市、自然景观和震撼山城。',
      'Zhangjiajie → Tianmen Mountain → Furong. Nature, cliffs, waterfalls and optional helicopter experiences.': '张家界 → 天门山 → 芙蓉镇。自然、悬崖、瀑布和可选直升机体验。',
      'Yangshuo → Zhangjiajie → Yunnan. Rivers, karst mountains, ancient towns and dramatic scenery.': '阳朔 → 张家界 → 云南。河流、喀斯特山水、古镇和震撼风景。',
      'Deserts, mountains, bazaars and some of the most spectacular roads in Asia.': '沙漠、雪山、巴扎，以及亚洲最壮观的道路之一。',
      'Grasslands, horses, yurts, sunsets and a completely different side of China.': '草原、马、蒙古包、日落，以及完全不同的一面中国。',
      'Locations for reels, YouTube, photography, drone-style shots and cinematic travel content.': '适合 reels、YouTube、摄影、航拍感镜头和电影感旅行内容的地点。',
      'Zhangjiajie helicopter flights on selected routes.': '张家界指定路线直升机飞行体验。',
      'Unique stays near waterfalls, cliffs and mountain valleys.': '瀑布、悬崖和山谷附近的特色住宿。',
      'Private boat experiences arranged through local providers among karst mountains.': '通过本地供应商安排的喀斯特山水私人船只体验。',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': '适合想要更多体验的旅行者：空中视角、私人船只、活动安排、高端住宿和细致本地支持。',
      'Ilya moved to China in 2015, studied Chinese at Shenzhen University and completed a bachelor\'s degree in Chinese alongside local classmates. Chieasy began with language and culture, then expanded into online education, admissions support and custom China travel.': 'Ilya 于 2015 年来到中国，在深圳大学学习中文，并和本地同学一起用中文完成本科。Chieasy 从语言和文化出发，逐步发展到在线教育、留学申请支持和中国定制旅行。',
      'Ilya does not plan China like a travel catalogue. Since 2015, he has lived, studied, worked and traveled across the country, then built Chieasy around language, education and practical travel planning with trusted local partners.': 'Ilya 不会像旅游目录一样规划中国。自 2015 年起，他在中国生活、学习、工作并不断旅行，后来围绕语言、教育和实用旅行规划创立 Chieasy，并与可信赖的本地伙伴协调。',
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

  const COMPLETION_TRANSLATIONS = {
    es: {
      'Chieasy Travel — Custom China Travel Planning & Premium Experiences': 'Chieasy Travel — viajes personalizados y experiencias premium en China',
      'China Consultation': 'Consulta sobre China',
      '45 minutes · €149': '45 minutos · €149',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Lógica de ruta, apps, pagos, hoteles, transporte y dudas del primer viaje.',
      'Local': 'Local',
      '45 minutes': '45 minutos',
      'Swipe sideways': 'Desliza las tarjetas',
      '7–10 days': '7–10 días',
      '5–7 days': '5–7 días',
      '7–9 days': '7–9 días',
      '8–12 days': '8–12 días',
      '8 days': '8 días',
      '4–5 days': '4–5 días',
      '6–9 days': '6–9 días',
      'Hong Kong → Macau → Guangzhou → Shenzhen. South China, skyline, food, business and history.': 'Hong Kong → Macao → Guangzhou → Shenzhen. Sur de China: vistas urbanas, gastronomía, negocios e historia.',
      'Beijing → Nanjing → Changsha → Xi\'an. Ancient capitals, city walls, temples and big historical questions.': 'Pekín → Nanjing → Changsha → Xi\'an. Capitales antiguas, murallas, templos y grandes historias.',
      'Taishan → Huashan → Hengshan → Songshan. Cliffs, temples, sunrise routes and active China.': 'Taishan → Huashan → Hengshan → Songshan. Acantilados, templos, amaneceres y una China activa.',
      'Qingdao → Chongqing → Shenzhen → Hong Kong. Neon cities, layered roads and future-facing China.': 'Qingdao → Chongqing → Shenzhen → Hong Kong. Ciudades de neón, carreteras elevadas y la China del futuro.',
      'Guangzhou → Chengdu → Xi\'an. Cantonese food, Sichuan spice, markets and unexpected flavors.': 'Guangzhou → Chengdu → Xi\'an. Cocina cantonesa, picante de Sichuan, mercados y sabores inesperados.',
      'Dali → Lijiang → Shangri-La. Ancient towns, snow mountains, lakes, tea culture and slower China.': 'Dali → Lijiang → Shangri-La. Pueblos antiguos, montañas nevadas, lagos, té y una China más lenta.',
      'Active': 'Activo',
      'Custom': 'Personalizado',
      'Popular Places': 'Lugares populares',
      'Route highlights': 'Puntos clave de la ruta',
      'Plan this route': 'Planificar esta ruta',
      'Keep exploring': 'Seguir explorando',
      'Fly Above the Avatar Mountains': 'Volar sobre las montañas Avatar',
      'Waterfall Cliff Hotels': 'Hoteles entre cascadas y acantilados',
      'Ride Across the Grasslands': 'Cruzar las praderas a caballo',
      'Inner Mongolia horses, yurts and sunset routes.': 'Caballos, yurtas y rutas al atardecer en Mongolia Interior.',
      'Desert highways, mountains and remote landscapes.': 'Carreteras del desierto, montañas y paisajes remotos.',
      'Yangshuo River Experience': 'Experiencia en el río de Yangshuo',
      'Chongqing After Dark': 'Chongqing de noche',
      'Cyberpunk viewpoints, neon streets and night photography.': 'Miradores cyberpunk, calles de neón y fotografía nocturna.',
      'Standard Group Trip': 'Viaje grupal estándar',
      'Fixed itinerary': 'Itinerario fijo',
      'Custom route': 'Ruta personalizada',
      'Common hotspots': 'Paradas típicas',
      'Hidden gems + essentials': 'Lugares secretos + imprescindibles',
      'Large groups': 'Grupos grandes',
      'Private planning': 'Planificación privada',
      'Generic local guide': 'Guía local genérico',
      'China specialist network': 'Red de especialistas en China',
      'Limited flexibility': 'Flexibilidad limitada',
      'Trip designed around you': 'Viaje diseñado para ti',
      'Tell Us About Your Trip': 'Cuéntanos tu viaje',
      'Share your dates, travel style, interests and budget.': 'Comparte fechas, estilo de viaje, intereses y presupuesto.',
      'Get Your Custom Route': 'Recibe tu ruta personalizada',
      'We suggest cities, transport logic, hotel areas and experience options.': 'Proponemos ciudades, lógica de transporte, zonas de hotel y opciones de experiencia.',
      'Arrange The Details': 'Organizamos los detalles',
      'Local experiences, drivers, tickets, apps, hotels and premium options arranged through independent local partners.': 'Experiencias locales, conductores, entradas, apps, hoteles y opciones premium coordinadas con socios locales independientes.',
      'Travel With Support': 'Viaja con apoyo',
      'You travel with a clearer route and coordination support when needed.': 'Viajas con una ruta más clara y apoyo de coordinación cuando lo necesites.',
      'Pick a route': 'Elige una ruta',
      'Add premium access': 'Añade acceso premium',
      'Travel with support': 'Viaja con apoyo',
      'Aerial': 'Aéreo',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Vuelos panorámicos seleccionados sobre Zhangjiajie, montañas o paisajes dramáticos cuando estén disponibles.',
      'Water': 'Agua',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Río Li, cruceros nocturnos urbanos o rutas tranquilas de naturaleza según el destino.',
      'Events': 'Eventos',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination arranged through local partners where applicable.': 'Cenas privadas, visitas de negocios, rodajes para creadores, llegadas de grupos y coordinación local.',
      'Comfort': 'Comodidad',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Hoteles boutique, vistas desde acantilados, habitaciones premium y estancias escénicas que encajan con la ruta.',
      'Since 2015': 'Desde 2015',
      'living, studying and traveling across China': 'viviendo, estudiando y viajando por China',
      'Since 2020': 'Desde 2020',
      'online language school, enrollment anytime': 'escuela online de idiomas, inscripción en cualquier momento',
      'China since 2015': 'China desde 2015',
      'China Education': 'Educación en China',
      "Studied Chinese at Shenzhen University and finished a bachelor's degree in Chinese, inside the Chinese student environment.": 'Estudió chino en Shenzhen University y terminó una licenciatura en chino dentro del entorno estudiantil chino.',
      'Admissions Support': 'Apoyo para admisiones',
      'We also help students understand study opportunities in China, university applications and the practical side of moving there.': 'También ayudamos a estudiantes a entender oportunidades de estudio en China, solicitudes universitarias y la parte práctica de mudarse.',
      'Travel Network': 'Red de viajes',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': 'La cooperación reciente con Ctrip y conferencias de turismo nos ayuda a ver nuevas rutas, hoteles y formatos de experiencia antes de que sean obvios.',
      'See how we talk about China before you travel with us.': 'Mira cómo hablamos de China antes de viajar con nosotros.',
      'Direct, practical and based on real experience living, studying and traveling across China.': 'Directo, práctico y basado en experiencia real viviendo, estudiando y viajando por China.',
      'Watch the video here on the site. No YouTube jump, just press play.': 'Mira el video aquí mismo, sin salir del sitio. Solo pulsa play.',
      'Plan after watching': 'Planificar después del video',
      'Open on YouTube': 'Abrir en YouTube',
      'First China Trip': 'Primer viaje a China',
      '“China looks incredible, but online information feels scattered. I need a route that makes sense, not just a list of cities.”': '«China parece increíble, pero la información online está dispersa. Necesito una ruta con sentido, no solo una lista de ciudades».',
      'Route idea: Shanghai → Zhangjiajie → Chongqing': 'Idea de ruta: Shanghái → Zhangjiajie → Chongqing',
      'Creator Route': 'Ruta para creadores',
      '“I want cinematic places, night views and nature, but I do not know where the best viewpoints and timing are.”': '«Quiero lugares cinematográficos, vistas nocturnas y naturaleza, pero no sé cuáles son los mejores miradores ni los horarios».',
      'Route idea: Chongqing → Zhangjiajie → Yangshuo': 'Idea de ruta: Chongqing → Zhangjiajie → Yangshuo',
      'Premium Nature': 'Naturaleza premium',
      '“We want beautiful landscapes, boutique stays and comfort, without turning the trip into a rushed checklist.”': '«Queremos paisajes bonitos, hoteles boutique y comodidad, sin convertir el viaje en una lista apresurada».',
      'Route idea: Yunnan → Yangshuo → Zhangjiajie': 'Idea de ruta: Yunnan → Yangshuo → Zhangjiajie',
      'Business + Travel': 'Negocios + viaje',
      '“I am combining meetings, conferences and travel. I need local logic, transport clarity and time to actually enjoy China.”': '«Estoy combinando reuniones, conferencias y viaje. Necesito lógica local, transporte claro y tiempo para disfrutar China».',
      'Route idea: Shenzhen → Guangzhou → Hong Kong': 'Idea de ruta: Shenzhen → Guangzhou → Hong Kong',
      'Don’t fill this out:': 'No rellenes esto:',
      'Name': 'Nombre',
      'WhatsApp / Telegram': 'WhatsApp / Telegram',
      'Things most travelers ask before visiting China': 'Lo que más preguntan los viajeros antes de visitar China',
      'Do I need a visa for China?': '¿Necesito visa para China?',
      'Visa requirements depend on your passport, route, travel dates and the cities you plan to visit. We can help you understand what to verify for your specific trip, but final visa decisions always depend on official authorities.': 'Los requisitos de visa dependen de tu pasaporte, ruta, fechas y ciudades. Podemos ayudarte a entender qué verificar, pero la decisión final siempre depende de las autoridades oficiales.',
      'Is China difficult for first-time visitors?': '¿China es difícil para una primera visita?',
      'China is rewarding, but it works differently from Europe, North America and Southeast Asia. Mobile payments, apps, hotels and transport require preparation. With the right setup, travel becomes much easier.': 'China merece mucho la pena, pero funciona distinto a Europa, Norteamérica y el Sudeste Asiático. Pagos móviles, apps, hoteles y transporte requieren preparación. Con la configuración correcta, viajar es mucho más fácil.',
      'Can I travel around China without speaking Chinese?': '¿Puedo viajar por China sin hablar chino?',
      'Yes, but the route and app setup matter. A well-planned trip can prevent most communication problems before they happen.': 'Sí, pero la ruta y la configuración de apps importan. Un viaje bien planificado evita la mayoría de problemas de comunicación antes de que ocurran.',
      'Can you arrange unique or extreme experiences?': '¿Podéis organizar experiencias únicas o extremas?',
      'Depending on location, season, availability and local provider conditions, we may help coordinate helicopter flights, horseback riding, private boat experiences, sunrise routes, special stays and creator-focused routes through local partners.': 'Según el lugar, la temporada, la disponibilidad y las condiciones de proveedores locales, podemos ayudar a coordinar vuelos en helicóptero, equitación, experiencias privadas en barco, rutas al amanecer, estancias especiales y rutas para creadores con socios locales.',
      'Can your team help before I arrive?': '¿Vuestro equipo puede ayudar antes de mi llegada?',
      'Yes. We can help with route planning, hotel areas, transport logic, WeChat and Alipay preparation, eSIM suggestions and general travel strategy.': 'Sí. Podemos ayudar con planificación de ruta, zonas de hoteles, lógica de transporte, preparación de WeChat y Alipay, eSIM y estrategia general.',
      'Custom China Travel Planning • Private China Experiences • Premium Travel Support • Local Partners Across China': 'Planificación de viajes por China • Experiencias privadas en China • Apoyo premium de viaje • Socios locales en China',
      'Chieasy School': 'Chieasy School',
      'Cookie notice': 'Aviso de cookies',
      'Privacy Policy': 'Política de privacidad',
      'GDPR Privacy Policy': 'Política de privacidad RGPD',
      'GDPR Consent': 'Consentimiento RGPD',
      'Consent to Personal Data Processing': 'Consentimiento para el tratamiento de datos personales',
      'Personal Data Consent': 'Consentimiento de datos personales',
      'Cookie Policy': 'Política de cookies',
      'Terms & Conditions': 'Términos y condiciones',
      'User Agreement': 'Acuerdo de usuario',
      'Public Offer': 'Oferta pública',
      'Refund Policy': 'Política de reembolso',
      'Responsibility': 'Responsabilidad',
      'Disclaimer': 'Aviso legal',
      'Travel Participation & Risk Waiver': 'Participación y exención de riesgos',
      'Travel Participation & Risk Waiver Agreement': 'Acuerdo de participación y exención de riesgos',
      'Legal Documents': 'Documentos legales',
      'Close': 'Cerrar',
      'Close legal popup': 'Cerrar ventana legal',
      'Review the official document before booking or paying for services.': 'Revisa el documento oficial antes de reservar o pagar servicios.',
      'I consent to the processing of my personal data.': 'Acepto el tratamiento de mis datos personales.',
      'Read personal data consent': 'Leer consentimiento de datos',
      'Open menu': 'Abrir menú',
      'Language switcher': 'Selector de idioma',
      'Close route details': 'Cerrar detalles de ruta',
      'Education and travel network': 'Red de educación y viajes',
      'China travel video': 'Video de viajes por China',
      'Ilya at a travel conference in China': 'Ilya en una conferencia de turismo en China'
    },
    pt: {
      'Chieasy Travel — Custom China Travel Planning & Premium Experiences': 'Chieasy Travel — viagens personalizadas e experiências premium na China',
      'China Consultation': 'Consultoria sobre a China',
      '45 minutes · €149': '45 minutos · €149',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Lógica do roteiro, apps, pagamentos, hotéis, transporte e dúvidas da primeira viagem.',
      'Local': 'Local',
      '45 minutes': '45 minutos',
      'Swipe sideways': 'Deslize os cartões',
      '7–10 days': '7–10 dias',
      '5–7 days': '5–7 dias',
      '7–9 days': '7–9 dias',
      '8–12 days': '8–12 dias',
      '8 days': '8 dias',
      '4–5 days': '4–5 dias',
      '6–9 days': '6–9 dias',
      'Hong Kong → Macau → Guangzhou → Shenzhen. South China, skyline, food, business and history.': 'Hong Kong → Macau → Guangzhou → Shenzhen. Sul da China: vistas urbanas, gastronomia, negócios e história.',
      'Beijing → Nanjing → Changsha → Xi\'an. Ancient capitals, city walls, temples and big historical questions.': 'Pequim → Nanjing → Changsha → Xi\'an. Capitais antigas, muralhas, templos e grandes histórias.',
      'Taishan → Huashan → Hengshan → Songshan. Cliffs, temples, sunrise routes and active China.': 'Taishan → Huashan → Hengshan → Songshan. Penhascos, templos, nascer do sol e uma China ativa.',
      'Qingdao → Chongqing → Shenzhen → Hong Kong. Neon cities, layered roads and future-facing China.': 'Qingdao → Chongqing → Shenzhen → Hong Kong. Cidades de neon, estradas em camadas e a China do futuro.',
      'Guangzhou → Chengdu → Xi\'an. Cantonese food, Sichuan spice, markets and unexpected flavors.': 'Guangzhou → Chengdu → Xi\'an. Comida cantonesa, tempero de Sichuan, mercados e sabores inesperados.',
      'Dali → Lijiang → Shangri-La. Ancient towns, snow mountains, lakes, tea culture and slower China.': 'Dali → Lijiang → Shangri-La. Vilas antigas, montanhas nevadas, lagos, cultura do chá e uma China mais lenta.',
      'Active': 'Ativo',
      'Custom': 'Personalizado',
      'Popular Places': 'Lugares populares',
      'Route highlights': 'Destaques do roteiro',
      'Plan this route': 'Planejar este roteiro',
      'Keep exploring': 'Continuar explorando',
      'Fly Above the Avatar Mountains': 'Voar sobre as Montanhas Avatar',
      'Waterfall Cliff Hotels': 'Hotéis entre cachoeiras e penhascos',
      'Ride Across the Grasslands': 'Cavalgar pelas pradarias',
      'Inner Mongolia horses, yurts and sunset routes.': 'Cavalos, yurts e rotas ao pôr do sol na Mongólia Interior.',
      'Desert highways, mountains and remote landscapes.': 'Estradas do deserto, montanhas e paisagens remotas.',
      'Yangshuo River Experience': 'Experiência no rio de Yangshuo',
      'Chongqing After Dark': 'Chongqing à noite',
      'Cyberpunk viewpoints, neon streets and night photography.': 'Mirantes cyberpunk, ruas de neon e fotografia noturna.',
      'Standard Group Trip': 'Viagem em grupo padrão',
      'Fixed itinerary': 'Itinerário fixo',
      'Custom route': 'Roteiro personalizado',
      'Common hotspots': 'Paradas comuns',
      'Hidden gems + essentials': 'Lugares secretos + essenciais',
      'Large groups': 'Grupos grandes',
      'Private planning': 'Planejamento privado',
      'Generic local guide': 'Guia local genérico',
      'China specialist network': 'Rede de especialistas em China',
      'Limited flexibility': 'Flexibilidade limitada',
      'Trip designed around you': 'Viagem desenhada para você',
      'Tell Us About Your Trip': 'Conte-nos sobre sua viagem',
      'Share your dates, travel style, interests and budget.': 'Compartilhe datas, estilo de viagem, interesses e orçamento.',
      'Get Your Custom Route': 'Receba seu roteiro personalizado',
      'We suggest cities, transport logic, hotel areas and experience options.': 'Sugerimos cidades, lógica de transporte, zonas de hotel e opções de experiência.',
      'Arrange The Details': 'Organizamos os detalhes',
      'Local experiences, drivers, tickets, apps, hotels and premium options arranged through independent local partners.': 'Experiências locais, motoristas, ingressos, apps, hotéis e opções premium coordenadas com parceiros locais independentes.',
      'Travel With Support': 'Viaje com apoio',
      'You travel with a clearer route and coordination support when needed.': 'Você viaja com um roteiro mais claro e apoio de coordenação quando precisar.',
      'Pick a route': 'Escolha um roteiro',
      'Add premium access': 'Adicione acesso premium',
      'Travel with support': 'Viaje com apoio',
      'Aerial': 'Aéreo',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Voos panorâmicos selecionados sobre Zhangjiajie, montanhas ou paisagens dramáticas quando disponíveis.',
      'Water': 'Água',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Rio Li, cruzeiros noturnos urbanos ou rotas tranquilas de natureza de acordo com o destino.',
      'Events': 'Eventos',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination arranged through local partners where applicable.': 'Jantares privados, visitas de negócios, gravações para criadores, chegadas de grupos e coordenação local.',
      'Comfort': 'Conforto',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Hotéis boutique, vistas de penhascos, quartos premium e estadias cênicas que combinam com o roteiro.',
      'Since 2015': 'Desde 2015',
      'living, studying and traveling across China': 'vivendo, estudando e viajando pela China',
      'Since 2020': 'Desde 2020',
      'online language school, enrollment anytime': 'escola online de idiomas, matrícula a qualquer momento',
      'China since 2015': 'China desde 2015',
      'China Education': 'Educação na China',
      "Studied Chinese at Shenzhen University and finished a bachelor's degree in Chinese, inside the Chinese student environment.": 'Estudou chinês na Shenzhen University e concluiu uma graduação em chinês dentro do ambiente estudantil chinês.',
      'Admissions Support': 'Apoio em admissões',
      'We also help students understand study opportunities in China, university applications and the practical side of moving there.': 'Também ajudamos estudantes a entender oportunidades de estudo na China, candidaturas universitárias e a parte prática da mudança.',
      'Travel Network': 'Rede de viagens',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': 'A cooperação recente com a Ctrip e conferências de turismo nos ajuda a ver novas rotas, hotéis e formatos de experiência antes de se tornarem óbvios.',
      'See how we talk about China before you travel with us.': 'Veja como falamos sobre a China antes de viajar conosco.',
      'Direct, practical and based on real experience living, studying and traveling across China.': 'Direto, prático e baseado em experiência real vivendo, estudando e viajando pela China.',
      'Watch the video here on the site. No YouTube jump, just press play.': 'Veja o vídeo aqui mesmo, sem sair do site. Basta apertar play.',
      'Plan after watching': 'Planejar depois do vídeo',
      'Open on YouTube': 'Abrir no YouTube',
      'First China Trip': 'Primeira viagem à China',
      '“China looks incredible, but online information feels scattered. I need a route that makes sense, not just a list of cities.”': '“A China parece incrível, mas a informação online é dispersa. Preciso de um roteiro que faça sentido, não só uma lista de cidades.”',
      'Route idea: Shanghai → Zhangjiajie → Chongqing': 'Ideia de roteiro: Xangai → Zhangjiajie → Chongqing',
      'Creator Route': 'Roteiro para criadores',
      '“I want cinematic places, night views and nature, but I do not know where the best viewpoints and timing are.”': '“Quero lugares cinematográficos, vistas noturnas e natureza, mas não sei quais são os melhores mirantes nem o timing.”',
      'Route idea: Chongqing → Zhangjiajie → Yangshuo': 'Ideia de roteiro: Chongqing → Zhangjiajie → Yangshuo',
      'Premium Nature': 'Natureza premium',
      '“We want beautiful landscapes, boutique stays and comfort, without turning the trip into a rushed checklist.”': '“Queremos paisagens bonitas, hotéis boutique e conforto, sem transformar a viagem numa lista corrida.”',
      'Route idea: Yunnan → Yangshuo → Zhangjiajie': 'Ideia de roteiro: Yunnan → Yangshuo → Zhangjiajie',
      'Business + Travel': 'Negócios + viagem',
      '“I am combining meetings, conferences and travel. I need local logic, transport clarity and time to actually enjoy China.”': '“Estou combinando reuniões, conferências e viagem. Preciso de lógica local, transporte claro e tempo para realmente aproveitar a China.”',
      'Route idea: Shenzhen → Guangzhou → Hong Kong': 'Ideia de roteiro: Shenzhen → Guangzhou → Hong Kong',
      'Don’t fill this out:': 'Não preencha isto:',
      'Name': 'Nome',
      'WhatsApp / Telegram': 'WhatsApp / Telegram',
      'Things most travelers ask before visiting China': 'O que os viajantes mais perguntam antes de visitar a China',
      'Do I need a visa for China?': 'Preciso de visto para a China?',
      'Visa requirements depend on your passport, route, travel dates and the cities you plan to visit. We can help you understand what to verify for your specific trip, but final visa decisions always depend on official authorities.': 'Os requisitos de visto dependem do passaporte, roteiro, datas e cidades. Podemos ajudar a entender o que verificar, mas a decisão final sempre depende das autoridades oficiais.',
      'Is China difficult for first-time visitors?': 'A China é difícil para quem vai pela primeira vez?',
      'China is rewarding, but it works differently from Europe, North America and Southeast Asia. Mobile payments, apps, hotels and transport require preparation. With the right setup, travel becomes much easier.': 'A China vale muito a pena, mas funciona diferente da Europa, América do Norte e Sudeste Asiático. Pagamentos móveis, apps, hotéis e transporte exigem preparação. Com a configuração certa, viajar fica muito mais fácil.',
      'Can I travel around China without speaking Chinese?': 'Posso viajar pela China sem falar chinês?',
      'Yes, but the route and app setup matter. A well-planned trip can prevent most communication problems before they happen.': 'Sim, mas o roteiro e a configuração dos apps importam. Uma viagem bem planejada evita a maioria dos problemas de comunicação antes que aconteçam.',
      'Can you arrange unique or extreme experiences?': 'Vocês podem organizar experiências únicas ou extremas?',
      'Depending on location, season, availability and local provider conditions, we may help coordinate helicopter flights, horseback riding, private boat experiences, sunrise routes, special stays and creator-focused routes through local partners.': 'Dependendo do local, temporada, disponibilidade e condições dos fornecedores locais, podemos ajudar a coordenar voos de helicóptero, cavalgadas, experiências privadas de barco, rotas ao nascer do sol, estadias especiais e roteiros para criadores com parceiros locais.',
      'Can your team help before I arrive?': 'A equipe pode ajudar antes da minha chegada?',
      'Yes. We can help with route planning, hotel areas, transport logic, WeChat and Alipay preparation, eSIM suggestions and general travel strategy.': 'Sim. Podemos ajudar com planejamento de roteiro, áreas de hotéis, lógica de transporte, preparação de WeChat e Alipay, sugestões de eSIM e estratégia geral.',
      'Custom China Travel Planning • Private China Experiences • Premium Travel Support • Local Partners Across China': 'Planejamento de viagens pela China • Experiências privadas na China • Apoio premium de viagem • Parceiros locais na China',
      'Chieasy School': 'Chieasy School',
      'Cookie notice': 'Aviso de cookies',
      'Privacy Policy': 'Política de privacidade',
      'GDPR Privacy Policy': 'Política de privacidade RGPD',
      'GDPR Consent': 'Consentimento RGPD',
      'Consent to Personal Data Processing': 'Consentimento para tratamento de dados pessoais',
      'Personal Data Consent': 'Consentimento de dados pessoais',
      'Cookie Policy': 'Política de cookies',
      'Terms & Conditions': 'Termos e condições',
      'User Agreement': 'Acordo do usuário',
      'Public Offer': 'Oferta pública',
      'Refund Policy': 'Política de reembolso',
      'Responsibility': 'Responsabilidade',
      'Disclaimer': 'Aviso legal',
      'Travel Participation & Risk Waiver': 'Participação e assunção de riscos',
      'Travel Participation & Risk Waiver Agreement': 'Acordo de participação e assunção de riscos',
      'Legal Documents': 'Documentos legais',
      'Close': 'Fechar',
      'Close legal popup': 'Fechar janela legal',
      'Review the official document before booking or paying for services.': 'Leia o documento oficial antes de reservar ou pagar pelos serviços.',
      'I consent to the processing of my personal data.': 'Aceito o tratamento dos meus dados pessoais.',
      'Read personal data consent': 'Ler consentimento de dados',
      'Open menu': 'Abrir menu',
      'Language switcher': 'Seletor de idioma',
      'Close route details': 'Fechar detalhes do roteiro',
      'Education and travel network': 'Rede de educação e viagens',
      'China travel video': 'Vídeo de viagens pela China',
      'Ilya at a travel conference in China': 'Ilya em uma conferência de turismo na China'
    },
    cn: {
      'Chieasy Travel — Custom China Travel Planning & Premium Experiences': 'Chieasy Travel — 中国定制路线规划与高端体验',
      'China Consultation': '中国旅行咨询',
      '45 minutes · €149': '45 分钟 · €149',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': '路线逻辑、应用、支付、酒店、交通和第一次来中国的问题。',
      'Local': '本地',
      '45 minutes': '45 分钟',
      'Swipe sideways': '左右滑动',
      '7–10 days': '7–10 天',
      '5–7 days': '5–7 天',
      '7–9 days': '7–9 天',
      '8–12 days': '8–12 天',
      '8 days': '8 天',
      '4–5 days': '4–5 天',
      '6–9 days': '6–9 天',
      'Hong Kong → Macau → Guangzhou → Shenzhen. South China, skyline, food, business and history.': '香港 → 澳门 → 广州 → 深圳。华南、天际线、美食、商务与历史。',
      'Beijing → Nanjing → Changsha → Xi\'an. Ancient capitals, city walls, temples and big historical questions.': '北京 → 南京 → 长沙 → 西安。古都、城墙、寺庙和中国历史。',
      'Taishan → Huashan → Hengshan → Songshan. Cliffs, temples, sunrise routes and active China.': '泰山 → 华山 → 衡山 → 嵩山。悬崖、寺庙、日出路线和更有运动感的中国。',
      'Qingdao → Chongqing → Shenzhen → Hong Kong. Neon cities, layered roads and future-facing China.': '青岛 → 重庆 → 深圳 → 香港。霓虹城市、立体道路和面向未来的中国。',
      'Guangzhou → Chengdu → Xi\'an. Cantonese food, Sichuan spice, markets and unexpected flavors.': '广州 → 成都 → 西安。粤菜、四川辣味、市场和意想不到的味道。',
      'Dali → Lijiang → Shangri-La. Ancient towns, snow mountains, lakes, tea culture and slower China.': '大理 → 丽江 → 香格里拉。古城、雪山、湖泊、茶文化和更慢节奏的中国。',
      'Active': '轻徒步',
      'Custom': '定制',
      'Popular Places': '热门地点',
      'Route highlights': '路线亮点',
      'Plan this route': '规划这条路线',
      'Keep exploring': '继续浏览',
      'Fly Above the Avatar Mountains': '飞越阿凡达山',
      'Waterfall Cliff Hotels': '瀑布与悬崖酒店',
      'Ride Across the Grasslands': '骑马穿越草原',
      'Inner Mongolia horses, yurts and sunset routes.': '内蒙古的马、蒙古包和日落路线。',
      'Desert highways, mountains and remote landscapes.': '沙漠公路、山脉和偏远风景。',
      'Yangshuo River Experience': '阳朔河流体验',
      'Chongqing After Dark': '夜晚的重庆',
      'Cyberpunk viewpoints, neon streets and night photography.': '赛博朋克视角、霓虹街道和夜景摄影。',
      'Standard Group Trip': '统一模板行程',
      'Fixed itinerary': '固定行程',
      'Custom route': '定制路线',
      'Common hotspots': '常规打卡点',
      'Hidden gems + essentials': '小众地点 + 必看重点',
      'Large groups': '大团',
      'Private planning': '私人规划',
      'Generic local guide': '普通本地向导',
      'China specialist network': '中国专家网络',
      'Limited flexibility': '灵活度有限',
      'Trip designed around you': '围绕你设计的旅行',
      'Tell Us About Your Trip': '告诉我们你的旅行',
      'Share your dates, travel style, interests and budget.': '分享日期、旅行风格、兴趣和预算。',
      'Get Your Custom Route': '获取定制路线',
      'We suggest cities, transport logic, hotel areas and experience options.': '我们会建议城市、交通逻辑、酒店区域和体验选项。',
      'Arrange The Details': '安排细节',
      'Local experiences, drivers, tickets, apps, hotels and premium options arranged through independent local partners.': '本地体验、司机、门票、应用、酒店和高端选项通过独立本地伙伴协调。',
      'Travel With Support': '带着支持旅行',
      'You travel with a clearer route and coordination support when needed.': '你会带着更清晰的路线出发，并在需要时获得协调支持。',
      'Pick a route': '选择路线',
      'Add premium access': '加入高端体验',
      'Travel with support': '带支持旅行',
      'Aerial': '空中',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': '在可安排时，选择张家界、山地或震撼景观的观光飞行。',
      'Water': '水上',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': '根据目的地安排漓江、城市夜游或安静的自然水路。',
      'Events': '活动',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination arranged through local partners where applicable.': '私人晚宴、商务拜访、创作者拍摄、团队抵达和现场协调。',
      'Comfort': '舒适',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': '精品酒店、悬崖景观、高端房型和适合路线的景观住宿。',
      'Since 2015': '自 2015 年',
      'living, studying and traveling across China': '在中国生活、学习和旅行',
      'Since 2020': '自 2020 年',
      'online language school, enrollment anytime': '在线语言学校，随时可报名',
      'China since 2015': '2015 年起在中国',
      'China Education': '中国教育',
      "Studied Chinese at Shenzhen University and finished a bachelor's degree in Chinese, inside the Chinese student environment.": '在深圳大学学习中文，并在中国学生环境中用中文完成本科。',
      'Admissions Support': '申请支持',
      'We also help students understand study opportunities in China, university applications and the practical side of moving there.': '我们也帮助学生了解中国学习机会、大学申请和搬到中国的实际问题。',
      'Travel Network': '旅行网络',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': '近期与 Ctrip 的合作以及旅行会议让我们更早看到新的路线、酒店和体验形式。',
      'See how we talk about China before you travel with us.': '在和我们旅行前，先看看我们如何讲中国。',
      'Direct, practical and based on real experience living, studying and traveling across China.': '直接、实用，并基于在中国生活、学习和旅行的真实经验。',
      'Watch the video here on the site. No YouTube jump, just press play.': '可以直接在网站内观看视频，不需要跳转到 YouTube，只需点击播放。',
      'Plan after watching': '看完后规划行程',
      'Open on YouTube': '在 YouTube 打开',
      'First China Trip': '第一次中国旅行',
      '“China looks incredible, but online information feels scattered. I need a route that makes sense, not just a list of cities.”': '“中国看起来很精彩，但网上信息太分散。我需要一条有逻辑的路线，而不是城市清单。”',
      'Route idea: Shanghai → Zhangjiajie → Chongqing': '路线想法：上海 → 张家界 → 重庆',
      'Creator Route': '创作者路线',
      '“I want cinematic places, night views and nature, but I do not know where the best viewpoints and timing are.”': '“我想要电影感地点、夜景和自然，但不知道哪里视角最好、时间怎么安排。”',
      'Route idea: Chongqing → Zhangjiajie → Yangshuo': '路线想法：重庆 → 张家界 → 阳朔',
      'Premium Nature': '高端自然路线',
      '“We want beautiful landscapes, boutique stays and comfort, without turning the trip into a rushed checklist.”': '“我们想要漂亮风景、精品住宿和舒适感，但不想把旅行变成赶场打卡。”',
      'Route idea: Yunnan → Yangshuo → Zhangjiajie': '路线想法：云南 → 阳朔 → 张家界',
      'Business + Travel': '商务 + 旅行',
      '“I am combining meetings, conferences and travel. I need local logic, transport clarity and time to actually enjoy China.”': '“我会把会议、商务和旅行结合起来。需要本地逻辑、清晰交通，也需要时间真正享受中国。”',
      'Route idea: Shenzhen → Guangzhou → Hong Kong': '路线想法：深圳 → 广州 → 香港',
      'Don’t fill this out:': '不要填写这里：',
      'Name': '姓名',
      'WhatsApp / Telegram': 'WhatsApp / Telegram',
      'Things most travelers ask before visiting China': '旅行者来中国前最常问的问题',
      'Do I need a visa for China?': '我需要中国签证吗？',
      'Visa requirements depend on your passport, route, travel dates and the cities you plan to visit. We can help you understand what to verify for your specific trip, but final visa decisions always depend on official authorities.': '签证要求取决于你的护照、路线、日期和计划访问的城市。我们可以帮你了解需要核实什么，但最终签证决定始终由官方机构作出。',
      'Is China difficult for first-time visitors?': '第一次来中国会很难吗？',
      'China is rewarding, but it works differently from Europe, North America and Southeast Asia. Mobile payments, apps, hotels and transport require preparation. With the right setup, travel becomes much easier.': '中国很值得来，但运行方式不同于欧洲、北美和东南亚。移动支付、应用、酒店和交通都需要提前准备。设置正确后，旅行会轻松很多。',
      'Can I travel around China without speaking Chinese?': '不会中文可以在中国旅行吗？',
      'Yes, but the route and app setup matter. A well-planned trip can prevent most communication problems before they happen.': '可以，但路线和应用设置很重要。计划好的旅行可以提前避免大多数沟通问题。',
      'Can you arrange unique or extreme experiences?': '你们能安排特别或极限体验吗？',
      'Depending on location, season, availability and local provider conditions, we may help coordinate helicopter flights, horseback riding, private boat experiences, sunrise routes, special stays and creator-focused routes through local partners.': '根据地点、季节、可用性和本地供应商条件，我们可以通过本地伙伴协助协调直升机飞行、骑马、私人船只体验、日出路线、特色住宿和创作者路线。',
      'Can your team help before I arrive?': '你们团队能在我到达前帮忙吗？',
      'Yes. We can help with route planning, hotel areas, transport logic, WeChat and Alipay preparation, eSIM suggestions and general travel strategy.': '可以。我们可以帮你规划路线、选择酒店区域、梳理交通逻辑、准备微信和支付宝、建议 eSIM，并制定整体旅行策略。',
      'Custom China Travel Planning • Private China Experiences • Premium Travel Support • Local Partners Across China': '中国定制路线规划 • 中国私人体验 • 高端旅行支持 • 中国本地合作伙伴',
      'Chieasy School': 'Chieasy 学校',
      'Cookie notice': 'Cookie 提示',
      'Privacy Policy': '隐私政策',
      'GDPR Privacy Policy': 'GDPR 隐私政策',
      'GDPR Consent': 'GDPR 同意书',
      'Consent to Personal Data Processing': '个人信息处理同意书',
      'Personal Data Consent': '个人信息处理同意书',
      'Cookie Policy': 'Cookie 政策',
      'Terms & Conditions': '条款与条件',
      'User Agreement': '用户协议',
      'Public Offer': '公开报价',
      'Refund Policy': '退款政策',
      'Responsibility': '责任说明',
      'Disclaimer': '免责声明',
      'Travel Participation & Risk Waiver': '旅行参与及风险豁免',
      'Travel Participation & Risk Waiver Agreement': '旅行参与及风险豁免协议',
      'Legal Documents': '法律文件',
      'Close': '关闭',
      'Close legal popup': '关闭法律弹窗',
      'Review the official document before booking or paying for services.': '预订或付款前，请查看官方文件。',
      'I consent to the processing of my personal data.': '我同意处理我的个人信息。',
      'Read personal data consent': '查看个人信息同意书',
      'Open menu': '打开菜单',
      'Language switcher': '语言切换',
      'Close route details': '关闭路线详情',
      'Education and travel network': '教育与旅行网络',
      'China travel video': '中国旅行视频'
      ,'Ilya at a travel conference in China': 'Ilya 在中国旅行会议现场'
    }
  };

  Object.keys(COMPLETION_TRANSLATIONS).forEach(lang => {
    Object.assign(TRANSLATIONS[lang], COMPLETION_TRANSLATIONS[lang]);
  });

  const PREMIUM_COPY_TRANSLATIONS = {
    ru: {
      'Custom China Travel Planning & Private Experiences': 'Планирование маршрутов и частные впечатления в Китае',
      'FAQ': 'Вопросы',
      'Local': 'Свои',
      'Partners across China': 'контакты по всему Китаю',
      'Active': 'Активный маршрут',
      'Swipe sideways': 'Листайте карточки',
      'Chieasy Online School': 'Онлайн-школа Chieasy',
      'Visit Chieasy School': 'Открыть школу Chieasy',
      'Chieasy School': 'Школа Chieasy',
      'Featured Video': 'Видео о Китае',
      'Open on YouTube': 'Смотреть на YouTube',
      'Discover the China Most Travelers Never See': 'Китай,\nкоторый не найти\nв шаблонном маршруте',
      'Custom routes, private China experiences and premium travel support across China — designed by a team with 12 years of real China experience and coordinated through trusted local partners.': 'Индивидуальные маршруты, частные впечатления и премиальная поддержка по Китаю — с командой, которая знает страну изнутри и координирует детали через проверенных локальных партнёров.',
      'Not a standard group trip. A smarter China route.': 'Не стандартная групповая поездка. Персональный маршрут с логикой, комфортом и вкусом.',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Мы заранее собираем всю систему поездки: маршрут, отели, транспорт, оплату, локальные контакты и впечатления, ради которых действительно стоит лететь в Китай.',
      'China Consultation': 'Частная консультация по Китаю',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Маршрут, приложения, оплата, отели, транспорт и решения, которые экономят время и нервы до поездки.',
      'Book now': 'Оплатить по СБП',
      'Online call. Secure booking via Stripe.': 'Онлайн-консультация. Оплата по СБП для русскоязычной версии.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'После оплаты напишите нам в WhatsApp, чтобы выбрать удобное время консультации.',
      'Book consultation': 'Разбор поездки',
      'Need clarity before booking the full route?': 'Хотите понять Китай до того, как бронировать поездку?',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'За 45 минут разберём вашу поездку как travel-консьерж: куда ехать, что исключить, какие приложения подготовить, где жить, как двигаться между городами и как не потерять время на месте.',
      'The consultation has a fixed price. Full route planning and premium experiences are quoted individually after dates, cities, hotel level and support needs are clear.': 'У консультации фиксированная стоимость. Полный маршрут и премиальные впечатления рассчитываются индивидуально после понимания дат, городов, уровня отелей и нужной поддержки.',
      'Route review': 'Аудит маршрута',
      'Payments & apps': 'Оплата и приложения',
      'Hotels & transport': 'Отели и логистика',
      'First-trip strategy': 'Стратегия первой поездки',
      'Ready-Made Trip Ideas': 'Маршруты как отправная точка',
      'Start with a route. Then we customize it.': 'Выберите направление.\nМы соберём частную поездку.',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': 'Это не фиксированные групповые поездки, а сильные концепции маршрутов. Мы настраиваем города, темп, районы отелей, транспорт, локальных партнёров и впечатления под ваш стиль поездки.',
      'View popular places': 'Открыть детали',
      'China Bucket List Experiences': 'Впечатления, ради которых Китай запоминается',
      'Not just places. Experiences people remember.': 'Не просто места.\nВпечатления, которые помнят.',
      'Why Chieasy Travel?': 'Почему Chieasy Travel',
      'Standard group trips are built for everyone. Our routes are built around you.': 'Обычная групповая поездка — для всех. Chieasy — вокруг вас.',
      'Standard Group Trip': 'Обычная групповая поездка',
      'Fixed itinerary': 'Жёсткая программа',
      'Custom route': 'Маршрут под вашу цель',
      'Common hotspots': 'Типовые точки',
      'Hidden gems + essentials': 'Главное + места с характером',
      'Large groups': 'Групповой формат',
      'Private planning': 'Частное планирование',
      'Generic local guide': 'Обычный локальный специалист',
      'China specialist network': 'Сеть локальных специалистов',
      'Limited flexibility': 'Минимум гибкости',
      'Trip designed around you': 'Поездка под ваш темп',
      'How It Works': 'Как мы работаем',
      'A simple process before you arrive in China.': 'Чёткий процесс до прилёта, чтобы в Китае вы уже путешествовали, а не разбирались.',
      'Tell Us About Your Trip': 'Расскажите, какой Китай вам нужен',
      'Share your dates, travel style, interests and budget.': 'Мы учитываем даты, уровень комфорта, интересы, бюджет и то, как вы любите путешествовать.',
      'Get Your Custom Route': 'Получите продуманную концепцию',
      'We suggest cities, transport logic, hotel areas and experience options.': 'Подбираем города, порядок маршрута, транспорт, районы отелей и варианты впечатлений.',
      'Arrange The Details': 'Настраиваем детали',
      'Local experiences, drivers, tickets, apps, hotels and premium options arranged through independent local partners.': 'Локальные впечатления, водители, билеты, приложения, отели и премиальные опции координируются через независимых локальных партнёров.',
      'Travel With Support': 'Путешествуйте со спокойной поддержкой',
      'You travel with a clearer route and coordination support when needed.': 'Вы едете с понятным планом и координационной поддержкой, когда она действительно нужна.',
      'Premium Add-ons': 'Премиальные опции',
      'Turn the route into a special experience.': 'Добавьте к маршруту\nособенные впечатления.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Для путешественников, которым важны не только достопримечательности: виды с воздуха, частные лодки, мероприятия, премиальные отели и деликатная локальная поддержка.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Обзорные полёты над Чжанцзяцзе и другими драматичными ландшафтами, когда это доступно по сезону и маршруту.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Лодочные впечатления, ночные круизы и спокойные природные сценарии через локальных провайдеров вокруг выбранного направления.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination arranged through local partners where applicable.': 'Частные ужины, бизнес-визиты, съёмки, приезд групп и координация деталей на месте.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Бутик-отели, номера с видом, необычные локации и проживание, которое усиливает маршрут.',
      'Founder Story': 'Кто стоит за маршрутом',
      'China, planned from the inside.': 'Китай изнутри.\nНе по туристическим шаблонам.',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': 'Сотрудничество с Ctrip и travel-конференции дают нам ранний доступ к новым маршрутам, отелям и форматам впечатлений.',
      'Traveler Notes': 'Сценарии путешественников',
      'What people usually need help with.': 'Типичные ситуации, где хороший план меняет весь уровень поездки.',
      'Common planning situations we solve before the trip, written as short traveler notes.': 'Короткие сценарии реальных запросов: от первой поездки до маршрута для контента, бизнеса или премиальной природы.',
      'Build your China route.': 'Соберите маршрут,\nкоторый будет вашим.',
      'Answer a few questions and our team will understand the best route, format and next step.': 'Ответьте на несколько вопросов, и мы поймём, какой формат, темп и маршрут будут для вас наиболее точными.',
      'Before You Visit China': 'Перед поездкой в Китай',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': 'Китай становится лёгким и красивым, когда поездка подготовлена реалистично. Здесь — вопросы, которые лучше решить до вылета.',
      'Ready to plan China properly?': 'Готовы спланировать Китай\nна другом уровне?',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': 'Отправьте даты, города и стиль путешествия. Мы поможем убрать лишнее, усилить главное и собрать маршрут, который работает.'
    },
    es: {
      'Custom China Travel Planning & Private Experiences': 'Planificación de China y experiencias privadas',
      'FAQ': 'Preguntas',
      'Active': 'Aventura',
      'Swipe sideways': 'Desliza las tarjetas',
      'Chieasy Online School': 'Escuela online Chieasy',
      'Visit Chieasy School': 'Visitar la escuela Chieasy',
      'Discover the China Most Travelers Never See': 'Descubre una China que no se encuentra en un itinerario genérico',
      'Custom routes, private China experiences and premium travel support across China — designed by a team with 12 years of real China experience and coordinated through trusted local partners.': 'Rutas a medida, experiencias privadas y apoyo premium en China, diseñados por un equipo que conoce el país desde dentro y coordinados con socios locales de confianza.',
      'Not a standard group trip. A smarter China route.': 'No es un viaje grupal estándar. Es una ruta con criterio, comodidad y estilo.',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Diseñamos la estructura completa del viaje antes de tu llegada: ruta, hoteles, transporte, pagos, apoyo local y experiencias que justifican el viaje.',
      'China Consultation': 'Consulta privada sobre China',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Ruta, apps, pagos, hoteles, transporte y decisiones que ahorran tiempo antes del viaje.',
      'Need clarity before booking the full route?': '¿Quieres entender China antes de reservar todo el viaje?',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'En 45 minutos revisamos tu viaje como un concierge: dónde ir, qué evitar, qué apps preparar, dónde alojarte, cómo moverte y cómo usar mejor tu tiempo en China.',
      'The consultation has a fixed price. Full route planning and premium experiences are quoted individually after dates, cities, hotel level and support needs are clear.': 'La consulta tiene precio fijo. La planificación completa de la ruta y las experiencias premium se cotizan individualmente después de entender fechas, ciudades, nivel de hoteles y apoyo necesario.',
      'Route review': 'Auditoría de ruta',
      'Hotels & transport': 'Hoteles y logística',
      'First-trip strategy': 'Estrategia de primera visita',
      'Ready-Made Trip Ideas': 'Rutas como punto de partida',
      'Start with a route. Then we customize it.': 'Elige una dirección. La convertimos en tu viaje privado.',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': 'No son viajes grupales cerrados, sino conceptos sólidos de ruta. Ajustamos ciudades, ritmo, zonas de hotel, transporte, socios locales y experiencias a tu forma de viajar.',
      'View popular places': 'Ver detalles',
      'China Bucket List Experiences': 'Experiencias que hacen que China se recuerde',
      'Not just places. Experiences people remember.': 'No solo lugares: momentos diseñados para convertirse en el recuerdo principal del viaje.',
      'Why Chieasy Travel?': 'Por qué Chieasy Travel',
      'Standard group trips are built for everyone. Our routes are built around you.': 'Los viajes grupales estándar se optimizan para un grupo. Nosotros diseñamos la ruta alrededor de ti.',
      'Standard Group Trip': 'Viaje grupal estándar',
      'Fixed itinerary': 'Itinerario rígido',
      'Custom route': 'Ruta según tu objetivo',
      'Common hotspots': 'Paradas previsibles',
      'Hidden gems + essentials': 'Imprescindibles + lugares con carácter',
      'Large groups': 'Formato grupal',
      'Private planning': 'Planificación privada',
      'Generic local guide': 'Apoyo local genérico',
      'China specialist network': 'Red local de especialistas',
      'Limited flexibility': 'Poca flexibilidad',
      'Trip designed around you': 'Viaje a tu ritmo',
      'How It Works': 'Cómo trabajamos',
      'A simple process before you arrive in China.': 'Un proceso claro antes de llegar, para que en China viajes, no improvises.',
      'Tell Us About Your Trip': 'Cuéntanos qué China quieres vivir',
      'Share your dates, travel style, interests and budget.': 'Tomamos en cuenta fechas, nivel de comodidad, intereses, presupuesto y tu manera de viajar.',
      'Get Your Custom Route': 'Recibe una propuesta cuidada',
      'We suggest cities, transport logic, hotel areas and experience options.': 'Definimos ciudades, orden de la ruta, transporte, zonas de hotel y opciones de experiencia.',
      'Arrange The Details': 'Ajustamos los detalles',
      'Local experiences, drivers, tickets, apps, hotels and premium options arranged through independent local partners.': 'Experiencias locales, conductores, entradas, apps, hoteles y opciones premium coordinadas con socios locales independientes dentro de un mismo plan.',
      'Travel With Support': 'Viaja con apoyo discreto',
      'You travel with a clearer route and coordination support when needed.': 'Viajas con una ruta clara y apoyo de coordinación cuando realmente hace falta.',
      'Premium Add-ons': 'Opciones premium',
      'Turn the route into a special experience.': 'Añade a la ruta aquello que convierte un buen viaje en algo excepcional.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Para viajeros que buscan más que visitar: vistas aéreas, barcos privados, logística de eventos, estancias premium y apoyo local de alto nivel.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Vuelos panorámicos seleccionados sobre Zhangjiajie y otros paisajes dramáticos, según temporada y disponibilidad.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Experiencias privadas en barco, cruceros nocturnos o naturaleza tranquila coordinados con proveedores locales.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination arranged through local partners where applicable.': 'Cenas privadas, visitas de negocios, producciones para creadores, llegadas de grupos y coordinación sobre el terreno.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Hoteles boutique, habitaciones con vistas, estancias especiales y alojamientos que elevan la ruta.',
      'Founder Story': 'Quién diseña la ruta',
      'China, planned from the inside.': 'China diseñada desde la experiencia real, no desde plantillas turísticas.',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': 'La cooperación con Ctrip y las conferencias de turismo nos acercan antes a nuevas rutas, hoteles y formatos de experiencia.',
      'Traveler Notes': 'Escenarios de viaje',
      'What people usually need help with.': 'Situaciones en las que una buena planificación cambia por completo el nivel del viaje.',
      'Common planning situations we solve before the trip, written as short traveler notes.': 'Escenarios habituales: primera visita, contenido, negocios o naturaleza premium, resueltos antes de llegar.',
      'Build your China route.': 'Diseña una ruta que parezca tu viaje, no una plantilla de otra persona.',
      'Answer a few questions and our team will understand the best route, format and next step.': 'Responde unas preguntas y entenderemos el formato, ritmo y ruta más adecuados para ti.',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': 'China se disfruta con elegancia cuando la planificación es realista. Aquí resolvemos lo que conviene saber antes de volar.',
      'Ready to plan China properly?': '¿Listo para planificar China con otro nivel de detalle?',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': 'Envíanos fechas, ciudades y estilo de viaje. Quitaremos lo innecesario, reforzaremos lo importante y construiremos una ruta que funcione.'
    },
    pt: {
      'Custom China Travel Planning & Private Experiences': 'Planejamento da China e experiências privadas',
      'FAQ': 'Dúvidas',
      'Active': 'Aventura',
      'Swipe sideways': 'Deslize os cartões',
      'Chieasy Online School': 'Escola online Chieasy',
      'Visit Chieasy School': 'Visitar a escola Chieasy',
      'Discover the China Most Travelers Never See': 'Descubra uma China que não cabe em um roteiro genérico',
      'Custom routes, private China experiences and premium travel support across China — designed by a team with 12 years of real China experience and coordinated through trusted local partners.': 'Roteiros sob medida, experiências privadas e apoio premium na China, desenhados por uma equipe que conhece o país por dentro e coordenados com parceiros locais de confiança.',
      'Not a standard group trip. A smarter China route.': 'Não é uma viagem em grupo padrão. É um roteiro com critério, conforto e estilo.',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Desenhamos toda a estrutura da viagem antes da chegada: roteiro, hotéis, transporte, pagamentos, apoio local e experiências que justificam a viagem.',
      'China Consultation': 'Consultoria privada sobre a China',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Roteiro, apps, pagamentos, hotéis, transporte e decisões que economizam tempo antes da viagem.',
      'Need clarity before booking the full route?': 'Quer entender a China antes de reservar a viagem completa?',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'Em 45 minutos revisamos sua viagem como um concierge: onde ir, o que evitar, quais apps preparar, onde se hospedar, como se deslocar e como usar melhor seu tempo na China.',
      'The consultation has a fixed price. Full route planning and premium experiences are quoted individually after dates, cities, hotel level and support needs are clear.': 'A consultoria tem preço fixo. O planejamento completo do roteiro e as experiências premium são cotados individualmente depois de entendermos datas, cidades, nível de hotéis e apoio necessário.',
      'Route review': 'Auditoria do roteiro',
      'Hotels & transport': 'Hotéis e logística',
      'First-trip strategy': 'Estratégia da primeira visita',
      'Ready-Made Trip Ideas': 'Roteiros como ponto de partida',
      'Start with a route. Then we customize it.': 'Escolha uma direção. Nós transformamos em uma viagem privada.',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': 'Não são viagens em grupo fechadas, mas conceitos fortes de roteiro. Ajustamos cidades, ritmo, zonas de hotel, transporte, parceiros locais e experiências ao seu modo de viajar.',
      'View popular places': 'Ver detalhes',
      'China Bucket List Experiences': 'Experiências que fazem a China ficar na memória',
      'Not just places. Experiences people remember.': 'Não apenas lugares: momentos desenhados para se tornarem a principal lembrança da viagem.',
      'Why Chieasy Travel?': 'Por que Chieasy Travel',
      'Standard group trips are built for everyone. Our routes are built around you.': 'Viagens em grupo padrão são otimizadas para grupos. Nós desenhamos o roteiro em torno de você.',
      'Standard Group Trip': 'Viagem em grupo padrão',
      'Fixed itinerary': 'Itinerário rígido',
      'Custom route': 'Roteiro segundo seu objetivo',
      'Common hotspots': 'Paradas previsíveis',
      'Hidden gems + essentials': 'Essenciais + lugares com personalidade',
      'Large groups': 'Formato em grupo',
      'Private planning': 'Planejamento privado',
      'Generic local guide': 'Apoio local genérico',
      'China specialist network': 'Rede local de especialistas',
      'Limited flexibility': 'Pouca flexibilidade',
      'Trip designed around you': 'Viagem no seu ritmo',
      'How It Works': 'Como trabalhamos',
      'A simple process before you arrive in China.': 'Um processo claro antes da chegada, para que na China você viaje em vez de improvisar.',
      'Tell Us About Your Trip': 'Conte-nos que China você quer viver',
      'Share your dates, travel style, interests and budget.': 'Consideramos datas, nível de conforto, interesses, orçamento e seu jeito de viajar.',
      'Get Your Custom Route': 'Receba uma proposta cuidada',
      'We suggest cities, transport logic, hotel areas and experience options.': 'Definimos cidades, ordem do roteiro, transporte, zonas de hotel e opções de experiência.',
      'Arrange The Details': 'Ajustamos os detalhes',
      'Local experiences, drivers, tickets, apps, hotels and premium options arranged through independent local partners.': 'Experiências locais, motoristas, ingressos, apps, hotéis e opções premium coordenadas com parceiros locais independentes dentro de um plano único.',
      'Travel With Support': 'Viaje com apoio discreto',
      'You travel with a clearer route and coordination support when needed.': 'Você viaja com um roteiro claro e apoio de coordenação quando realmente precisar.',
      'Premium Add-ons': 'Opções premium',
      'Turn the route into a special experience.': 'Acrescente ao roteiro aquilo que transforma uma boa viagem em algo excepcional.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Para viajantes que buscam mais que visitas: vistas aéreas, barcos privados, logística de eventos, estadias premium e apoio local de alto nível.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Voos panorâmicos selecionados sobre Zhangjiajie e outras paisagens dramáticas, conforme temporada e disponibilidade.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Experiências privadas de barco, cruzeiros noturnos ou natureza tranquila coordenados com fornecedores locais.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination arranged through local partners where applicable.': 'Jantares privados, visitas de negócios, produções para criadores, chegadas de grupos e coordenação local.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Hotéis boutique, quartos com vista, estadias especiais e hospedagens que elevam o roteiro.',
      'Founder Story': 'Quem desenha a rota',
      'China, planned from the inside.': 'China planejada a partir de experiência real, não de modelos turísticos.',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': 'A cooperação com a Ctrip e conferências de turismo nos aproxima antes de novas rotas, hotéis e formatos de experiência.',
      'Traveler Notes': 'Cenários de viagem',
      'What people usually need help with.': 'Situações em que um bom planejamento muda completamente o nível da viagem.',
      'Common planning situations we solve before the trip, written as short traveler notes.': 'Cenários comuns: primeira visita, conteúdo, negócios ou natureza premium, resolvidos antes da chegada.',
      'Build your China route.': 'Monte uma rota que pareça sua viagem, não um modelo de outra pessoa.',
      'Answer a few questions and our team will understand the best route, format and next step.': 'Responda algumas perguntas e entenderemos o formato, ritmo e roteiro mais adequados para você.',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': 'A China se aproveita com elegância quando o planejamento é realista. Aqui resolvemos o que convém saber antes de voar.',
      'Ready to plan China properly?': 'Pronto para planejar a China com outro nível de detalhe?',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': 'Envie datas, cidades e estilo de viagem. Vamos retirar o excesso, reforçar o essencial e construir um roteiro que funcione.'
    },
    cn: {
      'Custom China Travel Planning & Private Experiences': '中国定制路线规划与私人体验',
      'Active': '轻徒步',
      'Swipe sideways': '左右滑动卡片',
      'Discover the China Most Travelers Never See': '看见不属于普通行程的中国',
      'Custom routes, private China experiences and premium travel support across China — designed by a team with 12 years of real China experience and coordinated through trusted local partners.': '以真实中国经验为基础，为你设计定制路线、私人体验和高端旅行支持，并通过可信赖的本地伙伴协调。',
      'Not a standard group trip. A smarter China route.': '不是统一模板行程，而是一条更有判断力、更舒适的中国路线。',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': '在你抵达前，我们先搭建好整套旅行结构：路线、酒店、交通、支付、本地支持和真正值得体验的内容。',
      'China Consultation': '中国私人路线咨询',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': '路线逻辑、应用、支付、酒店、交通，以及第一次来中国前最重要的决定。',
      'Need clarity before booking the full route?': '想在预订前先真正看清这趟中国旅行吗？',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': '45 分钟内，我们像路线规划顾问一样梳理你的计划：去哪里、避开什么、准备哪些应用、住在哪里、如何移动，以及如何把时间用在真正值得的地方。',
      'The consultation has a fixed price. Full route planning and premium experiences are quoted individually after dates, cities, hotel level and support needs are clear.': '咨询价格固定。完整路线规划和高端体验会在确认日期、城市、酒店等级和所需支持后单独报价。',
      'Route review': '路线评估',
      'Hotels & transport': '酒店与交通逻辑',
      'First-trip strategy': '首次来华策略',
      'Ready-Made Trip Ideas': '路线灵感起点',
      'Start with a route. Then we customize it.': '先选择方向，再把它变成你的私人路线。',
      'These are sample route concepts. Dates, hotel areas, transport logic, trusted local partners and experience options are adjusted to your travel style.': '这些不是统一模板行程，而是经过筛选的路线概念。城市、节奏、酒店区域、交通、本地伙伴和体验都会按你的旅行方式调整。',
      'View popular places': '查看详情',
      'China Bucket List Experiences': '让中国旅行真正被记住的体验',
      'Not just places. Experiences people remember.': '不只是地点，而是会成为旅行核心记忆的时刻。',
      'Why Chieasy Travel?': '为什么选择 Chieasy Travel',
      'Standard group trips are built for everyone. Our routes are built around you.': '统一模板行程面向所有人。我们的路线围绕你来设计。',
      'Standard Group Trip': '统一模板行程',
      'Fixed itinerary': '固定行程',
      'Custom route': '按目标定制路线',
      'Common hotspots': '常规打卡点',
      'Hidden gems + essentials': '必看重点 + 有质感的小众地点',
      'Large groups': '大团形式',
      'Private planning': '私人规划',
      'Generic local guide': '普通本地支持',
      'China specialist network': '中国本地专家网络',
      'Limited flexibility': '灵活度有限',
      'Trip designed around you': '围绕你节奏设计的旅行',
      'How It Works': '我们的工作方式',
      'A simple process before you arrive in China.': '在抵达前完成关键规划，让你到中国后真正开始旅行，而不是临时摸索。',
      'Tell Us About Your Trip': '告诉我们你想体验怎样的中国',
      'Share your dates, travel style, interests and budget.': '我们会了解日期、舒适度、兴趣、预算，以及你喜欢的旅行节奏。',
      'Get Your Custom Route': '获得定制路线方案',
      'We suggest cities, transport logic, hotel areas and experience options.': '我们建议城市顺序、交通逻辑、酒店区域和体验内容。',
      'Arrange The Details': '完善细节',
      'Local experiences, drivers, tickets, apps, hotels and premium options arranged through independent local partners.': '本地体验、司机、门票、应用、酒店和高端选项会通过独立本地伙伴协调成一个清晰计划。',
      'Travel With Support': '带着本地支持出发',
      'You travel with a clearer route and coordination support when needed.': '你会拥有清晰路线，并在需要时获得可靠的协调支持。',
      'Premium Add-ons': '高端增值体验',
      'Turn the route into a special experience.': '把一条好路线升级成真正特别的旅行。',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': '适合不满足于普通观光的旅行者：空中视角、私人船只、活动安排、高端住宿和细致本地支持。',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': '根据季节与可安排性，甄选张家界及其他壮观景观的观光飞行体验。',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': '根据目的地安排私人船只、城市夜游或更安静的自然水路体验。',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination arranged through local partners where applicable.': '私人晚宴、商务拜访、创作者拍摄、团队抵达和现场协调。',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': '精品酒店、景观房、特色住宿，以及能提升整条路线质感的停留方式。',
      'Founder Story': '谁在设计这条路线',
      'China, planned from the inside.': '从真实中国经验出发设计路线，而不是套用旅游模板。',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': '与 Ctrip 的合作和旅行会议，让我们更早接触新的路线、酒店和体验形式。',
      'Traveler Notes': '旅行场景',
      'What people usually need help with.': '这些场景里，一个好计划会直接改变旅行质感。',
      'Common planning situations we solve before the trip, written as short traveler notes.': '从第一次来中国，到内容拍摄、商务行程或高端自然路线，我们会在出发前先解决核心问题。',
      'Build your China route.': '创建一条真正属于你的中国路线，而不是复制别人的模板行程。',
      'Answer a few questions and our team will understand the best route, format and next step.': '回答几个问题，我们会判断最适合你的形式、节奏、路线和下一步。',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': '当规划足够现实，中国会变得从容而好玩。这里先解决出发前最值得确认的问题。',
      'Ready to plan China properly?': '准备以更高标准规划中国了吗？',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': '发送日期、城市和旅行风格。我们会帮你删掉多余部分，强化真正值得的体验，并搭建一条能顺利执行的路线。'
    }
  };

  Object.keys(PREMIUM_COPY_TRANSLATIONS).forEach(lang => {
    Object.assign(TRANSLATIONS[lang], PREMIUM_COPY_TRANSLATIONS[lang]);
  });

  const FINAL_POLISH_TRANSLATIONS = {
    ru: {
      'Route logic before bookings': 'Логика маршрута до бронирований',
      'Local partner coordination': 'Координация через локальных партнёров',
      'Premium support when needed': 'Премиум-поддержка там, где нужна',
      'Planning highlights': 'Ключевые преимущества планирования',
      'Plan my China route': 'Спланировать маршрут',
      'View route ideas': 'Смотреть маршруты',
      'What happens next': 'Что будет дальше',
      'We review your answers, suggest the next step and contact you to confirm the route format.': 'Мы посмотрим ответы, предложим следующий шаг и свяжемся с вами, чтобы уточнить формат маршрута.'
    },
    es: {
      'Route logic before bookings': 'Lógica de ruta antes de reservar',
      'Local partner coordination': 'Coordinación con socios locales',
      'Premium support when needed': 'Apoyo premium cuando hace falta',
      'Planning highlights': 'Puntos clave de planificación',
      'Plan my China route': 'Planificar mi ruta por China',
      'View route ideas': 'Ver ideas de ruta',
      'What happens next': 'Qué pasa después',
      'We review your answers, suggest the next step and contact you to confirm the route format.': 'Revisamos tus respuestas, sugerimos el siguiente paso y te contactamos para confirmar el formato de la ruta.'
    },
    pt: {
      'Route logic before bookings': 'Lógica do roteiro antes das reservas',
      'Local partner coordination': 'Coordenação com parceiros locais',
      'Premium support when needed': 'Apoio premium quando necessário',
      'Planning highlights': 'Pontos-chave do planejamento',
      'Plan my China route': 'Planejar minha rota pela China',
      'View route ideas': 'Ver ideias de roteiro',
      'What happens next': 'O que acontece depois',
      'We review your answers, suggest the next step and contact you to confirm the route format.': 'Analisamos suas respostas, sugerimos o próximo passo e entramos em contacto para confirmar o formato do roteiro.'
    },
    cn: {
      'Route logic before bookings': '预订前先理清路线逻辑',
      'Local partner coordination': '通过本地伙伴协调',
      'Premium support when needed': '需要时提供高端支持',
      'Planning highlights': '规划亮点',
      'Plan my China route': '规划我的中国路线',
      'View route ideas': '查看路线灵感',
      'What happens next': '接下来会怎样',
      'We review your answers, suggest the next step and contact you to confirm the route format.': '我们会查看你的回答，建议下一步，并联系你确认路线形式。'
    }
  };

  Object.keys(FINAL_POLISH_TRANSLATIONS).forEach(lang => {
    Object.assign(TRANSLATIONS[lang], FINAL_POLISH_TRANSLATIONS[lang]);
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

  const LANGUAGE_LINKS = {
    en: {
      school: 'https://www.chieasy.online/en',
      payment: 'https://book.stripe.com/4gMaEWfXRgyQfcugOU8so1u',
      video: 'https://youtu.be/4837e_teFuw'
    },
    ru: {
      school: 'https://www.chieasy.online/ru',
      payment: 'https://qr.nspk.ru/AS1A002LE87O4UOF8HER8G3P1V62598V?type=01&bank=100000000008&crc=9612',
      video: 'https://youtu.be/4837e_teFuw?si=GmO4Z7-1Qh7ztrIw'
    }
  };

  const LANGUAGE_PRICE_TEXT = {
    en: {
      'hero-cta': '45-min Consultation · €149',
      'hero-card': '45 minutes · €149',
      'consultation-price': '€149',
      'sticky-call': 'Book consultation',
      'menu-cta': 'Book consultation'
    },
    ru: {
      'hero-cta': 'Консультация 45 минут · 12 999 ₽',
      'hero-card': '45 минут · 12 999 ₽',
      'consultation-price': '12 999 ₽',
      'sticky-call': 'Разбор поездки',
      'menu-cta': 'Разобрать поездку'
    },
    es: {
      'hero-cta': 'Consulta 45 min · €149',
      'hero-card': '45 minutos · €149',
      'consultation-price': '€149',
      'sticky-call': 'Reservar consulta',
      'menu-cta': 'Reservar consulta'
    },
    pt: {
      'hero-cta': 'Consultoria 45 min · €149',
      'hero-card': '45 minutos · €149',
      'consultation-price': '€149',
      'sticky-call': 'Reservar consultoria',
      'menu-cta': 'Reservar consultoria'
    },
    cn: {
      'hero-cta': '45 分钟咨询 · €149',
      'hero-card': '45 分钟 · €149',
      'consultation-price': '€149',
      'sticky-call': '预约咨询',
      'menu-cta': '预约咨询'
    }
  };

  const LANGUAGE_PAYMENT_TEXT = {
    en: 'Book now',
    ru: 'Оплатить по СБП',
    es: 'Reservar',
    pt: 'Reservar',
    cn: '预约'
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

    ['aria-label', 'title'].forEach(attribute => {
      document.querySelectorAll(`[${attribute}]`).forEach(element => {
        const dataKey = `original${attribute.replace(/(^|-)([a-z])/g, (_, _dash, letter) => letter.toUpperCase())}`;
        if (!element.dataset[dataKey]) element.dataset[dataKey] = element.getAttribute(attribute);
        const original = element.dataset[dataKey];
        element.setAttribute(attribute, translateString(original, activeLang));
      });
    });

    const activeLinks = LANGUAGE_LINKS[activeLang] || LANGUAGE_LINKS.en;
    document.querySelectorAll('[data-school-link]').forEach(link => {
      link.setAttribute('href', activeLinks.school);
    });
    document.querySelectorAll('[data-payment-link]').forEach(link => {
      link.setAttribute('href', activeLinks.payment);
      link.textContent = LANGUAGE_PAYMENT_TEXT[activeLang] || LANGUAGE_PAYMENT_TEXT.en;
    });
    document.querySelectorAll('[data-video-link]').forEach(link => {
      link.setAttribute('href', activeLinks.video || LANGUAGE_LINKS.en.video);
    });
    document.querySelectorAll('[data-hide-lang]').forEach(element => {
      const hiddenLanguages = element.dataset.hideLang.split(/\s+/).filter(Boolean);
      element.hidden = hiddenLanguages.includes(activeLang);
    });

    const activePriceText = LANGUAGE_PRICE_TEXT[activeLang] || LANGUAGE_PRICE_TEXT.en;
    document.querySelectorAll('[data-price-text]').forEach(element => {
      const key = element.dataset.priceText;
      if (activePriceText[key]) element.textContent = activePriceText[key];
    });
  }

  document.querySelectorAll('.lang-switch button').forEach(button => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.lang);
      syncLegalLinks(button.dataset.lang);
      closeRouteModal();
      closeLegalModal();
    });
  });

  const savedLanguage = localStorage.getItem('chieasyLanguage') || 'en';
  applyLanguage(savedLanguage);

  const legalDocuments = {
    privacy: {
      localDocs: {
        en: 'assets/legal/gdpr-privacy-eu.html',
        es: 'assets/legal/gdpr-privacy-eu.html',
        pt: 'assets/legal/gdpr-privacy-eu.html',
        cn: 'assets/legal/gdpr-privacy-eu.html',
        ru: 'assets/legal/privacy-ru.html'
      },
      content: {
        en: ['Privacy Policy', 'How personal data, cookies, inquiries, travel requests and communication are processed when you use Chieasy Travel services.'],
        ru: ['Политика конфиденциальности', 'Как обрабатываются персональные данные, cookies, заявки и переписка при использовании сервисов Chieasy.'],
        es: ['Política de privacidad', 'Cómo se procesan datos personales, cookies, solicitudes y comunicación al usar los servicios de Chieasy.'],
        pt: ['Política de privacidade', 'Como dados pessoais, cookies, pedidos e comunicações são tratados ao usar os serviços Chieasy.'],
        cn: ['隐私政策', '说明使用 Chieasy 服务时，个人信息、Cookie、咨询请求和沟通内容如何被处理。']
      }
    },
    gdprPrivacy: {
      localDocs: {
        en: 'assets/legal/gdpr-privacy-eu.html',
        es: 'assets/legal/gdpr-privacy-eu.html',
        pt: 'assets/legal/gdpr-privacy-eu.html',
        cn: 'assets/legal/gdpr-privacy-eu.html'
      },
      content: {
        en: ['GDPR Privacy Policy', 'GDPR policy explaining data controller details, collected personal data, legal bases, data sharing, international transfers, retention, security and privacy rights.'],
        es: ['Política de privacidad RGPD', 'Política RGPD sobre responsable del tratamiento, datos personales, bases legales, cesión de datos, transferencias internacionales, conservación, seguridad y derechos.'],
        pt: ['Política de privacidade RGPD', 'Política RGPD sobre controlador de dados, dados pessoais recolhidos, bases legais, partilha de dados, transferências internacionais, retenção, segurança e direitos.'],
        cn: ['GDPR 隐私政策', '说明数据控制者、收集的个人信息、法律依据、数据共享、国际传输、保存期限、安全措施以及隐私权利。']
      }
    },
    consent: {
      localDocs: {
        en: 'assets/legal/personal-data-consent-eu.html',
        es: 'assets/legal/personal-data-consent-eu.html',
        pt: 'assets/legal/personal-data-consent-eu.html',
        cn: 'assets/legal/personal-data-consent-eu.html',
        ru: 'assets/legal/personal-data-consent-ru.html'
      },
      content: {
        en: ['GDPR Consent', 'Consent for processing identity, contact, travel, technical and payment-related information needed to prepare planning and coordination support.'],
        ru: ['Согласие на обработку персональных данных', 'Согласие на обработку контактных данных, заявок, переписки, технических данных и сведений, необходимых для подготовки услуг.'],
        es: ['Consentimiento RGPD', 'Consentimiento para tratar datos de identidad, contacto, viaje, técnicos y de pago necesarios para preparar y prestar los servicios.'],
        pt: ['Consentimento RGPD', 'Consentimento para tratar dados de identidade, contacto, viagem, técnicos e de pagamento necessários para preparar e prestar os serviços.'],
        cn: ['GDPR 同意书', '同意处理联系信息、旅行需求、消息、技术数据以及准备服务所需的相关信息。']
      }
    },
    personalDataPolicy: {
      localDocs: {
        ru: 'assets/legal/personal-data-policy-ru.html'
      },
      content: {
        ru: ['Политика обработки персональных данных (ФЗ-152)', 'Порядок обработки и защиты персональных данных пользователей сайта, клиентов и иных лиц в соответствии с 152-ФЗ.']
      }
    },
    cookies: {
      localDocs: {
        en: 'assets/legal/cookie-eu.html',
        es: 'assets/legal/cookie-eu.html',
        pt: 'assets/legal/cookie-eu.html',
        cn: 'assets/legal/cookie-eu.html',
        ru: 'assets/legal/cookie-ru.html'
      },
      content: {
        en: ['Cookie Policy', 'How Chieasy Travel uses essential, analytics and marketing cookies on the website.'],
        ru: ['Политика использования cookie', 'Какие cookie используются на сайте Chieasy Travel, зачем они нужны и как ими управлять.'],
        es: ['Política de cookies', 'Cómo Chieasy Travel utiliza cookies esenciales, analíticas y de marketing en el sitio web.'],
        pt: ['Política de cookies', 'Como a Chieasy Travel utiliza cookies essenciais, analíticas e de marketing no site.'],
        cn: ['Cookie 政策', '说明 Chieasy Travel 网站如何使用必要、分析和营销 Cookie。']
      }
    },
    agreement: {
      localDocs: {
        en: 'assets/legal/terms-eu.html',
        es: 'assets/legal/terms-eu.html',
        pt: 'assets/legal/terms-eu.html',
        cn: 'assets/legal/terms-eu.html'
      },
      content: {
        en: ['Terms & Conditions', 'Terms for using the website, submitting booking requests, payments, travel planning, coordination support and independent third-party suppliers.'],
        ru: ['Пользовательское соглашение', 'Общие правила использования сайта, отправки заявок на услуги и взаимодействия с Chieasy.'],
        es: ['Términos y condiciones', 'Condiciones de uso del sitio, solicitudes de reserva, pagos, planificación de viajes, apoyo de coordinación y proveedores externos independientes.'],
        pt: ['Termos e condições', 'Condições de uso do site, pedidos de reserva, pagamentos, planejamento de viagem, apoio de coordenação e fornecedores terceiros independentes.'],
        cn: ['条款与条件', '关于网站使用、预订请求、付款、路线规划、协调支持以及独立第三方供应商的条款。']
      }
    },
    offer: {
      localDocs: {
        ru: 'assets/legal/offer-ru.html'
      },
      content: {
        en: ['Public Offer', 'Commercial terms for consultations, route planning, coordination support and client obligations.'],
        ru: ['Публичная оферта', 'Коммерческие условия консультаций, планирования маршрутов, координационной поддержки и обязательств клиента.'],
        es: ['Oferta pública', 'Condiciones comerciales de consultas, planificación de rutas, apoyo de coordinación y obligaciones del cliente.'],
        pt: ['Oferta pública', 'Condições comerciais de consultorias, planejamento de roteiros, apoio de coordenação e obrigações do cliente.'],
        cn: ['公开报价', '关于咨询、路线规划、协调支持和客户义务的商业条款。']
      }
    },
    refund: {
      localDocs: {
        en: 'assets/legal/refund-eu.html',
        es: 'assets/legal/refund-eu.html',
        pt: 'assets/legal/refund-eu.html',
        cn: 'assets/legal/refund-eu.html',
        ru: 'assets/legal/refund-ru.html'
      },
      content: {
        en: ['Refund Policy', 'Refund conditions, organizational fees, actually incurred expenses and request review timelines.'],
        ru: ['Политика возвратов', 'Порядок отмены услуг и возврата денежных средств, включая сроки отмены, фактические расходы, организационные услуги, chargeback и претензионный порядок.'],
        es: ['Política de reembolso', 'Condiciones de reembolso, gastos organizativos, costes ya incurridos y plazos de revisión de solicitudes.'],
        pt: ['Política de reembolso', 'Condições de reembolso, taxa organizacional, custos já incorridos e prazos de análise do pedido.'],
        cn: ['退款政策', '退款条件、组织服务费、已发生费用以及退款申请审核时间。']
      }
    },
    liability: {
      localDocs: {
        ru: 'assets/legal/liability-ru.html'
      },
      content: {
        en: ['Responsibility', 'Disclaimer and limitation of responsibility for routes, suppliers, visa matters, transport risks and force majeure.'],
        ru: ['Ответственность', 'Отказ от ответственности, статус компании, независимые поставщики, визовые вопросы, транспортные риски и форс-мажор.'],
        es: ['Responsabilidad', 'Aviso legal y límites de responsabilidad sobre rutas, proveedores, visados, transporte y fuerza mayor.'],
        pt: ['Responsabilidade', 'Disclaimer e limites de responsabilidade sobre roteiros, fornecedores, vistos, transporte e força maior.'],
        cn: ['责任说明', '关于路线、供应商、签证、交通风险和不可抗力的免责声明与责任限制。']
      }
    },
    disclaimer: {
      localDocs: {
        en: 'assets/legal/disclaimer-eu.html',
        es: 'assets/legal/disclaimer-eu.html',
        pt: 'assets/legal/disclaimer-eu.html',
        cn: 'assets/legal/disclaimer-eu.html',
        ru: 'assets/legal/liability-ru.html'
      },
      content: {
        en: ['Disclaimer', 'Legal disclaimer for website information, China-specific travel conditions, third-party suppliers, visas, risks, media use and liability limits.'],
        ru: ['Disclaimer', 'Отказ от ответственности: статус компании, независимые поставщики, визовые вопросы, транспортные риски, ограничения ответственности и форс-мажор.'],
        es: ['Aviso legal', 'Aviso legal sobre la información del sitio, condiciones de viaje en China, proveedores externos, visados, riesgos, uso de medios y límites de responsabilidad.'],
        pt: ['Aviso legal', 'Aviso legal sobre informações do site, condições de viagem na China, fornecedores terceiros, vistos, riscos, uso de mídia e limites de responsabilidade.'],
        cn: ['免责声明', '关于网站信息、中国旅行条件、第三方供应商、签证、风险、媒体使用及责任限制的法律免责声明。']
      }
    },
    riskWaiver: {
      localDocs: {
        en: 'assets/legal/risk-waiver-eu.html',
        es: 'assets/legal/risk-waiver-eu.html',
        pt: 'assets/legal/risk-waiver-eu.html',
        cn: 'assets/legal/risk-waiver-eu.html',
        ru: 'assets/legal/risk-waiver-ru.html'
      },
      content: {
        en: ['Travel Participation & Risk Waiver', 'Participation agreement covering voluntary travel, assumed risks, China-specific conditions, physical activities, medical fitness, suppliers, emergencies and governing law.'],
        ru: ['Соглашение о принятии рисков путешествия', 'Соглашение о добровольном участии, принятии дорожных рисков, особенностях поездок по Китаю, физических активностях, поставщиках услуг и экстренных ситуациях.'],
        es: ['Participación y exención de riesgos', 'Acuerdo sobre participación voluntaria, riesgos asumidos, condiciones específicas de China, actividades físicas, aptitud médica, proveedores, emergencias y ley aplicable.'],
        pt: ['Participação e assunção de riscos', 'Acordo sobre participação voluntária, riscos assumidos, condições específicas da China, atividades físicas, aptidão médica, fornecedores, emergências e lei aplicável.'],
        cn: ['旅行参与及风险豁免', '关于自愿参与旅行、风险承担、中国特定条件、体力活动、健康状况、第三方供应商、紧急情况及适用法律的协议。']
      }
    }
  };

  const legalModal = document.getElementById('legalModal');
  const legalModalTitle = document.getElementById('legalModalTitle');
  const legalModalText = document.getElementById('legalModalText');
  const legalModalFrame = document.getElementById('legalModalFrame');

  function syncLegalLinks(lang) {
    const activeLang = META_TRANSLATIONS[lang] ? lang : 'en';
    document.querySelectorAll('[data-legal-key]').forEach(link => {
      const documentData = legalDocuments[link.dataset.legalKey];
      if (!documentData) return;
      const localDoc = documentData.localDocs?.[activeLang] || documentData.localDocs?.en || '#';
      link.dataset.legalSrc = localDoc;
      link.setAttribute('href', `#legal-${link.dataset.legalKey}`);
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });
  }

  syncLegalLinks(savedLanguage);

  function closeLegalModal() {
    if (!legalModal) return;
    legalModal.classList.remove('open');
    legalModal.setAttribute('aria-hidden', 'true');
    if (legalModalFrame) {
      legalModalFrame.hidden = true;
      legalModalFrame.removeAttribute('src');
    }
    document.body.classList.remove('modal-open');
  }

  function openLegalModal(key) {
    const documentData = legalDocuments[key];
    if (!legalModal || !documentData) return;
    const savedActiveLang = localStorage.getItem('chieasyLanguage') || 'en';
    const activeLang = META_TRANSLATIONS[savedActiveLang] ? savedActiveLang : 'en';
    const [title, text] = documentData.content[activeLang] || documentData.content.en || Object.values(documentData.content)[0] || ['', ''];
    const localDoc = documentData.localDocs?.[activeLang] || documentData.localDocs?.en;
    closeRouteModal();
    legalModalTitle.textContent = title;
    if (localDoc && legalModalFrame) {
      legalModalText.hidden = true;
      legalModalText.textContent = '';
      legalModalFrame.hidden = false;
      legalModalFrame.setAttribute('src', localDoc);
    } else {
      legalModalText.hidden = false;
      legalModalText.textContent = text;
      if (legalModalFrame) {
        legalModalFrame.hidden = true;
        legalModalFrame.removeAttribute('src');
      }
    }
    legalModal.classList.add('open');
    legalModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  document.querySelectorAll('[data-legal-key]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      openLegalModal(link.dataset.legalKey);
    });
  });
  document.querySelectorAll('[data-close-legal-modal]').forEach(control => {
    control.addEventListener('click', closeLegalModal);
  });

  const routeDetails = {
    'shenzhen-guide': {
      title: 'Inside Shenzhen',
      text: 'A founder-led Shenzhen city day: reform-era Shekou, old urban layers, tech districts, waterfront planning, evening skyline and show timing.',
      places: [
        ['Shekou', 'Reform-Era Start', 'Sea World, port history, international Shenzhen and the first layer of the city’s opening-up story.'],
        ['Nantou / Old Shenzhen', 'Old City Layer', 'Older streets, local neighborhoods and the contrast between village roots and megacity scale.'],
        ['Construction Origin', 'City Story', 'The symbolic points connected with Shenzhen’s rapid development, early planning and reform-era speed.'],
        ['Tech & Design Districts', 'Modern Know-How', 'How Shenzhen became a hardware, design, startup and cross-border business city.'],
        ['Talent Park & Shenzhen Bay', 'Waterfront Skyline', 'Bay Area views, architecture, urban planning and a calmer golden-hour route.'],
        ['Light & Drone Shows', 'Evening Finale', 'Civic Center lights, skyline viewpoints and drone-show timing when the schedule makes it possible.']
      ]
    },
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
      title: 'Gastro Route',
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
  const routeModalVisual = document.getElementById('routeModalVisual');
  const routePlaceGrid = document.getElementById('routePlaceGrid');
  const routeBookingToggle = document.getElementById('routeBookingToggle');
  const routeBookingForm = document.getElementById('routeBookingForm');
  const routeBookingRoute = document.getElementById('routeBookingRoute');
  const routeBookingThanks = document.getElementById('routeBookingThanks');
  const routeModalLabels = {
    en: ['Route', 'Trip logic', 'Places', 'What to see', 'Options', 'What to add'],
    ru: ['Маршрут', 'Логика поездки', 'Места', 'Что посмотреть', 'Опции', 'Что можно добавить'],
    es: ['Ruta', 'Estructura del viaje', 'Lugares', 'Qué ver', 'Extras', 'Qué añadir'],
    pt: ['Roteiro', 'Estrutura da viagem', 'Lugares', 'O que ver', 'Extras', 'O que adicionar'],
    cn: ['路线', '行程逻辑', '地点', '值得看什么', '升级', '可添加内容']
  };

  const routeModalCopy = {
    'shenzhen-guide': {
      en: {
        why: 'A founder-led city day for travelers who want Shenzhen with context: reform history, old city layers, tech logic, waterfront skyline and the evening show.',
        logic: 'Shekou and Sea World as a soft waterfront start|Old Shenzhen or Nantou for the city before the skyline|Tech, design and business districts to read modern Shenzhen|Talent Park, Shenzhen Bay or Civic Center for sunset, light show and drone-show timing',
        see: 'Shekou and Sea World|Nantou or another old urban layer|A reform-era landmark or rapid-development viewpoint|Tech/design districts and innovation context|Talent Park, Shenzhen Bay and Civic Center viewpoints',
        add: 'Rooftop dinner or restaurant with a view|Premium car transfer|Photo/video focused timing|Business or innovation angle|On-site translation support|Hong Kong, Guangzhou or tech-market extension'
      },
      ru: {
        why: 'Авторский день по Шэньчжэню для тех, кто хочет увидеть город с контекстом: реформы, старые районы, tech-логику, waterfront и вечерний город-шоу.',
        logic: 'Шэкоу и Sea World — мягкий старт у воды|Старый Шэньчжэнь или Наньтоу — город до небоскрёбов|Tech, design и бизнес-районы — как устроен современный ШЖ|Talent Park, Shenzhen Bay или Civic Center — закат, световое шоу и тайминг дрон-шоу',
        see: 'Шэкоу и Sea World|Наньтоу или другой старый городской слой|Точки, связанные с реформами и быстрым строительством|Tech/design districts и инновационный контекст|Talent Park, Shenzhen Bay и видовые точки Civic Center',
        add: 'Rooftop-ужин или ресторан с видом|Премиальный трансфер|Маршрут под фото/видео|Business/innovation-акцент|Поддержка с переводом на месте|Продолжение в Гонконг, Гуанчжоу или tech-market'
      },
      es: {
        why: 'Un día de Shenzhen con contexto: reformas, capas antiguas, lógica tech, waterfront skyline y la ciudad-espectáculo de noche.',
        logic: 'Shekou y Sea World como inicio suave junto al agua|Shenzhen antiguo o Nantou para ver la ciudad antes del skyline|Distritos tech, diseño y negocios para entender el Shenzhen actual|Talent Park, Shenzhen Bay o Civic Center para atardecer, luces y drones',
        see: 'Shekou y Sea World|Nantou u otra capa urbana antigua|Puntos ligados a las reformas y al crecimiento rápido|Distritos tech/design y contexto de innovación|Talent Park, Shenzhen Bay y miradores del Civic Center',
        add: 'Cena en rooftop o restaurante con vistas|Transfer premium|Timing para foto/video|Enfoque business/innovation|Apoyo de traducción en sitio|Extensión a Hong Kong, Guangzhou o tech-market'
      },
      pt: {
        why: 'Um dia em Shenzhen com contexto: reformas, camadas antigas, lógica tech, waterfront skyline e a cidade-espetáculo à noite.',
        logic: 'Shekou e Sea World como início leve junto à água|Shenzhen antigo ou Nantou para ver a cidade antes do skyline|Distritos tech, design e negócios para entender Shenzhen hoje|Talent Park, Shenzhen Bay ou Civic Center para pôr do sol, luzes e drones',
        see: 'Shekou e Sea World|Nantou ou outra camada urbana antiga|Pontos ligados às reformas e ao crescimento acelerado|Distritos tech/design e contexto de inovação|Talent Park, Shenzhen Bay e mirantes do Civic Center',
        add: 'Jantar em rooftop ou restaurante com vista|Transfer premium|Timing para foto/vídeo|Foco business/innovation|Apoio de tradução no local|Extensão para Hong Kong, Guangzhou ou tech-market'
      },
      cn: {
        why: '适合想带着背景理解深圳的人：改革故事、老城层次、科技逻辑、湾区天际线和夜晚城市秀。',
        logic: '蛇口和海上世界：从海边轻松开始|老深圳或南头：看高楼之前的城市层次|科技、设计和商务区域：理解今天的深圳|人才公园、深圳湾或市民中心：日落、灯光秀和无人机时间',
        see: '蛇口和海上世界|南头或其他老城层次|与改革和高速发展相关的地点|科技/设计区和创新语境|人才公园、深圳湾和市民中心观景点',
        add: 'Rooftop 晚餐或景观餐厅|高端接送|适合拍照/视频的时间安排|商务/创新角度|现场翻译支持|延伸到香港、广州或 tech-market'
      }
    },
    'first-time': {
      en: {
        why: 'For a first China trip that does not feel random: one elegant megacity, one surreal nature stop and one unforgettable cyber-city.',
        logic: 'Start softly in Shanghai, move to Zhangjiajie for nature, then finish in Chongqing when you already understand the rhythm of China.',
        see: 'The Bund, Lujiazui, French Concession, Zhangjiajie National Forest Park, Tianmen Mountain, Furong and Chongqing night viewpoints.',
        add: 'River cruise in Chongqing, private driver around Zhangjiajie, food route in Shanghai, hotpot night, hotel upgrades or a photo-focused day.'
      },
      ru: {
        why: 'Для первого путешествия по Китаю без хаоса: один сильный мегаполис, одна сюрреалистичная природа и один город, который запоминается надолго.',
        logic: 'Сначала мягкий вход через Шанхай, затем природа Чжанцзяцзе, после этого Чунцин, когда вы уже привыкли к темпу Китая.',
        see: 'Бунд, Луцзяцзуй, Французская концессия, парк Чжанцзяцзе, Тяньмэньшань, Фужун и ночные виды Чунцина.',
        add: 'Ночной круиз в Чунцине, водителя в Чжанцзяцзе, гастро-вечер в Шанхае, hotpot, отель с видом или день под фото.'
      }
    },
    avatar: {
      en: {
        why: 'For the most dramatic “Avatar mountains” feeling in a compact route: cliffs, pillars, cable cars, waterfalls and high viewpoints.',
        logic: 'Keep the route concentrated around Zhangjiajie so time goes into viewpoints, mountain transfers and the right weather windows.',
        see: 'Zhangjiajie National Forest Park, Tianmen Mountain, Heaven’s Gate, glass walkways, Furong Ancient Town and Baofeng Lake.',
        add: 'Helicopter flight when available, cliffside hotel, private transfer, early sunrise timing, glass bridge or a cinematic photo route.'
      },
      ru: {
        why: 'Для тех, кто летит за эффектом “гор Аватара”: скалы, каменные колонны, канатные дороги, водопады и мощные обзорные точки.',
        logic: 'Маршрут лучше держать вокруг Чжанцзяцзе, чтобы не терять время на лишние переезды и ловить правильные окна по погоде.',
        see: 'Национальный парк Чжанцзяцзе, Тяньмэньшань, Небесные ворота, стеклянные тропы, Фужун и озеро Баофэн.',
        add: 'Вертолёт при доступности, отель у скал, приватный трансфер, рассветный выезд, стеклянный мост или маршрут для съёмки.'
      }
    },
    nature: {
      en: {
        why: 'For travelers who want China through rivers, karst mountains, old towns and soft landscapes rather than only big cities.',
        logic: 'Combine Yangshuo’s river scenery, Zhangjiajie’s cliffs and Yunnan’s slower towns into one nature-first route.',
        see: 'Li River, Yangshuo countryside, Guilin caves, Zhangjiajie viewpoints, Dali, Lijiang and Jade Dragon Snow Mountain.',
        add: 'Private Li River boat, cycling in Yangshuo, boutique stays in Yunnan, light hiking, tea experience or sunrise viewpoints.'
      },
      ru: {
        why: 'Для путешествия, где Китай раскрывается через реки, карстовые горы, старые города и мягкие пейзажи, а не только через мегаполисы.',
        logic: 'Соединяем реку в Яншо, скалы Чжанцзяцзе и более спокойный Юньнань, чтобы маршрут ощущался природным, но не утомительным.',
        see: 'Реку Ли, окрестности Яншо, пещеры Гуйлиня, обзорные точки Чжанцзяцзе, Дали, Лицзян и Снежную гору Юйлун.',
        add: 'Частную лодку по реке, велосипедный день в Яншо, бутик-отели в Юньнани, лёгкий хайкинг, чайную церемонию или рассвет.'
      }
    },
    'golden-triangle': {
      en: {
        why: 'For South China in one polished route: Hong Kong energy, Macau contrast, Guangzhou food and Shenzhen’s future-facing side.',
        logic: 'Move through the Pearl River Delta by short transfers, keeping the trip dense, urban and easy to adapt for business or leisure.',
        see: 'Hong Kong harbor, Macau old streets, Guangzhou food districts, Canton Tower, Shenzhen creative parks and coastal viewpoints.',
        add: 'Premium dining, business meetings, skyline shoots, theme parks, private driver between cities or a Macau evening extension.'
      },
      ru: {
        why: 'Чтобы увидеть юг Китая в одном маршруте: энергию Гонконга, контраст Макао, еду Гуанчжоу и футуризм Шэньчжэня.',
        logic: 'Передвигаемся по дельте Жемчужной реки короткими переездами, чтобы поездка была насыщенной, но без тяжелой логистики.',
        see: 'Гавань Гонконга, старые улицы Макао, гастро-районы Гуанчжоу, Canton Tower, креативные парки Шэньчжэня и виды у моря.',
        add: 'Премиальные рестораны, деловые встречи, skyline-съёмки, парки развлечений, водителя между городами или вечер в Макао.'
      }
    },
    historical: {
      en: {
        why: 'For China through old capitals, imperial scale, city walls, temples and the places that shaped the country’s story.',
        logic: 'Build the route from Beijing into ancient capitals and cultural cities, balancing big monuments with atmospheric local districts.',
        see: 'Forbidden City, Great Wall options, Xi’an city wall, Terracotta Warriors, Nanjing heritage sites and Changsha cultural stops.',
        add: 'Private history-focused guide where required, museum planning, traditional hotel areas, food streets or Luoyang grottoes extension.'
      },
      ru: {
        why: 'Чтобы увидеть Китай через древние столицы, императорский масштаб, стены, храмы и места, которые формировали историю страны.',
        logic: 'Строим маршрут от Пекина к старым столицам и культурным городам, чередуя большие памятники с живыми городскими районами.',
        see: 'Запретный город, варианты Великой стены, стену Сианя, Терракотовую армию, исторические точки Нанкина и культурный Чанша.',
        add: 'Исторического гида там, где нужен, музейную логику, традиционные районы отелей, гастро-улицы или Лунмэнь как расширение.'
      }
    },
    'sacred-mountains': {
      en: {
        why: 'For active travelers who want sacred peaks, temple routes, sunrise climbs and China’s mountain culture.',
        logic: 'This route needs careful pacing: mountain days, rest days and transfers are planned so the trip feels powerful, not exhausting.',
        see: 'Taishan sunrise, Huashan cliffs, Songshan and Shaolin area, Hengshan temples and optional Hanging Temple landscapes.',
        add: 'Sunrise timing, private transfers between mountain bases, lighter scenic alternatives, recovery hotels or a photo-focused hiking day.'
      },
      ru: {
        why: 'Для активного путешествия через священные горы, храмовые маршруты, рассветы и китайскую культуру восхождений.',
        logic: 'Здесь особенно важен темп: горные дни, отдых и переезды нужно собрать так, чтобы маршрут был сильным, но не выматывающим.',
        see: 'Рассвет на Тайшане, скалы Хуашаня, Суншань и район Шаолиня, храмы Хэншаня и при желании Висячий храм.',
        add: 'Рассветные выезды, трансферы между базами гор, более лёгкие scenic-дни, отели для восстановления или день под фото.'
      }
    },
    megacities: {
      en: {
        why: 'For travelers who want China as a futuristic night city: neon, layered roads, skyscrapers, bridges and dense urban energy.',
        logic: 'The route is built around night viewpoints and strong city contrasts, so each stop has a different visual role.',
        see: 'Chongqing night skyline, Hongya Cave, Liziba, Shenzhen tech districts, Hong Kong harbor and Qingdao coastal contrast.',
        add: 'Night driver, rooftop shoots, hotpot evening, drone-style viewpoints where permitted, premium hotels or a business layer.'
      },
      ru: {
        why: 'Для тех, кто хочет увидеть Китай как футуристичный ночной город: неон, многоуровневые дороги, небоскрёбы, мосты и плотную энергию.',
        logic: 'Маршрут строится вокруг вечерних видов и сильных городских контрастов, чтобы каждая остановка давала другой визуальный эффект.',
        see: 'Ночной Чунцин, Хунъя洞, Лицзыба, tech-районы Шэньчжэня, гавань Гонконга и морской контраст Циндао.',
        add: 'Ночного водителя, rooftop-съёмку, hotpot-вечер, точки для дрон-кадров где разрешено, премиальный отель или бизнес-блок.'
      }
    },
    xinjiang: {
      en: {
        why: 'For a real road-trip feeling: long horizons, desert roads, turquoise lakes, mountains, bazaars and Central Asian atmosphere.',
        logic: 'The route needs fewer stops and smarter driving days, because the distances are big and the landscapes are the main event.',
        see: 'Urumqi, Kashgar, Sayram Lake, Kanas, Tianshan roads, Turpan, bazaars, desert edges and mountain passes.',
        add: 'Private driver, scenic picnic stops, drone-style viewpoints where allowed, special stays, food markets or a longer Silk Road extension.'
      },
      ru: {
        why: 'Для настоящего road trip: длинные горизонты, пустынные дороги, бирюзовые озёра, горы, базары и атмосфера Центральной Азии.',
        logic: 'Здесь важно меньше случайных остановок и умнее дни в дороге: расстояния большие, а сами переезды — часть впечатления.',
        see: 'Урумчи, Кашгар, озеро Сайрам, Канас, дороги Тяньшаня, Турфан, базары, пустынные участки и горные перевалы.',
        add: 'Приватного водителя, пикники на красивых точках, дрон-локации где разрешено, особенные отели, рынки еды или Silk Road extension.'
      }
    },
    mongolia: {
      en: {
        why: 'For open space, grasslands, horses, yurts, huge skies and a calmer northern China that feels far from the megacities.',
        logic: 'Keep the route slow and scenic: one base city, grassland transfers, sunset timing and enough space for weather changes.',
        see: 'Hohhot, Xilamuren or Hulunbuir grasslands, yurts, riding areas, Erguna wetlands, desert add-ons and border-town scenery.',
        add: 'Horse riding, yurt stay, sunset dinner, private driver, light desert extension or a photographer-friendly countryside day.'
      },
      ru: {
        why: 'Для простора, степей, лошадей, юрт, огромного неба и более спокойного северного Китая, совсем не похожего на мегаполисы.',
        logic: 'Маршрут лучше делать медленным и scenic: базовый город, степные переезды, правильное время заката и запас под погоду.',
        see: 'Хух-Хото, степи Силамужэнь или Хулунбуир, юрты, места для верховой езды, Эргуна, пустынное расширение и border-town атмосферу.',
        add: 'Катание на лошадях, ночь в юрте, ужин на закате, водителя, лёгкое расширение в пустыню или день для красивой съёмки.'
      }
    },
    creator: {
      en: {
        why: 'For creators who need locations that work on camera: cyber nights, rooftops, mountains, rivers, old towns and visual contrast.',
        logic: 'The route is planned around light, timing, movement and backup locations, not just a list of cities.',
        see: 'Chongqing neon scenes, Zhangjiajie cliffs, Yangshuo river landscapes, Shanghai contrast, old towns and strong night viewpoints.',
        add: 'Local production support, private driver, early-morning access, styling-friendly hotels, drone-style route planning or vertical-video shot lists.'
      },
      ru: {
        why: 'Для тех, кому нужны локации, которые работают в кадре: кибер-ночи, rooftop-точки, горы, реки, старые города и контрасты.',
        logic: 'Маршрут планируется вокруг света, времени, перемещений и запасных локаций, а не просто вокруг списка городов.',
        see: 'Неоновый Чунцин, скалы Чжанцзяцзе, реку Яншо, контраст Шанхая, старые города и сильные ночные viewpoints.',
        add: 'Локальную production-поддержку, водителя, ранние выезды, отели под образ, planning под drone-style кадры или shot list для reels.'
      }
    },
    'food-culture': {
      en: {
        why: 'For travelers who want to understand China through food: dim sum, hotpot, noodles, markets, tea houses and regional habits.',
        logic: 'Move between regions with different flavor systems, so every city changes the table, not just the skyline.',
        see: 'Guangzhou dim sum, Chengdu hotpot and teahouses, Xi’an Muslim Quarter, food markets, local snacks and regional restaurants.',
        add: 'Private food walk, premium dinner, market morning, tea experience, cooking class or hotel areas selected around food districts.'
      },
      ru: {
        why: 'Чтобы понять Китай через еду: dim sum, hotpot, лапшу, рынки, чайные дома и привычки разных регионов.',
        logic: 'Собираем города с разными гастро-системами, чтобы в каждом месте менялся не только skyline, но и сам стол.',
        see: 'Dim sum в Гуанчжоу, hotpot и чайные Чэнду, мусульманский квартал Сианя, рынки, локальные закуски и региональные рестораны.',
        add: 'Гастро-прогулку, премиальный ужин, утренний рынок, чайный опыт, cooking class или отели рядом с сильными food districts.'
      }
    },
    yunnan: {
      en: {
        why: 'For a softer, deeper China: old towns, lakes, snow mountains, Tibetan atmosphere, tea culture and slower travel.',
        logic: 'The route should rise gradually in altitude and tempo, from Dali and Lijiang toward Shangri-La and mountain landscapes.',
        see: 'Dali, Erhai Lake, Lijiang old town, Jade Dragon Snow Mountain, Shangri-La monasteries and Tiger Leaping Gorge.',
        add: 'Boutique stays, tea experience, private driver, light hiking, photographer timing, hot springs or Xishuangbanna/Pu’er extension.'
      },
      ru: {
        why: 'Для более мягкого и глубокого Китая: старые города, озёра, снежные горы, тибетская атмосфера, чай и медленный темп.',
        logic: 'Маршрут лучше поднимать постепенно по высоте и настроению: от Дали и Лицзяна к Шангри-Ла и горным пейзажам.',
        see: 'Дали, озеро Эрхай, старый город Лицзян, Снежную гору Юйлун, монастыри Шангри-Ла и Ущелье Прыгающего Тигра.',
        add: 'Бутик-отели, чайный опыт, приватного водителя, лёгкий хайкинг, правильное время для фото, горячие источники или Пуэр/Сишуанбаньна.'
      }
    }
  };

  function closeRouteModal() {
    if (!routeModal) return;
    routeModal.classList.remove('open');
    routeModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function openRouteModal(routeKey) {
    const data = routeDetails[routeKey];
    if (!routeModal || !data) return;
    const activeLang = localStorage.getItem('chieasyLanguage') || 'en';
    const copyLang = routeModalCopy[routeKey]?.[activeLang] ? activeLang : (activeLang === 'ru' ? 'ru' : 'en');
    const copy = routeModalCopy[routeKey]?.[copyLang] || {
      why: data.text,
      logic: 'Cities, order, pace and transport are adapted to your dates and travel style.',
      see: data.places.slice(0, 4).map(place => place[0]).join(', '),
      add: 'Private driver, special stays, scenic timing and local support where it fits the route.'
    };
    const labels = routeModalLabels[activeLang] || routeModalLabels.en;
    const routeTitle = translateString(data.title, activeLang);
    closeLegalModal();
    routeModalTitle.textContent = routeTitle;
    routeModalText.textContent = copy.why;
    if (routeModalVisual) {
      const card = document.querySelector(`.route-card[data-route="${routeKey}"]`);
      const cardImage = card?.style.getPropertyValue('--bg') || '';
      routeModalVisual.style.setProperty('--route-modal-bg', cardImage || 'linear-gradient(135deg,#2b1a12,#d84a2a)');
    }
    if (routeBookingForm) {
      routeBookingForm.reset();
      routeBookingForm.hidden = true;
    }
    if (routeBookingRoute) routeBookingRoute.value = `${routeKey}: ${routeTitle}`;
    if (routeBookingThanks) routeBookingThanks.hidden = true;
    const renderRouteCardText = (description) => {
      const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[char]));
      const items = String(description || '').split('|').map(item => item.trim()).filter(Boolean);
      if (items.length <= 1) return `<p>${escapeHtml(description)}</p>`;
      return `<ul class="route-place-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    };
    routePlaceGrid.innerHTML = [
      [labels[0], labels[1], copy.logic],
      [labels[2], labels[3], copy.see],
      [labels[4], labels[5], copy.add]
    ].map(([tag, title, description]) => `
      <article class="route-place">
        <span>${tag}</span>
        <h4>${title}</h4>
        ${renderRouteCardText(description)}
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
  if (routeBookingToggle && routeBookingForm) {
    routeBookingToggle.addEventListener('click', () => {
      routeBookingForm.hidden = false;
      if (routeBookingThanks) routeBookingThanks.hidden = true;
      routeBookingForm.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }
  if (routeBookingForm) {
    routeBookingForm.addEventListener('submit', async event => {
      event.preventDefault();
      const submitButton = routeBookingForm.querySelector('button[type="submit"]');
      const originalText = submitButton?.textContent || 'Send booking request';
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = translateString('Sending...', localStorage.getItem('chieasyLanguage') || 'en');
      }

      const formData = new FormData(routeBookingForm);
      formData.set('form-name', 'route-booking-request');

      const showRouteThanks = () => {
        routeBookingForm.hidden = true;
        if (routeBookingThanks) routeBookingThanks.hidden = false;
      };

      try {
        if (window.location.protocol !== 'file:') {
          const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
          });
          if (!response.ok) throw new Error(`Route booking failed: ${response.status}`);
        }
        showRouteThanks();
      } catch (error) {
        showRouteThanks();
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    });
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeRouteModal();
      closeLegalModal();
    }
  });

  let step = 1;
  const steps = Array.from(document.querySelectorAll('.quiz-step'));
  const prev = document.getElementById('prevStep');
  const next = document.getElementById('nextStep');
  const submit = document.getElementById('submitQuiz');
  const quizForm = document.querySelector('form[name="china-trip-request"]');

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

  const successCopy = {
    en: {
      eyebrow: 'Request sent',
      sending: 'Sending...',
      title: 'Your request is in.',
      text: 'We received your answers and will review the route details.',
      note: 'We will contact you soon with the next step. If the trip is urgent, message us on WhatsApp as well.',
      button: 'Message on WhatsApp'
    },
    ru: {
      eyebrow: 'Заявка отправлена',
      sending: 'Отправляем...',
      title: 'Спасибо, мы получили вашу заявку.',
      text: 'Посмотрим ответы и детали маршрута.',
      note: 'Скоро свяжемся с вами и обсудим следующий шаг. Если поездка срочная, напишите нам также в WhatsApp.',
      button: 'Написать в WhatsApp'
    },
    es: {
      eyebrow: 'Solicitud enviada',
      sending: 'Enviando...',
      title: 'Hemos recibido tu solicitud.',
      text: 'Revisaremos tus respuestas y los detalles de la ruta.',
      note: 'Te contactaremos pronto con el siguiente paso. Si el viaje es urgente, escríbenos también por WhatsApp.',
      button: 'Escribir por WhatsApp'
    },
    pt: {
      eyebrow: 'Pedido enviado',
      sending: 'A enviar...',
      title: 'Recebemos o seu pedido.',
      text: 'Vamos rever as suas respostas e os detalhes do roteiro.',
      note: 'Entraremos em contacto em breve com o próximo passo. Se a viagem for urgente, envie-nos também uma mensagem no WhatsApp.',
      button: 'Enviar WhatsApp'
    },
    cn: {
      eyebrow: '申请已发送',
      sending: '正在发送...',
      title: '我们已收到你的旅行申请。',
      text: '我们会查看你的答案和路线细节。',
      note: '我们会尽快联系你确认下一步。如果行程比较紧急，也可以通过 WhatsApp 联系我们。',
      button: 'WhatsApp 联系'
    }
  };

  if (quizForm) {
    quizForm.addEventListener('submit', async event => {
      if (window.location.protocol === 'file:') return;
      event.preventDefault();

      if (submit) {
        const activeLang = localStorage.getItem('chieasyLanguage') || 'en';
        const copy = successCopy[activeLang] || successCopy.en;
        submit.disabled = true;
        submit.textContent = copy.sending;
      }

      const formData = new FormData(quizForm);
      formData.set('form-name', 'china-trip-request');

      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });
        if (!response.ok) throw new Error(`Form submit failed: ${response.status}`);

        const activeLang = localStorage.getItem('chieasyLanguage') || 'en';
        const copy = successCopy[activeLang] || successCopy.en;
        quizForm.classList.add('submitted');
        quizForm.innerHTML = `
          <div class="quiz-success">
            <div class="quiz-success-mark" aria-hidden="true">✓</div>
            <span class="step-label">${copy.eyebrow}</span>
            <h3>${copy.title}</h3>
            <p>${copy.text}</p>
            <p>${copy.note}</p>
            <a class="btn primary" href="https://wa.me/79173679853" target="_blank" rel="noopener">${copy.button}</a>
          </div>
        `;
      } catch (error) {
        const activeLang = localStorage.getItem('chieasyLanguage') || 'en';
        const copy = successCopy[activeLang] || successCopy.en;
        quizForm.classList.add('submitted');
        quizForm.innerHTML = `
          <div class="quiz-success">
            <div class="quiz-success-mark" aria-hidden="true">!</div>
            <span class="step-label">${copy.eyebrow}</span>
            <h3>${copy.title}</h3>
            <p>${copy.text}</p>
            <p>${copy.note}</p>
            <a class="btn primary" href="https://wa.me/79173679853" target="_blank" rel="noopener">${copy.button}</a>
          </div>
        `;
      }
    });
  }
});

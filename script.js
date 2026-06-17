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
      description: 'Персональные маршруты по Китаю с локальной экспертизой, частной поддержкой и доступом к впечатлениям, которые редко попадают в стандартные туры.'
    },
    es: {
      title: 'Chieasy Travel — viajes personalizados y experiencias premium en China',
      description: 'Viajes privados por China con criterio local, planificación precisa y acceso a experiencias que rara vez aparecen en los tours convencionales.'
    },
    pt: {
      title: 'Chieasy Travel — viagens personalizadas e experiências premium na China',
      description: 'Viagens privadas pela China com curadoria local, planejamento preciso e acesso a experiências que raramente entram em tours convencionais.'
    },
    cn: {
      title: 'Chieasy Travel — 中国定制旅行与高端体验',
      description: '以本地经验、私人支持和高端体验，打造真正有质感的中国定制旅行。'
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
      'Pay with Revolut': 'Оплатить по СБП',
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
      'Online call. Secure payment via Revolut.': 'Онлайн-консультация. Оплата по СБП для русскоязычной версии.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'После оплаты напишите нам в WhatsApp, чтобы выбрать удобное время консультации.',
      'Swipe sideways': 'Листайте карточки',
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
      'Chieasy Online School': 'Онлайн-школа Chieasy',
      'Visit Chieasy School': 'Открыть школу Chieasy',
      'Featured Video': 'Видео о Китае',
      'Start here before visiting China.': 'Начните здесь перед поездкой в Китай.',
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
      '€149 Call': 'Разбор поездки',
      'Plan Trip': 'План поездки',
      'Privacy': 'Приватность',
      'Terms': 'Условия',
      'Chieasy School': 'Chieasy School',
      'Cookie notice': 'Cookie',
      'Accept': 'Принять',
      'Privacy Policy': 'Политика приватности'
      ,'Chieasy Travel — Custom China Trips & Premium Experiences': 'Chieasy Travel — индивидуальные путешествия и премиум-впечатления в Китае'
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
      ,'Depending on location and season, yes. This can include helicopter flights, horseback riding, private boats, sunrise routes, special hotels and creator-focused routes.': 'В зависимости от места и сезона — да. Это могут быть полёты на вертолёте, верховая езда, частные лодки, маршруты на рассвет, особенные отели и маршруты для контента.'
      ,'Can your team help before I arrive?': 'Может ли команда помочь до моего приезда?'
      ,'Yes. We can help with route planning, hotel areas, transport logic, WeChat and Alipay preparation, eSIM suggestions and general travel strategy.': 'Да. Мы можем помочь с маршрутом, районами отелей, транспортной логикой, подготовкой WeChat и Alipay, eSIM и общей стратегией поездки.'
      ,'Custom China Travel Company • Private Tours • Premium Experiences • Local Partners Across China': 'Индивидуальные путешествия по Китаю • Частные туры • Премиум-впечатления • Локальные партнёры по всему Китаю'
    },
    es: {
      'Home': 'Inicio',
      'Consultation': 'Consulta',
      'Routes': 'Rutas',
      'Experiences': 'Experiencias',
      'Video': 'Video',
      'FAQ': 'Preguntas',
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
      'FAQ': 'Dúvidas',
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
      'Private boat routes through karst mountains.': 'Частные лодочные маршруты среди карстовых гор.',
      'Cyberpunk viewpoints, neon streets and night photography.': 'Киберпанк-точки, неоновые улицы и ночная съёмка.',
      'Share your dates, travel style, interests and budget.': 'Поделитесь датами, стилем путешествия, интересами и бюджетом.',
      'We suggest cities, transport logic, hotels and experiences.': 'Мы предлагаем города, транспортную логику, отели и впечатления.',
      'Private tours, drivers, tickets, apps, hotels and premium options.': 'Частные туры, водители, билеты, приложения, отели и премиум-опции.',
      'You travel with a clearer route and local help when needed.': 'Вы путешествуете с понятным маршрутом и локальной помощью при необходимости.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Для тех, кто хочет больше, чем осмотр достопримечательностей: виды с воздуха, частные лодки, организация событий, премиум-отели и внимательная локальная поддержка.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Выбранные обзорные полёты над Чжанцзяцзе, горами или драматичными пейзажами, когда доступны.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Река Ли, ночные городские круизы или спокойные природные маршруты вокруг направления.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': 'Частные ужины, бизнес-визиты, съёмки для контента, групповые приезды и координация на месте.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Бутик-отели, виды со скал, премиум-номера и проживание, которое красиво дополняет маршрут.',
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

  const COMPLETION_TRANSLATIONS = {
    es: {
      'Chieasy Travel — Custom China Trips & Premium Experiences': 'Chieasy Travel — viajes personalizados y experiencias premium en China',
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
      'Standard Tour': 'Tour estándar',
      'Fixed itinerary': 'Itinerario fijo',
      'Custom route': 'Ruta personalizada',
      'Tourist hotspots': 'Puntos turísticos típicos',
      'Hidden gems + essentials': 'Lugares secretos + imprescindibles',
      'Large groups': 'Grupos grandes',
      'Private planning': 'Planificación privada',
      'Generic guide': 'Guía genérico',
      'China specialist network': 'Red de especialistas en China',
      'Limited flexibility': 'Flexibilidad limitada',
      'Trip designed around you': 'Viaje diseñado para ti',
      'Tell Us About Your Trip': 'Cuéntanos tu viaje',
      'Share your dates, travel style, interests and budget.': 'Comparte fechas, estilo de viaje, intereses y presupuesto.',
      'Get Your Custom Route': 'Recibe tu ruta personalizada',
      'We suggest cities, transport logic, hotels and experiences.': 'Proponemos ciudades, lógica de transporte, hoteles y experiencias.',
      'Arrange The Details': 'Organizamos los detalles',
      'Private tours, drivers, tickets, apps, hotels and premium options.': 'Tours privados, conductores, entradas, apps, hoteles y opciones premium.',
      'Travel With Support': 'Viaja con apoyo',
      'You travel with a clearer route and local help when needed.': 'Viajas con una ruta más clara y ayuda local cuando la necesites.',
      'Pick a route': 'Elige una ruta',
      'Add premium access': 'Añade acceso premium',
      'Travel with support': 'Viaja con apoyo',
      'Aerial': 'Aéreo',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Vuelos panorámicos seleccionados sobre Zhangjiajie, montañas o paisajes dramáticos cuando estén disponibles.',
      'Water': 'Agua',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Río Li, cruceros nocturnos urbanos o rutas tranquilas de naturaleza según el destino.',
      'Events': 'Eventos',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': 'Cenas privadas, visitas de negocios, rodajes para creadores, llegadas de grupos y coordinación local.',
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
      'Depending on location and season, yes. This can include helicopter flights, horseback riding, private boats, sunrise routes, special hotels and creator-focused routes.': 'Según el lugar y la temporada, sí. Puede incluir helicópteros, caballos, barcos privados, rutas al amanecer, hoteles especiales y rutas para creadores.',
      'Can your team help before I arrive?': '¿Vuestro equipo puede ayudar antes de mi llegada?',
      'Yes. We can help with route planning, hotel areas, transport logic, WeChat and Alipay preparation, eSIM suggestions and general travel strategy.': 'Sí. Podemos ayudar con planificación de ruta, zonas de hoteles, lógica de transporte, preparación de WeChat y Alipay, eSIM y estrategia general.',
      'Custom China Travel Company • Private Tours • Premium Experiences • Local Partners Across China': 'Viajes personalizados por China • Tours privados • Experiencias premium • Socios locales en China',
      'Chieasy School': 'Chieasy School',
      'Cookie notice': 'Aviso de cookies',
      'Privacy Policy': 'Política de privacidad',
      'Open menu': 'Abrir menú',
      'Language switcher': 'Selector de idioma',
      'Close route details': 'Cerrar detalles de ruta',
      'Education and travel network': 'Red de educación y viajes',
      'China travel video': 'Video de viajes por China',
      'Ilya at a travel conference in China': 'Ilya en una conferencia de turismo en China'
    },
    pt: {
      'Chieasy Travel — Custom China Trips & Premium Experiences': 'Chieasy Travel — viagens personalizadas e experiências premium na China',
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
      'Standard Tour': 'Tour padrão',
      'Fixed itinerary': 'Itinerário fixo',
      'Custom route': 'Roteiro personalizado',
      'Tourist hotspots': 'Pontos turísticos comuns',
      'Hidden gems + essentials': 'Lugares secretos + essenciais',
      'Large groups': 'Grupos grandes',
      'Private planning': 'Planejamento privado',
      'Generic guide': 'Guia genérico',
      'China specialist network': 'Rede de especialistas em China',
      'Limited flexibility': 'Flexibilidade limitada',
      'Trip designed around you': 'Viagem desenhada para você',
      'Tell Us About Your Trip': 'Conte-nos sobre sua viagem',
      'Share your dates, travel style, interests and budget.': 'Compartilhe datas, estilo de viagem, interesses e orçamento.',
      'Get Your Custom Route': 'Receba seu roteiro personalizado',
      'We suggest cities, transport logic, hotels and experiences.': 'Sugerimos cidades, lógica de transporte, hotéis e experiências.',
      'Arrange The Details': 'Organizamos os detalhes',
      'Private tours, drivers, tickets, apps, hotels and premium options.': 'Tours privados, motoristas, ingressos, apps, hotéis e opções premium.',
      'Travel With Support': 'Viaje com apoio',
      'You travel with a clearer route and local help when needed.': 'Você viaja com um roteiro mais claro e ajuda local quando precisar.',
      'Pick a route': 'Escolha um roteiro',
      'Add premium access': 'Adicione acesso premium',
      'Travel with support': 'Viaje com apoio',
      'Aerial': 'Aéreo',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Voos panorâmicos selecionados sobre Zhangjiajie, montanhas ou paisagens dramáticas quando disponíveis.',
      'Water': 'Água',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Rio Li, cruzeiros noturnos urbanos ou rotas tranquilas de natureza de acordo com o destino.',
      'Events': 'Eventos',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': 'Jantares privados, visitas de negócios, gravações para criadores, chegadas de grupos e coordenação local.',
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
      'Depending on location and season, yes. This can include helicopter flights, horseback riding, private boats, sunrise routes, special hotels and creator-focused routes.': 'Dependendo do local e da temporada, sim. Pode incluir helicópteros, cavalos, barcos privados, rotas ao nascer do sol, hotéis especiais e roteiros para criadores.',
      'Can your team help before I arrive?': 'A equipe pode ajudar antes da minha chegada?',
      'Yes. We can help with route planning, hotel areas, transport logic, WeChat and Alipay preparation, eSIM suggestions and general travel strategy.': 'Sim. Podemos ajudar com planejamento de roteiro, áreas de hotéis, lógica de transporte, preparação de WeChat e Alipay, sugestões de eSIM e estratégia geral.',
      'Custom China Travel Company • Private Tours • Premium Experiences • Local Partners Across China': 'Viagens personalizadas pela China • Tours privados • Experiências premium • Parceiros locais na China',
      'Chieasy School': 'Chieasy School',
      'Cookie notice': 'Aviso de cookies',
      'Privacy Policy': 'Política de privacidade',
      'Open menu': 'Abrir menu',
      'Language switcher': 'Seletor de idioma',
      'Close route details': 'Fechar detalhes do roteiro',
      'Education and travel network': 'Rede de educação e viagens',
      'China travel video': 'Vídeo de viagens pela China',
      'Ilya at a travel conference in China': 'Ilya em uma conferência de turismo na China'
    },
    cn: {
      'Chieasy Travel — Custom China Trips & Premium Experiences': 'Chieasy Travel — 中国定制旅行与高端体验',
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
      'Standard Tour': '标准团',
      'Fixed itinerary': '固定行程',
      'Custom route': '定制路线',
      'Tourist hotspots': '常规景点',
      'Hidden gems + essentials': '小众地点 + 必看重点',
      'Large groups': '大团',
      'Private planning': '私人规划',
      'Generic guide': '普通导游',
      'China specialist network': '中国专家网络',
      'Limited flexibility': '灵活度有限',
      'Trip designed around you': '围绕你设计的旅行',
      'Tell Us About Your Trip': '告诉我们你的旅行',
      'Share your dates, travel style, interests and budget.': '分享日期、旅行风格、兴趣和预算。',
      'Get Your Custom Route': '获取定制路线',
      'We suggest cities, transport logic, hotels and experiences.': '我们会建议城市、交通逻辑、酒店和体验。',
      'Arrange The Details': '安排细节',
      'Private tours, drivers, tickets, apps, hotels and premium options.': '私人旅行、司机、门票、应用、酒店和高端选项。',
      'Travel With Support': '带着支持旅行',
      'You travel with a clearer route and local help when needed.': '你会带着更清晰的路线出发，并在需要时获得本地帮助。',
      'Pick a route': '选择路线',
      'Add premium access': '加入高端体验',
      'Travel with support': '带支持旅行',
      'Aerial': '空中',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': '在可安排时，选择张家界、山地或震撼景观的观光飞行。',
      'Water': '水上',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': '根据目的地安排漓江、城市夜游或安静的自然水路。',
      'Events': '活动',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': '私人晚宴、商务拜访、创作者拍摄、团队抵达和现场协调。',
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
      'Depending on location and season, yes. This can include helicopter flights, horseback riding, private boats, sunrise routes, special hotels and creator-focused routes.': '取决于地点和季节，可以。这包括直升机、骑马、私人船只、日出路线、特色酒店和创作者路线。',
      'Can your team help before I arrive?': '你们团队能在我到达前帮忙吗？',
      'Yes. We can help with route planning, hotel areas, transport logic, WeChat and Alipay preparation, eSIM suggestions and general travel strategy.': '可以。我们可以帮你规划路线、选择酒店区域、梳理交通逻辑、准备微信和支付宝、建议 eSIM，并制定整体旅行策略。',
      'Custom China Travel Company • Private Tours • Premium Experiences • Local Partners Across China': '中国定制旅行公司 • 私人旅行 • 高端体验 • 中国本地合作伙伴',
      'Chieasy School': 'Chieasy 学校',
      'Cookie notice': 'Cookie 提示',
      'Privacy Policy': '隐私政策',
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
      'Custom China Travel Company': 'Частный travel-консьерж по Китаю',
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
      'Discover the China Most Travelers Never See': 'Китай,\nкоторый не найти\nв обычном туре',
      'Custom routes, private tours and premium experiences across China — built by a team founded on 12 years of real China experience.': 'Индивидуальные маршруты, частная поддержка и редкие впечатления по Китаю — с командой, которая знает страну изнутри, а не по туристическим шаблонам.',
      'Not a standard tour. A smarter China route.': 'Не турпакет. Персональный маршрут с логикой, комфортом и вкусом.',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Мы заранее собираем всю систему поездки: маршрут, отели, транспорт, оплату, локальные контакты и впечатления, ради которых действительно стоит лететь в Китай.',
      'China Consultation': 'Частная консультация по Китаю',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Маршрут, приложения, оплата, отели, транспорт и решения, которые экономят время и нервы до поездки.',
      'Pay with Revolut': 'Оплатить по СБП',
      'Online call. Secure payment via Revolut.': 'Онлайн-консультация. Оплата по СБП для русскоязычной версии.',
      'After payment, message us on WhatsApp to choose a time for the call.': 'После оплаты напишите нам в WhatsApp, чтобы выбрать удобное время консультации.',
      '€149 Call': 'Разбор поездки',
      'Need clarity before booking the full route?': 'Хотите понять Китай до того, как бронировать поездку?',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'За 45 минут разберём вашу поездку как travel-консьерж: куда ехать, что исключить, какие приложения подготовить, где жить, как двигаться между городами и как не потерять время на месте.',
      'Route review': 'Аудит маршрута',
      'Payments & apps': 'Оплата и приложения',
      'Hotels & transport': 'Отели и логистика',
      'First-trip strategy': 'Стратегия первой поездки',
      'Ready-Made Trip Ideas': 'Маршруты как отправная точка',
      'Start with a route. Then we customize it.': 'Выберите направление.\nМы соберём частную поездку.',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': 'Это не готовые туры, а сильные концепции маршрутов. Мы настраиваем города, темп, отели, транспорт, гидов и впечатления под ваш стиль путешествия.',
      'View popular places': 'Открыть детали',
      'China Bucket List Experiences': 'Впечатления, ради которых Китай запоминается',
      'Not just places. Experiences people remember.': 'Не просто места.\nВпечатления, которые помнят.',
      'Why Chieasy Travel?': 'Почему Chieasy Travel',
      'Standard tours are built for everyone. Our routes are built for you.': 'Обычный тур — для группы.\nChieasy — под вас.',
      'Standard Tour': 'Обычный тур',
      'Fixed itinerary': 'Жёсткая программа',
      'Custom route': 'Маршрут под вашу цель',
      'Tourist hotspots': 'Типовые туристические точки',
      'Hidden gems + essentials': 'Главное + места с характером',
      'Large groups': 'Групповой формат',
      'Private planning': 'Частное планирование',
      'Generic guide': 'Стандартное сопровождение',
      'China specialist network': 'Сеть локальных специалистов',
      'Limited flexibility': 'Минимум гибкости',
      'Trip designed around you': 'Поездка под ваш темп',
      'How It Works': 'Как мы работаем',
      'A simple process before you arrive in China.': 'Чёткий процесс до прилёта, чтобы в Китае вы уже путешествовали, а не разбирались.',
      'Tell Us About Your Trip': 'Расскажите, какой Китай вам нужен',
      'Share your dates, travel style, interests and budget.': 'Мы учитываем даты, уровень комфорта, интересы, бюджет и то, как вы любите путешествовать.',
      'Get Your Custom Route': 'Получите продуманную концепцию',
      'We suggest cities, transport logic, hotels and experiences.': 'Подбираем города, порядок маршрута, транспорт, районы отелей и впечатления.',
      'Arrange The Details': 'Настраиваем детали',
      'Private tours, drivers, tickets, apps, hotels and premium options.': 'Частные туры, водители, билеты, приложения, отели и премиальные опции собираются в одну систему.',
      'Travel With Support': 'Путешествуйте со спокойной поддержкой',
      'You travel with a clearer route and local help when needed.': 'Вы едете с понятным планом и локальной помощью, когда она действительно нужна.',
      'Premium Add-ons': 'Премиальные опции',
      'Turn the route into a special experience.': 'Добавьте к маршруту\nособенные впечатления.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Для путешественников, которым важны не только достопримечательности: виды с воздуха, частные лодки, мероприятия, премиальные отели и деликатная локальная поддержка.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Обзорные полёты над Чжанцзяцзе и другими драматичными ландшафтами, когда это доступно по сезону и маршруту.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Частные лодочные маршруты, ночные круизы и спокойные природные сценарии вокруг выбранного направления.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': 'Частные ужины, бизнес-визиты, съёмки, приезд групп и координация деталей на месте.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Бутик-отели, номера с видом, необычные локации и проживание, которое усиливает маршрут.',
      'Founder Story': 'Кто стоит за маршрутом',
      'Built by someone who made China his everyday life.': 'Китай изнутри.\nНе по туристическим шаблонам.',
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
      'Custom China Travel Company': 'Concierge privado de viajes por China',
      'FAQ': 'Preguntas',
      'Active': 'Aventura',
      'Swipe sideways': 'Desliza las tarjetas',
      'Chieasy Online School': 'Escuela online Chieasy',
      'Visit Chieasy School': 'Visitar la escuela Chieasy',
      'Discover the China Most Travelers Never See': 'Descubre una China que no se encuentra en un itinerario genérico',
      'Custom routes, private tours and premium experiences across China — built by a team founded on 12 years of real China experience.': 'Rutas privadas, apoyo local y experiencias selectas por China, diseñadas por un equipo que conoce el país desde dentro.',
      'Not a standard tour. A smarter China route.': 'No es un paquete turístico. Es una ruta privada con criterio, comodidad y estilo.',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Diseñamos la estructura completa del viaje antes de tu llegada: ruta, hoteles, transporte, pagos, apoyo local y experiencias que justifican el viaje.',
      'China Consultation': 'Consulta privada sobre China',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Ruta, apps, pagos, hoteles, transporte y decisiones que ahorran tiempo antes del viaje.',
      'Need clarity before booking the full route?': '¿Quieres entender China antes de reservar todo el viaje?',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'En 45 minutos revisamos tu viaje como un concierge: dónde ir, qué evitar, qué apps preparar, dónde alojarte, cómo moverte y cómo usar mejor tu tiempo en China.',
      'Route review': 'Auditoría de ruta',
      'Hotels & transport': 'Hoteles y logística',
      'First-trip strategy': 'Estrategia de primera visita',
      'Ready-Made Trip Ideas': 'Rutas como punto de partida',
      'Start with a route. Then we customize it.': 'Elige una dirección. La convertimos en tu viaje privado.',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': 'No son tours cerrados, sino conceptos sólidos de ruta. Ajustamos ciudades, ritmo, hoteles, transporte, guías y experiencias a tu forma de viajar.',
      'View popular places': 'Ver detalles',
      'China Bucket List Experiences': 'Experiencias que hacen que China se recuerde',
      'Not just places. Experiences people remember.': 'No solo lugares: momentos diseñados para convertirse en el recuerdo principal del viaje.',
      'Why Chieasy Travel?': 'Por qué Chieasy Travel',
      'Standard tours are built for everyone. Our routes are built for you.': 'Los tours estándar se optimizan para un grupo. Nosotros diseñamos el viaje alrededor de ti.',
      'Standard Tour': 'Tour estándar',
      'Fixed itinerary': 'Itinerario rígido',
      'Custom route': 'Ruta según tu objetivo',
      'Tourist hotspots': 'Paradas turísticas previsibles',
      'Hidden gems + essentials': 'Imprescindibles + lugares con carácter',
      'Large groups': 'Formato grupal',
      'Private planning': 'Planificación privada',
      'Generic guide': 'Acompañamiento genérico',
      'China specialist network': 'Red local de especialistas',
      'Limited flexibility': 'Poca flexibilidad',
      'Trip designed around you': 'Viaje a tu ritmo',
      'How It Works': 'Cómo trabajamos',
      'A simple process before you arrive in China.': 'Un proceso claro antes de llegar, para que en China viajes, no improvises.',
      'Tell Us About Your Trip': 'Cuéntanos qué China quieres vivir',
      'Share your dates, travel style, interests and budget.': 'Tomamos en cuenta fechas, nivel de comodidad, intereses, presupuesto y tu manera de viajar.',
      'Get Your Custom Route': 'Recibe una propuesta cuidada',
      'We suggest cities, transport logic, hotels and experiences.': 'Definimos ciudades, orden de la ruta, transporte, zonas de hotel y experiencias.',
      'Arrange The Details': 'Ajustamos los detalles',
      'Private tours, drivers, tickets, apps, hotels and premium options.': 'Tours privados, conductores, entradas, apps, hoteles y opciones premium dentro de un mismo plan.',
      'Travel With Support': 'Viaja con apoyo discreto',
      'You travel with a clearer route and local help when needed.': 'Viajas con una ruta clara y ayuda local cuando realmente hace falta.',
      'Premium Add-ons': 'Opciones premium',
      'Turn the route into a special experience.': 'Añade a la ruta aquello que convierte un buen viaje en algo excepcional.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Para viajeros que buscan más que visitar: vistas aéreas, barcos privados, logística de eventos, estancias premium y apoyo local de alto nivel.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Vuelos panorámicos seleccionados sobre Zhangjiajie y otros paisajes dramáticos, según temporada y disponibilidad.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Rutas privadas en barco, cruceros nocturnos o experiencias de naturaleza tranquila según el destino.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': 'Cenas privadas, visitas de negocios, producciones para creadores, llegadas de grupos y coordinación sobre el terreno.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Hoteles boutique, habitaciones con vistas, estancias especiales y alojamientos que elevan la ruta.',
      'Founder Story': 'Quién diseña la ruta',
      'Built by someone who made China his everyday life.': 'Rutas creadas por un equipo para el que China no es solo un destino, sino experiencia vivida, estudiada y trabajada.',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': 'La cooperación con Ctrip y las conferencias de turismo nos acercan antes a nuevas rutas, hoteles y formatos de experiencia.',
      'Traveler Notes': 'Escenarios de viaje',
      'What people usually need help with.': 'Situaciones en las que una buena planificación cambia por completo el nivel del viaje.',
      'Common planning situations we solve before the trip, written as short traveler notes.': 'Escenarios habituales: primera visita, contenido, negocios o naturaleza premium, resueltos antes de llegar.',
      'Build your China route.': 'Diseña una ruta que parezca tu viaje, no el tour de otra persona.',
      'Answer a few questions and our team will understand the best route, format and next step.': 'Responde unas preguntas y entenderemos el formato, ritmo y ruta más adecuados para ti.',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': 'China se disfruta con elegancia cuando la planificación es realista. Aquí resolvemos lo que conviene saber antes de volar.',
      'Ready to plan China properly?': '¿Listo para planificar China con otro nivel de detalle?',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': 'Envíanos fechas, ciudades y estilo de viaje. Quitaremos lo innecesario, reforzaremos lo importante y construiremos una ruta que funcione.'
    },
    pt: {
      'Custom China Travel Company': 'Concierge privado de viagens pela China',
      'FAQ': 'Dúvidas',
      'Active': 'Aventura',
      'Swipe sideways': 'Deslize os cartões',
      'Chieasy Online School': 'Escola online Chieasy',
      'Visit Chieasy School': 'Visitar a escola Chieasy',
      'Discover the China Most Travelers Never See': 'Descubra uma China que não cabe em um roteiro genérico',
      'Custom routes, private tours and premium experiences across China — built by a team founded on 12 years of real China experience.': 'Roteiros privados, apoio local e experiências selecionadas pela China, desenhados por uma equipe que conhece o país por dentro.',
      'Not a standard tour. A smarter China route.': 'Não é um pacote turístico. É um roteiro privado com critério, conforto e estilo.',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': 'Desenhamos toda a estrutura da viagem antes da chegada: roteiro, hotéis, transporte, pagamentos, apoio local e experiências que justificam a viagem.',
      'China Consultation': 'Consultoria privada sobre a China',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': 'Roteiro, apps, pagamentos, hotéis, transporte e decisões que economizam tempo antes da viagem.',
      'Need clarity before booking the full route?': 'Quer entender a China antes de reservar a viagem completa?',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': 'Em 45 minutos revisamos sua viagem como um concierge: onde ir, o que evitar, quais apps preparar, onde se hospedar, como se deslocar e como usar melhor seu tempo na China.',
      'Route review': 'Auditoria do roteiro',
      'Hotels & transport': 'Hotéis e logística',
      'First-trip strategy': 'Estratégia da primeira visita',
      'Ready-Made Trip Ideas': 'Roteiros como ponto de partida',
      'Start with a route. Then we customize it.': 'Escolha uma direção. Nós transformamos em uma viagem privada.',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': 'Não são tours fechados, mas conceitos fortes de roteiro. Ajustamos cidades, ritmo, hotéis, transporte, guias e experiências ao seu modo de viajar.',
      'View popular places': 'Ver detalhes',
      'China Bucket List Experiences': 'Experiências que fazem a China ficar na memória',
      'Not just places. Experiences people remember.': 'Não apenas lugares: momentos desenhados para se tornarem a principal lembrança da viagem.',
      'Why Chieasy Travel?': 'Por que Chieasy Travel',
      'Standard tours are built for everyone. Our routes are built for you.': 'Tours padrão são otimizados para grupos. Nós desenhamos a viagem em torno de você.',
      'Standard Tour': 'Tour padrão',
      'Fixed itinerary': 'Itinerário rígido',
      'Custom route': 'Roteiro segundo seu objetivo',
      'Tourist hotspots': 'Paradas turísticas previsíveis',
      'Hidden gems + essentials': 'Essenciais + lugares com personalidade',
      'Large groups': 'Formato em grupo',
      'Private planning': 'Planejamento privado',
      'Generic guide': 'Acompanhamento genérico',
      'China specialist network': 'Rede local de especialistas',
      'Limited flexibility': 'Pouca flexibilidade',
      'Trip designed around you': 'Viagem no seu ritmo',
      'How It Works': 'Como trabalhamos',
      'A simple process before you arrive in China.': 'Um processo claro antes da chegada, para que na China você viaje em vez de improvisar.',
      'Tell Us About Your Trip': 'Conte-nos que China você quer viver',
      'Share your dates, travel style, interests and budget.': 'Consideramos datas, nível de conforto, interesses, orçamento e seu jeito de viajar.',
      'Get Your Custom Route': 'Receba uma proposta cuidada',
      'We suggest cities, transport logic, hotels and experiences.': 'Definimos cidades, ordem do roteiro, transporte, zonas de hotel e experiências.',
      'Arrange The Details': 'Ajustamos os detalhes',
      'Private tours, drivers, tickets, apps, hotels and premium options.': 'Tours privados, motoristas, ingressos, apps, hotéis e opções premium dentro de um plano único.',
      'Travel With Support': 'Viaje com apoio discreto',
      'You travel with a clearer route and local help when needed.': 'Você viaja com um roteiro claro e ajuda local quando realmente precisar.',
      'Premium Add-ons': 'Opções premium',
      'Turn the route into a special experience.': 'Acrescente ao roteiro aquilo que transforma uma boa viagem em algo excepcional.',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': 'Para viajantes que buscam mais que visitas: vistas aéreas, barcos privados, logística de eventos, estadias premium e apoio local de alto nível.',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': 'Voos panorâmicos selecionados sobre Zhangjiajie e outras paisagens dramáticas, conforme temporada e disponibilidade.',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': 'Rotas privadas de barco, cruzeiros noturnos ou experiências tranquilas de natureza conforme o destino.',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': 'Jantares privados, visitas de negócios, produções para criadores, chegadas de grupos e coordenação local.',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': 'Hotéis boutique, quartos com vista, estadias especiais e hospedagens que elevam o roteiro.',
      'Founder Story': 'Quem desenha a rota',
      'Built by someone who made China his everyday life.': 'Roteiros criados por uma equipe para quem a China não é apenas destino, mas experiência vivida, estudada e trabalhada.',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': 'A cooperação com a Ctrip e conferências de turismo nos aproxima antes de novas rotas, hotéis e formatos de experiência.',
      'Traveler Notes': 'Cenários de viagem',
      'What people usually need help with.': 'Situações em que um bom planejamento muda completamente o nível da viagem.',
      'Common planning situations we solve before the trip, written as short traveler notes.': 'Cenários comuns: primeira visita, conteúdo, negócios ou natureza premium, resolvidos antes da chegada.',
      'Build your China route.': 'Monte uma rota que pareça sua viagem, não o tour de outra pessoa.',
      'Answer a few questions and our team will understand the best route, format and next step.': 'Responda algumas perguntas e entenderemos o formato, ritmo e roteiro mais adequados para você.',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': 'A China se aproveita com elegância quando o planejamento é realista. Aqui resolvemos o que convém saber antes de voar.',
      'Ready to plan China properly?': 'Pronto para planejar a China com outro nível de detalhe?',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': 'Envie datas, cidades e estilo de viagem. Vamos retirar o excesso, reforçar o essencial e construir um roteiro que funcione.'
    },
    cn: {
      'Custom China Travel Company': '中国高端私人旅行顾问',
      'Active': '轻徒步',
      'Swipe sideways': '左右滑动卡片',
      'Discover the China Most Travelers Never See': '看见不属于普通行程的中国',
      'Custom routes, private tours and premium experiences across China — built by a team founded on 12 years of real China experience.': '以真实中国经验为基础，为你定制私人路线、本地支持与高端体验。',
      'Not a standard tour. A smarter China route.': '不是标准旅游团，而是一条更有判断力、更舒适的私人路线。',
      'We help travelers solve payments, routes, hotels, transport, local support and unique experiences before they arrive.': '在你抵达前，我们先搭建好整套旅行结构：路线、酒店、交通、支付、本地支持和真正值得体验的内容。',
      'China Consultation': '中国私人旅行咨询',
      'Route logic, apps, payments, hotels, transport and first-trip questions.': '路线逻辑、应用、支付、酒店、交通，以及第一次来中国前最重要的决定。',
      'Need clarity before booking the full route?': '想在预订前先真正看清这趟中国旅行吗？',
      'Book a focused 45-minute consultation and leave with a realistic China plan: where to go, what to avoid, which apps to prepare, how to think about transport, hotels, payments and timing.': '45 分钟内，我们像私人旅行顾问一样梳理你的计划：去哪里、避开什么、准备哪些应用、住在哪里、如何移动，以及如何把时间用在真正值得的地方。',
      'Route review': '路线评估',
      'Hotels & transport': '酒店与交通逻辑',
      'First-trip strategy': '首次来华策略',
      'Ready-Made Trip Ideas': '路线灵感起点',
      'Start with a route. Then we customize it.': '先选择方向，再把它变成你的私人旅行。',
      'These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.': '这些不是固定团，而是经过筛选的路线概念。城市、节奏、酒店、交通、导游和体验都会按你的旅行方式调整。',
      'View popular places': '查看详情',
      'China Bucket List Experiences': '让中国旅行真正被记住的体验',
      'Not just places. Experiences people remember.': '不只是地点，而是会成为旅行核心记忆的时刻。',
      'Why Chieasy Travel?': '为什么选择 Chieasy Travel',
      'Standard tours are built for everyone. Our routes are built for you.': '普通团为所有人设计。我们的路线围绕你来设计。',
      'Standard Tour': '普通旅游团',
      'Fixed itinerary': '固定行程',
      'Custom route': '按目标定制路线',
      'Tourist hotspots': '常规景点打卡',
      'Hidden gems + essentials': '必看重点 + 有质感的小众地点',
      'Large groups': '大团形式',
      'Private planning': '私人规划',
      'Generic guide': '标准陪同',
      'China specialist network': '中国本地专家网络',
      'Limited flexibility': '灵活度有限',
      'Trip designed around you': '围绕你节奏设计的旅行',
      'How It Works': '我们的工作方式',
      'A simple process before you arrive in China.': '在抵达前完成关键规划，让你到中国后真正开始旅行，而不是临时摸索。',
      'Tell Us About Your Trip': '告诉我们你想体验怎样的中国',
      'Share your dates, travel style, interests and budget.': '我们会了解日期、舒适度、兴趣、预算，以及你喜欢的旅行节奏。',
      'Get Your Custom Route': '获得定制路线方案',
      'We suggest cities, transport logic, hotels and experiences.': '我们建议城市顺序、交通逻辑、酒店区域和体验内容。',
      'Arrange The Details': '完善细节',
      'Private tours, drivers, tickets, apps, hotels and premium options.': '私人行程、司机、门票、应用、酒店和高端选项会被整合成一个清晰计划。',
      'Travel With Support': '带着本地支持出发',
      'You travel with a clearer route and local help when needed.': '你会拥有清晰路线，并在需要时获得可靠的本地帮助。',
      'Premium Add-ons': '高端增值体验',
      'Turn the route into a special experience.': '把一条好路线升级成真正特别的旅行。',
      'For travelers who want more than sightseeing: aerial views, private boats, event logistics, premium stays and high-touch local support.': '适合不满足于普通观光的旅行者：空中视角、私人船只、活动安排、高端住宿和细致本地支持。',
      'Selected scenic flights over Zhangjiajie, mountains or dramatic landscapes when available.': '根据季节与可安排性，甄选张家界及其他壮观景观的观光飞行体验。',
      'Li River, city night cruises or quiet nature routes arranged around the destination.': '根据目的地安排私人船只、城市夜游或更安静的自然水路体验。',
      'Private dinners, business visits, creator shoots, group arrivals and on-ground coordination.': '私人晚宴、商务拜访、创作者拍摄、团队抵达和现场协调。',
      'Boutique hotels, cliffside views, premium rooms and scenic stays that fit the route.': '精品酒店、景观房、特色住宿，以及能提升整条路线质感的停留方式。',
      'Founder Story': '谁在设计这条路线',
      'Built by someone who made China his everyday life.': '路线由真正长期在中国生活、学习和工作的人来设计。',
      'Recent cooperation with Ctrip and travel conferences helps us see new routes, hotels and experience formats before they become obvious.': '与 Ctrip 的合作和旅行会议，让我们更早接触新的路线、酒店和体验形式。',
      'Traveler Notes': '旅行场景',
      'What people usually need help with.': '这些场景里，一个好计划会直接改变旅行质感。',
      'Common planning situations we solve before the trip, written as short traveler notes.': '从第一次来中国，到内容拍摄、商务行程或高端自然路线，我们会在出发前先解决核心问题。',
      'Build your China route.': '创建一条真正属于你的中国路线，而不是复制别人的旅游团。',
      'Answer a few questions and our team will understand the best route, format and next step.': '回答几个问题，我们会判断最适合你的形式、节奏、路线和下一步。',
      'China is easy to enjoy when the planning is realistic. These answers cover the most common issues travelers face before their first trip.': '当规划足够现实，中国会变得从容而好玩。这里先解决出发前最值得确认的问题。',
      'Ready to plan China properly?': '准备以更高标准规划中国了吗？',
      'Send your dates, cities and travel style. Our team will help you avoid mistakes and build a better route.': '发送日期、城市和旅行风格。我们会帮你删掉多余部分，强化真正值得的体验，并搭建一条能顺利执行的路线。'
    }
  };

  Object.keys(PREMIUM_COPY_TRANSLATIONS).forEach(lang => {
    Object.assign(TRANSLATIONS[lang], PREMIUM_COPY_TRANSLATIONS[lang]);
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
      payment: 'https://revolut.me/kingkongoff?currency=EUR&amount=14900',
      video: 'https://youtu.be/4837e_teFuw'
    },
    ru: {
      school: 'https://www.chieasy.online/ru',
      payment: 'https://wa.me/79173679853?text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D0%9A%D0%B8%D1%82%D0%B0%D1%8E%20%D0%B7%D0%B0%2012%20999%20%E2%82%BD%20%D0%BF%D0%BE%20%D0%A1%D0%91%D0%9F',
      video: 'https://youtu.be/4837e_teFuw?si=GmO4Z7-1Qh7ztrIw'
    }
  };

  const LANGUAGE_PRICE_TEXT = {
    en: {
      'hero-cta': '45-min Consultation · €149',
      'hero-card': '45 minutes · €149',
      'consultation-price': '€149',
      'sticky-call': '€149 Call'
    },
    ru: {
      'hero-cta': 'Консультация 45 минут · 12 999 ₽',
      'hero-card': '45 минут · 12 999 ₽',
      'consultation-price': '12 999 ₽',
      'sticky-call': 'Разбор поездки'
    },
    es: {
      'hero-cta': 'Consulta 45 min · €149',
      'hero-card': '45 minutos · €149',
      'consultation-price': '€149',
      'sticky-call': 'Llamada €149'
    },
    pt: {
      'hero-cta': 'Consultoria 45 min · €149',
      'hero-card': '45 minutos · €149',
      'consultation-price': '€149',
      'sticky-call': 'Chamada €149'
    },
    cn: {
      'hero-cta': '45 分钟咨询 · €149',
      'hero-card': '45 分钟 · €149',
      'consultation-price': '€149',
      'sticky-call': '€149 咨询'
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
    });
    document.querySelectorAll('[data-video-link]').forEach(link => {
      link.setAttribute('href', activeLinks.video || LANGUAGE_LINKS.en.video);
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
  const localizedRouteModalCards = {
    ru: [
      ['Маршрут', 'Мы адаптируем города, порядок, темп и транспорт под ваши даты и стиль поездки.'],
      ['Популярные места', 'Покажем главные точки, красивые остановки и места, которые логично добавить именно к этому маршруту.'],
      ['Премиум-опции', 'Можно добавить частного водителя, лодки, вертолёт, необычные отели, съёмки или локальную поддержку.']
    ],
    es: [
      ['Ruta', 'Adaptamos ciudades, orden, ritmo y transporte a tus fechas y estilo de viaje.'],
      ['Lugares populares', 'Mostramos puntos clave, paradas bonitas y lugares que encajan con esta ruta.'],
      ['Opciones premium', 'Podemos añadir conductor privado, barcos, helicóptero, hoteles especiales, rodajes o apoyo local.']
    ],
    pt: [
      ['Roteiro', 'Adaptamos cidades, ordem, ritmo e transporte às suas datas e estilo de viagem.'],
      ['Lugares populares', 'Mostramos pontos principais, paradas bonitas e lugares que fazem sentido para este roteiro.'],
      ['Opções premium', 'Podemos adicionar motorista privado, barcos, helicóptero, hotéis especiais, filmagens ou apoio local.']
    ],
    cn: [
      ['路线', '我们会根据你的日期和旅行风格调整城市、顺序、节奏和交通。'],
      ['热门地点', '我们会选择主要景点、好看的停留点，以及适合这条路线的补充地点。'],
      ['高端选项', '可以加入私人司机、船只、直升机、特色酒店、拍摄安排或本地支持。']
    ]
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
    routeModalTitle.textContent = translateString(data.title, activeLang);
    if (activeLang === 'en') {
      routeModalText.textContent = data.text;
      routePlaceGrid.innerHTML = data.places.map(([name, tag, description]) => `
        <article class="route-place">
          <span>${tag}</span>
          <h4>${name}</h4>
          <p>${description}</p>
        </article>
      `).join('');
    } else {
      const cards = localizedRouteModalCards[activeLang] || localizedRouteModalCards.ru;
      routeModalText.textContent = translateString('These are sample route concepts. Dates, hotels, transport, guides and experiences are adjusted to your travel style.', activeLang);
      routePlaceGrid.innerHTML = cards.map(([tag, description]) => `
        <article class="route-place">
          <span>${tag}</span>
          <h4>${translateString(data.title, activeLang)}</h4>
          <p>${description}</p>
        </article>
      `).join('');
    }
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

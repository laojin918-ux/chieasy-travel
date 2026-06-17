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

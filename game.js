const TOPICS = [
  {
    id: 'dogs',
    label: 'Guess the Breed',
    icon: '🐶',
    type: 'breed-guess',
    coverImg: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    questions: [
      { breed: 'Golden Retriever',   imgs: ['https://images.dog.ceo/breeds/retriever-golden/Z6A_4525_200809.jpg','https://images.dog.ceo/breeds/retriever-golden/n02099601_1743.jpg','https://images.dog.ceo/breeds/retriever-golden/n02099601_3666.jpg'], choices: ['Golden Retriever', 'Labrador Retriever', 'Beagle', 'Cocker Spaniel'] },
      { breed: 'German Shepherd',    imgs: ['https://images.dog.ceo/breeds/german-shepherd/n02106662_2058.jpg','https://images.dog.ceo/breeds/german-shepherd/n02106662_3815.jpg','https://images.dog.ceo/breeds/german-shepherd/n02106662_6966.jpg'], choices: ['German Shepherd', 'Belgian Malinois', 'Husky', 'Doberman'] },
      { breed: 'Husky',              imgs: ['https://images.dog.ceo/breeds/husky/n02110185_10171.jpg','https://images.dog.ceo/breeds/husky/n02110185_519.jpg','https://images.dog.ceo/breeds/husky/n02110185_6564.jpg'], choices: ['Husky', 'Alaskan Malamute', 'Samoyed', 'German Shepherd'] },
      { breed: 'Corgi',              imgs: ['https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10891.jpg','https://images.dog.ceo/breeds/corgi-cardigan/n02113186_11741.jpg','https://images.dog.ceo/breeds/corgi-cardigan/n02113186_13533.jpg'], choices: ['Corgi', 'Dachshund', 'Sheltie', 'Beagle'] },
      { breed: 'Dachshund',          imgs: ['https://images.dog.ceo/breeds/dachshund/Stretched_Dachshund.jpg','https://images.dog.ceo/breeds/dachshund/dachshund-123503_640.jpg','https://images.dog.ceo/breeds/dachshund/dachshund-in-jacket.jpg'], choices: ['Dachshund', 'Basset Hound', 'Corgi', 'Beagle'] },
      { breed: 'Poodle',             imgs: ['https://images.dog.ceo/breeds/poodle-miniature/n02113712_1897.jpg','https://images.dog.ceo/breeds/poodle-miniature/n02113712_599.jpg','https://images.dog.ceo/breeds/poodle-toy/n02113624_4112.jpg'], choices: ['Poodle', 'Bichon Frise', 'Maltese', 'Samoyed'] },
      { breed: 'Shiba Inu',          imgs: ['https://images.dog.ceo/breeds/shiba/shiba-11.jpg','https://images.dog.ceo/breeds/shiba/shiba-14.jpg','https://images.dog.ceo/breeds/shiba/shiba-6.jpg'], choices: ['Shiba Inu', 'Akita', 'Husky', 'Korean Jindo'] },
      { breed: 'English Bulldog',    imgs: ['https://images.dog.ceo/breeds/bulldog-english/bunz.jpg','https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg','https://images.dog.ceo/breeds/bulldog-english/mami.jpg'], choices: ['English Bulldog', 'French Bulldog', 'Pug', 'Boston Terrier'] },
      { breed: 'Dalmatian',          imgs: ['https://images.dog.ceo/breeds/dalmatian/cooper1.jpg','https://images.dog.ceo/breeds/dalmatian/cooper2.jpg'], choices: ['Dalmatian', 'Pointer', 'English Setter', 'Australian Shepherd'] },
      { breed: 'Beagle',             imgs: ['https://images.dog.ceo/breeds/beagle/n02088364_10354.jpg','https://images.dog.ceo/breeds/beagle/n02088364_12973.jpg','https://images.dog.ceo/breeds/beagle/n02088364_6089.jpg'], choices: ['Beagle', 'Basset Hound', 'Foxhound', 'Dachshund'] },
      { breed: 'Labrador Retriever', imgs: ['https://images.dog.ceo/breeds/labrador/n02099712_4965.jpg','https://images.dog.ceo/breeds/labrador/n02099712_5679.jpg','https://images.dog.ceo/breeds/labrador/n02099712_6345.jpg'], choices: ['Labrador Retriever', 'Golden Retriever', 'Weimaraner', 'Vizsla'] },
      { breed: 'Pug',                imgs: ['https://images.dog.ceo/breeds/pug/n02110958_12080.jpg','https://images.dog.ceo/breeds/pug/n02110958_14017.jpg','https://images.dog.ceo/breeds/pug/n02110958_15014.jpg'], choices: ['Pug', 'Boston Terrier', 'French Bulldog', 'Shih Tzu'] },
    ]
  },
  {
    id: 'music',
    label: 'Name That Song',
    icon: '🎵',
    type: 'music-guess',
    coverImg: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    questions: [
      { trackId: '0V3wPSX9ygBnCm8psDIegu', q: "Who sings this song?",         a: 'Taylor Swift',     choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter'] },
      { trackId: '1BxfuPKGuaTgP7aM0Bbdwr', q: "What's the name of this song?", a: 'Cruel Summer',     choices: ['Cruel Summer', 'Shake It Off', 'Anti-Hero', 'Love Story'] },
      { trackId: '4LRPiXqCikLlN15c3yImP7', q: "Who sings this song?",         a: 'Harry Styles',     choices: ['Harry Styles', 'Zayn', 'Niall Horan', 'Shawn Mendes'] },
      { trackId: '1EVTEH6j21yg6zjwlw4dlj', q: "What's the name of this song?", a: 'drivers license',  choices: ['drivers license', 'good 4 u', 'deja vu', 'vampire'] },
      { trackId: '1Qrg8KqiBpW07V7PNxwwwL', q: "Who sings this song?",         a: 'SZA',              choices: ['SZA', 'Doja Cat', 'Cardi B', 'Lizzo'] },
      { trackId: '0yLdNVWF3Srea0uzk55zFn', q: "Who sings this song?",         a: 'Miley Cyrus',      choices: ['Miley Cyrus', 'Katy Perry', 'Dua Lipa', 'Selena Gomez'] },
      { trackId: '2qSkIjg1o9h3YT9RAgYN75', q: "What's the name of this song?", a: 'Espresso',         choices: ['Espresso', 'Feather', 'Please Please Please', 'Nonsense'] },
      { trackId: '5N3hjp1WNayUPZrA8kJmJP', q: "Who sings this song?",         a: 'Sabrina Carpenter', choices: ['Sabrina Carpenter', 'Olivia Rodrigo', 'Gracie Abrams', 'Chappell Roan'] },
      { trackId: '0WbMK4wrZ1wFSty9F7FCgu', q: "Who sings this song?",         a: 'Chappell Roan',    choices: ['Chappell Roan', 'Sabrina Carpenter', 'Gracie Abrams', 'Reneé Rapp'] },
      { trackId: '0Z7nGFVCLfixWctgePsRk9', q: "Who sings this song?",         a: 'Beyoncé',          choices: ['Beyoncé', 'Taylor Swift', 'Kacey Musgraves', 'Megan Thee Stallion'] },
      { trackId: '0VjIjW4GlUZAMYd2vXMi3b', q: "What's the name of this song?", a: 'Blinding Lights',  choices: ['Blinding Lights', 'Save Your Tears', 'Starboy', "Can't Feel My Face"] },
      { trackId: '39LLxExYz6ewLAcYrzQQyP', q: "Who sings this song?",         a: 'Dua Lipa',         choices: ['Dua Lipa', 'Ariana Grande', 'Cardi B', 'Nicki Minaj'] },
      { trackId: '7wZa0JXBfFS8W5abYnHWKC', q: "What's the name of this song?", a: 'What Was I Made For?', choices: ['What Was I Made For?', 'Happier Than Ever', 'bad guy', 'Ocean Eyes'] },
    ]
  },
  {
    id: 'animals',
    label: 'Animals',
    icon: '🦁',
    type: 'standard',
    coverImg: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80',
    questions: [
      { q: 'What is the largest animal on Earth?',               img: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80', a: 'Blue Whale',      choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Giant Squid'] },
      { q: 'How many hearts does an octopus have?',             img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', a: '3',               choices: ['1', '2', '3', '4'] },
      { q: 'Which bird cannot fly?',                            img: 'https://images.unsplash.com/photo-1551649001-7a2482d98d05?w=600&q=80', a: 'Ostrich',          choices: ['Pelican', 'Flamingo', 'Ostrich', 'Toucan'] },
      { q: 'What is the only mammal that can truly fly?',       img: 'https://images.unsplash.com/photo-1508028339507-ff30e5b2d025?w=600&q=80', a: 'Bat',             choices: ['Flying Squirrel', 'Bat', 'Sugar Glider', 'Flying Lemur'] },
      { q: 'A group of flamingos is called a...?',              img: 'https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=600&q=80', a: 'Flamboyance',     choices: ['Flock', 'Colony', 'Flamboyance', 'Gaggle'] },
      { q: 'Which animal has the longest lifespan?',            img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', a: 'Greenland Shark', choices: ['Tortoise', 'Elephant', 'Greenland Shark', 'Bowhead Whale'] },
      { q: 'What color is a polar bear\'s skin?',               img: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=600&q=80', a: 'Black',           choices: ['White', 'Pink', 'Black', 'Translucent'] },
      { q: 'How many legs does a spider have?',                 img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', a: '8',               choices: ['6', '8', '10', '12'] },
      { q: 'Which animal sleeps standing up?',                  img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80', a: 'Horse',           choices: ['Cow', 'Horse', 'Elephant', 'All of the above'] },
      { q: 'What is the fastest land animal?',                  img: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', a: 'Cheetah',         choices: ['Lion', 'Cheetah', 'Leopard', 'Pronghorn'] },
      { q: 'A baby kangaroo is called a...?',                   img: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=600&q=80', a: 'Joey',            choices: ['Cub', 'Pup', 'Joey', 'Kit'] },
      { q: 'Which animal has the highest blood pressure?',      img: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600&q=80', a: 'Giraffe',         choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Cheetah'] },
    ]
  },
  {
    id: 'disney',
    label: 'Disney',
    icon: '🏰',
    type: 'standard',
    coverImg: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?w=600&q=80',
    questions: [
      { q: "What was Disney's first full-length animated film?",            img: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?w=600&q=80', a: 'Snow White and the Seven Dwarfs', choices: ['Fantasia', 'Pinocchio', 'Snow White and the Seven Dwarfs', 'Bambi'] },
      { q: "In 'The Lion King,' what is Simba's father's name?",           img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80', a: 'Mufasa',  choices: ['Scar', 'Mufasa', 'Rafiki', 'Zazu'] },
      { q: "What is the name of the snowman in 'Frozen'?",                img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80', a: 'Olaf',    choices: ['Sven', 'Kristoff', 'Olaf', 'Hans'] },
      { q: "In 'Finding Nemo,' what type of fish is Nemo?",               img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', a: 'Clownfish', choices: ['Goldfish', 'Clownfish', 'Angelfish', 'Tang'] },
      { q: "Which Disney princess has a chameleon sidekick?",             img: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&q=80', a: 'Rapunzel', choices: ['Moana', 'Tiana', 'Rapunzel', 'Ariel'] },
      { q: "What is the name of Andy's neighbour in 'Toy Story'?",        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', a: 'Sid',      choices: ['Al', 'Sid', 'Rex', 'Lotso'] },
      { q: "In 'Mulan,' what is the name of her dragon guardian?",        img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', a: 'Mushu',    choices: ['Cri-Kee', 'Mushu', 'Shang', 'Shan Yu'] },
      { q: "Which film features the song 'Hakuna Matata'?",               img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80', a: 'The Lion King', choices: ['Tarzan', 'The Jungle Book', 'The Lion King', 'Moana'] },
      { q: "What are the names of Cinderella's stepsisters?",             img: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?w=600&q=80', a: 'Anastasia and Drizella', choices: ['Ursula and Cruella', 'Flora and Fauna', 'Anastasia and Drizella', 'Prudence and Millicent'] },
      { q: "In 'Up,' what is the name of Carl's late wife?",              img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80', a: 'Ellie',   choices: ['Betty', 'Ellie', 'Edna', 'Helen'] },
      { q: "What is the name of the kingdom in 'Frozen'?",               img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80', a: 'Arendelle', choices: ['Agrabah', 'Arendelle', 'Corona', 'Atlantica'] },
      { q: "Who is the villain in 'The Little Mermaid'?",                img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', a: 'Ursula',   choices: ['Maleficent', 'Ursula', 'Gaston', 'Jafar'] },
    ]
  },
];

const QUESTIONS_PER_GAME = 8;

let currentTopic = null;
let questions = [];
let currentIndex = 0;
let score = 0;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function show(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function buildTopicGrid() {
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = '';
  TOPICS.forEach(topic => {
    const btn = document.createElement('button');
    btn.className = 'topic-card';
    btn.innerHTML = `
      <img src="${topic.coverImg}" alt="${topic.label}" loading="lazy" />
      <div class="overlay"></div>
      <span class="card-icon">${topic.icon}</span>
      <span class="card-label">${topic.label}</span>
    `;
    btn.onclick = () => startGame(topic.id);
    grid.appendChild(btn);
  });
}

function startGame(topicId) {
  currentTopic = TOPICS.find(t => t.id === topicId);
  questions = shuffle(currentTopic.questions).slice(0, QUESTIONS_PER_GAME);
  currentIndex = 0;
  score = 0;
  show('screen-question');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];
  document.getElementById('topic-badge').textContent = `${currentTopic.icon} ${currentTopic.label}`;
  document.getElementById('question-counter').textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  document.getElementById('progress-bar').style.width = `${(currentIndex / questions.length) * 100}%`;

  const area = document.getElementById('question-area');
  area.innerHTML = '';

  if (currentTopic.type === 'breed-guess') {
    buildBreedQuestion(area, q);
  } else if (currentTopic.type === 'music-guess') {
    buildMusicQuestion(area, q);
  } else {
    buildStandardQuestion(area, q);
  }
}

function buildStandardQuestion(container, q) {
  container.innerHTML = `
    <div class="q-image-wrap">
      <img class="q-image" src="" alt="" />
      <div class="q-placeholder">🔍</div>
    </div>
    <h2 class="q-text">${q.q}</h2>
    <div class="answers-grid" id="answers-grid"></div>
  `;
  const img = container.querySelector('.q-image');
  const ph  = container.querySelector('.q-placeholder');
  img.onload = () => { img.classList.add('loaded'); ph.style.display = 'none'; };
  img.src = q.img;
  buildAnswerButtons(q.choices, q.a);
}

function buildBreedQuestion(container, q) {
  const imgUrl = q.imgs[Math.floor(Math.random() * q.imgs.length)];
  container.innerHTML = `
    <h2 class="q-text" style="margin-bottom:14px;">🐶 What breed is this dog?</h2>
    <div class="breed-image-wrap">
      <img class="breed-image" src="" alt="${q.breed}" />
      <div class="breed-placeholder">🐾 <span>Loading…</span></div>
    </div>
    <div class="answers-grid" id="answers-grid"></div>
  `;

  const img = container.querySelector('.breed-image');
  const ph  = container.querySelector('.breed-placeholder');
  img.onload = () => { img.classList.add('loaded'); ph.style.display = 'none'; };
  img.onerror = () => { ph.innerHTML = '🐾 <span>Image unavailable</span>'; };
  img.src = imgUrl;

  buildAnswerButtons(q.choices, q.breed);
}

function buildMusicQuestion(container, q) {
  container.innerHTML = `
    <p class="music-hint">🎧 Press play and try to guess before peeking at the player!</p>
    <div class="spotify-wrap">
      <iframe class="spotify-iframe"
        src="https://open.spotify.com/embed/track/${q.trackId}?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    </div>
    <h2 class="q-text">${q.q}</h2>
    <div class="answers-grid" id="answers-grid"></div>
  `;
  buildAnswerButtons(q.choices, q.a);
}

function buildAnswerButtons(choices, correct) {
  const grid = document.getElementById('answers-grid');
  shuffle(choices).forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(btn, choice, correct);
    grid.appendChild(btn);
  });
}

function selectAnswer(btn, selected, correct) {
  document.querySelectorAll('.answer-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
  });
  if (selected === correct) {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
  }

  // Reveal the song name in the Spotify cover
  const cover = document.querySelector('.spotify-cover');
  if (cover) cover.classList.add('revealed');

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 1400);
}

function showResults() {
  document.getElementById('progress-bar').style.width = '100%';
  const pct = score / questions.length;
  let emoji, title, msg;
  if      (pct === 1)   { emoji = '🏆'; title = 'Perfect Score!';  msg = 'You got every single one — genius!'; }
  else if (pct >= 0.75) { emoji = '🌟'; title = 'Amazing!';        msg = 'You really know your stuff!'; }
  else if (pct >= 0.5)  { emoji = '👍'; title = 'Nice Work!';      msg = 'Solid effort — keep it up!'; }
  else if (pct >= 0.25) { emoji = '🤔'; title = 'Not Bad!';        msg = "A little more practice and you'll nail it!"; }
  else                  { emoji = '😅'; title = 'Keep Trying!';    msg = 'Everyone starts somewhere — play again!'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-score').textContent = `${score} / ${questions.length} correct`;
  document.getElementById('result-msg').textContent = msg;
  show('screen-results');
}

function goHome() {
  show('screen-topics');
}

buildTopicGrid();

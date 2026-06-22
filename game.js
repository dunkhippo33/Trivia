const TOPICS = [
  {
    id: 'dogs',
    label: 'Dogs',
    icon: '🐶',
    color: '#f59e0b',
    questions: [
      { q: 'What is the most popular dog breed in the United States?', a: 'French Bulldog', choices: ['Golden Retriever', 'French Bulldog', 'Labrador Retriever', 'German Shepherd'] },
      { q: 'How many times can a dog\'s nose print be used to identify it, like a human fingerprint?', a: 'Every time — it\'s unique', choices: ['Never', 'Sometimes', 'Every time — it\'s unique', 'Only in puppies'] },
      { q: 'What dog breed is the fastest, reaching up to 45 mph?', a: 'Greyhound', choices: ['Whippet', 'Greyhound', 'Saluki', 'Border Collie'] },
      { q: 'Which sense is a dog\'s strongest?', a: 'Smell', choices: ['Hearing', 'Sight', 'Smell', 'Touch'] },
      { q: 'What is a group of dogs called?', a: 'A pack', choices: ['A herd', 'A flock', 'A pack', 'A colony'] },
      { q: 'Which dog breed is known as the "Little Lion Dog"?', a: 'Löwchen', choices: ['Pomeranian', 'Löwchen', 'Shih Tzu', 'Maltese'] },
      { q: 'How many eyelids do dogs have per eye?', a: '3', choices: ['1', '2', '3', '4'] },
      { q: 'What is the smallest dog breed in the world?', a: 'Chihuahua', choices: ['Yorkshire Terrier', 'Chihuahua', 'Pomeranian', 'Toy Poodle'] },
    ]
  },
  {
    id: 'science',
    label: 'Science',
    icon: '🔬',
    color: '#10b981',
    questions: [
      { q: 'What planet is known as the Red Planet?', a: 'Mars', choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'] },
      { q: 'What is the chemical symbol for gold?', a: 'Au', choices: ['Go', 'Gd', 'Au', 'Ag'] },
      { q: 'How many bones are in the adult human body?', a: '206', choices: ['186', '206', '216', '256'] },
      { q: 'What gas do plants absorb from the atmosphere?', a: 'Carbon dioxide', choices: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'] },
      { q: 'What is the speed of light (approx)?', a: '300,000 km/s', choices: ['150,000 km/s', '300,000 km/s', '500,000 km/s', '1,000,000 km/s'] },
      { q: 'What is the powerhouse of the cell?', a: 'Mitochondria', choices: ['Nucleus', 'Ribosome', 'Mitochondria', 'Vacuole'] },
      { q: 'Which element has the atomic number 1?', a: 'Hydrogen', choices: ['Helium', 'Hydrogen', 'Lithium', 'Oxygen'] },
      { q: 'What force keeps planets in orbit around the sun?', a: 'Gravity', choices: ['Magnetism', 'Friction', 'Gravity', 'Centrifugal force'] },
    ]
  },
  {
    id: 'movies',
    label: 'Movies',
    icon: '🎬',
    color: '#ef4444',
    questions: [
      { q: 'Which movie features the quote "To infinity and beyond!"?', a: 'Toy Story', choices: ['Buzz Lightyear', 'Toy Story', 'The Incredibles', 'Up'] },
      { q: 'Who directed Jurassic Park (1993)?', a: 'Steven Spielberg', choices: ['James Cameron', 'George Lucas', 'Steven Spielberg', 'Ron Howard'] },
      { q: 'What was the first feature-length animated film ever released?', a: 'Snow White and the Seven Dwarfs', choices: ['Fantasia', 'Pinocchio', 'Snow White and the Seven Dwarfs', 'Bambi'] },
      { q: 'Which film won the first ever Academy Award for Best Picture?', a: 'Wings', choices: ['Sunrise', 'Wings', 'The Jazz Singer', 'It'] },
      { q: 'In which movie does the line "You can\'t handle the truth!" appear?', a: 'A Few Good Men', choices: ['The Shining', 'A Few Good Men', 'Apocalypse Now', 'Jerry Maguire'] },
      { q: 'What animated Disney film features the song "Let It Go"?', a: 'Frozen', choices: ['Tangled', 'Moana', 'Frozen', 'Brave'] },
      { q: 'Who played Iron Man in the Marvel Cinematic Universe?', a: 'Robert Downey Jr.', choices: ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo'] },
      { q: 'Which film has the tagline "In space, no one can hear you scream"?', a: 'Alien', choices: ['Predator', '2001: A Space Odyssey', 'Alien', 'Event Horizon'] },
    ]
  },
  {
    id: 'geography',
    label: 'Geography',
    icon: '🌍',
    color: '#3b82f6',
    questions: [
      { q: 'What is the capital city of Australia?', a: 'Canberra', choices: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'] },
      { q: 'Which is the longest river in the world?', a: 'The Nile', choices: ['The Amazon', 'The Nile', 'The Yangtze', 'The Mississippi'] },
      { q: 'How many countries are in Africa?', a: '54', choices: ['42', '48', '54', '61'] },
      { q: 'What is the smallest country in the world?', a: 'Vatican City', choices: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'] },
      { q: 'Which country has the most natural lakes?', a: 'Canada', choices: ['Russia', 'USA', 'Canada', 'Finland'] },
      { q: 'Mount Everest sits on the border of which two countries?', a: 'Nepal and China', choices: ['India and Nepal', 'Nepal and China', 'China and Bhutan', 'India and China'] },
      { q: 'What is the capital of Canada?', a: 'Ottawa', choices: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'] },
      { q: 'Which ocean is the largest?', a: 'Pacific', choices: ['Atlantic', 'Indian', 'Pacific', 'Arctic'] },
    ]
  },
  {
    id: 'sports',
    label: 'Sports',
    icon: '⚽',
    color: '#8b5cf6',
    questions: [
      { q: 'How many players are on a basketball team on the court at one time?', a: '5', choices: ['4', '5', '6', '7'] },
      { q: 'In which sport would you perform a "slam dunk"?', a: 'Basketball', choices: ['Volleyball', 'Basketball', 'Football', 'Tennis'] },
      { q: 'How many holes are there in a standard round of golf?', a: '18', choices: ['9', '12', '18', '24'] },
      { q: 'Which country invented the game of cricket?', a: 'England', choices: ['Australia', 'India', 'England', 'South Africa'] },
      { q: 'How long is a standard Olympic swimming pool?', a: '50 meters', choices: ['25 meters', '50 meters', '75 meters', '100 meters'] },
      { q: 'In tennis, what is the term for a score of 40-40?', a: 'Deuce', choices: ['Tie', 'Deuce', 'Break point', 'Love'] },
      { q: 'Which sport uses a "puck"?', a: 'Ice hockey', choices: ['Polo', 'Lacrosse', 'Ice hockey', 'Squash'] },
      { q: 'How many rings are on the Olympic flag?', a: '5', choices: ['4', '5', '6', '7'] },
    ]
  },
  {
    id: 'food',
    label: 'Food',
    icon: '🍕',
    color: '#f97316',
    questions: [
      { q: 'Which country is pasta originally from?', a: 'Italy', choices: ['France', 'Greece', 'Italy', 'Spain'] },
      { q: 'What is the main ingredient in guacamole?', a: 'Avocado', choices: ['Lime', 'Avocado', 'Tomato', 'Onion'] },
      { q: 'Which fruit has the most vitamin C per serving?', a: 'Guava', choices: ['Orange', 'Strawberry', 'Kiwi', 'Guava'] },
      { q: 'Sushi originated in which country?', a: 'Japan', choices: ['China', 'Korea', 'Japan', 'Thailand'] },
      { q: 'What nut is used to make marzipan?', a: 'Almond', choices: ['Walnut', 'Cashew', 'Almond', 'Hazelnut'] },
      { q: 'Which spice is the most expensive in the world by weight?', a: 'Saffron', choices: ['Vanilla', 'Cardamom', 'Saffron', 'Truffle'] },
      { q: 'What is the Italian word for "cheese"?', a: 'Formaggio', choices: ['Fromage', 'Queso', 'Formaggio', 'Kaas'] },
      { q: 'Which vegetable is 95% water?', a: 'Cucumber', choices: ['Lettuce', 'Celery', 'Cucumber', 'Zucchini'] },
    ]
  },
];

const QUESTIONS_PER_GAME = 6;

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
    btn.style.background = `linear-gradient(135deg, ${topic.color}cc, ${topic.color})`;
    btn.innerHTML = `<span class="icon">${topic.icon}</span><span>${topic.label}</span>`;
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
  document.getElementById('question-text').textContent = q.q;

  const grid = document.getElementById('answers-grid');
  grid.innerHTML = '';
  shuffle(q.choices).forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(btn, choice, q.a);
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

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 1200);
}

function showResults() {
  document.getElementById('progress-bar').style.width = '100%';
  const pct = score / questions.length;
  let emoji, title, msg;

  if (pct === 1) {
    emoji = '🏆'; title = 'Perfect Score!'; msg = 'You got every single one. Incredible!';
  } else if (pct >= 0.8) {
    emoji = '🌟'; title = 'Amazing!'; msg = 'You really know your stuff!';
  } else if (pct >= 0.6) {
    emoji = '👍'; title = 'Nice Work!'; msg = 'Solid effort — keep it up!';
  } else if (pct >= 0.4) {
    emoji = '🤔'; title = 'Not Bad!'; msg = 'A little more practice and you\'ll nail it!';
  } else {
    emoji = '😅'; title = 'Keep Trying!'; msg = 'Everyone starts somewhere — play again!';
  }

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

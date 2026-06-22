// Images from Unsplash (free, no API key needed via source.unsplash.com)
const TOPICS = [
  {
    id: 'dogs',
    label: 'Dogs',
    icon: '🐶',
    coverImg: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    questions: [
      { q: 'What is the most popular dog breed in the US?', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80', a: 'French Bulldog', choices: ['Golden Retriever', 'French Bulldog', 'Labrador Retriever', 'German Shepherd'] },
      { q: 'What is the fastest dog breed, reaching up to 45 mph?', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80', a: 'Greyhound', choices: ['Whippet', 'Greyhound', 'Saluki', 'Border Collie'] },
      { q: 'Which sense is a dog\'s strongest?', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80', a: 'Smell', choices: ['Hearing', 'Sight', 'Smell', 'Touch'] },
      { q: 'How many eyelids do dogs have per eye?', img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80', a: '3', choices: ['1', '2', '3', '4'] },
      { q: 'What is the smallest dog breed in the world?', img: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=600&q=80', a: 'Chihuahua', choices: ['Yorkshire Terrier', 'Chihuahua', 'Pomeranian', 'Toy Poodle'] },
      { q: 'What is a group of dogs called?', img: 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=600&q=80', a: 'A pack', choices: ['A herd', 'A flock', 'A pack', 'A colony'] },
      { q: 'Which dog breed is known for its blue-black tongue?', img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80', a: 'Chow Chow', choices: ['Shar Pei', 'Chow Chow', 'Basenji', 'Akita'] },
      { q: 'What breed is Lassie?', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80', a: 'Rough Collie', choices: ['Border Collie', 'Rough Collie', 'Sheltie', 'Golden Retriever'] },
      { q: 'Dogs are descended from which wild animal?', img: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=600&q=80', a: 'Wolf', choices: ['Fox', 'Wolf', 'Coyote', 'Jackal'] },
      { q: 'Which dog breed has a naturally bobbed (short) tail?', img: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&q=80', a: 'Australian Shepherd', choices: ['Boxer', 'Australian Shepherd', 'Corgi', 'Brittany Spaniel'] },
      { q: 'About how many words can a smart dog learn?', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80', a: '250', choices: ['50', '100', '250', '500'] },
      { q: 'What dog breed was originally bred to hunt lions in Africa?', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80', a: 'Rhodesian Ridgeback', choices: ['Boerboel', 'Rhodesian Ridgeback', 'Basenji', 'Africanis'] },
    ]
  },
  {
    id: 'animals',
    label: 'Animals',
    icon: '🦁',
    coverImg: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80',
    questions: [
      { q: 'What is the largest animal on Earth?', img: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80', a: 'Blue Whale', choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Giant Squid'] },
      { q: 'How many hearts does an octopus have?', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', a: '3', choices: ['1', '2', '3', '4'] },
      { q: 'Which bird cannot fly?', img: 'https://images.unsplash.com/photo-1551649001-7a2482d98d05?w=600&q=80', a: 'Ostrich', choices: ['Pelican', 'Flamingo', 'Ostrich', 'Toucan'] },
      { q: 'What is the only mammal that can truly fly?', img: 'https://images.unsplash.com/photo-1508028339507-ff30e5b2d025?w=600&q=80', a: 'Bat', choices: ['Flying Squirrel', 'Bat', 'Sugar Glider', 'Flying Lemur'] },
      { q: 'A group of flamingos is called a...?', img: 'https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=600&q=80', a: 'Flamboyance', choices: ['Flock', 'Colony', 'Flamboyance', 'Gaggle'] },
      { q: 'Which animal has the longest lifespan?', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', a: 'Greenland Shark', choices: ['Tortoise', 'Elephant', 'Greenland Shark', 'Bowhead Whale'] },
      { q: 'What color is a polar bear\'s skin?', img: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=600&q=80', a: 'Black', choices: ['White', 'Pink', 'Black', 'Translucent'] },
      { q: 'How many legs does a spider have?', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', a: '8', choices: ['6', '8', '10', '12'] },
      { q: 'Which animal sleeps standing up?', img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80', a: 'Horse', choices: ['Cow', 'Horse', 'Elephant', 'All of the above'] },
      { q: 'What is the fastest land animal?', img: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', a: 'Cheetah', choices: ['Lion', 'Cheetah', 'Leopard', 'Pronghorn'] },
      { q: 'A baby kangaroo is called a...?', img: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=600&q=80', a: 'Joey', choices: ['Cub', 'Pup', 'Joey', 'Kit'] },
      { q: 'Which animal has the highest blood pressure?', img: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600&q=80', a: 'Giraffe', choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Cheetah'] },
    ]
  },
  {
    id: 'disney',
    label: 'Disney',
    icon: '🏰',
    coverImg: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?w=600&q=80',
    questions: [
      { q: 'What was Disney\'s first full-length animated feature film?', img: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?w=600&q=80', a: 'Snow White and the Seven Dwarfs', choices: ['Fantasia', 'Pinocchio', 'Snow White and the Seven Dwarfs', 'Bambi'] },
      { q: 'In "The Lion King," what is Simba\'s father\'s name?', img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80', a: 'Mufasa', choices: ['Scar', 'Mufasa', 'Rafiki', 'Zazu'] },
      { q: 'What is the name of the snowman in "Frozen"?', img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80', a: 'Olaf', choices: ['Sven', 'Kristoff', 'Olaf', 'Hans'] },
      { q: 'In "Finding Nemo," what type of fish is Nemo?', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', a: 'Clownfish', choices: ['Goldfish', 'Clownfish', 'Angelfish', 'Tang'] },
      { q: 'Which Disney princess has a chameleon sidekick?', img: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&q=80', a: 'Rapunzel', choices: ['Moana', 'Tiana', 'Rapunzel', 'Ariel'] },
      { q: 'What is the name of Andy\'s neighbour in "Toy Story"?', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', a: 'Sid', choices: ['Al', 'Sid', 'Rex', 'Lotso'] },
      { q: 'In "Mulan," what is the name of her dragon guardian?', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', a: 'Mushu', choices: ['Cri-Kee', 'Mushu', 'Shang', 'Shan Yu'] },
      { q: 'Which film features the song "Hakuna Matata"?', img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80', a: 'The Lion King', choices: ['Tarzan', 'The Jungle Book', 'The Lion King', 'Moana'] },
      { q: 'What are the names of Cinderella\'s stepsisters?', img: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?w=600&q=80', a: 'Anastasia and Drizella', choices: ['Ursula and Cruella', 'Flora and Fauna', 'Anastasia and Drizella', 'Prudence and Millicent'] },
      { q: 'In "Up," what is the name of Carl\'s late wife?', img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80', a: 'Ellie', choices: ['Betty', 'Ellie', 'Edna', 'Helen'] },
      { q: 'What is the name of the kingdom in "Frozen"?', img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80', a: 'Arendelle', choices: ['Agrabah', 'Arendelle', 'Corona', 'Atlantica'] },
      { q: 'Who is the villain in "The Little Mermaid"?', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', a: 'Ursula', choices: ['Maleficent', 'Ursula', 'Gaston', 'Jafar'] },
    ]
  },
  {
    id: 'music',
    label: 'Pop Music',
    icon: '🎵',
    coverImg: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    questions: [
      { q: 'Which artist released the album "Anti"?', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80', a: 'Rihanna', choices: ['Beyoncé', 'Rihanna', 'Adele', 'Nicki Minaj'] },
      { q: 'What is Taylor Swift\'s debut album called?', img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80', a: 'Taylor Swift', choices: ['Fearless', 'Speak Now', 'Taylor Swift', '1989'] },
      { q: 'Which band sang "Bohemian Rhapsody"?', img: 'https://images.unsplash.com/photo-1511735111819-9a3efd16269a?w=600&q=80', a: 'Queen', choices: ['The Beatles', 'Led Zeppelin', 'Queen', 'The Rolling Stones'] },
      { q: 'Who is known as the "Queen of Pop"?', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', a: 'Madonna', choices: ['Beyoncé', 'Britney Spears', 'Madonna', 'Lady Gaga'] },
      { q: 'Which song starts with "Is this the real life? Is this just fantasy?"', img: 'https://images.unsplash.com/photo-1511735111819-9a3efd16269a?w=600&q=80', a: 'Bohemian Rhapsody', choices: ['Stairway to Heaven', 'Bohemian Rhapsody', 'Hotel California', 'Imagine'] },
      { q: 'What year did Michael Jackson release "Thriller"?', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80', a: '1982', choices: ['1979', '1980', '1982', '1984'] },
      { q: 'Which artist has the most Grammy wins of all time?', img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80', a: 'Beyoncé', choices: ['Taylor Swift', 'Adele', 'Beyoncé', 'Michael Jackson'] },
      { q: 'The song "Shape of You" is by which artist?', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', a: 'Ed Sheeran', choices: ['Sam Smith', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles'] },
      { q: 'Which group had members named John, Paul, George, and Ringo?', img: 'https://images.unsplash.com/photo-1511735111819-9a3efd16269a?w=600&q=80', a: 'The Beatles', choices: ['The Rolling Stones', 'The Doors', 'The Beatles', 'The Who'] },
      { q: 'What is Ariana Grande\'s debut album?', img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80', a: 'Yours Truly', choices: ['My Everything', 'Thank U Next', 'Yours Truly', 'Dangerous Woman'] },
      { q: 'Which pop star is known as "Mother Monster"?', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80', a: 'Lady Gaga', choices: ['Katy Perry', 'Lady Gaga', 'Nicki Minaj', 'Doja Cat'] },
      { q: 'What instrument does Elton John famously play?', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', a: 'Piano', choices: ['Guitar', 'Drums', 'Piano', 'Violin'] },
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

function loadQuestionImage(url) {
  const img = document.getElementById('question-image');
  const placeholder = document.getElementById('image-placeholder');
  img.classList.remove('loaded');
  placeholder.style.display = 'flex';

  const tempImg = new Image();
  tempImg.onload = () => {
    img.src = url;
    img.classList.add('loaded');
    placeholder.style.display = 'none';
  };
  tempImg.onerror = () => {
    placeholder.style.display = 'flex';
  };
  tempImg.src = url;
}

function renderQuestion() {
  const q = questions[currentIndex];
  document.getElementById('topic-badge').textContent = `${currentTopic.icon} ${currentTopic.label}`;
  document.getElementById('question-counter').textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  document.getElementById('progress-bar').style.width = `${(currentIndex / questions.length) * 100}%`;
  document.getElementById('question-text').textContent = q.q;

  loadQuestionImage(q.img);

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
  }, 1300);
}

function showResults() {
  document.getElementById('progress-bar').style.width = '100%';
  const pct = score / questions.length;
  let emoji, title, msg;

  if (pct === 1)      { emoji = '🏆'; title = 'Perfect Score!';  msg = 'You got every single one — genius!'; }
  else if (pct >= 0.8) { emoji = '🌟'; title = 'Amazing!';        msg = 'You really know your stuff!'; }
  else if (pct >= 0.6) { emoji = '👍'; title = 'Nice Work!';      msg = 'Solid effort — keep it up!'; }
  else if (pct >= 0.4) { emoji = '🤔'; title = 'Not Bad!';        msg = 'A little more practice and you\'ll nail it!'; }
  else                 { emoji = '😅'; title = 'Keep Trying!';    msg = 'Everyone starts somewhere — play again!'; }

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

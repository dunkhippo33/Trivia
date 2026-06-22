const TOPICS = [
  {
    id: 'dogs',
    label: 'Guess the Breed',
    icon: '🐶',
    type: 'breed-guess',
    coverImg: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    questions: [
      { breed: 'Vizsla',                  imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Wy%C5%BCe%C5%82_w%C4%99gierski_g%C5%82adkow%C5%82osy_500.jpg/330px-Wy%C5%BCe%C5%82_w%C4%99gierski_g%C5%82adkow%C5%82osy_500.jpg'], choices: ['Vizsla', 'Weimaraner', 'Rhodesian Ridgeback', 'Redbone Coonhound'] },
      { breed: 'Weimaraner',              imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Weimaraner_Freika-2.jpg/330px-Weimaraner_Freika-2.jpg'], choices: ['Weimaraner', 'Vizsla', 'Bracco Italiano', 'Silver Labrador'] },
      { breed: 'Basenji',                 imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Basenji_Profile_%28loosercrop%29.jpg/330px-Basenji_Profile_%28loosercrop%29.jpg'], choices: ['Basenji', 'Canaan Dog', 'Thai Ridgeback', 'Pharaoh Hound'] },
      { breed: 'Borzoi',                  imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Chart_rosyjski_borzoj_rybnik-kamien_pl.jpg/330px-Chart_rosyjski_borzoj_rybnik-kamien_pl.jpg'], choices: ['Borzoi', 'Saluki', 'Afghan Hound', 'Greyhound'] },
      { breed: 'Bloodhound',              imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bloodhound_Erland22.jpg/330px-Bloodhound_Erland22.jpg'], choices: ['Bloodhound', 'Basset Hound', 'Coonhound', 'Plott Hound'] },
      { breed: 'Xoloitzcuintle',         imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero%E2%80%99s_King_Og_Hart%E2%80%99s_Istas_%2823607403303%29.jpg/330px-BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero%E2%80%99s_King_Og_Hart%E2%80%99s_Istas_%2823607403303%29.jpg'], choices: ['Xoloitzcuintle', 'Peruvian Inca Orchid', 'Cirneco dell\'Etna', 'Hairless Khala'] },
      { breed: 'Tibetan Mastiff',         imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/BIR_Grupp_2-_TIBETANSK_MASTIFF%2C_Legenda_Tibeta_Temudzhin_%2823938629470%29.jpg/330px-BIR_Grupp_2-_TIBETANSK_MASTIFF%2C_Legenda_Tibeta_Temudzhin_%2823938629470%29.jpg'], choices: ['Tibetan Mastiff', 'Leonberger', 'Caucasian Shepherd', 'Newfoundland'] },
      { breed: 'Catahoula Leopard Dog',   imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/02._Coahoma_Arkansas_Logan.jpg/330px-02._Coahoma_Arkansas_Logan.jpg'], choices: ['Catahoula Leopard Dog', 'Australian Shepherd', 'Pointer', 'Plott Hound'] },
      { breed: 'Azawakh',                 imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Bistrita_2015_%2822%29.jpg/330px-Bistrita_2015_%2822%29.jpg'], choices: ['Azawakh', 'Sloughi', 'Saluki', 'Ibizan Hound'] },
      { breed: 'Otterhound',              imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Two_otterhounds.jpg/330px-Two_otterhounds.jpg'], choices: ['Otterhound', 'Airedale Terrier', 'Irish Water Spaniel', 'Briard'] },
      { breed: 'Löwchen',                 imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Adult_Lowchen_Gaiting.jpg/330px-Adult_Lowchen_Gaiting.jpg'], choices: ['Löwchen', 'Bichon Frise', 'Maltese', 'Bolognese'] },
      { breed: 'Lagotto Romagnolo',       imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bellalagotto4.jpg/330px-Bellalagotto4.jpg'], choices: ['Lagotto Romagnolo', 'Portuguese Water Dog', 'Barbet', 'Curly Coated Retriever'] },
      { breed: 'Sloughi',                 imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sloughi_male.jpg/330px-Sloughi_male.jpg'], choices: ['Sloughi', 'Azawakh', 'Borzoi', 'Saluki'] },
      { breed: 'Kooikerhondje',           imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kooiker03.jpg/330px-Kooiker03.jpg'], choices: ['Kooikerhondje', 'Cavalier King Charles Spaniel', 'Welsh Springer Spaniel', 'Brittany'] },
      { breed: 'Kai Ken',                 imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kai-front.jpg/330px-Kai-front.jpg'], choices: ['Kai Ken', 'Shiba Inu', 'Hokkaido', 'Kishu Ken'] },
      { breed: 'Norwegian Elkhound',      imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Elkhound2020_%28cropped%29.jpg/330px-Elkhound2020_%28cropped%29.jpg'], choices: ['Norwegian Elkhound', 'Keeshond', 'Finnish Spitz', 'Swedish Elkhound'] },
      { breed: 'Keeshond',                imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Keeshond_Majic_standing_cropped.jpg/330px-Keeshond_Majic_standing_cropped.jpg'], choices: ['Keeshond', 'Norwegian Elkhound', 'Chow Chow', 'Eurasier'] },
      { breed: 'Canaan Dog',              imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/CanaanDogChakede.jpg/330px-CanaanDogChakede.jpg'], choices: ['Canaan Dog', 'Basenji', 'Dingo', 'Carolina Dog'] },
      { breed: 'Entlebucher Mountain Dog', imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Elio_v_Schaerlig_im_Juni_2007_klein.jpg/330px-Elio_v_Schaerlig_im_Juni_2007_klein.jpg'], choices: ['Entlebucher Mountain Dog', 'Appenzeller Sennenhund', 'Bernese Mountain Dog', 'Greater Swiss Mountain Dog'] },
      { breed: 'Schipperke',              imgs: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Schipperke0001.jpg/330px-Schipperke0001.jpg'], choices: ['Schipperke', 'Belgian Sheepdog', 'Miniature Schnauzer', 'Pomeranian'] },
    ]
  },
  {
    id: 'music',
    label: 'Name That Song',
    icon: '🎵',
    type: 'music-guess',
    coverImg: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    questions: [
      // Justin Bieber
      { trackId: '3mVZMDBFT5EjUut8wcRFHx', q: "Who sings this song?", a: 'Justin Bieber',   choices: ['Justin Bieber', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Alex Warren', 'Zayn', 'Niall Horan', 'Charlie Puth'] },
      { trackId: '52BqzIWKWXrhfKsVJFcKip', q: "Who sings this song?", a: 'Justin Bieber',   choices: ['Justin Bieber', 'Shawn Mendes', 'Ed Sheeran', 'Alex Warren', 'Lewis Capaldi', 'Niall Horan', 'Sam Smith', 'Harry Styles'] },
      { trackId: '2f6ibbfurXdpelqh2VwraI', q: "Who sings this song?", a: 'Justin Bieber',   choices: ['Justin Bieber', 'The Weeknd', 'Ed Sheeran', 'Harry Styles', 'Shawn Mendes', 'Charlie Puth', 'Khalid', 'Drake'] },
      { trackId: '31qCy5ZaophVA81wtlwLc4', q: "Who sings this song?", a: 'Justin Bieber',   choices: ['Justin Bieber', 'Ed Sheeran', 'Shawn Mendes', 'Harry Styles', 'Niall Horan', 'Charlie Puth', 'Zayn', 'Alex Warren'] },
      // Ed Sheeran
      { trackId: '25q3ZtFLPEPfAAENIXus81', q: "Who sings this song?", a: 'Ed Sheeran',      choices: ['Ed Sheeran', 'Shawn Mendes', 'Harry Styles', 'Justin Bieber', 'Niall Horan', 'James Bay', 'Sam Smith', 'Lewis Capaldi'] },
      { trackId: '2mK3K5v84dH6wLXVoG7EEE', q: "Who sings this song?", a: 'Ed Sheeran',      choices: ['Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Justin Bieber', 'Sam Smith', 'Lewis Capaldi', 'Shawn Mendes', 'James Bay'] },
      { trackId: '1huvTbEYtgltjQRXzrNKGi', q: "Who sings this song?", a: 'Ed Sheeran',      choices: ['Ed Sheeran', 'Justin Bieber', 'Shawn Mendes', 'Harry Styles', 'Zayn', 'Khalid', 'Charlie Puth', 'Niall Horan'] },
      { trackId: '5v4sZRuvWDcisoOk1PFv6T', q: "Who sings this song?", a: 'Ed Sheeran',      choices: ['Ed Sheeran', 'The Weeknd', 'Harry Styles', 'Zayn', 'Justin Bieber', 'Khalid', 'Sam Smith', 'Charlie Puth'] },
      { trackId: '34gCuhDGsG4bRPIf9bb02f', q: "Who sings this song?", a: 'Ed Sheeran',      choices: ['Ed Sheeran', 'Justin Bieber', 'Shawn Mendes', 'Harry Styles', 'Niall Horan', 'Charlie Puth', 'James Bay', 'Zayn'] },
      // Shawn Mendes
      { trackId: '64RtW4LOS7VgrCVHqlicPD', q: "Who sings this song?", a: 'Shawn Mendes',    choices: ['Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Zayn', 'Niall Horan', 'Alex Warren', 'Charlie Puth'] },
      { trackId: '53B2XmmjJ9rriW1qciMBeX', q: "Who sings this song?", a: 'Shawn Mendes',    choices: ['Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Alex Warren', 'Niall Horan', 'Charlie Puth', 'Zayn'] },
      { trackId: '2QZ7WLBE8h2y1Y5Fb8RYbH', q: "Who sings this song?", a: 'Shawn Mendes',    choices: ['Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Sam Smith', 'Lewis Capaldi', 'James Arthur', 'Alex Warren'] },
      { trackId: '0vPV2E3udZXadm36U4SvFt', q: "Who sings this song?", a: 'Shawn Mendes',    choices: ['Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Zayn', 'Niall Horan', 'Alex Warren', 'Charlie Puth'] },
      // Alex Warren
      { trackId: '6qqrTXSdwiJaq8SO0X2lSe', q: "Who sings this song?", a: 'Alex Warren',     choices: ['Alex Warren', 'Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Zayn', 'Niall Horan', 'Charlie Puth'] },
      { trackId: '089bZWiav2IhiF952gqUbV', q: "Who sings this song?", a: 'Alex Warren',     choices: ['Alex Warren', 'Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Zayn', 'Niall Horan', 'Charlie Puth'] },
      // Taylor Swift deeper cuts
      { trackId: '1u4HUiREUR6vX1W1RYG2Tm', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Ariana Grande', 'Gracie Abrams', 'Maisie Peters'] },
      { trackId: '0VE4kBnHJUgtMf0dy6DRmW', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Ariana Grande', 'Dua Lipa', 'Miley Cyrus'] },
      { trackId: '6nK2pIKFcRc5frrZKHgsiT', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Gracie Abrams', 'Chappell Roan', 'Ariana Grande', 'Dua Lipa', 'SZA'] },
      { trackId: '0PurA4JVJ8YQgSVopY8fn6', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Gracie Abrams', 'Billie Eilish', 'Chappell Roan', 'Ariana Grande', 'Dua Lipa', 'Maisie Peters'] },
      { trackId: '1R0a2iXumgCiFb7HEZ7gUE', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Gracie Abrams', 'Ariana Grande', 'SZA'] },
      // Olivia Rodrigo deeper cuts
      { trackId: '1sgZSLYACTaYocOmrB8E0y', q: "Who sings this song?", a: 'Olivia Rodrigo',  choices: ['Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'Tate McRae', 'Reneé Rapp', 'Maisie Peters'] },
      { trackId: '35eSXAktS5cpHCGnm52nxl', q: "Who sings this song?", a: 'Olivia Rodrigo',  choices: ['Olivia Rodrigo', 'Taylor Swift', 'Billie Eilish', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'Tate McRae', 'Ariana Grande'] },
      { trackId: '4DB6upTZIXWqP96Jf1JRha', q: "Who sings this song?", a: 'Olivia Rodrigo',  choices: ['Olivia Rodrigo', 'Taylor Swift', 'Billie Eilish', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'SZA', 'Ariana Grande'] },
      // Billie Eilish deeper cuts
      { trackId: '1M0N3VW72zmZmHsCRgaAWg', q: "Who sings this song?", a: 'Billie Eilish',   choices: ['Billie Eilish', 'Olivia Rodrigo', 'Taylor Swift', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'SZA', 'Tate McRae'] },
      { trackId: '54bFM56PmE4YLRnqpW6Tha', q: "Who sings this song?", a: 'Billie Eilish',   choices: ['Billie Eilish', 'Olivia Rodrigo', 'Taylor Swift', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'SZA', 'Tate McRae'] },
      { trackId: '0u2P5u6lvoDfwTYjAADbn4', q: "Who sings this song?", a: 'Billie Eilish',   choices: ['Billie Eilish', 'Olivia Rodrigo', 'Taylor Swift', 'Gracie Abrams', 'Chappell Roan', 'Ariana Grande', 'SZA', 'Tate McRae'] },
      // Others
      { trackId: '1Qrg8KqiBpW07V7PNxwwwL', q: "Who sings this song?", a: 'SZA',             choices: ['SZA', 'Doja Cat', 'Cardi B', 'Lizzo', 'Megan Thee Stallion', 'Jhené Aiko', 'Ariana Grande', 'Beyoncé'] },
      { trackId: '0WbMK4wrZ1wFSty9F7FCgu', q: "Who sings this song?", a: 'Chappell Roan',   choices: ['Chappell Roan', 'Sabrina Carpenter', 'Gracie Abrams', 'Reneé Rapp', 'Tate McRae', 'Maisie Peters', 'Olivia Rodrigo', 'Billie Eilish'] },
      { trackId: '5N3hjp1WNayUPZrA8kJmJP', q: "Who sings this song?", a: 'Sabrina Carpenter', choices: ['Sabrina Carpenter', 'Chappell Roan', 'Olivia Rodrigo', 'Gracie Abrams', 'Reneé Rapp', 'Tate McRae', 'Billie Eilish', 'Taylor Swift'] },
      { trackId: '0yLdNVWF3Srea0uzk55zFn', q: "Who sings this song?", a: 'Miley Cyrus',     choices: ['Miley Cyrus', 'Katy Perry', 'Dua Lipa', 'Selena Gomez', 'Ariana Grande', 'Halsey', 'Taylor Swift', 'Beyoncé'] },
      { trackId: '0VjIjW4GlUZAMYd2vXMi3b', q: "Who sings this song?", a: 'The Weeknd',      choices: ['The Weeknd', 'Justin Bieber', 'Harry Styles', 'Ed Sheeran', 'Shawn Mendes', 'Drake', 'Zayn', 'Charlie Puth'] },
      { trackId: '39LLxExYz6ewLAcYrzQQyP', q: "Who sings this song?", a: 'Dua Lipa',        choices: ['Dua Lipa', 'Ariana Grande', 'Cardi B', 'Nicki Minaj', 'Lizzo', 'Megan Thee Stallion', 'Miley Cyrus', 'Beyoncé'] },
      { trackId: '0Z7nGFVCLfixWctgePsRk9', q: "Who sings this song?", a: 'Beyoncé',         choices: ['Beyoncé', 'Taylor Swift', 'Kacey Musgraves', 'Megan Thee Stallion', 'Lizzo', 'Cardi B', 'Miley Cyrus', 'Dua Lipa'] },
      { trackId: '4LRPiXqCikLlN15c3yImP7', q: "Who sings this song?", a: 'Harry Styles',    choices: ['Harry Styles', 'Zayn', 'Niall Horan', 'Shawn Mendes', 'Ed Sheeran', 'Justin Bieber', 'Charlie Puth', 'Alex Warren'] },
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
    <div class="spotify-wrap">
      <iframe class="spotify-iframe"
        src="https://open.spotify.com/embed/track/${q.trackId}?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
      <div class="spotify-cover-top">🎵 Mystery Song<span>Press ▶ to play!</span></div>
      <div class="spotify-cover-bl"></div>
    </div>
    <h2 class="q-text">${q.q}</h2>
    <div class="answers-grid eight-up" id="answers-grid"></div>
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

  document.querySelectorAll('.spotify-cover-top, .spotify-cover-bl').forEach(el => el.classList.add('revealed'));

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

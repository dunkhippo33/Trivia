const TOPICS = [
  {
    id: 'dogs',
    label: 'Guess the Breed',
    icon: '🐶',
    type: 'breed-guess',
    coverImg: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    questions: [
      // French Bulldog (4 puppies)
      { breed: 'French Bulldog', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2654592/thumbnails/french-bulldog-puppy-picture-75517d08-a88e-4740-8a80-64d158c38aa6.jpg'], choices: ['French Bulldog', 'English Bulldog', 'Frenchton', 'Boston Terrier'] },
      { breed: 'French Bulldog', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2703718/thumbnails/french-bulldog-puppy-picture-53b4cde1-c792-46b6-a0da-c8c5b5ebac97.jpg'], choices: ['French Bulldog', 'English Bulldog', 'Frenchton', 'Boston Terrier'] },
      { breed: 'French Bulldog', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2705720/thumbnails/french-bulldog-puppy-picture-ac905cac-e9e9-47ca-81ee-1ea0dc97bbe3.jpg'], choices: ['French Bulldog', 'English Bulldog', 'Frenchton', 'Boston Terrier'] },
      { breed: 'French Bulldog', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2697147/thumbnails/french-bulldog-puppy-picture-6c3f2d1c-5896-4909-8351-c7ecaa796c5b.jpg'], choices: ['French Bulldog', 'English Bulldog', 'Frenchton', 'Boston Terrier'] },
      // English Bulldog (4 puppies)
      { breed: 'English Bulldog', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2697632/thumbnails/english-bulldog-puppy-picture-76df8fe2-e0ea-4c02-9b71-4e6d97682332.jpg'], choices: ['English Bulldog', 'French Bulldog', 'American Bully', 'Boxer'] },
      { breed: 'English Bulldog', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2697632/thumbnails/english-bulldog-puppy-picture-da03b7f0-a9d2-4ad2-869e-7ae99077889a.jpg'], choices: ['English Bulldog', 'French Bulldog', 'American Bully', 'Boxer'] },
      { breed: 'English Bulldog', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2587744/thumbnails/english-bulldog-puppy-picture-526e340b-a0d4-4097-b27d-6f65e4317b97.jpg'], choices: ['English Bulldog', 'French Bulldog', 'American Bully', 'Boxer'] },
      { breed: 'English Bulldog', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2587744/thumbnails/english-bulldog-puppy-picture-81821de5-cb7b-4416-ba45-bb8dd9447309.jpg'], choices: ['English Bulldog', 'French Bulldog', 'American Bully', 'Boxer'] },
      // Frenchton — mix (4 puppies)
      { breed: 'Frenchton', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2652560/thumbnails/frenchton-puppy-picture-20e338d3-e729-4b63-9e87-2b180a9ce088.jpg'], choices: ['Frenchton', 'French Bulldog', 'Boston Terrier', 'Pug'] },
      { breed: 'Frenchton', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2652560/thumbnails/frenchton-puppy-picture-849d0552-b819-415d-bf38-0cdfc0fb0441.jpg'], choices: ['Frenchton', 'French Bulldog', 'Boston Terrier', 'Pug'] },
      { breed: 'Frenchton', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2652560/thumbnails/frenchton-puppy-picture-a03f07b9-0793-4173-8b92-4834b9711d3c.jpg'], choices: ['Frenchton', 'French Bulldog', 'Boston Terrier', 'Pug'] },
      { breed: 'Frenchton', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2699207/thumbnails/frenchton-puppy-picture-cbe4815a-741a-4f7a-b82a-826bcba0be00.jpg'], choices: ['Frenchton', 'French Bulldog', 'Boston Terrier', 'Pug'] },
      // Boston Terrier (4 puppies)
      { breed: 'Boston Terrier', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2550723/thumbnails/boston-terrier-puppy-picture-ede8e404-8fa4-48d1-a466-612abe49b2d0.jpg'], choices: ['Boston Terrier', 'French Bulldog', 'Frenchton', 'Pug'] },
      { breed: 'Boston Terrier', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2643174/thumbnails/boston-terrier-puppy-picture-71595604-7638-46f6-828b-b779179536d1.jpg'], choices: ['Boston Terrier', 'French Bulldog', 'Frenchton', 'Pug'] },
      { breed: 'Boston Terrier', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/482231/thumbnails/boston-terrier-puppy-picture-b6be1828-8f38-4e56-88c8-6bccc99a0eab.jpg'], choices: ['Boston Terrier', 'French Bulldog', 'Frenchton', 'Pug'] },
      { breed: 'Boston Terrier', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2643174/thumbnails/boston-terrier-puppy-picture-5fc3b8da-97a0-42b1-a327-7886b2c366b9.jpg'], choices: ['Boston Terrier', 'French Bulldog', 'Frenchton', 'Pug'] },
      // Pug (4 puppies)
      { breed: 'Pug', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2702823/thumbnails/pug-puppy-picture-883793b2-4557-4ba7-8d20-393955dbc42e.jpg'], choices: ['Pug', 'French Bulldog', 'Frenchton', 'Boston Terrier'] },
      { breed: 'Pug', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2692597/thumbnails/pug-puppy-picture-8d31213c-8027-4cb1-a413-3b0b9cb17de2.jpg'], choices: ['Pug', 'French Bulldog', 'Frenchton', 'Boston Terrier'] },
      { breed: 'Pug', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2683042/thumbnails/pug-puppy-picture-599a9998-e553-45a0-a6c2-41a15a6800ae.jpg'], choices: ['Pug', 'French Bulldog', 'Frenchton', 'Boston Terrier'] },
      { breed: 'Pug', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2683042/thumbnails/pug-puppy-picture-cba09d72-122a-4b0c-836c-c17b9dc8b25d.jpg'], choices: ['Pug', 'French Bulldog', 'Frenchton', 'Boston Terrier'] },
      // Beagle (4 puppies)
      { breed: 'Beagle', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/383213/thumbnails/beagle-puppy-picture-03955664-7c41-41f2-93d4-8e7cf6f85c40.jpg'], choices: ['Beagle', 'Basset Hound', 'Puggle', 'Mini Dachshund'] },
      { breed: 'Beagle', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/383213/thumbnails/beagle-puppy-picture-aa99beb9-1c76-4545-aac6-779653d11551.jpg'], choices: ['Beagle', 'Basset Hound', 'Puggle', 'Mini Dachshund'] },
      { breed: 'Beagle', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2500138/thumbnails/beagle-puppy-picture-5ecf7f0d-9d58-45ca-8561-4930be809523.jpg'], choices: ['Beagle', 'Basset Hound', 'Puggle', 'Mini Dachshund'] },
      { breed: 'Beagle', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2457400/thumbnails/beagle-puppy-picture-5ee3b3bf-c841-4927-8b16-4c72bd17b4ca.jpg'], choices: ['Beagle', 'Basset Hound', 'Puggle', 'Mini Dachshund'] },
      // Basset Hound (4 puppies)
      { breed: 'Basset Hound', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2628945/thumbnails/basset-hound-puppy-picture-08fd81b8-74cf-4b2a-bcdc-2f8776ba3d03.jpg'], choices: ['Basset Hound', 'Beagle', 'Puggle', 'Mini Dachshund'] },
      { breed: 'Basset Hound', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2575262/thumbnails/basset-hound-puppy-picture-dfb039d2-a579-40bc-9aa5-1a8ec32d818c.jpg'], choices: ['Basset Hound', 'Beagle', 'Puggle', 'Mini Dachshund'] },
      { breed: 'Basset Hound', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2575262/thumbnails/basset-hound-puppy-picture-327cf09e-df5a-4ac9-9acd-437f9a68d8cc.jpg'], choices: ['Basset Hound', 'Beagle', 'Puggle', 'Mini Dachshund'] },
      { breed: 'Basset Hound', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2575262/thumbnails/basset-hound-puppy-picture-3515d748-47e7-4e45-b78a-b027c276a17f.jpg'], choices: ['Basset Hound', 'Beagle', 'Puggle', 'Mini Dachshund'] },
      // Puggle — mix (4 puppies)
      { breed: 'Puggle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/383213/thumbnails/puggle-puppy-picture-846ca0e9-3533-441a-bad4-5361cb9131c0.jpg'], choices: ['Puggle', 'Beagle', 'Pug', 'Basset Hound'] },
      { breed: 'Puggle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/239428/thumbnails/puggle-puppy-picture-86beb6f4-832a-4e8e-8b28-8acda3ad9ab5.jpg'], choices: ['Puggle', 'Beagle', 'Pug', 'Basset Hound'] },
      { breed: 'Puggle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/239428/thumbnails/puggle-puppy-picture-c4250e5f-11d6-41f2-80d9-2050202c37df.jpg'], choices: ['Puggle', 'Beagle', 'Pug', 'Basset Hound'] },
      { breed: 'Puggle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/239428/thumbnails/puggle-puppy-picture-b5193736-4034-45ab-a438-84da84546c81.jpg'], choices: ['Puggle', 'Beagle', 'Pug', 'Basset Hound'] },
      // Mini Dachshund (4 puppies)
      { breed: 'Mini Dachshund', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2676367/thumbnails/dachshund-mini-puppy-picture-1151947e-adb1-44f8-ad09-7489c88d1f46.jpg'], choices: ['Mini Dachshund', 'Basset Hound', 'Beagle', 'Corgi'] },
      { breed: 'Mini Dachshund', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2526886/thumbnails/dachshund-mini-puppy-picture-99c0fdb8-5c2d-4c3b-b385-94786a4134b3.jpg'], choices: ['Mini Dachshund', 'Basset Hound', 'Beagle', 'Corgi'] },
      { breed: 'Mini Dachshund', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2688269/thumbnails/dachshund-mini-puppy-picture-66114d5d-b6aa-4341-b2d1-2e898ba887be.jpg'], choices: ['Mini Dachshund', 'Basset Hound', 'Beagle', 'Corgi'] },
      { breed: 'Mini Dachshund', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2691612/thumbnails/dachshund-mini-puppy-picture-aa9056ba-0717-48c1-9557-a425ac602420.jpg'], choices: ['Mini Dachshund', 'Basset Hound', 'Beagle', 'Corgi'] },
      // Cavalier King Charles Spaniel (4 puppies)
      { breed: 'Cavalier King Charles Spaniel', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2680342/thumbnails/cavalier-king-charles-spaniel-puppy-picture-65b1a98f-c72d-48cc-8e45-16df01deb37d.jpg'], choices: ['Cavalier King Charles Spaniel', 'Cocker Spaniel', 'Cockapoo', 'Cavapoo'] },
      { breed: 'Cavalier King Charles Spaniel', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2492741/thumbnails/cavalier-king-charles-spaniel-puppy-picture-128fcf2e-8b38-45a8-b7a4-8b0e865f55db.jpg'], choices: ['Cavalier King Charles Spaniel', 'Cocker Spaniel', 'Cockapoo', 'Cavapoo'] },
      { breed: 'Cavalier King Charles Spaniel', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2684499/thumbnails/cavalier-king-charles-spaniel-puppy-picture-73e97403-c115-497b-a96b-212accb888ba.jpg'], choices: ['Cavalier King Charles Spaniel', 'Cocker Spaniel', 'Cockapoo', 'Cavapoo'] },
      { breed: 'Cavalier King Charles Spaniel', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2492741/thumbnails/cavalier-king-charles-spaniel-puppy-picture-968a17ce-3c97-42b1-bd65-22fd9aa16438.jpg'], choices: ['Cavalier King Charles Spaniel', 'Cocker Spaniel', 'Cockapoo', 'Cavapoo'] },
      // Cocker Spaniel (4 puppies)
      { breed: 'Cocker Spaniel', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2687518/thumbnails/cocker-spaniel-puppy-picture-5258cf76-7ffd-4278-abda-31d6bb2fc404.jpg'], choices: ['Cocker Spaniel', 'Cavalier King Charles Spaniel', 'Cockapoo', 'Cavapoo'] },
      { breed: 'Cocker Spaniel', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/850950/thumbnails/cocker-spaniel-puppy-picture-4e01e43b-d000-4569-9620-71942c21a6e1.jpg'], choices: ['Cocker Spaniel', 'Cavalier King Charles Spaniel', 'Cockapoo', 'Cavapoo'] },
      { breed: 'Cocker Spaniel', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/850950/thumbnails/cocker-spaniel-puppy-picture-7d2f477f-1109-4493-babf-ab405461fde4.jpg'], choices: ['Cocker Spaniel', 'Cavalier King Charles Spaniel', 'Cockapoo', 'Cavapoo'] },
      { breed: 'Cocker Spaniel', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2692597/thumbnails/cocker-spaniel-puppy-picture-b5313234-f3a2-41c3-9338-df8b9db0f9df.jpg'], choices: ['Cocker Spaniel', 'Cavalier King Charles Spaniel', 'Cockapoo', 'Cavapoo'] },
      // Shih Tzu (4 puppies)
      { breed: 'Shih Tzu', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2552167/thumbnails/shih-tzu-puppy-picture-9f9c6a96-dd67-4f1b-8a80-0e0c5346abd8.jpg'], choices: ['Shih Tzu', 'Havanese', 'Maltese', 'Shih-poo'] },
      { breed: 'Shih Tzu', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2700086/thumbnails/shih-tzu-puppy-picture-615118e2-c256-4b7a-b8c0-4d4fb14da84a.jpg'], choices: ['Shih Tzu', 'Havanese', 'Maltese', 'Shih-poo'] },
      { breed: 'Shih Tzu', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706786/thumbnails/shih-tzu-puppy-picture-92ec52bc-3acf-4d7e-a5bf-3ab76f9cb05e.jpg'], choices: ['Shih Tzu', 'Havanese', 'Maltese', 'Shih-poo'] },
      { breed: 'Shih Tzu', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2442548/thumbnails/shih-tzu-puppy-picture-8925d96c-e361-477d-ba8e-ba99d5ff46fa.jpg'], choices: ['Shih Tzu', 'Havanese', 'Maltese', 'Shih-poo'] },
      // Havanese (4 puppies)
      { breed: 'Havanese', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2682891/thumbnails/havanese-puppy-picture-e85c4710-c2b0-4ced-8fba-2d8c155b7c39.jpg'], choices: ['Havanese', 'Shih Tzu', 'Maltese', 'Bichon Frise'] },
      { breed: 'Havanese', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2679348/thumbnails/havanese-puppy-picture-b448b6b1-f472-4bbd-bd5a-198d7e6c4926.jpg'], choices: ['Havanese', 'Shih Tzu', 'Maltese', 'Bichon Frise'] },
      { breed: 'Havanese', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2634032/thumbnails/havanese-puppy-picture-316a1ad4-6218-4ad1-acd8-048134afdb03.jpg'], choices: ['Havanese', 'Shih Tzu', 'Maltese', 'Bichon Frise'] },
      { breed: 'Havanese', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2682891/thumbnails/havanese-puppy-picture-b0b9ea24-b279-4fbe-b133-a00388879a78.jpg'], choices: ['Havanese', 'Shih Tzu', 'Maltese', 'Bichon Frise'] },
      // Maltese (4 puppies)
      { breed: 'Maltese', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/939431/thumbnails/maltese-puppy-picture-e33708fb-08fb-4bf6-81c8-dfe72883b79a.jpg'], choices: ['Maltese', 'Bichon Frise', 'Malti-poo', 'Havanese'] },
      { breed: 'Maltese', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2683467/thumbnails/maltese-puppy-picture-b4be4256-70b9-4127-9f0a-1487ef72de08.jpg'], choices: ['Maltese', 'Bichon Frise', 'Malti-poo', 'Havanese'] },
      { breed: 'Maltese', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/939431/thumbnails/maltese-puppy-picture-70528373-952f-4adf-b313-0edd0b26025d.jpg'], choices: ['Maltese', 'Bichon Frise', 'Malti-poo', 'Havanese'] },
      { breed: 'Maltese', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2695962/thumbnails/maltese-puppy-picture-6c6898e2-7573-4f65-af54-f80fb583f0bd.jpg'], choices: ['Maltese', 'Bichon Frise', 'Malti-poo', 'Havanese'] },
      // Bichon Frise (4 puppies)
      { breed: 'Bichon Frise', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2685298/thumbnails/bichon-frise-puppy-picture-6a5b27c5-9132-4056-918a-9b7f465229f9.jpg'], choices: ['Bichon Frise', 'Maltese', 'Malti-poo', 'Havanese'] },
      { breed: 'Bichon Frise', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2705112/thumbnails/bichon-frise-puppy-picture-7c7a34b7-5a53-49d5-8e4c-8aff7f207ab5.jpg'], choices: ['Bichon Frise', 'Maltese', 'Malti-poo', 'Havanese'] },
      { breed: 'Bichon Frise', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2698342/thumbnails/bichon-frise-puppy-picture-f397d4d3-1166-4341-b2b6-09eccf226a0f.jpg'], choices: ['Bichon Frise', 'Maltese', 'Malti-poo', 'Havanese'] },
      { breed: 'Bichon Frise', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2679348/thumbnails/bichon-frise-puppy-picture-5bf37e84-ea8c-4660-afd6-ddb838679a79.jpg'], choices: ['Bichon Frise', 'Maltese', 'Malti-poo', 'Havanese'] },
      // Pomeranian (4 puppies)
      { breed: 'Pomeranian', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2701196/thumbnails/pomeranian-puppy-picture-1be447a7-dd8e-49ae-b607-e8868db0654a.jpg'], choices: ['Pomeranian', 'Yorkie', 'Morkie', 'Shih Tzu'] },
      { breed: 'Pomeranian', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/985352/thumbnails/pomeranian-puppy-picture-4bc68df6-f974-43bc-8663-d6a1c9b28e07.jpg'], choices: ['Pomeranian', 'Yorkie', 'Morkie', 'Shih Tzu'] },
      { breed: 'Pomeranian', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2705986/thumbnails/pomeranian-puppy-picture-80c70db3-96b3-4fc6-b364-1f4f0a99d05d.jpg'], choices: ['Pomeranian', 'Yorkie', 'Morkie', 'Shih Tzu'] },
      { breed: 'Pomeranian', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2698342/thumbnails/pomeranian-puppy-picture-70429ab6-a5e4-4490-8383-3558039d8277.jpg'], choices: ['Pomeranian', 'Yorkie', 'Morkie', 'Shih Tzu'] },
      // Yorkie (4 puppies)
      { breed: 'Yorkie', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2695962/thumbnails/yorkshire-terrier-yorkie-puppy-picture-41c07751-01d3-4ed9-b4c4-ad5010b1458b.jpg'], choices: ['Yorkie', 'Morkie', 'Pomeranian', 'Shih-poo'] },
      { breed: 'Yorkie', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2680844/thumbnails/yorkshire-terrier-yorkie-puppy-picture-8769a329-678d-4a6a-ba45-fb120528fbe9.jpg'], choices: ['Yorkie', 'Morkie', 'Pomeranian', 'Shih-poo'] },
      { breed: 'Yorkie', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2695506/thumbnails/yorkshire-terrier-yorkie-puppy-picture-4a9106fb-5a8a-44c7-b9e2-b061eed893a5.jpg'], choices: ['Yorkie', 'Morkie', 'Pomeranian', 'Shih-poo'] },
      { breed: 'Yorkie', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2680863/thumbnails/yorkshire-terrier-yorkie-puppy-picture-0390f445-da58-44c2-a39e-a37a24dd8f60.jpg'], choices: ['Yorkie', 'Morkie', 'Pomeranian', 'Shih-poo'] },
      // Morkie — mix (4 puppies)
      { breed: 'Morkie', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/939431/thumbnails/morkie-yorktese-puppy-picture-528e7356-0b59-4f15-a33b-42a78af83e9e.jpg'], choices: ['Morkie', 'Yorkie', 'Maltese', 'Shih-poo'] },
      { breed: 'Morkie', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2698373/thumbnails/morkie-yorktese-puppy-picture-3d787c7e-f0c5-4bfa-8b81-88fb1a4a0ae2.jpg'], choices: ['Morkie', 'Yorkie', 'Maltese', 'Shih-poo'] },
      { breed: 'Morkie', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2677710/thumbnails/morkie-yorktese-puppy-picture-4ac41671-5bd2-4e9a-922f-a2bd5f9d07b7.jpg'], choices: ['Morkie', 'Yorkie', 'Maltese', 'Shih-poo'] },
      { breed: 'Morkie', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/483441/thumbnails/morkie-yorktese-puppy-picture-d2e381e1-ee55-47ae-a0fd-a8fdd7e7997b.jpg'], choices: ['Morkie', 'Yorkie', 'Maltese', 'Shih-poo'] },
      // Malti-poo — mix (4 puppies)
      { breed: 'Malti-poo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706387/thumbnails/malti-poo-maltipoo-puppy-picture-1b56e150-cf90-4493-b464-c2efad568f99.jpg'], choices: ['Malti-poo', 'Maltese', 'Bichon Frise', 'Shih-poo'] },
      { breed: 'Malti-poo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2699474/thumbnails/malti-poo-maltipoo-puppy-picture-43f046b7-81e4-4776-906e-0108e37ed21c.jpg'], choices: ['Malti-poo', 'Maltese', 'Bichon Frise', 'Shih-poo'] },
      { breed: 'Malti-poo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2700050/thumbnails/malti-poo-maltipoo-puppy-picture-acd99e5f-d1b0-42ca-b71e-e40f63a1f078.jpg'], choices: ['Malti-poo', 'Maltese', 'Bichon Frise', 'Shih-poo'] },
      { breed: 'Malti-poo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2418824/thumbnails/malti-poo-maltipoo-puppy-picture-44c2edc3-feab-44da-86e5-047f11d7411a.jpg'], choices: ['Malti-poo', 'Maltese', 'Bichon Frise', 'Shih-poo'] },
      // Shih-poo — mix (4 puppies)
      { breed: 'Shih-poo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2678002/thumbnails/shih-poo-shihpoo-puppy-picture-dc77a6c2-4c2c-4dba-9186-55897cd09da6.jpg'], choices: ['Shih-poo', 'Shih Tzu', 'Malti-poo', 'Morkie'] },
      { breed: 'Shih-poo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2705713/thumbnails/shih-poo-shihpoo-puppy-picture-d6cd8bba-1679-425a-a753-d095785a9946.jpg'], choices: ['Shih-poo', 'Shih Tzu', 'Malti-poo', 'Morkie'] },
      { breed: 'Shih-poo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2705713/thumbnails/shih-poo-shihpoo-puppy-picture-1868e169-a985-4f05-af2c-74c85d478292.jpg'], choices: ['Shih-poo', 'Shih Tzu', 'Malti-poo', 'Morkie'] },
      { breed: 'Shih-poo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2674139/thumbnails/shih-poo-shihpoo-puppy-picture-f0cbea8c-de4f-4325-b8ea-fe9c15acad38.jpg'], choices: ['Shih-poo', 'Shih Tzu', 'Malti-poo', 'Morkie'] },
      // Cockapoo — mix (4 puppies)
      { breed: 'Cockapoo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2517497/thumbnails/cockapoo-puppy-picture-56462541-374d-4659-bac1-dc3278a976ef.jpg'], choices: ['Cockapoo', 'Cavapoo', 'Cocker Spaniel', 'Schnoodle'] },
      { breed: 'Cockapoo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2660998/thumbnails/cockapoo-puppy-picture-32ed48e9-0534-465b-ab75-2e29d9760180.jpg'], choices: ['Cockapoo', 'Cavapoo', 'Cocker Spaniel', 'Schnoodle'] },
      { breed: 'Cockapoo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2698692/thumbnails/cockapoo-puppy-picture-120038c6-7126-4eb3-8980-78cede96f2de.jpg'], choices: ['Cockapoo', 'Cavapoo', 'Cocker Spaniel', 'Schnoodle'] },
      { breed: 'Cockapoo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2698692/thumbnails/cockapoo-puppy-picture-7601c685-502e-4541-969a-b41d83eb71a0.jpg'], choices: ['Cockapoo', 'Cavapoo', 'Cocker Spaniel', 'Schnoodle'] },
      // Cavapoo — mix (4 puppies)
      { breed: 'Cavapoo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2680176/thumbnails/cavapoo-puppy-picture-6bdfbbc2-665c-42be-903d-3be3e1c36123.jpg'], choices: ['Cavapoo', 'Cockapoo', 'Malti-poo', 'Shih-poo'] },
      { breed: 'Cavapoo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2572677/thumbnails/cavapoo-puppy-picture-6e5a802f-0ebc-4d36-b938-3d5c8022a8fc.jpg'], choices: ['Cavapoo', 'Cockapoo', 'Malti-poo', 'Shih-poo'] },
      { breed: 'Cavapoo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2517497/thumbnails/cavapoo-puppy-picture-a351aea7-fd83-4005-b249-6f90a9db2a39.jpg'], choices: ['Cavapoo', 'Cockapoo', 'Malti-poo', 'Shih-poo'] },
      { breed: 'Cavapoo', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2517497/thumbnails/cavapoo-puppy-picture-b992fcab-681c-4326-a1af-6b399d1d97e3.jpg'], choices: ['Cavapoo', 'Cockapoo', 'Malti-poo', 'Shih-poo'] },
      // Schnoodle — mix (4 puppies)
      { breed: 'Schnoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2703139/thumbnails/schnoodle-puppy-picture-ec6a6e13-6e86-4d16-b866-08c351e1bdba.jpg'], choices: ['Schnoodle', 'Cockapoo', 'Cavapoo', 'Mini Schnauzer'] },
      { breed: 'Schnoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2703139/thumbnails/schnoodle-puppy-picture-06e0f6f5-78ae-4d24-a0e8-590d4d34243c.jpg'], choices: ['Schnoodle', 'Cockapoo', 'Cavapoo', 'Mini Schnauzer'] },
      { breed: 'Schnoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2703139/thumbnails/schnoodle-puppy-picture-2a038796-ce7d-46bf-a0e3-eedacd161d39.jpg'], choices: ['Schnoodle', 'Cockapoo', 'Cavapoo', 'Mini Schnauzer'] },
      { breed: 'Schnoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2703139/thumbnails/schnoodle-puppy-picture-a22fd93c-ee44-4924-ae3e-0c868ada3a67.jpg'], choices: ['Schnoodle', 'Cockapoo', 'Cavapoo', 'Mini Schnauzer'] },
      // Labradoodle — mix (4 puppies)
      { breed: 'Labradoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706520/thumbnails/labradoodle-puppy-picture-4b55e1d3-d48e-4210-b3a1-cd6ac9710de7.jpg'], choices: ['Labradoodle', 'Goldendoodle', 'Aussiedoodle', 'Bernedoodle'] },
      { breed: 'Labradoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706520/thumbnails/labradoodle-puppy-picture-60887e8c-9bed-41e2-a923-db0410d295ba.jpg'], choices: ['Labradoodle', 'Goldendoodle', 'Aussiedoodle', 'Bernedoodle'] },
      { breed: 'Labradoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706520/thumbnails/labradoodle-puppy-picture-3b871b73-2289-4d36-bfd5-2ab6d6f546b3.jpg'], choices: ['Labradoodle', 'Goldendoodle', 'Aussiedoodle', 'Bernedoodle'] },
      { breed: 'Labradoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706520/thumbnails/labradoodle-puppy-picture-a09b137b-9a1c-4412-9d32-ca5d819f9c34.jpg'], choices: ['Labradoodle', 'Goldendoodle', 'Aussiedoodle', 'Bernedoodle'] },
      // Goldendoodle — mix (4 puppies)
      { breed: 'Goldendoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706697/thumbnails/goldendoodle-puppy-picture-270e10fe-6511-4c03-bacd-41f4dd076aa2.jpg'], choices: ['Goldendoodle', 'Labradoodle', 'Mini Goldendoodle', 'Aussiedoodle'] },
      { breed: 'Goldendoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706697/thumbnails/goldendoodle-puppy-picture-058b0f64-319f-4ff2-b805-7a930607f4fb.jpg'], choices: ['Goldendoodle', 'Labradoodle', 'Mini Goldendoodle', 'Aussiedoodle'] },
      { breed: 'Goldendoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/1022716/thumbnails/goldendoodle-puppy-picture-ff80dac0-7ad4-4581-bd5f-099a64f3be05.jpg'], choices: ['Goldendoodle', 'Labradoodle', 'Mini Goldendoodle', 'Aussiedoodle'] },
      { breed: 'Goldendoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2659338/thumbnails/goldendoodle-puppy-picture-fce51e50-f8ec-4f7d-896d-2a03b23ce38f.jpg'], choices: ['Goldendoodle', 'Labradoodle', 'Mini Goldendoodle', 'Aussiedoodle'] },
      // Mini Goldendoodle — mix (4 puppies)
      { breed: 'Mini Goldendoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2697180/thumbnails/mini-goldendoodle-puppy-picture-e497c4be-a09a-4e92-bc7d-2b4f27ff6c03.jpg'], choices: ['Mini Goldendoodle', 'Goldendoodle', 'Labradoodle', 'Cavapoo'] },
      { breed: 'Mini Goldendoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2703823/thumbnails/mini-goldendoodle-puppy-picture-a880472b-00b3-4b8f-8999-e094dacecd4d.jpg'], choices: ['Mini Goldendoodle', 'Goldendoodle', 'Labradoodle', 'Cavapoo'] },
      { breed: 'Mini Goldendoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2701570/thumbnails/mini-goldendoodle-puppy-picture-1e040ebe-5e49-4cb4-88b6-d25f48de036e.jpg'], choices: ['Mini Goldendoodle', 'Goldendoodle', 'Labradoodle', 'Cavapoo'] },
      { breed: 'Mini Goldendoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/383213/thumbnails/mini-goldendoodle-puppy-picture-551ef106-866f-4728-81b3-9c536f789fc5.jpg'], choices: ['Mini Goldendoodle', 'Goldendoodle', 'Labradoodle', 'Cavapoo'] },
      // Aussiedoodle — mix (4 puppies)
      { breed: 'Aussiedoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2531287/thumbnails/aussiedoodle-puppy-picture-146496dd-16dc-4214-a05f-26249e15f9a0.jpg'], choices: ['Aussiedoodle', 'Labradoodle', 'Goldendoodle', 'Bernedoodle'] },
      { breed: 'Aussiedoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2569812/thumbnails/aussiedoodle-puppy-picture-6150c191-5be8-4f20-b6ff-e2781cf3df18.jpg'], choices: ['Aussiedoodle', 'Labradoodle', 'Goldendoodle', 'Bernedoodle'] },
      { breed: 'Aussiedoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2706757/thumbnails/aussiedoodle-puppy-picture-5f97821c-53d9-49ea-b22f-dc0c0239200a.jpg'], choices: ['Aussiedoodle', 'Labradoodle', 'Goldendoodle', 'Bernedoodle'] },
      { breed: 'Aussiedoodle', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2640752/thumbnails/aussiedoodle-puppy-picture-e2214e20-c8aa-4f30-afb3-2732804ae510.jpg'], choices: ['Aussiedoodle', 'Labradoodle', 'Goldendoodle', 'Bernedoodle'] },
      // Siberian Husky (4 puppies)
      { breed: 'Siberian Husky', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2701208/thumbnails/siberian-husky-puppy-picture-2f8c9b8f-d502-45aa-a3af-b7a705897a1b.jpg'], choices: ['Siberian Husky', 'Pomsky', 'Shiba Inu', 'Australian Shepherd'] },
      { breed: 'Siberian Husky', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2701208/thumbnails/siberian-husky-puppy-picture-b364c008-36f6-4a7a-b57b-874284cd99e9.jpg'], choices: ['Siberian Husky', 'Pomsky', 'Shiba Inu', 'Australian Shepherd'] },
      { breed: 'Siberian Husky', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2604477/thumbnails/siberian-husky-puppy-picture-b7d8e154-af37-4ec3-acfb-7e026346ffb6.jpg'], choices: ['Siberian Husky', 'Pomsky', 'Shiba Inu', 'Australian Shepherd'] },
      { breed: 'Siberian Husky', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2655449/thumbnails/siberian-husky-puppy-picture-854a582b-577e-4b4d-af32-efdf16820618.jpg'], choices: ['Siberian Husky', 'Pomsky', 'Shiba Inu', 'Australian Shepherd'] },
      // Pomsky — mix (4 puppies)
      { breed: 'Pomsky', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2696012/thumbnails/pomsky-puppy-picture-be39f13d-6b2d-4d85-9eb5-bc44848f873f.jpg'], choices: ['Pomsky', 'Siberian Husky', 'Pomeranian', 'Shiba Inu'] },
      { breed: 'Pomsky', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2696012/thumbnails/pomsky-puppy-picture-fd6e8e89-7f8e-4dc9-ad7d-a724446e8e3d.jpg'], choices: ['Pomsky', 'Siberian Husky', 'Pomeranian', 'Shiba Inu'] },
      { breed: 'Pomsky', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2697632/thumbnails/pomsky-puppy-picture-b7e5ea88-04bd-4b4d-91d9-6dfe2999b352.jpg'], choices: ['Pomsky', 'Siberian Husky', 'Pomeranian', 'Shiba Inu'] },
      { breed: 'Pomsky', q: '🐾 What mix is this dog?', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2697632/thumbnails/pomsky-puppy-picture-9fb3492a-fd3e-4356-8f51-4803f350b2c5.jpg'], choices: ['Pomsky', 'Siberian Husky', 'Pomeranian', 'Shiba Inu'] },
      // Shiba Inu (4 puppies)
      { breed: 'Shiba Inu', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2705855/thumbnails/shiba-inu-puppy-picture-1e12503c-1891-4687-9b40-8ebfda52b44a.jpg'], choices: ['Shiba Inu', 'Siberian Husky', 'Pomsky', 'Australian Shepherd'] },
      { breed: 'Shiba Inu', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2705855/thumbnails/shiba-inu-puppy-picture-bb34d12a-2d00-45af-b9bb-21fb9029b2b5.jpg'], choices: ['Shiba Inu', 'Siberian Husky', 'Pomsky', 'Australian Shepherd'] },
      { breed: 'Shiba Inu', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2656906/thumbnails/shiba-inu-puppy-picture-4f58d717-b227-4068-8cc7-79337704bddc.jpg'], choices: ['Shiba Inu', 'Siberian Husky', 'Pomsky', 'Australian Shepherd'] },
      { breed: 'Shiba Inu', imgs: ['https://d2o95ihmoayh0z.cloudfront.net/2696637/thumbnails/shiba-inu-puppy-picture-eee68f50-44b8-4029-baf6-20987f4a14cb.jpg'], choices: ['Shiba Inu', 'Siberian Husky', 'Pomsky', 'Australian Shepherd'] },
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
      // Taylor Swift
      { trackId: '1u4HUiREUR6vX1W1RYG2Tm', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Ariana Grande', 'Gracie Abrams', 'Maisie Peters'] },
      { trackId: '0VE4kBnHJUgtMf0dy6DRmW', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Ariana Grande', 'Dua Lipa', 'Miley Cyrus'] },
      { trackId: '6nK2pIKFcRc5frrZKHgsiT', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Gracie Abrams', 'Chappell Roan', 'Ariana Grande', 'Dua Lipa', 'SZA'] },
      { trackId: '0PurA4JVJ8YQgSVopY8fn6', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Gracie Abrams', 'Billie Eilish', 'Chappell Roan', 'Ariana Grande', 'Dua Lipa', 'Maisie Peters'] },
      { trackId: '1R0a2iXumgCiFb7HEZ7gUE', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Gracie Abrams', 'Ariana Grande', 'SZA'] },
      // Olivia Rodrigo
      { trackId: '1sgZSLYACTaYocOmrB8E0y', q: "Who sings this song?", a: 'Olivia Rodrigo',  choices: ['Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'Tate McRae', 'Reneé Rapp', 'Maisie Peters'] },
      { trackId: '35eSXAktS5cpHCGnm52nxl', q: "Who sings this song?", a: 'Olivia Rodrigo',  choices: ['Olivia Rodrigo', 'Taylor Swift', 'Billie Eilish', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'Tate McRae', 'Ariana Grande'] },
      { trackId: '4DB6upTZIXWqP96Jf1JRha', q: "Who sings this song?", a: 'Olivia Rodrigo',  choices: ['Olivia Rodrigo', 'Taylor Swift', 'Billie Eilish', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'SZA', 'Ariana Grande'] },
      // Billie Eilish
      { trackId: '1M0N3VW72zmZmHsCRgaAWg', q: "Who sings this song?", a: 'Billie Eilish',   choices: ['Billie Eilish', 'Olivia Rodrigo', 'Taylor Swift', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'SZA', 'Tate McRae'] },
      { trackId: '54bFM56PmE4YLRnqpW6Tha', q: "Who sings this song?", a: 'Billie Eilish',   choices: ['Billie Eilish', 'Olivia Rodrigo', 'Taylor Swift', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'SZA', 'Tate McRae'] },
      { trackId: '0u2P5u6lvoDfwTYjAADbn4', q: "Who sings this song?", a: 'Billie Eilish',   choices: ['Billie Eilish', 'Olivia Rodrigo', 'Taylor Swift', 'Gracie Abrams', 'Chappell Roan', 'Ariana Grande', 'SZA', 'Tate McRae'] },
      // SZA, Chappell Roan, Sabrina Carpenter, Miley Cyrus, The Weeknd, Dua Lipa, Beyoncé, Harry Styles
      { trackId: '1Qrg8KqiBpW07V7PNxwwwL', q: "Who sings this song?", a: 'SZA',             choices: ['SZA', 'Doja Cat', 'Cardi B', 'Lizzo', 'Megan Thee Stallion', 'Jhené Aiko', 'Ariana Grande', 'Beyoncé'] },
      { trackId: '0WbMK4wrZ1wFSty9F7FCgu', q: "Who sings this song?", a: 'Chappell Roan',   choices: ['Chappell Roan', 'Sabrina Carpenter', 'Gracie Abrams', 'Reneé Rapp', 'Tate McRae', 'Maisie Peters', 'Olivia Rodrigo', 'Billie Eilish'] },
      { trackId: '5N3hjp1WNayUPZrA8kJmJP', q: "Who sings this song?", a: 'Sabrina Carpenter', choices: ['Sabrina Carpenter', 'Chappell Roan', 'Olivia Rodrigo', 'Gracie Abrams', 'Reneé Rapp', 'Tate McRae', 'Billie Eilish', 'Taylor Swift'] },
      { trackId: '0yLdNVWF3Srea0uzk55zFn', q: "Who sings this song?", a: 'Miley Cyrus',     choices: ['Miley Cyrus', 'Katy Perry', 'Dua Lipa', 'Selena Gomez', 'Ariana Grande', 'Halsey', 'Taylor Swift', 'Beyoncé'] },
      { trackId: '0VjIjW4GlUZAMYd2vXMi3b', q: "Who sings this song?", a: 'The Weeknd',      choices: ['The Weeknd', 'Justin Bieber', 'Harry Styles', 'Ed Sheeran', 'Shawn Mendes', 'Drake', 'Zayn', 'Charlie Puth'] },
      { trackId: '39LLxExYz6ewLAcYrzQQyP', q: "Who sings this song?", a: 'Dua Lipa',        choices: ['Dua Lipa', 'Ariana Grande', 'Cardi B', 'Nicki Minaj', 'Lizzo', 'Megan Thee Stallion', 'Miley Cyrus', 'Beyoncé'] },
      { trackId: '0Z7nGFVCLfixWctgePsRk9', q: "Who sings this song?", a: 'Beyoncé',         choices: ['Beyoncé', 'Taylor Swift', 'Kacey Musgraves', 'Megan Thee Stallion', 'Lizzo', 'Cardi B', 'Miley Cyrus', 'Dua Lipa'] },
      { trackId: '4LRPiXqCikLlN15c3yImP7', q: "Who sings this song?", a: 'Harry Styles',    choices: ['Harry Styles', 'Zayn', 'Niall Horan', 'Shawn Mendes', 'Ed Sheeran', 'Justin Bieber', 'Charlie Puth', 'Alex Warren'] },
      // The Weeknd (more)
      { trackId: '7MXVkk9YMctZqd1Srtv4MB', q: "Who sings this song?", a: 'The Weeknd',      choices: ['The Weeknd', 'Justin Bieber', 'Drake', 'Post Malone', 'J. Cole', 'Khalid', 'Zayn', 'Harry Styles'] },
      { trackId: '5QO79kh1waicV47BqGRL3g', q: "Who sings this song?", a: 'The Weeknd',      choices: ['The Weeknd', 'Justin Bieber', 'Harry Styles', 'Ed Sheeran', 'Shawn Mendes', 'Drake', 'Zayn', 'Charlie Puth'] },
      { trackId: '2LBqCSwhJGcFQeTHMVGwy3', q: "Who sings this song?", a: 'The Weeknd',      choices: ['The Weeknd', 'Justin Bieber', 'Drake', 'Post Malone', 'Khalid', 'Zayn', 'Harry Styles', 'Ed Sheeran'] },
      { trackId: '6RsWqX8zABZLhZydXxEFOm', q: "Who sings this song?", a: 'The Weeknd',      choices: ['The Weeknd', 'Justin Bieber', 'Drake', 'Post Malone', 'Khalid', 'Zayn', 'Harry Styles', 'Ed Sheeran'] },
      // Ariana Grande
      { trackId: '3e9HZxeyfWwjeyPAMmWSSQ', q: "Who sings this song?", a: 'Ariana Grande',   choices: ['Ariana Grande', 'Dua Lipa', 'Doja Cat', 'Nicki Minaj', 'Olivia Rodrigo', 'Taylor Swift', 'Billie Eilish', 'SZA'] },
      { trackId: '6ocbgoVGwYJhOv1GgI9NsF', q: "Who sings this song?", a: 'Ariana Grande',   choices: ['Ariana Grande', 'Dua Lipa', 'Beyoncé', 'Nicki Minaj', 'Cardi B', 'Taylor Swift', 'Billie Eilish', 'Miley Cyrus'] },
      { trackId: '35mvY5S1H3J2QZyna3TFe0', q: "Who sings this song?", a: 'Ariana Grande',   choices: ['Ariana Grande', 'Dua Lipa', 'Doja Cat', 'SZA', 'Olivia Rodrigo', 'Taylor Swift', 'Billie Eilish', 'Sabrina Carpenter'] },
      { trackId: '7yHEDfrJNd0zWOfXwydNH0', q: "Who sings this song?", a: 'Ariana Grande',   choices: ['Ariana Grande', 'Beyoncé', 'Dua Lipa', 'Nicki Minaj', 'Cardi B', 'Taylor Swift', 'Billie Eilish', 'Miley Cyrus'] },
      // Dua Lipa (more)
      { trackId: '5nujrmhLynf4yMoMtj8AQF', q: "Who sings this song?", a: 'Dua Lipa',        choices: ['Dua Lipa', 'Ariana Grande', 'Taylor Swift', 'Billie Eilish', 'Doja Cat', 'SZA', 'Miley Cyrus', 'Beyoncé'] },
      { trackId: '3PfIrDoz19wz7qK7tYeu62', q: "Who sings this song?", a: 'Dua Lipa',        choices: ['Dua Lipa', 'Ariana Grande', 'Taylor Swift', 'Billie Eilish', 'Doja Cat', 'Sabrina Carpenter', 'Miley Cyrus', 'Beyoncé'] },
      { trackId: '2ekn2ttSfGqwhhate0LSR0', q: "Who sings this song?", a: 'Dua Lipa',        choices: ['Dua Lipa', 'Ariana Grande', 'Taylor Swift', 'Billie Eilish', 'Selena Gomez', 'SZA', 'Miley Cyrus', 'Beyoncé'] },
      // Bruno Mars
      { trackId: '32OlwWuMpZ6b0aN2RZOeMS', q: "Who sings this song?", a: 'Bruno Mars',      choices: ['Bruno Mars', 'Justin Timberlake', 'The Weeknd', 'Drake', 'Post Malone', 'Ed Sheeran', 'Charlie Puth', 'Justin Bieber'] },
      { trackId: '7BqBn9nzAq8spo5e7cZ0dJ', q: "Who sings this song?", a: 'Bruno Mars',      choices: ['Bruno Mars', 'Justin Timberlake', 'Ed Sheeran', 'Charlie Puth', 'Sam Smith', 'Shawn Mendes', 'Harry Styles', 'Justin Bieber'] },
      { trackId: '5g7sDjBhZ4I3gcFIpkrLuI', q: "Who sings this song?", a: 'Bruno Mars',      choices: ['Bruno Mars', 'Justin Timberlake', 'The Weeknd', 'Drake', 'Post Malone', 'Ed Sheeran', 'Charlie Puth', 'Justin Bieber'] },
      { trackId: '6b8Be6ljOzmkOmFslEb23P', q: "Who sings this song?", a: 'Bruno Mars',      choices: ['Bruno Mars', 'Justin Timberlake', 'The Weeknd', 'Drake', 'Post Malone', 'Ed Sheeran', 'Charlie Puth', 'Justin Bieber'] },
      // Post Malone
      { trackId: '21jGcNKet2qwijlDFuPiPb', q: "Who sings this song?", a: 'Post Malone',     choices: ['Post Malone', 'The Weeknd', 'Drake', 'Bruno Mars', 'Justin Bieber', 'Charlie Puth', 'Khalid', 'Niall Horan'] },
      { trackId: '0RiRZpuVRbi7oqRdSMwhQY', q: "Who sings this song?", a: 'Post Malone',     choices: ['Post Malone', 'The Weeknd', 'Drake', 'Bruno Mars', 'Justin Bieber', 'Charlie Puth', 'Khalid', 'Harry Styles'] },
      { trackId: '0e7ipj03S05BNilyu5bRzt', q: "Who sings this song?", a: 'Post Malone',     choices: ['Post Malone', 'The Weeknd', 'Drake', 'Bruno Mars', 'Justin Bieber', 'Lil Uzi Vert', 'Khalid', 'Harry Styles'] },
      { trackId: '3a1lNhkSLSkpJE4MSHpDu9', q: "Who sings this song?", a: 'Post Malone',     choices: ['Post Malone', 'The Weeknd', 'Drake', 'Bruno Mars', 'Justin Bieber', 'Charlie Puth', 'Khalid', 'Harry Styles'] },
      // Taylor Swift (more)
      { trackId: '0V3wPSX9ygBnCm8psDIegu', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Ariana Grande', 'Gracie Abrams', 'Dua Lipa'] },
      { trackId: '1BxfuPKGuaTgP7aM0Bbdwr', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Olivia Rodrigo', 'Billie Eilish', 'Dua Lipa', 'Chappell Roan', 'Ariana Grande', 'Sabrina Carpenter', 'Gracie Abrams'] },
      { trackId: '0cqRj7pUJDkTCEsJkx8snD', q: "Who sings this song?", a: 'Taylor Swift',    choices: ['Taylor Swift', 'Katy Perry', 'Billie Eilish', 'Dua Lipa', 'Ariana Grande', 'Miley Cyrus', 'Selena Gomez', 'Beyoncé'] },
      // Harry Styles (more)
      { trackId: '6UelLqGlWMcVH1E5c4H7lY', q: "Who sings this song?", a: 'Harry Styles',    choices: ['Harry Styles', 'Zayn', 'Niall Horan', 'Shawn Mendes', 'Ed Sheeran', 'Justin Bieber', 'Charlie Puth', 'Alex Warren'] },
      { trackId: '3jjujdWJ72nww5eGnfs2E7', q: "Who sings this song?", a: 'Harry Styles',    choices: ['Harry Styles', 'Zayn', 'Niall Horan', 'Shawn Mendes', 'Ed Sheeran', 'Justin Bieber', 'Charlie Puth', 'Sam Smith'] },
      // Lewis Capaldi
      { trackId: '7qEHsqek33rTcFNT9PFqLf', q: "Who sings this song?", a: 'Lewis Capaldi',   choices: ['Lewis Capaldi', 'Sam Smith', 'Ed Sheeran', 'James Arthur', 'Shawn Mendes', 'Harry Styles', 'Niall Horan', 'Charlie Puth'] },
      { trackId: '2gMXnyrvIjhVBUZwvLZDMP', q: "Who sings this song?", a: 'Lewis Capaldi',   choices: ['Lewis Capaldi', 'Sam Smith', 'Ed Sheeran', 'James Arthur', 'Shawn Mendes', 'Harry Styles', 'Niall Horan', 'Charlie Puth'] },
      // Sam Smith
      { trackId: '7IHOIqZUUInxjVkko181PB', q: "Who sings this song?", a: 'Sam Smith',       choices: ['Sam Smith', 'Lewis Capaldi', 'Ed Sheeran', 'James Arthur', 'Shawn Mendes', 'Harry Styles', 'Niall Horan', 'Charlie Puth'] },
      { trackId: '3nqOZiMDPUJGWAuqbQAv5h', q: "Who sings this song?", a: 'Sam Smith',       choices: ['Sam Smith', 'Lewis Capaldi', 'Ed Sheeran', 'James Arthur', 'Shawn Mendes', 'Harry Styles', 'Niall Horan', 'Charlie Puth'] },
      // Charlie Puth
      { trackId: '06KyNuuMOX1ROXRhj787tj', q: "Who sings this song?", a: 'Charlie Puth',    choices: ['Charlie Puth', 'Shawn Mendes', 'Ed Sheeran', 'Justin Bieber', 'Niall Horan', 'Sam Smith', 'Lewis Capaldi', 'Harry Styles'] },
      { trackId: '4iLqG9SeJSnt0cSPICSjxv', q: "Who sings this song?", a: 'Charlie Puth',    choices: ['Charlie Puth', 'Shawn Mendes', 'Ed Sheeran', 'Justin Bieber', 'Niall Horan', 'Sam Smith', 'Lewis Capaldi', 'Harry Styles'] },
      // Zayn
      { trackId: '0PDUDa38GO8lMxLCRc4lL1', q: "Who sings this song?", a: 'Zayn',            choices: ['Zayn', 'Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Charlie Puth', 'The Weeknd'] },
      { trackId: '1j4kHkkpqZRBgkKAClTSRn', q: "Who sings this song?", a: 'Zayn',            choices: ['Zayn', 'Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Charlie Puth', 'The Weeknd'] },
      // Doja Cat
      { trackId: '3Dv1eDb0MEgF93GpLXlucZ', q: "Who sings this song?", a: 'Doja Cat',        choices: ['Doja Cat', 'Nicki Minaj', 'Cardi B', 'SZA', 'Ariana Grande', 'Lizzo', 'Megan Thee Stallion', 'Beyoncé'] },
      { trackId: '3DarAbFujv6eYNliUTyqtz', q: "Who sings this song?", a: 'Doja Cat',        choices: ['Doja Cat', 'SZA', 'Nicki Minaj', 'Cardi B', 'Ariana Grande', 'Lizzo', 'Megan Thee Stallion', 'Beyoncé'] },
      { trackId: '3Vi5XqYrmQgOYBajMWSvCi', q: "Who sings this song?", a: 'Doja Cat',        choices: ['Doja Cat', 'Nicki Minaj', 'Cardi B', 'SZA', 'Ariana Grande', 'Lizzo', 'Megan Thee Stallion', 'Beyoncé'] },
      // Tate McRae
      { trackId: '45bE4HXI0AwGZXfZtMp8JR', q: "Who sings this song?", a: 'Tate McRae',      choices: ['Tate McRae', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Gracie Abrams', 'Reneé Rapp', 'Maisie Peters'] },
      { trackId: '3rUGC1vUpkDG9CZFHMur1t', q: "Who sings this song?", a: 'Tate McRae',      choices: ['Tate McRae', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Gracie Abrams', 'Reneé Rapp', 'Maisie Peters'] },
      // Conan Gray
      { trackId: '4xqrdfXkTW4T0RauPLv3WA', q: "Who sings this song?", a: 'Conan Gray',      choices: ['Conan Gray', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Charlie Puth', 'Alex Warren', 'Justin Bieber'] },
      { trackId: '0KmgJyW4GDgonqsoyx0CZ3', q: "Who sings this song?", a: 'Conan Gray',      choices: ['Conan Gray', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Charlie Puth', 'Alex Warren', 'Stephen Sanchez'] },
      // Noah Kahan
      { trackId: '0mflMxspEfB0VbI1kyLiAv', q: "Who sings this song?", a: 'Noah Kahan',      choices: ['Noah Kahan', 'Conan Gray', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Lewis Capaldi', 'James Arthur'] },
      { trackId: '4O2rRsoSPb5aN7N3tG6Y3v', q: "Who sings this song?", a: 'Noah Kahan',      choices: ['Noah Kahan', 'Conan Gray', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Lewis Capaldi', 'James Arthur'] },
      { trackId: '0FlwhvrncUKrEAhzunmCKm', q: "Who sings this song?", a: 'Noah Kahan',      choices: ['Noah Kahan', 'Conan Gray', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Lewis Capaldi', 'Stephen Sanchez'] },
      // Stephen Sanchez
      { trackId: '1Y3LN4zO1Edc2EluIoSPJN', q: "Who sings this song?", a: 'Stephen Sanchez', choices: ['Stephen Sanchez', 'Conan Gray', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Niall Horan', 'Lewis Capaldi', 'Noah Kahan'] },
      // Niall Horan
      { trackId: '2cOUlop2ZakjOKe4WinesN', q: "Who sings this song?", a: 'Niall Horan',     choices: ['Niall Horan', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Zayn', 'Justin Bieber', 'Charlie Puth', 'Lewis Capaldi'] },
      { trackId: '5nA67Y0XX9JipZwYxX7Gl7', q: "Who sings this song?", a: 'Niall Horan',     choices: ['Niall Horan', 'Shawn Mendes', 'Ed Sheeran', 'Harry Styles', 'Zayn', 'Justin Bieber', 'Charlie Puth', 'Lewis Capaldi'] },
      // SZA (more)
      { trackId: '3YJJjQPAbDT7mGpX3WtQ9A', q: "Who sings this song?", a: 'SZA',             choices: ['SZA', 'Doja Cat', 'Cardi B', 'Lizzo', 'Megan Thee Stallion', 'Ariana Grande', 'Beyoncé', 'Jhené Aiko'] },
      { trackId: '2wSTnntOPRi7aQneobFtU4', q: "Who sings this song?", a: 'SZA',             choices: ['SZA', 'Doja Cat', 'Cardi B', 'Lizzo', 'Megan Thee Stallion', 'Ariana Grande', 'Beyoncé', 'Jhené Aiko'] },
      { trackId: '6eT2V7nKXyMf47TwPbtgAD', q: "Who sings this song?", a: 'SZA',             choices: ['SZA', 'Doja Cat', 'Cardi B', 'Lizzo', 'Megan Thee Stallion', 'Ariana Grande', 'Beyoncé', 'Jhené Aiko'] },
      // Khalid
      { trackId: '5Z3GHaZ6ec9bsiI5BenrbY', q: "Who sings this song?", a: 'Khalid',          choices: ['Khalid', 'Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Charlie Puth', 'Niall Horan', 'Alex Warren'] },
      { trackId: '152lZdxL1OR0ZMW6KquMif', q: "Who sings this song?", a: 'Khalid',          choices: ['Khalid', 'Shawn Mendes', 'Justin Bieber', 'Ed Sheeran', 'Harry Styles', 'Charlie Puth', 'Niall Horan', 'Alex Warren'] },
      // Olivia Rodrigo (more)
      { trackId: '4ZtFanR9U6ndgddUvNcjcG', q: "Who sings this song?", a: 'Olivia Rodrigo',  choices: ['Olivia Rodrigo', 'Taylor Swift', 'Billie Eilish', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'Tate McRae', 'Ariana Grande'] },
      { trackId: '1kuGVB7EU95pJObxwvfwKS', q: "Who sings this song?", a: 'Olivia Rodrigo',  choices: ['Olivia Rodrigo', 'Taylor Swift', 'Billie Eilish', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'Tate McRae', 'Ariana Grande'] },
      // Sabrina Carpenter (more)
      { trackId: '2HRqTpkrJO5ggZyyK6NPWz', q: "Who sings this song?", a: 'Sabrina Carpenter', choices: ['Sabrina Carpenter', 'Chappell Roan', 'Olivia Rodrigo', 'Gracie Abrams', 'Reneé Rapp', 'Tate McRae', 'Billie Eilish', 'Taylor Swift'] },
      { trackId: '2Zo1PcszsT9WQ0ANntJbID', q: "Who sings this song?", a: 'Sabrina Carpenter', choices: ['Sabrina Carpenter', 'Chappell Roan', 'Olivia Rodrigo', 'Gracie Abrams', 'Reneé Rapp', 'Tate McRae', 'Billie Eilish', 'Taylor Swift'] },
      // Billie Eilish (more)
      { trackId: '2Fxmhks0bxGSBdJ92vM42m', q: "Who sings this song?", a: 'Billie Eilish',   choices: ['Billie Eilish', 'Olivia Rodrigo', 'Taylor Swift', 'Sabrina Carpenter', 'Gracie Abrams', 'Chappell Roan', 'Ariana Grande', 'Dua Lipa'] },
      { trackId: '4RVwu0g32PAqgUiJoXsdF8', q: "Who sings this song?", a: 'Billie Eilish',   choices: ['Billie Eilish', 'Olivia Rodrigo', 'Ariana Grande', 'Dua Lipa', 'Chappell Roan', 'SZA', 'Sabrina Carpenter', 'Taylor Swift'] },
      // Gracie Abrams
      { trackId: '51rfRCiUSvxXlCSCfIztBy', q: "Who sings this song?", a: 'Gracie Abrams',   choices: ['Gracie Abrams', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Tate McRae', 'Reneé Rapp', 'Maisie Peters'] },
      // Selena Gomez
      { trackId: '4l0Mvzj72xxOpRrp6h8nHi', q: "Who sings this song?", a: 'Selena Gomez',   choices: ['Selena Gomez', 'Dua Lipa', 'Ariana Grande', 'Taylor Swift', 'Miley Cyrus', 'Doja Cat', 'Billie Eilish', 'Beyoncé'] },
      // James Arthur
      { trackId: '5uCax9HTNlzGybIStD3vDh', q: "Who sings this song?", a: 'James Arthur',   choices: ['James Arthur', 'Lewis Capaldi', 'Sam Smith', 'Ed Sheeran', 'Shawn Mendes', 'Harry Styles', 'Niall Horan', 'Charlie Puth'] },
      // Reneé Rapp
      { trackId: '6skUuqrKMQIjjo75hWGAvQ', q: "Who sings this song?", a: 'Reneé Rapp',     choices: ['Reneé Rapp', 'Olivia Rodrigo', 'Billie Eilish', 'Sabrina Carpenter', 'Chappell Roan', 'Gracie Abrams', 'Tate McRae', 'Maisie Peters'] },
      // Post Malone (more)
      { trackId: '7dt6x5M1jzdTEt8oCbisTK', q: "Who sings this song?", a: 'Post Malone',     choices: ['Post Malone', 'The Weeknd', 'Drake', 'Bruno Mars', 'Justin Bieber', 'Charlie Puth', 'Khalid', 'Harry Styles'] },
      // Drake
      { trackId: '1zi7xx7UVEFkmKfv06H8x0', q: "Who sings this song?", a: 'Drake',           choices: ['Drake', 'The Weeknd', 'Post Malone', 'Justin Bieber', 'J. Cole', 'Khalid', 'Bruno Mars', 'Ed Sheeran'] },
      { trackId: '6nmz4imkDcmtwMjocAzFSx', q: "Who sings this song?", a: 'Drake',           choices: ['Drake', 'The Weeknd', 'Post Malone', 'Justin Bieber', 'J. Cole', 'Khalid', 'Bruno Mars', 'Ed Sheeran'] },
      // Justin Timberlake
      { trackId: '6JV2JOEocMgcZxYSZelKcc', q: "Who sings this song?", a: 'Justin Timberlake', choices: ['Justin Timberlake', 'Bruno Mars', 'The Weeknd', 'Drake', 'Justin Bieber', 'Ed Sheeran', 'Charlie Puth', 'Pharrell Williams'] },
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
  const shuffled = shuffle(currentTopic.questions);
  if (currentTopic.type === 'breed-guess' || currentTopic.type === 'music-guess') {
    const seen = new Set();
    questions = [];
    for (const q of shuffled) {
      const key = currentTopic.type === 'breed-guess' ? q.breed : q.a;
      if (!seen.has(key)) { seen.add(key); questions.push(q); }
      if (questions.length >= QUESTIONS_PER_GAME) break;
    }
  } else {
    questions = shuffled.slice(0, QUESTIONS_PER_GAME);
  }
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
  const questionText = q.q || '🐶 What breed is this dog?';
  container.innerHTML = `
    <h2 class="q-text" style="margin-bottom:14px;">${questionText}</h2>
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

const animes = [
    {
        name: 'The Boy And The Heron',
        genre: ['Adventure', 'Fantasy', 'Supernatural'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/bh7y3nz0oq?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/j63zZyB/the-boy-and-the-heron.webp',
        duration: '02:03:56',
        ratings: {
            yellow: '7.5',
            blue: '7.6'
        }
    },
    {
        name: 'Suzume No Tojimari',
        genre: ['Adventure', 'Fantasy', 'Supernatural'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/u9vakbgihd?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/6r3PV14/suzume.webp',
        duration: '02:01:28',
        ratings: {
            yellow: '7.6',
            blue: '8.3'
        }
    },
    {
        name: 'Your Name',
        genre: ['Romance', 'Drama', 'Time Travel', 'Supernatural', 'Emotional'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/2zh0m22eol?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/TbN07Ry/your-name.webp',
        duration: '01:46:35',
        ratings: {
            yellow: '8.4',
            blue: '8.8'
        }
    },
    {
        name: 'Weathering With You',
        genre: ['Romance', 'Fantasy', 'Nature'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/6by15a9nzw?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/Z8sqX5c/weathering-with-you.webp',
        duration: '01:54:00',
        ratings: {
            yellow: '7.5',
            blue: '8.3'
        }
    },
    {
        name: 'I Want To Eat Your Pancreas',
        genre: ['Romance', 'Drama', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/W5vmJWF/I-want-to-eat-your-pancreas.webp',
        duration: '01:48:00',
        ratings: {
            yellow: '8.0',
            blue: '8.5'
        }
    },
    {
        name: 'A Silent Voice',
        genre: ['Romance', 'Drama', 'School'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/XDXnRwR/a-silent-voice.webp',
        duration: '02:09:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Spirited Away',
        genre: ['Kids', 'Fantasy', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/3dQKzhZ/spirited-away.webp',
        duration: '02:05:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'A Whisker Away',
        genre: ['Fantasy', 'Romance', 'Magic'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/6vKt4bB/a-whisker-away.webp',
        duration: '01:44:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Josse: Tiger And Fish',
        genre: ['Romance', 'Drama', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/hghb4Jc/josse-tiger-and-fish.webp',
        duration: '01:38:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Whisper Of The Heart',
        genre: ['Romance', 'Drama', 'Slice Of Life', 'Fantasy'],
        type: 'Movie',
        video: '',
        img: 'Images/whisper of the heart.webp',
        duration: '01:55:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Cat Returns',
        genre: ['Fantasy', 'Adventure', 'Comedy', 'Family'],
        type: 'Movie',
        video: '',
        img: 'Images/the cat returns.webp',
        duration: '01:14:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Ponyo',
        genre: ['Kids', 'Fantasy', 'Adventure', 'Magic'],
        type: 'Movie',
        video: '',
        img: 'Images/ponyo.webp',
        duration: '01:55:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Grave Of The Fireflies',
        genre: ['Drama', 'War', 'Historical', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/grave.webp',
        duration: '01:29:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Forest Of The FireFly Light',
        genre: ['Romance', 'Fantasy', 'Supernatural', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/forest of the firefly light.jpeg',
        duration: '00:45:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Kiki\'s Delivery Service',
        genre: ['Fantasy', 'Slice Of Life', 'Magic',],
        type: 'Movie',
        video: '',
        img: 'Images/kikis delivery service.webp',
        duration: '01:42:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'My Neighbor Totoro',
        genre: ['Kids', 'Fantasy', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'Images/my neighbor totoro.webp',
        duration: '01:26:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Wind Rises',
        genre: ['Drama', 'Historical', 'Romance', 'War'],
        type: 'Movie',
        video: '',
        img: 'Images/the wind rises.webp',
        duration: '02:06:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Flavors Of Youth',
        genre: ['Slice Of Life', 'Drama', 'Romance', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/flavors of youth.webp',
        duration: '01:15:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Nausicaa Of The Valley Of The Wind',
        genre: ['Fantasy', 'Adventure', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'Images/nausicaa.webp',
        duration: '01:57:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Laputa: Castle In The Sky',
        genre: ['Fantasy', 'Adventure', 'Romance', 'action'],
        type: 'Movie',
        video: '',
        img: 'Images/laputa castle in the sky.webp',
        duration: '02:04:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'From Up On Poppy Hill',
        genre: ['Romance', 'Drama', 'School', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/from up on poppy hill.webp',
        duration: '01:31:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Garden Of Words',
        genre: ['Romance', 'Drama', 'Nature', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/the garden of words.webp',
        duration: '00:46:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Princess Mononoke',
        genre: ['Adventure', 'Fantasy', 'Supernatural','Nature'],
        type: 'Movie',
        video: '',
        img: 'Images/princess mononoke.webp',
        duration: '02:25:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Porco Rosso',
        genre: ['Action', 'Adventure', 'Fantasy', 'Comedy'],
        type: 'Movie',
        video: '',
        img: 'Images/porco rosso.webp',
        duration: '01:29:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Place Promised In Our Early Days',
        genre: ['Romance', 'Drama', 'Sci-fi', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/the place promised in our early days.webp',
        duration: '01:31:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: '5 Centimeters Per Second',
        genre: ['Romance', 'Slice Of Life', 'Drama', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/5 centimeters per second.webp',
        duration: '01:03:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Hello World',
        genre: ['Sci-fi', 'Romance', 'Time Travel'],
        type: 'Movie',
        video: '',
        img: 'Images/hello world.webp',
        duration: '01:38:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Wolf Children',
        genre: ['Fantasy', 'Drama', 'Slice Of Life', 'Family'],
        type: 'Movie',
        video: '',
        img: 'Images/wolf children.webp',
        duration: '01:57:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Heidi',
        genre: ['Kids', 'Nature', 'Rural'],
        type: 'Movie',
        video: '',
        img: 'Images/heidi.jpg',
        duration: '01:29:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Tamako Love Story',
        genre: ['Romance', 'Drama', 'School'],
        type: 'Movie',
        video: '',
        img: 'Images/tamako love story.webp',
        duration: '01:23:00',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Anthem Of The Heart',
        genre: ['School', 'Drama', 'Romance'],
        type: 'Movie',
        video: '',
        img: 'Images/the anthem of the heart.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Howl\'s Moving Castle',
        genre: ['Romance', 'Fantasy', 'Adventure', 'Magic'],
        type: 'Movie',
        video: '',
        img: 'Images/howls moving castle.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Children Who Chase Lost Voices',
        genre: ['Adventure', 'Fantasy', 'Mystery'],
        type: 'Movie',
        video: '',
        img: 'Images/the children who chase lost voices.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Summer Wars',
        genre: ['Sci-fi', 'Fantasy', 'Drama', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'Images/summer wars.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Tale Of Princess Kaguya',
        genre: ['Kids', 'Fantasy', 'Fairy Tale'],
        type: 'Movie',
        video: '',
        img: 'Images/the tale of princess kaguya.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Girl Who Leapt Through Time',
        genre: ['Time Travel', 'Sci-fi', 'Romance', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'Images/the girl who leapt through time.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Summer Ghost',
        genre: ['Supernatural', 'Drama', 'Romance', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/summer ghost.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Fireworks',
        genre: ['Romance', 'Drama', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/fireworks.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'I\'ve Always Liked You',
        genre: ['Romance', 'Drama', 'Slice Of Life', 'School'],
        type: 'Movie',
        video: '',
        img: 'Images/ive always liked you.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Her Blue Sky',
        genre: ['Romance', 'Drama', 'Slice Of Life', 'Nature'],
        type: 'Movie',
        video: '',
        img: 'Images/her blue sky.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Drifting Home',
        genre: ['Kids', 'Fantasy', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'Images/drifting home.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Voices Of A Distant Star',
        genre: ['Sci-fi', 'Drama', 'Romance', 'Space'],
        type: 'Movie',
        video: '',
        img: 'Images/voices of a distant star.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Cross Road',
        genre: ['School', 'Drama', 'Slice Of Life', 'Romance'],
        type: 'Movie',
        video: '',
        img: 'Images/cross road.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'When Marnie Was There',
        genre: ['Fantasy', 'Mystery', 'Emotional', 'Nature'],
        type: 'Movie',
        video: '',
        img: 'Images/when marnie was there.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Only Yesterday',
        genre: ['Rural', 'Drama', 'Slice Of Life','Nature'],
        type: 'Movie',
        video: '',
        img: 'Images/only yesterday.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Twilight',
        genre: ['Romance', 'School', 'Nature'],
        type: 'Movie',
        video: '',
        img: 'Images/twilight.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Penguin Highway',
        genre: ['Kids', 'Adventure', 'Fantasy'],
        type: 'Movie',
        video: '',
        img: 'Images/penguin highway.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Fortune Favors Lady Nikuko',
        genre: ['Slice Of Life', 'Family', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'Images/fortune favors lady nikuko.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Maquia: When The Promised Flower Blooms',
        genre: ['Drama', 'Fantasy', 'Supernatural', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/maquia.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Ride Your Wave',
        genre: ['Romance', 'Emotional', 'Drama', 'Fantasy'],
        type: 'Movie',
        video: '',
        img: 'Images/ride your wave.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Over The Sky',
        genre: ['Fantasy', 'Adventure', 'Drama', 'Romance'],
        type: 'Movie',
        video: '',
        img: 'Images/over the sky.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Mai Mai Miracle',
        genre: ['Kids', 'Rural', 'Slice Of Life', 'Fantasy'],
        type: 'Movie',
        video: '',
        img: 'Images/mai mai miracle.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Summer Days With Coo',
        genre: ['Fantasy', 'Family', 'Adventure', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/summer days with coo.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Sword Of The Stranger',
        genre: ['Action', 'Adventure', 'Historical', 'Samurai'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/MDGvBnc/sword-of-the-stranger.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Okko\'s Inn',
        genre: ['Fantasy', 'Drama', 'Supernatural'],
        type: 'Movie',
        video: '',
        img: 'Images/okkos inn.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'A Letter To Momo',
        genre: ['Fantasy', 'Drama', 'Family', 'Supernatural'],
        type: 'Movie',
        video: '',
        img: 'Images/a letter to momo.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Welcome To The Space Show',
        genre: ['Fantasy', 'Adventure', 'Space', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'Images/welcome to the space show.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Child Of Kaminari Month',
        genre: ['Fantasy', 'Adventure', 'Family', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'Images/child of kaminari month.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Grandfather\'s Lamp',
        genre: ['Drama', 'Historical', 'Rural', 'Family'],
        type: 'Movie',
        video: '',
        img: 'Images/grandfathers lamp.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'White Bird',
        genre: ['Fantasy', 'Adventure', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'Images/white bird.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Night Is Short, Walk On Girl',
        genre: ['Romance', 'Fantasy', 'Comedy', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/the night is short walk on girl.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Patema Inverted',
        genre: ['Sci-fi', 'Adventure', 'Romance'],
        type: 'Movie',
        video: '',
        img: 'Images/patema inverted.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Secret World Of Arrietty',
        genre: ['Fantasy', 'Adventure', 'Family', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/the secret world of arrietty.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Barefoot Gen',
        genre: ['Drama', 'Historical', 'War', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/barefoot gen.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Tales From Earthsea',
        genre: ['Fantasy', 'Adventure', 'Drama', 'Magic'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/ftNMJhD/tales-from-earthsea.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Paprika',
        genre: ['Sci-fi', 'Mystery', 'Psychological'],
        type: 'Movie',
        video: '',
        img: 'Images/paprika.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Typhoon Noruda',
        genre: ['Fantasy', 'Nature', 'Drama', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'Images/typhoon noruda.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Case Of Hana And Alice',
        genre: ['Mystery', 'Drama', 'Romance', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/the case of hana and alice.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Ocean Waves',
        genre: ['Drama', 'Romance', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/ocean waves.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Tunnel To Summer, The Exit Of Goodbye',
        genre: ['Romance', 'Time Travel', 'Drama', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'Images/the tunnel to summer the exit of goodbye.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Koi Sento',
        genre: ['Romance', 'Fantasy', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'Images/koi sento.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Rain In Sunshine',
        genre: ['Romance', 'Drama', 'Emotional', 'Kids'],
        type: 'Movie',
        video: '',
        img: 'Images/rain in sunshine.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'The Boy And The Beast',
        genre: ['Fantasy', 'Adventure', 'Drama', 'Action'],
        type: 'Movie',
        video: '',
        img: 'Images/the boy and the beast.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'A Wind Named Amnesia',
        genre: ['Sci-fi', 'Fantasy', 'Adventure', 'Rural'],
        type: 'Movie',
        video: '',
        img: 'Images/a wind named amnesia.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Words Bubble Up Like Soda Pop',
        genre: ['Romance', 'Slice Of Life', 'Drama', 'Music'],
        type: 'Movie',
        video: '',
        img: 'Images/words bubble up like soda pop.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Belle',
        genre: ['Fantasy', 'Music', 'Sci-fi', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'Images/belle.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Bubble',
        genre: ['Sci-fi', 'Romance', 'Fantasy', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'Images/bubble.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Miss Hokusai',
        genre: ['Historical', 'Drama', 'Slice Of Life', 'Rural'],
        type: 'Movie',
        video: '',
        img: 'Images/miss hokusai.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Space Brothers',
        genre: ['Sci-fi', 'Space', 'Drama', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/space brothers.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'In This Corner Of The World',
        genre: ['Historical', 'Drama', 'War', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/in this corner of the world.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Anohana: Movie',
        genre: ['Drama', 'Supernatural', 'Slice Of Life', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/anohana.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'GoodBye! Don Gleas',
        genre: ['Adventure', 'Drama', 'Slice Of Life', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/goodbye don gleas.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Colorful',
        genre: ['Drama', 'Supernatural', 'Psychological', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'Images/colorful.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: 'Hal',
        genre: ['Sci-fi', 'Romance', 'Drama', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'Images/hal.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    {
        name: '',
        genre: ['', '', '', ''],
        type: 'Movie',
        video: '',
        img: 'Images/.webp',
        duration: '0:0:0',
        ratings: {
            yellow: '0.0',
            blue: '0.0'
        }
    },
    
    
    
    
    // Add more anime objects here
];

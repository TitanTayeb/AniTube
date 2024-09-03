const animes = [
    {
        name: 'The Boy And The Heron',
        genre: ['Adventure', 'Fantasy', 'Supernatural'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/bh7y3nz0oq?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/j63zZyB/the-boy-and-the-heron.webp',
        duration: '02:03:56',
        download: "https://s3taku.com/download?id=MjI3MzI2&typesub=Gogoanime-SUB&title=Kimitachi+wa+Dou+Ikiru+ka+Episode+1"
    },
    {
        name: 'Suzume No Tojimari',
        genre: ['Adventure', 'Fantasy', 'Supernatural'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/u9vakbgihd?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/6r3PV14/suzume.webp',
        duration: '02:01:28',
        download: 'https://s3taku.com/download?id=MjAzMTM0&typesub=Gogoanime-SUB&title=Suzume+no+Tojimari+Episode+1',
    },
    {
        name: 'Your Name',
        genre: ['Romance', 'Drama', 'Time Travel', 'Supernatural', 'Emotional'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/2zh0m22eol?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/TbN07Ry/your-name.webp',
        duration: '01:46:35',
        download: 'https://s3taku.com/download?id=NzU4ODg=&typesub=Gogoanime-SUB&title=Kimi+no+Na+wa.+Episode+1',
    },
    {
        name: 'Weathering With You',
        genre: ['Romance', 'Fantasy', 'Nature'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/6by15a9nzw?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/Z8sqX5c/weathering-with-you.webp',
        duration: '01:54:00',
        download: 'https://s3taku.com/download?id=MTM5MDA3&typesub=Gogoanime-SUB&title=Tenki+no+Ko+Episode+1',
    },
    {
        name: 'I Want To Eat Your Pancreas',
        genre: ['Romance', 'Drama', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/W5vmJWF/I-want-to-eat-your-pancreas.webp',
        duration: '01:48:00',
        download: 'https://s3taku.com/download?id=MTExNzIz&typesub=Gogoanime-SUB&title=Kimi+no+Suizou+wo+Tabetai+Episode+1',
    },
    {
        name: 'A Silent Voice',
        genre: ['Romance', 'Drama', 'School'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/2gwwc5mydi?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/XDXnRwR/a-silent-voice.webp',
        duration: '02:09:00',
        download: 'https://s3taku.com/download?id=OTgyMzM=&typesub=Gogoanime-SUB&title=Koe+no+Katachi+-+MOVIE+Episode+1',
    },
    {
        name: 'Spirited Away',
        genre: ['Kids', 'Fantasy', 'Adventure'],
        type: 'Movie',
        video: 'https://fast.wistia.net/embed/iframe/wj4kn3fv53?seo=true&videoFoam=false',
        img: 'https://i.ibb.co/3dQKzhZ/spirited-away.webp',
        duration: '02:05:00',
        download: 'https://s3taku.com/download?id=MjIxNDM5&typesub=Gogoanime-SUB&title=Sen+to+Chihiro+no+Kamikakushi+Episode+1',
    },
    {
        name: 'A Whisker Away',
        genre: ['Fantasy', 'Romance', 'Magic'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/6vKt4bB/a-whisker-away.webp',
        duration: '01:44:00',
        download: 'https://s3taku.com/download?id=MTQxNDAz&typesub=Gogoanime-SUB&title=Nakitai+Watashi+wa+Neko+wo+Kaburu+Episode+1',
    },
    {
        name: 'To Me, The One Who Loved You',
        genre: ['Sci-fi', 'Romance', 'Drama', 'Supernatural'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/mcYP0m4/to-me-the-one-who-loved-you.webp',
        duration: '0:0:0',
        download: 'https://s3taku.com/download?id=MjAyMDQ1&typesub=Gogoanime-SUB&title=Kimi+wo+Aishita+Hitori+no+Boku+e+Episode+1',
    },
    {
        name: 'To Every You Ive Loved Before',
        genre: ['Sci-fi', 'Romance', 'Drama', 'Supernatural'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/C0csk5D/to-every-you-I-ve-loved-before.webp',
        duration: '0:0:0',
        download: 'https://s3taku.com/download?id=MjAyMTUw&typesub=Gogoanime-SUB&title=Boku+ga+Aishita+Subete+no+Kimi+e+Episode+1',
    },
    {
        name: 'Josse: Tiger And Fish',
        genre: ['Romance', 'Drama', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/hghb4Jc/josse-tiger-and-fish.webp',
        duration: '01:38:00',
        download: '',
    },
    {
        name: 'Whisper Of The Heart',
        genre: ['Romance', 'Drama', 'Slice Of Life', 'Fantasy'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/rpYGKt6/whisper-of-the-heart.webp',
        duration: '01:55:00',
        download: '',
    },
    {
        name: 'The Cat Returns',
        genre: ['Fantasy', 'Adventure', 'Comedy', 'Family'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/3SGm1wg/the-cat-returns.webp',
        duration: '01:14:00',
        download: '',
    },
    {
        name: 'Ponyo',
        genre: ['Kids', 'Fantasy', 'Adventure', 'Magic'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/ZH5vrwq/ponyo.webp',
        duration: '01:55:00',
        download: '',
    },
    {
        name: 'Grave Of The Fireflies',
        genre: ['Drama', 'War', 'Historical', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/0CDSw7P/grave.webp',
        duration: '01:29:00',
        download: '',
    },
    {
        name: 'Forest Of The FireFly Light',
        genre: ['Romance', 'Fantasy', 'Supernatural', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/jD8pL9Q/forest-of-the-firefly-light.jpg',
        duration: '00:45:00',
        download: '',
    },
    {
        name: 'Kiki\'s Delivery Service',
        genre: ['Fantasy', 'Slice Of Life', 'Magic',],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/r3XxPgG/kikis-delivery-service.webp',
        duration: '01:42:00',
        download: '',
    },
    {
        name: 'My Neighbor Totoro',
        genre: ['Kids', 'Fantasy', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/7NjCm1s/my-neighbor-totoro.webp',
        duration: '01:26:00',
        download: '',
    },
    {
        name: 'The Wind Rises',
        genre: ['Drama', 'Historical', 'Romance', 'War'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/tBZ4h7w/the-wind-rises.webp',
        duration: '02:06:00',
        download: '',
    },
    {
        name: 'Flavors Of Youth',
        genre: ['Slice Of Life', 'Drama', 'Romance', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/xFSXBY3/flavors-of-youth.webp',
        duration: '01:15:00',
        download: '',
    },
    {
        name: 'Nausicaa Of The Valley Of The Wind',
        genre: ['Fantasy', 'Adventure', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/PTGt9Rg/nausicaa.webp',
        duration: '01:57:00',
        download: '',
    },
    {
        name: 'Laputa: Castle In The Sky',
        genre: ['Fantasy', 'Adventure', 'Romance', 'action'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/pzT0Yfd/laputa-castle-in-the-sky.webp',
        duration: '02:04:00',
        download: '',
    },
    {
        name: 'From Up On Poppy Hill',
        genre: ['Romance', 'Drama', 'School', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/N2JK37J/from-up-on-poppy-hill.webp',
        duration: '01:31:00',
        download: '',
    },
    {
        name: 'The Garden Of Words',
        genre: ['Romance', 'Drama', 'Nature', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/TwXqZGz/the-garden-of-words.webp',
        duration: '00:46:00',
        download: '',
    },
    {
        name: 'Princess Mononoke',
        genre: ['Adventure', 'Fantasy', 'Supernatural','Nature'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/vJNJkvM/princess-mononoke.webp',
        duration: '02:25:00',
        download: '',
    },
    {
        name: 'Porco Rosso',
        genre: ['Action', 'Adventure', 'Fantasy', 'Comedy'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/0yxMGPc/porco-rosso.webp',
        duration: '01:29:00',
        download: '',
    },
    {
        name: 'The Place Promised In Our Early Days',
        genre: ['Romance', 'Drama', 'Sci-fi', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/zhfcQQz/the-place-promised-in-our-early-days.webp',
        duration: '01:31:00',
        download: '',
    },
    {
        name: '5 Centimeters Per Second',
        genre: ['Romance', 'Slice Of Life', 'Drama', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/VBLdBFf/5-centimeters-per-second.webp',
        duration: '01:03:00',
        download: '',
    },
    {
        name: 'Hello World',
        genre: ['Sci-fi', 'Romance', 'Time Travel'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/p4Tjw7B/hello-world.webp',
        duration: '01:38:00',
        download: '',
    },
    {
        name: 'Wolf Children',
        genre: ['Fantasy', 'Drama', 'Slice Of Life', 'Family'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/Wp9g8M4/wolf-children.webp',
        duration: '01:57:00',
        download: '',
    },
    {
        name: 'Heidi',
        genre: ['Kids', 'Nature', 'Rural'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/zNdHZ01/heidi.jpg',
        duration: '01:29:00',
        download: '',
    },
    {
        name: 'Tamako Love Story',
        genre: ['Romance', 'Drama', 'School'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/2PprGch/tamako-love-story.webp',
        duration: '01:23:00',
        download: '',
    },
    {
        name: 'The Anthem Of The Heart',
        genre: ['School', 'Drama', 'Romance'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/mvfMHct/the-anthem-of-the-heart.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Howl\'s Moving Castle',
        genre: ['Romance', 'Fantasy', 'Adventure', 'Magic'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/jysgvw1/howls-moving-castle.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'The Children Who Chase Lost Voices',
        genre: ['Adventure', 'Fantasy', 'Mystery'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/KcPtNzM/the-children-who-chase-lost-voices.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Summer Wars',
        genre: ['Sci-fi', 'Fantasy', 'Drama', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/t3J7sqB/summer-wars.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'The Tale Of Princess Kaguya',
        genre: ['Kids', 'Fantasy', 'Fairy Tale'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/tzfB3Dp/the-tale-of-princess-kaguya.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'The Girl Who Leapt Through Time',
        genre: ['Time Travel', 'Sci-fi', 'Romance', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/qYh2r44/the-girl-who-leapt-through-time.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Summer Ghost',
        genre: ['Supernatural', 'Drama', 'Romance', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/SVq56DM/summer-ghost.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Fireworks',
        genre: ['Romance', 'Drama', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/yVCW7fC/fireworks.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'I\'ve Always Liked You',
        genre: ['Romance', 'Drama', 'Slice Of Life', 'School'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/MnKPVYN/ive-always-liked-you.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Her Blue Sky',
        genre: ['Romance', 'Drama', 'Slice Of Life', 'Nature'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/CsVkpTY/her-blue-sky.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Drifting Home',
        genre: ['Kids', 'Fantasy', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/ckhGsXJ/drifting-home.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Voices Of A Distant Star',
        genre: ['Sci-fi', 'Drama', 'Romance', 'Space'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/WDpLfXd/voices-of-a-distant-star.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Cross Road',
        genre: ['School', 'Drama', 'Slice Of Life', 'Romance'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/DbHHry7/cross-road.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'When Marnie Was There',
        genre: ['Fantasy', 'Mystery', 'Emotional', 'Nature'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/Y8Rdg3L/when-marnie-was-there.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Only Yesterday',
        genre: ['Rural', 'Drama', 'Slice Of Life','Nature'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/gTZpLRd/only-yesterday.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Twilight',
        genre: ['Romance', 'School', 'Nature'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/rxfg9mt/twilight.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Penguin Highway',
        genre: ['Kids', 'Adventure', 'Fantasy'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/VH2VwVw/penguin-highway.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Fortune Favors Lady Nikuko',
        genre: ['Slice Of Life', 'Family', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/QNQwk0w/fortune-favors-lady-nikuko.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Maquia: When The Promised Flower Blooms',
        genre: ['Drama', 'Fantasy', 'Supernatural', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/801853G/maquia.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Ride Your Wave',
        genre: ['Romance', 'Emotional', 'Drama', 'Fantasy'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/KxyxCYQ/ride-your-wave.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Over The Sky',
        genre: ['Fantasy', 'Adventure', 'Drama', 'Romance'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/cYwPgNS/over-the-sky.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Mai Mai Miracle',
        genre: ['Kids', 'Rural', 'Slice Of Life', 'Fantasy'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/m5p0PK5/mai-mai-miracle.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Summer Days With Coo',
        genre: ['Fantasy', 'Family', 'Adventure', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/vxy3fXv/summer-days-with-coo.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Sword Of The Stranger',
        genre: ['Action', 'Adventure', 'Historical', 'Samurai'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/MDGvBnc/sword-of-the-stranger.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Okko\'s Inn',
        genre: ['Fantasy', 'Drama', 'Supernatural'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/hCqpGQK/okkos-inn.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'A Letter To Momo',
        genre: ['Fantasy', 'Drama', 'Family', 'Supernatural'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/L8Hdt5T/a-letter-to-momo.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Welcome To The Space Show',
        genre: ['Fantasy', 'Adventure', 'Space', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/1sVZgbK/welcome-to-the-space-show.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Child Of Kaminari Month',
        genre: ['Fantasy', 'Adventure', 'Family', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/G9sDGFj/child-of-kaminari-month.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Grandfather\'s Lamp',
        genre: ['Drama', 'Historical', 'Rural', 'Family'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/Vq87VwK/grandfathers-lamp.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'White Bird',
        genre: ['Fantasy', 'Adventure', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/qy4X3PZ/white-bird.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'The Night Is Short, Walk On Girl',
        genre: ['Romance', 'Fantasy', 'Comedy', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/cyLSNhM/the-night-is-short-walk-on-girl.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Patema Inverted',
        genre: ['Sci-fi', 'Adventure', 'Romance'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/X8h4XTL/patema-inverted.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'The Secret World Of Arrietty',
        genre: ['Fantasy', 'Adventure', 'Family', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/ChTcmrJ/the-secret-world-of-arrietty.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Barefoot Gen',
        genre: ['Drama', 'Historical', 'War', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/nkZm3sY/barefoot-gen.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Tales From Earthsea',
        genre: ['Fantasy', 'Adventure', 'Drama', 'Magic'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/ftNMJhD/tales-from-earthsea.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Paprika',
        genre: ['Sci-fi', 'Mystery', 'Psychological'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/jkFYCVv/paprika.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Typhoon Noruda',
        genre: ['Fantasy', 'Nature', 'Drama', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/Bc7Yd4F/typhoon-noruda.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'The Case Of Hana And Alice',
        genre: ['Mystery', 'Drama', 'Romance', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/Ws38sF9/the-case-of-hana-and-alice.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Ocean Waves',
        genre: ['Drama', 'Romance', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/2jQ183d/ocean-waves.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'The Tunnel To Summer, The Exit Of Goodbye',
        genre: ['Romance', 'Time Travel', 'Drama', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/C8JMDvC/the-tunnel-to-summer-the-exit-of-goodbye.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Koi Sento',
        genre: ['Romance', 'Fantasy', 'Sci-fi'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/7X9Jd1Y/koi-sento.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Rain In Sunshine',
        genre: ['Romance', 'Drama', 'Emotional', 'Kids'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/CtTknRc/rain-in-sunshine.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'The Boy And The Beast',
        genre: ['Fantasy', 'Adventure', 'Drama', 'Action'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/ZSf9CxM/the-boy-and-the-beast.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'A Wind Named Amnesia',
        genre: ['Sci-fi', 'Fantasy', 'Adventure', 'Rural'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/XbvpqX4/a-wind-named-amnesia.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Words Bubble Up Like Soda Pop',
        genre: ['Romance', 'Slice Of Life', 'Drama', 'Music'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/Z6tDZsX/words-bubble-up-like-soda-pop.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Belle',
        genre: ['Fantasy', 'Music', 'Sci-fi', 'Drama'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/1M9r8v4/belle.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Bubble',
        genre: ['Sci-fi', 'Romance', 'Fantasy', 'Adventure'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/0ys4jbR/bubble.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Miss Hokusai',
        genre: ['Historical', 'Drama', 'Slice Of Life', 'Rural'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/hMYxRMz/miss-hokusai.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Space Brothers',
        genre: ['Sci-fi', 'Space', 'Drama', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/TrGwq65/space-brothers.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'In This Corner Of The World',
        genre: ['Historical', 'Drama', 'War', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/2q6VK2v/in-this-corner-of-the-world.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Anohana: Movie',
        genre: ['Drama', 'Supernatural', 'Slice Of Life', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/58hmsqn/anohana.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'GoodBye! Don Gleas',
        genre: ['Adventure', 'Drama', 'Slice Of Life', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/0F464Nh/goodbye-don-gleas.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Colorful',
        genre: ['Drama', 'Supernatural', 'Psychological', 'Slice Of Life'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/F3XJNNh/colorful.webp',
        duration: '0:0:0',
        download: '',
    },
    {
        name: 'Hal',
        genre: ['Sci-fi', 'Romance', 'Drama', 'Emotional'],
        type: 'Movie',
        video: '',
        img: 'https://i.ibb.co/F3LSCxG/hal.webp',
        duration: '0:0:0',
        download: '',
    },
   /* {
        name: '',
        genre: ['', '', '', ''],
        type: 'Movie',
        video: '',
        img: 'Images/.webp',
        duration: '0:0:0',
        download: '',
    }, */
    
    
    
    
    // Add more anime objects here
];

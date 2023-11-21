import { Post } from './post/post.interface';
import { Item } from './nested-menu/nested-menu.interface';
import { Club } from './nested-menu/nested-menu.interface';
import { PeriodicElement } from './table/table.interface';

export const POSTS: Post[] = [
    // {
    //     id: 1,
    //     title: 'Erling Haaland',
    //     content: `Bernardo Silva was once again City’s man for the big occasion across the 2022/23 campaign.
    //     MEN'S TEAM
    //     Understated excellence: Nathan Aké 2022/23 Season Review
    //     Throughout his previous six years at the Etihad Stadium, the versatile Portuguese playmaker had amassed
    //     11 major honours and delivered key goals and assists in Manchester derbies, Premier League showdowns and
    //     seismic Champions League clashes.`,
    //     subTitle: 'Nominate',
    //     image: 'https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/30/3815791-77567748-2560-1440.jpg'
    // },
    // {
    //     id: 2,
    //     title: 'Bernardo Silva',
    //     content: `Bernardo Silva was once again City’s man for the big occasion across the 2022/23 campaign.
    //     MEN'S TEAM
    //     Understated excellence: Nathan Aké 2022/23 Season Review
    //     Throughout his previous six years at the Etihad Stadium, the versatile Portuguese playmaker had amassed
    //     11 major honours and delivered key goals and assists in Manchester derbies, Premier League showdowns and
    //     seismic Champions League clashes.`,
    //     subTitle: 'Nominate',
    //     image: 'https://i2-prod.manchestereveningnews.co.uk/incoming/article27094541.ece/ALTERNATES/s615/0_GettyImages-1491062990.jpg'
    // },
    // {
    //     id: 3,
    //     title: 'Lionel Messi',
    //     content: `Bernardo Silva was once again City’s man for the big occasion across the 2022/23 campaign.
    //     MEN'S TEAM
    //     Understated excellence: Nathan Aké 2022/23 Season Review
    //     Throughout his previous six years at the Etihad Stadium, the versatile Portuguese playmaker had amassed
    //     11 major honours and delivered key goals and assists in Manchester derbies, Premier League showdowns and
    //     seismic Champions League clashes.`,
    //     subTitle: 'Nominate',
    //     image: 'https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/16/3804579-77381508-2560-1440.jpg'
    // },
    // {
    //     id: 4,
    //     title: 'Kevin de Bruyne',
    //     content: `Bernardo Silva was once again City’s man for the big occasion across the 2022/23 campaign.
    //     MEN'S TEAM
    //     Understated excellence: Nathan Aké 2022/23 Season Review
    //     Throughout his previous six years at the Etihad Stadium, the versatile Portuguese playmaker had amassed
    //     11 major honours and delivered key goals and assists in Manchester derbies, Premier League showdowns and
    //     seismic Champions League clashes.`,
    //     subTitle: 'Nominate',
    //     image: 'https://vcdn-thethao.vnecdn.net/2023/08/15/4857-jpeg-5127-1692115552.jpg'
    // },
    {
        id: 1,
        title: 'Light and Dark modes',
        content: `Brighten up your day with light mode, now available in the Opera GX mobile and desktop browsers. Browse the light or dark side and switch between them as needed.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-light-mode.ae3068ee8c01.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--light-mode.01aad9997fb5.png'
    },
    {
        id: 2,
        title: 'GX Corner',
        content: `Get free games, the best deals, plus a game-release calendar and gaming news all in one place. GX Corner in the mobile browser also delivers free mobile games and the best game suggestions.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-corner.be1333483846.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--gx-corner.b44c9289e362.png'
    },
    {
        id: 3,
        title: 'Twitch',
        content: `Never miss a live stream. With Twitch right in your sidebar, you can easily see the channels you follow, who's online, and choose to receive notifications whenever someone you follow goes live.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-twitch.8902d1ec9cef.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--twitch.5f4495877f47.png'
    },
    {
        id: 4,
        title: 'Discord',
        content: `Talk with your teams, friends and communities with Discord in your sidebar. Join us on Discord to talk about gaming, give feedback on GX, and have fun with the Opera GX community.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-discord.513c7c78f5c8.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--twitch.5f4495877f47.png'
    },
    {
        id: 5,
        title: 'Player',
        content: `A world of music and podcasts at your fingertips. Connect to all your music services in one place, and switch between them easily.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-player.416a8e402db6.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--player.694659842717.png'
    },
    {
        id: 6,
        title: 'Messenger',
        content: `Chat and browse at the same time with Facebook Messenger, Telegram, Vkontakte, TikTok and WhatsApp integrated right into the sidebar.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-messengers.9bd35388afd6.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--messengers.e491d059f927.png'
    },
    {
        id: 7,
        title: 'Pinboards',
        content: `Save and collect web content easily, share it visually. Collect pictures, links, music, files and notes to create builds, compare hardware deals, or plan the ultimate gaming den - in easily shareable, eye-pleasing boards.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-pinboards.7e83626e788a.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--pinboards.aaecb2a9fc24.png'
    },
    {
        id: 8,
        title: 'Flow',
        content: `Just scan a QR code to connect your computer and mobile browsers with Flow. Send links, videos, files and notes to yourself in a single click, and access them instantly on all your devices.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-flow.736ea0e793e4.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--flow.3dafb84d8d14.png'
    },
    {
        id: 9,
        title: 'Fast Navigation',
        content: `Choose between the Fast Action Button (FAB) and standard navigation in your Opera GX mobile browser. The FAB is always in thumb’s reach and provides haptic feedback - perfect when you’re on the move.`,
        subTitle: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx-fast-navigation.53111f7a4633.svg',
        image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/gx-features-slider/gx__feature--fast-navigation.cd994c62ac97.png'
    }
];

export const ITEMS: Item[] = [
    {
        href: 'squad',
        title: 'Đội hình'
    },
    {
        href: 'team-news',
        title: 'Danh sách đăng kí thi đấu'
    },
    {
        href: 'gallery',
        title: 'Ảnh đội'
    },
];

export const CLUBS: Club[] = [
    {
        name: 'Manchester City',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/1/1d/Manchester_City_FC_logo.svg',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'
    },
    {
        name: 'Manchester United',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/article20692593.ece/ALTERNATES/s615b/0_UNITED-LINE-UP.png'

    },
    {
        name: 'Newcastle United',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png',
        img: 'https://cdn.theathletic.com/app/uploads/2022/06/01083222/newcastle_united_squad_depth_square.png'
    },
    {
        name: 'Westham United',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png',
        img: 'https://i2-prod.football.london/incoming/article12521065.ece/ALTERNATES/s615b/West-Ham-4231.jpg'

    },
    {
        name: 'Sheffield United',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Sheffield_United_FC_logo.svg/1200px-Sheffield_United_FC_logo.svg.png',
        img: 'https://pbs.twimg.com/media/EzwYKS2X0AUAjo4?format=jpg&name=4096x4096'

    },
    {
        name: 'Luton Town',
        logo: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Luton_Town_logo.svg',
        img: 'https://static.wixstatic.com/media/afaee2_27e4e1bba87548fd9a1ed1f97305c490~mv2.jpg/v1/fill/w_640,h_936,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/afaee2_27e4e1bba87548fd9a1ed1f97305c490~mv2.jpg'

    },
    {
        name: 'Burnley',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Burnley_FC_Logo.svg/1200px-Burnley_FC_Logo.svg.png',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROcm4G6odMiQo_CvhZw7IBVmtbet_ne3d9rhT3OjwhdD3ACF_T4DP5qqgfhGyFe01ZRA&usqp=CAU'

    },
    {
        name: 'Tottenham Hotspurs',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png',
        img: 'https://themastermindsite.files.wordpress.com/2020/10/4-3-3-tottenham-hotspur.png'

    },
    {
        name: 'Everton',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Chelsea',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Arsenal',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Liverpool',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Crystal Palace',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/640px-Crystal_Palace_FC_logo_%282022%29.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Aston villa',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/a/a8/Aston_Villa_FC_logo.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Nottingham Forest',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/1200px-Nottingham_Forest_F.C._logo.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Wolves',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/1200px-Wolverhampton_Wanderers.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Fulham',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/8/8d/Fulham_FC.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Bounermouth',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/1200px-AFC_Bournemouth_%282013%29.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Brentford',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/640px-Brentford_FC_crest.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'

    },
    {
        name: 'Brighton Albion',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png',
        img: 'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article19351242.ece/ALTERNATES/s615/0_share_babe2bff9f43f58be359d03c305943ca.png'
    }
];

export const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Manchester City', point: 27, lastForm: 'WWWLL' },
    { position: 2, name: 'Tottenham', point: 26, lastForm: 'LWWWW' },
    { position: 3, name: 'Liverpool', point: 24, lastForm: 'DWWDL' },
    { position: 4, name: 'Arsenal', point: 24, lastForm: 'LWDLL' },
    { position: 5, name: 'Aston Villa', point: 22, lastForm: 'LWWDL' },
    { position: 6, name: 'Newcastle', point: 20, lastForm: 'WDWDW' },
    { position: 7, name: 'Brighton', point: 18, lastForm: 'DDLDL' },
    { position: 8, name: 'Manchester United', point: 18, lastForm: 'WLWWL' },
    { position: 9, name: 'Brentford', point: 16, lastForm: 'WWWDL' },
    { position: 10, name: 'Chelsea', point: 15, lastForm: 'WLDWW' },
    { position: 11, name: 'Crystal Palace', point: 15, lastForm: 'WLLDW' },
    { position: 12, name: 'Westham', point: 14, lastForm: 'LLLDW' },
    { position: 13, name: 'Nottingham', point: 13, lastForm: 'WLDDD' },
    { position: 14, name: 'Wolves', point: 12, lastForm: 'LDWDW' },
    { position: 15, name: 'Fulham', point: 12, lastForm: 'LDWDL' },
    { position: 16, name: 'Everton', point: 11, lastForm: 'WDWDW' },
    { position: 17, name: 'Luton', point: 6, lastForm: 'DDLDL' },
    { position: 18, name: 'Bournermouth', point: 6, lastForm: 'WLWWL' },
    { position: 19, name: 'Burnley', point: 4, lastForm: 'WWWDL' },
    { position: 20, name: 'Sheffields', point: 4, lastForm: 'WLDWW' },
];
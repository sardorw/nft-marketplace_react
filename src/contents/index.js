import {
  BasketballIcon,
  CameraIcon,
  MagicWandIcon,
  MusicNotesIcon,
  PaintBrushIcon,
  PlanetIcon,
  SwatchesIcon,
  VideoCameraIcon,
} from '../assets/icons'

export const collectionData = [
  {
    id: 1,
    imgs: [
      '/images/nfts/psycho-dog.png',
      '/images/nfts/cat-from-future.png',
      '/images/nfts/designer-bear.png',
    ],
    title: 'DSGN Animals',
    creator: {
      name: 'MrFox',
      avatar: '/images/creators/mr-fox.png',
    },
  },
  {
    id: 2,
    imgs: [
      '/images/nfts/magic-mushroom-0324.png',
      '/images/nfts/magic-mushroom-0325.png',
      '/images/nfts/magic-mushroom-0326.png',
    ],
    title: 'Magic Mushrooms',
    creator: {
      name: 'Shroomie',
      avatar: '/images/creators/shroomie.png',
    },
  },
  {
    id: 3,
    imgs: [
      '/images/nfts/dancing-robot-0512.png',
      '/images/nfts/dancing-robot-0321.png',
      '/images/nfts/dancing-robot-0356.png',
    ],
    title: 'Disco Machines',
    creator: {
      name: 'BeKind2Robots',
      avatar: '/images/creators/bekind2robots.png',
    },
  },
]

export const creatorsData = [
  {
    id: 1,
    img: '/images/creators/keepitreal.png',
    name: 'Keepitreal',
    totalSales: '34.53 ETH',
  },
  {
    id: 2,
    img: '/images/creators/digilab.png',
    name: 'DigiLab',
    totalSales: '34.53 ETH',
  },
  {
    id: 3,
    img: '/images/creators/gravityone.png',
    name: 'GravityOne',
    totalSales: '34.53 ETH',
  },
  {
    id: 4,
    img: '/images/creators/juanie.png',
    name: 'Juanie',
    totalSales: '34.53 ETH',
  },
  {
    id: 5,
    img: '/images/creators/bluewhale.png',
    name: 'BlueWhale',
    totalSales: '34.53 ETH',
  },
  {
    id: 6,
    img: '/images/creators/mr-fox.png',
    name: 'Mr Fox',
    totalSales: '34.53 ETH',
  },
  {
    id: 7,
    img: '/images/creators/shroomie.png',
    name: 'Shroomie',
    totalSales: '34.53 ETH',
  },
  {
    id: 8,
    img: '/images/creators/robotica.png',
    name: 'Robotica',
    totalSales: '34.53 ETH',
  },
  {
    id: 9,
    img: '/images/creators/rustyrobot.png',
    name: 'RustyRobot',
    totalSales: '34.53 ETH',
  },
  {
    id: 10,
    img: '/images/creators/animakid.png',
    name: 'Animakid',
    totalSales: '34.53 ETH',
  },
  {
    id: 11,
    img: '/images/creators/dotgu.png',
    name: 'Dotgu',
    totalSales: '34.53 ETH',
  },
  {
    id: 12,
    img: '/images/creators/ghiblier.png',
    name: 'Ghiblier',
    totalSales: '34.53 ETH',
  },
]

export const categoriesData = [
  {
    id: 1,
    img: '/images/categories/art.png',
    icon: PaintBrushIcon,
    title: 'Art',
  },
  {
    id: 2,
    img: '/images/categories/collectibles.png',
    icon: SwatchesIcon,
    title: 'Collectibles',
  },
  {
    id: 3,
    img: '/images/categories/music.png',
    icon: MusicNotesIcon,
    title: 'Music',
  },
  {
    id: 4,
    img: '/images/categories/photography.png',
    icon: CameraIcon,
    title: 'Photography',
  },
  {
    id: 5,
    img: '/images/categories/video.png',
    icon: VideoCameraIcon,
    title: 'Video',
  },
  {
    id: 6,
    img: '/images/categories/utility.png',
    icon: MagicWandIcon,
    title: 'Utility',
  },
  {
    id: 7,
    img: '/images/categories/sport.png',
    icon: BasketballIcon,
    title: 'Sport',
  },
  {
    id: 8,
    img: '/images/categories/virtual-worlds.png',
    icon: PlanetIcon,
    title: 'Virtual Worlds',
  },
]

export const moreNFTsData = [
  {
    id: 1,
    img: '/images/nfts/distant-galaxy.png',
    name: 'Distant Galaxy',
    creator: {
      name: 'MoonDancer',
      avatar: '/images/creators/moondancer.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 2,
    img: '/images/nfts/life-on-edena.png',
    name: 'Life On Edena',
    creator: {
      name: 'NebulaKid',
      avatar: '/images/creators/nebulakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 3,
    img: '/images/nfts/astrofiction.png',
    name: 'AstroFiction',
    creator: {
      name: 'Spaceone',
      avatar: '/images/creators/spaceone.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
]

export const howItWorksData = [
  {
    id: 1,
    img: '/images/how-it-works/setup-your-wallet.png',
    title: 'Setup Your wallet',
    description:
      'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
  },
  {
    id: 2,
    img: '/images/how-it-works/create-collection.png',
    title: 'Create Collection',
    description:
      'Upload your work and setup your collection. Add a description, social links and floor price.',
  },
  {
    id: 3,
    img: '/images/how-it-works/start-earning.png',
    title: 'Start Earning',
    description:
      'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
  },
]

export const walletsData = [
  {
    id: 1,
    img: '/images/wallets/metamask.png',
    name: 'Metamask',
  },
  {
    id: 2,
    img: '/images/wallets/wallet-connect.png',
    name: 'Wallet Connect',
  },
  {
    id: 3,
    img: '/images/wallets/coinbase.png',
    name: 'Coinbase',
  },
]

export const artistCardsData = [
  {
    id: 1,
    img: '/images/nfts/distant-galaxy.png',
    name: 'Distant Galaxy',
    creator: {
      name: 'MoonDancer',
      avatar: '/images/creators/moondancer.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 2,
    img: '/images/nfts/life-on-edena.png',
    name: 'Life On Edena',
    creator: {
      name: 'NebulaKid',
      avatar: '/images/creators/nebulakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 3,
    img: '/images/nfts/astrofiction.png',
    name: 'AstroFiction',
    creator: {
      name: 'Spaceone',
      avatar: '/images/creators/spaceone.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 4,
    img: '/images/nfts/distant-galaxy.png',
    name: 'Distant Galaxy',
    creator: {
      name: 'MoonDancer',
      avatar: '/images/creators/moondancer.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 5,
    img: '/images/nfts/life-on-edena.png',
    name: 'Life On Edena',
    creator: {
      name: 'NebulaKid',
      avatar: '/images/creators/nebulakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 6,
    img: '/images/nfts/astrofiction.png',
    name: 'AstroFiction',
    creator: {
      name: 'Spaceone',
      avatar: '/images/creators/spaceone.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 7,
    img: '/images/nfts/distant-galaxy.png',
    name: 'Distant Galaxy',
    creator: {
      name: 'MoonDancer',
      avatar: '/images/creators/moondancer.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 8,
    img: '/images/nfts/life-on-edena.png',
    name: 'Life On Edena',
    creator: {
      name: 'NebulaKid',
      avatar: '/images/creators/nebulakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 9,
    img: '/images/nfts/astrofiction.png',
    name: 'AstroFiction',
    creator: {
      name: 'Spaceone',
      avatar: '/images/creators/spaceone.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
]

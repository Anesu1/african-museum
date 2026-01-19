'use client';

import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import FounderCard from './FounderCard';
import BattleCard from './BattleCard';
import FilterBar from './FilterBar';
import DetailModal from './DetailModal';
import Icon from '@/components/ui/AppIcon';
import TimelineEvent from './TimelineEvent';

interface Country {
  id: string;
  name: string;
  flag: string;
  flagAlt: string;
  liberationYear: number;
  foundingFather: string;
  founderImage: string;
  founderImageAlt: string;
  founderTitle: string;
  keyBattle: string;
  description: string;
  fullDescription: string;
  region: string;
  achievements: string[];
}

interface Founder {
  id: string;
  name: string;
  country: string;
  image: string;
  imageAlt: string;
  birthYear: number;
  deathYear: number | null;
  title: string;
  quote: string;
  biography: string;
  achievements: string[];
  region: string;
}

interface Battle {
  id: string;
  name: string;
  country: string;
  date: string;
  image: string;
  imageAlt: string;
  description: string;
  fullDescription: string;
  significance: string;
  casualties: string;
  outcome: 'Victory' | 'Strategic Success' | 'Turning Point';
  commanders: string[];
  region: string;
  decade: string;
}

interface TimelineEventData {
  id: string;
  year: number;
  title: string;
  description: string;
  countries: string[];
  type: 'Independence' | 'Battle' | 'Treaty' | 'Movement';
  decade: string;
}

const LiberationGalleryInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'countries' | 'founders' | 'battles' | 'timeline'>('countries');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedDecade, setSelectedDecade] = useState('All Periods');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalType, setModalType] = useState<'country' | 'founder' | 'battle' | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const countries: Country[] = [
  {
    id: '1',
    name: 'Ghana',
    flag: "https://images.unsplash.com/photo-1663296159985-cb684a52b699",
    flagAlt: 'Ghana national flag waving against blue sky with red, gold and green horizontal stripes and black star',
    liberationYear: 1957,
    foundingFather: 'Kwame Nkrumah',
    founderImage: "https://img.rocket.new/generatedImages/rocket_gen_img_199652db0-1765741353780.png",
    founderImageAlt: 'Historical portrait of Kwame Nkrumah in formal suit addressing crowd',
    founderTitle: 'First President of Ghana',
    keyBattle: 'Positive Action Campaign',
    description: 'First sub-Saharan African nation to gain independence from colonial rule, setting the stage for pan-African liberation movements.',
    fullDescription: 'Ghana became the first sub-Saharan African country to gain independence from colonial rule on March 6, 1957. Under the visionary leadership of Kwame Nkrumah, Ghana\'s independence inspired liberation movements across the continent and established the foundation for pan-African unity.',
    region: 'West Africa',
    achievements: [
    'First sub-Saharan African nation to achieve independence',
    'Established pan-African unity principles',
    'Created model for peaceful transition to self-governance',
    'Hosted historic All-African Peoples Conference in 1958']

  },
  {
    id: '2',
    name: 'Kenya',
    flag: "https://img.rocket.new/generatedImages/rocket_gen_img_1ce456f47-1765101870968.png",
    flagAlt: 'Kenya national flag with black, red and green horizontal stripes separated by white borders and traditional Maasai shield',
    liberationYear: 1963,
    foundingFather: 'Jomo Kenyatta',
    founderImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d966d3f8-1768567455642.png",
    founderImageAlt: 'Historical photograph of Jomo Kenyatta wearing traditional Kenyan attire and ceremonial beaded cap',
    founderTitle: 'First President of Kenya',
    keyBattle: 'Mau Mau Uprising',
    description: 'Achieved independence through the Mau Mau resistance movement, establishing a strong foundation for East African unity.',
    fullDescription: 'Kenya gained independence on December 12, 1963, following years of resistance against British colonial rule, particularly through the Mau Mau uprising. Jomo Kenyatta led the nation to freedom and established Kenya as a beacon of stability in East Africa.',
    region: 'East Africa',
    achievements: [
    'Successfully organized Mau Mau resistance movement',
    'Established strong democratic institutions',
    'Became regional economic powerhouse',
    'Promoted Harambee philosophy of collective self-help']

  },
  {
    id: '3',
    name: 'Zimbabwe',
    flag: "https://images.unsplash.com/photo-1675855545707-9e4be7a1d467",
    flagAlt: 'Zimbabwe national flag with green, yellow, red and black horizontal stripes, white triangle and red star with Zimbabwe bird',
    liberationYear: 1980,
    foundingFather: 'Robert Mugabe',
    founderImage: "https://img.rocket.new/generatedImages/rocket_gen_img_199652db0-1765741353780.png",
    founderImageAlt: 'Historical portrait of Robert Mugabe in formal attire during independence celebrations',
    founderTitle: 'First Prime Minister of Zimbabwe',
    keyBattle: 'Chimurenga Wars',
    description: 'Won independence through armed liberation struggle, ending white minority rule and establishing majority governance.',
    fullDescription: 'Zimbabwe achieved independence on April 18, 1980, after a protracted armed liberation struggle known as the Second Chimurenga. The victory ended decades of white minority rule and established a new era of African self-determination in Southern Africa.',
    region: 'Southern Africa',
    achievements: [
    'Successfully concluded Second Chimurenga liberation war',
    'Ended white minority rule in Rhodesia',
    'Established majority rule government',
    'Inspired other Southern African liberation movements']

  },
  {
    id: '4',
    name: 'South Africa',
    flag: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca508b3b-1765208826752.png",
    flagAlt: 'South African flag with horizontal Y-shape in green, red, blue, black, yellow and white colors representing unity',
    liberationYear: 1994,
    foundingFather: 'Nelson Mandela',
    founderImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6702cb5-1763293905593.png",
    founderImageAlt: 'Nelson Mandela smiling warmly in colorful traditional African shirt during public appearance',
    founderTitle: 'First Black President of South Africa',
    keyBattle: 'Anti-Apartheid Movement',
    description: 'Ended apartheid through decades of resistance, establishing a democratic rainbow nation and inspiring global human rights movements.',
    fullDescription: 'South Africa achieved true liberation in 1994 with the end of apartheid and the election of Nelson Mandela as the first black president. This victory came after decades of resistance, sacrifice, and international solidarity against institutionalized racial segregation.',
    region: 'Southern Africa',
    achievements: [
    'Dismantled apartheid system peacefully',
    'Established Truth and Reconciliation Commission',
    'Created inclusive democratic constitution',
    'Became symbol of peaceful transition and forgiveness']

  },
  {
    id: '5',
    name: 'Algeria',
    flag: "https://images.unsplash.com/photo-1576424994051-088f5e37e13b",
    flagAlt: 'Algerian flag with vertical green and white halves featuring red crescent and star in center',
    liberationYear: 1962,
    foundingFather: 'Ahmed Ben Bella',
    founderImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1cdc1624c-1764693256441.png",
    founderImageAlt: 'Ahmed Ben Bella in military uniform addressing supporters during independence celebrations',
    founderTitle: 'First President of Algeria',
    keyBattle: 'Algerian War of Independence',
    description: 'Won independence through fierce armed resistance against French colonial rule, inspiring liberation movements worldwide.',
    fullDescription: 'Algeria achieved independence on July 5, 1962, after eight years of brutal warfare against French colonial occupation. The Algerian War of Independence became a model for anti-colonial struggles and inspired revolutionary movements across Africa and beyond.',
    region: 'North Africa',
    achievements: [
    'Successfully defeated French colonial forces',
    'Established socialist revolutionary government',
    'Became leader in Non-Aligned Movement',
    'Supported other African liberation movements']

  },
  {
    id: '6',
    name: 'Tanzania',
    flag: "https://images.unsplash.com/photo-1688165180856-488eba013804",
    flagAlt: 'Tanzanian flag with diagonal yellow stripe separating green and blue sections with black borders',
    liberationYear: 1961,
    foundingFather: 'Julius Nyerere',
    founderImage: "https://images.unsplash.com/photo-1667184361831-ab2e55282d50",
    founderImageAlt: 'Julius Nyerere wearing traditional Tanzanian cap and glasses, smiling during public address',
    founderTitle: 'First President of Tanzania',
    keyBattle: 'Peaceful Independence Movement',
    description: 'Achieved independence through peaceful negotiations, establishing Ujamaa socialism and supporting liberation across Africa.',
    fullDescription: 'Tanzania gained independence on December 9, 1961, through largely peaceful means under Julius Nyerere\'s leadership. Nyerere\'s philosophy of Ujamaa (familyhood) and African socialism became influential across the continent, and Tanzania became a safe haven for liberation movements.',
    region: 'East Africa',
    achievements: [
    'Achieved peaceful independence transition',
    'Developed Ujamaa socialist philosophy',
    'Hosted and supported liberation movements',
    'Promoted Swahili as unifying African language']

  }];


  const founders: Founder[] = [
  {
    id: '1',
    name: 'Kwame Nkrumah',
    country: 'Ghana',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_199652db0-1765741353780.png",
    imageAlt: 'Kwame Nkrumah in formal suit with raised fist addressing massive crowd during independence rally',
    birthYear: 1909,
    deathYear: 1972,
    title: 'Father of African Independence',
    quote: 'Seek ye first the political kingdom and all else shall be added unto you.',
    biography: 'Kwame Nkrumah was the first Prime Minister and President of Ghana, leading the country to independence in 1957. A visionary pan-Africanist, he advocated for African unity and inspired liberation movements across the continent. His philosophy of African socialism and political independence influenced generations of African leaders.',
    achievements: [
    'Led Ghana to become first sub-Saharan African nation to gain independence',
    'Founded the Organization of African Unity (OAU)',
    'Authored influential works on pan-Africanism and neo-colonialism',
    'Established Ghana as a haven for African liberation movements',
    'Promoted African unity and continental integration'],

    region: 'West Africa'
  },
  {
    id: '2',
    name: 'Nelson Mandela',
    country: 'South Africa',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e91f35f0-1768374628402.png",
    imageAlt: 'Nelson Mandela in colorful traditional shirt with warm smile and raised fist during victory celebration',
    birthYear: 1918,
    deathYear: 2013,
    title: 'Icon of Freedom and Reconciliation',
    quote: 'It always seems impossible until it is done.',
    biography: 'Nelson Mandela spent 27 years in prison for his anti-apartheid activism before becoming South Africa\'s first black president in 1994. His commitment to reconciliation and forgiveness transformed South Africa and inspired the world. Mandela\'s legacy extends beyond politics to become a global symbol of human rights and dignity.',
    achievements: [
    'Led armed resistance against apartheid through Umkhonto we Sizwe',
    'Survived 27 years of imprisonment on Robben Island',
    'Negotiated peaceful end to apartheid system',
    'Became first democratically elected black president of South Africa',
    'Established Truth and Reconciliation Commission',
    'Received Nobel Peace Prize in 1993'],

    region: 'Southern Africa'
  },
  {
    id: '3',
    name: 'Julius Nyerere',
    country: 'Tanzania',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b786bbd7-1768567456529.png",
    imageAlt: 'Julius Nyerere wearing traditional Tanzanian cap and round glasses, speaking passionately to crowd',
    birthYear: 1922,
    deathYear: 1999,
    title: 'Mwalimu (Teacher) of African Socialism',
    quote: 'Without unity, there is no future for Africa.',
    biography: 'Julius Nyerere led Tanzania to independence and developed the philosophy of Ujamaa (African socialism). Known as Mwalimu (teacher), he promoted education, self-reliance, and African unity. Tanzania under his leadership became a sanctuary for liberation movements across Southern Africa.',
    achievements: [
    'Led peaceful transition to Tanzanian independence',
    'Developed Ujamaa philosophy of African socialism',
    'Made Swahili the national language, promoting African identity',
    'Provided sanctuary for liberation movements',
    'Promoted literacy and education across Tanzania',
    'Mediated conflicts across East Africa'],

    region: 'East Africa'
  },
  {
    id: '4',
    name: 'Patrice Lumumba',
    country: 'Democratic Republic of Congo',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17ec0796e-1768567479433.png",
    imageAlt: 'Patrice Lumumba in formal suit with glasses delivering passionate speech with raised hand',
    birthYear: 1925,
    deathYear: 1961,
    title: 'Martyr of African Independence',
    quote: 'We are no longer your monkeys.',
    biography: 'Patrice Lumumba was the first democratically elected Prime Minister of the Democratic Republic of Congo. His fierce advocacy for true independence and African dignity made him a target of colonial powers. Though his life was cut short, his martyrdom inspired liberation movements across Africa.',
    achievements: [
    'Led Congo to independence from Belgian colonial rule',
    'Delivered historic independence speech condemning colonialism',
    'Advocated for economic independence and resource sovereignty',
    'Became symbol of resistance against neo-colonialism',
    'Inspired pan-African liberation movements'],

    region: 'Central Africa'
  },
  {
    id: '5',
    name: 'Ahmed Sékou Touré',
    country: 'Guinea',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e91f35f0-1768374628402.png",
    imageAlt: 'Ahmed Sékou Touré in traditional African attire with raised fist during independence declaration',
    birthYear: 1922,
    deathYear: 1984,
    title: 'Champion of African Dignity',
    quote: 'We prefer freedom in poverty to opulence in slavery.',
    biography: 'Ahmed Sékou Touré led Guinea to become the first French colony to reject continued association with France in 1958. His bold stance against neo-colonialism and commitment to African dignity inspired liberation movements across the continent. He provided sanctuary for revolutionary movements and promoted pan-African unity.',
    achievements: [
    'Led Guinea to reject French colonial association',
    'Established independent African socialist state',
    'Supported liberation movements across Africa',
    'Promoted African cultural renaissance',
    'Advocated for economic independence from colonial powers'],

    region: 'West Africa'
  },
  {
    id: '6',
    name: 'Samora Machel',
    country: 'Mozambique',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_171734382-1768567457209.png",
    imageAlt: 'Samora Machel in military uniform with beret addressing liberation fighters with raised fist',
    birthYear: 1933,
    deathYear: 1986,
    title: 'Revolutionary Leader of Mozambique',
    quote: 'The rich man\'s dog gets more in the way of vaccination, medicine and medical care than do the workers upon whom the rich man\'s wealth is built.',
    biography: 'Samora Machel led FRELIMO in the armed struggle for Mozambican independence from Portuguese colonial rule. As the first president of independent Mozambique, he implemented socialist policies and supported liberation movements in Southern Africa, particularly in Zimbabwe and South Africa.',
    achievements: [
    'Led successful armed liberation struggle against Portugal',
    'Became first president of independent Mozambique',
    'Implemented socialist transformation policies',
    'Supported Zimbabwe and South African liberation movements',
    'Promoted education and healthcare for all citizens'],

    region: 'Southern Africa'
  }];


  const battles: Battle[] = [
  {
    id: '1',
    name: 'Battle of Adwa',
    country: 'Ethiopia',
    date: 'March 1, 1896',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1811f5f83-1767578412702.png",
    imageAlt: 'Ethiopian warriors in traditional white garments with rifles positioned on mountainous terrain during historic battle',
    description: 'Ethiopian forces decisively defeated Italian colonial army, preserving African sovereignty and inspiring anti-colonial resistance.',
    fullDescription: 'The Battle of Adwa was a decisive victory for Ethiopia over Italy, making Ethiopia the only African nation to successfully resist European colonization. Emperor Menelik II led Ethiopian forces to defeat a much larger Italian army, preserving Ethiopian sovereignty and inspiring anti-colonial movements across Africa and the diaspora.',
    significance: 'First major African victory over European colonial power, proving African military capability and inspiring pan-African resistance movements worldwide.',
    casualties: 'Italian forces: 7,000+ killed, 1,500 wounded; Ethiopian forces: 4,000-5,000 casualties',
    outcome: 'Victory',
    commanders: ['Emperor Menelik II', 'Empress Taytu Betul', 'Ras Alula', 'Ras Makonnen'],
    region: 'East Africa',
    decade: '1890s'
  },
  {
    id: '2',
    name: 'Mau Mau Uprising',
    country: 'Kenya',
    date: '1952-1960',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1129663d1-1768567457325.png",
    imageAlt: 'Kenyan freedom fighters in forest hideout with traditional weapons during Mau Mau resistance movement',
    description: 'Armed resistance against British colonial rule that accelerated Kenyan independence and inspired East African liberation.',
    fullDescription: 'The Mau Mau Uprising was an armed rebellion against British colonial rule in Kenya. Led primarily by Kikuyu people, the movement fought for land rights and independence. Though brutally suppressed, the uprising accelerated the path to Kenyan independence and exposed the brutality of colonial rule.',
    significance: 'Exposed colonial brutality to international community, accelerated independence timeline, and established foundation for Kenyan nationalism.',
    casualties: 'Estimated 20,000-100,000 Kenyan casualties; British forces: 1,800+ casualties',
    outcome: 'Strategic Success',
    commanders: ['Dedan Kimathi', 'Stanley Mathenge', 'Waruhiu Itote', 'Muthoni Kirima'],
    region: 'East Africa',
    decade: '1950s'
  },
  {
    id: '3',
    name: 'Battle of Cuito Cuanavale',
    country: 'Angola',
    date: '1987-1988',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1541e53b3-1768567457379.png",
    imageAlt: 'Angolan and Cuban soldiers with military vehicles in defensive positions during historic Southern African battle',
    description: 'Decisive battle that ended South African military dominance and accelerated Namibian independence and apartheid\'s end.',
    fullDescription: 'The Battle of Cuito Cuanavale was a major military engagement between Angolan, Cuban, and South African forces. The battle resulted in South African withdrawal and marked a turning point in Southern African liberation struggles, leading to Namibian independence and weakening apartheid South Africa.',
    significance: 'Ended South African military superiority in region, led to Namibian independence, and accelerated the end of apartheid.',
    casualties: 'Disputed figures; significant losses on all sides',
    outcome: 'Strategic Success',
    commanders: ['Fidel Castro (Cuban support)', 'José Eduardo dos Santos', 'SWAPO commanders'],
    region: 'Southern Africa',
    decade: '1980s'
  },
  {
    id: '4',
    name: 'Algerian War of Independence',
    country: 'Algeria',
    date: '1954-1962',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ace21acb-1768567461574.png",
    imageAlt: 'Algerian FLN fighters in mountainous terrain with weapons during independence war against France',
    description: 'Eight-year armed struggle that ended French colonial rule and inspired global anti-colonial movements.',
    fullDescription: 'The Algerian War of Independence was a brutal eight-year conflict between Algerian nationalists and French colonial forces. The FLN (National Liberation Front) led the resistance, employing guerrilla warfare tactics. The war\'s intensity and Algeria\'s ultimate victory inspired liberation movements worldwide.',
    significance: 'Demonstrated effectiveness of guerrilla warfare against colonial powers, inspired Third World liberation movements, and established Algeria as a revolutionary state.',
    casualties: 'Algerian casualties: 300,000-1,500,000; French forces: 25,000+ killed',
    outcome: 'Victory',
    commanders: ['Ahmed Ben Bella', 'Houari Boumédiène', 'Larbi Ben M\'hidi', 'Krim Belkacem'],
    region: 'North Africa',
    decade: '1950s'
  },
  {
    id: '5',
    name: 'Chimurenga Wars',
    country: 'Zimbabwe',
    date: '1896-1897, 1966-1979',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16903d081-1768567457054.png",
    imageAlt: 'Zimbabwean liberation fighters in bush warfare positions during Second Chimurenga armed struggle',
    description: 'Two major uprisings against colonial rule that ultimately ended white minority government and established majority rule.',
    fullDescription: 'The Chimurenga Wars consisted of two major uprisings: the First Chimurenga (1896-1897) against initial British colonization, and the Second Chimurenga (1966-1979), a guerrilla war that ended white minority rule. ZANLA and ZIPRA forces fought a protracted liberation struggle that resulted in Zimbabwe\'s independence.',
    significance: 'Ended white minority rule in Rhodesia, established majority government, and completed liberation of Southern Africa.',
    casualties: 'Second Chimurenga: 30,000+ casualties across all sides',
    outcome: 'Victory',
    commanders: ['Robert Mugabe', 'Joshua Nkomo', 'Josiah Tongogara', 'Rex Nhongo'],
    region: 'Southern Africa',
    decade: '1970s'
  },
  {
    id: '6',
    name: 'Soweto Uprising',
    country: 'South Africa',
    date: 'June 16, 1976',
    image: "https://images.unsplash.com/photo-1601593397523-844f754de12c",
    imageAlt: 'South African students marching in protest with raised fists during historic Soweto uprising against apartheid',
    description: 'Student-led protests against apartheid education that galvanized international anti-apartheid movement.',
    fullDescription: 'The Soweto Uprising began as a student protest against the imposition of Afrikaans as the medium of instruction in black schools. Police opened fire on peaceful protesters, killing hundreds. The uprising sparked nationwide resistance and international condemnation of apartheid, marking a turning point in the liberation struggle.',
    significance: 'Galvanized international anti-apartheid movement, inspired youth activism, and marked beginning of the end for apartheid system.',
    casualties: 'Official: 176 killed; Unofficial estimates: 700+ killed, thousands wounded',
    outcome: 'Turning Point',
    commanders: ['Student leaders', 'Tsietsi Mashinini', 'Khotso Seatlholo'],
    region: 'Southern Africa',
    decade: '1970s'
  }];


  const timelineEvents: TimelineEventData[] = [
  {
    id: '1',
    year: 1957,
    title: 'Ghana Independence',
    description: 'Ghana becomes the first sub-Saharan African nation to gain independence from colonial rule under Kwame Nkrumah\'s leadership.',
    countries: ['Ghana'],
    type: 'Independence',
    decade: '1950s'
  },
  {
    id: '2',
    year: 1960,
    title: 'Year of Africa',
    description: '17 African nations gain independence, marking the largest wave of decolonization in a single year.',
    countries: ['Nigeria', 'Senegal', 'Mali', 'Madagascar', 'Somalia', 'Benin', 'Niger', 'Burkina Faso', 'Ivory Coast', 'Chad', 'Central African Republic', 'Congo-Brazzaville', 'Gabon', 'Mauritania', 'Togo', 'Cameroon', 'Democratic Republic of Congo'],
    type: 'Independence',
    decade: '1960s'
  },
  {
    id: '3',
    year: 1963,
    title: 'OAU Formation',
    description: 'Organization of African Unity founded in Addis Ababa to promote continental unity and coordinate liberation efforts.',
    countries: ['Pan-African'],
    type: 'Treaty',
    decade: '1960s'
  },
  {
    id: '4',
    year: 1975,
    title: 'Mozambique Independence',
    description: 'Mozambique gains independence from Portugal after successful FRELIMO liberation struggle led by Samora Machel.',
    countries: ['Mozambique'],
    type: 'Independence',
    decade: '1970s'
  },
  {
    id: '5',
    year: 1976,
    title: 'Soweto Uprising',
    description: 'Student protests in Soweto, South Africa spark nationwide resistance against apartheid education policies.',
    countries: ['South Africa'],
    type: 'Movement',
    decade: '1970s'
  },
  {
    id: '6',
    year: 1980,
    title: 'Zimbabwe Independence',
    description: 'Zimbabwe achieves independence after Second Chimurenga liberation war, ending white minority rule.',
    countries: ['Zimbabwe'],
    type: 'Independence',
    decade: '1980s'
  },
  {
    id: '7',
    year: 1988,
    title: 'Battle of Cuito Cuanavale',
    description: 'Decisive battle in Angola leads to South African withdrawal and accelerates Namibian independence.',
    countries: ['Angola', 'Namibia', 'South Africa'],
    type: 'Battle',
    decade: '1980s'
  },
  {
    id: '8',
    year: 1990,
    title: 'Namibia Independence',
    description: 'Namibia gains independence from South African occupation after decades of SWAPO liberation struggle.',
    countries: ['Namibia'],
    type: 'Independence',
    decade: '1990s'
  },
  {
    id: '9',
    year: 1994,
    title: 'End of Apartheid',
    description: 'South Africa holds first democratic elections, Nelson Mandela becomes president, ending apartheid system.',
    countries: ['South Africa'],
    type: 'Independence',
    decade: '1990s'
  },
  {
    id: '10',
    year: 1994,
    title: 'Rwandan Genocide End',
    description: 'RPF victory ends genocide and establishes new government focused on reconciliation and development.',
    countries: ['Rwanda'],
    type: 'Movement',
    decade: '1990s'
  }];


  const handleItemClick = (item: any, type: 'country' | 'founder' | 'battle') => {
    setSelectedItem(item);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  const filterByRegion = (items: any[]) => {
    if (selectedRegion === 'All Regions') return items;
    return items.filter((item) => item.region === selectedRegion);
  };

  const filterByDecade = (items: any[]) => {
    if (selectedDecade === 'All Periods') return items;
    return items.filter((item) => item.decade === selectedDecade);
  };

  const filterBySearch = (items: any[]) => {
    if (!searchQuery) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) =>
    item.name?.toLowerCase().includes(query) ||
    item.title?.toLowerCase().includes(query) ||
    item.country?.toLowerCase().includes(query) ||
    item.description?.toLowerCase().includes(query)
    );
  };

  const getFilteredCountries = () => {
    return filterBySearch(filterByRegion(countries));
  };

  const getFilteredFounders = () => {
    return filterBySearch(filterByRegion(founders));
  };

  const getFilteredBattles = () => {
    return filterBySearch(filterByDecade(filterByRegion(battles)));
  };

  const getFilteredTimeline = () => {
    return filterBySearch(filterByDecade(timelineEvents));
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded-lg w-1/3" />
            <div className="h-64 bg-muted rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-gold">
            Liberation Gallery
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Explore the sacred history of African liberation movements, founding fathers, and historic battles that shaped our continent's freedom.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          selectedDecade={selectedDecade}
          onDecadeChange={setSelectedDecade} />


        {/* Content Sections */}
        {activeTab === 'countries' &&
        <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-headline font-bold text-gold">
                Liberation Countries
              </h2>
              <span className="text-sm text-text-secondary font-body">
                {getFilteredCountries().length} {getFilteredCountries().length === 1 ? 'country' : 'countries'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredCountries().map((country) =>
            <CountryCard
              key={country.id}
              country={country}
              onClick={() => handleItemClick(country, 'country')} />

            )}
            </div>
            {getFilteredCountries().length === 0 &&
          <div className="text-center py-12">
                <Icon name="MagnifyingGlassIcon" size={48} variant="outline" className="text-muted mx-auto mb-4" />
                <p className="text-text-secondary font-body">No countries found matching your criteria.</p>
              </div>
          }
          </div>
        }

        {activeTab === 'founders' &&
        <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-headline font-bold text-gold">
                Founding Fathers
              </h2>
              <span className="text-sm text-text-secondary font-body">
                {getFilteredFounders().length} {getFilteredFounders().length === 1 ? 'leader' : 'leaders'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredFounders().map((founder) =>
            <FounderCard
              key={founder.id}
              founder={founder}
              onClick={() => handleItemClick(founder, 'founder')} />

            )}
            </div>
            {getFilteredFounders().length === 0 &&
          <div className="text-center py-12">
                <Icon name="MagnifyingGlassIcon" size={48} variant="outline" className="text-muted mx-auto mb-4" />
                <p className="text-text-secondary font-body">No founding fathers found matching your criteria.</p>
              </div>
          }
          </div>
        }

        {activeTab === 'battles' &&
        <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-headline font-bold text-gold">
                Historic Battles
              </h2>
              <span className="text-sm text-text-secondary font-body">
                {getFilteredBattles().length} {getFilteredBattles().length === 1 ? 'battle' : 'battles'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredBattles().map((battle) =>
            <BattleCard
              key={battle.id}
              battle={battle}
              onClick={() => handleItemClick(battle, 'battle')} />

            )}
            </div>
            {getFilteredBattles().length === 0 &&
          <div className="text-center py-12">
                <Icon name="MagnifyingGlassIcon" size={48} variant="outline" className="text-muted mx-auto mb-4" />
                <p className="text-text-secondary font-body">No battles found matching your criteria.</p>
              </div>
          }
          </div>
        }

        {activeTab === 'timeline' &&
        <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-headline font-bold text-gold">
                Liberation Timeline
              </h2>
              <span className="text-sm text-text-secondary font-body">
                {getFilteredTimeline().length} {getFilteredTimeline().length === 1 ? 'event' : 'events'}
              </span>
            </div>
            <div className="max-w-4xl mx-auto">
              {getFilteredTimeline().map((event, index) =>
            <TimelineEvent
              key={event.id}
              event={event}
              isLast={index === getFilteredTimeline().length - 1} />

            )}
            </div>
            {getFilteredTimeline().length === 0 &&
          <div className="text-center py-12">
                <Icon name="MagnifyingGlassIcon" size={48} variant="outline" className="text-muted mx-auto mb-4" />
                <p className="text-text-secondary font-body">No timeline events found matching your criteria.</p>
              </div>
          }
          </div>
        }

        {/* Call to Action */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-8 text-center space-y-4">
          <Icon name="AcademicCapIcon" size={48} variant="solid" className="text-yellow-700 mx-auto" />
          <h3 className="text-2xl font-headline font-bold text-yellow-700">
            Explore More Liberation History
          </h3>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            Visit our museum to experience these stories in person, access our research archives, or take a virtual tour of our exhibitions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/contact-and-visit"
              className="px-6 py-3 bg-yellow-500 text-white font-cta font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Plan Your Visit
            </a>
            <a
              href="/digital-museum-tour"
              className="px-6 py-3 bg-white border border-yellow-500 text-yellow-700 font-cta font-bold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
              Virtual Tour
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <DetailModal
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
        type={modalType}
        data={selectedItem} />

    </div>);

};

export default LiberationGalleryInteractive;
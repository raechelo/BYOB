const murders = [
  {
    name: 'Lana Clarkson',
    city: 'Alhambra',
    year: '2003',
    location: '1700 Grand View Drive',
    summary: 'Music producing legend Phil Spector was found guilty of second-degree murder in the death of actress Lana Clarkson, with his trials revealing a long pattern of troubling behavior that reached a deadly end in the foyer of Spector’s Alhambra castle.'
  },
  {
    name: 'The Onion Field Murder',
    city: 'Bakersfield',
    year: '19623',
    location: 'Field off Route 99',
    summary: 'Two thugs kidnapped the police officers who pulled them over in Hollywood and drove to an onion field in Bakersfield, where they killed one officer while the other escaped. As a result of the crime, the LAPD formally changed its procedures of what to do (and not to do) when approaching a vehicle.'
  },
  {
    name: 'Three Little Inglewood Girls',
    city: 'Baldwin Hills',
    year: '1937',
    location: 'Baldwin Hills',
    summary: 'WPA crossing guard Albert Dyer lured three little girls (ages 7, 8, 9) from Inglewood to his Baldwin Hills home, where he raped and strangled them and left their bodies in a ravine. Their murders shocked and devastated 1930s Los Angeles.'
  },
  {
    name: 'Susan Berman',
    city: 'Benedict Canyon',
    year: '2000',
    location: '1527 Benedict Canyon Road',
    summary: 'Susan Berman was born into the mob, and she wrote about the mafia. But the most dangerous man in her life may have been a former classmate of hers with no mob ties: Robert Durst. He is currently awaiting trial for her murder.'
  },
  {
    name: 'Rebecca Schaeffer',
    city: 'Beverly Grove',
    year: '1989',
    location: '120 North Sweetzer',
    summary: 'The 21-year-old star of the TV show My Sister Sam was shot on her doorstep by an obsessed fan. Rebecca Schaeffer’s death at the hands of stalker Robert John Bardo led to tougher anti-stalking laws. Before Schaeffer, Bardo had tried to meet with singer Debbie Gibson, and he once visited the spot in New York City where John Lennon was killed by Mark David Chapman.'
  },
  {
    name: 'The Ned Dohenny Greystone Mansion Murder',
    city: 'Beverly Hills',
    year: '1929',
    location: '905 Loma Vista Drive',
    summary: 'In the words of Curbed writer Tess Barker, “Greystone Mansion was paid for with oil. Its value endures because of a murder.” That would be the murder of oil baron Ned Doheny (yes, he’s the same the Doheny they named the street after) inside his residence, at the time the most expensive home in L.A.'
  },
  {
    name: 'Clara Bow',
    city: 'Beverly Hills',
    year: '1930',
    location: '512 North Bedford Drive',
    summary: 'When Hollywood’s first sex symbol, Clara Bow, refused to be extorted by her former secretary Daisy DeVoe, the secretary used the subsequent trial to humiliate her old boss. Shattered by the trial, Bow retired from the film business to a Nevada ranch.'
  },
  {
    name: 'Bugsy Siegel',
    city: 'Beverly Hills',
    year: '1947',
    location: '810 North Linden Drive',
    summary: 'He was the most infamous celebrity gangster in Los Angeles, and he was shot and killed through the window of his Beverly Hills home. The killer was never found—though one family claims they now know who did it.'
  },
  {
    name: 'Johnny Stompanato',
    city: 'Beverly Hills',
    year: '1958',
    location: '730 North Bedford Drive',
    summary: 'Bombshell actress Lana Turner’s 14-year-old daughter, Cheryl Crane, came to her mother’s defense by stabbing Turner’s mobbed-up boyfriend to death at home. A jury called it a justifiable homicide. The Los Angeles Times took Turner to task for putting her daughter in such a dire position. “Cheryl isn’t the juvenile delinquent,” the Times said. “Lana is.”'
  },
  {
    name: 'The Manson Murders',
    city: 'Beverly Hills',
    year: '1969',
    location: '10066 Cielo Drive (Tate), and 3311 Waverly Drive(LaBianca Home, Los Feliz)',
    summary: 'It’s been said that the brutal cult murders (which included actress Sharon Tate, who was eight-and-a-half months pregnant with Roman Polanski’s son) marked the end of the 1960s. The Manson murder spree is still terrifying to contemplate today.'
  },
  {
    name: 'Rex DeGeorge',
    city: 'Beverly Hills',
    year: '1970-99',
    location: 'office in Beverly Hills',
    summary: 'After attorney Rex DeGeorge was rescued from his sinking $3.7 million yacht, he was charged, and ultimately found guilty of, insurance fraud. In fact, while DeGeorge’s charges relate to the one yacht, it was the fourth heavily insured yacht he’d lost and part of a string of insurance claims involving stolen art, car wrecks, lost luggage, and brain seizures, earning him a place in the Hall of Shame by the Coalition Against Insurance Fraud.'
  },
  {
    name: 'Samantha Jane Gailey',
    city: 'Beverly Hills',
    year: '1977',
    location: '12850 Mulholland Drive',
    summary: 'Following a photo shoot for a French magazine at Jack Nicholson’s home on Mulholland Drive, director Roman Polanski was charged and convicted of drugging and raping 13-year-old Samantha Jane Gailey. (Nicholson was not home at the time.) Polanski fled to Europe before sentencing and still lives in countries that won’t extradite him to the U.S.'
  },
  {
    name: 'The Billionaire Boys Club',
    city: 'Beverly Hills',
    year: '1983-84',
    location: 'Beverly Hills',
    summary: 'It was a Ponzi scheme masquerading as a social club, highlighting all of the excesses of the 1980s, and its publicity may have inspired the Menendez Brothers to kill their parents. When the “BBC” money got tight, people started dying'
  },
  {
    name: 'The Menendez Brothers',
    city: 'Beverly Hills',
    year: '1989',
    location: '722 North Elm Drive',
    summary: 'Were Beverly Hills rich kids Lyle (age 22) and Erik Menendez (age 19) abused sons who fought back against their parents? Or something more sinister? The brothers were convicted of murdering their parents and became a national sensation.'
  },
  {
    name: 'Dag Drollet',
    city: 'Beverly Hills',
    year: '1990',
    location: '2840 North Beverly Drive',
    summary: 'A fatal turn for a troubled family. Cheyenne Brando’s boyfriend Dag Drollet was shot by Brando’s son Christian, which Christian claimed was an accident, in their father Marlon Brando’s hilltop home. With prosecutors unable to prove the case was premeditated, Christian pled guilty to involuntary manslaughter.'
  },
  {
    name: 'Heidi Fleiss',
    city: 'Beverly Hills',
    year: '1990-93',
    location: '1270 Tower Grove Drive',
    summary: 'Heidi Fleiss claimed to have many famous and wealthy clients, and in the 1990s she became a household name when she sidestepped a pandering charge but was convicted on federal counts of tax evasion.'
  },
  {
    name: 'The Beverly Hills Loan Sharks',
    city: 'Beverly Hills',
    year: '1994-2000',
    location: '350 North Canon Drive',
    summary: 'Former record promoter Joseph Isgro and two other men operated a loan-sharking business outside the Le Grand Passage shopping center in Beverly Hills for six years before they were busted. It wasn’t the first or last time Isgro’s name was in the papers.'
  },
  {
    name: 'Anand Jon Alexander',
    city: 'Beverly Hills',
    year: '2002-2007',
    location: 'Beverly Hills, and New York City',
    summary: 'At 33, Anand Jon Alexander had already dressed Janet Jackson and Paris Hilton. In the spring of 2007, the fashion designer was set to star in his own VH1 reality series when he was arrested in Beverly Hills for raping and sexually assaulting models, some as young as 14.'
  },
  {
    name: 'Ronni Chasen',
    city: 'Beverly Hills',
    year: '2010',
    location: 'Sunset and Whittier',
    summary: 'The Hollywood publicist was shot repeatedly while driving her Mercedes home from a movie premiere in Beverly Hills. Authorities said it was a botched robbery, but questions have been raised about the initial investigation.'
  },
  {
    name: 'Nicole Brown Simpson & Ron Goldman',
    city: 'Brentwood',
    year: '1994',
    location: '879 South Bundy Drive',
    summary: 'Did football legend O.J. Simpson murder his ex-wife Nicole Brown Simpson and her friend Ron Goldman? The so-called “Trial of the Century” found O.J. Simpson innocent, though many people believe Simpson was guilty (including the jurors from his civil trial, who punished Simpson with $33.5 million in damages). It was a crime, trial, and media circus like no other. The murders remain unsolved.'
  },
  {
    name: 'Hervey Medellin',
    city: 'Bronson Canyon',
    year: '2011',
    location: 'Trail by the Hollywood sign',
    summary: 'The judge who presided over Gabriel Campos-Martinez’s murder trial called it “so inexplicable, so depraved … it defies description.” The severed head, belonging to Campos-Martinez’s boyfriend Hervey Medellin, made headlines when it was discovered by a dog walker.'
  },
  {
    name: 'Mabel Monohan',
    city: 'Burbank',
    year: '1953',
    location: '1718 Parkside Avenue',
    summary: 'Mob-style hits in Burbank aren’t an everyday occurrence—especially with 64-year-old widows as their victims. How did Mabel Monohan end up in the crosshairs?'
  },
  {
    name: 'Haing Ngor',
    city: 'Chinatown',
    year: '1996',
    location: '900 block of North Beaudry Avenue',
    summary: 'The only Asian actor to win an Academy Award (in The Killing Fields), Haing Ngor was shot and killed in an alley behind his Chinatown apartment. Three gang members were convicted in what authorities believed was a random street robbery. Some suspect the killing was the doing of genocidal dictator Pol Pot, but no link was ever uncovered.'
  },
  {
    name: 'Lisa Ann Mather',
    city: 'Coldwater Canyon',
    year: '1985',
    location: 'Coldwater Canyon',
    summary: 'Nightclub killer Edmund Arne Matthews (nicknamed “The Count” because he wore a black cape to clubs) lured 18-year-old Lisa Ann Mather from Sunset Boulevard to a remote campsite above Coldwater Canyon, where he killed her. A year before that, according to court testimony from two women who described separate incidents, he tied them them up, raped them at the campsite, and released them.'
  },
  {
    name: 'José Gallardo Diaz',
    city: 'Commerce',
    year: '1942',
    location: 'Somewhere around 5500 Slauson Avenue',
    summary: 'José Gallardo Diaz was killed on the way home from a birthday party near a local swimming hole called the Sleepy Lagoon. Police used Diaz’s death to crack down on the growing Mexican population in the city, which led to race riots throughout the city (the Zoot Suit Riots). His murder remains officially unsolved.'
  },
  {
    name: 'Terry Carter',
    city: 'Compton',
    year: '2015',
    location: 'Tam’s Burgers at East Central and Rosecrans in Compton',
    summary: 'Music executive Suge Knight will stand trial for the death of Terry Carter, whom Knight allegedly killed in a fatal hit-and-run at a burger stand in Compton, which was captured in a shocking video.'
  },
  {
    name: 'The Santa Claus Massacre',
    city: 'Covina/West Covina',
    year: '2008',
    location: '1129 East Knollcrest Drive, Covina',
    summary: 'Dressed as Santa Claus, Bruce Jeffrey Pardo killed nine people at his former in-laws’ Christmas Eve party in Covina and set their house on fire. His attempt to get away was stymied when the firebomb he detonated melted the Santa suit into his flesh. If it hadn’t, authorities say the list of victims would have been longer that day.'
  },
  {
    name: 'Barbara Finch',
    city: 'Covina/West Covina',
    year: '1959',
    location: '2750 Lark Hill Drive, West Covina',
    summary: 'Bernard Finch was a handsome doctor working in the San Gabriel Valley. Carole Tregoff was the beautiful assistant who became his mistress. When Finch’s wife was murdered, it set in motion one of the most sensational trials the country had ever witnessed.'
  },
  {
    name: 'The Black Dahlia',
    city: 'Crenshaw',
    year: '1947',
    location: 'Norton Avenue',
    summary: 'The most famous unsolved murder in city history is that of 22-year-old actress Elizabeth Short, whose face was mutilated and whose body was found cut in half and drained of blood.'
  },
  {
    name: 'The Chinese Massacre of 1871',
    city: 'Downtown',
    year: '1871',
    location: 'Downtown',
    summary: 'Seventeen Chinese men and boys were killed in what L.A. Weekly called the greatest string of unsolved murders in Los Angeles history. No one ever went to prison for what is believed to be the largest mass lynching in American history.'
  },
  {
    name: 'The Skid Row Slasher',
    city: 'Downtown',
    year: '1964-65',
    location: 'Downtown and Hollywood',
    summary: 'Vaughn Greenwood murdered two transients in 1964, went to prison for a decade for a different crime, returned to Los Angeles and killed nine men in a two-month span. His M.O. was slashing the throats of transients while they slept. '
  },
  {
    name: 'Baca & Tanaka',
    city: 'Downtown',
    year: '2011',
    location: '211 West Temple Street (LASD HQ)',
    summary: 'Sheriff Lee Baca fancied himself a visionary. His No. 2, Paul Tanaka, considered himself a force to be reckoned with. Together they allowed one of the nation’s most powerful law enforcement agencies to drift into a morass of scandal. Tanaka began a five-year sentence in January 2017, and Baca will be retried after a mistrial. (Update: Baca was convicted in March 2017 in a second trial and was sentenced to three years in federal prison. He was permitted to remain free while appealing his conviction.)'
  },
  {
    name: 'Elisa Lam',
    city: 'Downtown',
    year: '2013',
    location: '640 South Main Street',
    summary: 'How did the body of Canadian tourist Elisa Lam wind up in the water tank at the top of the Cecil Hotel? Theories spread like wildfire after a video was posted online of Lam exhibiting strange behavior in the hotel’s elevator.'
  },

  {
    name: 'Geneva Hilliker Ellroy',
    city: 'El Monte',
    year: '1958',
    location: 'Arroyo High School, near the athletic fields',
    summary: 'James Ellroy is America’s greatest living crime novelist. His mother was murdered when he was 10 years old, her body dumped on the side of the road. After 36 years of “running from her ghost,” he decided to look into it.'
  },
  {
    name: 'Phil Hartman Murder/Suicide',
    city: 'Encino',
    year: '1998',
    location: '5065 Encino Avenue',
    summary: 'A murder/suicide at the hands of his wife Brynn claimed the life of beloved Simpsons, NewsRadio and Saturday Night Live star Phil Hartman, a death that stunned a generation of comedy lovers.'
  },
  {
    name: 'Laurence Austin',
    city: 'Fairfax District',
    year: '1997',
    location: '611 North Fairfax Avenue',
    summary: 'The boyfriend of the owner of the Silent Movie Theater hired a hit man who tried to make it look like a robbery. Laurence Austin was murdered in the lobby of the theater while an audience of 60 watched a comedy short.'
  },
  {
    name: 'Trash Bag Murderer',
    city: 'Freeway Killers',
    year: '1962-1977',
    location: 'Freeways',
    summary: 'Patrick Kearney claimed to have killed one victim a month, starting in 1974. He was convicted of killing 21 males, between the ages of 5 and 28, and he admitted to killing 11 more, becoming known as the “Trash Bag Murderer” for putting his victims’ remains in trash bags and leaving them on the side of the road. He was one of the three famed “freeway killers,” along with William Bonin and Randy Steven Kraft, who became known for dumping bodies by the side the freeway.'
  },
  {
    name: 'William Bonin',
    city: 'Freeway Killers',
    year: '1968-1980',
    location: 'Freeways',
    summary: 'The second of the “freeway killers” on this list, Bonin kidnapped, tortured, raped, and killed 14 teenage boys. He was the first California inmate put to death by lethal injection.'
  },
  {
    name: 'The Scorecard Killer',
    city: 'Freeway Killers',
    year: '1971-1983',
    location: 'Freeways',
    summary: 'The third “freeway killer,” Randy Kraft kept a scorecard of his kills. When police found it, the “scorecard” contained 61 entries.'
  },
  {
    name: 'Evelyn Wright & John Kimmel',
    city: 'Glendale',
    year: '1934',
    location: '1830 Verdugo Vista Drive',
    summary: 'Aviation executive Paul Wright said “a white flame” exploded in his head when he awoke to a single note repeated on the piano, where he found his wife making love to his best friend on the piano bench. He shot and killed them with nine rounds.'
  },
  {
    name: 'The Hillside Strangler',
    city: 'Glendale',
    year: '1977-78',
    location: '703 East Colorado Street',
    summary: 'The “Hillside Strangler” (actually two men) terrorized L.A. in the late 1970s with a series of murders in which strangled women were left naked on hillsides. The base of operations for cousins and serial killers Angelo Buono Jr. and Kenneth Bianchi was their Glendale auto body shop, which is still the site of a working transmission shop.'
  },
  {
    name: 'Angel of Death',
    city: 'Glendale',
    year: '1989-1997',
    location: '1509 Wilson Terrace',
    summary: 'A pudgy, bespectacled respiratory therapist at Glendale Adventist Medical Center, Efren Saldivar would materialize at the bedsides of critically ill patients, syringe in hand. Confessing to more than 100 murders, but pleading guilty to only six, Saldivar said that he was just trying to end his victims’ suffering—and lighten his workload on the graveyard shift.'
  },
  {
    name: 'Jerome Ward',
    city: 'Hollywood',
    year: '1940',
    location: '1438 North Gower Street',
    summary: 'In a scene out of a Western, cowboy film extra Jerome “Blackjack” Ward shot and killed fellow extra Johnny Tyacke (“Johnny Tyke”) in broad daylight, at Gower Gulch. The men had been arguing over a woman when Ward pulled a gun.'
  },
  {
    name: 'The Hole-in-the-Ground Gang',
    city: 'Hollywood',
    year: '1986-1987',
    location: 'First Interstate Bank at Spaulding Avenue and Sunset, followed by Bank of America at Pico and La Cienega, and Union Federal Savings and Loan on Wilshire Boulevard in Beverly Hills',
    summary: 'They got away with a pair of ingenious heists (and may have attempted a third) by tunneling under banks and escaping underground on ATVs. Then they disappeared for good. '
  },
  {
    name: 'The Gray Widows',
    city: 'Hollywood',
    year: '1999-2005',
    location: '307 North La Brea Avenue',
    summary: 'Before they murdered two homeless men, septuagenarians Helen Golay and Olga Rutterschmidt killed them with kindness. The women put a roof over their heads and fed them for years—while taking out millions of dollars in life insurance policies on the men and listing themselves as beneficiaries. '
  },
  {
    name: 'Harry Burkhart',
    city: 'Hollywood',
    year: '2011',
    location: 'Hollywood, Westside, the Valley',
    summary: 'German national Harry Burkhart terrified Los Angeles between Christmas 2011 and New Year’s, lighting cars on fire in carports, driveways, and garages. He was ultimately convicted on all 49 counts. The motive was said to be revenge for his mother, who was facing deportation back to Germany, where she faced fraud charges.'
  },
  {
    name: 'Nick Gianaclis',
    city: 'Hollywood Hills',
    year: '1947',
    location: '8444 Magnolia Drive',
    summary: 'The Actress Who Kidnapped Her Manager... Or did she? The Madge Meredith case took some unusual twists and turns.'
  },
  {
    name: 'The Bling Ring',
    city: 'Hollywood Hills',
    year: '2008-2009',
    location: 'Hollywood Hills',
    summary: 'A group of 12 Valley teenagers (most of the gang was from Calabasas and attended Indian Hills High School) were charged with breaking into the homes of celebrities (Orlando Bloom, Paris Hilton, Lindsay Lohan, and more) and stealing jewelry and clothing.'
  },
  {
    name: 'The Lonely Hearts Killer',
    city: 'Indio',
    year: '1957-58',
    location: 'The desert near Indio, and Anza State Park ',
    summary: 'Harvey Glatman, AKA “The Glamour Girl Slayer” and “The Lonely Hearts Killer,” posed as a photographer in order to rape and kill women, at least three in the Los Angeles area. He took photos of his victims while committing his heinous crimes.'
  },
  {
    name: 'Louise Peete',
    city: 'Koreatown',
    year: '1920-44',
    location: '675 Catalina Street ',
    summary: 'With the ability to talk her way out of any situation, Louise Peete left a few bodies in her wake before the law caught up with her. She became only the second woman to be executed in California’s gas chamber.'
  },
  {
    name: 'The Fox',
    city: 'Koreatown',
    year: '1927',
    location: 'Manhattan Place and 5th Street',
    summary: 'William Edward Hickman kidnapped a prominent banker’s daughter, 12-year-old Marion Parker, calling himself the “Fox” in his ransom note. The Parkers paid the ransom, but Hickman never intended to give Marion back. He strangled her with a dish towel, mutilated her, and left her body on the street. Five years before the Lindbergh baby kidnapping, Angelenos mourned the Parker kidnapping.'
  },
  {
    name: 'The RFK Assassination',
    city: 'Koreatown',
    year: '1968',
    location: '3400 Wilshire',
    summary: 'When Sirhan Sirhan shot and killed Sen. Robert F. Kennedy at the Ambassador Hotel, he altered the course of history, and further devastated a family that lost two sons in one decade to assassins.'
  },
  {
    name: 'Mary Busch',
    city: 'La Canada Flintridge',
    year: '1935',
    location: 'La Canada Flintridge',
    summary: 'A dead wife with a strange cut on her leg, her body found in a goldfish pond. A collection of black widow spiders in the garage. Something about Mary Busch’s death didn’t add up, and due diligence from an insurance investigator led to the conviction of Major Raymond “Rattlesnake James” Lisenba, the last man to be hanged in California.'
  },
  {
    name: 'Ramon Novarro',
    city: 'Laurel Canyon',
    year: '1968',
    location: '3110 Laurel Canyon Boulevard',
    summary: 'One of Hollywood’s first romantic idols, Ramon Novarro was sadistically killed in his home by a pair of thieving prostitutes.'
  },
  {
    name: 'The Wonderland Murders',
    city: 'Laurel Canyon',
    year: '1981',
    location: '8763 Wonderland Avenue',
    summary: 'Known now for its expensive homes and wonderful views, the Hollywood Hills have a violent and disturbing past. Such as in the early 1980s, when four people were killed in Laurel Canyon, with the famous porn star John Holmes in the middle of it all. Also known as the “Four on the Floor Murders” and “Laurel Canyon Murders.”'
  },
  {
    name: 'Juro Rokumoto',
    city: 'Little Armenia',
    year: '1929',
    location: 'Sunset and Serrano',
    summary: 'Yes, as in Pantages Theater. Lois Pantages was found guilty of manslaughter for killing Japanese gardener Juro Rokumoto while driving intoxicated the wrong way down Sunset Boulevard in her Stutz coupe. '
  },
  {
    name: 'The Westside Rapist',
    city: 'Los Angeles (various locations)',
    year: '1972-89',
    location: 'multiple',
    summary: 'Prolific serial killer John Floyd Thomas Jr. raped and killed elderly women in their homes throughout the 1970s and 1980s, but he wasn’t arrested until 2009, when a DNA sample linked him to the crimes.'
  },
  {
    name: 'Golden State Killer / East Area Rapist',
    city: 'Los Angeles (various locations)',
    year: '1979-86',
    location: 'multiple',
    summary: 'Also known as The Original Night Stalker, the East Area Rapist, and the Diamond Knot Killer. The murderer/rapist’s crimes spanned virtually the entire state and lasted from the late 1970s to the mid-1980s. His identity has recently been discovered and was arrested on April 24, 2018; Joseph James DeAngelo has been charged with eight counts of first-degree murder. His DNA was a 100% match.'
  },
  {
    name: 'The Night Stalker',
    city: 'Los Angeles (various locations)',
    year: '1984-85',
    location: 'multiple',
    summary: 'Richard Ramirez was a remorseless Satanic ritualist, rapist, and serial killer who terrorized Northern and Southern California, and he was captured by a group of Angelenos who came to a woman’s rescue. The judge who oversaw his trial said Ramirez exhibited a “cruelty, callousness and viciousness beyond any human understanding.”'
  },
  {
    name: 'The Los Feliz Murder House',
    city: 'Los Feliz',
    year: '1959',
    location: '2475 Glendower Place',
    summary: 'The site of a grisly murder, one in which Dr. Harold Perelson beat his wife with a hammer, savagely beat his teenage daughter, and killed himself by drinking acid. The residence has been famously empty ever since.'
  },
  {
    name: 'The Manson Murders',
    city: 'Los Feliz',
    year: '1969',
    location: 'LaBianca home, 3311 Waverly Drive, and 10066 Cielo Drive(Beverly Hills - Tate home)',
    summary: 'It’s been said that the brutal cult murders (which included actress Sharon Tate, who was eight-and-a-half months pregnant with Roman Polanski’s son) marked the end of the 1960s. The Manson murder spree is still terrifying to contemplate today.'
  },
  {
    name: 'Johnny Lewis',
    city: 'Los Feliz',
    year: '2012',
    location: '3605 Lowry',
    summary: 'Actor Johnny Lewis (Sons of Anarchy, Alien v. Predator) murdered his landlady and her cat before either jumping or falling to his death, bringing to end a troubled life that included a relationship with the singer Katy Perry, who is rumored to have written two songs about their romance.'
  },
  {
    name: 'Chloe Canfield',
    city: 'MacArthur Park',
    year: '1906',
    location: '8th and Alvarado',
    summary: 'The “beautiful and beloved” socialite Chloe Canfield was gunned down by a former employee, on her porch, in front of her granddaughter, causing outrage throughout 1906 Los Angeles. Her oilman husband Charles A. Canfield was so enraged that he persuaded the city’s leading defense attorney to prosecute the case against Morris Buck.'
  },
  {
    name: 'William Desmond Taylor',
    city: 'MacArthur Park',
    year: '1922',
    location: 'Maryland and Alvarado',
    summary: 'Silent film director William Desmond Taylor was found dead in his bungalow in stylish MacArthur Park. He had a single .38-caliber round in his back. His murderer was never caught.'
  },
  {
    name: 'Mitrice Richardson',
    city: 'Malibu',
    year: '2010',
    location: 'Malibu Lost Hills Sheriff\'s Station/Dark Canyon',
    summary: 'Mitrice Richardson was busted for skipping out on the bill at Geoffrey’s restaurant, arrested by sheriff’s deputies from the Malibu/Lost Hills station, taken to the sheriff’s station in Calabasas, and then released at 12:15 a.m. on a Thursday—40 miles from home with no cell phone, no money, and no transportation. Her body was found 10 months later, eight miles away in the Santa Monica Mountains.'
  },
  {
    name: 'Biggie Smalls (Christopher Wallace)',
    city: 'Miracle Mile',
    year: '1997',
    location: 'Fairfax and Wilshire',
    summary: 'As the East Coast rapper sat at a red light in an SUV outside the Petersen Automotive Museum, a Chevy Impala SS pulled up next to him, and a gunman in a blue suit and bowtie opened fire with a 9mm blue-steel pistol, hitting “The Notorious B.I.G.” four times. He was pronounced dead later that night in a hospital.'
  },
  {
    name: 'Tiger Girl',
    city: 'Montecito Heights',
    year: '1922',
    location: 'Montecito Drive',
    summary: 'On July 10, 1922, Clara Phillips visited the hardware department of a local five-and-dime. She picked up a hammer and weighed it in her hand for a moment before asking the clerk if he thought it was heavy enough to kill a woman with. When she used that hammer for murder, the press dubbed her the “Tiger Girl.”'
  },
  {
    name: 'Beulah Louise Overell and George (Bud) Gollum',
    city: 'Newport Harbor',
    year: '1947',
    location: 'Newport Harbor',
    summary: 'In a trial that grabbed national headlines, an 18-year-old heiress (Overell) and her 21-year-old fiance (Gollum) were accused of bludgeoning her parents and dynamiting their Newport Harbor yacht to destroy the crime scene. The Overells reportedly objected to the young couple’s marriage plans.'
  },
  {
    name: 'North Hollywood Shootout',
    city: 'North Hollywood',
    year: '1997',
    location: '6600 Laurel Canyon Boulevard',
    summary: 'On Feb. 28, 1997, two bank robbers wearing homemade body armor and carrying automatic weapons with armor-piercing ammunition robbed the Bank of America in North Hollywood. The shootout that followed left 11 police officers and 7 civilians wounded, and the robbers dead. Nearly 2,000 rounds were fired by the robbers and police.'
  },
  {
    name: 'Timothy Joseph McGhee',
    city: 'Northeast Los Angeles',
    year: '1997-2001',
    location: 'Northeast Los Angeles',
    summary: 'He rapped about the lives he took, boasting of his murders. As the judge who presided over his case put it, he treated killing “as some kind of perverse sport, as if he was hunting human game.”'
  },
  {
    name: 'Stella Darlene Nolan',
    city: 'Norwalk',
    year: '1953',
    location: '10900 East Firestone Boulevard',
    summary: 'An 8-year-old girl was kidnapped from a refreshment stand and murdered in an absolutely devastating manner. What construction worker Mack Ray Edwards did to Nolan is unimaginable. Though she went missing in 1953, her body was discovered in 1970, when Edwards led police to the burial site.'
  },
  {
    name: 'The “Dating Game” Killer',
    city: 'Orange County, Los Angeles, and Other States',
    year: '1968-79',
    location: 'various',
    summary: 'Serial killer Rodney Alcala, a former child photographer, had already killed four people by the time he appeared on The Dating Game. Authorities say he may have murdered more than 100 and the count keeps rising.'
  },
  {
    name: 'Thelma Todd',
    city: 'Pacific Palisades',
    year: '1935',
    location: '17575 Pacific Coast Highway',
    summary: 'In the words of the Chicago Tribune, “The death of Hollywood actress Thelma Todd in 1935 hit the world with the impact of the later death of Marilyn Monroe and the murder of Sharon Tate. The gorgeous blond comedian was a cross between Goldie Hawn and Farrah Fawcett, only more popular.” Todd was found asphyxiated in the garage of her popular seaside restaurant, and her death was ruled a suicide. But that didn’t explain the broken nose and cracked ribs.'
  },
  {
    name: 'ZZZZ Best Carpet Cleaning',
    city: 'Reseda',
    year: '1982-87',
    location: '7040 Darby Avenue',
    summary: 'Barry Minkow managed to turn a local carpet cleaning business that he started in high school into a public company valued at more than $200 million before it was exposed as a Ponzi scheme. The Los Angeles Times once called him “the FBI poster boy for fraud.”'
  },
  {
    name: 'The Chicken Coop Killer',
    city: 'Riverside',
    year: '1920s',
    location: '6330 Wineville Road, Mira Loma',
    summary: 'In 1926 Gordon Stewart Northcott beat and sexually assaulted at least a dozen boys, and killed three of them, on his chicken ranch in Riverside County. Beneath the chicken coop: a grave filled with bones.'
  },
  {
    name: 'Dan and Linda Kolkena Broderick',
    city: 'San Diego',
    year: '1989',
    location: '1041 Cypress Avenue, Marston Hills',
    summary: 'A case that caught national attention and was a huge story locally. San Diego socialite Betty Broderick murdered her ex-husband and his new wife, and she confessed her crime to a Los Angeles Times newspaper reporter.'
  },
  {
    name: 'Jon Aujay',
    city: 'San Gabriel Mountains',
    year: '1998',
    location: 'Devil\'s Punchbowl',
    summary: 'Jon Aujay went for a run in the desert in 1998 and never returned. Theories, suspicions, hunches—they’ve all been far more plentiful than actual clues in the search to discover the sheriff’s deputy’s fate.'
  },
  {
    name: 'Doris Courtemanche',
    city: 'San Pedro',
    year: '1943',
    location: '751 North Palos Verdes Street',
    summary: 'Doris was just 12. Homicide Detective Ray Giese called her death "the most vicious murder in my entire experience," according to the L.A. Daily Mirror.  A 16-year-old boy was convicted.'
  },
  {
    name: 'Col. Griffith J. Griffith',
    city: 'Santa Monica',
    year: '1903',
    location: 'Ocean Avenue',
    summary: 'Yes, the Griffith Park/Griffith Observatory/Greek Theater Griffiths. The family patriarch Col. Griffith J. Griffith entered his wife’s room at a Santa Monica resort with a gun in one hand and a prayer book in the other, questioned his wife’s loyalty and faithfulness, and pulled the trigger. Her escape was nothing short of miraculous.'
  },
  {
    name: 'Whitney Bulger',
    city: 'Santa Monica',
    year: '1997-2011',
    location: '1012 3rd Street #303',
    summary: 'Saddam had his spider hole. Manson had Barker Ranch. For James “Whitey” Bulger, the anonymity of advanced age provided ample cover for him to hide out 16 years in Santa Monica, a stash of blood money stuffed in the walls, and guns at the ready.'
  },
  {
    name: 'Linda Epping',
    city: 'Sherman Oaks',
    year: '1961',
    location: 'Newspaper reports say Phillips worked in in Sherman Oaks',
    summary: 'An 8-year-old girl with cancer, Linda Epping, was taken to the hospital, but instead of surgery that might prolong her life, chiropractor Marvin Phillips talked the Epping family into letting him treat her privately for $500. She died, and Phillips was found guilty of murder in what was considered a landmark case, causing a death while committing felony.'
  },
  {
    name: 'The “Bat Man” Case',
    city: 'Silver Lake',
    year: '1922',
    location: '800 block of Lafayette Park Place in Silver Lake',
    summary: 'In a trial that grabbed headlines, and for good reason, a wife’s paramour who had been secretly living for 10 years in the attic directly over her marital bed shot and killed her husband while the married couple was quarreling. The man who pulled the trigger, Otto Sanhuber, hid “Dolly” Oesterreich in a closet before police arrived to find the dead body of Fred Oesterreich. She told police a burglar shot her husband. After learning of Sanhuber’s cave-like dwelling in the Oesterreich case, the papers dubbed it the “Bat Man” case.'
  },
  {
    name: 'Randy Kling',
    city: 'Simi Valley',
    year: '2003-04',
    location: '2243 East Avenue I, in Lancaster; and Rio Vista Court in Simi Valley',
    summary: 'When Randy Kling got involved with a tight-knit Simi Valley family, lives were destroyed, and two men wound up dead.'
  },
  {
    name: 'Sam Cooke',
    city: 'South Los Angeles',
    year: '1964',
    location: '9137 South Figueroa Street',
    summary: 'The circumstances surrounding the singer’s shooting death at 3 a.m. in the seedy Hacienda Motel remain murky, leading many to still wonder how the world lost the once-a-generation talent.'
  },
  {
    name: 'The Grim Sleeper',
    city: 'South Los Angeles',
    year: '1985-2007',
    location: 'South Los Angeles',
    summary: 'Lonnie David Franklin Jr. got his nickname because investigators believed there was a mysterious 14-year-gap between his killings. Like many serial killers, he targeted drug addicts and prostitutes—Janes Does few people would notice were missing. He was convicted of killing nine women and one teen girl, and detectives believe he may have killed at least 15 more. Also known as The Southside Slayer.'
  },
  {
    name: 'Latasha Harlins',
    city: 'South Los Angeles',
    year: '1992',
    location: 'Empire Liquor Market and Deli, 91st and Figueroa streets',
    summary: 'A teen in a liquor store/deli put a bottle of juice in her knapsack. The shopkeeper accused her of stealing. A struggle broke out, and the shopkeeper shot Latasha Harlins in the face, lighting one of the fuses that would eventually explode into the 1992 riots.'
  },
  {
    name: 'George "G" Torres',
    city: 'South Los Angeles',
    year: '2001',
    location: 'Vitello’s at 4349 Tujunga Avenue',
    summary: 'George Torres (AKA “G”) founded the Numero Uno grocery chain and was a big-time political donor whose methods of protecting his empire caught the attention of federal authorities, who convicted him of bribery, racketeering, and solicitation of murder.'
  },
  {
    name: 'Diane Sparks',
    city: 'Studio City',
    year: '1946',
    location: 'Olive orchard a half-mile off Glenoaks Boulevard',
    summary: 'The wife of an LAPD motor officer was found murdered. A neighbor was found innocent. And a key witness was never called to trial in the death of Diane Sparks.'
  },
  {
    name: 'Sherri Rasmussen',
    city: 'Van Nuys',
    year: '1986',
    location: 'Townhouse in a gated complex on the 7100 block of Balboa Boulevard',
    summary: 'Stephanie Lazarus was an exemplary cop. And a murderer. How did she evade suspicion for 23 years when she should have been a prime suspect in the killing of Sherri Rasmussen?'
  },
  {
    name: 'Olga Kupczyk Duncan',
    city: 'Ventura',
    year: '1958',
    location: 'Casitas Pass in Ventura',
    summary: 'Jealous mother Elizabeth Ann “Ma” Duncan had her daughter-in-law killed when she was seven months pregnant. Investigators discovered that Olga Kupczyk Duncan and “Ma” Duncan’s unborn grandchild had been buried alive.'
  },
  {
    name: 'Marvin Gaye',
    city: 'West Adams',
    year: '1984',
    location: '2101 South Gramercy Place',
    summary: 'With his career back on the rise in the 1980s, the world-famous singer was shot and killed by his own father in his West Adams home.'
  },
  {
    name: 'Clyde and Lulu Dayton',
    city: 'West Hills',
    year: '1922',
    location: 'Their ranch extended from Roscoe and Valley Circle to the Ventura County line',
    summary: 'The health food pioneer Clyde Dayton (known as the “Red-Ripe Honey-Man”) and his wife, Lulu, were shot and burned to death in their Valley cabin. It was officially called a murder-suicide, but one investigator thought it might have been an act of revenge. It is believed the wealthy eccentric buried his fortune in mason jars somewhere on his 138-acre ranch, which is now a housing development.'
  },
  {
    name: 'Jesse James Hollywood',
    city: 'West Hills',
    year: '2000',
    location: 'Lizard\'s Mouth hiking area',
    summary: 'Jesse James Hollywood was a small-time Valley weed dealer who fancied himself gangsta. Then he became one after kidnapping and murdering the younger brother of a West Hills rival and going on the lam.'
  },
  {
    name: 'Sal Mineo',
    city: 'West Hollywood',
    year: '1976',
    location: '8563 Holloway Drive',
    summary: 'Like his costars James Dean, Nick Adams, and Natalie Wood in Rebel Without a Cause, Sal Mineo met a tragic end. Mineo was stabbed to death after parking his car at a West Hollywood apartment building during a botched mugging by 19-year-old pizza deliveryman Lionel Ray Williams.'
  },
  {
    name: 'Christa Helm',
    city: 'West Hollywood',
    year: '1977',
    location: 'LLoyd Place',
    summary: 'An actress who was intimate with powerful men, and kept a sex diary, was found stabbed to death on a street in West Hollywood. Her diary was stolen, and the killer was never found.'
  },
  {
    name: 'Dominique Dunne',
    city: 'West Hollywood',
    year: '1982',
    location: '8723 Rangely Avenue',
    summary: '“The story of John Sweeney and Dominique Dunne that culminated in their fatal clash has all the elements of high drama—love and jealousy, fear and frustration, fame and poverty,” wrote Roxane Arnold in the Los Angeles Times.'
  },
  {
    name: 'Melanie Howell',
    city: 'West Los Angeles',
    year: '1976',
    location: '1723 Westgate Avenue #6',
    summary: 'Someone suspicious had been loitering outside Melanie Howell’s apartment, so she called police and stayed elsewhere. On the day she went back home, she was murdered.'
  },
  {
    name: 'Dorothy Stratten',
    city: 'West Los Angeles',
    year: '1980',
    location: '10881 Clarkson Road',
    summary: 'It was Paul Snider who arranged to have nude photos of Dorothy Stratten sent to Playboy, sending the eventual Playmate of the Year on a path to stardom that would consume Snider with deadly jealousy. He killed Stratten and himself with a 12-gauge shotgun.'
  },
  {
    name: 'Karen Toshima',
    city: 'Westwood',
    year: '1988',
    location: '1000 block of Broxton Avenue',
    summary: 'Before the death of Karen Toshima, a 27-year-old Long Beach woman caught in gang crossfire while walking in Westwood in 1988, the university neighborhood was one of the most vital nightlife spots in the city. Her death marked a turning point in the city’s battle with gang violence. '
  }
]

module.exports = murders;
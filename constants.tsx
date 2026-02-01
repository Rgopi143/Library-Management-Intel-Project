
import React from 'react';
import { Book, Policy } from './types';

export const INITIAL_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '9780743273565',
    category: 'Classic',
    summary: 'F. Scott Fitzgerald, a prominent figure of the Jazz Age, wrote this masterpiece to critique the American Dream and the moral decay beneath the glamour of 1920s prosperity. The novel explores themes of wealth, love, and the illusion of the American Dream through the mysterious Jay Gatsby and his obsessive pursuit of Daisy Buchanan. Fitzgerald intended to expose the hollowness of materialism and the corruption of the American ideal.',
    available: true,
    location: 'Fiction Section A1'
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    category: 'Self-Help',
    summary: 'James Clear, a renowned habits expert, wrote this book after years of research on behavior change and personal improvement. His intention was to provide a practical, evidence-based framework for building good habits and breaking bad ones. Clear draws from biology, psychology, and neuroscience to explain how small, incremental changes can lead to remarkable results. The book emphasizes that success comes from daily habits rather than transformative moments.',
    available: false,
    location: 'Non-Fiction B4'
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    isbn: '9780593135204',
    category: 'Science Fiction',
    summary: 'Andy Weir, known for his scientific accuracy and humor, wrote this novel to explore themes of friendship, sacrifice, and human ingenuity in the face of existential threats. Following the success of The Martian, Weir intended to create a story that combines hard science with emotional depth. The book follows Ryland Grace, a lone astronaut who must save humanity from extinction, showcasing Weir\'s belief in scientific problem-solving and the power of international cooperation.',
    available: true,
    location: 'Fiction Section C2'
  },
  {
    id: '4',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '9780061120084',
    category: 'Classic',
    summary: 'Harper Lee drew from her own childhood experiences in Alabama to write this powerful novel about racial injustice and moral growth. Her intention was to expose the deep-seated racism in the American South while celebrating the courage of those who stand against injustice. Through the eyes of Scout Finch, Lee explores themes of empathy, prejudice, and the loss of innocence, creating a timeless critique of social inequality that remains relevant today.',
    available: true,
    location: 'Fiction Section A2'
  },
  {
    id: '5',
    title: '1984',
    author: 'George Orwell',
    isbn: '9780451524935',
    category: 'Science Fiction',
    summary: 'George Orwell wrote this dystopian masterpiece as a warning against totalitarianism and the dangers of unchecked government power. Drawing from his experiences with fascism and communism, Orwell intended to expose how language manipulation and surveillance can be used to control populations. The novel introduces concepts like Big Brother and thoughtcrime that have become part of our cultural vocabulary, serving as a timeless cautionary tale about the preservation of truth and freedom.',
    available: false,
    location: 'Fiction Section C3'
  },
  {
    id: '6',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '9780141439518',
    category: 'Romance',
    summary: 'Jane Austen wrote this novel to satirize the dependence of women on marriage for social standing and economic security. Set in Regency England, her intention was to critique the limited choices available to women while celebrating intelligence and moral character over superficial qualities. Through the relationship between Elizabeth Bennet and Mr. Darcy, Austen explores themes of social class, first impressions, and personal growth, creating a template for the modern romance novel.',
    available: true,
    location: 'Fiction Section D1'
  },
  {
    id: '7',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    isbn: '9780316769488',
    category: 'Classic',
    summary: 'J.D. Salinger wrote this iconic novel to explore the alienation and hypocrisy of adult society through the eyes of teenager Holden Caulfield. His intention was to capture the authentic voice of adolescent rebellion and the struggle to maintain innocence in a world filled with phoniness. The novel became a voice for generations of young people questioning societal norms, though Salinger himself remained reclusive, letting his work speak for his views on authenticity and human connection.',
    available: true,
    location: 'Fiction Section A3'
  },
  {
    id: '8',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    isbn: '9780062316097',
    category: 'History',
    summary: 'Yuval Noah Harari, a historian and professor, wrote this book to provide a comprehensive narrative of human history from the Stone Age to the present. His intention was to make complex historical and scientific concepts accessible to general readers while challenging conventional wisdom about human progress. Harari explores how Homo sapiens came to dominate the planet through cognitive, agricultural, and scientific revolutions, offering provocative insights into the future of our species.',
    available: false,
    location: 'Non-Fiction E1'
  },
  {
    id: '9',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    isbn: '9780061122415',
    category: 'Fiction',
    summary: 'Paulo Coelho wrote this philosophical novel to share his belief in following one\'s dreams and listening to one\'s heart. Drawing from his own spiritual journey and various religious traditions, Coelho intended to create a simple yet profound story about personal legend and destiny. The book follows Santiago, a shepherd boy who dreams of finding treasure, symbolizing the universal human quest for meaning and the courage to pursue one\'s calling despite obstacles.',
    available: true,
    location: 'Fiction Section F1'
  },
  {
    id: '10',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    isbn: '9780374533557',
    category: 'Psychology',
    summary: 'Daniel Kahneman, a Nobel Prize-winning economist and psychologist, wrote this book to share his groundbreaking research on human decision-making and cognitive biases. His intention was to help readers understand the two systems that drive our thinking: the fast, intuitive System 1 and the slow, deliberate System 2. Kahneman draws from decades of research to reveal how our minds make errors and how we can make better choices, making complex psychology accessible to everyone.',
    available: true,
    location: 'Non-Fiction G1'
  },
  {
    id: '11',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    isbn: '9780618260300',
    category: 'Fantasy',
    summary: 'J.R.R. Tolkien, a professor of Anglo-Saxon at Oxford, wrote this fantasy adventure as a children\'s story that evolved into a prelude to his epic Lord of the Rings. His intention was to create a mythology for England, drawing from Norse and Anglo-Saxon legends. The book follows Bilbo Baggins, a comfort-loving hobbit thrust into an unexpected adventure, exploring themes of courage, friendship, and personal growth while showcasing Tolkien\'s linguistic expertise and world-building genius.',
    available: false,
    location: 'Fiction Section H1'
  },
  {
    id: '12',
    title: 'Educated',
    author: 'Tara Westover',
    isbn: '9780399590504',
    category: 'Biography',
    summary: 'Tara Westover wrote this powerful memoir to document her extraordinary journey from a survivalist family in rural Idaho to earning a PhD from Cambridge University. Her intention was to explore the transformative power of education and the complex relationship between family loyalty and personal growth. Westover\'s story reveals how she overcame isolation, abuse, and lack of formal schooling to discover the world of knowledge, ultimately questioning everything she was taught to believe.',
    available: true,
    location: 'Non-Fiction I1'
  },
  {
    id: '13',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    isbn: '9781250301697',
    category: 'Thriller',
    summary: 'Alex Michaelides, a screenwriter turned novelist, wrote this psychological thriller to explore themes of trauma, silence, and the complexity of human motivation. His intention was to create a gripping mystery that keeps readers guessing until the final revelation. The story follows a psychotherapist treating a woman who shot her husband and then never spoke again, combining Michaelides\' understanding of psychology with his talent for crafting suspenseful narratives that challenge readers\' perceptions.',
    available: true,
    location: 'Fiction Section J1'
  },
  {
    id: '14',
    title: 'Becoming',
    author: 'Michelle Obama',
    isbn: '9781524763138',
    category: 'Biography',
    summary: 'Michelle Obama wrote this memoir to share her journey from the South Side of Chicago to becoming the First Lady of the United States. Her intention was to inspire readers by showing how ordinary people can achieve extraordinary things through hard work, education, and perseverance. The book chronicles her experiences with race, gender, and public service, offering an intimate look at her personal growth and the challenges of balancing family life with the demands of the White House.',
    available: false,
    location: 'Non-Fiction I2'
  },
  {
    id: '15',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    isbn: '9780525559474',
    category: 'Fiction',
    summary: 'Matt Haig, who has written openly about his struggles with depression, wrote this novel to explore themes of regret, choice, and the infinite possibilities of life. His intention was to create a hopeful story about finding meaning in our actual lives rather than fantasizing about what might have been. The book follows Nora Seed, who discovers a library between life and death where she can explore alternate versions of her life, ultimately learning to embrace her own imperfect existence.',
    available: true,
    location: 'Fiction Section F2'
  },
  {
    id: '16',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    isbn: '9780735219090',
    category: 'Mystery',
    summary: 'Delia Owens, a wildlife scientist and author, wrote this novel to combine her love of nature with a compelling murder mystery. Her intention was to create a story that celebrates the natural world while exploring themes of isolation, prejudice, and resilience. The book follows Kya Clark, the "Marsh Girl" who raises herself in the wetlands of North Carolina, showcasing Owens\' deep knowledge of ecology and her belief in the healing power of nature and human connection.',
    available: true,
    location: 'Fiction Section K1'
  },
  {
    id: '17',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    isbn: '9780307887894',
    category: 'Business',
    summary: 'Eric Ries, a serial entrepreneur and startup advisor, wrote this book to revolutionize how new products are built and launched. His intention was to provide a scientific approach to entrepreneurship that reduces waste and increases success rates. Drawing from his experiences with failed startups, Ries developed the Lean Startup methodology to help companies test their vision continuously, adapt and adjust before it\'s too late, and create sustainable business models.',
    available: false,
    location: 'Non-Fiction L1'
  },
  {
    id: '18',
    title: 'Dune',
    author: 'Frank Herbert',
    isbn: '9780441013593',
    category: 'Science Fiction',
    summary: 'Frank Herbert wrote this epic science fiction novel to explore complex themes of politics, religion, ecology, and human potential. His intention was to create a sophisticated space opera that went beyond simple adventure to examine power dynamics and environmental responsibility. Set on the desert planet Arrakis, the story follows Paul Atreides as he navigates political intrigue and mystical transformation, showcasing Herbert\'s deep interest in ecology and his critique of charismatic leadership.',
    available: true,
    location: 'Fiction Section C4'
  },
  {
    id: '19',
    title: 'The Girl on the Train',
    author: 'Paula Hawkins',
    isbn: '9781594633669',
    category: 'Thriller',
    summary: 'Paula Hawkins wrote this psychological thriller to explore themes of memory, addiction, and unreliable narration. Her intention was to create a gripping story that plays with readers\' perceptions and challenges assumptions about truth and perspective. The novel follows Rachel, an alcoholic who becomes obsessed with a couple she sees from her train window, ultimately becoming entangled in a missing person investigation that forces her to confront her own damaged memories.',
    available: false,
    location: 'Fiction Section J2'
  },
  {
    id: '20',
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    isbn: '9781612680194',
    category: 'Finance',
    summary: 'Robert Kiyosaki wrote this financial education book based on lessons learned from his two fathers - his highly educated but poor biological father and his wealthy best friend\'s father. His intention was to challenge conventional wisdom about money and teach readers how to build wealth through financial literacy. Kiyosaki advocates for financial independence through investing, real estate, owning businesses, and increasing financial intelligence, arguing that the rich don\'t work for money but make money work for them.',
    available: true,
    location: 'Non-Fiction M1'
  },
  {
    id: '21',
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    isbn: '9780385490818',
    category: 'Science Fiction',
    summary: 'Margaret Atwood wrote this dystopian novel as a speculative fiction exploring themes of women\'s rights, religious fundamentalism, and political power. Her intention was to create a cautionary tale by extrapolating from real historical events and contemporary trends. Set in the Republic of Gilead, where women are subjugated and used for reproductive purposes, the novel follows Offred as she struggles to maintain her identity and humanity in a totalitarian theocratic society.',
    available: true,
    location: 'Fiction Section C5'
  },
  {
    id: '22',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    isbn: '9781577314806',
    category: 'Self-Help',
    summary: 'Eckhart Tolle wrote this spiritual guide after a profound personal transformation that ended years of depression and suicidal thoughts. His intention was to share his discovery of the transformative power of living in the present moment. Drawing from various spiritual traditions, Tolle teaches readers how to break free from the pain of the past and anxiety about the future by embracing the present, arguing that most human suffering comes from identification with the thinking mind rather than awareness of the now.',
    available: false,
    location: 'Non-Fiction B5'
  },
  {
    id: '23',
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    isbn: '9780307588371',
    category: 'Thriller',
    summary: 'Gillian Flynn wrote this psychological thriller to explore the dark side of marriage and media manipulation in modern America. Her intention was to create a story that subverts traditional mystery tropes while examining themes of identity, revenge, and the performance of gender roles. The novel alternates between the perspectives of Nick Dunne and his missing wife Amy, revealing a complex narrative about marriage gone terribly wrong and the dangerous games people play in relationships.',
    available: true,
    location: 'Fiction Section J3'
  },
  {
    id: '24',
    title: 'Good to Great',
    author: 'Jim Collins',
    isbn: '9780066620992',
    category: 'Business',
    summary: 'Jim Collins and his research team spent five years studying companies that made the leap from good to great and sustained that performance. His intention was to identify the key factors that distinguish truly great companies from merely good ones. Through rigorous analysis, Collins discovered that great companies share common traits including Level 5 Leadership, the Hedgehog Concept, and a culture of discipline, providing a framework for organizations seeking sustained excellence.',
    available: false,
    location: 'Non-Fiction L2'
  },
  {
    id: '25',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    isbn: '9780743269513',
    category: 'Business',
    summary: 'Stephen Covey wrote this influential self-help book to provide a principle-centered approach to personal and professional effectiveness. His intention was to create a holistic framework for living based on universal, timeless principles. Covey presents seven habits that move from dependence to independence to interdependence, arguing that true effectiveness comes from character rather than personality and from aligning one\'s life with natural laws and principles.',
    available: true,
    location: 'Non-Fiction L3'
  },
  {
    id: '26',
    title: 'Zero to One',
    author: 'Peter Thiel',
    isbn: '9780804139298',
    category: 'Business',
    summary: 'Peter Thiel, co-founder of PayPal and early Facebook investor, wrote this book based on his lectures at Stanford about startup creation and innovation. His intention was to challenge conventional business wisdom and share his contrarian views on building successful companies. Thiel argues that the most valuable companies create something entirely new (going from 0 to 1) rather than competing in existing markets, offering insights on technology, globalization, and the future of progress.',
    available: true,
    location: 'Non-Fiction L4'
  },
  {
    id: '27',
    title: 'The Innovator\'s Dilemma',
    author: 'Clayton Christensen',
    isbn: '9781633691780',
    category: 'Business',
    summary: 'Clayton Christensen, a Harvard Business School professor, wrote this groundbreaking book to explain why successful companies often fail when faced with disruptive innovation. His intention was to provide a framework for understanding how market-leading companies can be disrupted by new technologies and business models. Christensen introduces the concept of disruptive innovation and explains why well-managed companies that listen to their customers and focus on profitable activities can still lose their market leadership.',
    available: false,
    location: 'Non-Fiction L5'
  },
  {
    id: '28',
    title: 'Man\'s Search for Meaning',
    author: 'Viktor Frankl',
    isbn: '9780807014295',
    category: 'Psychology',
    summary: 'Viktor Frankl, a psychiatrist and Holocaust survivor, wrote this book to document his experiences in Nazi concentration camps and develop his theory of logotherapy. His intention was to show that even in the most horrific circumstances, humans can find meaning and purpose in life. Frankl argues that our primary drive is not pleasure but the discovery and pursuit of what we personally find meaningful, offering profound insights into resilience, suffering, and the human capacity for transcendence.',
    available: true,
    location: 'Non-Fiction G2'
  },
  {
    id: '29',
    title: 'Emotional Intelligence',
    author: 'Daniel Goleman',
    isbn: '9780553383713',
    category: 'Psychology',
    summary: 'Daniel Goleman, a psychologist and science journalist, wrote this book to bring emotional intelligence into the mainstream discussion of human capabilities. His intention was to show that emotional skills like self-awareness, self-regulation, and empathy are as important as IQ for success in life and work. Goleman synthesized research from neuroscience and psychology to demonstrate how emotional intelligence can be learned and developed, revolutionizing our understanding of what it means to be smart.',
    available: false,
    location: 'Non-Fiction G3'
  },
  {
    id: '30',
    title: 'Flow: The Psychology of Optimal Experience',
    author: 'Mihaly Csikszentmihalyi',
    isbn: '9780061339202',
    category: 'Psychology',
    summary: 'Mihaly Csikszentmihalyi, a pioneering psychologist, wrote this book to share his decades of research on the state of consciousness he calls "flow" - the feeling of being completely absorbed in an activity. His intention was to help readers understand how to achieve optimal experiences and genuine happiness. Csikszentmihalyi explains that flow occurs when challenge and skill are perfectly balanced, offering a path to fulfillment that goes beyond pleasure to meaning and personal growth.',
    available: true,
    location: 'Non-Fiction G4'
  },
  {
    id: '31',
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    isbn: '9780812981605',
    category: 'Psychology',
    summary: 'Charles Duhigg, an investigative reporter for the New York Times, wrote this book to explore the science of habit formation and its impact on individuals, organizations, and societies. His intention was to make complex neurological research accessible while showing how understanding habits can transform lives and businesses. Duhigg explains the habit loop of cue-routine-reward and shares compelling stories of how habit change has revolutionized companies, products, and personal behaviors.',
    available: true,
    location: 'Non-Fiction G5'
  },
  {
    id: '32',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    isbn: '9780553380163',
    category: 'Science',
    summary: 'Stephen Hawking, the renowned theoretical physicist, wrote this book to make complex cosmology accessible to general readers without sacrificing scientific accuracy. His intention was to explain the nature of the universe, from the Big Bang to black holes, in a way that anyone could understand. Despite his severe physical limitations from ALS, Hawking shares his groundbreaking work on space-time, quantum mechanics, and the search for a unified theory of everything.',
    available: false,
    location: 'Non-Fiction N1'
  },
  {
    id: '33',
    title: 'The Origin of Species',
    author: 'Charles Darwin',
    isbn: '9780451529020',
    category: 'Science',
    summary: 'Charles Darwin wrote this revolutionary book to present his theory of evolution by natural selection after decades of observation and research. His intention was to provide overwhelming evidence for how species evolve and adapt over time, challenging the prevailing view of divine creation. Darwin\'s careful argumentation and wealth of examples from nature fundamentally changed our understanding of life on Earth, establishing evolution as the central organizing principle of biology.',
    available: true,
    location: 'Non-Fiction N2'
  },
  {
    id: '34',
    title: 'Cosmos',
    author: 'Carl Sagan',
    isbn: '9780345539434',
    category: 'Science',
    summary: 'Carl Sagan, an astronomer and science communicator, wrote this book to share his wonder and enthusiasm for the universe with the general public. His intention was to make science accessible and inspiring while exploring humanity\'s place in the cosmos. Sagan takes readers on a journey from the Big Bang to the search for extraterrestrial life, combining scientific rigor with poetic prose to convey the beauty and significance of scientific discovery and our cosmic origins.',
    available: true,
    location: 'Non-Fiction N3'
  },
  {
    id: '35',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    isbn: '9780199291151',
    category: 'Science',
    summary: 'Richard Dawkins, an evolutionary biologist, wrote this book to present a gene-centered view of evolution that revolutionized how we understand natural selection. His intention was to shift the focus from individual organisms to genes as the fundamental units of selection. Dawkins introduced the concept of memes and argued that organisms are "survival machines" for genes, providing a powerful framework for understanding altruism, cooperation, and the evolution of complex behaviors.',
    available: false,
    location: 'Non-Fiction N4'
  },
  {
    id: '36',
    title: 'A Short History of Nearly Everything',
    author: 'Bill Bryson',
    isbn: '9780767908324',
    category: 'Science',
    summary: 'Bill Bryson, a popular travel writer, wrote this book to satisfy his own curiosity about how scientists discovered what they know about the world. His intention was to make science entertaining and accessible while covering everything from the Big Bang to the rise of civilization. Bryson combines humor with fascinating stories of scientific discovery, eccentric researchers, and the often accidental nature of breakthroughs, creating a comprehensive yet readable overview of scientific knowledge.',
    available: true,
    location: 'Non-Fiction N5'
  },
  {
    id: '37',
    title: 'How to Read a Book',
    author: 'Mortimer Adler',
    isbn: '9780671212094',
    category: 'Academic',
    summary: 'Mortimer Adler, a philosopher and educator, wrote this classic guide to promote the art of intelligent reading and critical thinking. His intention was to teach readers how to engage deeply with texts and extract maximum understanding and insight. Adler outlines four levels of reading - elementary, inspectional, analytical, and syntopical - providing a systematic approach to reading nonfiction that helps readers become more active, critical, and thoughtful consumers of ideas.',
    available: false,
    location: 'Academic Section A1'
  },
  {
    id: '38',
    title: 'The Elements of Style',
    author: 'Strunk & White',
    isbn: '9780205309023',
    category: 'Academic',
    summary: 'William Strunk Jr., a Cornell English professor, originally wrote this style guide for his students, and E.B. White later revised and expanded it for a wider audience. Their intention was to provide clear, concise rules for effective writing that emphasize clarity and simplicity. The book\'s famous injunction "Omit needless words" reflects its philosophy that good writing is clean, precise, and direct, making it an essential reference for writers, editors, and students.',
    available: true,
    location: 'Academic Section A2'
  },
  {
    id: '39',
    title: 'On Writing Well',
    author: 'William Zinsser',
    isbn: '9780060891541',
    category: 'Academic',
    summary: 'William Zinsser, a veteran writer and teacher, wrote this guide to help writers improve their craft by focusing on clarity, simplicity, and humanity. His intention was to demystify the writing process and show that good writing is essentially clear thinking made visible. Zinsser covers various forms of nonfiction writing while emphasizing the importance of rewriting, finding your voice, and connecting with readers through authentic, engaging prose.',
    available: true,
    location: 'Academic Section A3'
  },
  {
    id: '40',
    title: 'A Mind for Numbers',
    author: 'Barbara Oakley',
    isbn: '9780399165245',
    category: 'Academic',
    summary: 'Barbara Oakley, a professor of engineering who struggled with math as a child, wrote this book to help others overcome math anxiety and develop effective learning strategies. Her intention was to make learning math and science accessible by explaining how the brain learns and processes abstract concepts. Oakley combines neuroscience research with practical techniques, showing how anyone can develop mathematical thinking skills and excel in technical subjects through focused and diffuse modes of thinking.',
    available: false,
    location: 'Academic Section A4'
  },
  {
    id: '41',
    title: 'Deep Work',
    author: 'Cal Newport',
    isbn: '9781455586691',
    category: 'Academic',
    summary: 'Cal Newport, a computer science professor and productivity expert, wrote this book to argue for the importance of focused, distraction-free work in an increasingly distracted world. His intention was to provide a framework for developing the ability to concentrate without distraction on cognitively demanding tasks. Newport presents strategies for cultivating deep work habits and explains why this skill is becoming increasingly valuable and rare in our economy, offering a path to professional success and personal fulfillment.',
    available: true,
    location: 'Academic Section A5'
  },
  {
    id: '42',
    title: 'The Feynman Lectures on Physics',
    author: 'Richard Feynman',
    isbn: '9780465023820',
    category: 'Academic',
    summary: 'Richard Feynman, a Nobel Prize-winning physicist, delivered these lectures at Caltech with the intention of making physics accessible and exciting for undergraduate students. His goal was to present fundamental physics concepts with clarity, enthusiasm, and deep insight rather than mathematical rigor. The lectures cover everything from basic mechanics to quantum mechanics, showcasing Feynman\'s unique ability to explain complex ideas with simple examples and his infectious curiosity about the natural world.',
    available: true,
    location: 'Academic Section B1'
  },
  {
    id: '43',
    title: 'Introduction to Algorithms',
    author: 'Cormen, Leiserson, Rivest, Stein',
    isbn: '9780262033848',
    category: 'Academic',
    summary: 'Thomas Cormen, Charles Leiserson, Ronald Rivest, and Clifford Stein wrote this comprehensive textbook to provide a thorough introduction to the design and analysis of algorithms. Their intention was to create both an excellent teaching tool and a valuable reference for computer science professionals. The book covers a wide range of algorithms with mathematical rigor while maintaining accessibility, explaining not just how algorithms work but why they work and how to analyze their efficiency, making it the standard algorithm textbook worldwide.',
    available: false,
    location: 'Academic Section B2'
  },
  {
    id: '44',
    title: 'The Structure of Scientific Revolutions',
    author: 'Thomas Kuhn',
    isbn: '9780226458083',
    category: 'Academic',
    summary: 'Thomas Kuhn, a physicist and historian of science, wrote this revolutionary book to challenge the traditional view of scientific progress as linear and cumulative. His intention was to show that science advances through periodic revolutions he called "paradigm shifts" rather than gradual accumulation of knowledge. Kuhn introduced concepts like normal science, crisis, and paradigm shift, fundamentally changing how we understand the nature of scientific discovery and the sociology of scientific communities.',
    available: true,
    location: 'Academic Section B3'
  }
];

export const INITIAL_POLICIES: Policy[] = [
  {
    id: 'p1',
    title: 'General Borrowing Rules',
    content: 'All patrons can borrow up to 5 books at a time for a period of 14 days. Renewals are possible if no one else has reserved the item. Fines are ₹20 per day per item for late returns. Reference books cannot be checked out.',
    summary: 'Max 5 books, 14 days, ₹20/day fine, no reference check-outs.'
  },
  {
    id: 'p2',
    title: 'Membership & Identification',
    content: 'To apply for a library card, you must provide a valid state ID and proof of residence. Minors under 18 require a parent or guardian signature. Cards must be presented at checkout.',
    summary: 'Needs ID & residence proof. Minors need parent signature.'
  }
];

export const SYSTEM_PROMPT = `
You are LibraBot, a highly efficient library assistant. 
Your goal is to help patrons find books and understand library policies based ONLY on the provided context.
Keep your answers concise and helpful. 
If a user asks about a book not in the catalog, state that we don't currently have it but can look into inter-library loans.
Always use the "compressed" policy summaries for quick answers, only expanding if asked.
`;

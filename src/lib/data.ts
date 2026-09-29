export interface ScheduleInfo {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface OfficeHours {
  weekdays: string;
  weekends: string;
  plantao: string;
}

export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  lawyerName: string;
  academicTitle: string;
  secondSpecialization: string;
  sinceYear: string;
  slogan: string;
  tagline: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  cityState: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl: string;
  linkedinUrl: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: ScheduleInfo;
  hours: OfficeHours;
}

export interface LawyerProfile {
  name: string;
  role: string;
  academicSpecialization: string;
  secondSpecialization: string;
  sinceYear: string;
  experience: string;
  graduation: string;
  bio: string[];
  personalNotes: string[];
  careerHighlights: string[];
  highlights: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  highlightText: string;
  shortDesc: string;
  description: string;
  coverageList: string[];
  iconName: string;
  highlights: string[];
}

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
}

export interface WorkStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Nuria Bedin Advocacia e Consultoria Jurídica",
  shortName: "Nuria Bedin Advocacia",
  lawyer: "Dra. Nuria Bedin",
  lawyerName: "Dra. Nuria Bedin",
  academicTitle: "Especialista em Direito do Trabalho e Previdenciário",
  secondSpecialization: "Consultoria Jurídica Estratégica e Atendimento Humanizado",
  sinceYear: "2009",
  slogan: "Advocacia Trabalhista e Previdenciária focada na defesa combativa, estratégica e humanizada dos seus direitos.",
  tagline: "Defesa combativa e humanizada dos seus direitos trabalhistas e previdenciários.",
  address: "Atendimento presencial sob agendamento em Maringá/PR e consultoria digital estratégica para todo o Brasil e exterior",
  addressShort: "Maringá - PR",
  city: "Maringá",
  state: "PR",
  cityState: "Maringá - PR",
  phone: "(44) 99991-5612",
  phoneRaw: "5544999915612",
  whatsappNumber: "(44) 99991-5612",
  whatsappUrl: "https://wa.me/5544999915612",
  email: "",
  instagramUrl: "https://www.instagram.com/nuriabedin",
  instagramHandle: "@nuriabedin",
  facebookUrl: "",
  linkedinUrl: "",
  mapsDirectionsUrl: "",
  mapsEmbedUrl: "",
  schedule: {
    weekdays: "Segunda a Sexta: 08:00 às 18:00",
    saturday: "Sábado: 08:00 às 13:00",
    sunday: "Domingo: 08:00 às 18:00",
  },
  hours: {
    weekdays: "08:00 às 18:00",
    weekends: "Sábados das 08:00 às 13:00 • Domingos das 08:00 às 18:00",
    plantao: "Atendimento ágil via WhatsApp durante o expediente",
  },
};

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Dra. Nuria Bedin",
  role: "Advogada Titular & Fundadora",
  academicSpecialization: "Direito do Trabalho e Relações de Emprego",
  secondSpecialization: "Direito Previdenciário e Benefícios do INSS",
  sinceYear: "2009",
  experience: "Atuação combativa e estratégica desde 2009",
  graduation: "Bacharel em Direito pela UNOPAR - Universidade Norte do Paraná",
  bio: [
    "Dra. Nuria Bedin construiu sua trajetória profissional na advocacia guiada por um propósito inegociável: lutar com bravura e sensibilidade pelas pessoas que mais necessitam do amparo da Justiça.",
    "Veio para Maringá/PR para cursar a faculdade de Direito e a cidade virou o berço de suas raízes, onde construiu sua carreira e sua família. É graduada em Direito pela UNOPAR (Universidade Norte do Paraná) e dedica sua atuação técnica exclusivamente às áreas Trabalhista e Previdenciária.",
    "Com perfil combativo por natureza, defende cada cliente e cada direito com a mesma dedicação, energia e zelo com que defenderia alguém da sua própria família. Para a Dra. Nuria, o exercício da advocacia vai muito além de peças e processos: é uma missão de acolhimento humano, fé, coragem e compromisso ético.",
    "Nosso escritório combina a solidez do atendimento presencial em Maringá com uma moderna infraestrutura digital para atender clientes em todo o Paraná e no Brasil, assegurando comunicação transparente, ágil e descomplicada.",
  ],
  personalNotes: [
    "Fé inabalável em Deus como centro e guia de cada passo profissional",
    "Defesa combativa e incansável inspirada no cuidado com a própria família",
    "Raízes consolidadas na comunidade e no meio jurídico de Maringá/PR",
    "Atendimento humanizado com escuta atenta e linguagem acessível",
  ],
  careerHighlights: [
    "Atuação jurídica especializada e contínua desde 2009",
    "Formação em Direito pela UNOPAR - Universidade Norte do Paraná",
    "Foco técnico e combativo em Direito Trabalhista e Previdenciário",
    "Avaliação 5.0 estrelas no Google com reconhecimento unânime de clientes",
  ],
  highlights: [
    "Rescisões indiretas, horas extras e combate a fraudes trabalhistas",
    "Concessão e restabelecimento de auxílio-doença, BPC/LOAS e aposentadorias",
    "Atendimento humanizado, ético e transparente focado em soluções ágeis",
    "Estrutura moderna de consultoria jurídica presencial e digital",
  ],
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "direito-trabalhista",
    title: "Direito do Trabalho & Rescisões",
    subtitle: "Defesa dos Direitos do Trabalhador",
    highlightText: "Atuação combatente na recuperação de verbas, horas extras e combate a abusos patronais.",
    shortDesc:
      "Atuação combativa na defesa dos direitos do trabalhador, combate a fraudes de PJ, horas extras não pagas, assédio moral e rescisão indireta.",
    description:
      "Defendemos trabalhadores em conflitos decorrentes de vínculos formais e informais, assegurando a justa reparação pecuniária por jornadas abusivas, ambientes insalubres e rupturas contratuais fraudulentas.",
    coverageList: [
      "Horas extras, intervalos suprimidos e banco de horas irregular",
      "Rescisão indireta por falta grave do empregador e assédio moral",
      "Reconhecimento de vínculo empregatício em fraudes de 'pejotização'",
      "Adicionais de insalubridade, periculosidade e equiparação salarial",
      "Reversão de justa causa arbitrária e liberação de FGTS e seguro-desemprego",
    ],
    iconName: "Briefcase",
    highlights: [
      "Cálculos rescisórios precisos",
      "Combate rigoroso a assédio",
      "Recuperação de verbas retidas",
    ],
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & INSS",
    subtitle: "Aposentadorias e Benefícios do INSS",
    highlightText: "Concessão, restabelecimento e revisão judicial de aposentadorias e benefícios por incapacidade.",
    shortDesc:
      "Orientação e atuação judicial contra negativas injustas do INSS para concessão de auxílio-doença, BPC/LOAS, aposentadorias e pensões.",
    description:
      "Atuamos perante o INSS e na Justiça Federal para reverter indeferimentos indevidos, restabelecer benefícios cessados prematuramente e garantir o melhor valor de aposentadoria ao segurado.",
    coverageList: [
      "Auxílio-doença (incapacidade temporária) e aposentadoria por invalidez",
      "Aposentadoria por tempo de contribuição, idade e regras de transição da EC 103/2019",
      "Aposentadoria especial para trabalhadores expostos a agentes nocivos (PPP/LTCAT)",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos e pessoas com deficiência",
      "Pensão por morte, auxílio-reclusão e recursos administrativos no CRPS",
    ],
    iconName: "FileText",
    highlights: [
      "Defesa contra perícias desfavoráveis",
      "Revisões de cálculo de RMI",
      "Agilidade perante o INSS",
    ],
  },
  {
    id: "acidentes-doencas-trabalho",
    title: "Acidentes & Doenças do Trabalho",
    subtitle: "Reparação e Estabilidade Ocupacional",
    highlightText: "Proteção jurídica integral para quem adoeceu ou se acidentou no exercício profissional.",
    shortDesc:
      "Acompanhamento em casos de burnout, LER/DORT, acidentes típicos e de trajeto, garantindo estabilidade de 12 meses e indenizações cíveis.",
    description:
      "O adoecimento decorrente do trabalho gera direitos imediatos tanto na esfera trabalhista quanto previdenciária. Garantimos o enquadramento acidentário B91, estabilidade legal e reparações por danos morais e materiais.",
    coverageList: [
      "Estabilidade provisória de 12 meses após a alta do auxílio-doença acidentário",
      "Indenizações por danos morais, materiais e lucros cessantes decorrentes de acidentes",
      "Auxílio-acidente: benefício indenizatório mensal de 50% cumulável com salário",
      "Reconhecimento de nexo causal para Burnout, depressão e doenças osteomusculares",
      "Pensão mensal vitalícia proporcional à redução permanente da capacidade laboral",
    ],
    iconName: "ShieldAlert",
    highlights: [
      "Auxílio-acidente vitalício",
      "Estabilidade provisória garantida",
      "Indenizações cíveis justas",
    ],
  },
  {
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário & Cálculos",
    subtitle: "Estratégia para a Melhor Aposentadoria",
    highlightText: "Estudo aprofundado do histórico de contribuições para maximizar o valor do benefício futuro.",
    shortDesc:
      "Simulações avançadas pós-Reforma da Previdência, descarte de contribuições desfavoráveis e correção de falhas no CNIS.",
    description:
      "Evite perdas financeiras irreparáveis ao se aposentar. O planejamento previdenciário analisa todas as regras de transição, identifica tempo especial a converter e corrige pendências documentais antes do pedido formal.",
    coverageList: [
      "Diagnóstico completo de todas as regras de transição da Reforma da Previdência",
      "Descarte estratégico de salários prejudiciais para elevar a média da aposentadoria",
      "Averbação e conversão de períodos de trabalho rural, militar e sob insalubridade",
      "Retificação e acerto de pendências cadastrais e vínculos extemporâneos no CNIS",
      "Parecer técnico com data ideal de requerimento e projeção financeira detalhada",
    ],
    iconName: "Calculator",
    highlights: [
      "Maximização do valor do benefício",
      "Correção prévia de pendências",
      "Parecer técnico embasado",
    ],
  },
];

export const WORK_STEPS: WorkStep[] = [
  {
    number: "01",
    title: "Contato Ágil no WhatsApp",
    subtitle: "Escuta Atenta e Empática",
    description:
      "Você relata sua situação jurídica diretamente à nossa equipe pelo WhatsApp com absoluto sigilo, acolhimento humano e sem termos complicados.",
    iconName: "MessageCircle",
  },
  {
    number: "02",
    title: "Análise Documental Rigorosa",
    subtitle: "Auditoria Técnica e de Cálculos",
    description:
      "Examinamos carteira de trabalho, contracheques, comunicações internas, extratos do CNIS, laudos médicos ou documentos rescisórios para dimensionar seus direitos.",
    iconName: "Search",
  },
  {
    number: "03",
    title: "Plano de Ação Estratégico",
    subtitle: "Definição do Rumo Jurídico",
    description:
      "Apresentamos a rota mais rápida e segura, seja pela via administrativa junto ao INSS ou por meio de ação judicial trabalhista combativa.",
    iconName: "FileCheck",
  },
  {
    number: "04",
    title: "Acompanhamento Transparente",
    subtitle: "Informação Clara em Cada Fase",
    description:
      "Você é informado em tempo real sobre cada andamento processual, decisões e audiências, com suporte permanente do início ao resultado final.",
    iconName: "ShieldCheck",
  },
];

export const EDUCATIONAL_TOPICS: EducationalArticle[] = [
  {
    id: "rescisao-indireta-quando-cabe",
    number: "01",
    title: "Rescisão Indireta: Quando o Trabalhador Pode 'Demitir' a Empresa",
    category: "Direito Trabalhista",
    readTime: "4 min de leitura",
    summary:
      "Entenda em quais situações o descumprimento grave de obrigações pelo empregador permite sair do emprego recebendo todos os direitos de uma demissão sem justa causa.",
    content: [
      "A rescisão indireta é prevista no artigo 483 da CLT e equivale à 'justa causa cometida pelo empregador'. Ela ocorre quando a empresa descumpre gravemente suas obrigações legais ou contratuais com o trabalhador.",
      "As hipóteses mais frequentes na Justiça do Trabalho incluem atrasos reiterados no pagamento de salários, não recolhimento contínuo do FGTS, exigência de atividades perigosas sem equipamentos de proteção, desvio grosseiro de função e assédio moral reiterado.",
      "Ao ter a rescisão indireta reconhecida pela Justiça, o empregado tem direito a todas as verbas rescisórias idênticas às de uma demissão sem justa causa: aviso prévio indenizado, multa de 40% do FGTS, saque integral dos depósitos fundiários e liberação das guias de seguro-desemprego.",
      "Para resguardar seu direito, é essencial reunir provas documentais (extratos de FGTS da Caixa, holerites, e-mails, mensagens de WhatsApp e testemunhas) antes de tomar qualquer decisão precipitada.",
    ],
    oabDisclaimer:
      "Artigo de caráter estritamente educativo e informativo, em conformidade com o Provimento nº 205/2021 da OAB.",
  },
  {
    id: "auxilio-doenca-alta-programada",
    number: "02",
    title: "Auxílio-Doença e a 'Alta Programada' do INSS: O Que Fazer se Ainda Estiver Incapaz",
    category: "Direito Previdenciário",
    readTime: "5 min de leitura",
    summary:
      "Descubra as providências legais quando o perito do INSS cessa o benefício por incapacidade temporária mesmo com o segurado sem condições de retornar ao trabalho.",
    content: [
      "A chamada 'alta programada' é um mecanismo em que o INSS fixa previamente uma data estimada para a cessação do benefício de auxílio-doença, independentemente de uma nova perícia presencial comprovar a cura do segurado.",
      "Muitos trabalhadores recebem a notificação de encerramento do benefício mesmo permanecendo com dores, limitações motoras, sequelas cirúrgicas ou quadros psiquiátricos graves diagnosticados por seus médicos assistentes.",
      "O segurado tem o direito de protocolar o Pedido de Prorrogação nos 15 dias anteriores à data de cessação. Caso o pedido seja indeferido na esfera administrativa, é plenamente cabível o ajuizamento de Ação Judicial perante a Justiça Federal.",
      "Na via judicial, a perícia é realizada por um médico perito nomeado pelo juiz, isento e com conhecimento técnico específico sobre a patologia apresentada, garantindo uma avaliação imparcial da incapacidade laboral.",
    ],
    oabDisclaimer:
      "Conteúdo didático de utilidade pública, nos termos do Código de Ética e Disciplina da OAB.",
  },
  {
    id: "fraude-pejotizacao-trabalhador",
    number: "03",
    title: "Fraude da 'Pejotização': Direitos de Quem Trabalha Como Empregado Mas Recebe Como PJ",
    category: "Direito Trabalhista",
    readTime: "4 min de leitura",
    summary:
      "Saiba como a Justiça do Trabalho identifica a falsa contratação como pessoa jurídica e garante o pagamento retroativo de 13º, férias, FGTS e horas extras.",
    content: [
      "A exigência de abertura de CNPJ (MEI ou Microempresa) para contratação de profissionais tem sido amplamente utilizada para mascarar verdadeiras relações de emprego e sonegar encargos trabalhistas fundamentais.",
      "No Direito do Trabalho vigora o Princípio da Primazia da Realidade: o que realmente importa são os fatos do dia a dia, e não o título colocado no contrato de prestação de serviços assinado entre as partes.",
      "Se no cotidiano o profissional cumpre horário determinado, recebe ordens diretas de supervisores (subordinação), não pode se fazer substituir por terceiros (pessoalidade) e trabalha com habitualidade (não eventualidade), o vínculo empregatício é configurado.",
      "Reconhecido o vínculo em juízo, o trabalhador recebe retroativamente todas as parcelas não pagas durante o período contratual: 13º salários, férias acrescidas de 1/3, depósitos de FGTS com multa rescisória e adicionais cabíveis.",
    ],
    oabDisclaimer:
      "Material exclusivamente informativo em estrita consonância com o Provimento nº 205/2021 da OAB.",
  },
  {
    id: "auxilio-acidente-como-funciona",
    number: "04",
    title: "Auxílio-Acidente: O Benefício do INSS que Você Recebe Sem Deixar de Trabalhar",
    category: "Direito Previdenciário",
    readTime: "4 min de leitura",
    summary:
      "Entenda como funciona o benefício indenizatório pago mensalmente pelo INSS ao trabalhador que sofreu acidente e ficou com sequela que reduz sua capacidade.",
    content: [
      "Diferente do auxílio-doença (que substitui o salário enquanto a pessoa está afastada), o Auxílio-Acidente possui caráter puramente indenizatório. Ele é concedido após a consolidação de lesões decorrentes de qualquer acidente ou doença profissional.",
      "O trabalhador que recebe auxílio-acidente pode continuar trabalhando com carteira assinada ou como autônomo normalmente, acumulando o benefício com seu salário mensal até a data de sua aposentadoria.",
      "O valor corresponde a 50% do salário de benefício do segurado e não impede promoções, novo emprego ou evolução profissional. Ele visa compensar o esforço extra exigido pela sequela consolidada.",
      "Mesmo acidentes domésticos, de trânsito ou no lazer podem gerar direito ao benefício, desde que comprovada a redução permanente da capacidade para a atividade que o segurado habitualmente exercia.",
    ],
    oabDisclaimer:
      "Orientações didáticas de esclarecimento ao cidadão, conforme Provimento nº 205/2021 do Conselho Federal da OAB.",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Marcia Reichert",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Profissional extremamente capacitada, atenciosa e dinâmica. Nos acompanhou em todo o processo, com zelo e dedicação. É de uma competência e conhecimento do direito, digno de louvor!! Uma Profissional que se dedica a sua profissão e trata com muito respeito e dignidade seus clientes.",
    source: "Google Reviews",
  },
  {
    id: "rev-2",
    author: "Fernanda Kneubl",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Ao minha advogada, que me aconselhou com honestidade e profissionalismo, minha eterna gratidão! Que bom que pude contar com você para me ajudar nesse momento! Ela é uma ótima pessoa e uma ótima advogada também e sabe ajudar as pessoas no que precisam.",
    source: "Google Reviews",
  },
  {
    id: "rev-3",
    author: "natiely duarte",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Quero agradecer pelo seu excelente trabalho. Sua dedicação e competência fez toda a diferença no meu caso. Sou muito grata!",
    source: "Google Reviews",
  },
  {
    id: "rev-4",
    author: "Diego Gomes da Silva",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Muito eficaz, gosto muito do atendimento. A doutora Nuria Bedin sempre tira as minhas dúvidas e ainda traz soluções extraordinárias, muito bom mesmo.",
    source: "Google Reviews",
  },
  {
    id: "rev-5",
    author: "Gizeli Albertassi",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Contratei o trabalho da Dra Nuria, fui muito bem auxiliada. Rápida, atenciosa, super indico! Excelente profissional.",
    source: "Google Reviews",
  },
  {
    id: "rev-6",
    author: "daniel barbosa",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Uma excelente profissional, dá uma atenção e tanto para os clientes e sempre mantém informado, parabéns!",
    source: "Google Reviews",
  },
  {
    id: "rev-7",
    author: "DANIELLE BEDIN",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente Advogada, muito profissional e Ética. SUPER INDICO. GRATIDÃO DOUTORA NURIA.",
    source: "Google Reviews",
  },
  {
    id: "rev-8",
    author: "Juliana Silva",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Atendimento rápido, humanizado... muito atenciosa.... Excelente profissional!",
    source: "Google Reviews",
  },
  {
    id: "rev-9",
    author: "Marcos Jose",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Uma profissional muito competente, capacitada com amplo conhecimento na sua área. Super indico, uma profissional espetacular.",
    source: "Google Reviews",
  },
  {
    id: "rev-10",
    author: "Priscila Beltran Ferreira",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Profissional competente e de responsabilidade. Pontual e com profundo conhecimento no que faz. Super indico.",
    source: "Google Reviews",
  },
  {
    id: "rev-11",
    author: "Marco Antonio Banagouro",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Ótima profissional, prestativa e experiente! Atendimento atencioso e focado em resultados para o cliente.",
    source: "Google Reviews",
  },
  {
    id: "rev-12",
    author: "Jeniffer Estevan - Psicopedagoga",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente Advogada, minha causa foi ganha com sucesso! Gratidão e recomendo com certeza.",
    source: "Google Reviews",
  },
  {
    id: "rev-13",
    author: "Andrea Rodrigues Melo Guidastre",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Dra Nuria muito atenciosa, assertiva e estratégica, meu processo foi favorável graças a expertise da Dra.",
    source: "Google Reviews",
  },
  {
    id: "rev-14",
    author: "Claudia Taiatela",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Presta serviços para mim com excelência no seu trabalho! Super recomendo!",
    source: "Google Reviews",
  },
  {
    id: "rev-15",
    author: "duda pelada",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Fui muito bem atendida, muito explicativa, facilitando meu entendimento.....super indico...",
    source: "Google Reviews",
  },
  {
    id: "rev-16",
    author: "Flavia Ghizo",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Dra Nuria é uma excelente advogada, muito competente e simpática.",
    source: "Google Reviews",
  },
  {
    id: "rev-17",
    author: "Carvalho Barbosa",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Em poucas palavras: muito prestativa, muito profissional, resolveram os problemas em pouco tempo.",
    source: "Google Reviews",
  },
  {
    id: "rev-18",
    author: "Diego Patrik",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional e muito atenciosa com seus clientes.",
    source: "Google Reviews",
  },
  {
    id: "rev-19",
    author: "Andressa Guandalini",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional! Recomendo e indico com toda confiança.",
    source: "Google Reviews",
  },
  {
    id: "rev-20",
    author: "Rodrigo Marques",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Ótima advogada, informação transmitida de forma clara e objetiva.",
    source: "Google Reviews",
  },
  {
    id: "rev-21",
    author: "Jean Paulo Carvalho",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Melhor advogada de Maringá, atenciosa e honesta.",
    source: "Google Reviews",
  },
  {
    id: "rev-22",
    author: "Sabrina Almeida",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional, atenciosa, prestativa e dedicada.",
    source: "Google Reviews",
  },
  {
    id: "rev-23",
    author: "Taciana Campos",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente advogada, séria, honesta e muito competente!",
    source: "Google Reviews",
  },
  {
    id: "rev-24",
    author: "Moura MOURA",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional, atendimento ótimo.",
    source: "Google Reviews",
  },
  {
    id: "rev-25",
    author: "atalaia play",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Melhor advogada que pude conhecer e trabalhar junto.",
    source: "Google Reviews",
  },
  {
    id: "rev-26",
    author: "Rosana Frares",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente profissional, muito competente.",
    source: "Google Reviews",
  },
  {
    id: "rev-27",
    author: "André De Oliveira",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Excelente, uma profissional incrível!",
    source: "Google Reviews",
  },
  {
    id: "rev-28",
    author: "vagner Pedroso",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Ótimas profissionais. O melhor escritório de Maringá.",
    source: "Google Reviews",
  },
  {
    id: "rev-29",
    author: "claudia cavalcanti",
    rating: 5,
    timeAgo: "10 meses atrás",
    comment:
      "Profissional atenciosa, facilita a comunicação com o cliente.",
    source: "Google Reviews",
  },
];

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "trabalhista",
    label: "Direito do Trabalho",
    items: [
      {
        id: "faq-trab-1",
        question: "Fui obrigado a abrir MEI ou CNPJ para trabalhar. Posso cobrar direitos trabalhistas?",
        answer:
          "Sim. Se você cumpria ordens, tinha horário regular e dependência da empresa, a Justiça do Trabalho considera essa prática como pejotização fraudulenta (Princípio da Primazia da Realidade). É plenamente possível requerer o reconhecimento de vínculo empregatício em juízo e cobrar retroativamente 13º salário, férias com 1/3, depósitos de FGTS com multa de 40%, horas extras e demais verbas.",
      },
      {
        id: "faq-trab-2",
        question: "A empresa não deposita meu FGTS e atrasa salários. Posso pedir demissão e receber meus direitos?",
        answer:
          "Sim, por meio da Ação de Rescisão Indireta (art. 483 da CLT). O não recolhimento contínuo do FGTS e o atraso reiterado de salários configuram falta grave do empregador, permitindo ao trabalhador romper o contrato recebendo todas as verbas rescisórias idênticas às de uma demissão sem justa causa.",
      },
      {
        id: "faq-trab-3",
        question: "Trabalho além da jornada e não recebo horas extras nem compensação. Como comprovar?",
        answer:
          "O direito às horas extras pode ser demonstrado por múltiplos meios de prova: mensagens de WhatsApp fora do expediente, e-mails enviados à noite ou aos finais de semana, registros de login/logout em sistemas, relatórios de rastreadores veiculares e depoimento de testemunhas que presenciavam a rotina.",
      },
      {
        id: "faq-trab-4",
        question: "Fui demitido por justa causa injustamente. É possível anular essa penalidade?",
        answer:
          "Sim. A justa causa é a penalidade máxima da CLT e exige prova cabal, proporcionalidade e imediaticidade por parte da empresa. Casos de punições desmedidas ou infundadas podem ser revertidos na Justiça do Trabalho, com a condenação do empregador ao pagamento integral das verbas rescisórias.",
      },
    ],
  },
  {
    id: "previdenciario",
    label: "Direito Previdenciário",
    items: [
      {
        id: "faq-prev-1",
        question: "O perito do INSS cortou meu auxílio-doença, mas meu médico disse que ainda não posso trabalhar. O que fazer?",
        answer:
          "Você não é obrigado a retornar ao trabalho doente. É possível ingressar com Pedido de Prorrogação no INSS ou, preferencialmente, com uma Ação Judicial contra o INSS na Justiça Federal. Na ação judicial, a perícia é realizada por um perito médico nomeado pelo juiz, especializado no seu problema de saúde.",
      },
      {
        id: "faq-prev-2",
        question: "O que é o BPC/LOAS e quem tem direito a esse benefício de 1 salário mínimo?",
        answer:
          "O BPC/LOAS é um benefício assistencial pago mensalmente pelo governo a idosos a partir de 65 anos ou a pessoas de qualquer idade com deficiência ou doenças graves de longo prazo, desde que comprovada a vulnerabilidade socioeconômica da família, sem exigir contribuições prévias ao INSS.",
      },
      {
        id: "faq-prev-3",
        question: "Sofri um acidente e fiquei com sequelas que diminuíram meu rendimento. Tenho direito ao Auxílio-Acidente?",
        answer:
          "Sim. O Auxílio-Acidente é um benefício indenizatório pago pelo INSS no valor de 50% da média contributiva. Você pode continuar trabalhando de carteira assinada normalmente e acumulando esse benefício com o seu salário até a data da sua aposentadoria.",
      },
      {
        id: "faq-prev-4",
        question: "Por que vale a pena fazer um Planejamento Previdenciário antes de pedir a aposentadoria?",
        answer:
          "Após a Reforma da Previdência (EC 103/2019), foram criadas diversas regras de transição simultâneas. O planejamento identifica em qual regra você alcançará o maior valor mensal possível, simula o descarte de salários prejudiciais e corrige erros do CNIS antes de qualquer protocolo definitivo.",
      },
    ],
  },
];

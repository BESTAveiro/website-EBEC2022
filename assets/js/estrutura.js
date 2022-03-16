$(document).ready(function () {

    var portuguese = {
        navbar: {
            img: "assets/img/logos/roldana-gif.gif",
            img2: "assets/img/logos/best-aveiro-color.png",
            lingua: "EN",
            page: "index-en.html",
            dropdowns: [
                {
                    title: "Sobre a EBEC",
                    menu: [
                        {nome: "EBEC Aveiro", ref: "#ebec"},
                        {nome: "Edições Anteriores", ref: '#ebecAnt'},
                        {nome: "Programa", ref: '#programa'},
                        {nome: "Inscrição", ref: '#apply'},
                        {nome: "Testemunhos", ref: '#testemunhos'},
                        {nome: "Júri", ref: "#juri"},
                    ]
                },
                {
                    title: "FAQ&Outros",
                    menu: [
                        {nome: "FAQ", ref: "#faqs"},
                        {nome: "A Equipa", ref: "#equipa"},
                        {nome: "Parceiros", ref: "#partners"},
                        {nome: "Torne-se nosso Parceiro", ref: "#parceria"},
                        {nome: "Contactos", ref: "#contactos"}]
                },
                {
                    title: "Sobre o BEST",
                    menu: [
                        {nome: "Sobre o BEST Aveiro", ref: "#best"},
                        {nome: "Informações", ref: "#info"}]
                }
            ]
            

        },
        entrada: {
            logo: "assets/img/logos/ebec-aveiro-color.png",
            title: "14, 15, 16, 17 e 20 de março<br class='hidden-xs'> de 2022"
        },
        ebecAveiro: {
            sectionHeading: "EBEC Aveiro",
            icones: [
                {title: "Ronda Local", classe: "fa-map-pin"},
                {title: "Modalidades", classe: "fa-tools"},
                //{title: "Formação", classe: "fa-chalkboard-teacher"},
                {title: "Ronda Ibérica", classe: "fa-award"},
            ],
            seccoes: {
                seccao1: {
                    ps: [
                        "É com prazer que o <b style='color:orange'>BEST Aveiro</b> organiza anualmente " +
                        "uma das 88 fases locais do projeto EBEC.",
                        "Com a próxima edição da competição a ocorrer em <b style='color:orange'>2022</b>, evento que tem vindo a contar com um " +
                        "grande número de participantes em todas as edições, consideramo-lo um dos eventos de maior destaque " +
                        "do BEST Aveiro. Direcionado aos alunos da Universidade de Aveiro, a EBEC Aveiro pretende ser um " +
                        "momento onde inovação, criatividade, desafio, energia, flexibilidade e espírito de equipa são postos em prática. ",
                        "Para mais informações consulta a secção FAQ ou contacta-nos."
                    ],
                    /*subscribe: "Inscreve-te já!",*/
                    img: "assets/img/event/ebec-aveiro.png"
                },
                seccao2: {
                    title: "Modalidades",
                    modalidades: [
                        {
                            title: "Case Study",
                            corpo: "Os participantes terão a oportunidade de resolver dois casos de estudo fornecidos por empresas, " +
                                "que deverão consistir num problema que poderá advir da necessidade da empresa em inovar ou " +
                                "otimizar processos. Cada um dos casos de estudo deverá estar preparado para corresponder a " +
                                "12 horas de prova, sendo entregue aos participantes no início da competição."
                        },
                        {
                            title: "Innovative Design",
                            corpo: "Os participantes combinam a sua criatividade e o seu conhecimento para desenvolver novos designs " +
                                "tecnológicos ou melhorar designs já existentes, num período de 24h. A sua apresentação deve ter " +
                                "em conta o impacto técnico, social, ambiental e económico no seu design."
                        }
                    ]
                },
                /*seccao3: [
                    "O BEST Aveiro volta a organizar mais uma edição dos <b class=\"text-orange\">BEST Training Days</b>, " +
                    "da EBEC Aveiro 2019, onde terás a oportunidade de desenvolver as tuas capacidades numa formação.",
                    "A formação decorrerá durante a tarde do dia <b class=\"text-orange\">15 de março</b> e é restrita " +
                    "aos participantes.",
                    "Todos os participantes do <b class=\"text-orange\">BEST Training Day</b> receberão um certificado " +
                    "de participação na formação."
                ],*/
                seccao3: [
                    "A EBEC Iberia é a final Regional da competição de Engenharia do BEST. ",
                    "A EBEC Iberia é uma Ronda Regional organizada por 7 Grupos Regionais do BEST. " +
                    "Na fase Regional irão competir os vencedores das diferentes rondas locais, de 5 Universidades Portuguesas 2 2 Universidades Espanholas. ",
                    "\nEste ano, a Ronda Regional ocorrerá entre 13 e 16 de maio e está a ser organizada pelo Grupo Local do BEST Porto",
                    "Para mais informações visita o <a class='text-orange' href='https://www.facebook.com/people/EBEC-Iberia/100077404624191/' " +
                    "target='_blank'>site</a>."
                ]
            }
        },
        edicoesAnteriores: {
            sectionHeading: "Edições Anteriores",
            videos: [
                "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F403975390199860%2F&show_text=false&width=560",
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F462307108435150%2F&width=500&show_text=false&height=500&appId",
                //"https://www.youtube.com/embed/osqsy-kDcU4"
            ]
        },
        programa: {
            title: "Programa",
            schedule: [
                {
                diaSemana: "Segunda", diaMes: "5 abril",
                eventos: [
                    {
                        hora: "21:00 - 23:00",
                        nome: "Formação Técnica",
                        local: "Online"
                    }
                ]
                },
                {
                    diaSemana: "Terça", diaMes: "6 abril",
                    eventos: [
                        {
                            hora: "21:00 - 23:00",
                            nome: "Formação Técnica",
                            local: "Online"
                        }
                    ]
                },
                {
                    diaSemana: "Quarta", diaMes: "7 abril",
                    eventos: [
                        {
                            hora: "14:00 - 16:00",
                            nome: "Tarde Empresarial Online",
                            local: "Online"
                        },
                        
                        {
                            hora: "21:00 - 23:00",
                            nome: "Formação Técnica",
                            local: "Online"
                        }
                    ]
                },
                {
                    diaSemana: "Quinta", diaMes: "8 abril",
                    eventos: [
                        {
                            hora: "16:30 - 18:30",
                            nome: "Formação Complementar",
                            local: "Online"
                        }
                    ]
                },
        
                {
                    diaSemana: "Sábado", diaMes: "10 abril",
                    eventos: [
                        {hora: "10:00 - 10:30", nome: "Check-in", local: "Online"},
                        {hora: "10:30 - 12:30", nome: "Sessão de Abertura e Apresentação das Empresas", local: "Online"},
                        {hora: "12:30 - 13:00", nome: "Fotos", local: "Online"},
                        {hora: "13:00 - 14:30", nome: "Almoço", local: "Online"},
                        {hora: "14:30 - 00:00", nome: "Competição", local: "Online"}
                    ]
                },
                {
                    diaSemana: "Domingo", diaMes: "11 abril",
                    eventos: [
                        {hora: "00:00 - 14:30", nome: "Competição", local: "Online"}
                    ]
                },
                {
                    diaSemana: "Quarta", diaMes: "14 abril",
                    eventos: [
                        {hora: "14:30 - 18:30", nome: "Apresentações", local: "Online"},
                        {hora: "18:45 - 19:30", nome: "Sessão de encerramento", local: "Online"}
                    ]
                }
            ]
            
        },
        apply: {
            sectionHeading: "Inscrição",
            sectionSubheading: "Nesta seccão indicar-te-emos os passos a seguir para efetuares a tua inscrição assim que esta estiver disponível", //"Para te inscreveres só precisas de efetuar os seguintes passos:",
            corpo: [
                " Lê o regulamento que se encontra <a href='Regulamento.pdf' target='_blank'>aqui</a> e as guidelines presentes <a href='Guidelines.pdf' target=\"_blank\">aqui</a>.",
                "Regista-te no site do BEST. Podes fazê-lo " +
                "<a target='_blank' href='https://www.best.eu.org/account/registration.jsp'>aqui</a>.",
                " Efetua a pré-inscrição na EBEC Aveiro 2022. Podes fazê-lo " +
                "<a href=\"https://www.best.eu.org/event/localDetails.jsp?event=m6c42vb\" target=\"_blank\">aqui</a>.",
                " Indica o nome da tua equipa. Todos os elementos da equipa devem indicar o mesmo nome.",
                " Preenche os dados pedidos. Todos os campos deverão ser preenchidos, à exceção do campo \"Motivation Letter\", " +
                "que é de preenchimento facultativo. Clica em 'Apply' para finalizares esta parte.",
                "Já tens equipa? Então terminaste a tua pré-inscrição para a EBEC Aveiro 2022. Brevemente irás " +
                "receber um e-mail de confirmação de inscrição com mais informação sobre o evento."
            ]
        },
        testimonials: {
            sectionHeading: "Testemunhos",
            sectionSubheading: "Professores e Participantes",
            testemunhos: [
                {
                    foto: "assets/img/testimonials/1.jpg",
                    corpo: " “Ser-se Coordenador da EBEC, é não ter um dia normal!”, isto já é uma máxima de todos os coordenadores " +
                        "deste evento e eu não poderia concordar mais com ela. É fascinante poder coordenar uma equipa durante " +
                        "6 meses com o intuito de organizar mais uma edição de um evento que já conta com uma década de " +
                        "existência. O peso da responsabilidade é sem dúvida enorme, mas tudo compensa no momento em que, " +
                        "chegado ao dia do evento, vemos o empenho e a paixão com que os participantes aderem e se envolvem " +
                        "neste projeto",
                    final: "João Valente<br>Coordenador da EBEC Challenge Aveiro 2018"
                },
                {
                    foto: "assets/img/testimonials/2.jpg",
                    corpo: " Já participei em 4 EBECs, em 2 anos consecutivos, e não " +
                        "me canso de participar. Acho que é uma experiência fantástica, que nos obriga a pensar fora da " +
                        "caixa, resolver desafios complicados mas interessantes, num ambiente competitivo mas amigável e " +
                        "espetacular entre todos. Foi graças à EBEC que já fiz amigos em Universidades diferentes e conheci " +
                        "pessoas fantásticas na minha própria universidade, criei laços mais fortes com os meus colegas " +
                        "de equipa e aprendi imenso ao investigar e experimentar soluções para os problemas propostos. Vale, " +
                        "sem dúvida, a pena ",
                    final: "Francisco Power<br>Vencedor da EBEC Challenge Aveiro 2018<br>Modalidade: Innovative Design"
                },
                {
                    foto: "assets/img/testimonials/3.jpg",
                    corpo: "Participar na EBEC foi uma experiência incrível, não só pela oportunidade de trabalhar em desafios " +
                        "interessantes, mas também pelos momentos de team building proporcionados e as excelentes conexões " +
                        "que tivemos a oportunidade de fazer. Trabalhar com os meus colegas foi incrivel! A melhor parte " +
                        "foi a forma como crescemos enquanto equipa depois da EBEC, e acho que isso é o que a EBEC oferece " +
                        "de mais valor ",
                    final: "Marcelo Manteigas<br>Vencedor da EBEC Challenge Aveiro 2018<br>Modalidade: Case Study"
                },
                {
                    foto: "assets/img/testimonials/5.jpg",
                    corpo: "A minha participação como júri na EBEC Aveiro tem sido um " +
                        "privilégio, enquanto docente universitária. Além da boa disposição sempre presente, tive o prazer " +
                        "de participar num evento bem organizado! Para além do rigor e empenho exigidos e demonstrados na " +
                        "resolução de questões técnico-científicas, fiquei, essencialmente, agradada com a qualidade humana " +
                        "dos participantes e da organização.<br>Na EBEC Aveiro tem-se conseguido fomentar o gosto pela liderança, " +
                        "mas também pelo espírito de equipa e de entreajuda. Os desafios multidisciplinares são vencidos " +
                        "por todos, as competências de cada participante sobressaem, permitindo criar valor acrescentado " +
                        "de forma quase natural e descontraída!<br>Numa época onde se criticam tanto os métodos de ensino " +
                        "atualmente utilizados, é, sem dúvida, uma lufada de ar fresco, conseguir perceber que algo se faz " +
                        "bem! Desejo, sinceramente, todo o sucesso para as edições futuras! ",
                    final: "Professora Mónica Oliveira<br>Departamento de Engenharia Mecânica<br>Universidade de Aveiro"
                },
                {
                    foto: "assets/img/testimonials/4.jpg",
                    corpo: " Na Universidade de Aveiro, as atividades do BEST Aveiro, " +
                        "nomeadamente no contexto das competições EBEC, têm sido claros exemplos de sucesso. Por um lado, " +
                        "mobilizam um número considerável de pessoas, entre participantes, colaboradores diversos e assistência. " +
                        "Por outro lado, apresentam-se como excelentes iniciativas no âmbito de ciências, tecnologia e " +
                        "engenharia. Os desafios propostos promovem um evidente crescimento dos envolvidos, em questões " +
                        "tão diversas quanto a aplicação prática de conhecimentos científicos ou a imaginação e criatividade " +
                        "exigidos.<br>Os participantes beneficiam ainda das exigências de um trabalho de equipa com objetivos " +
                        "bem definidos e um prazo muito apertado, assim como de um contacto direto com representantes de " +
                        "empresas e instituições de relevo.<br>Este é, aliás, um dos marcadores essenciais do mérito desta " +
                        "organização, sempre apoiada por diversas entidades que constatam o dinamismo e a qualidade do BEST " +
                        "Aveiro ",
                    final: "Professor João Oliveira<br>Departamento de Engenharia Mecânica<br>Universidade de Aveiro"
                }
            ]

        },
        faqs: {
            sectionHeading: "FAQ",
            sectionSubHeading: "Frequently Asked Questions",
            vetor: [
                {
                    p: "Posso inscrever-me na Tarde Empresarial Online sem me inscrever na EBEC?",
                    r: "Sim, podes! Para isso, basta preencher o formulário que se encontra <a href='https://docs.google.com/forms/d/e/1FAIpQLSfL-ZEYDy59C62rQrAxoomJ-_YIxZWWzDA2D-EuGfG69QUHCA/viewform' target='_blank'>aqui</a>."
                },
                {
                    p: "Quando tempo dura a competição?",
                    r: "Tens 24 horas para construir o teu protótipo, caso participes no <i>Innovative Design</i>, ou arranjar uma " +
                        "solução para o problema de <i>Case Study</i>. A apresentação do teu projeto será noutro dia a anunciar."
                },
                {
                    p: "Quantos membros pode ter uma equipa?",
                    r: "Cada equipa é constituída <u>sempre</u> por 4 elementos. No entanto, podes candidatar-te a título individual " +
                    "e serás posteriormente alocado a uma equipa."
                },
                {
                    p: "Quando é que saberemos qual é a prova que teremos que realizar?",
                    r: "A prova será apresentada na sessão de abertura, no entanto, o guião será apenas distribuído quando a " +
                        "competição se iniciar."
                },
                /*{
                    p: "Podemos sair da Universidade durante a prova?",
                    r: "Apenas serão permitidas deslocações externas ao local da prova exclusivamente com a aprovação do coordenador " +
                        "do evento."
                },*/
                {
                    p: "Que penalizações existem durante a prova para os participantes?",
                    r: "Caso se verifique o incumprimento das regras definidas para a competição, a equipa poderá ser penalizada " +
                        "na pontuação da sua prova ou desqualificada. A equipa poderá também estar sujeita à perda da caução."
                },
                {
                    p: "Paga-se para participar na competição?",
                    r: "Não, cada equipa terá apenas de deixar uma caução. O valor ser-te-á devolvido no final da competição, " +
                        "após a sessão de encerramento, caso se verifique o cumprimento de todas as regras. "
                },
                /*{
                    p: "Temos direito a alimentação durante o fim de semana da competição?",
                    r: "Sim, ao longo do fim de semana terás direito a todas as refeições enquanto estiveres a participar na " +
                        "prova. Terás também disponível um coffee break contínuo durante todo o fim-de-semana."
                },
                {
                    p: "É possível descansar durante a prova?",
                    r: "Sim, haverá uma \"sala de descanso\" para os participantes poderem descansar e até dormir se assim o " +
                        "desejarem. Estará também disponível uma sala de recreação (sala que irá contar com algumas atividades " +
                        "de lazer), para usar durante os intervalos das provas, para que os participantes descontraiam um pouco."
                },*/
                {
                    p: "Quem vai avaliar as provas?",
                    r: "O júri é composto por professores e elementos do BEST com experiência em competições, dependendo do " +
                        "teor da prova. Existe ainda a possibilidade de integrarem o júri representantes das empresas parceiras."
                },
                {
                    p: "Como vão ser avaliados os projetos?",
                    r: "Os projetos vão ser avaliados conforme o guião de cada prova, atempadamente fornecido aos participantes."
                },
                {
                    p: "Com quem devo tirar dúvidas durante a prova?",
                    r: "Só podes tirar dúvidas com pessoas designadas para o efeito: o responsável pela prova, o coordenador " +
                        "do evento e a equipa de tópico."
                },
                {
                    p: "Tenho frequência no dia da prova. E agora?",
                    r: "Deves contactar a organização para adequar da melhor forma possível a calendarização da tua prova no " +
                        "dia de avaliação."
                },
            ]
        },
        juri: {
            sectionHeading: "Júri",
            sectionSubHeading: "Este será o juri que avaliará o teu trabalho",
            sectionSubHeading1: "INNOVATIVE DESIGN",
            sectionSubHeading2: "CASE STUDY",
            
            juri1: [
                {
                    nome: "...",
                    descricao: "...",
                    foto: 'assets/img/juri/default.jpg',
                    conta: "#"
                },
                {
                    nome: "...",
                    descricao: "...",
                    foto: "assets/img/juri/default.jpg",
                    conta: "#"
                },
                {nome: "...", descricao: "...", foto: "assets/img/juri/default.jpg", conta: "#"}
            ],
            juri2: [
                {nome: "...", descricao: "...", foto: "assets/img/juri/default.jpg", conta: "#"},
                {nome: "...", descricao: "...", foto: "assets/img/juri/default.jpg", conta: "#"},
                {
                    nome: "...",
                    descricao: "...",
                    foto: "assets/img/juri/default.jpg",
                    conta: "#"
                },
                {nome: "...", descricao: "...", foto: "assets/img/juri/default.jpg", conta: "#"},
                
            ]
            
        },
        partners: {
            sectionHeading: "Parceiros",
            sectionSubHeading: "Parceiros de Mídia",
            sectionSubHeading2: "Parceiros Promo"
        },
        team: {
            sectionHeading: "Equipa",
            equipa: [
                {nome: "Vasco Pinho", role: "Coordenador da EBEC Aveiro 2022", foto: "assets/img/team/vasco.jpg"},
                {nome: "Ana Poças", role: "Responsável de Tópico", foto: "assets/img/team/AnaPoças.jpeg"},
                {nome: "José Silva", role: "Responsável de Relações Empresariais", foto: "assets/img/team/JoseSilva.jpeg"},
                {nome: "Bruno Feitais", role: "Responsável de Tecnologias de Informação", foto: "assets/img/team/bruno.jpg"},
            ],
            equipa2: [
                {nome: "Maria Canhoto", role: "Responsável de Design", foto: "assets/img/team/mariac.jpg"},
                {nome: "Ana Andrade", role: "Responsável de Logística", foto: "assets/img/team/anaandrade.jpg"},
                {nome: "Tomás Silva", role: "Responsável de Participantes", foto: "assets/img/team/tomas.jpg"},
                {nome: "Tiago Paralta", role: "Responsável de Relações Públicas", foto: "assets/img/team/paralta.jpg"},               
            ]
        },
        becomePartner: {
            sectionHeading: "Torne-se Nosso parceiro",
            corpo: [
                "Ao tornar-se nosso parceiro, a sua empresa estará integrada na organização da EBEC Aveiro 2022, com uma " +
                "equipa dinâmica e empenhada em satisfazer as necessidades de desenvolvimento extracurricular dos estudantes, " +
                "bem como os interesses da sua empresa. Terá a oportunidade de participar numa tarde empresarial online. ",
                "<span class=\"big-number text-blue\">•</span>Marque presença na tarde empresarial e exponha a sua empresa, produtos e projetos. Terá a oportunidade " +
                "de trocar experiências com os estudantes num ambiente informal.",
                "<span class=\"big-number text-blue\">•</span>Beneficie do acesso aos currículos disponibilizados, de forma opcional, pelos participantes do evento " +
                "e estudantes da Universidade de Aveiro.",
                "<span class=\"big-number text-blue\">•</span>Direito a trabalhar em sintonia com o Topic Group podendo propor provas, tanto de <i>Case Study</i> como de " +
                "<i>Innovative Design</i>, que serão realizadas pelos participantes.",
                "Como nosso parceiro, beneficiará de interações estreitas com estudantes da universidade de Aveiro, através " +
                "de uma tarde empresarial, conseguindo recolher diversas perceções através de " +
                "uma intensa partilha de conhecimentos.",
                "A sua empresa aumentará ainda a visibilidade entre os estudantes da Universidade de Aveiro, conhecidos " +
                "pelo seu dinamismo, inovação e empreendedorismo, através de promoção disponibilizada pelo BEST Aveiro.",
                "Caso esteja interessado em ser nosso parceiro, contacte-nos por meio dos " +
                "<a style=\"color: #428BFF\" href=\"#contactos\">Contactos</a> da equipa ou através das " +
                "<a style=\"color: #428BFF\" href=\"#info\">Informações</a> do BEST Aveiro."
            ]
        },
        contacts: {
            sectionHeading: "Contactos",
            people: [
                {
                    foto: "assets/img/team/vasco.jpg",
                    nome: "Vasco Pinho",
                    role: "Coordenador da EBEC Aveiro 2022",
                    tel: "+(351) 918 981 178",
                    email: "mailto:vascopinho24@gmail.com",
                    email2: " vascopinho24@gmail.com"
                },
                {
                    foto: "assets/img/team/ines.jpg",
                    nome: "Inês Leite",
                    role: "Presidente do BEST Aveiro",
                    tel: "+(351) 914 241 456",
                    email: "mailto:inesleite200020@gmail.com ",
                    email2: " inesleite200020@gmail.com "
                },
                {
                    foto: "assets/img/team/JoseSilva.jpeg",
                    nome: "José Silva",
                    role: "Responsável de Relações Empresariais",
                    tel: "+(351) 918 311 076",
                    email: "mailto:jose.silva@best-eu.org",
                    email2: " jose.silva@best-eu.org"
                }
            ]
        },
        bestAveiro: {
            img: "assets/img/logos/best-aveiro-color.png",
            sectionHeading: "Sobre o BEST Aveiro",
            corpo: [
                "Fundado oficialmente em 2010, o Grupo Local BEST Aveiro, sediado na Universidade de Aveiro, conta com " +
                "cerca de 45 membros ativos das áreas de Ciências, Tecnologias e Engenharias. Ao longo dos seus 11 anos " +
                "de história distinguiu-se pela diversidade e qualidade de eventos organizados. Estes abrangem os estudantes " +
                "a nível local, nacional e europeu, focando-se ainda no próprio desenvolvimento dos membros da Associação " +
                "para que estes estejam em constante progressão e aprendizagem.",
                "O BEST Aveiro oferece aos estudantes a oportunidade de participar em eventos que visam a complementaridade " +
                "dos seus estudos, organizando anualmente uma competição na área científico-tecnológica, formações em Soft " +
                "ou Hard skills, um curso sazonal e um simpósio de inovação tecnológica. Com o objetivo de estreitar " +
                "a relação entre estudantes e empresas, o BEST Aveiro organiza ainda uma feira de empresas anual, integrada " +
                "na competição EBEC, oferecendo aos estudantes oportunidades relevantes para o seu futuro profissional " +
                "e às empresas maior facilidade de comunicação e recrutamento da comunidade académica."
            ]
        },
        info: {
            mapa: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCMIUqakqzpEZx05JpVA7GaNhcpkfwyAyg&q=BEST Aveiro, Aveiro, PT",
            infos: [
                {
                    chave: "Morada",
                    valor: "Incubadora de Empresas da Universidade de Aveiro<br/>Campus Universitário de Santiago, Edifício 1<br/>" +
                        "3810-193 Aveiro<br/>Portugal",
                    classe: "fa-home"
                },
                {chave: "Telefone", valor: "+351 914 241 456", classe: "fa-phone"},
                {
                    chave: "Email",
                    valor: "<a href='mailto:aveiro@BEST-eu.org'>aveiro@BEST-eu.org</a>",
                    classe: "fa-envelope"
                },
            ],
            sectionHeading: "Informações",
            icones: [
                {ref: "http://bestaveiro.web.ua.pt/", classe: "fa-globe"},
                {ref: "https://www.facebook.com/EBEC.aveiro/", classe: "fa-facebook"},
                {ref: "https://instagram.com/best.aveiro/", classe: "fa-instagram"},
                {ref: "https://www.linkedin.com/company/best-aveiro", classe: "fa-linkedin-in"},
                {ref: "https://www.flickr.com/photos/bestaveiro", classe: "fa-flickr"}
            ]
        },
        footer: {
            img: "assets/img/partners/annual/ua-2.gif",
            img2: "assets/img/partners/annual/ipdj.png",
            img3: "assets/img/partners/annual/ua.png"
        }

    };

    var vm = {
        corpo: ko.observable(portuguese),
    };
    ko.applyBindings(vm);
});

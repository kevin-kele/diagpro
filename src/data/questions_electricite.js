// ── THÈMES ───────────────────────────────────────────────────────────────────
export const ELEC_THEMES = {
  reglem:    '📋 Réglementation',
  norme16:   '🔧 NF C 16-600',
  norme15:   '⚡ NF C 15-100',
  anomalie:  '🔴 Anomalies B1-B11',
  humide:    '💧 Pièces humides',
  protection:'🛡️ Protection',
  tableau:   '🔌 Tableau',
  image:     '🖼️ Schéma',
}

// ── QUESTIONS ────────────────────────────────────────────────────────────────
export const QUESTIONS_ELEC = [

// ── RÉGLEMENTATION ─────────────────────────────────────────────────────
{id:1,theme:'reglem',q:"Le diagnostic électricité est obligatoire pour les installations de plus de :",opts:["10 ans","15 ans","20 ans","25 ans"],ans:1,exp:"<strong>15 ans</strong> — Au-delà de 15 ans, tout logement vendu ou loué doit avoir un diagnostic électrique. C'est le critère déclencheur fixé par l'article L 134-7 du CCH."},
{id:2,theme:'reglem',q:"Quelle est la durée de validité du diagnostic électricité dans le cadre d'une VENTE ?",opts:["1 an","3 ans","6 ans","10 ans"],ans:1,exp:"<strong>3 ans</strong> pour une vente. Le diagnostic doit être en cours de validité lors de la signature de l'acte authentique."},
{id:3,theme:'reglem',q:"Quelle est la durée de validité du diagnostic électricité dans le cadre d'une LOCATION ?",opts:["1 an","3 ans","6 ans","10 ans"],ans:2,exp:"<strong>6 ans</strong> pour une location. Attention au piège de l'examen : vente = 3 ans, location = 6 ans. C'est l'inverse du gaz (gaz vente = 3 ans aussi)."},
{id:4,theme:'reglem',q:"Quelle loi a rendu le diagnostic électrique obligatoire pour la location ?",opts:["Loi SRU","Loi ALUR (décret 11 août 2016)","Loi Grenelle II","Loi Carrez"],ans:1,exp:"La <strong>loi ALUR</strong> (complétée par le décret n°2016-1105 du 11 août 2016) a imposé le diagnostic électrique pour la location, entré en vigueur le <strong>1er janvier 2018</strong>."},
{id:5,theme:'reglem',q:"Le diagnostic électricité est-il un contrôle de conformité à la norme NF C 15-100 ?",opts:["Oui, totalement","Non, c'est un constat de sécurité, pas un contrôle de conformité","Oui, mais uniquement pour les parties humides","Oui, pour les installations de plus de 30 ans"],ans:1,exp:"<strong>NON.</strong> Le diagnostic est un <strong>constat de sécurité</strong> visant à identifier les risques pour les personnes. Il ne délivre pas un certificat de conformité à la NF C 15-100 (qui concerne les installations neuves)."},
{id:6,theme:'reglem',q:"Dans quel document le diagnostic électrique est-il intégré lors d'une vente ?",opts:["Le DPE seul","Le plan de prévention des risques","Le DDT (Dossier de Diagnostic Technique)","Le règlement de copropriété"],ans:2,exp:"Le diagnostic électrique fait partie du <strong>DDT (Dossier de Diagnostic Technique)</strong> remis à l'acquéreur lors de la promesse de vente ou au plus tard lors de l'acte authentique."},
{id:7,theme:'reglem',q:"Qui peut légalement réaliser un diagnostic électricité ?",opts:["Tout électricien qualifié","Un diagnostiqueur certifié par un organisme accrédité COFRAC","Le propriétaire lui-même","Un architecte agréé"],ans:1,exp:"Seul un <strong>diagnostiqueur certifié</strong> par un organisme accrédité COFRAC peut réaliser le diagnostic électrique. Il doit aussi être couvert par une assurance RCP."},
{id:8,theme:'reglem',q:"Quelle norme définit la méthode du diagnostic électrique (installations existantes) ?",opts:["NF C 15-100","NF C 16-600","DTU 70.1","NF EN 60364"],ans:1,exp:"La <strong>NF C 16-600</strong> (anciennement XP C 16-600, devenue NF C 16-600 en juillet 2017) définit la méthode, le contenu et les points de contrôle du diagnostic électrique des installations existantes."},
{id:9,theme:'reglem',q:"Quelle est la différence entre NF C 15-100 et NF C 16-600 ?",opts:["Elles sont identiques","NF C 15-100 = installations neuves/rénovées ; NF C 16-600 = diagnostic des installations existantes","NF C 16-600 est plus récente et remplace totalement la 15-100","NF C 15-100 concerne uniquement les parties communes"],ans:1,exp:"<strong>NF C 15-100</strong> = règles pour construire/rénover une installation neuve. <strong>NF C 16-600</strong> = méthode pour diagnostiquer une installation existante. Le diagnostiqueur utilise la NF C 16-600 comme grille de contrôle, et s'appuie sur la NF C 15-100 comme référence de sécurité."},
{id:10,theme:'reglem',q:"Combien de points de contrôle vérifie le diagnostiqueur lors d'un état électrique ?",opts:["20 à 30","50 à 60","Environ 87 à 90","Plus de 200"],ans:2,exp:"Le diagnostiqueur contrôle <strong>environ 87 à 90 points</strong> lors de l'état de l'installation intérieure d'électricité, répartis en 11 groupes d'anomalies (B1 à B11)."},

// ── NF C 16-600 (MÉTHODOLOGIE) ──────────────────────────────────────────
{id:11,theme:'norme16',q:"Le diagnostiqueur peut-il démonter des éléments électriques (câbles, prises) pour son contrôle ?",opts:["Oui, systématiquement","Non, sauf le capot du tableau électrique si possible","Oui mais seulement dans la cave","Oui avec accord écrit du propriétaire"],ans:1,exp:"<strong>Aucun démontage destructif</strong>, aucun déplacement de meubles. Seul le <strong>capot du tableau électrique</strong> peut être ouvert si possible. La méthodologie est basée sur l'examen visuel et les essais."},
{id:12,theme:'norme16',q:"Quel outil est utilisé pour vérifier la continuité de la liaison équipotentielle en salle de bain ?",opts:["Voltmètre","Multimètre en mode continuité / ohmmètre","Clamp ampèremétrique","Analyseur de réseau"],ans:1,exp:"Un <strong>multimètre en mode continuité (ohmmètre)</strong> vérifie la résistance de la LES. Selon la NF C 16-600, la résistance doit être <strong>inférieure à 2 Ohms</strong> pour être satisfaisante."},
{id:13,theme:'norme16',q:"Pour vérifier le bon fonctionnement d'un disjoncteur différentiel, le diagnostiqueur utilise :",opts:["Une simple observation visuelle","Le bouton TEST du disjoncteur différentiel","Un oscilloscope","Il ne peut pas le tester"],ans:1,exp:"Le diagnostiqueur appuie sur le <strong>bouton TEST</strong> du disjoncteur différentiel. Si le différentiel déclenche bien à l'appui → conforme. S'il ne déclenche pas → anomalie (disjoncteur défectueux)."},
{id:14,theme:'norme16',q:"Lors du diagnostic, l'AGCP doit se situer :",opts:["N'importe où dans le logement","À moins de 1,80 m du sol, dans un endroit protégé, accessible","Dans le couloir uniquement","À l'extérieur du logement côté rue"],ans:1,exp:"L'<strong>AGCP</strong> (Appareil Général de Coupure et de Protection) doit être à <strong>moins de 1,80 m du sol</strong>, dans un endroit protégé, accessible, éloigné de points d'eau et de sources de chaleur."},
{id:15,theme:'norme16',q:"Le diagnostic électricité peut-il être réalisé si l'installation n'est pas alimentée (pas de courant) ?",opts:["Oui, entièrement","Partiellement : les essais et mesures ne peuvent pas être réalisés","Non, le diagnostic est impossible","Oui, mais sa validité est réduite à 1 an"],ans:1,exp:"Si l'installation n'est <strong>pas alimentée</strong>, l'examen visuel peut être réalisé partiellement mais les <strong>essais et mesures (test du différentiel, continuité de terre…) sont impossibles</strong>. Le rapport doit mentionner les points non contrôlés."},
{id:16,theme:'norme16',q:"Les appareils de mesure du diagnostiqueur (multimètre, contrôleur de prise…) doivent faire l'objet d'une vérification métrologique :",opts:["Jamais, ils sont homologués à vie","Au moins tous les 3 ans selon NF X 07-011","Tous les ans","Tous les 6 mois"],ans:1,exp:"Selon la <strong>NF X 07-011</strong>, les appareils de mesure du diagnostiqueur doivent être vérifiés au moins <strong>tous les 3 ans</strong> pour garantir la fiabilité des mesures."},

// ── ANOMALIES B1→B11 ────────────────────────────────────────────────────
{id:17,theme:'anomalie',q:"Le groupe d'anomalie B1 concerne :",opts:["La protection différentielle","L'appareil général de commande et de protection (AGCP/disjoncteur)","La mise à la terre","Les pièces humides"],ans:1,exp:"<strong>B1 = AGCP</strong> (Appareil Général de Commande et de Protection = disjoncteur de branchement). B2 = protection différentielle, B3 = mise à la terre, B4 = surintensités, B5/B6 = salle de bain..."},
{id:18,theme:'anomalie',q:"L'anomalie B2 concerne :",opts:["L'AGCP","La protection différentielle (DDR)","La prise de terre","Les contacts directs"],ans:1,exp:"<strong>B2 = protection différentielle (DDR)</strong>. Cela inclut la présence, le bon fonctionnement et le calibre adapté du disjoncteur différentiel (interrupteur différentiel)."},
{id:19,theme:'anomalie',q:"L'anomalie B3 concerne :",opts:["La protection différentielle","Les surintensités","La prise de terre et installation de mise à la terre","Les matériaux vétustes"],ans:2,exp:"<strong>B3 = prise de terre et installation de mise à la terre</strong>. Vérification de la présence, de la continuité et de la résistance de la prise de terre."},
{id:20,theme:'anomalie',q:"L'anomalie B4 concerne :",opts:["La protection contre les surintensités (disjoncteurs divisionnaires / fusibles)","La liaison équipotentielle","Les matériels vétustes","Les pièces d'eau"],ans:0,exp:"<strong>B4 = protection contre les surintensités</strong>. Chaque circuit doit être protégé par un disjoncteur divisionnaire ou un fusible calibré selon la section des conducteurs."},
{id:21,theme:'anomalie',q:"L'anomalie B5 concerne :",opts:["Les matériels vétustes","La liaison équipotentielle dans les locaux contenant une baignoire ou une douche","Les appareils en partie commune","Les piscines privées"],ans:1,exp:"<strong>B5 = liaison équipotentielle</strong> dans les pièces d'eau (salle de bain, salle de douche). La LES doit relier toutes les masses métalliques à la terre avec une résistance < 2 Ohms."},
{id:22,theme:'anomalie',q:"L'anomalie B7 concerne :",opts:["Les fusibles surdimensionnés","Les contacts directs avec des parties actives sous tension","La protection différentielle","L'AGCP inaccessible"],ans:1,exp:"<strong>B7 = contacts directs</strong> : présence de conducteurs nus, parties actives accessibles sous tension. C'est une anomalie grave présentant un risque d'électrocution immédiat."},
{id:23,theme:'anomalie',q:"L'anomalie B8 concerne :",opts:["Les matériels vétustes ou inadaptés présentant un risque","La protection contre les surintensités","Les appareils en piscine","La liaison équipotentielle"],ans:0,exp:"<strong>B8 = matériels vétustes ou inadaptés</strong> présentant des risques : câbles en tissu, prises sans terre dans des pièces humides, matériels dégradés avec parties sous tension accessibles..."},
{id:24,theme:'anomalie',q:"L'anomalie B11 a3 signifie :",opts:["L'AGCP est inaccessible","Il n'y a aucun dispositif différentiel haute sensibilité ≤ 30 mA dans l'installation","La prise de terre est absente","Il y a des fusibles surdimensionnés"],ans:1,exp:"<strong>B11 a3 = absence totale de différentiel 30 mA</strong>. C'est l'une des anomalies les plus courantes dans les vieilles installations. Le différentiel 30 mA est indispensable pour protéger contre les électrocutions."},
{id:25,theme:'anomalie',q:"Quelle est la différence entre B11 a2 et B11 a3 ?",opts:["B11 a2 = pas de différentiel du tout ; B11 a3 = protection partielle","B11 a2 = protection partielle (certains circuits sans 30 mA) ; B11 a3 = aucun différentiel 30 mA","Elles sont identiques","B11 a2 concerne le gaz, B11 a3 l'électricité"],ans:1,exp:"<strong>B11 a2</strong> = il y a un ou plusieurs DDR 30 mA mais <strong>certaines parties ne sont pas protégées</strong> (protection partielle). <strong>B11 a3</strong> = <strong>aucun DDR 30 mA</strong> dans toute l'installation."},
{id:26,theme:'anomalie',q:"Les fusibles 'à tabatière' ou 'à broche rechargeable' sont :",opts:["Autorisés si calibre adapté","Anomalie car permettent le rechargement avec fils inadaptés","Obligatoires dans les anciens tableaux","Autorisés uniquement en cave"],ans:1,exp:"Les <strong>fusibles à tabatière ou à broche rechargeable</strong> constituent une anomalie car ils permettent de les recharger avec des conducteurs inadaptés (surdimensionnés), supprimant la protection contre les surintensités."},
{id:27,theme:'anomalie',q:"Une installation avec des conducteurs en aluminium pour les circuits intérieurs est :",opts:["Conforme si section adaptée","Anomalie B8 car l'aluminium crée des risques de desserrage et d'échauffement","Autorisée uniquement pour les circuits de chauffage","Conforme si installée après 1980"],ans:1,exp:"Les <strong>conducteurs en aluminium</strong> pour les circuits intérieurs constituent une <strong>anomalie B8</strong>. L'aluminium se dilate/se contracte plus que le cuivre, créant des desserrages et des risques d'échauffement → incendie."},
{id:28,theme:'anomalie',q:"Le groupe B6 concerne :",opts:["Les piscines privées","Les règles de zones (volumes 0, 1, 2) dans les locaux baignoire/douche","Les appareils en partie commune","Les fusibles surdimensionnés"],ans:1,exp:"<strong>B6 = règles de zones</strong> dans les pièces contenant une baignoire ou une douche (volumes 0, 1, 2 selon NF C 15-100). Vérification que les équipements installés sont autorisés dans chaque volume."},

// ── NF C 15-100 (INSTALLATION) ──────────────────────────────────────────
{id:29,theme:'norme15',q:"Pour un circuit éclairage protégé par un disjoncteur 16A, quelle section minimale de conducteur doit être utilisée ?",opts:["1,5 mm²","2,5 mm²","4 mm²","6 mm²"],ans:0,exp:"<strong>1,5 mm²</strong> pour 16A (éclairage). Règle de base NF C 15-100 : 1,5 mm² = 16A (éclairage), 2,5 mm² = 20A (prises), 6 mm² = 32A (plaque de cuisson), 10 mm² = 40A (four + plaque)."},
{id:30,theme:'norme15',q:"Pour un circuit prises de courant protégé par un disjoncteur 20A, quelle section minimale ?",opts:["1,5 mm²","2,5 mm²","4 mm²","6 mm²"],ans:1,exp:"<strong>2,5 mm²</strong> pour 20A (prises de courant). La section du conducteur doit être adaptée à l'intensité du disjoncteur qui le protège."},
{id:31,theme:'norme15',q:"Quelle est la couleur réglementaire du conducteur de protection (PE = terre) ?",opts:["Rouge","Bleu","Vert et jaune","Marron"],ans:2,exp:"Le conducteur de protection (PE) est obligatoirement <strong>vert et jaune</strong>. Le neutre = bleu, la phase = rouge ou marron ou noir ou gris. L'absence de conducteur vert-jaune est une anomalie grave."},
{id:32,theme:'norme15',q:"Quelle est la couleur réglementaire du conducteur neutre ?",opts:["Vert et jaune","Bleu","Marron","Blanc"],ans:1,exp:"Le conducteur <strong>neutre est bleu</strong>. C'est une règle impérative de la NF C 15-100. Trouver un conducteur bleu utilisé comme phase dans une vieille installation est une anomalie."},
{id:33,theme:'norme15',q:"Un disjoncteur différentiel de type AC protège contre :",opts:["Les courants alternatifs sinusoïdaux uniquement","Les courants continus uniquement","Les courants alternatifs et continus","Les surtensions atmosphériques"],ans:0,exp:"Un DDR de <strong>type AC</strong> ne protège que contre les <strong>courants alternatifs sinusoïdaux</strong>. Pour les appareils avec électronique (lave-linge récent, onduleur, VE), il faut un DDR de <strong>type A</strong> (AC + courants pulsés continus)."},
{id:34,theme:'norme15',q:"Quelle est la sensibilité maximale d'un dispositif différentiel à l'origine d'une installation pour être conforme ?",opts:["30 mA","300 mA","500 mA","1 A"],ans:2,exp:"Le dispositif différentiel à l'<strong>origine de l'installation</strong> (AGCP ou interrupteur général) peut avoir une sensibilité jusqu'à <strong>500 mA maximum</strong>. C'est différent du 30 mA qui est requis pour la protection des personnes sur les circuits terminaux."},
{id:35,theme:'norme15',q:"La liaison équipotentielle principale (LEP) a pour rôle de :",opts:["Protéger contre les surintensités","Relier toutes les masses métalliques de l'installation à la terre","Couper l'alimentation en urgence","Détecter les fuites de courant"],ans:1,exp:"La <strong>LEP (Liaison Équipotentielle Principale)</strong> relie à la terre toutes les <strong>canalisations métalliques</strong> entrant dans le bâtiment (eau, gaz, chauffage) et les masses métalliques. Prévient les différences de potentiel dangereuses."},
{id:36,theme:'norme15',q:"Une prise de courant 2P+T doit avoir ses broches de terre situées :",opts:["En haut","En bas","À gauche","N'importe où, pas de règle"],ans:1,exp:"La broche de terre d'une prise 2P+T doit être <strong>en bas</strong> selon la NF C 15-100. Cela permet d'éviter qu'une prise arrachée ne crée un contact dangereux. Une prise mal orientée est une anomalie."},
{id:37,theme:'norme15',q:"Dans une salle de bain, une prise de courant 230V standard est autorisée dans :",opts:["Le volume 0","Le volume 1","Le volume 2","Hors volume (au minimum à 60 cm du bord du receveur)"],ans:3,exp:"Une prise 230V n'est autorisée qu'en <strong>hors volume</strong> (anciennement volume 3), soit à plus de 60 cm du bord de la baignoire ou du receveur. Dans le volume 2, seule une prise rasoir avec transformateur d'isolement est autorisée."},
{id:38,theme:'norme15',q:"Le volume 0 en salle de bain correspond à :",opts:["La zone à 60 cm autour de la douche","L'intérieur de la baignoire ou du receveur de douche","La zone à 1,20 m du sol","Tout l'espace de la salle de bain"],ans:1,exp:"<strong>Volume 0</strong> = intérieur de la baignoire ou du receveur. Zéro équipement électrique autorisé, même en TBTS. C'est la zone la plus dangereuse."},
{id:39,theme:'norme15',q:"Le volume 1 en salle de bain s'étend :",opts:["Jusqu'au sol uniquement","Au-dessus du receveur jusqu'à 2,25 m de hauteur (colonne d'eau)","À 60 cm autour du volume 0","À toute la pièce"],ans:1,exp:"<strong>Volume 1</strong> = colonne d'eau au-dessus du receveur/baignoire, jusqu'à <strong>2,25 m de hauteur</strong>. Seuls les appareils TBTS 12V et les chauffe-eau instantanés spéciaux sont autorisés."},
{id:40,theme:'norme15',q:"Quel est l'indice de protection IP minimum pour un luminaire en volume 2 d'une salle de bain ?",opts:["IP20","IPX4","IPX7","IP44"],ans:1,exp:"En <strong>volume 2</strong>, l'indice de protection minimum est <strong>IPX4</strong> (protection contre les projections d'eau). En zone de douche à l'italienne (volume 1), IPX5 minimum est requis."},

// ── PIÈCES HUMIDES & PROTECTION ────────────────────────────────────────
{id:41,theme:'humide',q:"La liaison équipotentielle supplémentaire (LES) en salle de bain doit relier :",opts:["Uniquement la baignoire à la terre","Toutes les masses métalliques (tuyauteries, baignoire, radiateur...) entre elles et à la terre","Seulement le boîtier électrique","Le disjoncteur différentiel uniquement"],ans:1,exp:"La <strong>LES</strong> relie <strong>toutes les masses métalliques</strong> (tuyaux d'eau, de chauffage, baignoire métallique, sèche-serviettes...) entre elles et au conducteur de protection. Résistance doit être < 2 Ohms."},
{id:42,theme:'humide',q:"Une prise de courant se trouve à 45 cm du bord d'un receveur de douche. Cette situation est :",opts:["Conforme (hors volume car > 30 cm)","Anomalie B6 : la prise est en volume 2 (< 60 cm du receveur)","Conforme si elle est de type étanche IPX4","Conforme si le différentiel 30 mA est présent"],ans:1,exp:"<strong>Anomalie B6</strong> : une prise 230V dans le volume 2 (zone entre 0 et 60 cm du bord du receveur) est interdite. La prise doit être à plus de 60 cm pour être en hors volume (autorisée)."},
{id:43,theme:'humide',q:"Un sèche-serviettes électrique en salle de bain doit obligatoirement être :",opts:["De classe I uniquement","De classe II (double isolation) avec IPX4 minimum","Alimenté par un transformateur d'isolement","Installé à plus de 2 m du point d'eau"],ans:1,exp:"Le sèche-serviettes doit être de <strong>classe II (double isolation) et IPX4 minimum</strong>. S'il est en volume 2, il doit être à distance sécurisée. En volume 0 et 1 : interdit."},
{id:44,theme:'humide',q:"Dans une salle de bain, l'éclairage peut-il être commandé par un interrupteur mural classique 230V ?",opts:["Oui sans restriction","Oui si l'interrupteur est en hors volume (à plus de 60 cm)","Non, jamais en salle de bain","Oui si différentiel 30 mA présent"],ans:1,exp:"Un interrupteur 230V est <strong>autorisé en hors volume</strong> (> 60 cm du bord de la douche/baignoire). En volume 1 et 2, seuls les interrupteurs TBTS 12V sont autorisés."},
{id:45,theme:'protection',q:"La fonction principale d'un disjoncteur différentiel 30 mA est :",opts:["Protéger les conducteurs contre les surintensités","Protéger les personnes contre les électrocutions par fuite de courant","Couper l'alimentation générale","Protéger les appareils contre les surtensions"],ans:1,exp:"Le <strong>DDR 30 mA protège les personnes contre l'électrocution</strong> : il coupe le courant dès que la fuite dépasse 30 mA (courant potentiellement mortel), typiquement en cas de contact avec un conducteur sous tension."},
{id:46,theme:'protection',q:"Un différentiel 500 mA à l'origine de l'installation offre :",opts:["Une protection anti-électrocution suffisante","Une protection contre les incendies et dégâts importants, mais pas contre l'électrocution","La même protection qu'un 30 mA","Aucune protection utile"],ans:1,exp:"Le <strong>500 mA</strong> à l'origine protège contre les incendies (fuite diffuse) mais <strong>pas contre l'électrocution</strong> (le courant létal est d'environ 30-80 mA). D'où l'obligation d'avoir aussi des DDR 30 mA sur les circuits terminaux."},
{id:47,theme:'protection',q:"Qu'est-ce que la sélectivité entre disjoncteurs (AGCP sélectif noté 'S') ?",opts:["Le fait d'utiliser des disjoncteurs de marques différentes","L'AGCP sélectif laisse d'abord déclencher le 30 mA aval avant de déclencher lui-même","L'AGCP coupe toujours avant les disjoncteurs divisionnaires","La sélectivité n'existe pas en résidentiel"],ans:1,exp:"Un <strong>AGCP sélectif (marqué 'S')</strong> a un temps de déclenchement retardé qui permet au DDR 30 mA aval de déclencher en premier. Ainsi, seul le circuit défaillant est coupé et non toute l'installation."},
{id:48,theme:'protection',q:"Quel risque principal est lié à des fusibles surdimensionnés ?",opts:["Risque de disjonctions intempestives","Risque d'incendie par échauffement excessif des conducteurs","Risque de choc électrique","Risque de court-circuit"],ans:1,exp:"Des <strong>fusibles ou disjoncteurs surdimensionnés</strong> ne protègent pas correctement les conducteurs : en cas de surcharge ou court-circuit, ils ne déclenchent pas et les conducteurs s'échauffent → <strong>risque d'incendie</strong>."},

// ── TABLEAU ÉLECTRIQUE ─────────────────────────────────────────────────
{id:49,theme:'tableau',q:"Qu'est-ce que l'AGCP ?",opts:["Appareil de Gestion des Circuits Privés","Appareil Général de Commande et de Protection (disjoncteur de branchement)","Appareil de Gestion des Courants Parasites","Association Générale de Contrôle Professionnel"],ans:1,exp:"<strong>AGCP = Appareil Général de Commande et de Protection</strong> = disjoncteur de branchement (aussi appelé disjoncteur d'abonné). Il est en tête d'installation, appartient à Enedis, permet la coupure générale."},
{id:50,theme:'tableau',q:"Un tableau électrique contient des disjoncteurs 10A pour des circuits éclairage câblés en 2,5 mm². C'est :",opts:["Correct : le disjoncteur est plus petit que la capacité du câble, c'est sécurisé","Anomalie B4 : la section 2,5 mm² peut supporter 20A, le disjoncteur 10A est sous-dimensionné mais pas dangereux","Anomalie B4 : les disjoncteurs doivent être calibrés selon la section des câbles (16A pour 2,5 mm²)","Correct : le disjoncteur 10A protège mieux les appareils"],ans:0,exp:"Un disjoncteur <strong>sous-dimensionné</strong> par rapport au câble n'est <strong>pas une anomalie</strong> — il protège le câble avant sa limite. L'anomalie est le disjoncteur <strong>surdimensionné</strong> (ex : 25A sur câble 1,5 mm² → le câble chauffe avant que le disjoncteur ne coupe)."},
{id:51,theme:'tableau',q:"Un tableau contient encore des coupe-circuit à fusibles à cartouche (type D02). Est-ce une anomalie ?",opts:["Oui, tous les fusibles sont interdits","Non, les fusibles à cartouche D02 sont autorisés si correctement calibrés","Oui, car ils ne peuvent pas être testés","Non, mais ils doivent être remplacés par des disjoncteurs dans les 6 mois"],ans:1,exp:"Les <strong>fusibles à cartouche D02</strong> sont <strong>autorisés</strong> s'ils sont correctement calibrés par rapport aux conducteurs. Ce qui est interdit, c'est les fusibles 'à tabatière' rechargeable ou les fusibles surdimensionnés."},
{id:52,theme:'tableau',q:"Qu'est-ce qu'un parafoudre et à quel groupe d'anomalie est-il lié ?",opts:["Un fusible renforcé, anomalie B4","Un dispositif de protection contre les surtensions d'origine atmosphérique, vérifié dans B11","Un interrupteur différentiel haute sensibilité, anomalie B2","Un disjoncteur de branchement renforcé, anomalie B1"],ans:1,exp:"Le <strong>parafoudre</strong> protège l'installation contre les surtensions d'origine atmosphérique (foudre). Son absence est notée dans le groupe <strong>B11 (autres vérifications)</strong>. Non obligatoire mais recommandé."},

// ── QUESTIONS SUR IMAGES / SCHÉMAS ─────────────────────────────────────
{id:53,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────────┐
│      TABLEAU ÉLECTRIQUE (vue frontale)   │
│                                          │
│  [AGCP 60A] ← disjoncteur de branchement│
│       │                                  │
│  [DDR 500mA] ← interrupteur différentiel│
│   ┌───┤                                  │
│   │   ├──[Disj. 16A]──── Circuit éclairage│
│   │   ├──[Disj. 20A]──── Circuit prises  │
│   │   └──[Fusible 25A]── Circuit cuisine │
│                                          │
│  PAS de différentiel 30 mA              │
│  PAS de prise de terre vérifiée         │
└──────────────────────────────────────────┘`,imgCap:"Tableau électrique observé dans un appartement de 1975",
q:"En analysant ce tableau, quelle(s) anomalie(s) principale(s) relevez-vous ?",opts:["Aucune anomalie : le DDR 500 mA suffit","B11 a3 (absence de DDR 30 mA) + B4 possible (fusible 25A à vérifier)","B1 uniquement : l'AGCP 60A est trop puissant","B2 uniquement : le DDR 500 mA est défaillant"],ans:1,exp:"<strong>B11 a3</strong> = absence totale de DDR 30 mA (le 500 mA ne protège pas contre l'électrocution). <strong>B4 à vérifier</strong> : le fusible 25A sur le circuit cuisine doit être adapté à la section du câble. Le DDR 500 mA en tête est le DDR d'origine, qui ne remplace pas le 30 mA."},
{id:54,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────────┐
│    SALLE DE BAIN (vue de dessus)         │
│                                          │
│  ┌─────────────────────────────────┐     │
│  │    RECEVEUR DE DOUCHE           │     │
│  │    [Volume 0]                   │     │
│  └─────────────────────────────────┘     │
│            ←30cm→                        │
│         [PRISE 230V]                     │
│            ←30cm→                        │
│  ┌──────────────────────────────────┐    │
│  │  BAIGNOIRE [Volume 0]            │    │
│  └──────────────────────────────────┘    │
│                                          │
│  DDR 30mA présent au tableau ✓           │
│  LES présente ✓                          │
└──────────────────────────────────────────┘`,imgCap:"Plan de salle de bain - position d'une prise de courant",
q:"La prise 230V à 30 cm du receveur de douche et 30 cm de la baignoire est-elle conforme ?",opts:["Oui car DDR 30 mA présent et LES en place","Oui car elle est à plus de 20 cm","Non, anomalie B6 : prise dans le volume 2 (< 60 cm des points d'eau)","Non, anomalie B7 : risque de contact direct"],ans:2,exp:"<strong>Anomalie B6</strong> : la prise est dans le <strong>volume 2</strong> (zone entre 0 et 60 cm des points d'eau). Une prise 230V en volume 2 est strictement interdite, même avec DDR 30 mA et LES. Seule une prise rasoir avec transfo d'isolement est autorisée en volume 2."},
{id:55,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────────┐
│   CÂBLAGE OBSERVÉ dans un comble        │
│                                          │
│   Câble ancien :                         │
│   ┌──────────────────────────────────┐   │
│   │  Gaine TEXTILE (tissu coton)     │   │
│   │  conducteurs : rouge / gris      │   │
│   │  PAS de fil vert/jaune (terre)   │   │
│   └──────────────────────────────────┘   │
│                                          │
│   Câble pose en apparent                 │
│   Isolation craquelée par endroits       │
│   Installé estimé avant 1970             │
└──────────────────────────────────────────┘`,imgCap:"Câblage observé dans les combles lors du diagnostic",
q:"Ce câblage représente quelles anomalies ?",opts:["Aucune : le câble est protégé par sa gaine textile","B8 (matériel vétuste/gaine textile craquelée) + B7 possible (conducteurs sans terre) + B3 (absence de PE)","B4 uniquement : section inadaptée","B1 uniquement : mauvais disjoncteur"],ans:1,exp:"<strong>B8</strong> = gaine textile ancienne, isolation craquelée = matériel vétuste dangereux. <strong>B3</strong> = absence de conducteur vert-jaune (pas de mise à la terre des circuits). <strong>B7 potentiel</strong> si isolation dégradée expose des conducteurs sous tension. Ce type de câblage impose une réfection complète."},
{id:56,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────────┐
│  BOÎTIER DE PRISE observé en cuisine     │
│                                          │
│  Prise 2P+T :                            │
│                                          │
│      ( orifice gauche  )                 │
│      ( orifice droit   )                 │
│      [ ■ TERRE en HAUT ■ ]  ← broche    │
│                                          │
│   L'ergot de terre est positionné        │
│   EN HAUT de la prise                    │
│                                          │
│  Câble : 2,5mm² avec vert/jaune ✓        │
│  DDR 30mA ✓ │ Prise avec obturateurs ✓  │
└──────────────────────────────────────────┘`,imgCap:"Prise 2P+T observée dans la cuisine",
q:"La broche de terre positionnée en HAUT de cette prise est-elle conforme ?",opts:["Oui, la position n'a aucune importance","Non, anomalie : la broche de terre doit être en BAS selon NF C 15-100","Oui si DDR 30 mA présent","Non, anomalie B7 : risque de contact direct"],ans:1,exp:"<strong>Anomalie</strong> : selon la <strong>NF C 15-100, la broche de terre doit être positionnée en BAS</strong>. Si une prise est arrachée partiellement, avoir la terre en haut évite un contact dangereux. C'est une non-conformité à noter dans le rapport."},
{id:57,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────────┐
│   TABLEAU ÉLECTRIQUE (situation B)       │
│                                          │
│  [AGCP 60A sélectif 'S']                 │
│       │                                  │
│  ┌────┴────┐      ┌────────┐             │
│  [DDR 30mA│      │DDR 30mA│             │
│  Rangée 1 ]      [Rangée 2]             │
│  │         │      │        │            │
│  ├─[Disj.] │      ├─[Disj.]│            │
│  ├─[Disj.] │      ├─[Disj.]│            │
│  └─[Disj.] │      └─[Disj.]│            │
│             │               │            │
│  MAIS : 2 circuits non reliés aux DDR   │
│  (câbles directement depuis l'AGCP)     │
└──────────────────────────────────────────┘`,imgCap:"Tableau avec 2 DDR 30 mA mais câblage partiel",
q:"Ce tableau présente 2 DDR 30 mA mais 2 circuits sont directement reliés à l'AGCP sans passer par les DDR. Quelle anomalie noter ?",opts:["Aucune : les 2 DDR 30 mA sont présents, c'est suffisant","B11 a2 : protection différentielle 30 mA partielle (certains circuits non protégés)","B11 a3 : absence totale de DDR 30 mA","B1 : AGCP mal configuré"],ans:1,exp:"<strong>B11 a2</strong> = protection <strong>partielle</strong>. Il y a des DDR 30 mA, mais <strong>certains circuits les contournent</strong> en étant directement reliés à l'AGCP. Ces circuits ne sont pas protégés contre l'électrocution. B11 a3 serait si aucun DDR 30 mA n'existait."},
{id:58,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────────┐
│   MESURE DE RÉSISTANCE DE TERRE          │
│                                          │
│   Instrument : Telurohmmètre             │
│                                          │
│   Résultat mesuré : 120 Ω               │
│                                          │
│   Installation avec :                    │
│   DDR en tête = 500 mA (AGCP)           │
│   PAS de DDR 30 mA                      │
│                                          │
│   Formule sécurité : R ≤ 50V / I_diff  │
│   → 50V / 500mA = 100 Ω maximum         │
└──────────────────────────────────────────┘`,imgCap:"Mesure de résistance de la prise de terre",
q:"Avec un DDR 500 mA et une résistance de terre mesurée à 120 Ω, la prise de terre est-elle conforme ?",opts:["Oui : 120 Ω est acceptable pour tout différentiel","Non : la résistance doit être ≤ 100 Ω pour un DDR 500 mA (50V / 0,5A = 100 Ω)","Oui si le DDR fonctionne correctement","Non : la résistance doit toujours être ≤ 50 Ω"],ans:1,exp:"<strong>Non conforme.</strong> La règle est : R_terre ≤ 50V / I_différentiel. Avec 500 mA : 50V / 0,5A = <strong>100 Ω maximum</strong>. Avec 120 Ω, la prise de terre est insuffisante pour ce différentiel → anomalie B3. Avec 30 mA : 50V / 0,03A = 1667 Ω (très tolérant)."},

// ── QUESTIONS COMPLÉMENTAIRES NIVEAU CERTIF ────────────────────────────
{id:59,theme:'reglem',q:"Un diagnostic électrique réalisé il y a 4 ans est-il valide pour une vente ?",opts:["Oui car moins de 6 ans","Non : validité 3 ans pour la vente, il faut un nouveau diagnostic","Oui si aucune modification n'a été apportée","Oui si le bien était non habité"],ans:1,exp:"<strong>Non</strong> : la validité pour la vente est de <strong>3 ans</strong>. Un diagnostic de 4 ans est périmé. Un nouveau diagnostic doit être réalisé avant la signature."},
{id:60,theme:'anomalie',q:"L'anomalie B9 concerne :",opts:["Les appareils en piscine privée","Les appareils situés en partie commune mais alimentés par les parties privatives","Les matériaux vétustes","La liaison équipotentielle"],ans:1,exp:"<strong>B9</strong> = appareils situés en <strong>partie commune</strong> (couloir, escalier, parking...) mais <strong>alimentés par le compteur privatif</strong> d'un logement. C'est une situation irrégulière : ces consommations sont à la charge du locataire/propriétaire."},
{id:61,theme:'norme15',q:"Une installation avec des prises sans obturateurs (sans volets de protection) est :",opts:["Conforme si différentiel 30 mA présent","Anomalie B11 b1 : toutes les prises doivent avoir des obturateurs","Conforme si les enfants n'habitent pas le logement","Conforme car les obturateurs ne sont pas obligatoires"],ans:1,exp:"<strong>B11 b1</strong> : les prises sans <strong>obturateurs (volets de sécurité)</strong> constituent une anomalie. Les obturateurs sont obligatoires pour éviter l'introduction d'objets dans les alvéoles. Une installation avec des prises sans obturateurs doit le faire noter."},
{id:62,theme:'anomalie',q:"B10 concerne :",opts:["Les balcons électrifiés","Les équipements électriques pour piscines privées","Les bornes de recharge véhicules électriques","Les antennes TV"],ans:1,exp:"<strong>B10</strong> = équipements électriques pour <strong>piscines privées</strong>. Vérification des équipements électriques spécifiques (pompe, éclairage sous-marin, alimentation...) selon les règles NF C 15-100 pour les piscines."},
{id:63,theme:'protection',q:"Quelle est la valeur de courant électrique considérée comme potentiellement mortelle pour un être humain ?",opts:["1 mA","10 mA","30-80 mA","500 mA"],ans:2,exp:"Un courant de <strong>30 à 80 mA</strong> peut provoquer la fibrillation ventriculaire (arrêt cardiaque) et la mort. C'est pourquoi le seuil de déclenchement des DDR de protection des personnes est fixé à <strong>30 mA</strong>."},
{id:64,theme:'tableau',q:"Qu'est-ce qu'un disjoncteur divisionnaire ?",opts:["Le disjoncteur général (AGCP)","Un disjoncteur protégeant un circuit terminal (éclairage, prises, appareil dédié...)","Un type de disjoncteur différentiel 30 mA","Un disjoncteur réservé aux pièces humides"],ans:1,exp:"Un <strong>disjoncteur divisionnaire</strong> protège un <strong>circuit terminal</strong> (éclairage, prises d'une pièce, lave-linge...). Il est distinct du disjoncteur de branchement (AGCP) qui coupe toute l'installation."},
{id:65,theme:'norme15',q:"Pour câbler un four électrique (4600W sous 230V soit 20A), quelle section minimale et quel disjoncteur ?",opts:["1,5 mm² et 16A","2,5 mm² et 20A","6 mm² et 32A","4 mm² et 20A"],ans:1,exp:"Four électrique ≤ 4600W : <strong>2,5 mm² protégé par 20A</strong>. Si four + plaque de cuisson (circuit combiné ≥ 6000W) : 6 mm² protégé par 32A. Les gros appareils de cuisson nécessitent souvent un circuit dédié en 6 mm² / 32A."}

]
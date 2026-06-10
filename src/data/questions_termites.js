// ── THÈMES ───────────────────────────────────────────────────────────────────
export const TERM_THEMES = {
  bois:       '🪵 Structure bois',
  champignons:'🍄 Champignons',
  insectes:   '🐛 Insectes xylophages',
  termites:   '🐜 Termites',
  traitement: '💊 Traitement',
  reglem:     '📋 Réglementation',
  methode:    '🔍 Méthode diag',
  image:      '🖼️ Sur image',
}

// ── QUESTIONS ────────────────────────────────────────────────────────────────
export const QUESTIONS_TERM = [

// ── STRUCTURE DU BOIS ──────────────────────────────────────────
{id:1,theme:'bois',q:"Quelle norme européenne définit les 5 classes d'emploi du bois ?",opts:["NF EN 350","NF EN 335","NF B 50-105","DTU 31.1"],ans:1,exp:"La <strong>NF EN 335</strong> définit les 5 classes d'emploi selon l'exposition à l'humidité et aux bio-agresseurs. NF EN 350 définit la durabilité naturelle des essences."},
{id:2,theme:'bois',q:"La durabilité naturelle d'un bois (norme EN 350) concerne uniquement :",opts:["L'aubier","Le duramen (bois de cœur)","L'ensemble de la section","L'écorce"],ans:1,exp:"La <strong>durabilité naturelle ne concerne que le duramen</strong>. L'aubier est par définition non durable, quelle que soit l'essence."},
{id:3,theme:'bois',q:"Un bois en classe d'emploi 3 est exposé à :",opts:["Intérieur sec","Extérieur sans contact sol, humectation fréquente","Contact permanent avec le sol ou l'eau douce","Eau de mer"],ans:1,exp:"<strong>Classe 3</strong> = bois en extérieur, au-dessus du sol, humecté fréquemment. Classe 4 = sol ou eau douce, Classe 5 = eau salée."},
{id:4,theme:'bois',q:"L'épicéa est classé comme essence :",opts:["Imprégnable facilement (classe 1)","Peu imprégnable (classe 3)","Non imprégnable / réfractaire (classe 4)","Très imprégnable (classe 2)"],ans:2,exp:"L'<strong>épicéa est réfractaire</strong> au traitement (classe 4 d'imprégnabilité). Le pin sylvestre aubier est classe 1 (imprégnable facilement)."},
{id:5,theme:'bois',q:"Quelle est la teneur en eau du bois 'sec à l'air' en France ?",opts:["5-8%","10-15%","20-25%","28-33%"],ans:1,exp:"Le bois sec à l'air a un taux d'humidité d'équilibre de <strong>10 à 15%</strong> en France selon les régions. C'est la référence pour les bois de charpente en usage intérieur."},
{id:6,theme:'bois',q:"Le point de saturation des fibres (PSF) du bois est atteint aux alentours de :",opts:["10-15%","20%","28-33%","40-50%"],ans:2,exp:"Le <strong>PSF ≈ 28-33%</strong>. En-dessous, le bois 'travaille' mécaniquement. Au-dessus, seule l'eau libre (dans les vaisseaux) varie."},
{id:7,theme:'bois',q:"Parmi ces essences, laquelle n'a PAS de duramen différencié (duramen peu marqué) ?",opts:["Chêne","Robinier","Hêtre","Mélèze"],ans:2,exp:"Le <strong>hêtre</strong> (comme le bouleau, le peuplier) ne présente pas de duramen nettement différencié. Chêne, robinier, mélèze ont un duramen marqué."},
{id:8,theme:'bois',q:"La certification CTB-B+ garantit :",opts:["La résistance au feu","La durabilité naturelle de l'essence","L'efficacité d'un traitement de préservation par autoclave","La résistance mécanique"],ans:2,exp:"<strong>CTB-B+</strong> = certification du FCBA attestant l'efficacité d'un <strong>traitement de préservation en autoclave</strong>. CTB-P+ = trempage court."},
{id:9,theme:'bois',q:"Pour les capricornes, la norme EN 350 stipule que :",opts:["Tous les bois sont sensibles","Seuls les feuillus sont sensibles","Seuls les bois résineux sont sensibles","Seul l'aubier des feuillus est sensible"],ans:2,exp:"Les <strong>capricornes n'attaquent que les bois résineux</strong> (pin, épicéa, sapin, douglas). La durabilité EN 350 vis-à-vis des capricornes ne concerne donc que les résineux."},

// ── CHAMPIGNONS ──────────────────────────────────────────────
{id:10,theme:'champignons',q:"La mérule (Serpula lacrymans) provoque quel type de pourriture ?",opts:["Pourriture fibreuse (blanche)","Pourriture molle","Pourriture cubique (brune)","Bleuissement"],ans:2,exp:"La mérule provoque une <strong>pourriture cubique brune</strong> : elle dégrade la cellulose et laisse la lignine, le bois se fissure en petits cubes brun sombre."},
{id:11,theme:'champignons',q:"Quelle est la caractéristique PRINCIPALE qui distingue la mérule du coniophore des caves ?",opts:["La couleur du mycélium","La présence de rhizomorphes capables de traverser la maçonnerie","L'odeur nauséabonde","La taille des fructifications"],ans:1,exp:"La mérule possède des <strong>rhizomorphes</strong> (cordons robustes gris-noirs) lui permettant de traverser maçonnerie, plâtres et isolants sur plusieurs mètres. Le coniophore n'en produit pas."},
{id:12,theme:'champignons',q:"Le coniophore des caves nécessite un taux d'humidité du bois :",opts:["Supérieur à 20% comme la mérule","Plus élevé que la mérule (>40%)","Inférieur à 15%","Identique à la mérule (22-35%)"],ans:1,exp:"Le <strong>coniophore</strong> nécessite un taux d'humidité <strong>supérieur à 40%</strong>, plus élevé que la mérule (22-35%). C'est pourquoi il est confiné aux zones très humides (caves, sous-sols)."},
{id:13,theme:'champignons',q:"La pourriture fibreuse est causée par :",opts:["La mérule","Le coniophore des caves","Le polypore des caves (Fibroporia vaillantii)","Les moisissures de surface"],ans:2,exp:"Le <strong>polypore des caves</strong> (Fibroporia vaillantii / Coniophora puteana selon les sources) cause une pourriture fibreuse blanche : il dégrade à la fois lignine ET cellulose. Le bois devient filandreux et pâle."},
{id:14,theme:'champignons',q:"La pourriture molle apparaît principalement :",opts:["Sur bois très sec en intérieur","Sur bois en contact avec de l'eau stagnante ou un sol humide","Sur les charpentes ventilées","Sur les bois résineux uniquement"],ans:1,exp:"La <strong>pourriture molle</strong> (Ascomycètes, Deutéromycètes) se développe sur les bois en contact direct avec l'eau ou le sol humide (seuils, poteaux de clôture...). Elle nécessite >50% d'humidité."},
{id:15,theme:'champignons',q:"Les spores de la mérule sont visibles sous forme de :",opts:["Poudre verte sur le bois","Poussière rouge-brique libérée par le sporophore","Filaments noirs en surface","Gouttelettes transparentes"],ans:1,exp:"La fructification de la mérule libère une <strong>poussière rouge-brique</strong> (spores en masse), souvent repérable à distance. Le phénomène de guttation (exsudats) lui vaut le nom de 'mérule pleureuse'."},
{id:16,theme:'champignons',q:"À partir de quel taux d'humidité du bois la mérule peut-elle se développer ?",opts:["10%","22%","35%","50%"],ans:1,exp:"La mérule se développe dès <strong>22% d'humidité</strong>. C'est pourquoi elle peut coloniser des zones semi-sèches, contrairement à d'autres champignons nécessitant plus d'humidité."},
{id:17,theme:'champignons',q:"Comment stopper définitivement le développement de la mérule ?",opts:["Appliquer un fongicide","Éliminer la source d'humidité","Augmenter la ventilation","Remplacer le bois attaqué"],ans:1,exp:"Sans humidité, la mérule ne peut survivre. <strong>Supprimer la source d'humidité</strong> est la première action indispensable. Sans cette étape, tout traitement ou remplacement est voué à l'échec."},

// ── INSECTES XYLOPHAGES ──────────────────────────────────────
{id:18,theme:'insectes',q:"Quelle espèce d'insecte xylophage s'attaque EXCLUSIVEMENT aux bois feuillus riches en amidon ?",opts:["Capricorne des maisons","Petite vrillette","Lyctus","Grosse vrillette"],ans:2,exp:"Le <strong>lyctus</strong> (Lyctus brunneus) ne peut attaquer que l'aubier des feuillus riches en amidon (chêne, frêne, orme, châtaignier). Il est incapable de digérer les résineux."},
{id:19,theme:'insectes',q:"Quelle est la durée du stade larvaire du capricorne des maisons ?",opts:["3 à 6 mois","1 à 2 ans","3 à 11 ans","Plus de 20 ans"],ans:2,exp:"La larve du capricorne peut rester dans le bois de <strong>3 à 11 ans</strong> avant métamorphose. C'est cette longue durée qui rend les dégâts structurels souvent irréversibles à la découverte."},
{id:20,theme:'insectes',q:"La petite vrillette (Anobium punctatum) présente quelles préférences ?",opts:["Bois résineux uniquement","Bois feuillus uniquement","Tous types de bois, préférence pour les bois anciens >10 ans","Bois très humides dégradés par champignons"],ans:2,exp:"La petite vrillette est <strong>polyphage</strong> (résineux et feuillus), avec une préférence pour les <strong>bois anciens d'au moins 10 ans</strong>, riches en amidon dégradé. Ses trous font 1-3 mm."},
{id:21,theme:'insectes',q:"La grosse vrillette (Xestobium rufovillosum) présente la particularité de :",opts:["Attaquer le bois frais de chantier","Émettre un son de tic-tac en période de reproduction","Creuser des galeries en spirale","Ne s'attaquer qu'aux résineux"],ans:1,exp:"La grosse vrillette peut émettre un <strong>son de tic-tac</strong> (bruit de percussion) en période de reproduction. Elle attaque aussi préférentiellement les vieux bois dégradés par des champignons."},
{id:22,theme:'insectes',q:"Les fourmis charpentières se distinguent des termites car elles :",opts:["Mangent le bois","Creusent le bois pour se loger sans le consommer","Attaquent le bois humide uniquement","Sont visibles seulement la nuit"],ans:1,exp:"Les <strong>fourmis charpentières excavent le bois pour nidifier</strong> mais ne le consomment pas. Elles expulsent une sciure grossière mélangée à des déjections. Les termites, eux, consomment la cellulose."},
{id:23,theme:'insectes',q:"La vermoulure granuleuse en forme de 'lentilles' est caractéristique de :",opts:["Lyctus (poudre farineuse fine)","Capricorne (sciure cylindrique tassée)","Petite vrillette","Termite (pas de sciure visible)"],ans:2,exp:"La <strong>petite vrillette</strong> produit des vermoulures caractéristiques en forme de petites lentilles granuleuses d'environ 1 mm. Le lyctus fait une poudre très fine farineuse, le capricorne des cylindres de bois."},
{id:24,theme:'insectes',q:"Quel insecte peut être entendu la nuit par un bruit de grignotement sourd dans les charpentes ?",opts:["Petite vrillette","Capricorne des maisons en phase larvaire active","Lyctus","Fourmi charpentière"],ans:1,exp:"La larve du <strong>capricorne</strong> peut être entendue la nuit ou au calme : elle produit un bruit de grignotement sourd caractéristique. Le lyctus et la vrillette sont généralement inaudibles."},
{id:25,theme:'insectes',q:"L'hespérophane est un insecte xylophage qui s'attaque préférentiellement à :",opts:["Les résineux secs","Le hêtre et le chêne (feuillus)","Les bois dégradés par les champignons","Les bois en contact avec le sol"],ans:1,exp:"L'<strong>hespérophane</strong> (Hespérophanes) attaque préférentiellement le <strong>hêtre et le chêne</strong>. C'est un grand coléoptère (10-20 mm) dont le développement larvaire dure 2 à 6 ans."},

// ── TERMITES ──────────────────────────────────────────────────
{id:26,theme:'termites',q:"Quelle est l'espèce de termite souterrain la plus répandue en France, originaire d'Amérique ?",opts:["Reticulitermes lucifugus","Reticulitermes grassei","Reticulitermes flavipes","Kalotermes flavicollis"],ans:2,exp:"<strong>Reticulitermes flavipes</strong> (originaire de Louisiane) est désormais l'espèce la plus répandue en France, notamment en Gironde. Reticulitermes grassei est le 'termite des Landes' indigène."},
{id:27,theme:'termites',q:"Dans une colonie de termites, quelle caste s'occupe de la recherche de nourriture et de l'entretien des galeries ?",opts:["Les soldats","Les reproducteurs","Les ouvriers","Les nymphes"],ans:2,exp:"Les <strong>ouvriers</strong> sont les plus nombreux. Ils cherchent la nourriture, construisent et entretiennent les galeries, nourrissent toutes les autres castes (soldats compris, qui ne peuvent se nourrir seuls)."},
{id:28,theme:'termites',q:"Comment reconnaît-on un soldat termite (Reticulitermes) ?",opts:["Par ses ailes (imago)","Par sa grosse tête et ses fortes mandibules","Par sa taille plus petite que les ouvriers","Par sa couleur rouge"],ans:1,exp:"Le <strong>soldat termite</strong> se reconnaît à sa <strong>grosse tête sclérifiée (orangée) et ses mandibules puissantes</strong>. Il défend la colonie contre les fourmis principalement. Il dépend des ouvriers pour se nourrir."},
{id:29,theme:'termites',q:"L'essaimage des termites correspond à :",opts:["La construction de nouvelles galeries","L'envol des reproducteurs ailés (imagos) pour fonder de nouvelles colonies","L'attaque massive d'une nouvelle structure","La période de dormance hivernale"],ans:1,exp:"L'<strong>essaimage</strong> = envol massif de <strong>reproducteurs ailés (imagos/alates)</strong>, généralement au printemps. Après vol nuptial, ils perdent leurs ailes et forment de nouveaux couples royaux pour fonder de nouvelles colonies."},
{id:30,theme:'termites',q:"Un signe caractéristique de présence de termites est :",opts:["Des trous circulaires de 1-3 mm avec sciure fine","Des galeries maçonnées (cordonnets de terre) en surface","Une poudre rouge-brique sur le bois","Des galeries en spirale"],ans:1,exp:"Les termites souterrains construisent des <strong>cordonnets de terre</strong> (galeries maçonnées avec terre mâchée et salive) pour se déplacer à l'abri de la lumière. Absence de sciure visible = signe distinctif vs insectes xylophages."},
{id:31,theme:'termites',q:"Le Kalotermes flavicollis (termite des bois secs) se distingue des Reticulitermes car :",opts:["Il produit des cordonnets de terre","Il vit directement dans le bois sans contact avec le sol et produit de la sciure","Il attaque uniquement les bois humides","Sa colonie peut dépasser un million d'individus"],ans:1,exp:"Le <strong>Kalotermes</strong> (termite des bois secs) vit <strong>directement dans le bois sans contact sol</strong> et produit de la sciure visible. Ses dégâts sont moins importants économiquement que les Reticulitermes en France."},
{id:32,theme:'termites',q:"La déclaration en mairie en cas de découverte de termites est imposée par :",opts:["La loi ALUR","L'article L.133-1 du Code de la construction","La norme XP P 03-201","L'arrêté du 29 mars 2007"],ans:1,exp:"<strong>L'article L.133-1 du Code de la construction</strong> impose aux propriétaires de déclarer en mairie la présence de termites dans un délai d'<strong>un mois</strong> après découverte."},
{id:33,theme:'termites',q:"Pourquoi les termites peuvent-ils causer des dégâts importants avant d'être détectés ?",opts:["Parce qu'ils sont très rapides","Parce qu'ils dévorent le bois de l'intérieur en préservant la surface externe","Parce qu'ils attaquent la nuit uniquement","Parce qu'ils sont microscopiques"],ans:1,exp:"Les termites <strong>consomment le bois de l'intérieur en laissant intact le placage externe</strong>. Une poutre peut être entièrement creusée tout en paraissant saine en surface, ce qui rend la détection visuelle seule insuffisante."},

// ── TRAITEMENT ────────────────────────────────────────────────
{id:34,theme:'traitement',q:"Lors d'un traitement thermique curatif contre les insectes xylophages, quelle température doit être atteinte au cœur du bois ?",opts:["45°C pendant 30 min","55°C pendant au moins 60 min","70°C pendant 15 min","60°C pendant 20 min"],ans:1,exp:"La norme impose d'atteindre <strong>55°C au point le plus froid du bois pendant minimum 60 minutes</strong> pour garantir la mort de tous les stades (œuf, larve, adulte)."},
{id:35,theme:'traitement',q:"Le traitement par anoxie consiste à :",opts:["Chauffer le bois à 55°C","Priver les insectes d'oxygène par injection de CO2 ou azote","Appliquer un insecticide chimique en injection","Immerger le bois dans l'eau"],ans:1,exp:"L'<strong>anoxie</strong> substitue l'O2 par un gaz inerte (CO2 ou azote) pour asphyxier les insectes. Méthode douce idéale pour objets patrimoniaux, meubles anciens. Aucun résidu chimique."},
{id:36,theme:'traitement',q:"Le traitement préventif en autoclave utilise principalement :",opts:["Huile de lin sous pression","Sels de cuivre (CUAZ, CBT) injectés sous vide/pression","Résine époxy","Sel marin"],ans:1,exp:"L'<strong>autoclave</strong> injecte sous vide/pression des <strong>sels de cuivre (CUAZ, CBT)</strong> dans le bois. Le CCA (arséniate de cuivre chrome) est désormais interdit en Europe pour les usages courants."},
{id:37,theme:'traitement',q:"Le fipronil est principalement utilisé dans le cadre du traitement anti-termites :",opts:["Comme traitement de surface du bois","Comme barrière chimique injectée dans le sol","Comme appât dilué dans l'eau","En fumigation des combles"],ans:1,exp:"Le <strong>fipronil</strong> est l'insecticide de référence pour les <strong>barrières chimiques anti-termites</strong> (injection dans le sol en périphérie des fondations). Il agit sur le système nerveux des insectes."},
{id:38,theme:'traitement',q:"Quelle est la durée de garantie habituelle d'une barrière chimique anti-termites (injection fipronil dans sol) ?",opts:["3 ans","5 ans","10 ans","20 ans"],ans:2,exp:"Les barrières chimiques anti-termites au fipronil ont généralement une <strong>garantie de 10 ans</strong>. Passé ce délai, un renouvellement est recommandé selon les conditions du terrain."},
{id:39,theme:'traitement',q:"Dans une construction neuve en zone termitée, quelle protection est exigée ?",opts:["Traitement thermique obligatoire de tous les bois","Barrière anti-termites physique ou physico-chimique (DTU 51.4)","Utilisation exclusive de béton","Peinture anti-termites sur toutes les surfaces bois"],ans:1,exp:"Le <strong>DTU 51.4</strong> et la norme NF EN ISO 10426-2 imposent une <strong>barrière anti-termites</strong> dans le neuf en zone infestée : physique (géotextile, inox), physico-chimique (produit dans sol), ou combinée."},

// ── RÉGLEMENTATION ────────────────────────────────────────────
{id:40,theme:'reglem',q:"La norme définissant la méthode de réalisation du diagnostic termites est :",opts:["NF EN 335","NF P 03-201 (XP P 03-201)","DTU 31.2","NF EN 350"],ans:1,exp:"La <strong>norme XP P 03-201</strong> (révisée en 2016) définit la méthode de réalisation de l'état relatif à la présence de termites. L'arrêté du 29 mars 2007 fixe le contenu du rapport."},
{id:41,theme:'reglem',q:"La certification d'un diagnostiqueur immobilier doit être renouvelée :",opts:["Tous les 2 ans","Tous les 5 ans","Tous les 10 ans","À vie (sans renouvellement)"],ans:1,exp:"La certification diagnostiqueur (termites, DPE, amiante…) doit être <strong>renouvelée tous les 5 ans</strong> par examen oral et écrit auprès d'un organisme accrédité COFRAC."},
{id:42,theme:'reglem',q:"L'état termites est valable :",opts:["3 mois","6 mois","1 an","2 ans"],ans:1,exp:"L'<strong>état relatif à la présence de termites</strong> est valable <strong>6 mois</strong>. Il doit être en cours de validité à la signature de l'acte authentique de vente."},
{id:43,theme:'reglem',q:"Le diagnostic termites obligatoire est déclenché par :",opts:["Tout propriétaire qui le souhaite","Un arrêté préfectoral délimitant une zone infestée","La demande de l'acquéreur uniquement","Une infestation visible dans le bien"],ans:1,exp:"L'obligation de réaliser l'état termites est fixée par un <strong>arrêté préfectoral département par département</strong> délimitant les zones infestées ou susceptibles de l'être. Hors zone : pas d'obligation légale."},
{id:44,theme:'reglem',q:"La loi ALUR (2014) a introduit concernant la mérule :",opts:["Une obligation de diagnostic mérule lors de toute vente","Un dispositif d'information sur les zones à risque mérule dans certains départements","Un traitement obligatoire en cas de découverte","Une déclaration en préfecture sous 8 jours"],ans:1,exp:"La loi ALUR a créé un <strong>dispositif d'information sur la mérule</strong> : dans les zones à risque définies par arrêté préfectoral, le vendeur doit informer l'acquéreur. L'obligation de diagnostic varie selon les zones."},
{id:45,theme:'reglem',q:"Quel document officiel récapitule tous les diagnostics obligatoires lors d'une vente ?",opts:["Le PLU","Le DDT (Dossier de Diagnostic Technique)","Le DPE seul","Le rapport de l'expert judiciaire"],ans:1,exp:"Le <strong>DDT (Dossier de Diagnostic Technique)</strong> regroupe tous les diagnostics obligatoires : DPE, amiante, plomb, termites, gaz, électricité, ERP, état des risques... Il est remis à l'acquéreur."},

// ── MÉTHODE DE DIAGNOSTIC ─────────────────────────────────────
{id:46,theme:'methode',q:"Quel est l'outil principal du diagnostiqueur pour sonder le bois lors d'un état termites ?",opts:["Un marteau","Un tournevis ou poinçon","Une perceuse","Un couteau"],ans:1,exp:"Le <strong>poinçon ou tournevis</strong> est l'outil de base : il permet de sonder la solidité du bois (creux = galeries de termites) et d'évaluer la profondeur des dégâts sans destruction des parties saines."},
{id:47,theme:'methode',q:"Un bois dont le taux d'humidité dépasse quel seuil est considéré à risque fongique ?",opts:["10%","15%","20%","30%"],ans:2,exp:"Un taux d'humidité du bois supérieur à <strong>20%</strong> est considéré à risque pour le développement des champignons. L'humidimètre (xylomètre) est indispensable lors du diagnostic."},
{id:48,theme:'methode',q:"Le diagnostiqueur peut-il démonter des éléments fixés (lambris, habillages) pour inspecter le bois ?",opts:["Oui, systématiquement","Non, il ne peut que sonder sans destruction des parties saines","Oui mais seulement en cave","Oui avec l'accord écrit du propriétaire"],ans:1,exp:"La norme XP P 03-201 précise que le diagnostic est réalisé <strong>sans destruction des parties saines</strong>. Le diagnostiqueur ne peut pas déposer lambris, habillages ou revêtements fixés, mais sonde les bois accessibles."},
{id:49,theme:'methode',q:"Lors d'un état parasitaire, le diagnostiqueur doit également inspecter à l'extérieur :",opts:["Uniquement la façade","Arbres, souches, piquets de clôture, débris végétaux et stocks de bois","Uniquement les bois de charpente","Les fondations de la maison"],ans:1,exp:"L'inspection inclut le <strong>non bâti extérieur</strong> : arbres, souches, piquets, bois stockés, débris végétaux — tous ces éléments peuvent constituer des réservoirs de termites."},
{id:50,theme:'methode',q:"Un diagnostiqueur détecte un bois creux à la percussion du poinçon, sans trous ni sciure visibles. À quel parasite doit-il d'abord penser ?",opts:["Lyctus (poudre farineuse)","Capricorne (trous ovales)","Termites (galeries internes sans trace extérieure)","Champignon (bois mou)"],ans:2,exp:"Le caractère <strong>'creux à la percussion sans trace extérieure visible'</strong> est la signature des <strong>termites</strong> : ils consomment l'intérieur en préservant une mince coque externe. Aucune sciure ni trou de sortie."},
{id:51,theme:'methode',q:"La caméra thermique est utilisée en diagnostic pour :",opts:["Mesurer la résistance du bois","Détecter les zones humides cachées ou variations de température liées aux nids","Compter les insectes présents","Mesurer l'épaisseur du bois"],ans:1,exp:"La <strong>caméra thermique infrarouge</strong> détecte les <strong>variations de température révélant des zones humides cachées</strong> (infiltrations, ponts thermiques) ou parfois l'activité de colonies de termites."},

// ── QUESTIONS SUR IMAGES ──────────────────────────────────────
{id:52,theme:'image',img:true,imgDesc:`┌─────────────────────────────────┐
│  POUTRE EN BOIS (vue de face)   │
│                                 │
│  Surface : aspect brun-ocre     │
│  Fissures en PETITS CUBES       │
│  □□□ □□□ □□□ □□□               │
│  □□□ □□□ □□□ □□□               │
│  Bois friable, effrite au doigt │
│  Odeur de moisi intense         │
│  Filaments blancs en surface    │
└─────────────────────────────────┘`,imgCap:"Photo : surface d'une poutre de charpente",
q:"D'après les indices visuels ci-dessus, quel agent de dégradation est responsable ?",opts:["Pourriture fibreuse (polypore)","Pourriture cubique brune (mérule ou coniophore)","Attaque de capricorne","Pourriture molle (ascomycètes)"],ans:1,exp:"Les <strong>fissures en petits cubes, brun-ocre, filaments blancs</strong> = signature de la <strong>pourriture cubique</strong> causée par la mérule ou le coniophore. La mérule est la première suspicion avec les filaments blancs visibles."},
{id:53,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────┐
│  LAMBOURDE EN SOUS-FACE DE PLANCHER  │
│                                      │
│  Bois d'aspect normal en surface     │
│  Au sondage poinçon : SON CREUX      │
│  Pas de trous visibles               │
│  Pas de sciure ni vermoulure         │
│  Sur le mur adjacent : fine pellicule│
│  de TERRE BRUNÂTRE en tube vertical  │
│  ══════ ← cordonnet de 5mm de large  │
└──────────────────────────────────────┘`,imgCap:"Observation lors d'une inspection en vide sanitaire",
q:"L'ensemble des indices observés oriente vers :",opts:["Attaque de vrillette (trous trop petits pour être vus)","Infestation de termites souterrains","Pourriture fongique avancée","Présence de fourmis charpentières"],ans:1,exp:"<strong>Bois creux sans trace extérieure + cordonnet de terre</strong> sur le mur = signature typique des <strong>termites souterrains</strong> (Reticulitermes). Le cordonnet est leur galerie maçonnée protectrice."},
{id:54,theme:'image',img:true,imgDesc:`┌────────────────────────────────────┐
│  SECTION DE POUTRE (coupe transv.) │
│                                    │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░       │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░       │  ← Aubier (clair)
│  ████████████████████████          │
│  █████ TROUS OVALES ██████         │  ← Duramen brun foncé
│  ████████ 6-10mm █████████         │
│  ████████████████████████          │
│  Galeries remplies de sciure       │
│  Essence : PIN (résineux)          │
└────────────────────────────────────┘`,imgCap:"Coupe d'une pièce de charpente en résineux",
q:"Les trous ovales de 6-10 mm dans ce bois résineux indiquent :",opts:["Lyctus (1-2 mm ronds, feuillus)","Vrillette (1-3 mm ronds)","Capricorne des maisons","Fourmis charpentières (pas de trous de sortie réguliers)"],ans:2,exp:"<strong>Trous ovales de 6-10 mm dans un résineux</strong> = signature du <strong>capricorne des maisons</strong> (Hylotrupes bajulus). Le lyctus fait 1-2 mm ronds dans les feuillus, la vrillette 1-3 mm ronds dans tous les bois."},
{id:55,theme:'image',img:true,imgDesc:`┌───────────────────────────────────┐
│  PARQUET EN CHÊNE (feuillus)      │
│                                   │
│  ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙      │
│  ∙ Très nombreux PETITS TROUS ∙   │
│  ∙ circulaires de 1-2 mm     ∙    │
│  ∙ POUDRE FARINEUSE jaune    ∙    │
│  ∙ fine comme de la farine   ∙    │
│  ∙ Bois : AUBIER riche amidon∙    │
│  ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙      │
└───────────────────────────────────┘`,imgCap:"Parquet en chêne avec infestation active",
q:"Cette combinaison (trous 1-2 mm, poudre farineuse, feuillus, aubier) est typique de :",opts:["Petite vrillette","Lyctus","Capricorne des maisons","Termites"],ans:1,exp:"<strong>1-2 mm ronds + poudre farineuse très fine + aubier de feuillus = LYCTUS</strong>. Le lyctus est spécifique aux feuillus riches en amidon (chêne, frêne...). La poudre fine 'comme de la farine' est son signe distinctif."},
{id:56,theme:'image',img:true,imgDesc:`┌─────────────────────────────────────┐
│  CHAMPIGNON sur bois humide         │
│                                     │
│  Mycélium : BLANC COTONNEUX         │
│  → vire au GRIS-ARGENTÉ             │
│  Cordons gris-noirs (rhizomorphes)  │
│  traversant le MUR en maçonnerie    │
│  Fructification :                   │
│  ╔════════════════╗                 │
│  ║ Console ROUILLE║ ← sporophore    │
│  ║ bordée de BLANC║                 │
│  ╚════════════════╝                 │
│  Poussière rouge-brique autour      │
│  Odeur lourde, nauséabonde          │
└─────────────────────────────────────┘`,imgCap:"Champignon observé dans un sous-sol mal ventilé",
q:"L'ensemble de ces caractéristiques (mycélium blanc→gris, rhizomorphes traversant la maçonnerie, fructification rouille) désigne :",opts:["Coniophore des caves","Polypore des caves","Mérule (Serpula lacrymans)","Armillaire"],ans:2,exp:"Mycélium blanc cotonneux → gris argenté + <strong>rhizomorphes traversant la maçonnerie</strong> + fructification rouille + <strong>poussière rouge-brique</strong> = signature incontestable de la <strong>mérule (Serpula lacrymans)</strong>."},
{id:57,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────┐
│  INSECTE OBSERVÉ en mai              │
│                                      │
│  Taille : 8-15 mm                    │
│  Corps aplati, brun-grisâtre         │
│  Longues antennes (> longueur corps) │
│  Taches claires sur les élytres      │
│  Trouvé mort sous une fenêtre        │
│  Bois adjacent : résineux (sapin)    │
│  Trous ovales visibles dans poutre   │
└──────────────────────────────────────┘`,imgCap:"Insecte adulte trouvé au pied d'un mur en combles",
q:"Cet insecte adulte est très probablement :",opts:["Vrillette (trop grand)","Lyctus (mauvais type de bois)","Capricorne des maisons (Hylotrupes bajulus)","Charançon du bois"],ans:2,exp:"<strong>8-15 mm, aplati, brun-grisâtre, longues antennes, taches claires sur élytres, résineux, trous ovales</strong> = <strong>Capricorne des maisons</strong> (Hylotrupes bajulus). L'adulte vit 1-2 semaines et est souvent trouvé mort."},
{id:58,theme:'image',img:true,imgDesc:`┌────────────────────────────────────────┐
│  INSECTES observés sous une lame       │
│  de parquet soulevée                   │
│                                        │
│  Individus BLANCHÂTRES 3-5 mm         │
│  Absence totale de pigmentation        │
│  Déplacement RAPIDE vers l'obscurité   │
│  Certains : GROSSE TÊTE orangée        │
│              + MANDIBULES puissantes   │
│  D'autres : corps élancé, plus petits  │
│  PAS de trous de sortie dans le bois   │
│  PAS de sciure visible                 │
└────────────────────────────────────────┘`,imgCap:"Observation sous lame de parquet",
q:"Ces insectes blanchâtres sans pigmentation avec certains individus à grosse tête orangée sont :",opts:["Larves de capricorne (mais bois trop clair)","Termites souterrains (ouvriers et soldats)","Fourmis charpentières (mauvaise couleur)","Petite vrillette adulte"],ans:1,exp:"<strong>Blanchâtres/incolores, fuyant la lumière, certains à grosse tête orangée (soldats), pas de sciure = TERMITES</strong>. Les deux castes observées sont les <strong>ouvriers (petits élancés)</strong> et les <strong>soldats (grosse tête orangée)</strong>."},
{id:59,theme:'image',img:true,imgDesc:`┌──────────────────────────────────────┐
│  BOIS DE CHARPENTE (vue latérale)    │
│                                      │
│  Trous ronds : 1-3 mm               │
│  Vermoulure GRANULEUSE               │
│  en forme de LENTILLES ~1mm          │
│  ○○○○ ← vermoulure caractéristique  │
│  Bois : vieux chêne (100 ans)        │
│  Humidité bois mesurée : 18%         │
│  Galeries circulaires internes       │
└──────────────────────────────────────┘`,imgCap:"Poutre de chêne ancienne, combles non ventilés",
q:"Trous 1-3 mm ronds + vermoulure en lentilles granuleuses + vieux bois = :",opts:["Lyctus (vermoulure farineuse, pas granuleuse)","Capricorne (trous ovales 6-10 mm)","Petite vrillette (Anobium punctatum)","Grosse vrillette (bois dégradé champignons)"],ans:2,exp:"<strong>Trous 1-3 mm ronds + vermoulure granuleuse en lentilles ~1mm + vieux bois ≥10 ans = petite vrillette</strong>. La grosse vrillette ferait des trous plus larges (3-5 mm) et préfère les bois préalablement attaqués par des champignons."},
{id:60,theme:'image',img:true,imgDesc:`┌────────────────────────────────────┐
│  MUR DE CAVE (vue de profil)       │
│                                    │
│  Pellicule CRÈME → BRUN-NOIR       │
│  aspect 'tâche de café' sur bois   │
│  Mycélium FIN et FILANDREUX        │
│  PAS de cordons épais (rhizomorphes│
│  absents)                          │
│  Odeur légère de champignon frais  │
│  Bois : présent uniquement dans    │
│  la zone humide (>40% humidité)    │
└────────────────────────────────────┘`,imgCap:"Cave très humide (dégât des eaux récent)",
q:"Ces caractéristiques (pellicule crème→brun-noir, sans rhizomorphes, humidité >40%, mycélium fin) correspondent à :",opts:["Mérule (Serpula lacrymans)","Coniophore des caves (Coniophora puteana)","Polypore des caves","Armillaire (champignon des racines)"],ans:1,exp:"<strong>Pellicule crème→brun-noir (aspect tâche de café), mycélium fin filandreux, SANS rhizomorphes, zone très humide >40% = Coniophore des caves</strong>. La mérule aurait des cordons épais gris-noirs et traverserait la maçonnerie."},
{id:61,theme:'image',img:true,imgDesc:`┌─────────────────────────────────────┐
│  GALERIE observée en surface d'un   │
│  solivage de plancher               │
│                                     │
│  Galerie en RELIEF sur le bois      │
│  Paroi : TERRE + SALIVE + bois mâché│
│  Largeur galerie : ~5-8 mm          │
│  Trajet : vertical puis horizontal  │
│  Bois au toucher : SON CREUX        │
│  PAS de sciure visible              │
│  Milieu : vide sanitaire humide     │
└─────────────────────────────────────┘`,imgCap:"Vide sanitaire, galeries en relief sur solive",
q:"Ces galeries en relief faites de terre et salive sans sciure visible sont caractéristiques de :",opts:["Fourmis charpentières (galeries dans le bois)","Termites souterrains (Reticulitermes)","Kalotermes flavicollis (termites bois secs)","Galeries de champignons"],ans:1,exp:"Les <strong>galeries maçonnées (cordonnets/tubes de terre+salive) en relief, sans sciure, son creux du bois</strong> = signature exclusive des <strong>termites souterrains Reticulitermes</strong>. Le Kalotermes vit dans le bois et ne fait pas de galeries de terre."},

// ── COMPLÉMENTAIRES HAUT NIVEAU ───────────────────────────────
{id:62,theme:'reglem',q:"L'arrêté du 29 mars 2007 définit :",opts:["Les zones infestées de termites","La méthode de réalisation de l'état termites (contenu du rapport)","Les tarifs des diagnostics","Les sanctions en cas de fausse déclaration"],ans:1,exp:"L'<strong>arrêté du 29 mars 2007</strong> définit précisément le <strong>contenu du rapport de l'état relatif à la présence de termites</strong> : identification du diagnostiqueur, zones visitées, éléments examinés, moyens d'investigation, etc."},
{id:63,theme:'reglem',q:"Un diagnostiqueur termites certifié peut-il exercer sans assurance RCP ?",opts:["Oui si certifié par le COFRAC","Non, l'assurance responsabilité civile professionnelle est obligatoire","Oui pour les diagnostics de moins de 100m²","Oui s'il est salarié d'une entreprise"],ans:1,exp:"L'assurance <strong>RCP (Responsabilité Civile Professionnelle)</strong> est <strong>obligatoire</strong> pour tout diagnostiqueur. Son numéro doit figurer sur le rapport de diagnostic."},
{id:64,theme:'termites',q:"Les termites se nourrissent principalement de :",opts:["Lignine du bois","Cellulose du bois et des matériaux cellulosiques (carton, papier...)","Résine des conifères","Amidon des feuillus uniquement"],ans:1,exp:"Les termites possèdent des protozoaires et bactéries intestinaux leur permettant de digérer la <strong>cellulose</strong>. Ils s'attaquent à tout matériau cellulosique : bois, carton, papier, isolants à base de cellulose."},
{id:65,theme:'insectes',q:"Pour les insectes à larves xylophages (capricorne, vrillette, lyctus), c'est _________ qui cause les dégâts, pas l'adulte.",opts:["La reine","La larve","Le mâle","L'œuf"],ans:1,exp:"C'est la <strong>larve</strong> qui creuse les galeries et consomme le bois pendant des mois à des années. L'adulte ne vit que quelques semaines et sort du bois uniquement pour se reproduire."},
{id:66,theme:'bois',q:"La norme NF EN 460 complète la NF EN 350. Elle définit :",opts:["Les classes d'emploi du bois","La durabilité naturelle requise selon la classe d'emploi visée","Le contenu du rapport de diagnostic","Les traitements autoclave homologués"],ans:1,exp:"La <strong>NF EN 460</strong> met en relation durabilité naturelle (EN 350) et classe d'emploi (EN 335) : elle indique si une essence est <strong>suffisamment durable naturellement</strong> pour une classe d'emploi donnée, ou si un traitement est nécessaire."},
{id:67,theme:'methode',q:"Lors d'un diagnostic, un bois présente un taux d'humidité de 25% mesuré à l'humidimètre. Que cela signifie-t-il ?",opts:["Le bois est sain et sec","Risque élevé de développement fongique (>20% = seuil critique)","Risque uniquement pour les insectes xylophages","Ce taux est normal pour un bois de structure"],ans:1,exp:"Un taux d'humidité de <strong>25% dépasse le seuil critique de 20%</strong> : risque important de développement des champignons lignivores. Ce taux doit déclencher une investigation sur la source d'humidité."},
{id:68,theme:'champignons',q:"Le bleuissement du bois est causé par :",opts:["La mérule","Des champignons chromogènes (Ophiostoma sp.) non destructeurs","Des termites","Un excès de résine"],ans:1,exp:"Le <strong>bleuissement</strong> est une coloration bleue-grise de l'aubier (surtout pin) causée par des <strong>champignons chromogènes (Ophiostoma)</strong>. Inesthétique mais peu destructeur mécaniquement. Ne pas confondre avec une pourriture."},
{id:69,theme:'termites',q:"Un essaimage de termites est observé dans un appartement. Quelle est la première mesure à prendre ?",opts:["Traiter immédiatement à l'insecticide","Contacter un opérateur certifié et déclarer en mairie dans le mois","Fermer les fenêtres et attendre que ça passe","Faire un diagnostic DPE"],ans:1,exp:"En cas d'essaimage (signe fort d'infestation), il faut : 1) <strong>Contacter un professionnel certifié</strong> pour diagnostic et traitement. 2) <strong>Déclarer en mairie dans le mois</strong> (obligation légale L.133-1 CCH)."},
{id:70,theme:'methode',q:"Lors d'un diagnostic, le diagnostiqueur peut noter 'autres agents de dégradation biologique' même si l'objet de la mission est uniquement les termites. Pourquoi ?",opts:["Pour facturer plus cher","Par obligation légale et devoir de conseil (il doit signaler champignons, insectes xylophages...)","Pour prolonger la durée de validité du rapport","Ce n'est pas autorisé"],ans:1,exp:"Lors de l'état termites, le diagnostiqueur a un <strong>devoir de conseil</strong> : il doit signaler tout autre agent de dégradation biologique détecté (champignons, capricorne...) dans le chapitre 'Constatations diverses', même si non demandé."}

]

/**
 * CAS PRATIQUES AMIANTE
 * Format : cas pratique avec descriptif du bien, locaux, matériaux, rapport labo,
 * puis questions guidées pour rédiger le rapport de repérage avant vente.
 *
 * Chaque cas contient :
 *  - contexte  : énoncé de la mission
 *  - bien      : description du bien (surface, pièces, année, particularités)
 *  - locaux    : tableau local → {sol, mur, plafond, divers}
 *  - rapportLabo : résultats des analyses de laboratoire
 *  - questions : questions QCM guidant l'étudiant dans le raisonnement
 */

export const CAS_PRATIQUES_AMIANTE = [

// ════════════════════════════════════════════════════════════════════════════
// CAS 1 — Appartement PICHOU, Valenciennes (d'après cas réel de formation)
// ════════════════════════════════════════════════════════════════════════════
{
  id: 1,
  titre: "Appartement PICHOU — Vente avant 1997",
  difficulte: "⭐⭐ Intermédiaire",
  contexte: `M. et Mme Ernest PICHOU vous sollicitent pour un diagnostic amiante avant vente de leur appartement situé 5 place de la Mairie, RDC Droite, lot 54 — 59300 VALENCIENNES.

L'appartement comprend 4 pièces (80 m²) avec une cave (lot 001) et un garage (lot 002).
Année de construction : 1970.
M. PICHOU sera présent lors de votre intervention.

⚠️ La cave est inaccessible (clé perdue).
Les résultats d'analyses de vos prélèvements sont tous « sans amiante ».`,

  bien: {
    proprietaire: "M. et Mme Ernest PICHOU",
    adresse: "5 place de la Mairie, RDC Droite, lot 54 — 59300 VALENCIENNES",
    type: "Appartement",
    surface: "80 m²",
    pieces: 4,
    annexes: ["Cave (lot 001)", "Garage (lot 002)"],
    anneeConstruction: 1970,
    particularites: ["Cave inaccessible (clé perdue)", "Propriétaire présent"],
  },

  locaux: [
    { local:"Entrée",      sol:"Dalles de sol noires et blanches",      mur:"Panneaux collés en bois",                                     plafond:"Plâtre peint",                    divers:"" },
    { local:"Cuisine",     sol:"Dalles de sol noires et blanches",      mur:"Plâtre peint",                                                plafond:"Plâtre peint",                    divers:"Conduit de fluides en PVC" },
    { local:"Dégagement",  sol:"Lames vinyles imitation parquet",        mur:"Plâtre peint",                                                plafond:"Plâtre peint",                    divers:"" },
    { local:"WC",          sol:"Carrelage",                              mur:"Plâtre, papier peint",                                        plafond:"Plâtre peint",                    divers:"Conduit de fluides en fibrociment" },
    { local:"Salle d'eau", sol:"Dalles de sol noires et blanches",      mur:"Faïence",                                                     plafond:"Plaques de plâtre vissées",       divers:"" },
    { local:"Chambre 1",   sol:"Parquet bois massif",                   mur:"Panneaux de cloisons en plaques de plâtre",                   plafond:"Plaques planes dures en fibrociment", divers:"" },
    { local:"Chambre 2",   sol:"Parquet bois massif",                   mur:"Panneaux de cloisons en plaques de plâtre",                   plafond:"Plaques planes dures en fibrociment", divers:"" },
    { local:"Dressing",    sol:"Moquette non collée",                   mur:"Plâtre peint",                                                plafond:"Plâtre peint",                    divers:"" },
    { local:"Séjour",      sol:"Parquet bois massif",                   mur:"Soubassement en plaques de menuiserie + papier peint sur plâtre", plafond:"Panneaux vissés en bois",    divers:"" },
    { local:"Cave",        sol:"Terre battue",                          mur:"Bloc béton creux",                                            plafond:"Laine de roche",                  divers:"⚠️ INACCESSIBLE (clé perdue)" },
    { local:"Garage",      sol:"Dalle béton",                           mur:"Bloc de béton creux",                                         plafond:"Laine de roche",                  divers:"Calorifugeage en caoutchouc noir" },
  ],

  rapportLabo: {
    laboratoire: "VISON LAB — Rue du Crayon — 69000 LYON",
    accreditation: "N° 856-8",
    dossier: "M. et Mme PICHOU — 5 place de la Mairie — 59300 Valenciennes",
    resultats: [
      { lieu:"SOL entrée", composant:"Dalle noire",   presence:"Absence", typeAmiante:"—" },
      { lieu:"SOL entrée", composant:"Dalle blanche", presence:"Absence", typeAmiante:"—" },
    ],
    note: "Tous les prélèvements reviennent « sans amiante »",
  },

  questions: [
    {
      id: 1,
      q: "Ce diagnostic est une mission de type :",
      opts: [
        "Repérage avant démolition (liste C)",
        "Repérage avant vente — liste A uniquement (DAAV)",
        "Repérage avant travaux (liste A+B+C)",
        "DAPP (Dossier Amiante Parties Privatives) — liste A+B",
      ],
      ans: 1,
      exp: "<strong>Repérage avant vente (DAAV)</strong> = liste A uniquement. La mission consiste à identifier les matériaux de la liste A susceptibles de contenir de l'amiante dans les parties privatives. Le DAPP (liste A+B) serait à l'initiative du syndic pour les parties privatives de la copropriété.",
    },
    {
      id: 2,
      q: "L'année de construction est 1970, soit avant le 1er juillet 1997. Le diagnostic est donc :",
      opts: [
        "Non obligatoire car le bâtiment a plus de 50 ans",
        "Obligatoire — tout bâtiment dont le permis de construire est antérieur au 1er juillet 1997",
        "Obligatoire uniquement si des travaux sont prévus",
        "Facultatif pour les appartements en rez-de-chaussée",
      ],
      ans: 1,
      exp: "Le diagnostic amiante avant vente est <strong>obligatoire pour tout bâtiment dont le permis de construire a été délivré avant le 1er juillet 1997</strong>. La construction en 1970 rend ce diagnostic obligatoire sans exception.",
    },
    {
      id: 3,
      q: "Dans l'entrée, les dalles de sol noires et blanches sont :",
      opts: [
        "Non concernées par le repérage amiante (parquet = pas d'amiante)",
        "Des matériaux de la liste A, susceptibles de contenir de l'amiante — prélèvement requis",
        "Des matériaux exclus du diagnostic avant vente",
        "Non concernées car le carrelage ne contient jamais d'amiante",
      ],
      ans: 1,
      exp: "Les <strong>dalles de sol en vinyle (dalles noires et blanches)</strong> antérieures à 1997 sont des matériaux de la <strong>liste A (flocages, calorifuges, faux-plafonds...)</strong>. Ici il s'agit de dalles de sol thermo-plastiques (liste B en général), mais pour un DAAV (avant vente) les dalles de sol peuvent être à vérifier selon leur composition. Un prélèvement a été effectué avec résultat « sans amiante ».",
    },
    {
      id: 4,
      q: "La cave est inaccessible (clé perdue). Comment traiter ce local dans le rapport ?",
      opts: [
        "Ignorer la cave, elle n'a pas à figurer dans le rapport",
        "Conclure à l'absence d'amiante pour la cave sans l'avoir inspectée",
        "Mentionner la cave comme 'non visitée / inaccessible' et informer le propriétaire par écrit dans le rapport",
        "Reporter le diagnostic jusqu'à obtention de la clé",
      ],
      ans: 2,
      exp: "Lorsqu'un local est <strong>inaccessible</strong>, l'opérateur doit le mentionner dans son rapport comme <strong>« partie non visitée »</strong> avec la raison (clé perdue), et informer le donneur d'ordre par écrit. Il ne peut pas conclure à l'absence d'amiante sans avoir inspecté le local.",
    },
    {
      id: 5,
      q: "Dans les chambres 1 et 2, le plafond est en 'plaques planes dures en fibrociment'. Ces matériaux sont :",
      opts: [
        "Non concernés par le diagnostic (fibrociment = pas d'amiante)",
        "Des MPSCA (matériaux susceptibles de contenir de l'amiante) — à rechercher dans la liste A",
        "Exclus de la liste A car ils sont vissés et non projetés",
        "Uniquement listés en liste B, non concernés par l'avant-vente",
      ],
      ans: 1,
      exp: "Les <strong>plaques planes dures en fibrociment</strong> (Eternit, Glasal...) sont des <strong>MPSCA (Matériaux et Produits Susceptibles de Contenir de l'Amiante)</strong>. Elles figurent dans la liste A du Code de la Santé Publique et doivent être recherchées lors du DAAV. Le fibrociment a largement contenu de l'amiante avant 1997.",
    },
    {
      id: 6,
      q: "Dans les WC, il y a un 'conduit de fluides en fibrociment'. Ce matériau est-il concerné par le repérage ?",
      opts: [
        "Non, les conduits sont des équipements techniques exclus du diagnostic",
        "Oui, les conduits en fibrociment sont des MPSCA à rechercher",
        "Non, car il s'agit de fluides, pas d'amiante",
        "Oui, mais uniquement si le conduit est visible et accessible",
      ],
      ans: 1,
      exp: "Les <strong>conduits de fluides en fibrociment</strong> (évacuations, chutes d'eau) sont bien des <strong>MPSCA figurant dans les listes de matériaux à rechercher</strong>. Avant 1997, le fibrociment contenait couramment de l'amiante. Ils doivent être mentionnés dans le rapport.",
    },
    {
      id: 7,
      q: "Le rapport d'analyses du labo VISON LAB (N° accréditation 856-8) conclut à l'absence d'amiante sur les dalles noires et blanches de l'entrée. Quelle est la conclusion pour ce matériau ?",
      opts: [
        "Présence d'amiante confirmée",
        "Absence d'amiante — matériau non amianté selon analyse",
        "Résultat non interprétable sans deuxième prélèvement",
        "Absence probable mais à surveiller",
      ],
      ans: 1,
      exp: "Le résultat d'analyse du laboratoire accrédité conclut à l'<strong>absence d'amiante</strong> pour les dalles noires et blanches de l'entrée. La conclusion du rapport doit reprendre ce résultat : <strong>« Absence d'amiante »</strong> pour ce matériau.",
    },
    {
      id: 8,
      q: "Pour les matériaux n'ayant pas fait l'objet d'un prélèvement (ex: plaques de fibrociment en chambre), quelles sont les options possibles ?",
      opts: [
        "Conclure systématiquement à la présence d'amiante",
        "Les ignorer et ne pas les mentionner dans le rapport",
        "Conclure à l'absence en s'appuyant sur les documents constructeurs, l'aspect visuel, ou effectuer un prélèvement",
        "Attendre les résultats d'une autre mission",
      ],
      ans: 2,
      exp: "Sans prélèvement, l'opérateur peut conclure à l'<strong>absence d'amiante</strong> en s'appuyant sur : documents constructeurs prouvant l'absence, marquage produit, ou caractéristiques visuelles certaines. À défaut, un <strong>prélèvement doit être réalisé</strong>. L'opérateur ne peut pas laisser un matériau MPSCA sans conclusion.",
    },
    {
      id: 9,
      q: "Quel modèle de rapport doit être remis à M. et Mme PICHOU, sachant que tous les prélèvements sont 'sans amiante' ?",
      opts: [
        "Un rapport libre sans format imposé",
        "Un rapport de type DAAV (avant vente) concluant à l'absence d'amiante pour les matériaux inspectés de la liste A",
        "Un modèle DTA (Dossier Technique Amiante)",
        "Un rapport uniquement pour les locaux accessibles, les autres ignorés",
      ],
      ans: 1,
      exp: "Le rapport est un <strong>DAAV (Diagnostic Amiante Avant Vente)</strong> structuré selon la réglementation. Il conclut à l'<strong>absence d'amiante</strong> pour tous les matériaux de la liste A inspectés. La cave inaccessible est mentionnée comme 'non visitée'. Ce rapport intègre le DDT pour la vente.",
    },
    {
      id: 10,
      q: "La conclusion du rapport pour la cave inaccessible doit être :",
      opts: [
        "Absence d'amiante (présumé)",
        "Présence d'amiante à confirmer",
        "Partie non visitée — local inaccessible lors de l'intervention (clé perdue) — conclusion impossible",
        "Absence d'amiante si le reste du bâtiment est sans amiante",
      ],
      ans: 2,
      exp: "Pour la cave inaccessible, la conclusion est <strong>« Partie non visitée »</strong>. L'opérateur doit indiquer la raison (clé perdue) et préciser que le propriétaire a été informé par écrit. <strong>Aucune conclusion n'est possible sans inspection</strong>. Le donneur d'ordre doit en être informé.",
    },
  ],
},

// ════════════════════════════════════════════════════════════════════════════
// CAS 2 — Maison individuelle MARTIN, avant démolition
// ════════════════════════════════════════════════════════════════════════════
{
  id: 2,
  titre: "Maison MARTIN — Avant démolition (liste C)",
  difficulte: "⭐⭐⭐ Avancé",
  contexte: `Mme Sylvie MARTIN vous confie une mission de repérage amiante avant démolition de sa maison individuelle de 1965 située au 12 rue des Lilas — 62000 ARRAS.

La maison doit être intégralement démolie pour construction d'une résidence.
Surface : 120 m² (R+1). Garage accolé (30 m²).
Tous les locaux sont accessibles.`,

  bien: {
    proprietaire: "Mme Sylvie MARTIN",
    adresse: "12 rue des Lilas — 62000 ARRAS",
    type: "Maison individuelle R+1",
    surface: "120 m² + garage 30 m²",
    pieces: 6,
    annexes: ["Garage accolé"],
    anneeConstruction: 1965,
    particularites: ["Démolition totale prévue", "Tous locaux accessibles"],
  },

  locaux: [
    { local:"Séjour",       sol:"Parquet collé",            mur:"Plaque de plâtre cartonnée + papier peint", plafond:"Flocage projeté",                    divers:"" },
    { local:"Cuisine",      sol:"Carrelage céramique",      mur:"Faïence + plâtre",                          plafond:"Plâtre peint",                       divers:"Conduit de fumée en fibrociment" },
    { local:"Chambre 1",    sol:"Moquette collée",          mur:"Plâtre peint",                              plafond:"Dalle de faux-plafond en fibre minérale", divers:"" },
    { local:"Chambre 2",    sol:"Carrelage",                mur:"Plâtre peint",                              plafond:"Plâtre peint",                       divers:"" },
    { local:"SDB",          sol:"Carrelage",                mur:"Faïence",                                   plafond:"Plâtre peint",                       divers:"Calorifuge sur canalisation" },
    { local:"Combles",      sol:"Terre battue",             mur:"Maçonnerie",                                plafond:"Charpente bois",                     divers:"Isolation en laine de verre" },
    { local:"Garage",       sol:"Béton",                    mur:"Maçonnerie",                                plafond:"Plaques ondulées fibrociment",        divers:"Calorifugeage tuyauterie" },
  ],

  rapportLabo: {
    laboratoire: "ANALYSO LAB — 15 avenue Pasteur — 59000 LILLE",
    accreditation: "N° 1234-A",
    dossier: "Mme MARTIN — 12 rue des Lilas — 62000 ARRAS",
    resultats: [
      { lieu:"Séjour — plafond", composant:"Flocage projeté",              presence:"Présence", typeAmiante:"Chrysotile" },
      { lieu:"Chambre 1",         composant:"Dalle faux-plafond",           presence:"Absence",  typeAmiante:"—" },
      { lieu:"SDB",               composant:"Calorifuge sur canalisation",  presence:"Présence", typeAmiante:"Amosite" },
      { lieu:"Garage",            composant:"Plaque ondulée fibrociment",   presence:"Présence", typeAmiante:"Chrysotile" },
    ],
    note: "Flocage + calorifuge + plaques ondulées = PRÉSENCE d'amiante confirmée",
  },

  questions: [
    {
      id: 1,
      q: "Cette mission est un repérage avant démolition. Quelles listes de matériaux sont concernées ?",
      opts: [
        "Liste A uniquement",
        "Liste A et B uniquement",
        "Listes A, B et C (repérage exhaustif avant démolition)",
        "Liste C uniquement",
      ],
      ans: 2,
      exp: "Le repérage <strong>avant démolition</strong> est le plus exhaustif : il porte sur les <strong>listes A, B et C</strong>. La liste C comprend tous les matériaux et produits susceptibles de contenir de l'amiante, y compris ceux inaccessibles en usage normal. L'opérateur doit avoir la <strong>certification avec mention</strong>.",
    },
    {
      id: 2,
      q: "Le flocage au plafond du séjour contient du chrysotile. Ce matériau de la liste A est en état dégradé. Quelle est la conclusion ?",
      opts: [
        "Absence d'amiante",
        "Présence d'amiante — chrysotile — matériau dégradé nécessitant action corrective avant démolition",
        "Présence d'amiante — à surveiller sans urgence",
        "Résultat non concluant",
      ],
      ans: 1,
      exp: "Le flocage contient de l'<strong>amiante chrysotile</strong>. Étant dégradé, il nécessite une <strong>action corrective avant les travaux de démolition</strong>. Le maître d'ouvrage doit faire retirer ce matériau par une entreprise certifiée avant démolition. Ce matériau figure en <strong>liste A</strong>.",
    },
    {
      id: 3,
      q: "Le calorifuge de la SDB contient de l'amosite. L'amosite est :",
      opts: [
        "Un type de serpentine (fibres souples)",
        "Un amphibole (fibres rigides comme des aiguilles) — plus dangereux que le chrysotile pour le mésothéliome",
        "Un minéral non cancérigène",
        "Le même type que le chrysotile",
      ],
      ans: 1,
      exp: "L'<strong>amosite</strong> (amiante brun) est un <strong>amphibole</strong> à fibres droites et rigides. Les données épidémiologiques montrent que les amphiboles (amosite, crocidolite) provoquent une incidence de mésothéliome plus élevée que le chrysotile. Sa découverte impose une <strong>gestion prioritaire</strong> avant la démolition.",
    },
    {
      id: 4,
      q: "Les plaques ondulées en fibrociment du garage contiennent du chrysotile. Ces matériaux sont :",
      opts: [
        "Peu dangereux car ils sont liés dans la matrice ciment (amiante-ciment)",
        "Dangereux uniquement si cassés ou sciés",
        "Matériaux amiantés à retirer avant démolition par une entreprise certifiée (sous-section 3 ou 4 selon état)",
        "À laisser en place car le fibrociment est toujours stable",
      ],
      ans: 2,
      exp: "Les <strong>plaques ondulées en fibrociment amianté</strong> doivent être retirées avant démolition par une <strong>entreprise certifiée</strong>. Si en bon état (non friable) → sous-section 4. Si dégradées → sous-section 3. Dans tous les cas, le retrait doit précéder la démolition pour éviter la dispersion de fibres.",
    },
    {
      id: 5,
      q: "Pour les dalles de faux-plafond en chambre 1 (résultat : absence d'amiante), la conclusion est :",
      opts: [
        "Présence probable d'amiante non détectée",
        "Absence d'amiante confirmée par analyse — matériau non amianté",
        "Non concluant, un second prélèvement est nécessaire",
        "Absence d'amiante uniquement si les dalles sont en bon état",
      ],
      ans: 1,
      exp: "L'analyse de laboratoire certifie l'<strong>absence d'amiante</strong> dans les dalles de faux-plafond. La conclusion est claire : <strong>matériau non amianté</strong>. Aucune mesure spécifique amiante n'est requise pour ce matériau lors de la démolition.",
    },
    {
      id: 6,
      q: "Quelle est l'obligation du maître d'ouvrage face aux résultats de présence d'amiante (flocage, calorifuge, plaques) ?",
      opts: [
        "Aucune obligation avant démolition si les matériaux sont en bon état",
        "Informer uniquement les futurs occupants",
        "Faire retirer les matériaux amiantés par une entreprise certifiée avant la démolition, et transmettre le rapport au préfet si matériau liste A dégradé",
        "Attendre que la commune donne son accord",
      ],
      ans: 2,
      exp: "Face à la <strong>présence d'amiante</strong>, le maître d'ouvrage doit : 1) Faire retirer les MPCA par une <strong>entreprise certifiée</strong> avant la démolition. 2) Si matériau liste A dégradé (AC3) → <strong>transmettre le rapport au préfet</strong>. 3) Assurer la <strong>traçabilité des déchets</strong> (BSDA).",
    },
    {
      id: 7,
      q: "L'isolation en laine de verre des combles est :",
      opts: [
        "Un matériau contenant systématiquement de l'amiante",
        "Un matériau ne contenant pas d'amiante — la laine de verre est une fibre minérale artificielle distincte de l'amiante",
        "Un matériau de liste C à prélever obligatoirement",
        "À analyser uniquement si posée avant 1980",
      ],
      ans: 1,
      exp: "La <strong>laine de verre</strong> est une <strong>fibre minérale artificielle (FMA)</strong>, distincte de l'amiante qui est un silicate naturel. La laine de verre ne contient <strong>pas d'amiante</strong>. Elle n'est pas visée par la réglementation amiante. Attention à ne pas confondre lors du diagnostic.",
    },
  ],
},

// ════════════════════════════════════════════════════════════════════════════
// CAS 3 — Immeuble collectif, DTA parties communes
// ════════════════════════════════════════════════════════════════════════════
{
  id: 3,
  titre: "Immeuble collectif DURAND — DTA Parties communes",
  difficulte: "⭐⭐ Intermédiaire",
  contexte: `Le syndic de copropriété de l'immeuble LE CÈDRE (construction 1975) vous confie la réalisation du Dossier Technique Amiante (DTA) des parties communes.

Adresse : 28 boulevard Foch — 33000 BORDEAUX
L'immeuble comprend : hall d'entrée, couloirs, cage d'escalier, local technique, toiture-terrasse, parking souterrain.`,

  bien: {
    proprietaire: "Copropriété LE CÈDRE — Syndic IMMOGESTION",
    adresse: "28 boulevard Foch — 33000 BORDEAUX",
    type: "Immeuble collectif d'habitation",
    surface: "Parties communes",
    pieces: 0,
    annexes: ["Local technique", "Toiture-terrasse", "Parking souterrain"],
    anneeConstruction: 1975,
    particularites: ["DTA parties communes uniquement", "Parties privatives exclues"],
  },

  locaux: [
    { local:"Hall d'entrée",    sol:"Carrelage céramique",   mur:"Plâtre peint",             plafond:"Faux-plafond dalles minérales",    divers:"" },
    { local:"Couloirs",          sol:"Carrelage",             mur:"Plâtre peint",             plafond:"Plâtre peint",                    divers:"Tuyauteries avec calorifuges" },
    { local:"Cage d'escalier",   sol:"Béton peint",           mur:"Enduit ciment peint",      plafond:"Enduit ciment",                   divers:"" },
    { local:"Local technique",   sol:"Béton",                 mur:"Béton brut",               plafond:"Flocage projeté sur poutrelles",   divers:"Calorifuges sur chaudière" },
    { local:"Toiture-terrasse",  sol:"Étanchéité bitumineuse",mur:"Acrotère béton",           plafond:"—",                               divers:"Plaques fibrociment en acrotère" },
    { local:"Parking souterrain",sol:"Béton",                 mur:"Béton peint",              plafond:"Flocage sur poutrelles béton",     divers:"" },
  ],

  rapportLabo: {
    laboratoire: "EUROLAB ANALYSES — 4 rue de la Science — 69500 BRON",
    accreditation: "N° 2567-B",
    dossier: "Copropriété LE CÈDRE — 28 bd Foch — 33000 BORDEAUX",
    resultats: [
      { lieu:"Hall d'entrée",      composant:"Dalle faux-plafond",        presence:"Absence",  typeAmiante:"—" },
      { lieu:"Couloirs",            composant:"Calorifuge tuyauterie",     presence:"Présence", typeAmiante:"Chrysotile" },
      { lieu:"Local technique",     composant:"Flocage poutrelles",        presence:"Présence", typeAmiante:"Chrysotile + Amosite" },
      { lieu:"Local technique",     composant:"Calorifuge chaudière",      presence:"Présence", typeAmiante:"Chrysotile" },
      { lieu:"Toiture-terrasse",    composant:"Plaque fibrociment acrotère",presence:"Absence", typeAmiante:"—" },
      { lieu:"Parking souterrain",  composant:"Flocage poutrelles",        presence:"Présence", typeAmiante:"Chrysotile" },
    ],
    note: "Plusieurs matériaux positifs — dont flocage en local technique (liste A, dégradé)",
  },

  questions: [
    {
      id: 1,
      q: "Cette mission est un DTA. Le DTA concerne :",
      opts: [
        "Les parties privatives de chaque appartement",
        "Les parties communes de l'immeuble et les ERP",
        "Uniquement les locaux techniques",
        "Uniquement les toitures et sous-sols",
      ],
      ans: 1,
      exp: "Le <strong>DTA (Dossier Technique Amiante)</strong> concerne les <strong>parties communes</strong> des immeubles collectifs d'habitation et l'ensemble des <strong>ERP (Établissements Recevant du Public)</strong>. Les parties privatives relèvent du DAPP ou du DAAV.",
    },
    {
      id: 2,
      q: "Le flocage du local technique contient du chrysotile et de l'amosite, et est dégradé. Quelle action doit être transmise au préfet ?",
      opts: [
        "Aucune, le syndic gère en interne",
        "Transmission des résultats au préfet obligatoire pour tout matériau liste A dégradé (AC3)",
        "Transmission uniquement si l'amosite dépasse un seuil réglementaire",
        "Transmission uniquement après confinement",
      ],
      ans: 1,
      exp: "Pour tout <strong>matériau de liste A en état dégradé (AC3)</strong>, la réglementation impose au propriétaire (ici le syndic représentant la copropriété) de <strong>transmettre les résultats au préfet du département</strong>. Le flocage dégradé contenant de l'amiante est l'exemple typique de cette obligation.",
    },
    {
      id: 3,
      q: "Les calorifuges des couloirs contiennent du chrysotile. Ces matériaux sont en liste :",
      opts: [
        "Liste C — avant démolition uniquement",
        "Liste A — calorifuges contenant de l'amiante",
        "Liste B — matériaux susceptibles",
        "Aucune liste, les couloirs sont des parties communes non concernées",
      ],
      ans: 1,
      exp: "Les <strong>calorifuges (isolation thermique sur canalisations)</strong> contenant de l'amiante figurent en <strong>liste A</strong> du Code de la Santé Publique. Ils font partie des matériaux prioritaires du DTA.",
    },
    {
      id: 4,
      q: "Les plaques fibrociment de la toiture-terrasse sont « sans amiante ». La conclusion pour ce matériau est :",
      opts: [
        "Présence probable non détectée",
        "Absence d'amiante confirmée — aucune mesure amiante spécifique requise",
        "À surveiller car toutes les toitures en fibrociment contiennent de l'amiante",
        "Résultat non valable pour les toitures",
      ],
      ans: 1,
      exp: "L'analyse certifie l'<strong>absence d'amiante</strong> dans les plaques fibrociment de la toiture. La conclusion est donc : <strong>matériau non amianté</strong>. Le résultat d'un laboratoire accrédité est la référence réglementaire.",
    },
    {
      id: 5,
      q: "Le DTA doit être mis à disposition de :",
      opts: [
        "Uniquement des occupants qui en font la demande",
        "Des occupants, des entreprises intervenant dans l'immeuble, et tenu à disposition des autorités",
        "Uniquement du syndic et du gestionnaire",
        "Uniquement des pompiers en cas d'incendie",
      ],
      ans: 1,
      exp: "Le <strong>DTA doit être tenu à disposition</strong> de toute personne physique ou morale appelée à effectuer des travaux dans l'immeuble, des occupants qui en font la demande, et des autorités compétentes. C'est une obligation de communication du propriétaire / syndic.",
    },
    {
      id: 6,
      q: "Le flocage dégradé du parking souterrain contient du chrysotile. En termes d'évaluation AC, quel résultat conduit à une action corrective immédiate ?",
      opts: [
        "AC1 (bon état)",
        "AC2 (état intermédiaire, surveillance périodique)",
        "AC3 (état dégradé, action corrective : retrait ou confinement requis)",
        "ACO (état neuf)",
      ],
      ans: 2,
      exp: "<strong>AC3</strong> = état dégradé → <strong>action corrective obligatoire</strong> (retrait ou confinement). AC1 = bon état, surveillance. AC2 = état intermédiaire, évaluation périodique. Le flocage dégradé du parking est en AC3 et impose une intervention prioritaire.",
    },
  ],
},

// ════════════════════════════════════════════════════════════════════════════
// CAS 4 — Local commercial, avant travaux
// ════════════════════════════════════════════════════════════════════════════
{
  id: 4,
  titre: "Local commercial SARL DUPONT — Avant travaux",
  difficulte: "⭐⭐⭐ Avancé",
  contexte: `La SARL DUPONT vous mandate pour un repérage amiante avant travaux de rénovation de son local commercial situé au 45 rue du Commerce — 59000 LILLE.

Construction : 1968. Surface : 200 m² (RDC + entresol).
Les travaux prévus concernent : remplacement du faux-plafond du RDC, percement de murs pour création d'une porte, réfection des peintures.`,

  bien: {
    proprietaire: "SARL DUPONT",
    adresse: "45 rue du Commerce — 59000 LILLE",
    type: "Local commercial",
    surface: "200 m²",
    pieces: 0,
    annexes: ["Entresol"],
    anneeConstruction: 1968,
    particularites: ["Travaux de rénovation prévus", "Percement de murs", "Remplacement faux-plafond"],
  },

  locaux: [
    { local:"RDC — Surface vente", sol:"Carrelage",        mur:"Enduit plâtre peint",     plafond:"Faux-plafond dalles minérales sur ossature", divers:"" },
    { local:"RDC — Réserve",       sol:"Béton peint",      mur:"Béton brut",              plafond:"Plâtre projeté",                             divers:"Calorifuge tuyauterie chauffage" },
    { local:"Entresol",            sol:"Parquet collé",    mur:"Plâtre peint",            plafond:"Plâtre peint",                               divers:"" },
    { local:"Sanitaires",          sol:"Carrelage",        mur:"Faïence + plâtre",        plafond:"Plâtre peint",                               divers:"Conduit d'évacuation fibrociment" },
  ],

  rapportLabo: {
    laboratoire: "NORDLAB — 8 rue Pasteur — 59300 VALENCIENNES",
    accreditation: "N° 3301-C",
    dossier: "SARL DUPONT — 45 rue du Commerce — 59000 LILLE",
    resultats: [
      { lieu:"RDC — Surface vente", composant:"Dalle faux-plafond",      presence:"Présence", typeAmiante:"Chrysotile" },
      { lieu:"RDC — Réserve",       composant:"Calorifuge tuyauterie",   presence:"Présence", typeAmiante:"Amosite" },
      { lieu:"RDC — Réserve",       composant:"Plâtre projeté",          presence:"Absence",  typeAmiante:"—" },
      { lieu:"Entresol",            composant:"Colle de parquet",        presence:"Présence", typeAmiante:"Chrysotile" },
    ],
    note: "Faux-plafond + calorifuge + colle = présence d'amiante sur 3 matériaux",
  },

  questions: [
    {
      id: 1,
      q: "Cette mission est un repérage avant travaux. Quelles listes de matériaux sont concernées ?",
      opts: [
        "Liste A uniquement",
        "Listes A et B uniquement",
        "Listes A, B et C pour les zones impactées par les travaux",
        "Liste C uniquement pour les démolitions",
      ],
      ans: 2,
      exp: "Le repérage <strong>avant travaux</strong> porte sur les <strong>listes A, B et C</strong>, mais limité aux <strong>zones impactées par les travaux</strong> prévus. L'opérateur doit avoir la <strong>certification avec mention</strong>. Il est différent du repérage avant démolition (qui couvre tout le bâtiment).",
    },
    {
      id: 2,
      q: "Les dalles de faux-plafond du RDC contiennent du chrysotile. Les travaux de remplacement du faux-plafond peuvent-ils commencer immédiatement ?",
      opts: [
        "Oui, les dalles en chrysotile sont peu dangereuses",
        "Non — il faut d'abord faire retirer les dalles amiantées par une entreprise certifiée avant les travaux de rénovation",
        "Oui, avec port de masque FFP2 suffisant",
        "Oui si le faux-plafond est en bon état (non friable)",
      ],
      ans: 1,
      exp: "Non. Les dalles de faux-plafond <strong>contenant de l'amiante doivent être retirées par une entreprise certifiée</strong> (sous-section 4 si non friables) <strong>avant</strong> tout autre travaux. Les travailleurs intervenant sur ces matériaux doivent être formés et équipés. Les travaux de rénovation ne peuvent commencer qu'après désamiantage.",
    },
    {
      id: 3,
      q: "La colle de parquet de l'entresol contient du chrysotile. Le percement des murs de l'entresol est-il concerné par ce résultat ?",
      opts: [
        "Non, la colle de parquet est au sol et les murs sont distincts",
        "Oui — le percement peut générer des vibrations et décoller la colle amiantée, libérant des fibres",
        "Non, seuls les matériaux directement impactés sont concernés",
        "Oui mais uniquement si le parquet est arraché",
      ],
      ans: 1,
      exp: "Même si la colle de parquet n'est pas directement percée, les <strong>vibrations mécaniques</strong> liées aux percements peuvent décoller la colle amiantée et libérer des fibres. L'opérateur doit signaler ce risque. Une <strong>évaluation du risque par l'entreprise de travaux</strong> est nécessaire avant intervention.",
    },
    {
      id: 4,
      q: "Le calorifuge de la réserve contient de l'amosite (amphibole). Par rapport au chrysotile, l'amosite présente :",
      opts: [
        "Moins de risques car ses fibres sont moins fines",
        "Des risques équivalents",
        "Des risques plus élevés pour le mésothéliome selon les données épidémiologiques",
        "Aucun risque particulier si le matériau est intact",
      ],
      ans: 2,
      exp: "Les données épidémiologiques montrent que les <strong>fibres amphiboles (amosite, crocidolite)</strong> provoquent une incidence de mésothéliome <strong>plus élevée</strong> que les fibres de chrysotile. Leur rigidité et leur biopersistance plus importante dans les poumons expliquent cette différence. L'amosite impose une gestion prioritaire.",
    },
    {
      id: 5,
      q: "Que doit mentionner l'opérateur pour les zones non impactées par les travaux (sanitaires avec conduit fibrociment) ?",
      opts: [
        "Ne pas les mentionner car hors périmètre de mission",
        "Les mentionner dans le rapport même si hors zone de travaux, en précisant qu'elles ne sont pas impactées par les travaux prévus",
        "Conclure à l'absence d'amiante par défaut",
        "Les inclure dans le repérage complet avec prélèvement obligatoire",
      ],
      ans: 1,
      exp: "L'opérateur doit <strong>mentionner dans son rapport</strong> tous les matériaux MPSCA observés, même hors zone de travaux, en précisant qu'ils ne sont pas dans la zone concernée. Cette information permet au maître d'ouvrage d'avoir une vision complète. Pour les sanitaires, le conduit fibrociment doit être signalé.",
    },
  ],
},

]

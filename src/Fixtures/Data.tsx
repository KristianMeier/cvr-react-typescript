type Icon = {
  id: number
  text: string
  faIcon: string
}

type TextIcon = {
  id: number
  text: string
  faIcon: string
  link: string
}

type TitleType = {
  mainTitle: string
  earthIcon: Icon[]
  textIcons: TextIcon[]
  titleLinks: TextIcon[]
}

type DataType = {
  navbar: {
    textIcons: TextIcon[]
  }
  title: TitleType
  search: {
    title: string
    textIcons: TextIcon[]
  }
  footer: {
    firstColumn: TextIcon[]
    secondColumn: TextIcon[]
    thirdColumn: TextIcon[]
  }
}

export const Data: DataType = {
  navbar: {
    textIcons: [
      {
        id: 1,
        text: 'Mit Virk',
        faIcon: 'fa-solid fa-table-cells fa-1x',
        link: '/MitVirk',
      },
      {
        id: 2,
        text: 'Digital Post',
        faIcon: 'fa-solid fa-star fa-1x',
        link: '/DigitalMail',
      },
      {
        id: 3,
        text: 'Følger',
        faIcon: 'fa-regular fa-envelope fa-1x',
        link: '/Follows',
      },
      {
        id: 4,
        text: 'Login',
        faIcon: 'fa-solid fa-lock fa-1x',
        link: '/LogIn',
      },
    ],
  },

  title: {
    mainTitle: 'CVR - Det Centrale Virksomhedsregister',
    earthIcon: [{ id: 5, text: '', faIcon: 'fa-solid fa-globe fa-1x' }],
    textIcons: [
      {
        id: 6,
        text: 'Github Repo',
        faIcon: '',
        link: '/Danish',
      },
      // {
      //   id: 7,
      //   text: 'English',
      //   faIcon: '',
      //   link: '/English',
      // },
      // {
      //   id: 8,
      //   text: 'Kaaialilsut',
      //   faIcon: '',
      //   link: '/Kaaialilsut',
      // },
    ],
    titleLinks: [
      {
        id: 9,
        text: 'Søg i CVR',
        faIcon: '',
        link: '/',
      },
      {
        id: 10,
        text: 'Hjælp til CVR',
        faIcon: '',
        link: '/Help',
      },
      {
        id: 11,
        text: 'Kurv',
        faIcon: '',
        link: '/Kurv',
      },
    ],
  },
  search: {
    title: 'Search CVR',
    textIcons: [
      {
        id: 12,
        text: 'Søg i CVR',
        faIcon: 'fa-solid fa-magnifying-glass fa-2x',
        link: '/Search',
      },
    ],
  },
  footer: {
    firstColumn: [
      {
        id: 14,
        text: 'Emner',
        faIcon: '',
        link: '/Emner',
      },
      {
        id: 15,
        text: 'Find Selvbetjening eller mere',
        faIcon: '',
        link: '/Selvbetjening',
      },
      {
        id: 16,
        text: 'Myndigheder',
        faIcon: '',
        link: '/Myndigheder',
      },
      {
        id: 17,
        text: 'Find selvbetjening sorteret efter myndigheder',
        faIcon: '',
        link: '/FindSelvbetjening',
      },
    ],
    secondColumn: [
      {
        id: 18,
        text: 'Kontakt CVR',
        faIcon: '',
        link: '/KontantCvr',
      },
      { id: 19, text: 'Cookies', faIcon: '', link: '/Cookies' },
      {
        id: 20,
        text: 'Find selvbetjening sorteret efter myndigheder',
        faIcon: '',
        link: '/FindSelvbetjening',
      },
      {
        id: 21,
        text: 'Persondata Politik',
        faIcon: '',
        link: '/PersonData',
      },
      {
        id: 22,
        text: 'Tilgængelighedserklærring',
        faIcon: '',
        link: '/Tilgængelighedserklærring',
      },
    ],
    thirdColumn: [
      {
        id: 23,
        text: 'Virk',
        faIcon: '',
        link: '/Virk',
      },
      {
        id: 24,
        text: 'Nye Regler',
        faIcon: '',
        link: '/NyeRegler',
      },
      {
        id: 25,
        text: 'Privacykompasset',
        faIcon: '',
        link: '/Privacykompasset',
      },
      {
        id: 26,
        text: 'Sikkerhedstjekket',
        faIcon: '',
        link: '/Sikkerhedstjekket',
      },
      {
        id: 27,
        text: 'Virk Assistenten',
        faIcon: '',
        link: '/VirkAssistenten',
      },
    ],
  },
}

export const accorditionData = [
  {
    id: 1,
    title: 'Hvad er en forskudsopgørelse?',
    info: 'En forskudsopgørelse er en oversigt over de tal, som Skattestyrelsen anvender til at beregne din skat ud fra. Du kan sammenligne opgørelsen med et budget, da det er et skøn over, hvad Skattestyrelsen forventer, at du har af indkomst og fradrag i det kommende år. Det er vigtigt at du retter forskudsopgørelsen til, når der sker ændringer i din økonomi Forskudsopgørelsen gøres tilgængelig for privatpersoner i november måned og beregnes med udgangspunkt i dine oplysninger fra tidligere. Dine oplysninger kan være op til to år gamle.',
  },
  {
    id: 2,
    title: 'Hvor kan jeg se min forskudsopgørelse?',
    info: ' Forskudsopgørelsen er digital og ligger tilgængelig på Skattestyrelsens hjemmeside. Du kan finde den ved at logge på TastSelv. Udover at du kan få et indblik i din forskudsopgørelse, kan du ligeledes tage et kig på din årsopgørelse. Den kigger, modsat forskudsopgørelsen, bagud og viser dine faktiske tal. Dermed kan du få et indblik i, hvad du reelt har tjent, og hvad dit fradrag og din skattesats har været det seneste år.',
  },
  {
    id: 3,
    title: 'Kan jeg ændre i min forskudsopgørelse?',
    info: 'Ja, du kan sagtens ændre i din forskudsopgørelse løbende. Det er altid en god ide at tjekke, at tallene i din forskudsopgørelse passer. På den måde undgår du at betale for lidt i skat og dermed blive opkrævet en stor restskat, når året er omme. Det er særligt en god idé at ændre i forskudsopgørelsen, hvis der sker større ændringer i din indkomst, så den passer med din nuværende indkomst.',
  },
  {
    id: 4,
    title: 'Hvor retter jeg i forskudsopgørelsen?',
    info: 'Du kan rette i din forskudsopgørelse på Skattestyrelsens hjemmeside ved at logge på TastSelv. Hvis du af visse årsager ikke har mulighed for at ændre i opgørelsen alene, kan du hente hjælp hos kommunens borgerservice eller på et bibliotek.',
  },
]

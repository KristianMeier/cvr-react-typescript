export type DanishTitleType = {
  id: number
  title: string
}

type DanishType = {
  secondRow: DanishTitleType[]
  thirdRow: DanishTitleType[]
  fourthRow: DanishTitleType[]
}

export const DataDk: DanishType = {
  secondRow: [
    { id: 1, title: 'Få hjælp til Cvr' },
    { id: 2, title: 'Skal du oprette eller ændre en virksomhed?' },
  ],
  thirdRow: [
    { id: 3, title: 'Andre databaser' },
    { id: 4, title: 'Læs mere om' },
    { id: 5, title: 'Om CVR - Det Centrale Virksomhedsregister' },
  ],
  fourthRow: [{ id: 6, title: 'Menighedsråd og reelle ejere' }],
}

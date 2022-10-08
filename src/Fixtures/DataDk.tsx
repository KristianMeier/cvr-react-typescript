type DanishTitleType = {
  id: number
  title: string
}

type DanishType = {
  secondRow: DanishTitleType[]
}

export const kkk: DanishType = {
  secondRow: [
    { id: 1, title: 'Få hjælp til Cvr' },
    { id: 2, title: 'Skal du oprette eller ændre en virksomhed?' },
  ],
}

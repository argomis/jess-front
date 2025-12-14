export type Collapsable = {
  id?: number
  title: string
  text: string
  position?: number
}

export type Prestation = {
  id?: number
  title: string
  template: 'default'
  images: string[]
  collapsables: Collapsable[]
  position?: number
  created_at?: string
  updated_at?: string
}

export const ViewButton = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  DANGER: 'danger'
} as const
export type TViewButton = typeof ViewButton[keyof typeof ViewButton]


export const SizeButton = {
  DEFAULT: 'default',
  BIG: 'big',
} as const
export type TSizeButton = typeof SizeButton[keyof typeof SizeButton]

export const WidthButton = {
  DEFAULT: 'default',
  FULL: 'full',
} as const
export type TWidthButton = typeof WidthButton[keyof typeof WidthButton]
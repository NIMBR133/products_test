import clsx from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';
import { SizeButton, TSizeButton, TViewButton, TWidthButton, ViewButton, WidthButton } from './Button.model';

import style from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>  {
  view?: TViewButton
  size?: TSizeButton
  width?: TWidthButton
  onClick?: () => void
  href?: string
  className?: string
  children: string | React.ReactNode
}

export const Button = ({ view, size, width, onClick, href, className, children, ...props }: Props) => {
  const buttonElement = (
    <button
      className={clsx(style.button, className, {
        [style.success]: view === ViewButton.SUCCESS,
        [style.danger]: view === ViewButton.DANGER,

        [style.big]: size === SizeButton.BIG,

        [style.fullWidth]: width === WidthButton.FULL
      })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )

  if (href) {
    return (
      <Link href={href}>
        {buttonElement}
      </Link>
    )
  }

  return (
    <>{buttonElement}</>
  )
}
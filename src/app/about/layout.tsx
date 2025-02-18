import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About page',
  description: 'Generated by create next app',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <p>About start</p>
      {children}
      <p>End about</p>
    </section>
  )
}

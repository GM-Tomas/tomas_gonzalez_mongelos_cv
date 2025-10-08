import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tomás González Mongelós - Resume',
  description: 'Senior Software Engineer Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css';

export const metadata = {
  title: 'ClaimVerify AI',
  description: 'Verify claims and track user credibility',
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
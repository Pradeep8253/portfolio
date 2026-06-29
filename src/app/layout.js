import './globals.css'

export const metadata = {
  title: 'Portfolio | Pradeep',
  description: 'Personal Portfolio Website - Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins overflow-hidden">{children}</body>
    </html>
  )
}

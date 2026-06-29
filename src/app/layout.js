import './globals.css'

export const metadata = {
  title: 'Portfolio | Pradeep Yadav',
  description: 'Full Stack Web Developer - React.js, Next.js, MERN Stack - Noida, India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins overflow-hidden">{children}</body>
    </html>
  )
}

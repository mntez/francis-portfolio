import "./globals.css"

export const metadata = {
  title: "Portfolio",
  description: "Template based layout",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}

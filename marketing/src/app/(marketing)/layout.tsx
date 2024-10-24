
//Components
import DesktopNav from '@/components/shared/navigation/desktop-nav'
import Footer from '@/components/shared/footer/footer'
import AuthProvider from '@/app/AuthProvider'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <DesktopNav/>
          <main>
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    )
  }
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout({ children }) {
    return (
        <>
            <Header />
            <main className='padbody'>
                {children}
            </main>
            <Footer />
        </>
    )
}
import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank">
                            <img src='/images/fb.png' alt='facebook icon' />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank">
                            <img src='/images/tw.png' alt='twitter icon' />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank">
                            <img src='/images/ig.png' alt='instagram icon' />
                        </a>
                    </li>
                </ul>
            </section>
            <section className='logo'>
                <img src="/images/logo.png" alt="logo" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura © Ícaro Vieira
                </p>
            </section>
        </footer>
    )
}

export default Rodape
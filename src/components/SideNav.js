import about from '../assets/about.jpg'


function SideNav(){
    return (
        <header>
                <div class="user">
                    <img src={about} alt="Benedicta"/>
                    <h3 class="name">Benedicta Bervel</h3>
                    <p class="post">Software Engineer</p>
                </div>

                <nav class="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#registration">Registration</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

            </header>
    )
}

export default SideNav
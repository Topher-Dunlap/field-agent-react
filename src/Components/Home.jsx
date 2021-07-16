import React from 'react';
import UserLogin from './UserLogin';
import Registration from './Registration';
import Agents from './Agents';
import '../css/reset.css';
import '../css/main.css';
import '../css/home.css';

export default function Home() {

    return(
        <body>
        <div className="container">
            <header>
                <div className="wrapper">
                    <div className="typing-demo">
                        <h1>Field Agent.</h1>
                    </div>
                </div>
            </header>
            <main>
                <article>
                    <h2>Home</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare diam neque. Cras semper
                        nisi sed
                        ante placerat pulvinar. Nunc lacinia, ante nec tristique hendrerit, mauris est accumsan ante,
                        non
                        bibendum arcu libero et neque. Cras consequat neque tristique quam pretium, eget rutrum ligula
                        vestibulum. Integer sagittis odio eu mauris pulvinar sagittis. Etiam eros tortor, finibus ac
                        tellus non,
                        congue mollis odio. Quisque lacinia diam lacus, imperdiet vestibulum justo pretium id. Donec
                        imperdiet
                        luctus orci quis scelerisque.</p>
                    <p>Sed euismod pretium purus. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac
                        turpis egestas. Nunc id odio tortor. Ut vulputate id diam vel vestibulum. Proin sed porta purus.
                        Etiam
                        rutrum ultrices elit, id fermentum purus posuere tempor.</p>
                </article>
            </main>
            <aside>
                <h3>Featured Agent</h3>
                <p>Aliquam maximus augue in lacus tincidunt semper. Mauris a felis lectus. Proin lacinia massa id mauris
                    dignissim vulputate. Nullam in nisi sapien. Quisque eu turpis urna.</p>
            </aside>
        </div>
        </body>
    )
}
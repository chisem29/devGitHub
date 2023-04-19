import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.sass'

/*
  https://demo.w3layouts.com/demos_new/template_demo/25-01-2018/downy_shoes-demo_Free/1870304271/web/index.html

  vans :
    https://avatars.mds.yandex.net/i?id=3764eac6b90573f56c2f1189168390b41bdd21a4-5175011-images-thumbs&n=13
    https://avatars.mds.yandex.net/i?id=be4279d3414b2e394b905447f0278bd7d47aac91-8439163-images-thumbs&n=13
    https://avatars.mds.yandex.net/i?id=d642715cc7cea4db051abcdd150e4969-4614052-images-thumbs&n=13
*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


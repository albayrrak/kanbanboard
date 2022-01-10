# Rast Mobile Kanban Task Proje Çalışması

## Proje Nasıl Çalışır ? 
Repositories'den forkladıktan sonra vscode terminal satırına `git clone https://github.com/'Buraya kendi kullanıcı adınız'/kanbanboard.git`  projeyi klonlayabilirsiniz.<br/>
Daha sonra yarn start veya npm start ile projeyi çalıştırın.



## Proje tanıtım ?
**Öncelikle proje 2 aşamadan oluşuyor.**  
1-) "Login" sayfası <br />
2-) Kanbanboard sayfayı.



## Nasıl Login Girişi Yaparım? ##
Giriş yapabilmek için `https://jsonplaceholder.typicode.com/users` API'sinden projeye 10 tane user çektim. <br />
Login sayfasındaki **Kullanıcı adı** ve **Email** girişi için üyeliklere yukarıdaki endpointten **username** ve **email** alabilirsiniz. (Örn: username: Bret, email:Sincere@april.biz --- username: Antonette, email: Shanna@melissa.tv) <br/>
Yukarıdaki endpointten aldığınız username ve emaillerle giriş yaptıktan sonra sizi kişisel kanbanboard sayfası karşılayacak.



## Kanbanboard'da neler var? ##
Kanbanboard'da 4 adet Task bulunmakta./ (Backlog, Todo, Inprogress ve Done)
Her bir Task'a ayrı ayrı card eklenebilmektedir.
Her bir karta ayrı ayrı renk verilebilmektedir.
Eklenilen kartlar user'ın localStorage'inde tutulmaktadır.

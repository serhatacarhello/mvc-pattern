# React MVC Modeli Kullanımı

React projelerini organize etmek ve sürdürülebilir bir şekilde geliştirmek için Model-View-Controller (MVC) tasarım desenini kullanmak, projenizin daha düzenli ve anlaşılır olmasına yardımcı olabilir. İşte React projelerinde MVC modelini kullanmanın temel prensipleri:

## Model (Veri Katmanı)

Model, uygulamanızın veri yapısını temsil eder ve verilerin alınması, saklanması, güncellenmesi ve işlenmesiyle ilgilenir. React projelerinde veri genellikle API çağrıları veya kullanıcı etkileşimleri yoluyla elde edilir. Örnek bir React Model bileşeni şu şekilde olabilir:

```javascript
import { useState } from 'react'

function UserModel() {
  const [users, setUsers] = useState([])

  async function fetchUsers() {
    // API'den kullanıcı verilerini alın ve users state'ini güncelleyin
  }

  return {
    users,
    fetchUsers,
  }
}

export default UserModel
```

## View (Görünüm Katmanı)

View, kullanıcı arayüzünü temsil eder. Verileri kullanıcıya gösterir. React projelerinde View katmanı genellikle bileşenler tarafından temsil edilir. İşte örnek bir React View bileşeni:

```javascript
import React from 'react'

function UserListView({ users }) {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserListView
```

## Controller (Kontrol Katmanı)

Controller, Model ile View arasındaki etkileşimi düzenler. Kullanıcı etkileşimlerini dinler, Model'i günceller ve View'i güncel verilerle yeniden çizer. React projelerinde, Controller genellikle bileşenlerin ve işlevlerin kullanıldığı yerdir. İşte bir React Controller bileşeni örneği:

```javascript
import React, { useEffect } from 'react'
import UserModel from './UserModel'
import UserListView from './UserListView'

function UserController() {
  const userModel = UserModel()
  useEffect(() => {
    userModel.fetchUsers()
  }, [])

  return <UserListView users={userModel.users} />
}

export default UserController
```

Yukarıdaki örnekte, `UserController` bileşeni `UserModel`'i kullanarak verileri çeker ve `UserListView` bileşenine bu verileri geçirir. Bu şekilde, Model-View-Controller (MVC) modelini kullanarak React projelerinizi daha organize ve sürdürülebilir hale getirebilirsiniz.

React te daha çok bileşenler arası iletişimi ve veri yönetimini düzenlemek için bu temel MVC kavramları kullanılır.

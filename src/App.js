// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete} from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
// in src/App.js
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import authClient from './authClient';

import Dashboard from './Dashboard';


const App = () => (
    <Admin authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;

import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path : '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path : 'members', component: MemberListComponent},
            { path : 'messages', component: MessagesComponent},
            { path : 'lists', component: ListsComponent},
        ]
    },
    { path : '**', redirectTo: '', pathMatch: 'full'},
    // wildcard route, it will redirect them to the 'home' path
];
    // when the user clicks a link or enters a url, the router will try and match with these routes
    // and if nothing matches it will use a wildcard and redirect to home
    // the oterding is important because if the wildcard was at the top then it would always
    // be the wildcard that is chosen

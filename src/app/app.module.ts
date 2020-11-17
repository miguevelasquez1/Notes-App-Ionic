import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { NotesService } from '../services/notes.service';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NotesAppComponent
  ],
  providers: [
    NotesAppComponent,
    NotesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
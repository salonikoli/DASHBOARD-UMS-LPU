import { Routes } from '@angular/router';
import { Intro } from './intro/intro';
import { Form } from './form/form';

export const routes: Routes = [
	{ path: '', redirectTo: 'intro', pathMatch: 'full' },
	{ path: 'intro', component: Intro },
	{ path: 'form', component: Form },
	{ path: '**', redirectTo: 'intro' }
];
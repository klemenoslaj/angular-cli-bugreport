import * as angular from 'angular';

import { appNg1Component } from './app-ng1.component';

export const appNg1Module = angular.module('angularJSModule', [])
    .component('appRootNg1', appNg1Component)
    .name;

import angular from 'angular';
// import './app.garden-card';

import { PlannerController } from './controllers/planner.controller';
import { PlannerService } from './services/planner.service';
import { NavService } from '../app.nav/services/navcard.service';

angular
  .module('app.planner', []) //'app.garden-card'
  .controller('PlannerController', PlannerController)
  .service('NavService', NavService)
  .service('PlannerService', PlannerService)
;
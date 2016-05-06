/**
 * Created by endiny on 20/04/16.
 */

import authProvider from './authProvider.service';
import magazineProvider from './magazineProvider.service';
import cartProvider from './cartProvider.service';

angular.module('services', [])
    .service('authProvider', authProvider)
    .service('magazineProvider', magazineProvider)
    .service('cartProvider', cartProvider);
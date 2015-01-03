(function() {
  'use strict';
  angular.module('ownersApp.routes', ['ui.router']).config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('owners', {
        url: '/owners',
        controller: 'ownersCtrl',
        templateUrl: ''
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL293bmVycy9jb2ZmZWUvY29uZmlnL293bmVyc1J0ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFBLFlBQUEsQ0FBQTtBQUFBLEVBR0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxrQkFBZixFQUFtQyxDQUFDLFdBQUQsQ0FBbkMsQ0FDQyxDQUFDLE1BREYsQ0FDUztJQUFDLGdCQUFELEVBQW1CLFNBQUMsY0FBRCxHQUFBO2FBQzFCLGNBQ0MsQ0FBQyxLQURGLENBQ1EsUUFEUixFQUVFO0FBQUEsUUFBQSxHQUFBLEVBQUssU0FBTDtBQUFBLFFBQ0EsVUFBQSxFQUFZLFlBRFo7QUFBQSxRQUVBLFdBQUEsRUFBYSxFQUZiO09BRkYsRUFEMEI7SUFBQSxDQUFuQjtHQURULENBSEEsQ0FBQTtBQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL293bmVycy9qcy9jb25maWcvb3duZXJzUnRlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4jIG91ciBvd25lciByb3V0ZXNcclxuYW5ndWxhci5tb2R1bGUgJ293bmVyc0FwcC5yb3V0ZXMnLCBbJ3VpLnJvdXRlciddXHJcblx0LmNvbmZpZyBbJyRzdGF0ZVByb3ZpZGVyJywgKCRzdGF0ZVByb3ZpZGVyKSAtPlxyXG5cdFx0JHN0YXRlUHJvdmlkZXJcclxuXHRcdFx0LnN0YXRlICdvd25lcnMnLFxyXG5cdFx0XHRcdHVybDogJy9vd25lcnMnXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ293bmVyc0N0cmwnXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcnXHJcblx0XHRdIl19
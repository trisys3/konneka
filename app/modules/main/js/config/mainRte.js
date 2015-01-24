(function() {
  'use strict';
  exports.routes = {
    deps: 'ui.router',
    def: ['$stateProvider', function($stateProvider) {}]
  };

  exports.location = {
    def: [
      '$locationProvider', function($locationProvider) {
        return $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
      }
    ]
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL21haW4vY29mZmVlL2NvbmZpZy9tYWluUnRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEVBQUEsWUFBQSxDQUFBO0FBQUEsRUFFQSxPQUFPLENBQUMsTUFBUixHQUFpQjtBQUFBLElBQ2YsSUFBQSxFQUFNLFdBRFM7QUFBQSxJQUVmLEdBQUEsRUFBSyxDQUFDLGdCQUFELEVBQW1CLFNBQUMsY0FBRCxHQUFBLENBQW5CLENBRlU7R0FGakIsQ0FBQTs7QUFBQSxFQVNBLE9BQU8sQ0FBQyxRQUFSLEdBQ0U7QUFBQSxJQUFBLEdBQUEsRUFBSztNQUFDLG1CQUFELEVBQXNCLFNBQUMsaUJBQUQsR0FBQTtlQUV6QixpQkFBaUIsQ0FBQyxTQUFsQixDQUNFO0FBQUEsVUFBQSxPQUFBLEVBQVMsSUFBVDtBQUFBLFVBQ0EsV0FBQSxFQUFhLEtBRGI7U0FERixFQUZ5QjtNQUFBLENBQXRCO0tBQUw7R0FWRixDQUFBO0FBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvbWFpbi9qcy9jb25maWcvbWFpblJ0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydHMucm91dGVzID0ge1xyXG4gIGRlcHM6ICd1aS5yb3V0ZXInXHJcbiAgZGVmOiBbJyRzdGF0ZVByb3ZpZGVyJywgKCRzdGF0ZVByb3ZpZGVyKSAtPlxyXG5cclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydHMubG9jYXRpb24gPSBcclxuICBkZWY6IFsnJGxvY2F0aW9uUHJvdmlkZXInLCAoJGxvY2F0aW9uUHJvdmlkZXIpIC0+XHJcbiAgICAjIG1ha2UgVVJMJ3MgY29tcGx5IHdpdGggSFRNTDUgcnVsZXNcclxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZVxyXG4gICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgIHJlcXVpcmVCYXNlOiBmYWxzZSAjIGlmIHdlIG5lZWQgdG8gc3VwcG9ydCBJRTksIHJlbW92ZSB0aGlzIGxpbmVcclxuICBdXHJcblxyXG4jICMgcm91dGVzIGZvciBvdXIgbWFpbiBtb2R1bGVcclxuIyBtYWluUnRlID0gYW5ndWxhci5tb2R1bGUgJ2lvdEFwcC5yb3V0ZXMnLCBbJ3VpLnJvdXRlciddXHJcbiMgXHQuY29uZmlnIFsnJHN0YXRlUHJvdmlkZXInLCAoJHN0YXRlUHJvdmlkZXIpIC0+XHJcbiNcdFx0XHJcbiMgXHRdXHJcbiNcclxuIyBcdC5jb25maWcgWyckbG9jYXRpb25Qcm92aWRlcicsICgkbG9jYXRpb25Qcm92aWRlcikgLT5cclxuIyBcdFx0IyBtYWtlIFVSTCdzIGNvbXBseSB3aXRoIEhUTUw1IHJ1bGVzXHJcbiMgXHRcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZVxyXG4jIFx0XHRcdGVuYWJsZWQ6IHRydWVcclxuIyBcdFx0XHRyZXF1aXJlQmFzZTogZmFsc2UgIyBpZiB3ZSBuZWVkIHRvIHN1cHBvcnQgSUU5LCByZW1vdmUgdGhpcyBsaW5lXHJcbiMgXHRdXHJcbiNcclxuIyBtb2R1bGUuZXhwb3J0cyA9IG1haW5SdGUiXX0=